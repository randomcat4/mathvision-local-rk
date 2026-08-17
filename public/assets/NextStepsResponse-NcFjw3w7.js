import {
  r as n,
  aJ as me,
  aK as xe,
  a_ as fe,
  a$ as V,
  E as he,
  j as t,
  B as I,
  _ as E,
  g as f,
  e as ye,
  S as q,
  T as D,
  V as be,
  X as ge,
} from "./index-BM3ZINIl.js";
import { a as se } from "./Markdown-Dh8LhaRc.js";
import { g as ne } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { C as Se } from "./CopyButton-BcOsqrNJ.js";
import { M as ke } from "./MChip-DiH8NXBU.js";
import { a as ve, R as je, c as ee } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { C as Ce } from "./Card-Bf0WPnf4.js";
import { T as ie } from "./TextField-D8vc_sXz.js";
import { S as we } from "./save-Bre0AB4-.js";
import { P as Ee } from "./MarkdownHighlights-C-ZhT8z1.js";
import { S as Te } from "./send-CDdCro4v.js";
import { A as Re } from "./Alert-DnFVD8li.js";
import { P as J } from "./play-3zl_nde-.js";
import { F as Pe, C as Ie } from "./FormGroup-BsLWbxpH.js";
import { F as $e } from "./FormControlLabel-CQvCddOM.js";
function te(e) {
  return e.substring(2).toLowerCase();
}
function ze(e, a) {
  return a.documentElement.clientWidth < e.clientX || a.documentElement.clientHeight < e.clientY;
}
function Me(e) {
  const {
      children: a,
      disableReactTree: T = !1,
      mouseEvent: x = "onClick",
      onClickAway: P,
      touchEvent: S = "onTouchEnd",
    } = e,
    j = n.useRef(!1),
    i = n.useRef(null),
    l = n.useRef(!1),
    R = n.useRef(!1);
  n.useEffect(
    () => (
      setTimeout(() => {
        l.current = !0;
      }, 0),
      () => {
        l.current = !1;
      }
    ),
    [],
  );
  const b = me(xe(a), i),
    o = fe((c) => {
      const m = R.current;
      R.current = !1;
      const y = V(i.current);
      if (!l.current || !i.current || ("clientX" in c && ze(c, y))) return;
      if (j.current) {
        j.current = !1;
        return;
      }
      let C;
      (c.composedPath
        ? (C = c.composedPath().includes(i.current))
        : (C = !y.documentElement.contains(c.target) || i.current.contains(c.target)),
        !C && (T || !m) && P(c));
    }),
    k = (c) => (m) => {
      R.current = !0;
      const y = a.props[c];
      y && y(m);
    },
    h = { ref: b };
  return (
    S !== !1 && (h[S] = k(S)),
    n.useEffect(() => {
      if (S !== !1) {
        const c = te(S),
          m = V(i.current),
          y = () => {
            j.current = !0;
          };
        return (
          m.addEventListener(c, o),
          m.addEventListener("touchmove", y),
          () => {
            (m.removeEventListener(c, o), m.removeEventListener("touchmove", y));
          }
        );
      }
    }, [o, S]),
    x !== !1 && (h[x] = k(x)),
    n.useEffect(() => {
      if (x !== !1) {
        const c = te(x),
          m = V(i.current);
        return (
          m.addEventListener(c, o),
          () => {
            m.removeEventListener(c, o);
          }
        );
      }
    }, [o, x]),
    n.cloneElement(a, h)
  );
}
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  _e = he("lightbulb", Le),
  Ae = 3,
  Y = 800,
  Fe = new Set(["chat", "referee", "question", "visualization", "writeup", "lit-search"]),
  Oe = (e) => typeof e == "string" && Fe.has(e),
  qe = (e) => {
    if (!e || typeof e != "object" || Array.isArray(e)) return !1;
    const a = e;
    return (
      Oe(a.operation) &&
      typeof a.prompt == "string" &&
      a.prompt.trim().length > 0 &&
      a.prompt.length <= Y
    );
  },
  re = (e) => Array.isArray(e) && e.length === Ae && e.every(qe),
  Ne = (e) => ({ display: "grid", gridTemplateColumns: "1fr", gap: e.spacing(1) }),
  Be = (e) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: e.spacing(1.15),
    minWidth: 0,
    padding: e.spacing(1.5, 1.6),
    border: `1px solid ${f(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: f(e.palette.background.paper, 0.58),
    boxShadow: `0 8px 22px ${f(e.palette.text.primary, 0.045)}`,
    transition: e.transitions.create(["background-color", "border-color", "box-shadow"], {
      duration: e.transitions.duration.shorter,
    }),
    "&:hover": {
      borderColor: f(e.palette.primary.main, 0.46),
      backgroundColor: f(e.palette.primary.main, 0.08),
    },
  }),
  We = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0.75,
    minWidth: 0,
    width: "100%",
  },
  De = (e) => ({
    ...e.typography.body1,
    color: e.palette.text.primary,
    minWidth: 0,
    width: "100%",
    "& > :where(p, h1, h2, h3, h4, h5, h6)": { margin: 0 },
    "& > :where(p, h1, h2, h3, h4, h5, h6):not(:first-of-type)": { marginTop: e.spacing(0.72) },
    "& > :where(ul, ol, blockquote, pre, .markdown-table-scroll, hr)": {
      marginTop: e.spacing(0.72),
    },
    "& :where(.katex-display)": { margin: e.spacing(0.55, 0), padding: e.spacing(0.45, 0.65) },
  }),
  Xe = (e) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: e.spacing(0.8),
    flexWrap: "wrap",
  }),
  He = (e) => ({
    width: "100%",
    "& .MuiInputBase-root": { backgroundColor: f(e.palette.background.paper, 0.78) },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: f(e.palette.primary.main, 0.18) },
  }),
  le = (e, a) => `${e.operation}-${e.prompt}-${a}`,
  oe = (e, a) => e.map((T, x) => ({ ...T, prompt: a[le(T, x)] ?? T.prompt.trim() })),
  Ge = ({
    choices: e,
    isPromptCompatibility: a,
    mathSyntax: T = "compatibility",
    runLabel: x,
    areTooltipsDisabled: P = !1,
    areRunActionsDisabled: S = !1,
    onSelectNextStep: j,
    onChoicesChange: i,
    onEditingChange: l,
  }) => {
    const [R, b] = n.useState(null),
      [o, k] = n.useState(""),
      [h, c] = n.useState({}),
      m = n.useCallback(
        (d, w) => {
          (b(d), k(w), l == null || l(!0));
        },
        [l],
      ),
      y = n.useCallback(() => {
        (b(null), k(""), l == null || l(!1));
      }, [l]),
      C = n.useCallback(
        (d, w) => {
          const p = o.trim();
          if (!p) return;
          const u = { ...h };
          (p === w ? delete u[d] : (u[d] = p),
            c(u),
            i == null || i(oe(e, u)),
            b(null),
            k(""),
            l == null || l(!1));
        },
        [e, o, i, l, h],
      ),
      X = n.useCallback(
        (d, w) => {
          if (h[d] !== void 0) {
            const p = { ...h };
            (delete p[d], c(p), i == null || i(oe(e, p)));
          }
          R === d && k(w);
        },
        [e, R, i, h],
      );
    return t.jsx(I, {
      sx: Ne,
      children: e.map((d, w) => {
        const p = le(d, w),
          u = R === p,
          $ = ne(d.operation),
          _ = d.prompt.trim(),
          N = h[p],
          A = N ?? _,
          g = N !== void 0,
          L = g || (a != null && a(d, w)) ? "compatibility" : T,
          B = x && !P ? `Run ${$} operation with ${x}` : void 0,
          F = P ? void 0 : `Edit ${$} suggestion`,
          z = P ? void 0 : "Reset to the model-generated prompt",
          M = u ? o.trim() : A,
          W = S || !j || !M,
          H = !o.trim(),
          G = g || u;
        return t.jsxs(
          Ce,
          {
            variant: "inset",
            sx: Be,
            children: [
              t.jsxs(I, {
                sx: We,
                children: [
                  t.jsx(ke, {
                    size: "small",
                    variant: "outlined",
                    color: "primary",
                    icon: t.jsx(ve, { operation: d.operation, size: 14, strokeWidth: 2.4 }),
                    label: $,
                  }),
                  u
                    ? t.jsx(ie, {
                        value: o,
                        multiline: !0,
                        minRows: 1,
                        fullWidth: !0,
                        helperText: `${o.length}/${Y}`,
                        slotProps: {
                          htmlInput: { "aria-label": `Edit ${$} next-step prompt`, maxLength: Y },
                        },
                        sx: He,
                        onChange: (K) => {
                          k(K.target.value);
                        },
                      })
                    : t.jsx(se, { content: A, mathSyntax: L, mode: "compact", sx: De }),
                ],
              }),
              t.jsxs(I, {
                sx: Xe,
                children: [
                  u
                    ? t.jsxs(t.Fragment, {
                        children: [
                          t.jsx(E, {
                            type: "button",
                            size: "small",
                            variant: "outlined",
                            color: "secondary",
                            onClick: y,
                            children: "Cancel",
                          }),
                          t.jsx(E, {
                            type: "button",
                            size: "small",
                            variant: "outlined",
                            color: "primary",
                            disabled: H,
                            startIcon: t.jsx(we, { size: 15 }),
                            onClick: () => {
                              C(p, _);
                            },
                            children: "Save",
                          }),
                        ],
                      })
                    : t.jsx(E, {
                        type: "button",
                        size: "small",
                        variant: "outlined",
                        color: "secondary",
                        tooltip: F,
                        startIcon: t.jsx(Ee, { size: 15 }),
                        onClick: () => {
                          m(p, A);
                        },
                        children: "Edit",
                      }),
                  G
                    ? t.jsx(E, {
                        type: "button",
                        size: "small",
                        variant: "outlined",
                        color: "secondary",
                        tooltip: z,
                        startIcon: t.jsx(je, { size: 15 }),
                        onClick: () => {
                          X(p, _);
                        },
                        children: "Reset",
                      })
                    : null,
                  t.jsx(Se, {
                    content: M,
                    label: "Copy",
                    tooltipLabel: "Copy next-step prompt",
                    message: "Next-step prompt copied",
                    size: "small",
                    variant: "outlined",
                  }),
                  t.jsx(E, {
                    type: "button",
                    size: "small",
                    variant: "contained",
                    color: "primary",
                    disabled: W,
                    tooltip: B,
                    startIcon: t.jsx(Te, { size: 15 }),
                    onClick: () => {
                      M && (j == null || j(M, d.operation));
                    },
                    children: "Run",
                  }),
                ],
              }),
            ],
          },
          p,
        );
      }),
    });
  },
  ae = 2e3,
  Ke = [
    {
      label: "More technical",
      feedback: "Make the regenerated next steps more technical and rigorous.",
    },
    {
      label: "More diverse",
      feedback: "Give me a wider spread of directions instead of nearby variants.",
    },
    { label: "More concrete", feedback: "Prioritize next steps that are immediately actionable." },
    {
      label: "Higher risk",
      feedback: "Include bolder hypotheses or stress tests, even if speculative.",
    },
  ],
  Qe = { display: "flex", flexDirection: "column", gap: 0 },
  Ue = (e) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: e.spacing(1),
    flexWrap: "wrap",
    marginTop: e.spacing(1),
    [e.breakpoints.down(720)]: { marginTop: e.spacing(0.5) },
  }),
  Ve = (e) => ({
    position: "absolute",
    right: 0,
    bottom: `calc(100% + ${e.spacing(1)})`,
    left: 0,
    zIndex: Math.max(e.zIndex.drawer, e.zIndex.modal) + 1,
    width: "100%",
    padding: e.spacing(1.05),
    border: `1px solid ${f(e.palette.primary.main, 0.16)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: e.palette.background.paper,
    backgroundImage: `linear-gradient(135deg, ${f(e.palette.primary.main, 0.035)}, transparent 46%, ${f(e.palette.success.main, 0.025)})`,
    boxShadow: `inset 0 1px 0 ${f(e.palette.common.white, 0.38)}, 0 22px 70px ${f(e.palette.text.primary, 0.14)}`,
  }),
  Je = { alignItems: "center", justifyContent: "space-between", gap: 1 },
  Ye = { alignItems: "flex-start", gap: 1, minWidth: 0 },
  Ze = (e) => ({
    flex: "0 0 auto",
    width: "1.9rem",
    height: "1.9rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: e.shape.radiusSmPx,
    color: e.palette.primary.main,
    backgroundColor: f(e.palette.primary.main, 0.1),
    boxShadow: `inset 0 0 0 1px ${f(e.palette.primary.main, 0.08)}`,
  }),
  et = { gap: 1, marginTop: 1 },
  tt = { display: "flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" },
  rt = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 1,
    flexWrap: "wrap",
  },
  ot = (e) => ({ display: "flex", flexDirection: "column", gap: e.spacing(0.7) }),
  at = (e) => ({
    alignItems: "flex-start",
    width: "100%",
    margin: 0,
    padding: e.spacing(0.85, 1),
    border: `1px solid ${f(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.radiusSmPx,
    backgroundColor: f(e.palette.background.paper, 0.62),
  }),
  st = { flex: 1, display: "flex", flexDirection: "column", gap: 0.35, minWidth: 0 },
  kt = ({
    areRunAllNextStepsDisabled: e = !1,
    areRunAllNextStepsPending: a = !1,
    areTooltipsDisabled: T = !1,
    isNextStepsActionDisabled: x = !1,
    mathSyntax: P = "compatibility",
    messageIndex: S,
    nextStepChoiceRunLabel: j,
    onRunAllNextSteps: i,
    onRunNextSteps: l,
    onSelectNextStep: R,
    choices: b,
  }) => {
    const [o, k] = n.useState(null),
      [h, c] = n.useState([]),
      [m, y] = n.useState(""),
      [C, X] = n.useState(!1),
      [d, w] = n.useState(null),
      p = n.useMemo(() => (re(b) ? b.map((r) => ({ ...r, prompt: r.prompt.trim() })) : null), [b]),
      u = d && d.source === b ? d.choices : p,
      $ = n.useCallback(
        (r, s) => {
          const v = p == null ? void 0 : p[s];
          return !v || v.operation !== r.operation || v.prompt !== r.prompt;
        },
        [p],
      ),
      _ = n.useCallback(
        (r) => {
          w({ source: b, choices: r });
        },
        [b],
      ),
      N = !!l || !!i,
      A = !!o,
      g = (o == null ? void 0 : o.mode) === "regenerate",
      L = (o == null ? void 0 : o.mode) === "run-all",
      B = m.trim(),
      F = `next-steps-action-panel-${S}`,
      z = h.length,
      M = `${z} ${z === 1 ? "query" : "queries"}`,
      W = g ? "Choose queries to regenerate" : "Choose queries to run",
      H = g
        ? "Checked queries will be replaced. Unchecked queries will stay unchanged."
        : z === 1
          ? "The checked query will run in this chat."
          : "A new chat hierarchy and one branch per checked query will be created.",
      G = g ? `Regenerate ${M}` : `Run ${M}`,
      K = z === 0 || C || (g ? x : e || a),
      O = () => {
        (k(null), c([]), y(""));
      },
      Q = () => {
        const r = o == null ? void 0 : o.triggerEl;
        (O(), r == null || r.focus());
      },
      Z = (r, s) => {
        if (u) {
          if ((o == null ? void 0 : o.mode) === r) {
            O();
            return;
          }
          (c(u.map((v, U) => U)), y(""), k({ triggerEl: s.currentTarget, mode: r }));
        }
      },
      ce = (r) => {
        const s = r.target;
        (s instanceof Node && o != null && o.triggerEl.contains(s)) ||
          (s instanceof Element && s.closest('[data-next-steps-action-trigger="true"]')) ||
          O();
      },
      pe = (r) => {
        c((s) => (s.includes(r) ? s.filter((v) => v !== r) : [...s, r].sort((v, U) => v - U)));
      },
      de = (r) => {
        y((s) => {
          const v = s.trim();
          return v
            ? `${v}
${r}`
            : r;
        });
      },
      ue = (r) => {
        if ((r.preventDefault(), !o || !u || h.length === 0 || C)) return;
        const s = { choices: u, selectedChoiceIndexes: h };
        if (o.mode === "regenerate") {
          if (x) return;
          (l == null || l({ ...s, ...(B ? { feedback: B } : {}) }), O());
          return;
        }
        e || a || (i == null || i(S, s), O());
      };
    return t.jsxs(I, {
      sx: Qe,
      children: [
        re(b)
          ? t.jsx(Ge, {
              choices: b,
              isPromptCompatibility: $,
              mathSyntax: P,
              runLabel: j,
              areTooltipsDisabled: T,
              areRunActionsDisabled: x || a,
              onSelectNextStep: R,
              onChoicesChange: _,
              onEditingChange: X,
            })
          : t.jsx(Re, {
              severity: "error",
              children: "Next Steps response is missing valid choices.",
            }),
        N &&
          t.jsxs(I, {
            sx: Ue,
            children: [
              l &&
                t.jsx(E, {
                  type: "button",
                  size: "small",
                  variant: "contained",
                  color: "primary",
                  disabled: x || C || !u,
                  tooltip: "Regenerate next steps",
                  startIcon: t.jsx(ee, { size: 15 }),
                  "data-next-steps-action-trigger": "true",
                  "aria-haspopup": "dialog",
                  "aria-expanded": g,
                  "aria-controls": g ? F : void 0,
                  onClick: (r) => {
                    Z("regenerate", r);
                  },
                  children: "Regenerate",
                }),
              i &&
                t.jsx(E, {
                  type: "button",
                  size: "small",
                  variant: "contained",
                  color: "primary",
                  disabled: e || a || C || !u,
                  loading: a,
                  tooltip:
                    u && u.length > 1
                      ? "A new chat hierarchy will be created to run the selected queries synchronously."
                      : "Choose which next steps to run",
                  startIcon: t.jsx(J, { size: 15 }),
                  "data-next-steps-action-trigger": "true",
                  "aria-haspopup": "dialog",
                  "aria-expanded": L,
                  "aria-controls": L ? F : void 0,
                  onClick: (r) => {
                    Z("run-all", r);
                  },
                  children: "Run Multiple",
                }),
              A &&
                t.jsx(Me, {
                  onClickAway: ce,
                  children: t.jsxs(ye, {
                    variant: "floating",
                    id: F,
                    component: "form",
                    role: "dialog",
                    "aria-label": W,
                    sx: Ve,
                    onSubmit: ue,
                    onKeyDown: (r) => {
                      r.key === "Escape" && (r.preventDefault(), Q());
                    },
                    children: [
                      t.jsxs(q, {
                        direction: "row",
                        sx: Je,
                        children: [
                          t.jsxs(q, {
                            direction: "row",
                            sx: Ye,
                            children: [
                              t.jsxs(I, {
                                sx: Ze,
                                children: [
                                  g && t.jsx(_e, { size: 17, "aria-hidden": "true" }),
                                  L && t.jsx(J, { size: 17, "aria-hidden": "true" }),
                                ],
                              }),
                              t.jsxs(q, {
                                children: [
                                  t.jsx(D, {
                                    variant: "subtitle2",
                                    color: "textPrimary",
                                    children: W,
                                  }),
                                  t.jsx(D, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: H,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsx(be, {
                            type: "button",
                            tooltip: "Close query selection",
                            "aria-label": "Close query selection",
                            size: "small",
                            onClick: Q,
                            children: t.jsx(ge, { size: 17 }),
                          }),
                        ],
                      }),
                      t.jsxs(q, {
                        sx: et,
                        children: [
                          t.jsx(Pe, {
                            role: "group",
                            "aria-label": "Select next-step queries",
                            sx: ot,
                            children: (u ?? []).map((r, s) =>
                              t.jsx(
                                $e,
                                {
                                  disableTypography: !0,
                                  sx: at,
                                  control: t.jsx(Ie, {
                                    autoFocus: s === 0,
                                    checked: h.includes(s),
                                    size: "small",
                                    onChange: () => {
                                      pe(s);
                                    },
                                  }),
                                  label: t.jsxs(q, {
                                    sx: st,
                                    children: [
                                      t.jsxs(D, {
                                        variant: "subtitle2",
                                        color: "textPrimary",
                                        children: ["Query ", s + 1, " ·", " ", ne(r.operation)],
                                      }),
                                      t.jsx(se, {
                                        content: r.prompt,
                                        mathSyntax: $(r, s) ? "compatibility" : P,
                                        mode: "compact",
                                      }),
                                    ],
                                  }),
                                },
                                `${r.operation}-${r.prompt}-${s}`,
                              ),
                            ),
                          }),
                          z === 0 &&
                            t.jsx(D, {
                              variant: "caption",
                              color: "error",
                              children: "Select at least one query.",
                            }),
                          g &&
                            t.jsxs(t.Fragment, {
                              children: [
                                t.jsx(I, {
                                  sx: tt,
                                  children: Ke.map((r) =>
                                    t.jsx(
                                      E,
                                      {
                                        type: "button",
                                        size: "small",
                                        variant: "outlined",
                                        color: "secondary",
                                        onClick: () => {
                                          de(r.feedback);
                                        },
                                        children: r.label,
                                      },
                                      r.label,
                                    ),
                                  ),
                                }),
                                t.jsx(ie, {
                                  fullWidth: !0,
                                  multiline: !0,
                                  minRows: 3,
                                  label: "Feedback or preferences (optional)",
                                  placeholder:
                                    "For example: focus on computational checks, avoid literature search, and make each option testable.",
                                  value: m,
                                  helperText: `${m.length}/${ae}`,
                                  slotProps: { htmlInput: { maxLength: ae } },
                                  onChange: (r) => {
                                    y(r.target.value);
                                  },
                                }),
                              ],
                            }),
                          t.jsxs(I, {
                            sx: rt,
                            children: [
                              t.jsx(E, {
                                type: "button",
                                color: "secondary",
                                onClick: Q,
                                children: "Cancel",
                              }),
                              t.jsx(E, {
                                type: "submit",
                                variant: "contained",
                                disabled: K,
                                loading: L && a,
                                startIcon: g ? t.jsx(ee, { size: 16 }) : t.jsx(J, { size: 16 }),
                                children: G,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
      ],
    });
  };
export { Me as C, Ge as N, kt as a, re as i };
