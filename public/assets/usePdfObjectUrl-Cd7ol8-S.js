import { r as o } from "./index-BM3ZINIl.js";
const c = (e) => {
    const r = atob(e),
      n = new Uint8Array(r.length);
    for (let t = 0; t < r.length; t += 1) n[t] = r.charCodeAt(t);
    return new Blob([n], { type: "application/pdf" });
  },
  s = (e) => {
    const [r, n] = o.useState(null);
    return (
      o.useEffect(() => {
        if (!e) {
          n(null);
          return;
        }
        const t = URL.createObjectURL(c(e));
        return (
          n(t),
          () => {
            URL.revokeObjectURL(t);
          }
        );
      }, [e]),
      r
    );
  };
export { s as u };
