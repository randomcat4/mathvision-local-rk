export type AppLanguage = "en" | "zh-CN";

const STORAGE_KEY = "mathvision:language:v1";
const LANGUAGE_EVENT = "mathvision:language-change";

const ZH_TEXT: Record<string, string> = {
  "Account menu": "账户菜单",
  "Add notebook": "新建笔记本",
  "Archived chats": "已归档聊天",
  "Attach files": "添加附件",
  Auto: "自动",
  Bookmarks: "书签",
  Billing: "账单",
  "Billing is not available for this account yet.": "此本地账户暂不提供账单功能。",
  Cancel: "取消",
  chat: "聊天",
  Chats: "聊天",
  "Chat workspace toolbar": "聊天工作区工具栏",
  "Chats and notebooks will appear here.": "聊天和笔记本会显示在这里。",
  Close: "关闭",
  "Close notification": "关闭通知",
  "Close panel": "关闭面板",
  Confirm: "确认",
  "Context usage unavailable": "上下文用量不可用",
  Continue: "继续",
  Copy: "复制",
  Create: "创建",
  Delete: "删除",
  "Display name": "显示名称",
  Edit: "编辑",
  English: "English",
  Explorer: "资源管理器",
  "Explorer items will appear here.": "项目会显示在这里。",
  "Explorer view options": "资源管理器视图选项",
  "Filter Explorer": "筛选资源管理器",
  Help: "帮助",
  "Help links": "帮助链接",
  "Hide variable highlights in this chat": "隐藏本聊天中的变量高亮",
  "LaTeX project": "LaTeX 项目",
  Language: "语言",
  "Let's prove something together.": "让我们一起证明点什么。",
  "Local User": "本地用户",
  Logout: "退出登录",
  "Manage shared chats": "管理共享聊天",
  More: "更多",
  "More actions": "更多操作",
  "New chat": "新聊天",
  "New folder": "新建文件夹",
  "New LaTeX project": "新建 LaTeX 项目",
  "Next Steps": "下一步",
  Notebook: "笔记本",
  "Operation: Auto selected mathvision mode": "操作：自动选择数学助手模式",
  Personalization: "个性化",
  Recents: "最近使用",
  Rename: "重命名",
  "Research problems": "研究问题",
  "Resize sidebar": "调整侧边栏宽度",
  Restore: "恢复",
  Retry: "重试",
  Run: "运行",
  "Run Auto": "自动运行",
  Save: "保存",
  Search: "搜索",
  Settings: "设置",
  Share: "共享",
  "Show archived chats": "查看已归档聊天",
  "Take a guided tour": "开始引导",
  "Theme: Regular": "主题：常规",
  "User settings": "用户设置",
  Unavailable: "不可用",
  "We couldn’t complete that request. Please try again.": "请求未能完成，请重试。",
  "Workspace actions": "工作区操作",
  "Workspace explorer": "工作区资源管理器",
  "Current chat path": "当前聊天路径",
  "Chat tools": "聊天工具",
  "Chat operation": "聊天操作",
  "Message input": "消息输入框",
  "mathvision mode": "数学助手模式",
  "Choose theme": "选择主题",
  "Choose language": "选择语言",
  "Launching Math Vision": "正在启动数学工作台",
  "Warming up your workspace.": "正在准备工作区。",
  "Math User": "数学用户",
  "Theme:": "主题：",
  Regular: "常规",
  Dark: "深色",
  Light: "浅色",
  System: "跟随系统",
  Midnight: "午夜",
  Paper: "纸张",
  Security: "安全",
  "Reset password": "重置密码",
  "Manage sign-in security": "管理登录安全",
  "Save changes": "保存更改",
  "Profile saved.": "个人资料已保存。",
  "Choose the name shown in your account menu and shared workspace activity.":
    "选择在账户菜单和共享工作区活动中显示的名称。",
  "Manage password and account security options.": "管理密码和账户安全选项。",
};

const GAO_ZH_TEXT: Record<string, string> = {
  "Answer PDF did not compile.": "答案 PDF 未能编译。",
  "Answer notes PDF (all rounds)": "答案笔记 PDF（全部轮次）",
  "Branch": "创建分支",
  "Branch chat": "创建聊天分支",
  "Branch from response": "从本回复创建分支",
  "Completed": "已完成",
  "Current research PDF preview": "当前研究 PDF 预览",
  "Copy original prompt": "复制原始任务",
  "Display full graph": "查看完整工作流图",
  "Edit chat title": "编辑聊天标题",
  "Mark response as helpful": "标记回复有帮助",
  "Mark response as not helpful": "标记回复无帮助",
  "Minimize message pair": "收起本轮消息",
  "Mode: mathvision": "模式：RK",
  "Pro chat round history": "RK 研究轮次历史",
  "Reasoning": "推理记录",
  "Research notes PDF (this round)": "研究笔记 PDF（本轮）",
  "Research notes PDF did not compile.": "研究笔记 PDF 未能编译。",
  "Preview answer PDF": "预览答案 PDF",
  "Preview research notes PDF": "预览研究笔记 PDF",
  "Reveal active chat in explorer": "在资源管理器中定位当前聊天",
  "Review models are still working on this round.": "本轮没有保存审阅模型摘要。",
  "Review team summaries": "审阅组摘要",
  "Round files": "本轮文件",
  "Save response": "保存回复",
  "Try again": "重试",
  "User queries": "用户任务",
};

const GAO_ZH_PATTERNS: ReadonlyArray<[RegExp, (match: RegExpMatchArray) => string]> = [
  [/^Answer (\d+)$/u, (match) => `回答 ${match[1]}`],
  [/^Context usage (\d+)%$/u, (match) => `上下文用量 ${match[1]}%`],
  [/^Chat actions for (.+)$/u, (match) => `${match[1]}的聊天操作`],
  [/^Last edited (.+)$/u, (match) => `最后编辑于 ${match[1]}`],
  [/^Question (\d+)$/u, (match) => `任务 ${match[1]}`],
  [/^Round (\d+)$/u, (match) => `第 ${match[1]} 轮`],
  [/^Round (\d+)\/(\d+)$/u, (match) => `第 ${match[1]}/${match[2]} 轮`],
  [/^(\d+) of (\d+) workflow steps complete$/u, (match) => `已完成 ${match[1]}/${match[2]} 个工作流节点`],
];

const ZH_PATTERNS: ReadonlyArray<[RegExp, (match: RegExpMatchArray) => string]> = [
  [/^Theme: (.+)$/u, (match) => `主题：${translateTheme(match[1] ?? "")}`],
  [/^Choose theme\. Current theme: (.+)$/u, (match) => `选择主题。当前主题：${translateTheme(match[1] ?? "")}`],
  [/^New chat(?: \d+)?$/u, (match) => match[0].replace("New chat", "新聊天")],
  [/^(\d+)\/([\d,]+) tokens$/u, (match) => `${match[1]}/${match[2]} 个词元`],
];

const THEME_NAMES: Record<string, string> = {
  Regular: "常规",
  Dark: "深色",
  Light: "浅色",
  System: "跟随系统",
  Midnight: "午夜",
  Paper: "纸张",
};

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let observer: MutationObserver | undefined;
let applying = false;

function translateTheme(theme: string): string {
  return THEME_NAMES[theme] ?? theme;
}

export function translateUiText(text: string, language: AppLanguage): string {
  if (language === "en") return text;
  if (typeof window !== "undefined" && window.location.pathname === "/chats/gao-original-workflow") {
    const gaoExact = GAO_ZH_TEXT[text];
    if (gaoExact !== undefined) return gaoExact;
    for (const [pattern, replacement] of GAO_ZH_PATTERNS) {
      const match = text.match(pattern);
      if (match) return replacement(match);
    }
  }
  const exact = ZH_TEXT[text];
  if (exact !== undefined) return exact;
  for (const [pattern, replacement] of ZH_PATTERNS) {
    const match = text.match(pattern);
    if (match) return replacement(match);
  }
  return text;
}

export function getLanguage(): AppLanguage {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "zh-CN") return saved;
  return window.navigator.languages.some((language) => language.toLowerCase().startsWith("zh"))
    ? "zh-CN"
    : "en";
}

function emitLanguageChange(): void {
  window.dispatchEvent(new Event(LANGUAGE_EVENT));
}

export function setLanguage(language: AppLanguage): void {
  window.localStorage.setItem(STORAGE_KEY, language);
  applyDocumentLanguage(language);
  emitLanguageChange();
}

export function subscribeLanguage(listener: () => void): () => void {
  window.addEventListener(LANGUAGE_EVENT, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(LANGUAGE_EVENT, listener);
    window.removeEventListener("storage", listener);
  };
}

interface SyncExternalStoreReact {
  useSyncExternalStore(
    subscribe: (listener: () => void) => () => void,
    getSnapshot: () => AppLanguage,
    getServerSnapshot?: () => AppLanguage,
  ): AppLanguage;
}

export function useLanguage(react: SyncExternalStoreReact) {
  const language = react.useSyncExternalStore(subscribeLanguage, getLanguage, () => "en");
  return {
    language,
    label: language === "zh-CN" ? "简体中文" : "English",
    setLanguage,
  } as const;
}

function translateTextNode(node: Text, language: AppLanguage): void {
  const current = node.nodeValue ?? "";
  if (!current.trim()) return;
  const source = originalText.get(node) ?? current;
  if (!originalText.has(node)) originalText.set(node, source);
  const leading = source.match(/^\s*/u)?.[0] ?? "";
  const trailing = source.match(/\s*$/u)?.[0] ?? "";
  const translated = translateUiText(source.trim(), language);
  const next = `${leading}${translated}${trailing}`;
  if (current !== next) node.nodeValue = next;
}

const TRANSLATED_ATTRIBUTES = ["aria-label", "placeholder", "title"] as const;

function translateElementAttributes(element: Element, language: AppLanguage): void {
  let sources = originalAttributes.get(element);
  for (const attribute of TRANSLATED_ATTRIBUTES) {
    const current = element.getAttribute(attribute);
    if (current === null) continue;
    if (!sources) {
      sources = new Map();
      originalAttributes.set(element, sources);
    }
    const source = sources.get(attribute) ?? current;
    if (!sources.has(attribute)) sources.set(attribute, source);
    const next = translateUiText(source, language);
    if (current !== next) element.setAttribute(attribute, next);
  }
}

function translateTree(root: Node, language: AppLanguage): void {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, language);
    return;
  }
  if (!(root instanceof Element) && !(root instanceof Document)) return;
  if (root instanceof Element) translateElementAttributes(root, language);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) translateTextNode(current as Text, language);
    else translateElementAttributes(current as Element, language);
    current = walker.nextNode();
  }
}

export function applyDocumentLanguage(language = getLanguage()): void {
  if (typeof document === "undefined" || applying) return;
  applying = true;
  try {
    document.documentElement.lang = language;
    translateTree(document.body, language);
  } finally {
    applying = false;
  }
}

export function initializeLocalization(): void {
  if (typeof document === "undefined" || observer) return;
  applyDocumentLanguage();
  observer = new MutationObserver((mutations) => {
    if (applying) return;
    const language = getLanguage();
    applying = true;
    try {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") translateElementAttributes(mutation.target as Element, language);
        for (const node of mutation.addedNodes) translateTree(node, language);
      }
    } finally {
      applying = false;
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [...TRANSLATED_ATTRIBUTES],
  });
}
