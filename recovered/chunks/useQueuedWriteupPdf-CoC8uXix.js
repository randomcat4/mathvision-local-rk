import { r as t, t as S } from "./index-BM3ZINIl.js";
import { c as Pe, d as Ce, e as he, i as ge } from "./useLatexQueries-DBpKOPUv.js";
import { u as ye } from "./usePdfObjectUrl-Cd7ol8-S.js";
import { a as be } from "./useAttachmentContent-15uaQfvd.js";
import { e as we } from "./writeupPdfCompileQueue-lQRkz9rt.js";
let p = [],
  U = !1,
  Y = null,
  ie = 0;
const fe = () => {
    U ||
      Y !== null ||
      (Y = setTimeout(() => {
        ((Y = null), Ee());
      }, 0));
  },
  Ee = async () => {
    if (!U) {
      U = !0;
      try {
        for (; p.length > 0;) {
          p.sort((l, c) => c.priority - l.priority || l.sequence - c.sequence);
          const n = p.shift();
          if (n)
            try {
              await n.run();
            } catch (l) {
              console.warn("Could not prepare queued writeup PDF.", l);
            }
        }
      } finally {
        ((U = !1), p.length > 0 && fe());
      }
    }
  },
  Le = ({ id: n, priority: l, run: c, onCancel: o }) => {
    const q = { id: n, priority: l, run: c, onCancel: o, sequence: ie };
    return (
      (ie += 1),
      (p = p.filter((f) => (f.id !== n ? !0 : (f.onCancel(), !1)))),
      p.push(q),
      fe(),
      () => {
        const f = p.findIndex((L) => L.id === n);
        if (f === -1) return;
        const [s] = p.splice(f, 1);
        s == null || s.onCancel();
      }
    );
  },
  x = (n) => !!(n != null && n.success && (n.pdfAttachmentId || n.pdfBase64)),
  ke = (n) => {
    if (!n) return "LaTeX compile job finished without a result.";
    const l = n.diagnostics.map((c) => c.message.trim()).filter(Boolean);
    return l.length > 0
      ? `LaTeX compile failed:
${l.join(`
`)}`
      : "LaTeX compile failed.";
  },
  ce = (n) => n,
  Qe = (n) =>
    n.replace(/[&<>"']/g, (l) =>
      l === "&"
        ? "&amp;"
        : l === "<"
          ? "&lt;"
          : l === ">"
            ? "&gt;"
            : l === '"'
              ? "&quot;"
              : "&#39;",
    ),
  xe = ({
    areWriteupActionsEnabled: n = !0,
    shouldPrepareWriteupPdf: l = !1,
    writeupPdfPreparationPriority: c = 0,
    writeupSource: o,
  }) => {
    const { mutateAsync: q, isPending: f } = Pe(),
      [s, L] = t.useState(null),
      [Z, $] = t.useState(null),
      [M, B] = t.useState(!1),
      ee = t.useRef(M),
      [I, j] = t.useState(!1),
      [te, k] = t.useState(null),
      [ne, Q] = t.useState(null),
      [de, P] = t.useState(null),
      O = t.useRef(null),
      R = t.useRef(null),
      C = t.useRef(!1),
      W = t.useRef(null),
      _ = o ? ce(o) : null,
      H = _
        ? `${c}
${_}`
        : null,
      y = Ce(o || null, { enabled: !1 }),
      v = y.isFetching;
    ee.current = M;
    const z = he(s, { enabled: !!s }),
      b = z.data,
      a = ne === o ? te : null,
      w = be(a == null ? void 0 : a.pdfAttachmentId),
      G = ye(a == null ? void 0 : a.pdfBase64),
      d = w.objectUrl ?? G,
      i = !!(d && ne === o && x(te)),
      N = M || I || f || !!s || ge(b),
      pe = N || v || w.isLoading;
    (t.useEffect(() => {
      (k(null), Q(null), P(null), B(!1), j(!1), (O.current = null), (R.current = null));
    }, [_]),
      t.useEffect(() => {
        var r;
        const e = (r = y.data) == null ? void 0 : r.result;
        !e || !x(e) || (k(e), Q(o), P(null));
      }, [y.data, o]));
    const X = t.useCallback((e) => {
        const r = W.current;
        !r ||
          r.closed ||
          (r.document.open(),
          r.document.write(
            `<!doctype html><html><head><title>LaTeX PDF</title></head><body><pre>${Qe(e)}</pre></body></html>`,
          ),
          r.document.close());
      }, []),
      u = t.useCallback(
        (e) => {
          (P(e), C.current && (X(e), S.error(e)), (C.current = !1), (W.current = null));
        },
        [X],
      );
    t.useEffect(() => {
      !(a != null && a.pdfAttachmentId) ||
        !w.error ||
        G ||
        u(w.error instanceof Error ? w.error.message : "Could not load compiled PDF.");
    }, [a == null ? void 0 : a.pdfAttachmentId, G, u, w.error]);
    const A = t.useCallback(
      (e, r) => {
        if ((L(null), $(null), e.status === "completed")) {
          if (!e.result) {
            u("LaTeX compile job finished without a result.");
            return;
          }
          (k(e.result), Q(r), x(e.result) ? P(null) : u(ke(e.result)));
          return;
        }
        e.status === "failed" && u("Could not compile LaTeX.");
      },
      [u],
    );
    (t.useEffect(() => {
      !s || !b || ((b.status === "completed" || b.status === "failed") && A(b, Z ?? o));
    }, [b, s, Z, A, o]),
      t.useEffect(() => {
        !s || !z.isError || (L(null), $(null), u("Could not load LaTeX compile job."));
      }, [s, z.isError, u]));
    const D = t.useCallback((e) => {
      const r = window.open("about:blank", "_blank");
      if (!r) {
        S.error("Could not open PDF tab.");
        return;
      }
      try {
        r.opener = null;
      } catch {}
      r.location.href = e;
    }, []);
    t.useEffect(() => {
      if (!i || !d || !C.current) return;
      const e = W.current;
      if (e) {
        if (!e.closed) {
          try {
            e.opener = null;
          } catch {}
          e.location.href = d;
        }
      } else D(d);
      ((C.current = !1), (W.current = null));
    }, [i, D, d]);
    const V = t.useCallback(() => {
        if (C.current) return;
        C.current = !0;
        const e = window.open("", "_blank");
        if (!e) {
          S.warning("PDF is preparing. Allow pop-ups to open it automatically.");
          return;
        }
        ((W.current = e), X("Preparing PDF..."));
      }, [X]),
      re = t.useCallback(
        async ({ force: e = !1, waitForCompletion: r = !1 } = {}) => {
          if (!n) return null;
          if (!o) throw new Error("A writeup is required before opening a PDF.");
          const E = o,
            m = ce(E);
          if ((!e && O.current === m) || R.current === m || i || s || f || I) return null;
          ((O.current = m), (R.current = m), j(!0), k(null), Q(E), P(null));
          try {
            const K = await we(() => q({ input: { source: E } })),
              { job: J, settledJobPromise: T } = K;
            return ($(E), L(J.id), r ? await T : J);
          } finally {
            (R.current === m && (R.current = null), j(!1));
          }
        },
        [s, n, q, f, I, i, o],
      ),
      F = t.useCallback(
        async ({
          forceCompile: e = !0,
          ignoreBusyState: r = !1,
          showErrorToast: E = !0,
          waitForCompile: m = !1,
        } = {}) => {
          var se, ue;
          if (!n || !o || i || (!r && (N || v))) return;
          const K = o,
            J = (h) => {
              (k(h), Q(K), P(null));
            },
            T = (se = y.data) == null ? void 0 : se.result;
          if (T && x(T)) {
            J(T);
            return;
          }
          try {
            const h = await y.refetch();
            if (h.isError) throw new Error("Could not check for a cached PDF.");
            const g = (ue = h.data) == null ? void 0 : ue.result;
            if (g && x(g)) {
              J(g);
              return;
            }
            const ae = await re({ force: e, waitForCompletion: m });
            m && ae && A(ae, K);
          } catch (h) {
            const g = h instanceof Error ? h.message : "Could not compile LaTeX.";
            if (C.current) {
              u(g);
              return;
            }
            (P(g), E && S.error(g));
          }
        },
        [A, n, v, i, N, y, u, re, o],
      ),
      oe = t.useRef(F);
    oe.current = F;
    const le = I || f || v || !!s;
    t.useEffect(() => {
      if (!l || !o || !H || i || ee.current || le) return;
      let e = !1;
      B(!0);
      const r = Le({
        id: H,
        priority: c,
        onCancel: () => {
          ((e = !0), B(!1));
        },
        run: async () => {
          e ||
            (B(!1),
            await oe.current({
              forceCompile: !1,
              ignoreBusyState: !0,
              showErrorToast: !1,
              waitForCompile: !0,
            }));
        },
      });
      return () => {
        ((e = !0), r());
      };
    }, [i, le, H, l, c, o]);
    const me = t.useCallback(async () => {
      if (i && d) {
        D(d);
        return;
      }
      V();
      try {
        await F({ showErrorToast: !1 });
      } catch (e) {
        u(e instanceof Error ? e.message : "Could not compile LaTeX.");
      }
    }, [i, u, D, V, d, F]);
    return {
      isWriteupPdfPreparing: pe,
      isWriteupPdfReady: i,
      notifyPdfCompileError: u,
      openPendingPdfWindow: V,
      openWriteupPdf: me,
      pdfCompileError: de,
      pdfUrl: d,
      prepareWriteupPdfPreview: F,
    };
  };
export { xe as u };
