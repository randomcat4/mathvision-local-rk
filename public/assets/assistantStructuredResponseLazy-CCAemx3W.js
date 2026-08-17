const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/AssistantStructuredResponse-CZDMu2rs.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/CopyButton-BcOsqrNJ.js",
      "assets/MChip-DiH8NXBU.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/NextStepsResponse-NcFjw3w7.js",
      "assets/Markdown-Dh8LhaRc.js",
      "assets/katex.min-ADdKj7O-.js",
      "assets/katex-CfVKi3_s.css",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/index-Yb6ONXKu.js",
      "assets/index-DzMT-bSF.js",
      "assets/ThinkingElapsedLabel-DKCKD95O.js",
      "assets/Card-Bf0WPnf4.js",
      "assets/save-Bre0AB4-.js",
      "assets/send-CDdCro4v.js",
      "assets/Alert-DnFVD8li.js",
      "assets/play-3zl_nde-.js",
      "assets/FormGroup-BsLWbxpH.js",
      "assets/FormControlLabel-CQvCddOM.js",
      "assets/StructuredMarkdown-DAWLLRpf.js",
      "assets/MessageBubble-DqxHrk03.js",
      "assets/OpenInNewRounded-D-7V5TzF.js",
    ]),
) => i.map((i) => d[i]);
import {
  E as _e,
  bG as ye,
  r as c,
  j as n,
  B as g,
  V as be,
  X as he,
  _ as F,
  ag as X,
  T as S,
  C as ne,
  g as m,
  ax as Ae,
  aj as Se,
  a as Te,
  bH as oe,
  p as Ee,
  e as we,
  $ as Re,
} from "./index-BM3ZINIl.js";
import { u as Ce } from "./useQuery-DM2qiUYb.js";
import { T as z } from "./triangle-alert-C5eP7BuB.js";
import { C as ve } from "./circle-check-B9fquZbm.js";
import { M as U } from "./MChip-DiH8NXBU.js";
import { D as Me } from "./Divider-BcuihGce.js";
import { E as $e, L as Ie } from "./LoadingSection-wWBu2CqJ.js";
import { c as je, b as Oe, d as Le } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { q as Ne } from "./streamNdjson-sRiOwtSP.js";
import { A as ke, e as Pe, f as ze, E as De, h as Be } from "./MessageBubble-DqxHrk03.js";
import { P as He } from "./TextField-D8vc_sXz.js";
import { i as Ke, a as se } from "./Markdown-Dh8LhaRc.js";
import { t as E } from "./MarkdownHighlights-C-ZhT8z1.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const We = [
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
        key: "4b9dqc",
      },
    ],
    [
      "path",
      {
        d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
        key: "22nnkd",
      },
    ],
    ["path", { d: "M6 6h.01", key: "1utrut" }],
    ["path", { d: "M6 18h.01", key: "uhywen" }],
    ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }],
  ],
  Ge = _e("server-crash", We),
  ae = "Open source",
  ie = {
    success: {
      icon: ve,
      title: "Source metadata loaded.",
      description: "Source metadata loaded.",
      color: "success",
      retry: !1,
    },
    notFound: {
      icon: z,
      title: "Source not found.",
      description: "We couldn’t load a preview for this source.",
      color: "warning",
      retry: !1,
    },
    tooLarge: {
      icon: z,
      title: "Source too large to preview.",
      description: "We couldn’t load a preview for this source.",
      color: "warning",
      retry: !1,
    },
    unavailable: {
      icon: z,
      title: "Source preview unavailable.",
      description: "We couldn’t load a preview for this source.",
      color: "warning",
      retry: !1,
    },
    serverError: {
      icon: Ge,
      title: "Metadata service unavailable.",
      description: "We couldn’t load a preview for this source. Please try again.",
      color: "error",
      retry: !0,
    },
    limitExceeded: {
      icon: z,
      title: "Background task limit reached.",
      description: "Wait for another background task to finish, then try again.",
      color: "error",
      retry: !0,
    },
  },
  ce = (e) => {
    try {
      return new URL(e).hostname.replace(/^www\./i, "") || e;
    } catch {
      return e;
    }
  },
  Ue = (e) => ce(e),
  Ve = (e) => {
    var t, r;
    return (
      e.status === "success" &&
      !!((t = e.title) != null && t.trim()) &&
      !!((r = e.abstract) != null && r.trim())
    );
  },
  Fe = (e) => {
    var r;
    const t = (r = e.referenceLabel) == null ? void 0 : r.trim();
    return t || (e.year === null || e.year === void 0 ? null : `Published ${e.year}`);
  },
  Ze = (e) => {
    var t;
    return ((t = e == null ? void 0 : e.pdfLabel) == null ? void 0 : t.trim()) || ae;
  },
  qe = (e) => {
    var t;
    return !!((t = e == null ? void 0 : e.pdfLabel) != null && t.trim());
  },
  Xe = (e) => {
    var r;
    return typeof e != "object" || e === null
      ? null
      : (((r = e.response) == null ? void 0 : r.status) ?? null);
  },
  Qe = (e) => {
    if (ye(e)) return "limitExceeded";
    const t = Xe(e);
    return t === 404
      ? "notFound"
      : t === 413
        ? "tooLarge"
        : t !== null && t >= 400 && t < 500
          ? "unavailable"
          : "serverError";
  },
  Ye = (e) => (t) => {
    const r = e ? t.palette[ie[e].color].main : t.palette.text.primary;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: t.spacing(1.5),
      px: 2,
      py: 1,
      borderBottom: `1px solid ${m(r, 0.16)}`,
    };
  },
  Je = (e) => ({
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1.2),
    padding: e.spacing(2),
    maxHeight: 250,
  }),
  V = (e) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing(1.15),
    minHeight: "13rem",
    padding: e.spacing(3, 2.6),
    height: "100%",
  }),
  et = (e) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: e.spacing(1),
    width: "100%",
    maxWidth: 380,
    padding: e.spacing(2),
    borderRadius: e.shape.borderRadiusPx,
  }),
  tt = (e) => (t) => ({
    position: "relative",
    maxHeight: e ? "16rem" : "6.6rem",
    overflow: "auto",
    paddingRight: e ? t.spacing(0.75) : 0,
    scrollbarGutter: e ? "stable" : "auto",
    "&::after": {
      content: '""',
      display: e ? "none" : "block",
      position: "absolute",
      insetInline: 0,
      bottom: 0,
      height: "2.1rem",
      background: `linear-gradient(180deg, ${m(t.palette.background.paper, 0)}, ${t.palette.background.paper})`,
    },
  }),
  rt = (e) => ({
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1.1),
    padding: e.spacing(1.45, 2.6, 2.3),
  }),
  nt = { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 },
  ot = (e) => ({ display: "flex", alignItems: "center", flexWrap: "wrap", gap: e.spacing(1.1) }),
  st = (e) => ({
    minHeight: "2rem",
    padding: e.spacing(0.25, 0.75),
    gap: 0.5,
    color: e.palette.primary.main,
  }),
  B = ({ href: e, label: t = ae }) =>
    n.jsx(F, {
      component: "a",
      href: e,
      target: "_blank",
      rel: "noopener noreferrer",
      variant: "outlined",
      color: "primary",
      endIcon: n.jsx($e, {}),
      children: t,
    }),
  D = ({ label: e, onClose: t, status: r }) => {
    const o = c.useMemo(() => Ye(r), [r]);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs(g, {
          sx: o,
          children: [
            n.jsx(U, { label: e, size: "small" }),
            n.jsx(be, {
              "aria-label": "Close source preview",
              onClick: t,
              children: n.jsx(he, {}),
            }),
          ],
        }),
        n.jsx(Me, {}),
      ],
    });
  },
  Q = ({
    href: e,
    status: t,
    isRetryDisabled: r = !1,
    isRetrying: o = !1,
    onRetry: s,
    retryAvailableInSeconds: i = null,
  }) => {
    const l = c.useMemo(() => ie[t], [t]),
      a = c.useMemo(() => l.icon, [l]),
      u = c.useMemo(() => (i === null ? "Try again" : `Try again ${i}s`), [i]);
    return l.retry
      ? n.jsx(g, {
          sx: V,
          children: n.jsxs(g, {
            sx: et,
            children: [
              n.jsx(X, {
                variant: l.color,
                children: n.jsx(a, { size: 24, "aria-hidden": "true" }),
              }),
              n.jsx(S, {
                variant: "subtitle2",
                align: "center",
                color: l.color,
                children: l.title,
              }),
              n.jsx(S, {
                variant: "body2",
                align: "center",
                color: "textSecondary",
                children: l.description,
              }),
              n.jsxs("div", {
                children: [
                  l.retry && s
                    ? n.jsx(F, {
                        type: "button",
                        variant: "outlined",
                        color: "secondary",
                        disabled: r,
                        onClick: s,
                        endIcon: o
                          ? n.jsx(ne, {
                              "aria-label": "Retrying source preview",
                              color: "inherit",
                              size: 16,
                            })
                          : i
                            ? null
                            : n.jsx(je, {}),
                        sx: { mr: 1 },
                        children: u,
                      })
                    : null,
                  n.jsx(B, { href: e }),
                ],
              }),
            ],
          }),
        })
      : n.jsxs(g, {
          sx: V,
          children: [
            n.jsx(X, { variant: l.color, children: n.jsx(a, { size: 24, "aria-hidden": "true" }) }),
            n.jsx(S, { variant: "subtitle2", color: l.color, children: l.title }),
            n.jsx(S, { variant: "body2", color: "textSecondary", children: l.description }),
            n.jsx(B, { href: e }),
          ],
        });
  },
  at = Se,
  it = (e) => ({
    status: e.status ?? "success",
    title: e.title,
    abstract: e.abstract,
    year: e.year ?? null,
    pdfLabel: e.pdfLabel ?? null,
    referenceLabel: e.referenceLabel ?? null,
  }),
  ct = (e) => Ae.post(at, "article-metadata", { url: e }).then(it),
  lt = 600 * 1e3,
  ut = { [oe]: !0 },
  le = (e) => Ne({ queryKey: Te.articleMetadata(e), queryFn: () => ct(e), staleTime: lt }),
  dt = 5 * 1e3,
  pt = ({ href: e, isOpen: t, onClose: r }) => {
    const o = c.useMemo(() => le(e), [e]),
      s = c.useMemo(() => ({ [oe]: !1 }), []),
      i = Ce({ ...o, enabled: t, meta: s, retryOnMount: !0 }),
      l = i.refetch,
      [a, u] = c.useState(0),
      [p, d] = c.useState(() => Date.now()),
      y = Math.max(0, a - p),
      T = Math.ceil(y / 1e3),
      f = T > 0,
      b = i.isFetching || f,
      h = !i.isFetching && f ? T : null,
      w = c.useMemo(() => ce(e), [e]),
      $ = c.useMemo(() => Ue(e), [e]),
      N = c.useMemo(() => Qe(i.error), [i.error]),
      k = c.useCallback(() => {
        if (b) return;
        const v = Date.now();
        (d(v), u(v + dt), l());
      }, [b, l]);
    c.useEffect(() => {
      if (a <= 0) return;
      const v = () => {
          const G = Date.now();
          (d(G), G >= a && u(0));
        },
        M = a - Date.now();
      if (M <= 0) {
        u(0);
        return;
      }
      const O = window.setInterval(v, 250),
        W = window.setTimeout(() => {
          v();
        }, M);
      return () => {
        (window.clearInterval(O), window.clearTimeout(W));
      };
    }, [a]);
    const A = c.useMemo(() => i.data, [i.data]),
      x = c.useMemo(() => (A && Ve(A) ? A : null), [A]),
      _ = c.useMemo(() => (x ? Fe(x) : null), [x]),
      P = c.useMemo(() => qe(x), [x]),
      C = c.useMemo(
        () =>
          x
            ? `https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=${encodeURIComponent(x.title)}&btnG=`
            : void 0,
        [x],
      ),
      j = c.useMemo(() => Ze(x), [x]);
    if (i.isPending)
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx(D, { label: w, onClose: r }),
          n.jsxs(g, {
            sx: V,
            children: [
              n.jsx(Ie, { title: "", subtitle: "Loading source metadata..." }),
              n.jsx(B, { href: e }),
            ],
          }),
        ],
      });
    if (i.isError)
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx(D, { label: w, onClose: r, status: N }),
          n.jsx(Q, {
            href: e,
            status: N,
            isRetryDisabled: b,
            isRetrying: i.isFetching,
            onRetry: k,
            retryAvailableInSeconds: h,
          }),
        ],
      });
    if (!A) throw new Error("Citation metadata query completed without data.");
    if (A.status !== "success")
      return n.jsxs(n.Fragment, {
        children: [
          n.jsx(D, { label: w, onClose: r, status: A.status }),
          n.jsx(Q, {
            href: e,
            status: A.status,
            isRetryDisabled: b,
            isRetrying: i.isFetching,
            onRetry: k,
            retryAvailableInSeconds: h,
          }),
        ],
      });
    if (!x) throw new Error("Citation metadata response succeeded without title or abstract.");
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx(D, { label: $, onClose: r, status: "success" }),
        n.jsxs(g, {
          sx: Je,
          children: [
            n.jsxs(g, {
              children: [
                n.jsx(S, { variant: "subtitle1", color: "primary", children: x.title }),
                _ ? n.jsx(S, { variant: "caption", children: _ }) : null,
              ],
            }),
            n.jsx(g, {
              sx: tt(!0),
              children: n.jsx(S, { variant: "body1", children: x.abstract }),
            }),
          ],
        }),
        n.jsxs(g, {
          sx: rt,
          children: [
            P
              ? n.jsx(g, {
                  sx: nt,
                  children: n.jsx(F, {
                    type: "button",
                    variant: "text",
                    color: "primary",
                    sx: st,
                    component: "a",
                    href: C,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Google Scholar",
                  }),
                })
              : null,
            n.jsx(g, { sx: ot, children: n.jsx(B, { href: e, label: j }) }),
          ],
        }),
      ],
    });
  },
  mt = 180,
  gt = {
    pointerEvents: "auto",
    overflowX: "hidden",
    overflowY: "auto",
    width: "min(600px, calc(100vw - 32px))",
    height: 425,
  },
  ft = { pointerEvents: "none" },
  xt = { display: "inline-flex", verticalAlign: "baseline" },
  _t = (e) =>
    c.Children.toArray(e)
      .map((t) => (typeof t == "string" || typeof t == "number" ? String(t) : ""))
      .join(""),
  yt = (e) => e === ke,
  bt = ({
    accessibleLabel: e,
    className: t,
    href: r,
    id: o,
    isPreviewEnabled: s = !0,
    label: i,
    title: l = r,
  }) => {
    const a = c.useId(),
      u = c.useRef(null),
      p = c.useRef(null),
      d = Ee(),
      [y, T] = c.useState(null),
      f = c.useMemo(() => e || _t(i) || r, [e, r, i]),
      b = c.useMemo(() => `Open source ${f}`, [f]),
      h = c.useMemo(() => !!y, [y]),
      w = c.useMemo(() => (h ? "true" : void 0), [h]),
      $ = c.useMemo(() => (h ? `${a}-assistant-citation-preview` : void 0), [a, h]),
      N = c.useMemo(() => ({ vertical: "bottom", horizontal: "left" }), []),
      k = c.useMemo(() => ({ vertical: "top", horizontal: "left" }), []),
      A = c.useMemo(() => le(r), [r]),
      x = c.useCallback(() => {
        d.prefetchQuery({ ...A, meta: ut });
      }, [A, d]),
      _ = c.useCallback(() => {
        p.current !== null && (window.clearTimeout(p.current), (p.current = null));
      }, []),
      P = c.useCallback(
        (M) => {
          (_(), T(M.currentTarget));
        },
        [_],
      ),
      C = c.useCallback(() => {
        (_(),
          (p.current = window.setTimeout(() => {
            ((p.current = null), T(null));
          }, mt)));
      }, [_]),
      j = c.useCallback(() => {
        (_(), T(null));
      }, [_]),
      v = c.useMemo(
        () => ({
          root: { sx: ft },
          paper: {
            onBlur: C,
            onFocus: _,
            onMouseEnter: _,
            onMouseLeave: C,
            role: "dialog",
            variant: "floating",
            sx: gt,
          },
        }),
        [_, C],
      );
    return (
      c.useEffect(
        () => () => {
          _();
        },
        [_],
      ),
      c.useEffect(() => {
        if (!s) return;
        const M = u.current;
        if (!M) return;
        if (typeof IntersectionObserver > "u") {
          x();
          return;
        }
        const O = new IntersectionObserver((W) => {
          W.some((xe) => xe.isIntersecting) && (x(), O.disconnect());
        });
        return (
          O.observe(M),
          () => {
            O.disconnect();
          }
        );
      }, [s, x]),
      s
        ? n.jsxs(n.Fragment, {
            children: [
              n.jsx(g, {
                component: "span",
                ref: u,
                sx: xt,
                children: n.jsx(U, {
                  className: t,
                  id: o,
                  title: l,
                  "aria-label": b,
                  "aria-controls": $,
                  "aria-haspopup": "dialog",
                  "aria-expanded": w,
                  label: i,
                  clickable: !0,
                  color: "primary",
                  variant: "outlined",
                  size: "xs",
                  link: r,
                  onBlur: C,
                  onClick: j,
                  onFocus: P,
                  onMouseEnter: P,
                  onMouseLeave: C,
                }),
              }),
              n.jsx(He, {
                id: $,
                anchorEl: y,
                open: h,
                onClose: j,
                anchorOrigin: N,
                transformOrigin: k,
                disableAutoFocus: !0,
                disableEnforceFocus: !0,
                disableRestoreFocus: !0,
                disableScrollLock: !0,
                slotProps: v,
                children: n.jsx(g, {
                  "data-source-url": r,
                  children: n.jsx(pt, { href: r, isOpen: h, onClose: j }),
                }),
              }),
            ],
          })
        : n.jsx(U, {
            className: t,
            id: o,
            title: l,
            "aria-label": b,
            label: i,
            clickable: !0,
            color: "primary",
            variant: "outlined",
            size: "xs",
            link: r,
          })
    );
  },
  ue = (e = {}) => {
    const t = e.isPreviewEnabled ?? !0;
    return {
      a: ({ node: o, title: s, href: i, children: l, ...a }) => {
        if (yt(s) && i) {
          const { className: u, id: p } = a;
          return n.jsx(bt, { className: u, id: p, isPreviewEnabled: t, label: l, href: i });
        }
        return n.jsx("a", { ...a, href: i, title: s, children: l });
      },
    };
  },
  Cr = ue(),
  vr = ue({ isPreviewEnabled: !1 }),
  ht = /^data:([^;,]+);base64,/,
  At = new Set(["coding_agent", "compile_latex", "run_computation", "run_python"]),
  Y = (e) => (e !== null && typeof e == "object" && !Array.isArray(e) ? e : null),
  I = (e) => (typeof e == "string" ? e : null),
  St = (e) => (typeof e == "number" ? e : null),
  Tt = (e) => {
    var t;
    return ((t = e == null ? void 0 : e.match(ht)) == null ? void 0 : t[1]) ?? null;
  },
  J = (e) => {
    if (!e) return null;
    const t = e.match(/\]\((data:[^)]+)\)$/),
      r = (t == null ? void 0 : t[1]) ?? e;
    return Ke(r) ? r : null;
  },
  Mr = (e, t = At) => {
    var o;
    const r = new Map();
    for (const [s, i] of (e.toolCalls ?? []).entries()) {
      if (i.toolType !== "function_call_output" || !t.has(i.toolName ?? "")) continue;
      const l = Y(i.arguments.output),
        a = l == null ? void 0 : l.artifacts;
      if (Array.isArray(a))
        for (const [u, p] of a.entries()) {
          const d = Y(p);
          if (!d) continue;
          const y = I(d.markdown_image),
            T = I(d.markdown_link),
            f = I(d.attachment_id),
            b = J(y) ?? J(T),
            h = ((o = I(d.name)) == null ? void 0 : o.trim()) || `Generated artifact ${u + 1}`,
            w = f ?? `${i.callId ?? s}:${u}`,
            $ = I(d.mime_type) ?? Tt(b) ?? "application/octet-stream";
          r.set(w, {
            key: w,
            originatingCallId: i.callId ?? null,
            attachmentId: f,
            name: h,
            mimeType: $,
            sizeBytes: St(d.size_bytes),
            href: b,
            omittedReason: I(d.data_url_omitted_reason),
            frontendPreview: d.frontend_preview,
          });
        }
    }
    return [...r.values()];
  },
  $r = "Unable to complete request",
  Ir = "Agent execution stopped because of ",
  de = [
    "alpha",
    "beta",
    "gamma",
    "delta",
    "epsilon",
    "theta",
    "lambda",
    "mu",
    "nu",
    "pi",
    "rho",
    "sigma",
    "tau",
    "phi",
    "omega",
  ],
  Et = {
    α: "\\alpha",
    β: "\\beta",
    γ: "\\gamma",
    δ: "\\delta",
    ε: "\\epsilon",
    θ: "\\theta",
    λ: "\\lambda",
    μ: "\\mu",
    ν: "\\nu",
    π: "\\pi",
    ρ: "\\rho",
    σ: "\\sigma",
    τ: "\\tau",
    φ: "\\phi",
    Φ: "\\Phi",
    ω: "\\omega",
  },
  wt = /<br\s*\/?>/gi,
  ee = /(?:[ \t]*<br\s*\/?>[ \t]*)+/gi,
  pe = /^ {0,3}(?:>[ \t]*)*\|.*\|[ \t]*$/,
  Rt = /(^|\n)`([^`\n]*\$[^$\n]+\$[^`\n]*)`(?=\n|$)/g,
  Ct = /(^|\n)([ \t]*)(\d+)\.\s+([A-Z][^:.\n]{2,72}:)/g,
  vt =
    /(^|\n)([ \t]*)\\begin\{(theorem|thm|lemma|lem|proposition|prop|corollary|cor|definition|defn|remark|example|proof)\*?\}([^\n]*)/gi,
  Mt =
    /(^|\n)[ \t]*\\end\{(?:theorem|thm|lemma|lem|proposition|prop|corollary|cor|definition|defn|remark|example|proof)\*?\}[ \t]*(?=\n|$)/gi,
  $t = /\\label\{[^}\n]*\}/g,
  It = /^(?:\[([^\]\n]*)\]|\(([^)\n]*)\))$/,
  jt = /\\r\\n|\\n|\\r/g,
  Ot = {
    theorem: "Theorem",
    thm: "Theorem",
    lemma: "Lemma",
    lem: "Lemma",
    proposition: "Proposition",
    prop: "Proposition",
    corollary: "Corollary",
    cor: "Corollary",
    definition: "Definition",
    defn: "Definition",
    remark: "Remark",
    example: "Example",
    proof: "Proof",
  },
  R = (e) => {
    let t = e
      .replace(/−/g, "-")
      .replace(/≤/g, "\\le ")
      .replace(/≥/g, "\\ge ")
      .replace(/∈/g, "\\in ")
      .replace(/≠/g, "\\ne ")
      .replace(/≈/g, "\\approx ")
      .replace(/·/g, "\\cdot ")
      .replace(/√\s*([A-Za-z0-9]+)/g, "\\sqrt{$1}")
      .replace(/\bsum_\{/g, "\\sum_{")
      .replace(/\bprod_\{/g, "\\prod_{")
      .replace(/\bint_\{/g, "\\int_{")
      .replace(/\bspec(?=\s*\()/g, "\\operatorname{spec}")
      .replace(/_([A-Za-z0-9]{2,})\b/g, "_{$1}")
      .replace(/\^([A-Za-z0-9]{2,})\b/g, "^{$1}")
      .replace(/<\s*([^<>]+?)\s*>/g, "\\langle $1\\rangle");
    for (const [r, o] of Object.entries(Et)) t = t.replaceAll(r, o);
    for (const r of de) t = t.replace(new RegExp(`\\\\?\\b${r}(?=\\b|_)`, "g"), `\\${r}`);
    return t;
  },
  me = (e) =>
    E(e, (t) =>
      t.replace(
        jt,
        `
`,
      ),
    ),
  Lt = (e) =>
    E(
      e,
      (t) =>
        t
          .split(
            `
`,
          )
          .map((r) =>
            pe.test(r)
              ? r.replace(ee, " ")
              : r.replace(ee, (o) => {
                  var i;
                  return (((i = o.match(wt)) == null ? void 0 : i.length) ?? 0) > 1
                    ? `

`
                    : `\\
`;
                }),
          ).join(`
`),
      { protectStandaloneHtmlTags: !1 },
    ),
  Nt = (e) => {
    const t = e.replace($t, "").trim(),
      r = t.match(It),
      o = ((r == null ? void 0 : r[1]) ?? (r == null ? void 0 : r[2]) ?? t).trim();
    return o ? ` (${o})` : "";
  },
  kt = (e) =>
    E(e, (t) =>
      t
        .replace(vt, (r, o, s, i, l) => {
          const a = Ot[i.toLowerCase()],
            u = Nt(l);
          return `${o}${s}**${a}${u}.**`;
        })
        .replace(Mt, ""),
    ),
  Pt = (e) => {
    let t = "";
    for (; e.includes(t);) t += "";
    let r = "";
    for (; e.includes(r) || r === t;) r += "";
    const o = [],
      s = e.replace(Rt, (a, u, p) => {
        const d = `${t}${o.length}${r}`;
        return (o.push({ content: p, marker: d }), `${u}${d}`);
      });
    if (o.length === 0) return e;
    let l = E(s, (a) => {
      let u = a;
      for (const { content: p, marker: d } of o) u = u.replaceAll(d, () => p);
      return u;
    });
    for (const { content: a, marker: u } of o) l = l.replaceAll(u, () => `\`${a}\``);
    return l;
  },
  zt = (e) => {
    let t = E(e, (r) =>
      r.replace(/(^|\n)([ \t]*)([^\n]+?)(?=\n|$)/g, (o, s, i, l) => {
        var p;
        const a = l.trim().replace(/[.,;:]$/, ""),
          u =
            ((p = a.match(/\b[A-Za-z]{3,}\b/g)) == null
              ? void 0
              : p.filter((d) => d !== "spec" && !de.includes(d))) ?? [];
        return /^(?:#{1,6}|>|[-+*]|\d+\.)\s/.test(a) ||
          pe.test(l) ||
          !/[=≤≥]/.test(a) ||
          u.length > 0 ||
          !/[0-9_^{}()√γλΦ+\-−/·]|\bspec\b/.test(a)
          ? o
          : `${s}${i}$$${R(a)}$$`;
      }),
    );
    return (
      (t = E(t, (r) =>
        r
          .replace(
            /\b([A-Za-z]\s*∈\s*\{[^}\n]+\})/g,
            (o, s) => `$${R(s.trim()).replace(/\\in\s*\{([^{}]*)\}/, "\\in \\{$1\\}")}$`,
          )
          .replace(
            /\b(spec\([^()\n]+\)\s*=\s*\{[^}\n]+\})/g,
            (o, s) => `$${R(s.trim()).replace(/(=\s*)\{(.*)\}$/, "$1\\{$2\\}")}$`,
          )
          .replace(
            /((?:[A-Za-z]|[α-ωΑ-Ω])(?:_[A-Za-z0-9{}]+)?(?:\([^()\n]{1,80}\))?\s*(?:=|≤|≥|≠|≈|<|>)\s*.+?)(?=\s+(?!(?:sin|cos|tan|log|ln|exp|max|min|mod)\b)[A-Za-z]{2,}\b|\s+\(|[,;:.\n]|$)/g,
            (o, s) => `$${R(s.trim())}$`,
          ),
      )),
      (t = E(t, (r) =>
        r
          .replace(
            /\(([^()\n]{1,120}(?:=|\\sum|sum_\{|\\lambda|lambda\b|_[A-Za-z{]|\^|\*)[^()\n]{0,120})\)/g,
            (o, s) => `$${R(s.trim())}$`,
          )
          .replace(
            /\b([A-Za-z][A-Za-z0-9_]*(?:\s+[A-Za-z][A-Za-z0-9_]*)?\s*=\s*[^,.;\n]*(?:\\sum|sum_\{|\\lambda|lambda\b|<[^>]+>|_[A-Za-z{]|\^)[^,.;\n]*)/g,
            (o, s) => `$${R(s.trim())}$`,
          )
          .replace(/\bK\(H\)/g, "$K(H)$"),
      )),
      E(t, (r) =>
        r
          .replace(/\b([A-Za-z](?:_[A-Za-z0-9{}]+)+)(?=\b|[^A-Za-z0-9])/g, (o, s) => `$${R(s)}$`)
          .replace(/([α-ωΑ-Ω](?:_[A-Za-z0-9{}]+)?(?:\([^()\n]{1,80}\))?)/g, (o, s) => `$${R(s)}$`),
      )
    );
  },
  Dt = (e, { unwrapCodeWrappedMath: t }) => {
    const r = me(e),
      o = kt(Lt(t ? Pt(r) : r));
    return E(o, (s) =>
      s
        .replace(Ct, (i, l, a, u, p) => `${l}${a}${u}. **${p}** `)
        .replace(
          /[ \t]+\n/g,
          `
`,
        ),
    ).trim();
  },
  te = (e, { normalizeMath: t }) => {
    const r = Dt(e, { unwrapCodeWrappedMath: t });
    return t ? zt(r) : r;
  },
  jr = (e, t) => {
    const r = t === "canonical-v1";
    return typeof e == "string"
      ? te(e, { normalizeMath: !r })
      : typeof e == "number" || typeof e == "boolean"
        ? String(e)
        : Array.isArray(e) && e.every((o) => typeof o == "string")
          ? e.map((o) => `- ${te(o, { normalizeMath: !r })}`).join(`
`)
          : `\`\`\`json
${JSON.stringify(e, null, 2)}
\`\`\``;
  },
  K = (e) => !!e && typeof e == "object" && !Array.isArray(e),
  Or = (e) =>
    Array.isArray(e) &&
    e.every((t) => K(t) && typeof t.symbol == "string" && typeof t.meaning == "string"),
  Lr = (e) =>
    Array.isArray(e) &&
    e.every(
      (t) =>
        K(t) &&
        typeof t.source_id == "string" &&
        typeof t.authors == "string" &&
        typeof t.title == "string" &&
        typeof t.source_type == "string" &&
        typeof t.relevance == "string",
    ),
  L = "  ",
  re = (e, t) => {
    const r = L.repeat(t);
    return e
      .split(
        `
`,
      )
      .map((o) => `${r}${o}`).join(`
`);
  },
  H = (e, t = 0) =>
    e == null
      ? ""
      : typeof e == "string"
        ? me(e)
        : typeof e == "number" || typeof e == "boolean"
          ? String(e)
          : Array.isArray(e)
            ? e
                .map((r) => {
                  const o = H(r, t + 1);
                  return o.trim()
                    ? o.includes(`
`)
                      ? `${L.repeat(t)}-
${re(o, t + 1)}`
                      : `${L.repeat(t)}- ${o}`
                    : null;
                })
                .filter((r) => r !== null).join(`
`)
            : K(e)
              ? Object.entries(e)
                  .map(([r, o]) => {
                    const s = H(o, t + 1);
                    return s.trim()
                      ? s.includes(`
`)
                        ? `${L.repeat(t)}${r}:
${re(s, t + 1)}`
                        : `${L.repeat(t)}${r}: ${s}`
                      : null;
                  })
                  .filter((r) => r !== null).join(`
`)
              : String(e),
  Bt = {
    variable_defs: "Definitions",
    proof_basics: "Proof basics",
    reconstruction_plan: "Plan",
    gaps: "Gaps",
    gaps_and_ambiguities: "Gaps",
    counterexample: "Counterexample",
    examples: "Examples",
    worked_examples: "Examples",
    review: "Review",
    referee_review: "Review",
    referee_revised: "Revision",
    edge_cases: "Edge cases",
    assumptions: "Assumptions",
    explanation: "Explanation",
    code: "Code",
    visualization: "Visualization",
    stress_test: "Stress test",
    analysis: "Analysis",
    referee_feedback: "Analysis",
    research_plan: "Research plan",
    findings: "Findings",
    theorems: "Theorems",
    relevance: "Relevance",
    bibliography: "Bibliography",
    state_of_the_art: "State of the art",
    next_actions: "Next actions",
    choices: "Next Steps",
  },
  Ht = ["answer", "intuition", "variable_defs", "examples", "assumptions"],
  Kt = ["decision", "gaps", "review", "intuition", "variable_defs", "worked_examples"],
  Wt = ["visualization", "intuition", "variable_defs"],
  Gt = ["explanation", "code"],
  Ut = ["writeup", "intuition", "variable_defs", "analysis"],
  Vt = ["findings", "bibliography", "variable_defs"],
  Ft = ["choices", "intuition", "variable_defs"],
  Zt = {
    question: {
      sectionOrder: Ht,
      legacyGroups: [
        {
          targetKey: "examples",
          sourceKeys: ["worked_examples", "edge_cases"],
          labels: { worked_examples: "Examples", edge_cases: "Edge cases" },
        },
        {
          targetKey: "assumptions",
          sourceKeys: ["stress_test"],
          labels: { stress_test: "Stress test" },
        },
      ],
    },
    referee: {
      sectionOrder: Kt,
      hiddenKeys: ["decision_severity"],
      legacyGroups: [
        {
          targetKey: "gaps",
          sourceKeys: ["gaps_and_ambiguities", "counterexample"],
          labels: { gaps_and_ambiguities: "Gaps", counterexample: "Counterexample" },
        },
        {
          targetKey: "review",
          sourceKeys: ["referee_review", "referee_revised"],
          labels: { referee_review: "Review", referee_revised: "Revision" },
        },
      ],
    },
    compute: { sectionOrder: Gt, hiddenKeys: ["evidence_kind", "status", "variable_defs"] },
    visualization: { sectionOrder: Wt, hiddenKeys: ["artifact_refs"] },
    writeup: {
      sectionOrder: Ut,
      legacyGroups: [
        {
          targetKey: "analysis",
          sourceKeys: ["referee_feedback"],
          labels: { referee_feedback: "Referee pass" },
        },
      ],
    },
    "lit-search": {
      sectionOrder: Vt,
      hiddenKeys: ["scope", "intuition"],
      legacyGroups: [
        {
          targetKey: "findings",
          sourceKeys: [
            "theorems",
            "relevance",
            "state_of_the_art",
            "next_actions",
            "research_plan",
          ],
          labels: {
            theorems: "Theorems",
            relevance: "Relevance",
            state_of_the_art: "State of the art",
            next_actions: "Next actions",
            research_plan: "Research plan",
          },
        },
      ],
    },
    "next-steps": { sectionOrder: Ft },
  },
  Z = (e) => e.replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase()),
  qt = (e, t) =>
    t === "question" && e === "variable_defs"
      ? "Definitions"
      : t === "compute" && e === "code"
        ? "Code Execution"
        : (Bt[e] ?? Z(e)),
  q = (e) =>
    e == null
      ? !1
      : typeof e == "string"
        ? e.trim().length > 0
        : Array.isArray(e)
          ? e.length > 0
          : K(e)
            ? Object.keys(e).length > 0
            : !0,
  Nr = (e) => {
    var t;
    return ((t = Oe.find((r) => r.value === e)) == null ? void 0 : t.label) ?? Z(e);
  },
  Xt = (e, t) => {
    const r = t.sourceKeys
      .map((o) => {
        const s = e[o];
        if (!q(s)) return null;
        const i = H(s).trim();
        return i
          ? `## ${t.labels[o] ?? Z(o)}

${i}`
          : null;
      })
      .filter((o) => o !== null);
    return r.length > 0
      ? r.join(`

`)
      : null;
  },
  Qt = (e, t) => {
    var o;
    if (!((o = t == null ? void 0 : t.legacyGroups) != null && o.length)) return e;
    let r = e;
    for (const s of t.legacyGroups) {
      const i = Xt(e, s);
      if (i === null) continue;
      const l = r[s.targetKey],
        a = q(l)
          ? [H(l).trim(), i].filter((u) => u.length > 0).join(`

`)
          : i;
      r = { ...r, [s.targetKey]: a };
    }
    return r;
  },
  kr = (e) => {
    const t = typeof e.operation == "string" ? e.operation : void 0,
      r = t ? Zt[t] : void 0,
      o = Qt(e, r),
      s = new Set(["operation", "result_title"]);
    for (const a of (r == null ? void 0 : r.hiddenKeys) ?? []) s.add(a);
    for (const a of (r == null ? void 0 : r.legacyGroups) ?? [])
      for (const u of a.sourceKeys) s.add(u);
    const i = (r == null ? void 0 : r.sectionOrder) ?? ["intuition", "variable_defs"];
    return [
      ...i.filter((a) => a in o || (t === "compute" && a === "code")),
      ...Object.keys(o).filter((a) => !s.has(a) && !i.includes(a)),
    ]
      .filter((a) => (t === "compute" && a === "code") || q(o[a]))
      .map((a) => ({ key: a, label: qt(a, t).toUpperCase(), value: o[a] }));
  },
  Yt = (e) => {
    if (e == null) return "—";
    if (e < 60) return `${e.toFixed(e < 10 ? 1 : 0)}s`;
    const t = Math.round(e),
      r = Math.floor(t / 3600),
      o = Math.floor((t % 3600) / 60),
      s = t % 60;
    return r > 0
      ? `${r}h ${o}m ${s.toString().padStart(2, "0")}s`
      : `${o}m ${s.toString().padStart(2, "0")}s`;
  },
  Jt =
    (e = "default") =>
    (t) => ({
      marginBottom: t.spacing(1.9),
      borderRadius: t.shape.borderRadiusPx,
      backgroundColor:
        e === "error" ? m(t.palette.error.main, 0.06) : m(t.palette.primary.main, 0.07),
      border: `1px solid ${e === "error" ? m(t.palette.error.main, 0.12) : m(t.palette.primary.main, 0.14)}`,
    }),
  er =
    (e = !1) =>
    (t) => ({
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      justifyContent: "space-between",
      gap: t.spacing(1.5),
      ...(e ? { padding: t.spacing(1.56, 1.9) } : {}),
    }),
  tr = (e) => ({
    flex: "1 1 auto",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: e.spacing(1.5),
  }),
  rr = { flex: "0 0 auto" },
  nr = { flex: "0 0 auto" },
  or = { flex: "1 1 auto", minWidth: 0 },
  sr = { flex: "0 0 auto" },
  ar = 24,
  ir = /([^\s])(\*\*[^*\r\n]+?\*\*[ \t]*(?:\r?\n){2,})/g,
  ge = (e) =>
    e.replace(
      ir,
      `$1

$2`,
    ),
  cr = (e) => ({
    marginBottom: e.spacing(1.25),
    borderRadius: e.shape.borderRadiusPx,
    border: `1px solid ${m(e.palette.text.primary, 0.08)}`,
    backgroundColor: m(e.palette.background.paper, 0.42),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: `0 0 ${e.spacing(1.25)}` },
  }),
  lr = (e) => ({
    minHeight: "2.35rem",
    padding: e.spacing(0, 1.25),
    color: e.palette.text.secondary,
    "&.Mui-expanded": { minHeight: "2.35rem" },
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      justifyContent: "space-between",
      gap: e.spacing(1.25),
      minWidth: 0,
      margin: e.spacing(0.65, 0),
    },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: e.spacing(0.65, 0) },
    "& .MuiAccordionSummary-expandIconWrapper": { color: e.palette.text.secondary },
  }),
  ur = (e) => ({ padding: e.spacing(0, 1.25, 1.05) }),
  fe = (e) => ({
    maxHeight: "min(32rem, 60dvh)",
    overflowY: "auto",
    margin: 0,
    padding: e.spacing(0.15, 0.15, 0.2),
    color: e.palette.text.secondary,
    fontSize: "0.82rem",
    fontWeight: 400,
    lineHeight: 1.58,
    "& :where(p, ul, ol, blockquote, pre, table, hr)": { margin: "0.68rem 0 0" },
    "& :where(h1, h2, h3, h4, h5, h6)": {
      margin: "0.85rem 0 0.35rem",
      color: m(e.palette.text.primary, 0.78),
      fontSize: "0.92rem",
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.35,
    },
    "& :where(h1, h2)": { fontSize: "0.98rem" },
    "& :where(strong)": { color: m(e.palette.text.primary, 0.8), fontWeight: 700 },
    "& :where(a)": {
      color: e.palette.text.secondary,
      textDecorationColor: m(e.palette.text.secondary, 0.4),
    },
    "& :where(blockquote)": {
      color: e.palette.text.secondary,
      borderLeftColor: m(e.palette.text.primary, 0.14),
    },
    "& :where(:not(pre) > code)": {
      background: m(e.palette.text.primary, 0.045),
      color: m(e.palette.text.primary, 0.78),
    },
    "& :where(pre)": {
      maxHeight: "14rem",
      padding: e.spacing(0.85, 1),
      background: m(e.palette.text.primary, 0.035),
      color: m(e.palette.text.primary, 0.78),
      boxShadow: `inset 0 0 0 1px ${m(e.palette.text.primary, 0.05)}`,
    },
    "& :where(pre code)": { fontSize: "0.78rem", lineHeight: 1.55 },
    "& :where(th)": { background: m(e.palette.text.primary, 0.04) },
    "& :where(th, td)": { borderColor: m(e.palette.text.primary, 0.08) },
    "& :where(.katex-display)": {
      padding: e.spacing(0.7, 0.9),
      background: m(e.palette.text.primary, 0.035),
    },
  }),
  dr = (e) => ({
    maxHeight: "min(32rem, 60dvh)",
    overflowY: "auto",
    overscrollBehavior: "contain",
    scrollbarGutter: "stable",
    backgroundColor: m(e.palette.background.paper, 0.42),
  }),
  pr = { maxHeight: "none", overflowY: "visible", padding: 2, backgroundColor: "transparent" },
  Pr = ({ reasoning: e, durationSeconds: t }) => {
    const r = c.useId(),
      o = c.useId(),
      s = ge(e);
    return n.jsxs(Pe, {
      disableGutters: !0,
      elevation: 0,
      sx: cr,
      children: [
        n.jsxs(ze, {
          expandIcon: n.jsx(De, {}),
          "aria-controls": r,
          id: o,
          sx: lr,
          children: [
            n.jsx(g, {
              sx: { display: "flex" },
              children: n.jsx(S, {
                variant: "subtitle2",
                color: "textPrimary",
                children: "Reasoning",
              }),
            }),
            n.jsx(S, { variant: "caption", children: Yt(t) }),
          ],
        }),
        n.jsx(Be, {
          id: r,
          "aria-labelledby": o,
          sx: ur,
          children: n.jsx(se, { content: s, mode: "compact", sx: fe }),
        }),
      ],
    });
  },
  zr = ({
    runId: e,
    startedAt: t,
    streamText: r = "",
    statusLabel: o = "Waiting for model output...",
    showStatusLabel: s = !0,
    headingLabel: i = "Thinking",
    ariaLive: l = "polite",
    onContentChange: a,
  }) => {
    const u = c.useRef(null),
      p = c.useRef(e),
      d = c.useRef(!0),
      y = r.trim() ? ge(r) : null,
      T = c.useCallback(() => {
        const f = u.current;
        if (!f) return;
        const b = f.scrollHeight - f.scrollTop - f.clientHeight;
        d.current = b <= ar;
      }, []);
    return (
      c.useLayoutEffect(() => {
        (p.current !== e && ((p.current = e), (d.current = !0)), y || (d.current = !0));
        const f = u.current;
        (f && d.current && (f.scrollTop = f.scrollHeight), a == null || a());
      }, [a, e, o, y]),
      n.jsxs(we, {
        variant: "inset",
        sx: Jt(),
        "aria-live": l,
        children: [
          n.jsxs(g, {
            sx: er(!0),
            children: [
              n.jsxs(g, {
                sx: tr,
                children: [
                  n.jsx(ne, { size: 14, thickness: 5, sx: rr }),
                  n.jsx(S, {
                    variant: "subtitle2",
                    color: "primary",
                    noWrap: !0,
                    sx: nr,
                    children: i,
                  }),
                  s &&
                    n.jsx(S, { variant: "subtitle2", color: "textSecondary", sx: or, children: o }),
                ],
              }),
              n.jsx(g, {
                sx: sr,
                children: n.jsx(Le, {
                  runId: e,
                  startedAt: t,
                  color: "primary",
                  variant: "elapsedTime",
                }),
              }),
            ],
          }),
          y &&
            n.jsx(g, {
              ref: u,
              sx: dr,
              onScroll: T,
              children: n.jsx(se, { content: y, mode: "compact", sx: [fe, pr] }),
            }),
        ],
      })
    );
  },
  mr = () =>
    Re(
      () => import("./AssistantStructuredResponse-CZDMu2rs.js").then((e) => e.A),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      ]),
    ).then((e) => ({ default: e.AssistantStructuredResponse })),
  Dr = c.lazy(mr);
export {
  $r as A,
  Dr as L,
  Cr as a,
  Ir as b,
  bt as c,
  zr as d,
  Yt as e,
  jr as f,
  Nr as g,
  Lr as h,
  Or as i,
  kr as j,
  ut as k,
  le as l,
  Mr as m,
  Pr as n,
  vr as p,
  H as s,
};
