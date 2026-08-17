import {
  ab as pt,
  am as xt,
  r as i,
  F as mt,
  L as X,
  j as e,
  H as gt,
  I as ft,
  K as Z,
  G as ot,
  a3 as Et,
  bo as Pt,
  S as v,
  T as S,
  g as P,
  B as H,
  C as $t,
  _ as Ft,
} from "./index-BM3ZINIl.js";
import { e as W, f as G, E as O, h as N, g as lt } from "./MessageBubble-DqxHrk03.js";
import { a as ht, d as St } from "./ThinkingElapsedLabel-DKCKD95O.js";
import {
  L as _t,
  f as $,
  g as yt,
  A as bt,
  d as At,
  e as Bt,
  c as Dt,
} from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { m as vt, e as jt, S as Wt } from "./SupportingArtifactCard-B1XjYGZI.js";
import { A as It } from "./Alert-DnFVD8li.js";
import { S as J } from "./StructuredMarkdown-DAWLLRpf.js";
import { a as V } from "./Markdown-Dh8LhaRc.js";
import { M as U } from "./MChip-DiH8NXBU.js";
import { L as ct } from "./TextField-D8vc_sXz.js";
import { A as Gt } from "./AlertTitle-B2wnIUF2.js";
function Ot(t) {
  return pt("MuiListItem", t);
}
xt("MuiListItem", [
  "root",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
]);
function Nt(t) {
  return pt("MuiListItemSecondaryAction", t);
}
xt("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Ut = (t) => {
    const { disableGutters: n, classes: a } = t;
    return ft({ root: ["root", n && "disableGutters"] }, Nt, a);
  },
  zt = Z("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, n) => {
      const { ownerState: a } = t;
      return [n.root, a.disableGutters && n.disableGutters];
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [{ props: ({ ownerState: t }) => t.disableGutters, style: { right: 0 } }],
  }),
  wt = i.forwardRef(function (n, a) {
    const r = mt({ props: n, name: "MuiListItemSecondaryAction" }),
      { className: g, component: p, ...l } = r,
      b = i.useContext(X),
      u = { ...r, disableGutters: b.disableGutters },
      f = Ut(u);
    return e.jsx(zt, { as: p, className: gt(f.root, g), ownerState: u, ref: a, ...l });
  });
wt.muiName = "ListItemSecondaryAction";
const Ht = (t, n) => {
    const { ownerState: a } = t;
    return [
      n.root,
      a.dense && n.dense,
      a.alignItems === "flex-start" && n.alignItemsFlexStart,
      a.divider && n.divider,
      !a.disableGutters && n.gutters,
      !a.disablePadding && n.padding,
    ];
  },
  Vt = (t) => {
    const {
      alignItems: n,
      classes: a,
      dense: r,
      disableGutters: g,
      disablePadding: p,
      divider: l,
    } = t;
    return ft(
      {
        root: [
          "root",
          r && "dense",
          !g && "gutters",
          !p && "padding",
          l && "divider",
          n === "flex-start" && "alignItemsFlexStart",
        ],
        secondaryAction: ["secondaryAction"],
      },
      Ot,
      a,
    );
  },
  qt = Z("div", { name: "MuiListItem", slot: "Root", overridesResolver: Ht })(
    Et(({ theme: t }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: n }) => !n.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: n }) => !n.disablePadding && n.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: n }) => !n.disablePadding && !n.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: n }) => !n.disablePadding && !!n.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: n }) => !!n.secondaryAction,
          style: { [`& > .${Pt.root}`]: { paddingRight: 48 } },
        },
        { props: { alignItems: "flex-start" }, style: { alignItems: "flex-start" } },
        {
          props: ({ ownerState: n }) => n.divider,
          style: {
            borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: n }) => n.button,
          style: {
            transition: t.transitions.create("background-color", {
              duration: t.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (t.vars || t).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
      ],
    })),
  ),
  Kt = Z(wt, { name: "MuiListItem", slot: "secondaryAction" })({}),
  Yt = i.forwardRef(function (n, a) {
    const r = mt({ props: n, name: "MuiListItem" }),
      {
        alignItems: g = "center",
        children: p,
        className: l,
        component: b = "li",
        dense: u = !1,
        disableGutters: f = !1,
        disablePadding: A = !1,
        divider: w = !1,
        secondaryAction: M,
        slotProps: L = {},
        slots: s = {},
        ...m
      } = r,
      o = i.useContext(X),
      h = i.useMemo(
        () => ({ dense: u || o.dense || !1, alignItems: g, disableGutters: f }),
        [g, o.dense, u, f],
      ),
      j = {
        ...r,
        alignItems: g,
        dense: h.dense,
        disableGutters: f,
        disablePadding: A,
        divider: w,
        secondaryAction: M,
      },
      T = Vt(j),
      c = { slots: s, slotProps: L },
      [R, d] = ot("root", {
        ref: a,
        elementType: qt,
        externalForwardedProps: { component: b, ...c, ...m },
        ownerState: j,
        className: gt(T.root, l),
      }),
      [E, C] = ot("secondaryAction", {
        elementType: Kt,
        shouldForwardComponentProp: !0,
        externalForwardedProps: c,
        ownerState: j,
        className: T.secondaryAction,
      });
    return e.jsx(X.Provider, {
      value: h,
      children: e.jsxs(R, { ...d, children: [p, M && e.jsx(E, { ...C, children: M })] }),
    });
  }),
  Jt = ({
    areCitationPreviewsEnabled: t = !0,
    areVariableHighlightsEnabled: n = !0,
    areWriteupActionsEnabled: a = !0,
    areWriteupExportsEnabled: r = !0,
    chatId: g = null,
    message: p,
    messageIndex: l,
    onContentResizeInteraction: b,
    output: u,
    responseNumber: f,
    shouldPrepareWriteupPdf: A = !1,
    writeupPdfPreparationPriority: w = 0,
  }) => {
    const {
      artifacts: M,
      citations: L,
      missingArtifactRefs: s,
      sources: m,
      toolCalls: o,
    } = i.useMemo(() => {
      if (!p)
        return {
          artifacts: [],
          citations: [],
          missingArtifactRefs: [],
          sources: [],
          toolCalls: [],
        };
      const h = new Set(u.citationIds),
        j = new Set(u.sourceIds),
        T = u.toolCallIndexes.map((d) => {
          var C;
          const E = (C = p.toolCalls) == null ? void 0 : C[d];
          if (!E)
            throw new Error(
              `Agent operation output '${u.id}' references unavailable tool call ${d}.`,
            );
          return E;
        }),
        { matchedArtifacts: c, missingArtifactRefs: R } = vt(u.artifactRefs, jt(p));
      return {
        artifacts: c,
        citations: (p.citations ?? []).filter((d) => h.has(d.id)),
        missingArtifactRefs: R,
        sources: (p.sources ?? []).filter((d) => j.has(d.id)),
        toolCalls: T,
      };
    }, [p, u]);
    return e.jsxs(v, {
      spacing: 0.8,
      children: [
        e.jsx(i.Suspense, {
          fallback: null,
          children: e.jsx(_t, {
            chatId: g,
            messageIndex: l,
            areWriteupActionsEnabled: a,
            areWriteupExportsEnabled: r,
            areCitationPreviewsEnabled: t,
            areVariableHighlightsEnabled: n,
            shouldPrepareWriteupPdf: A,
            writeupPdfPreparationPriority: w,
            responseNumber: f,
            markdownMathFormat: u.markdownMathFormat ?? (p == null ? void 0 : p.markdownMathFormat),
            response: u.response,
            toolCalls: o,
            computationArtifacts: u.operation === "compute" ? M : void 0,
            visualizationArtifacts: u.operation === "visualization" ? M : void 0,
            citations: L,
            sources: m,
            sectionIdPrefix: `agent-output-${u.id}`,
            sectionsAriaLabel: `Sections for ${u.title}`,
            onContentResizeInteraction: b,
          }),
        }),
        s.length > 0 &&
          e.jsxs(It, {
            severity: "error",
            children: ["Referenced operation artifacts are unavailable:", " ", s.join(", "), "."],
          }),
      ],
    });
  },
  tt = i.memo(Jt),
  Qt = (t) => ({
    marginTop: t.spacing(1.25),
    border: `1px solid ${P(t.palette.text.primary, 0.08)}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: P(t.palette.background.paper, 0.52),
    boxShadow: "none",
    "&::before": { display: "none" },
  }),
  Xt = (t) => ({
    display: "flex",
    alignItems: "center",
    gap: t.spacing(0.8),
    flexWrap: "wrap",
    minWidth: 0,
  }),
  Mt = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.75),
    margin: 0,
    padding: 0,
    listStyle: "none",
  }),
  Zt = (t) => ({ display: "flex", flexDirection: "column", gap: t.spacing(1) }),
  te = (t) => ({
    border: `1px solid ${P(t.palette.primary.main, 0.14)}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: P(t.palette.primary.main, 0.07),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }),
  ee = (t) => ({
    minHeight: "3.75rem",
    padding: t.spacing(0, 1.9),
    "&.Mui-expanded": { minHeight: "3.75rem" },
    "& .MuiAccordionSummary-content": { minWidth: 0, margin: t.spacing(1.15, 0) },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: t.spacing(1.15, 0) },
    "& .MuiAccordionSummary-expandIconWrapper": { color: t.palette.primary.main },
  }),
  ne = (t) => ({
    display: "flex",
    alignItems: "center",
    gap: t.spacing(1.5),
    width: "100%",
    minWidth: 0,
  }),
  re = { flex: "0 0 auto" },
  ae = { flex: "1 1 auto", minWidth: 0 },
  ie = { flex: "0 0 auto", marginLeft: "auto" },
  se = (t) => ({ padding: t.spacing(0.2, 1.9, 1.5) }),
  oe = (t) => ({
    border: `1px solid ${P(t.palette.text.primary, 0.075)}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: P(t.palette.background.default, 0.38),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }),
  le = (t) => ({
    minHeight: "2.75rem",
    padding: t.spacing(0, 1.1),
    "&.Mui-expanded": { minHeight: "2.75rem" },
    "& .MuiAccordionSummary-content": { minWidth: 0, margin: t.spacing(0.7, 0) },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: t.spacing(0.7, 0) },
  }),
  ce = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.7),
    padding: t.spacing(0.25, 1.1, 1.1),
  }),
  de = (t) => ({
    display: "flex",
    alignItems: "center",
    gap: t.spacing(0.7),
    flexWrap: "wrap",
    minWidth: 0,
  }),
  ue = { display: "inline-flex", flex: "0 0 auto" },
  pe = { flex: "1 1 14rem", minWidth: 0 },
  xe = { completed: "Completed", partial: "Partial result", failed: "Failed" },
  me = { completed: "success", partial: "warning", failed: "error" },
  dt = {
    planned: "Planned",
    running: "Running",
    completed: "Completed",
    partial: "Partial",
    failed: "Failed",
    canceled: "Canceled",
  },
  ge = {
    planned: "default",
    running: "primary",
    completed: "success",
    partial: "warning",
    failed: "error",
    canceled: "default",
  },
  fe = { waiting: "Waiting...", reasoning: "Reasoning...", generating: "Generating result..." },
  he = (t) => {
    if (t.startedAtMs === null || t.finishedAtMs === null) return { label: null, isInvalid: !1 };
    const n = t.finishedAtMs - t.startedAtMs;
    return n < 0
      ? { label: "Invalid operation duration", isInvalid: !0 }
      : n < 1e3
        ? { label: `${n} ms`, isInvalid: !1 }
        : { label: `${(n / 1e3).toFixed(n < 1e4 ? 2 : 1)} s`, isInvalid: !1 };
  },
  et = i.memo(function ({
    operation: n,
    operationStream: a,
    operationElementId: r,
    displayTitle: g,
    onExpandedChange: p,
    requestedExpanded: l = !1,
    showScopeLabel: b = !0,
    timerRunId: u,
    streamStartedAt: f,
    onContentChange: A,
    outputView: w,
  }) {
    const [M, L] = i.useState(
        n.status === "running" ||
          (n.operation === "question" && (n.status === "completed" || n.status === "partial")),
      ),
      s = l || M,
      m = g ?? n.title,
      o = i.useMemo(() => $(m), [m]),
      h = i.useMemo(() => (n.summary ? $(n.summary) : null), [n.summary]),
      j = he(n),
      T = n.startedAtMs ?? f;
    if (a && T === void 0)
      throw new Error("Live Agent operation progress is missing its start time.");
    if (a && u === void 0)
      throw new Error("Live Agent operation progress is missing its timer scope.");
    const c = n.taskId ? `Task: ${n.taskId}` : "Direct Agent work";
    return e.jsxs(W, {
      component: "li",
      expanded: s,
      id: r,
      disableGutters: !0,
      elevation: 0,
      sx: oe,
      onChange: (R, d) => {
        (L(d), p == null || p(d));
      },
      children: [
        e.jsx(G, {
          expandIcon: e.jsx(O, {}),
          sx: le,
          "aria-label": `Operation: ${m}. Status: ${dt[n.status]}.`,
          children: e.jsxs(v, {
            direction: "row",
            sx: de,
            children: [
              e.jsx(H, {
                sx: ue,
                "aria-hidden": "true",
                children: e.jsx(ht, { operation: n.operation, size: 17 }),
              }),
              e.jsx(H, {
                sx: pe,
                children: e.jsx(S, {
                  variant: n.operation === "question" ? "subtitle2" : "body2",
                  color: "textPrimary",
                  noWrap: !s,
                  children: e.jsx(V, { content: o, inline: !0, mode: "compact" }),
                }),
              }),
              e.jsx(U, { label: yt(n.operation), size: "xs", variant: "outlined" }),
              e.jsx(U, { label: dt[n.status], color: ge[n.status], size: "xs", variant: "filled" }),
            ],
          }),
        }),
        e.jsxs(N, {
          sx: ce,
          children: [
            s && w,
            !w && h && e.jsx(J, { content: h, mode: "compact" }),
            b && e.jsx(S, { variant: "caption", color: "textSecondary", children: c }),
            n.error &&
              e.jsx(S, {
                variant: "caption",
                color: "error",
                children: n.status === "canceled" ? n.error : bt,
              }),
            j.label &&
              e.jsxs(S, {
                variant: "caption",
                color: j.isInvalid ? "error" : "textSecondary",
                children: ["Duration: ", j.label],
              }),
            a &&
              T !== void 0 &&
              u !== void 0 &&
              e.jsx(At, {
                ariaLive: "off",
                headingLabel: "Progress",
                runId: u,
                startedAt: T,
                statusLabel: fe[a.phase],
                streamText: a.reasoningText,
                onContentChange: A,
              }),
          ],
        }),
      ],
    });
  }),
  Se = ({
    chatId: t,
    messageIndex: n,
    runId: a,
    operations: r,
    operationOutputs: g = [],
    operationStreams: p,
    responseNumber: l,
    startedAt: b,
    statusLabel: u = "Planning tasks...",
    tasks: f,
    onContentChange: A,
  }) => {
    const [w, M] = i.useState(!0),
      L = i.useId().replaceAll(":", ""),
      s = `agent-progress-details-${L}`,
      m = `agent-progress-summary-${L}`,
      o = new Map(f.map((c) => [c.taskId, c.title])),
      h = [
        ...r.filter((c) => c.status !== "planned" && c.status !== "running"),
        ...r.filter((c) => c.status === "planned" || c.status === "running"),
      ],
      j = new Map(p.map((c) => [c.operationId, c]));
    if (j.size !== p.length)
      throw new Error("Live Agent operation progress contains duplicate ids.");
    const T = new Map(g.map((c) => [c.id, c]));
    if (T.size !== g.length) throw new Error("Live Agent operation outputs contain duplicate ids.");
    return e.jsxs(W, {
      component: "section",
      expanded: w,
      disableGutters: !0,
      elevation: 0,
      "aria-label": "Agent progress",
      sx: te,
      onChange: (c, R) => {
        M(R);
      },
      children: [
        e.jsx(G, {
          "aria-controls": s,
          "aria-label": "Agent progress",
          expandIcon: e.jsx(O, {}),
          id: m,
          sx: ee,
          children: e.jsxs(v, {
            direction: "row",
            sx: ne,
            children: [
              e.jsx($t, { "aria-label": "Agent progress active", size: 14, thickness: 5 }),
              e.jsx(S, {
                variant: "subtitle2",
                color: "primary",
                sx: re,
                children: "Agent progress",
              }),
              f.length === 0 &&
                r.length === 0 &&
                e.jsx(S, { variant: "subtitle2", color: "textSecondary", sx: ae, children: u }),
              e.jsx(H, {
                sx: ie,
                children: e.jsx(St, {
                  runId: a,
                  startedAt: b,
                  color: "primary",
                  variant: "elapsedTime",
                }),
              }),
            ],
          }),
        }),
        e.jsx(N, {
          "aria-labelledby": m,
          id: s,
          sx: se,
          children: e.jsx(v, {
            sx: Zt,
            children:
              h.length > 0 &&
              e.jsx(v, {
                component: "ol",
                "aria-label": "Agent operation timeline",
                sx: Mt,
                children: h.map((c) => {
                  const R = T.get(c.id);
                  return e.jsx(
                    et,
                    {
                      operation: c,
                      operationStream: j.get(c.id),
                      displayTitle: c.taskId ? o.get(c.taskId) : c.title,
                      outputView:
                        R && n !== void 0
                          ? e.jsx(tt, { chatId: t, messageIndex: n, output: R, responseNumber: l })
                          : void 0,
                      showScopeLabel: !1,
                      timerRunId: `${a}:${c.id}`,
                      streamStartedAt: b,
                      onContentChange: A,
                    },
                    c.id,
                  );
                }),
              }),
          }),
        }),
      ],
    });
  },
  sn = i.memo(Se),
  ye = ({
    execution: t,
    areCitationPreviewsEnabled: n = !0,
    areVariableHighlightsEnabled: a = !0,
    areWriteupActionsEnabled: r = !0,
    areWriteupExportsEnabled: g = !0,
    chatId: p,
    message: l,
    messageIndex: b,
    onContentResizeInteraction: u,
    operationOutputRequestKey: f,
    requestedOperationOutputId: A = null,
    responseNumber: w,
    shouldPrepareWriteupPdf: M = !1,
    writeupPdfPreparationPriority: L = 0,
  }) => {
    const s = i.useId().replaceAll(":", ""),
      m = `agent-execution-summary-${s}`,
      o = `agent-execution-details-${s}`,
      h = `direct-operation-${s}`,
      [j, T] = i.useState(!1),
      [c, R] = i.useState(() => new Set()),
      d = i.useMemo(() => t.operations.filter((y) => y.taskId === null), [t.operations]),
      E = i.useMemo(() => new Set(d.map((y) => y.id)), [d]),
      C = i.useMemo(() => new Map(t.outputs.map((y) => [y.id, y])), [t.outputs]),
      F = d.filter((y) => y.status === "completed").length,
      z = d.length - F,
      q = [F > 0 ? `${F} completed` : null, z > 0 ? `${z} incomplete` : null]
        .filter(Boolean)
        .join(" · ");
    return (
      i.useEffect(() => {
        if (!A || !E.has(A)) return;
        (T(!0), R((k) => new Set([...k, A])));
        const y = window.requestAnimationFrame(() => {
          var _;
          const k = document.getElementById(`${h}-${A}`);
          (k == null || k.scrollIntoView({ behavior: "smooth", block: "start" }),
            (_ = k == null ? void 0 : k.querySelector("button")) == null || _.focus());
        });
        return () => {
          window.cancelAnimationFrame(y);
        };
      }, [E, h, f, A]),
      d.length === 0
        ? null
        : e.jsxs(W, {
            expanded: j,
            disableGutters: !0,
            elevation: 0,
            sx: Qt,
            onChange: (y, k) => {
              T(k);
            },
            children: [
              e.jsx(G, {
                expandIcon: e.jsx(O, {}),
                "aria-controls": o,
                id: m,
                children: e.jsxs(v, {
                  sx: Xt,
                  children: [
                    e.jsx(S, { variant: "subtitle2", children: "Agent progress" }),
                    e.jsx(U, {
                      label: xe[t.outcome],
                      color: me[t.outcome],
                      size: "xs",
                      variant: "filled",
                    }),
                    q && e.jsx(S, { variant: "caption", color: "textSecondary", children: q }),
                  ],
                }),
              }),
              e.jsx(N, {
                children: e.jsx(v, {
                  component: "ol",
                  "aria-label": "Agent progress timeline",
                  sx: Mt,
                  children: d.map((y) => {
                    const k = C.get(y.id);
                    return e.jsx(
                      et,
                      {
                        operation: y,
                        operationElementId: `${h}-${y.id}`,
                        onExpandedChange: (_) => {
                          _ ||
                            R((D) => {
                              const K = new Set(D);
                              return (K.delete(y.id), K);
                            });
                        },
                        outputView:
                          k && l && b !== void 0
                            ? e.jsx(tt, {
                                areCitationPreviewsEnabled: n,
                                areVariableHighlightsEnabled: a,
                                areWriteupActionsEnabled: r,
                                areWriteupExportsEnabled: g,
                                chatId: p,
                                message: l,
                                messageIndex: b,
                                onContentResizeInteraction: u,
                                output: k,
                                responseNumber: w,
                                shouldPrepareWriteupPdf: M,
                                writeupPdfPreparationPriority: L,
                              })
                            : void 0,
                        requestedExpanded: c.has(y.id),
                      },
                      y.id,
                    );
                  }),
                }),
              }),
            ],
          })
    );
  },
  on = i.memo(ye),
  be = (t) => ({ gap: t.spacing(0.8) }),
  Ae = (t) => ({
    alignItems: "center",
    justifyContent: "space-between",
    gap: t.spacing(1),
    flexWrap: "wrap",
  }),
  ve = (t) => ({ gap: t.spacing(0.7) }),
  je = (t) => ({
    border: `1px solid ${P(t.palette.text.primary, 0.08)}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: P(t.palette.background.paper, 0.52),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }),
  Ie = (t) => ({
    minHeight: "3.2rem",
    padding: t.spacing(0, 1.25),
    "&.Mui-expanded": { minHeight: "3.2rem" },
    "& .MuiAccordionSummary-content": { minWidth: 0, margin: t.spacing(0.8, 0) },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: t.spacing(0.8, 0) },
  }),
  we = (t) => ({ minWidth: 0, gap: t.spacing(0.35), flex: 1 }),
  Me = (t) => ({ minWidth: 0, alignItems: "flex-start", gap: t.spacing(0.7) }),
  Ce = { minWidth: 0, flex: 1 },
  Te = (t) => ({ alignItems: "center", gap: t.spacing(0.55), flexWrap: "wrap" }),
  Le = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(1.2),
    padding: t.spacing(0.3, 1.25, 1.3),
  }),
  Y = (t) => ({ gap: t.spacing(0.25) }),
  Re = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.75),
    margin: 0,
    padding: 0,
    listStyle: "none",
  }),
  ke = (t) => ({ gap: t.spacing(0.8) }),
  Ee = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.8),
    margin: 0,
    padding: 0,
  }),
  Ct = (t) => ({
    border: `1px solid ${P(t.palette.text.primary, 0.075)}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: P(t.palette.background.default, 0.38),
    boxShadow: "none",
    "&::before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }),
  Tt = (t) => ({
    minHeight: "2.75rem",
    padding: t.spacing(0, 1.1),
    "&.Mui-expanded": { minHeight: "2.75rem" },
    "& .MuiAccordionSummary-content": { minWidth: 0, margin: t.spacing(0.7, 0) },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: t.spacing(0.7, 0) },
  }),
  Lt = (t) => ({
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.65),
    padding: t.spacing(0.25, 1.1, 1.1),
  }),
  Pe = (t) => ({
    alignItems: "center",
    justifyContent: "space-between",
    gap: t.spacing(0.8),
    minWidth: 0,
    width: "100%",
  }),
  $e = { flex: 1, minWidth: 0 },
  ut = (t) => ({ alignItems: "center", gap: t.spacing(0.6), flexWrap: "wrap" }),
  Fe = (t) => ({ gap: t.spacing(0.7) }),
  _e = { listStyle: "disc", paddingLeft: 3 },
  Be = [],
  De = {
    planned: "Planned",
    running: "Running",
    completed: "Completed",
    partial: "Partial",
    failed: "Failed",
    canceled: "Canceled",
  },
  We = {
    planned: "default",
    running: "primary",
    completed: "success",
    partial: "warning",
    failed: "error",
    canceled: "default",
  },
  Ge = { waiting: "Waiting...", reasoning: "Reasoning...", generating: "Preparing task result..." },
  Q = {
    pending: "Pending",
    met: "Met",
    partially_met: "Partially met",
    not_met: "Not met",
    not_evaluated: "Not evaluated",
  },
  Oe = {
    pending: "default",
    met: "success",
    partially_met: "warning",
    not_met: "error",
    not_evaluated: "default",
  },
  Ne = i.memo(function ({ task: n }) {
    const a = Date.parse(n.startedAt ?? n.createdAt);
    if (!Number.isFinite(a))
      return e.jsx(S, { variant: "caption", color: "error", children: "Invalid task start time" });
    if (n.status === "running")
      return e.jsx(St, {
        runId: `${n.taskId}-${n.createdAt}`,
        startedAt: a,
        titlePrefix: "Task running for",
        variant: "caption",
        color: "textSecondary",
      });
    if (!n.completedAt) return null;
    const r = Date.parse(n.completedAt);
    return !Number.isFinite(r) || r < a
      ? e.jsx(S, { variant: "caption", color: "error", children: "Invalid task duration" })
      : e.jsx(S, { variant: "caption", color: "textSecondary", children: Bt((r - a) / 1e3) });
  }),
  Ue = i.memo(function ({
    areCitationPreviewsEnabled: n,
    criterion: a,
    message: r,
    operationOutputs: g,
    onOperationOutputSelect: p,
  }) {
    const l = i.useMemo(() => new Map(g.map((s) => [s.id, s])), [g]),
      b = i.useMemo(
        () => new Map(((r == null ? void 0 : r.citations) ?? []).map((s) => [s.id, s])),
        [r == null ? void 0 : r.citations],
      ),
      u = i.useMemo(
        () => new Map(((r == null ? void 0 : r.sources) ?? []).map((s) => [s.id, s])),
        [r == null ? void 0 : r.sources],
      ),
      f = i.useMemo(() => (r ? jt(r) : []), [r]),
      { matchedArtifacts: A, missingArtifactRefs: w } = i.useMemo(
        () => vt(a.artifactRefs, f),
        [f, a.artifactRefs],
      ),
      M = a.operationOutputIds.length > 0 || a.citationIds.length > 0 || a.artifactRefs.length > 0,
      L = (r == null ? void 0 : r.markdownMathFormat) ?? void 0;
    return M
      ? e.jsxs(v, {
          sx: ke,
          children: [
            a.operationOutputIds.length > 0 &&
              e.jsxs(v, {
                direction: "row",
                useFlexGap: !0,
                sx: ut,
                children: [
                  e.jsx(S, { variant: "caption", color: "textSecondary", children: "Evidence" }),
                  a.operationOutputIds.map((s) => {
                    const m = l.get(s);
                    return !m || !p
                      ? e.jsx(
                          U,
                          {
                            label: m
                              ? e.jsx(V, {
                                  content: $(m.title, m.markdownMathFormat ?? L),
                                  inline: !0,
                                  mode: "compact",
                                })
                              : s,
                            size: "xs",
                            variant: "outlined",
                          },
                          s,
                        )
                      : e.jsx(
                          Ft,
                          {
                            type: "button",
                            size: "small",
                            variant: "text",
                            startIcon: e.jsx(ht, { operation: m.operation, size: 15 }),
                            "aria-label": `Open ${yt(m.operation)} output for criterion: ${a.text}`,
                            onClick: () => {
                              p(s);
                            },
                            children: e.jsx(V, {
                              content: $(m.title, m.markdownMathFormat ?? L),
                              inline: !0,
                              mode: "compact",
                            }),
                          },
                          s,
                        );
                  }),
                ],
              }),
            r &&
              a.citationIds.map((s) => {
                const m = b.get(s);
                return m
                  ? e.jsxs(
                      v,
                      {
                        direction: "row",
                        useFlexGap: !0,
                        sx: ut,
                        children: [
                          e.jsx(S, {
                            variant: "caption",
                            color: "textSecondary",
                            children: "Citation",
                          }),
                          m.sourceIds.map((o) => {
                            const h = u.get(o);
                            return h
                              ? e.jsx(
                                  Dt,
                                  {
                                    accessibleLabel: `${s}: ${lt(h)}`,
                                    href: h.url,
                                    isPreviewEnabled: n,
                                    label: lt(h),
                                  },
                                  o,
                                )
                              : e.jsxs(
                                  S,
                                  {
                                    variant: "caption",
                                    color: "error",
                                    children: ["Referenced source ", o, " is unavailable."],
                                  },
                                  o,
                                );
                          }),
                        ],
                      },
                      s,
                    )
                  : e.jsxs(
                      S,
                      {
                        variant: "caption",
                        color: "error",
                        children: ["Referenced citation ", s, " is unavailable."],
                      },
                      s,
                    );
              }),
            r &&
              A.length > 0 &&
              e.jsx(v, {
                sx: Fe,
                "aria-label": "Criterion artifacts",
                children: A.map((s, m) =>
                  e.jsx(
                    Wt,
                    {
                      artifact: s,
                      caption: `Evidence for ${a.text}`,
                      mathSyntax:
                        (r == null ? void 0 : r.markdownMathFormat) === "canonical-v1"
                          ? "canonical"
                          : "compatibility",
                      pythonCode: null,
                      supportingFileNumber: m + 1,
                    },
                    s.key,
                  ),
                ),
              }),
            r &&
              w.map((s) =>
                e.jsxs(
                  S,
                  {
                    variant: "caption",
                    color: "error",
                    children: ["Referenced artifact ", s, " is unavailable."],
                  },
                  s,
                ),
              ),
          ],
        })
      : null;
  }),
  ze = i.memo(function ({
    areCitationPreviewsEnabled: n,
    criterion: a,
    message: r,
    operationOutputs: g,
    onOperationOutputSelect: p,
  }) {
    const [l, b] = i.useState(!1),
      u =
        (r == null ? void 0 : r.markdownMathFormat) === "canonical-v1"
          ? "canonical"
          : "compatibility",
      f = i.useMemo(
        () => $(a.text, (r == null ? void 0 : r.markdownMathFormat) ?? void 0),
        [a.text, r == null ? void 0 : r.markdownMathFormat],
      ),
      A = i.useMemo(
        () =>
          a.resultSummary
            ? $(a.resultSummary, (r == null ? void 0 : r.markdownMathFormat) ?? void 0)
            : null,
        [a.resultSummary, r == null ? void 0 : r.markdownMathFormat],
      );
    return e.jsxs(W, {
      component: "li",
      expanded: l,
      disableGutters: !0,
      elevation: 0,
      sx: Ct,
      onChange: (w, M) => {
        b(M);
      },
      children: [
        e.jsx(G, {
          expandIcon: e.jsx(O, {}),
          sx: Tt,
          "aria-label": `Criterion: ${a.text}. Status: ${Q[a.status]}.`,
          children: e.jsxs(v, {
            direction: "row",
            sx: Pe,
            children: [
              e.jsx(H, {
                sx: $e,
                children: e.jsx(S, {
                  variant: "body2",
                  color: "textPrimary",
                  noWrap: !l,
                  children: e.jsx(V, { content: f, inline: !0, mathSyntax: u, mode: "compact" }),
                }),
              }),
              e.jsx(U, {
                label: Q[a.status],
                color: Oe[a.status],
                size: "xs",
                variant: "filled",
                "aria-label": `Criterion status: ${Q[a.status]}`,
              }),
            ],
          }),
        }),
        e.jsxs(N, {
          sx: Lt,
          children: [
            A && e.jsx(J, { content: A, mathSyntax: u, mode: "compact" }),
            e.jsx(Ue, {
              areCitationPreviewsEnabled: n,
              criterion: a,
              message: r,
              operationOutputs: g,
              onOperationOutputSelect: p,
            }),
          ],
        }),
      ],
    });
  }),
  He = i.memo(function ({
    areCitationPreviewsEnabled: n,
    areVariableHighlightsEnabled: a,
    areWriteupActionsEnabled: r,
    areWriteupExportsEnabled: g,
    chatId: p,
    message: l,
    messageIndex: b,
    operations: u,
    operationOutputs: f,
    operationOutputRequestKey: A,
    onOperationOutputSelect: w,
    onContentResizeInteraction: M,
    onContentChange: L,
    responseNumber: s,
    shouldPrepareWriteupPdf: m,
    task: o,
    taskStream: h,
    requestedOperationOutputId: j,
    writeupPdfPreparationPriority: T,
  }) {
    const [c, R] = i.useState(o.status === "running"),
      [d, E] = i.useState(!1),
      C =
        (l == null ? void 0 : l.markdownMathFormat) === "canonical-v1"
          ? "canonical"
          : "compatibility",
      F = i.useMemo(
        () => $(o.title, (l == null ? void 0 : l.markdownMathFormat) ?? void 0),
        [l == null ? void 0 : l.markdownMathFormat, o.title],
      ),
      z = i.useMemo(
        () =>
          o.resultSummary
            ? $(o.resultSummary, (l == null ? void 0 : l.markdownMathFormat) ?? void 0)
            : null,
        [l == null ? void 0 : l.markdownMathFormat, o.resultSummary],
      ),
      q = i.useMemo(
        () =>
          o.unresolvedItems.map((x) => ({
            content: $(x, (l == null ? void 0 : l.markdownMathFormat) ?? void 0),
            item: x,
          })),
        [l == null ? void 0 : l.markdownMathFormat, o.unresolvedItems],
      ),
      y = `task-operation-${i.useId().replaceAll(":", "")}`,
      [k, _] = i.useState(() => new Set()),
      D = i.useMemo(() => new Set(u.map((x) => x.id)), [u]),
      K = i.useMemo(() => new Map(f.map((x) => [x.id, x])), [f]);
    i.useEffect(() => {
      if (!j || !D.has(j)) return;
      (R(!0), _((I) => new Set([...I, j])));
      const x = window.requestAnimationFrame(() => {
        var B;
        const I = document.getElementById(`${y}-${j}`);
        (I == null || I.scrollIntoView({ behavior: "smooth", block: "start" }),
          (B = I == null ? void 0 : I.querySelector("button")) == null || B.focus());
      });
      return () => {
        window.cancelAnimationFrame(x);
      };
    }, [y, D, A, j]);
    const Rt = i.useCallback(
        (x) => {
          if (!D.has(x))
            throw new Error(`Criterion evidence references unavailable task operation '${x}'.`);
          (_((I) => new Set([...I, x])),
            w == null || w(x),
            window.requestAnimationFrame(() => {
              var I, B;
              (B =
                (I = document.getElementById(`${y}-${x}`)) == null
                  ? void 0
                  : I.querySelector("button")) == null || B.focus();
            }));
        },
        [w, y, D],
      ),
      nt = `${o.successCriteria.filter((x) => x.status === "met").length} of ${o.successCriteria.length} success criteria met`,
      rt = De[o.status],
      at = o.status === "running" || !!o.completedAt,
      it = Date.parse(o.startedAt ?? o.createdAt);
    if (h && !Number.isFinite(it))
      throw new Error("Live Agent task progress is missing its start time.");
    return e.jsxs(W, {
      expanded: c,
      disableGutters: !0,
      elevation: 0,
      sx: je,
      onChange: (x, I) => {
        R(I);
      },
      children: [
        e.jsx(G, {
          expandIcon: e.jsx(O, {}),
          sx: Ie,
          "aria-label": `Task: ${o.title}. Status: ${rt}. ${nt}.`,
          children: e.jsxs(v, {
            sx: we,
            children: [
              e.jsxs(v, {
                direction: "row",
                sx: Me,
                children: [
                  e.jsx(H, {
                    sx: Ce,
                    children: e.jsx(S, {
                      variant: "subtitle2",
                      color: "textPrimary",
                      noWrap: !c,
                      children: e.jsx(V, {
                        content: F,
                        inline: !0,
                        mathSyntax: C,
                        mode: "compact",
                      }),
                    }),
                  }),
                  e.jsx(U, { label: rt, color: We[o.status], size: "xs", variant: "filled" }),
                ],
              }),
              e.jsxs(v, {
                direction: "row",
                useFlexGap: !0,
                sx: Te,
                children: [
                  e.jsx(S, { variant: "caption", color: "textSecondary", children: nt }),
                  at && e.jsx(S, { variant: "caption", color: "textSecondary", children: "·" }),
                  at && e.jsx(Ne, { task: o }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs(N, {
          sx: Le,
          children: [
            h &&
              e.jsx(At, {
                ariaLive: "off",
                headingLabel: "Worker progress",
                runId: o.taskId,
                startedAt: it,
                statusLabel: Ge[h.phase],
                streamText: h.reasoningText,
                onContentChange: L,
              }),
            u.length > 0 &&
              e.jsxs(v, {
                sx: Y,
                children: [
                  e.jsx(S, {
                    variant: "caption",
                    color: "textSecondary",
                    children: "Task outputs",
                  }),
                  e.jsx(v, {
                    component: "ol",
                    "aria-label": `Outputs for ${o.title}`,
                    sx: Re,
                    children: u.map((x) => {
                      const I = K.get(x.id);
                      return e.jsx(
                        et,
                        {
                          operation: x,
                          operationElementId: `${y}-${x.id}`,
                          onExpandedChange: (B) => {
                            B ||
                              _((kt) => {
                                const st = new Set(kt);
                                return (st.delete(x.id), st);
                              });
                          },
                          outputView:
                            I && b !== void 0
                              ? e.jsx(tt, {
                                  areCitationPreviewsEnabled: n,
                                  areVariableHighlightsEnabled: a,
                                  areWriteupActionsEnabled: r,
                                  areWriteupExportsEnabled: g,
                                  chatId: p,
                                  message: l,
                                  messageIndex: b,
                                  onContentResizeInteraction: M,
                                  output: I,
                                  responseNumber: s,
                                  shouldPrepareWriteupPdf: m,
                                  writeupPdfPreparationPriority: T,
                                })
                              : void 0,
                          requestedExpanded: k.has(x.id),
                          showScopeLabel: !1,
                        },
                        x.id,
                      );
                    }),
                  }),
                ],
              }),
            o.successCriteria.length > 0 &&
              e.jsxs(v, {
                sx: Y,
                children: [
                  e.jsx(S, {
                    variant: "caption",
                    color: "textSecondary",
                    children: "Success criteria",
                  }),
                  e.jsx(ct, {
                    "aria-label": `Success criteria for ${o.title}`,
                    sx: Ee,
                    children: o.successCriteria.map((x) =>
                      e.jsx(
                        ze,
                        {
                          areCitationPreviewsEnabled: n,
                          criterion: x,
                          message: l,
                          operationOutputs: f,
                          onOperationOutputSelect: Rt,
                        },
                        x.criterionId,
                      ),
                    ),
                  }),
                ],
              }),
            z &&
              e.jsx(v, {
                sx: Y,
                children: e.jsxs(W, {
                  expanded: d,
                  disableGutters: !0,
                  elevation: 0,
                  sx: Ct,
                  onChange: (x, I) => {
                    E(I);
                  },
                  children: [
                    e.jsx(G, {
                      expandIcon: e.jsx(O, {}),
                      sx: Tt,
                      "aria-label": `Task result for ${o.title}.`,
                      children: e.jsx(S, {
                        variant: "subtitle2",
                        color: "textPrimary",
                        children: "Task result",
                      }),
                    }),
                    e.jsx(N, {
                      sx: Lt,
                      children: e.jsx(J, { content: z, mathSyntax: C, mode: "compact" }),
                    }),
                  ],
                }),
              }),
            o.unresolvedItems.length > 0 &&
              e.jsxs(v, {
                sx: Y,
                children: [
                  e.jsx(S, {
                    variant: "caption",
                    color: "textSecondary",
                    children: "Unresolved items",
                  }),
                  e.jsx(ct, {
                    sx: _e,
                    children: q.map(({ content: x, item: I }) =>
                      e.jsx(
                        Yt,
                        {
                          component: "li",
                          disablePadding: !0,
                          children: e.jsx(J, { content: x, mathSyntax: C, mode: "compact" }),
                        },
                        I,
                      ),
                    ),
                  }),
                ],
              }),
            o.safeError &&
              e.jsxs(It, {
                severity: "error",
                children: [
                  e.jsx(Gt, { children: "Task error" }),
                  o.status === "canceled" ? o.safeError.message : bt,
                ],
              }),
          ],
        }),
      ],
    });
  }),
  Ve = ({
    tasks: t,
    chatId: n,
    message: a = null,
    messageIndex: r,
    operations: g = [],
    operationOutputs: p = [],
    operationOutputRequestKey: l,
    onOperationOutputSelect: b,
    requestedOperationOutputId: u = null,
    taskStreams: f = [],
    onContentChange: A,
    onContentResizeInteraction: w,
    areCitationPreviewsEnabled: M = !0,
    areVariableHighlightsEnabled: L = !0,
    areWriteupActionsEnabled: s = !0,
    areWriteupExportsEnabled: m = !0,
    responseNumber: o,
    shouldPrepareWriteupPdf: h = !1,
    writeupPdfPreparationPriority: j = 0,
  }) => {
    const T = i.useMemo(() => {
      const d = new Map(),
        E = new Set(p.map((C) => C.id));
      for (const C of g) {
        if (!C.taskId || (!C.summary && !C.error && !E.has(C.id))) continue;
        const F = d.get(C.taskId) ?? [];
        (F.push(C), d.set(C.taskId, F));
      }
      return d;
    }, [p, g]);
    if (t.length === 0) return null;
    const c = new Map(f.map((d) => [d.taskId, d]));
    if (c.size !== f.length) throw new Error("Live Agent task progress contains duplicate ids.");
    const R = [
      ...t.filter((d) => d.status !== "planned" && d.status !== "running"),
      ...t.filter((d) => d.status === "planned" || d.status === "running"),
    ];
    return e.jsxs(v, {
      component: "section",
      "aria-label": "Agent tasks",
      sx: be,
      children: [
        e.jsxs(v, {
          direction: "row",
          sx: Ae,
          children: [
            e.jsx(S, { variant: "subtitle2", children: "Agent tasks" }),
            e.jsxs(S, {
              variant: "caption",
              color: "textSecondary",
              children: [t.length, " ", t.length === 1 ? "task" : "tasks"],
            }),
          ],
        }),
        e.jsx(v, {
          sx: ve,
          children: R.map((d) =>
            e.jsx(
              He,
              {
                areCitationPreviewsEnabled: M,
                areVariableHighlightsEnabled: L,
                areWriteupActionsEnabled: s,
                areWriteupExportsEnabled: m,
                chatId: n,
                message: a,
                messageIndex: r,
                operations: T.get(d.taskId) ?? Be,
                operationOutputs: p,
                operationOutputRequestKey: l,
                onOperationOutputSelect: b,
                onContentResizeInteraction: w,
                onContentChange: A,
                responseNumber: o,
                shouldPrepareWriteupPdf: h,
                task: d,
                taskStream: c.get(d.taskId),
                requestedOperationOutputId: u,
                writeupPdfPreparationPriority: j,
              },
              `${d.taskId}:${d.startedAt ?? "planned"}`,
            ),
          ),
        }),
      ],
    });
  },
  ln = i.memo(Ve);
export { ln as A, Yt as L, on as a, sn as b };
