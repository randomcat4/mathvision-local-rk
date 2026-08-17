import { j as $, aj as g, ak as l, al as y } from "./index-BM3ZINIl.js";
import { g as i } from "./authFetch-DXjDztUP.js";
const U = ({
  format: t = "dateTime",
  ...a
}) => {
  if (!a.value) {
    return "-";
  }
  const e = new Date(a.value);
  if (isNaN(e.getTime())) {
    throw new Error("Invalid date value provided");
  }
  let n;
  const o = e.getFullYear();
  const m = String(e.getMonth() + 1).padStart(2, "0");
  const h = String(e.getDate()).padStart(2, "0");
  const s = e.getHours();
  const d = String(e.getMinutes()).padStart(2, "0");
  const p = s >= 12 ? "PM" : "AM";
  const r = f();
  const u = String(r ? s % 12 || 12 : s).padStart(2, "0");
  switch (t) {
    case "dateTime":
      n = `${o}-${m}-${h} ${u}:${d} ${r ? p : ""}`.trim();
      break;
    case "date":
      n = `${o}-${m}-${h}`;
      break;
    case "time":
      n = `${u}:${d} ${r ? p : ""}`.trim();
      break;
  }
  return <time {...a} dateTime={e.toISOString()}>{n}</time>;
};
function f() {
  const t = new Intl.DateTimeFormat(undefined, {
    hour: "numeric"
  }).resolvedOptions();
  if (t.hourCycle) {
    return t.hourCycle === "h11" || t.hourCycle === "h12";
  } else if (typeof t.hour12 == "boolean") {
    return t.hour12;
  } else {
    return false;
  }
}
const A = g;
class b extends Error {
  constructor() {
    super("Attachment uploads are unavailable.");
    this.name = "AttachmentUploadUnavailableError";
  }
}
const w = (t, a = A) => `https://app.mathvision.ai/${a}/${t}`;
const S = t => ({
  id: t.attachment_id,
  name: t.name,
  contentType: t.content_type,
  kind: t.kind,
  sizeBytes: t.size_bytes,
  sha256: t.sha256,
  status: t.status,
  createdAt: t.created_at
});
const E = async t => {
  if (t.size === 0) {
    throw new Error(`'${t.name}' is empty.`);
  }
  const a = new FormData();
  a.append("file", t);
  const e = await fetch(w("attachments"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: await i()
    },
    body: a
  });
  if (!e.ok) {
    throw e.status === 404 || e.status === 405 ? new b() : l(e);
  }
  const n = S(await e.json());
  if (n.status !== "ready") {
    throw new Error("Attachment upload did not complete.");
  }
  return n;
};
const c = async (t, a, e = A) => {
  const n = await fetch(w(t, e), {
    headers: {
      Accept: "application/octet-stream",
      ...(a ? {
        Authorization: a
      } : {})
    }
  });
  if (!n.ok) {
    throw l(n);
  }
  const o = await n.blob();
  if (o.size === 0) {
    throw new Error("Attachment content was empty.");
  }
  return o;
};
const v = async t => c(`attachments/${encodeURIComponent(t)}/content`, await i());
const T = async (t, a, e) => c(`users/${encodeURIComponent(t)}/chats/${encodeURIComponent(a)}/attachments/${encodeURIComponent(e)}`, await i(), y);
const D = (t, a) => c(`share/${encodeURIComponent(t)}/attachments/${encodeURIComponent(a)}`);
export { b as A, U as D, T as a, v as b, D as g, S as t, E as u };
