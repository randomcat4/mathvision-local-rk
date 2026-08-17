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
  S as _Component2,
  T as S,
  g as P,
  B as H,
  C as $t,
  _ as Ft,
} from "./index-BM3ZINIl.jsx";
import {
  e as W,
  f as G,
  E as O,
  h as N,
  g as lt,
} from "./MessageBubble-DqxHrk03.jsx";
import { a as _Component3, d as St } from "./ThinkingElapsedLabel-DKCKD95O.js";
import {
  L as _t,
  f as $,
  g as yt,
  A as bt,
  d as At,
  e as Bt,
  c as Dt,
} from "./assistantStructuredResponseLazy-CCAemx3W.jsx";
import {
  m as vt,
  e as jt,
  S as Wt,
} from "./SupportingArtifactCard-B1XjYGZI.jsx";
import { A as It } from "./Alert-DnFVD8li.jsx";
import { S as J } from "./StructuredMarkdown-DAWLLRpf.js";
import { a as V } from "./Markdown-Dh8LhaRc.jsx";
import { M as U } from "./MChip-DiH8NXBU.jsx";
import { L as _Component7 } from "./TextField-D8vc_sXz.jsx";
import { A as Gt } from "./AlertTitle-B2wnIUF2.jsx";
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
  return ft(
    {
      root: ["root", n && "disableGutters"],
    },
    Nt,
    a,
  );
};
const _Component = Z("div", {
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
  variants: [
    {
      props: ({ ownerState: t }) => t.disableGutters,
      style: {
        right: 0,
      },
    },
  ],
});
const wt = i.forwardRef(function (n, a) {
  const r = mt({
    props: n,
    name: "MuiListItemSecondaryAction",
  });
  const { className: g, component: p, ...l } = r;
  const b = i.useContext(X);
  const u = {
    ...r,
    disableGutters: b.disableGutters,
  };
  const f = Ut(u);
  return (
    <_Component
      as={p}
      className={gt(f.root, g)}
      ownerState={u}
      ref={a}
      {...l}
    />
  );
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
};
const Vt = (t) => {
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
};
const qt = Z("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Ht,
})(
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
        style: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      {
        props: ({ ownerState: n }) => !n.disablePadding && n.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
      {
        props: ({ ownerState: n }) => !n.disablePadding && !n.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
      {
        props: ({ ownerState: n }) => !n.disablePadding && !!n.secondaryAction,
        style: {
          paddingRight: 48,
        },
      },
      {
        props: ({ ownerState: n }) => !!n.secondaryAction,
        style: {
          [`& > .${Pt.root}`]: {
            paddingRight: 48,
          },
        },
      },
      {
        props: {
          alignItems: "flex-start",
        },
        style: {
          alignItems: "flex-start",
        },
      },
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
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    ],
  })),
);
const Kt = Z(wt, {
  name: "MuiListItem",
  slot: "secondaryAction",
})({});
const Yt = i.forwardRef(function (n, a) {
  const r = mt({
    props: n,
    name: "MuiListItem",
  });
  const {
    alignItems: g = "center",
    children: p,
    className: l,
    component: b = "li",
    dense: u = false,
    disableGutters: f = false,
    disablePadding: A = false,
    divider: w = false,
    secondaryAction: M,
    slotProps: L = {},
    slots: s = {},
    ...m
  } = r;
  const o = i.useContext(X);
  const h = i.useMemo(
    () => ({
      dense: u || o.dense || false,
      alignItems: g,
      disableGutters: f,
    }),
    [g, o.dense, u, f],
  );
  const j = {
    ...r,
    alignItems: g,
    dense: h.dense,
    disableGutters: f,
    disablePadding: A,
    divider: w,
    secondaryAction: M,
  };
  const T = Vt(j);
  const c = {
    slots: s,
    slotProps: L,
  };
  const [R, d] = ot("root", {
    ref: a,
    elementType: qt,
    externalForwardedProps: {
      component: b,
      ...c,
      ...m,
    },
    ownerState: j,
    className: gt(T.root, l),
  });
  const [E, C] = ot("secondaryAction", {
    elementType: Kt,
    shouldForwardComponentProp: true,
    externalForwardedProps: c,
    ownerState: j,
    className: T.secondaryAction,
  });
  return (
    <X.Provider value={h}>
      <R {...d}>
        {p}
        {M && <E {...C}>{M}</E>}
      </R>
    </X.Provider>
  );
});
const Jt = ({
  areCitationPreviewsEnabled: t = true,
  areVariableHighlightsEnabled: n = true,
  areWriteupActionsEnabled: a = true,
  areWriteupExportsEnabled: r = true,
  chatId: g = null,
  message: p,
  messageIndex: l,
  onContentResizeInteraction: b,
  output: u,
  responseNumber: f,
  shouldPrepareWriteupPdf: A = false,
  writeupPdfPreparationPriority: w = 0,
}) => {
  const {
    artifacts: M,
    citations: L,
    missingArtifactRefs: s,
    sources: m,
    toolCalls: o,
  } = i.useMemo(() => {
    if (!p) {
      return {
        artifacts: [],
        citations: [],
        missingArtifactRefs: [],
        sources: [],
        toolCalls: [],
      };
    }
    const h = new Set(u.citationIds);
    const j = new Set(u.sourceIds);
    const T = u.toolCallIndexes.map((d) => {
      var C;
      const E = (C = p.toolCalls) == null ? undefined : C[d];
      if (!E) {
        throw new Error(
          `Agent operation output '${u.id}' references unavailable tool call ${d}.`,
        );
      }
      return E;
    });
    const { matchedArtifacts: c, missingArtifactRefs: R } = vt(
      u.artifactRefs,
      jt(p),
    );
    return {
      artifacts: c,
      citations: (p.citations ?? []).filter((d) => h.has(d.id)),
      missingArtifactRefs: R,
      sources: (p.sources ?? []).filter((d) => j.has(d.id)),
      toolCalls: T,
    };
  }, [p, u]);
  return (
    <_Component2 spacing={0.8}>
      <i.Suspense fallback={null}>
        <_t
          chatId={g}
          messageIndex={l}
          areWriteupActionsEnabled={a}
          areWriteupExportsEnabled={r}
          areCitationPreviewsEnabled={t}
          areVariableHighlightsEnabled={n}
          shouldPrepareWriteupPdf={A}
          writeupPdfPreparationPriority={w}
          responseNumber={f}
          markdownMathFormat={
            u.markdownMathFormat ??
            (p == null ? undefined : p.markdownMathFormat)
          }
          response={u.response}
          toolCalls={o}
          computationArtifacts={u.operation === "compute" ? M : undefined}
          visualizationArtifacts={
            u.operation === "visualization" ? M : undefined
          }
          citations={L}
          sources={m}
          sectionIdPrefix={`agent-output-${u.id}`}
          sectionsAriaLabel={`Sections for ${u.title}`}
          onContentResizeInteraction={b}
        />
      </i.Suspense>
      {s.length > 0 && (
        <It severity="error">
          Referenced operation artifacts are unavailable: {s.join(", ")}.
        </It>
      )}
    </_Component2>
  );
};
const _Component4 = i.memo(Jt);
const Qt = (t) => ({
  marginTop: t.spacing(1.25),
  border: `1px solid ${P(t.palette.text.primary, 0.08)}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: P(t.palette.background.paper, 0.52),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
});
const Xt = (t) => ({
  display: "flex",
  alignItems: "center",
  gap: t.spacing(0.8),
  flexWrap: "wrap",
  minWidth: 0,
});
const Mt = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.75),
  margin: 0,
  padding: 0,
  listStyle: "none",
});
const Zt = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(1),
});
const te = (t) => ({
  border: `1px solid ${P(t.palette.primary.main, 0.14)}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: P(t.palette.primary.main, 0.07),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
});
const ee = (t) => ({
  minHeight: "3.75rem",
  padding: t.spacing(0, 1.9),
  "&.Mui-expanded": {
    minHeight: "3.75rem",
  },
  "& .MuiAccordionSummary-content": {
    minWidth: 0,
    margin: t.spacing(1.15, 0),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: t.spacing(1.15, 0),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: t.palette.primary.main,
  },
});
const ne = (t) => ({
  display: "flex",
  alignItems: "center",
  gap: t.spacing(1.5),
  width: "100%",
  minWidth: 0,
});
const re = {
  flex: "0 0 auto",
};
const ae = {
  flex: "1 1 auto",
  minWidth: 0,
};
const ie = {
  flex: "0 0 auto",
  marginLeft: "auto",
};
const se = (t) => ({
  padding: t.spacing(0.2, 1.9, 1.5),
});
const oe = (t) => ({
  border: `1px solid ${P(t.palette.text.primary, 0.075)}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: P(t.palette.background.default, 0.38),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
});
const le = (t) => ({
  minHeight: "2.75rem",
  padding: t.spacing(0, 1.1),
  "&.Mui-expanded": {
    minHeight: "2.75rem",
  },
  "& .MuiAccordionSummary-content": {
    minWidth: 0,
    margin: t.spacing(0.7, 0),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: t.spacing(0.7, 0),
  },
});
const ce = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.7),
  padding: t.spacing(0.25, 1.1, 1.1),
});
const de = (t) => ({
  display: "flex",
  alignItems: "center",
  gap: t.spacing(0.7),
  flexWrap: "wrap",
  minWidth: 0,
});
const ue = {
  display: "inline-flex",
  flex: "0 0 auto",
};
const pe = {
  flex: "1 1 14rem",
  minWidth: 0,
};
const xe = {
  completed: "Completed",
  partial: "Partial result",
  failed: "Failed",
};
const me = {
  completed: "success",
  partial: "warning",
  failed: "error",
};
const dt = {
  planned: "Planned",
  running: "Running",
  completed: "Completed",
  partial: "Partial",
  failed: "Failed",
  canceled: "Canceled",
};
const ge = {
  planned: "default",
  running: "primary",
  completed: "success",
  partial: "warning",
  failed: "error",
  canceled: "default",
};
const fe = {
  waiting: "Waiting...",
  reasoning: "Reasoning...",
  generating: "Generating result...",
};
const he = (t) => {
  if (t.startedAtMs === null || t.finishedAtMs === null) {
    return {
      label: null,
      isInvalid: false,
    };
  }
  const n = t.finishedAtMs - t.startedAtMs;
  if (n < 0) {
    return {
      label: "Invalid operation duration",
      isInvalid: true,
    };
  } else if (n < 1000) {
    return {
      label: `${n} ms`,
      isInvalid: false,
    };
  } else {
    return {
      label: `${(n / 1000).toFixed(n < 10000 ? 2 : 1)} s`,
      isInvalid: false,
    };
  }
};
const _Component5 = i.memo(function ({
  operation: n,
  operationStream: a,
  operationElementId: r,
  displayTitle: g,
  onExpandedChange: p,
  requestedExpanded: l = false,
  showScopeLabel: b = true,
  timerRunId: u,
  streamStartedAt: f,
  onContentChange: A,
  outputView: w,
}) {
  const [M, L] = i.useState(
    n.status === "running" ||
      (n.operation === "question" &&
        (n.status === "completed" || n.status === "partial")),
  );
  const s = l || M;
  const m = g ?? n.title;
  const o = i.useMemo(() => $(m), [m]);
  const h = i.useMemo(() => (n.summary ? $(n.summary) : null), [n.summary]);
  const j = he(n);
  const T = n.startedAtMs ?? f;
  if (a && T === undefined) {
    throw new Error("Live Agent operation progress is missing its start time.");
  }
  if (a && u === undefined) {
    throw new Error(
      "Live Agent operation progress is missing its timer scope.",
    );
  }
  const c = n.taskId ? `Task: ${n.taskId}` : "Direct Agent work";
  return (
    <W
      component="li"
      expanded={s}
      id={r}
      disableGutters={true}
      elevation={0}
      sx={oe}
      onChange={(R, d) => {
        L(d);
        if (p != null) {
          p(d);
        }
      }}
    >
      <G
        expandIcon={<O />}
        sx={le}
        aria-label={`Operation: ${m}. Status: ${dt[n.status]}.`}
      >
        <_Component2 direction="row" sx={de}>
          <H sx={ue} aria-hidden="true">
            <_Component3 operation={n.operation} size={17} />
          </H>
          <H sx={pe}>
            <S
              variant={n.operation === "question" ? "subtitle2" : "body2"}
              color="textPrimary"
              noWrap={!s}
            >
              <V content={o} inline={true} mode="compact" />
            </S>
          </H>
          <U label={yt(n.operation)} size="xs" variant="outlined" />
          <U
            label={dt[n.status]}
            color={ge[n.status]}
            size="xs"
            variant="filled"
          />
        </_Component2>
      </G>
      <N sx={ce}>
        {s && w}
        {!w && h && <J content={h} mode="compact" />}
        {b && (
          <S variant="caption" color="textSecondary">
            {c}
          </S>
        )}
        {n.error && (
          <S variant="caption" color="error">
            {n.status === "canceled" ? n.error : bt}
          </S>
        )}
        {j.label && (
          <S variant="caption" color={j.isInvalid ? "error" : "textSecondary"}>
            Duration: {j.label}
          </S>
        )}
        {a && T !== undefined && u !== undefined && (
          <At
            ariaLive="off"
            headingLabel="Progress"
            runId={u}
            startedAt={T}
            statusLabel={fe[a.phase]}
            streamText={a.reasoningText}
            onContentChange={A}
          />
        )}
      </N>
    </W>
  );
});
const Se = ({
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
  const [w, M] = i.useState(true);
  const L = i.useId().replaceAll(":", "");
  const s = `agent-progress-details-${L}`;
  const m = `agent-progress-summary-${L}`;
  const o = new Map(f.map((c) => [c.taskId, c.title]));
  const h = [
    ...r.filter((c) => c.status !== "planned" && c.status !== "running"),
    ...r.filter((c) => c.status === "planned" || c.status === "running"),
  ];
  const j = new Map(p.map((c) => [c.operationId, c]));
  if (j.size !== p.length) {
    throw new Error("Live Agent operation progress contains duplicate ids.");
  }
  const T = new Map(g.map((c) => [c.id, c]));
  if (T.size !== g.length) {
    throw new Error("Live Agent operation outputs contain duplicate ids.");
  }
  return (
    <W
      component="section"
      expanded={w}
      disableGutters={true}
      elevation={0}
      aria-label="Agent progress"
      sx={te}
      onChange={(c, R) => {
        M(R);
      }}
    >
      <G
        aria-controls={s}
        aria-label="Agent progress"
        expandIcon={<O />}
        id={m}
        sx={ee}
      >
        <_Component2 direction="row" sx={ne}>
          <$t aria-label="Agent progress active" size={14} thickness={5} />
          <S variant="subtitle2" color="primary" sx={re}>
            Agent progress
          </S>
          {f.length === 0 && r.length === 0 && (
            <S variant="subtitle2" color="textSecondary" sx={ae}>
              {u}
            </S>
          )}
          <H sx={ie}>
            <St runId={a} startedAt={b} color="primary" variant="elapsedTime" />
          </H>
        </_Component2>
      </G>
      <N aria-labelledby={m} id={s} sx={se}>
        <_Component2 sx={Zt}>
          {h.length > 0 && (
            <_Component2
              component="ol"
              aria-label="Agent operation timeline"
              sx={Mt}
            >
              {h.map((c) => {
                const R = T.get(c.id);
                return (
                  <_Component5
                    operation={c}
                    operationStream={j.get(c.id)}
                    displayTitle={c.taskId ? o.get(c.taskId) : c.title}
                    outputView={
                      R && n !== undefined ? (
                        <_Component4
                          chatId={t}
                          messageIndex={n}
                          output={R}
                          responseNumber={l}
                        />
                      ) : undefined
                    }
                    showScopeLabel={false}
                    timerRunId={`${a}:${c.id}`}
                    streamStartedAt={b}
                    onContentChange={A}
                    key={c.id}
                  />
                );
              })}
            </_Component2>
          )}
        </_Component2>
      </N>
    </W>
  );
};
const sn = i.memo(Se);
const ye = ({
  execution: t,
  areCitationPreviewsEnabled: n = true,
  areVariableHighlightsEnabled: a = true,
  areWriteupActionsEnabled: r = true,
  areWriteupExportsEnabled: g = true,
  chatId: p,
  message: l,
  messageIndex: b,
  onContentResizeInteraction: u,
  operationOutputRequestKey: f,
  requestedOperationOutputId: A = null,
  responseNumber: w,
  shouldPrepareWriteupPdf: M = false,
  writeupPdfPreparationPriority: L = 0,
}) => {
  const s = i.useId().replaceAll(":", "");
  const m = `agent-execution-summary-${s}`;
  const o = `agent-execution-details-${s}`;
  const h = `direct-operation-${s}`;
  const [j, T] = i.useState(false);
  const [c, R] = i.useState(() => new Set());
  const d = i.useMemo(
    () => t.operations.filter((y) => y.taskId === null),
    [t.operations],
  );
  const E = i.useMemo(() => new Set(d.map((y) => y.id)), [d]);
  const C = i.useMemo(
    () => new Map(t.outputs.map((y) => [y.id, y])),
    [t.outputs],
  );
  const F = d.filter((y) => y.status === "completed").length;
  const z = d.length - F;
  const q = [F > 0 ? `${F} completed` : null, z > 0 ? `${z} incomplete` : null]
    .filter(Boolean)
    .join(" · ");
  i.useEffect(() => {
    if (!A || !E.has(A)) {
      return;
    }
    T(true);
    R((k) => new Set([...k, A]));
    const y = window.requestAnimationFrame(() => {
      var _;
      const k = document.getElementById(`${h}-${A}`);
      if (k != null) {
        k.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if ((_ = k == null ? undefined : k.querySelector("button")) != null) {
        _.focus();
      }
    });
    return () => {
      window.cancelAnimationFrame(y);
    };
  }, [E, h, f, A]);
  if (d.length === 0) {
    return null;
  } else {
    return (
      <W
        expanded={j}
        disableGutters={true}
        elevation={0}
        sx={Qt}
        onChange={(y, k) => {
          T(k);
        }}
      >
        <G expandIcon={<O />} aria-controls={o} id={m}>
          <_Component2 sx={Xt}>
            <S variant="subtitle2">Agent progress</S>
            <U
              label={xe[t.outcome]}
              color={me[t.outcome]}
              size="xs"
              variant="filled"
            />
            {q && (
              <S variant="caption" color="textSecondary">
                {q}
              </S>
            )}
          </_Component2>
        </G>
        <N>
          <_Component2
            component="ol"
            aria-label="Agent progress timeline"
            sx={Mt}
          >
            {d.map((y) => {
              const k = C.get(y.id);
              return (
                <_Component5
                  operation={y}
                  operationElementId={`${h}-${y.id}`}
                  onExpandedChange={(_) => {
                    if (!_) {
                      R((D) => {
                        const K = new Set(D);
                        K.delete(y.id);
                        return K;
                      });
                    }
                  }}
                  outputView={
                    k && l && b !== undefined ? (
                      <_Component4
                        areCitationPreviewsEnabled={n}
                        areVariableHighlightsEnabled={a}
                        areWriteupActionsEnabled={r}
                        areWriteupExportsEnabled={g}
                        chatId={p}
                        message={l}
                        messageIndex={b}
                        onContentResizeInteraction={u}
                        output={k}
                        responseNumber={w}
                        shouldPrepareWriteupPdf={M}
                        writeupPdfPreparationPriority={L}
                      />
                    ) : undefined
                  }
                  requestedExpanded={c.has(y.id)}
                  key={y.id}
                />
              );
            })}
          </_Component2>
        </N>
      </W>
    );
  }
};
const on = i.memo(ye);
const be = (t) => ({
  gap: t.spacing(0.8),
});
const Ae = (t) => ({
  alignItems: "center",
  justifyContent: "space-between",
  gap: t.spacing(1),
  flexWrap: "wrap",
});
const ve = (t) => ({
  gap: t.spacing(0.7),
});
const je = (t) => ({
  border: `1px solid ${P(t.palette.text.primary, 0.08)}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: P(t.palette.background.paper, 0.52),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
});
const Ie = (t) => ({
  minHeight: "3.2rem",
  padding: t.spacing(0, 1.25),
  "&.Mui-expanded": {
    minHeight: "3.2rem",
  },
  "& .MuiAccordionSummary-content": {
    minWidth: 0,
    margin: t.spacing(0.8, 0),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: t.spacing(0.8, 0),
  },
});
const we = (t) => ({
  minWidth: 0,
  gap: t.spacing(0.35),
  flex: 1,
});
const Me = (t) => ({
  minWidth: 0,
  alignItems: "flex-start",
  gap: t.spacing(0.7),
});
const Ce = {
  minWidth: 0,
  flex: 1,
};
const Te = (t) => ({
  alignItems: "center",
  gap: t.spacing(0.55),
  flexWrap: "wrap",
});
const Le = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(1.2),
  padding: t.spacing(0.3, 1.25, 1.3),
});
const Y = (t) => ({
  gap: t.spacing(0.25),
});
const Re = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.75),
  margin: 0,
  padding: 0,
  listStyle: "none",
});
const ke = (t) => ({
  gap: t.spacing(0.8),
});
const Ee = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.8),
  margin: 0,
  padding: 0,
});
const Ct = (t) => ({
  border: `1px solid ${P(t.palette.text.primary, 0.075)}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: P(t.palette.background.default, 0.38),
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
});
const Tt = (t) => ({
  minHeight: "2.75rem",
  padding: t.spacing(0, 1.1),
  "&.Mui-expanded": {
    minHeight: "2.75rem",
  },
  "& .MuiAccordionSummary-content": {
    minWidth: 0,
    margin: t.spacing(0.7, 0),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: t.spacing(0.7, 0),
  },
});
const Lt = (t) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.65),
  padding: t.spacing(0.25, 1.1, 1.1),
});
const Pe = (t) => ({
  alignItems: "center",
  justifyContent: "space-between",
  gap: t.spacing(0.8),
  minWidth: 0,
  width: "100%",
});
const $e = {
  flex: 1,
  minWidth: 0,
};
const ut = (t) => ({
  alignItems: "center",
  gap: t.spacing(0.6),
  flexWrap: "wrap",
});
const Fe = (t) => ({
  gap: t.spacing(0.7),
});
const _e = {
  listStyle: "disc",
  paddingLeft: 3,
};
const Be = [];
const De = {
  planned: "Planned",
  running: "Running",
  completed: "Completed",
  partial: "Partial",
  failed: "Failed",
  canceled: "Canceled",
};
const We = {
  planned: "default",
  running: "primary",
  completed: "success",
  partial: "warning",
  failed: "error",
  canceled: "default",
};
const Ge = {
  waiting: "Waiting...",
  reasoning: "Reasoning...",
  generating: "Preparing task result...",
};
const Q = {
  pending: "Pending",
  met: "Met",
  partially_met: "Partially met",
  not_met: "Not met",
  not_evaluated: "Not evaluated",
};
const Oe = {
  pending: "default",
  met: "success",
  partially_met: "warning",
  not_met: "error",
  not_evaluated: "default",
};
const Ne = i.memo(function ({ task: n }) {
  const a = Date.parse(n.startedAt ?? n.createdAt);
  if (!Number.isFinite(a)) {
    return (
      <S variant="caption" color="error">
        Invalid task start time
      </S>
    );
  }
  if (n.status === "running") {
    return (
      <St
        runId={`${n.taskId}-${n.createdAt}`}
        startedAt={a}
        titlePrefix="Task running for"
        variant="caption"
        color="textSecondary"
      />
    );
  }
  if (!n.completedAt) {
    return null;
  }
  const r = Date.parse(n.completedAt);
  if (!Number.isFinite(r) || r < a) {
    return (
      <S variant="caption" color="error">
        Invalid task duration
      </S>
    );
  } else {
    return (
      <S variant="caption" color="textSecondary">
        {Bt((r - a) / 1000)}
      </S>
    );
  }
});
const Ue = i.memo(function ({
  areCitationPreviewsEnabled: n,
  criterion: a,
  message: r,
  operationOutputs: g,
  onOperationOutputSelect: p,
}) {
  const l = i.useMemo(() => new Map(g.map((s) => [s.id, s])), [g]);
  const b = i.useMemo(
    () =>
      new Map(
        ((r == null ? undefined : r.citations) ?? []).map((s) => [s.id, s]),
      ),
    [r == null ? undefined : r.citations],
  );
  const u = i.useMemo(
    () =>
      new Map(
        ((r == null ? undefined : r.sources) ?? []).map((s) => [s.id, s]),
      ),
    [r == null ? undefined : r.sources],
  );
  const f = i.useMemo(() => (r ? jt(r) : []), [r]);
  const { matchedArtifacts: A, missingArtifactRefs: w } = i.useMemo(
    () => vt(a.artifactRefs, f),
    [f, a.artifactRefs],
  );
  const M =
    a.operationOutputIds.length > 0 ||
    a.citationIds.length > 0 ||
    a.artifactRefs.length > 0;
  const L = (r == null ? undefined : r.markdownMathFormat) ?? undefined;
  if (M) {
    return (
      <_Component2 sx={ke}>
        {a.operationOutputIds.length > 0 && (
          <_Component2 direction="row" useFlexGap={true} sx={ut}>
            <S variant="caption" color="textSecondary">
              Evidence
            </S>
            {a.operationOutputIds.map((s) => {
              const m = l.get(s);
              if (!m || !p) {
                return (
                  <U
                    label={
                      m ? (
                        <V
                          content={$(m.title, m.markdownMathFormat ?? L)}
                          inline={true}
                          mode="compact"
                        />
                      ) : (
                        s
                      )
                    }
                    size="xs"
                    variant="outlined"
                    key={s}
                  />
                );
              } else {
                return (
                  <Ft
                    type="button"
                    size="small"
                    variant="text"
                    startIcon={
                      <_Component3 operation={m.operation} size={15} />
                    }
                    aria-label={`Open ${yt(m.operation)} output for criterion: ${a.text}`}
                    onClick={() => {
                      p(s);
                    }}
                    key={s}
                  >
                    <V
                      content={$(m.title, m.markdownMathFormat ?? L)}
                      inline={true}
                      mode="compact"
                    />
                  </Ft>
                );
              }
            })}
          </_Component2>
        )}
        {r &&
          a.citationIds.map((s) => {
            const m = b.get(s);
            if (m) {
              return (
                <_Component2 direction="row" useFlexGap={true} sx={ut} key={s}>
                  <S variant="caption" color="textSecondary">
                    Citation
                  </S>
                  {m.sourceIds.map((o) => {
                    const h = u.get(o);
                    if (h) {
                      return (
                        <Dt
                          accessibleLabel={`${s}: ${lt(h)}`}
                          href={h.url}
                          isPreviewEnabled={n}
                          label={lt(h)}
                          key={o}
                        />
                      );
                    } else {
                      return (
                        <S variant="caption" color="error" key={o}>
                          Referenced source {o} is unavailable.
                        </S>
                      );
                    }
                  })}
                </_Component2>
              );
            } else {
              return (
                <S variant="caption" color="error" key={s}>
                  Referenced citation {s} is unavailable.
                </S>
              );
            }
          })}
        {r && A.length > 0 && (
          <_Component2 sx={Fe} aria-label="Criterion artifacts">
            {A.map((s, m) => (
              <Wt
                artifact={s}
                caption={`Evidence for ${a.text}`}
                mathSyntax={
                  (r == null ? undefined : r.markdownMathFormat) ===
                  "canonical-v1"
                    ? "canonical"
                    : "compatibility"
                }
                pythonCode={null}
                supportingFileNumber={m + 1}
                key={s.key}
              />
            ))}
          </_Component2>
        )}
        {r &&
          w.map((s) => (
            <S variant="caption" color="error" key={s}>
              Referenced artifact {s} is unavailable.
            </S>
          ))}
      </_Component2>
    );
  } else {
    return null;
  }
});
const _Component6 = i.memo(function ({
  areCitationPreviewsEnabled: n,
  criterion: a,
  message: r,
  operationOutputs: g,
  onOperationOutputSelect: p,
}) {
  const [l, b] = i.useState(false);
  const u =
    (r == null ? undefined : r.markdownMathFormat) === "canonical-v1"
      ? "canonical"
      : "compatibility";
  const f = i.useMemo(
    () =>
      $(a.text, (r == null ? undefined : r.markdownMathFormat) ?? undefined),
    [a.text, r == null ? undefined : r.markdownMathFormat],
  );
  const A = i.useMemo(
    () =>
      a.resultSummary
        ? $(
            a.resultSummary,
            (r == null ? undefined : r.markdownMathFormat) ?? undefined,
          )
        : null,
    [a.resultSummary, r == null ? undefined : r.markdownMathFormat],
  );
  return (
    <W
      component="li"
      expanded={l}
      disableGutters={true}
      elevation={0}
      sx={Ct}
      onChange={(w, M) => {
        b(M);
      }}
    >
      <G
        expandIcon={<O />}
        sx={Tt}
        aria-label={`Criterion: ${a.text}. Status: ${Q[a.status]}.`}
      >
        <_Component2 direction="row" sx={Pe}>
          <H sx={$e}>
            <S variant="body2" color="textPrimary" noWrap={!l}>
              <V content={f} inline={true} mathSyntax={u} mode="compact" />
            </S>
          </H>
          <U
            label={Q[a.status]}
            color={Oe[a.status]}
            size="xs"
            variant="filled"
            aria-label={`Criterion status: ${Q[a.status]}`}
          />
        </_Component2>
      </G>
      <N sx={Lt}>
        {A && <J content={A} mathSyntax={u} mode="compact" />}
        <Ue
          areCitationPreviewsEnabled={n}
          criterion={a}
          message={r}
          operationOutputs={g}
          onOperationOutputSelect={p}
        />
      </N>
    </W>
  );
});
const He = i.memo(function ({
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
  const [c, R] = i.useState(o.status === "running");
  const [d, E] = i.useState(false);
  const C =
    (l == null ? undefined : l.markdownMathFormat) === "canonical-v1"
      ? "canonical"
      : "compatibility";
  const F = i.useMemo(
    () =>
      $(o.title, (l == null ? undefined : l.markdownMathFormat) ?? undefined),
    [l == null ? undefined : l.markdownMathFormat, o.title],
  );
  const z = i.useMemo(
    () =>
      o.resultSummary
        ? $(
            o.resultSummary,
            (l == null ? undefined : l.markdownMathFormat) ?? undefined,
          )
        : null,
    [l == null ? undefined : l.markdownMathFormat, o.resultSummary],
  );
  const q = i.useMemo(
    () =>
      o.unresolvedItems.map((x) => ({
        content: $(
          x,
          (l == null ? undefined : l.markdownMathFormat) ?? undefined,
        ),
        item: x,
      })),
    [l == null ? undefined : l.markdownMathFormat, o.unresolvedItems],
  );
  const y = `task-operation-${i.useId().replaceAll(":", "")}`;
  const [k, _] = i.useState(() => new Set());
  const D = i.useMemo(() => new Set(u.map((x) => x.id)), [u]);
  const K = i.useMemo(() => new Map(f.map((x) => [x.id, x])), [f]);
  i.useEffect(() => {
    if (!j || !D.has(j)) {
      return;
    }
    R(true);
    _((I) => new Set([...I, j]));
    const x = window.requestAnimationFrame(() => {
      var B;
      const I = document.getElementById(`${y}-${j}`);
      if (I != null) {
        I.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if ((B = I == null ? undefined : I.querySelector("button")) != null) {
        B.focus();
      }
    });
    return () => {
      window.cancelAnimationFrame(x);
    };
  }, [y, D, A, j]);
  const Rt = i.useCallback(
    (x) => {
      if (!D.has(x)) {
        throw new Error(
          `Criterion evidence references unavailable task operation '${x}'.`,
        );
      }
      _((I) => new Set([...I, x]));
      if (w != null) {
        w(x);
      }
      window.requestAnimationFrame(() => {
        var I;
        var B;
        if (
          (B =
            (I = document.getElementById(`${y}-${x}`)) == null
              ? undefined
              : I.querySelector("button")) != null
        ) {
          B.focus();
        }
      });
    },
    [w, y, D],
  );
  const nt = `${o.successCriteria.filter((x) => x.status === "met").length} of ${o.successCriteria.length} success criteria met`;
  const rt = De[o.status];
  const at = o.status === "running" || !!o.completedAt;
  const it = Date.parse(o.startedAt ?? o.createdAt);
  if (h && !Number.isFinite(it)) {
    throw new Error("Live Agent task progress is missing its start time.");
  }
  return (
    <W
      expanded={c}
      disableGutters={true}
      elevation={0}
      sx={je}
      onChange={(x, I) => {
        R(I);
      }}
    >
      <G
        expandIcon={<O />}
        sx={Ie}
        aria-label={`Task: ${o.title}. Status: ${rt}. ${nt}.`}
      >
        <_Component2 sx={we}>
          <_Component2 direction="row" sx={Me}>
            <H sx={Ce}>
              <S variant="subtitle2" color="textPrimary" noWrap={!c}>
                <V content={F} inline={true} mathSyntax={C} mode="compact" />
              </S>
            </H>
            <U label={rt} color={We[o.status]} size="xs" variant="filled" />
          </_Component2>
          <_Component2 direction="row" useFlexGap={true} sx={Te}>
            <S variant="caption" color="textSecondary">
              {nt}
            </S>
            {at && (
              <S variant="caption" color="textSecondary">
                ·
              </S>
            )}
            {at && <Ne task={o} />}
          </_Component2>
        </_Component2>
      </G>
      <N sx={Le}>
        {h && (
          <At
            ariaLive="off"
            headingLabel="Worker progress"
            runId={o.taskId}
            startedAt={it}
            statusLabel={Ge[h.phase]}
            streamText={h.reasoningText}
            onContentChange={L}
          />
        )}
        {u.length > 0 && (
          <_Component2 sx={Y}>
            <S variant="caption" color="textSecondary">
              Task outputs
            </S>
            <_Component2
              component="ol"
              aria-label={`Outputs for ${o.title}`}
              sx={Re}
            >
              {u.map((x) => {
                const I = K.get(x.id);
                return (
                  <_Component5
                    operation={x}
                    operationElementId={`${y}-${x.id}`}
                    onExpandedChange={(B) => {
                      if (!B) {
                        _((kt) => {
                          const st = new Set(kt);
                          st.delete(x.id);
                          return st;
                        });
                      }
                    }}
                    outputView={
                      I && b !== undefined ? (
                        <_Component4
                          areCitationPreviewsEnabled={n}
                          areVariableHighlightsEnabled={a}
                          areWriteupActionsEnabled={r}
                          areWriteupExportsEnabled={g}
                          chatId={p}
                          message={l}
                          messageIndex={b}
                          onContentResizeInteraction={M}
                          output={I}
                          responseNumber={s}
                          shouldPrepareWriteupPdf={m}
                          writeupPdfPreparationPriority={T}
                        />
                      ) : undefined
                    }
                    requestedExpanded={k.has(x.id)}
                    showScopeLabel={false}
                    key={x.id}
                  />
                );
              })}
            </_Component2>
          </_Component2>
        )}
        {o.successCriteria.length > 0 && (
          <_Component2 sx={Y}>
            <S variant="caption" color="textSecondary">
              Success criteria
            </S>
            <_Component7 aria-label={`Success criteria for ${o.title}`} sx={Ee}>
              {o.successCriteria.map((x) => (
                <_Component6
                  areCitationPreviewsEnabled={n}
                  criterion={x}
                  message={l}
                  operationOutputs={f}
                  onOperationOutputSelect={Rt}
                  key={x.criterionId}
                />
              ))}
            </_Component7>
          </_Component2>
        )}
        {z && (
          <_Component2 sx={Y}>
            <W
              expanded={d}
              disableGutters={true}
              elevation={0}
              sx={Ct}
              onChange={(x, I) => {
                E(I);
              }}
            >
              <G
                expandIcon={<O />}
                sx={Tt}
                aria-label={`Task result for ${o.title}.`}
              >
                <S variant="subtitle2" color="textPrimary">
                  Task result
                </S>
              </G>
              <N sx={Lt}>
                <J content={z} mathSyntax={C} mode="compact" />
              </N>
            </W>
          </_Component2>
        )}
        {o.unresolvedItems.length > 0 && (
          <_Component2 sx={Y}>
            <S variant="caption" color="textSecondary">
              Unresolved items
            </S>
            <_Component7 sx={_e}>
              {q.map(({ content: x, item: I }) => (
                <Yt component="li" disablePadding={true} key={I}>
                  <J content={x} mathSyntax={C} mode="compact" />
                </Yt>
              ))}
            </_Component7>
          </_Component2>
        )}
        {o.safeError && (
          <It severity="error">
            <Gt>Task error</Gt>
            {o.status === "canceled" ? o.safeError.message : bt}
          </It>
        )}
      </N>
    </W>
  );
});
const Ve = ({
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
  areCitationPreviewsEnabled: M = true,
  areVariableHighlightsEnabled: L = true,
  areWriteupActionsEnabled: s = true,
  areWriteupExportsEnabled: m = true,
  responseNumber: o,
  shouldPrepareWriteupPdf: h = false,
  writeupPdfPreparationPriority: j = 0,
}) => {
  const T = i.useMemo(() => {
    const d = new Map();
    const E = new Set(p.map((C) => C.id));
    for (const C of g) {
      if (!C.taskId || (!C.summary && !C.error && !E.has(C.id))) {
        continue;
      }
      const F = d.get(C.taskId) ?? [];
      F.push(C);
      d.set(C.taskId, F);
    }
    return d;
  }, [p, g]);
  if (t.length === 0) {
    return null;
  }
  const c = new Map(f.map((d) => [d.taskId, d]));
  if (c.size !== f.length) {
    throw new Error("Live Agent task progress contains duplicate ids.");
  }
  const R = [
    ...t.filter((d) => d.status !== "planned" && d.status !== "running"),
    ...t.filter((d) => d.status === "planned" || d.status === "running"),
  ];
  return (
    <_Component2 component="section" aria-label="Agent tasks" sx={be}>
      <_Component2 direction="row" sx={Ae}>
        <S variant="subtitle2">Agent tasks</S>
        <S variant="caption" color="textSecondary">
          {t.length} {t.length === 1 ? "task" : "tasks"}
        </S>
      </_Component2>
      <_Component2 sx={ve}>
        {R.map((d) => (
          <He
            areCitationPreviewsEnabled={M}
            areVariableHighlightsEnabled={L}
            areWriteupActionsEnabled={s}
            areWriteupExportsEnabled={m}
            chatId={n}
            message={a}
            messageIndex={r}
            operations={T.get(d.taskId) ?? Be}
            operationOutputs={p}
            operationOutputRequestKey={l}
            onOperationOutputSelect={b}
            onContentResizeInteraction={w}
            onContentChange={A}
            responseNumber={o}
            shouldPrepareWriteupPdf={h}
            task={d}
            taskStream={c.get(d.taskId)}
            requestedOperationOutputId={u}
            writeupPdfPreparationPriority={j}
            key={`${d.taskId}:${d.startedAt ?? "planned"}`}
          />
        ))}
      </_Component2>
    </_Component2>
  );
};
const ln = i.memo(Ve);
export { ln as A, Yt as L, on as a, sn as b };
