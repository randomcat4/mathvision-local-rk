import { L as a } from "./useLatexQueries-DBpKOPUv.js";
import { g as o } from "./latexNaming-BAjxoZ-G.js";
import { g as c } from "./cache-BNzcfneg.js";
const i = /^[ \t]*```(?:latex|tex)?[ \t]*\r?\n([\s\S]*?)\r?\n```[ \t]*$/i,
  g = (t) => {
    var r;
    return (((r = i.exec(t)) == null ? void 0 : r[1]) ?? t).replace(
      /\r\n?/g,
      `
`,
    );
  },
  s = (t) => {
    const e = t ? o(t) : null;
    return (
      e ||
      `Writeup ${new Date()
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z")}`
    );
  },
  x = (t) => `${s(t)}${a}`,
  L = ({ chatId: t, messageIndex: e, source: r }) => {
    const n = c(r);
    return ["chat", t ?? "unknown", "assistant", String(e), "writeup", n].join(":");
  };
export { s as a, L as b, g as e, x as g };
