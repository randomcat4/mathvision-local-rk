import { D as e, U as o } from "./index-BM3ZINIl.js";
const i = 30,
  a = async () => {
    var r;
    if (!o.isLoggedIn()) throw new Error("Authentication is required for this request.");
    const t = (r = e.tokenParsed) == null ? void 0 : r.exp;
    if (t === void 0) throw new Error("Authentication token is missing an expiration.");
    const n = Math.floor(Date.now() / 1e3);
    t - n < i && (await o.updateToken(() => {}));
  },
  c = async () => {
    if ((await a(), !e.token))
      throw new Error("Authentication token was not available after refresh.");
    return `Bearer ${e.token}`;
  };
export { c as g };
