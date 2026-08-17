import { e as a, _ as E } from "./pdfDocument-V1r75ju6.js";
import { r as e } from "./index-BM3ZINIl.js";
const v = ({ loadErrorMessage: f = "Could not load PDF.", onPageCountChange: c, pdfUrl: i }) => {
  const r = e.useRef(c),
    [p, n] = e.useState(null),
    [D, o] = e.useState(!1),
    [_, d] = e.useState(null);
  return (
    e.useEffect(() => {
      r.current = c;
    }, [c]),
    e.useEffect(() => {
      var m;
      (n(null), d(null), (m = r.current) == null || m.call(r, null));
      let s = !1,
        u = null;
      return (
        o(!0),
        a()
          .then(() => (s ? null : ((u = E(i)), u.promise)))
          .then((t) => {
            var l;
            if (t) {
              if (s) {
                t.destroy();
                return;
              }
              (n(t), (l = r.current) == null || l.call(r, t.numPages));
            }
          })
          .catch((t) => {
            var l;
            s ||
              (d(t instanceof Error ? t.message : f), (l = r.current) == null || l.call(r, null));
          })
          .finally(() => {
            s || o(!1);
          }),
        () => {
          ((s = !0), u == null || u.destroy());
        }
      );
    }, [f, i]),
    { isPdfDocumentLoading: D, pdfDocument: p, pdfLoadError: _ }
  );
};
export { v as u };
