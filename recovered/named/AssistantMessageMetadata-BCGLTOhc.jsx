import { j as a, B as _Component3 } from "./index-BM3ZINIl.js";
import { C as M, a as _Component } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { g as b } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { M as _Component2 } from "./MChip-DiH8NXBU.js";
const w = (l) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: l.spacing(0.8),
  flexWrap: "wrap",
  marginBottom: l.spacing(0.72),
  paddingInline: l.spacing(0.2),
});
const AssistantMessageMetadata = ({
  message: l,
  responseNumber: i,
  operation: n,
  availableModels: f,
  hasAdminRetryActivity: r = false,
}) => {
  var p;
  var x;
  const e =
    l.modelId ?? ((p = l.usage) == null ? undefined : p.modelId) ?? null;
  const s = l.workflowMode === "agent";
  const m = `Mode: ${(e ? (((x = f.find((j) => j.id === e)) == null ? undefined : x.label) ?? "mathvision") : null) ?? "mathvision"}`;
  const d = !s && !!e;
  const c = !s && !!n;
  const t = c && n ? b(n) : null;
  const g = t ? <_Component operation={n} /> : undefined;
  if (!i && !c && !d && !s && !r) {
    return null;
  } else {
    return (
      <_Component3 sx={w}>
        {i && (
          <_Component2
            label={`Answer ${i}`}
            color="primary"
            size="xs"
            variant="filled"
          />
        )}
        {s && (
          <_Component2
            label="Agent"
            color="primary"
            size="xs"
            variant="filled"
          />
        )}
        {t && (
          <_Component2 label={t} variant="filled" color="primary" icon={g} />
        )}
        {d && <_Component2 label={m} variant="filled" color="secondary" />}
        {r && (
          <_Component2
            label="Retries detected"
            variant="filled"
            color="warning"
            size="small"
          />
        )}
        {l.proChatCall && (
          <_Component2
            label="Math Vision Pro"
            icon={<M />}
            color="warning"
            variant="filled"
            size="small"
            sx={{
              ml: "auto",
            }}
          />
        )}
      </_Component3>
    );
  }
};
export { AssistantMessageMetadata as A };
