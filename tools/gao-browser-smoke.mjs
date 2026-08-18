const targets = await fetch("http://127.0.0.1:9333/json").then((response) => response.json());
const target = targets.find((item) => item.url.includes("/chats/gao-original-workflow"));

if (!target?.webSocketDebuggerUrl) {
  throw new Error("没有找到 Gao 工作流页面的 Chrome 调试目标。");
}

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let messageId = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  const id = ++messageId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitFor(expression, timeout = 15_000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await evaluate(expression)) return;
    await wait(250);
  }
  throw new Error(`等待页面状态超时：${expression}`);
}

await send("Runtime.enable");
await send("Page.enable");
await send("Page.reload", { ignoreCache: true });
await waitFor("document.readyState === 'complete'");
await wait(2_000);

const initialText = await evaluate("document.body.innerText");
if (!initialText.includes("Gao") && !initialText.includes("高")) {
  const diagnostics = await evaluate("({ title: document.title, url: location.href, text: document.body.innerText.slice(0, 1000), html: document.body.innerHTML.slice(0, 1000) })");
  throw new Error(`Gao 页面没有完成渲染：${JSON.stringify(diagnostics)}`);
}
const graphOpenedAt = performance.now();
const clickedGraph = await evaluate(`(() => {
  const buttons = [...document.querySelectorAll('button')];
  const button = buttons.find((item) =>
    item.innerText.includes('完整工作流图') ||
    item.innerText.includes('研究工作流') ||
    item.innerText.includes('workflow graph')
  );
  button?.click();
  return Boolean(button);
})()`);
if (!clickedGraph) {
  const buttons = await evaluate("[...document.querySelectorAll('button')].map((item) => item.innerText.trim()).filter(Boolean)");
  throw new Error(`没有找到研究工作流按钮：${JSON.stringify(buttons)}`);
}

await waitFor("document.body.innerText.includes('176 个节点') && document.body.innerText.includes('318 条连接')", 20_000);
const graphOpenMilliseconds = Math.round(performance.now() - graphOpenedAt);

async function clickButtonContaining(label) {
  const clicked = await evaluate(`(() => {
    const label = ${JSON.stringify(label)};
    const buttons = [...document.querySelectorAll('button')];
    const button = buttons.find((item) => item.innerText.includes(label));
    button?.click();
    return Boolean(button);
  })()`);
  if (!clicked) throw new Error(`没有找到按钮：${label}`);
  await wait(350);
}

const clickedLedger = await evaluate(`(() => {
  const node = document.querySelector('[data-id="ledger-u001"]');
  node?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  return Boolean(node);
})()`);
if (!clickedLedger) throw new Error("没有找到 U1 账本节点。");
await waitFor("document.body.innerText.includes('相关研究思路') && document.body.innerText.includes('研究问题')");
const ledgerRecordVisible = await evaluate("document.body.innerText.includes('账本整理 · 节点载荷与研究账本整理')");

const clickedP9 = await evaluate(`(() => {
  const node = document.querySelector('[data-id="p9-h2e"]');
  node?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  return Boolean(node);
})()`);
if (!clickedP9) throw new Error("没有找到 P9-H2E 节点。");
await waitFor("document.body.innerText.includes('RK Pro')");

const p9Text = await evaluate("document.body.innerText");
const markdownLabels = await evaluate(`[...document.querySelectorAll('button')]
  .map((item) => item.innerText.trim())
  .filter((text) => text.startsWith('打开 ') && text.endsWith('.md'))`);

if (!markdownLabels.includes("打开 p9h2e01r.md") || !markdownLabels.includes("打开 p9h2e01v.md")) {
  throw new Error(`Markdown 按钮不符合预期：${JSON.stringify(markdownLabels)}`);
}

await clickButtonContaining("打开 p9h2e01r.md");
await waitFor("document.body.innerText.includes('p9h2e01r.md')");
await wait(500);
const markdownDialogText = await evaluate(`(() => {
  const dialogs = [...document.querySelectorAll('[role="dialog"]')];
  return dialogs.at(-1)?.innerText ?? '';
})()`);

const result = {
  route: await evaluate("location.pathname"),
  initialChineseShell: initialText.includes("任务") && initialText.includes("回答"),
  graphOpenMilliseconds,
  graphCountsVisible: p9Text.includes("176 个节点") && p9Text.includes("318 条连接"),
  ledgerRecordVisible,
  realProTranscriptVisible: p9Text.includes("RK Pro"),
  markdownLabels,
  markdownOpenedInApp: markdownDialogText.includes("p9h2e01r.md") && markdownDialogText.length > 200,
  markdownDialogLength: markdownDialogText.length,
};

console.log(JSON.stringify(result, null, 2));
socket.close();
