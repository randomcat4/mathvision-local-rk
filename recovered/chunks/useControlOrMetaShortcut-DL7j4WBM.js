import { r } from "./index-BM3ZINIl.js";
const a = ({ enabled: u = !0, keyCode: o = "Enter", onShortcut: s }) => {
  const n = (Array.isArray(o) ? o : [o]).map((e) => e.trim()).join("\0"),
    c = r.useMemo(() => {
      const e = n.split("\0");
      if (!n || e.some((t) => !t))
        throw new Error("Control/meta shortcut key code must not be blank.");
      return e;
    }, [n]),
    d = r.useRef(s);
  (r.useEffect(() => {
    d.current = s;
  }, [s]),
    r.useEffect(() => {
      if (!u || typeof document > "u") return;
      const e = (t) => {
        t.defaultPrevented ||
          t.isComposing ||
          t.repeat ||
          t.altKey ||
          t.shiftKey ||
          !c.includes(t.code) ||
          (!t.ctrlKey && !t.metaKey) ||
          (t.preventDefault(), d.current());
      };
      return (
        document.addEventListener("keydown", e),
        () => {
          document.removeEventListener("keydown", e);
        }
      );
    }, [u, c]));
};
export { a as u };
