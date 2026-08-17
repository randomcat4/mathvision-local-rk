import { r as m, j as s, S as E, T as D, a5 as X } from "./index-BM3ZINIl.js";
import { A as H, a as R, L as J } from "./AgentTaskProgress-bXMst_Kr.js";
import {
  A as h,
  f as F,
  b as Q,
  c as V,
} from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { a as Y, A as Z } from "./MessageBubble-DqxHrk03.js";
import { S as U } from "./StructuredMarkdown-DAWLLRpf.js";
import { M as _Component } from "./MChip-DiH8NXBU.js";
import { A as _Component2 } from "./Alert-DnFVD8li.js";
import { A as _Component3 } from "./AlertTitle-B2wnIUF2.js";
import { L as W } from "./TextField-D8vc_sXz.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./index-Yb6ONXKu.js";
import "./SupportingArtifactCard-B1XjYGZI.js";
import "./Markdown-Dh8LhaRc.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./index-DzMT-bSF.js";
import "./file-code-corner-DV79SyC0.js";
import "./code-xml-DmfSENe3.js";
import "./Drawer-ByPJ5WV0.js";
import "./useAttachmentContent-15uaQfvd.js";
import "./useQuery-DM2qiUYb.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./Card-Bf0WPnf4.js";
import "./triangle-alert-C5eP7BuB.js";
import "./circle-check-B9fquZbm.js";
import "./Divider-BcuihGce.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./streamNdjson-sRiOwtSP.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
const z = (r) => ({
  display: "flex",
  flexDirection: "column",
  gap: r.spacing(1.2),
});
const tt = {
  listStyle: "disc",
  paddingLeft: 3,
};
const st = (r) => ({
  gap: r.spacing(1),
});
const rt = (r) => ({
  alignItems: "center",
  gap: r.spacing(0.7),
});
const at = /#agent-output-(agent-operation-(?:0|[1-9][0-9]*))/g;
const ot = /^#agent-output-(agent-operation-(?:0|[1-9][0-9]*))$/;
const it = {
  completed: "Completed",
  partial: "Partial result",
  failed: "Failed",
};
const nt = {
  completed: "success",
  partial: "warning",
  failed: "error",
};
const et = ({
  message: r,
  chatId: g,
  messageIndex: O,
  responseNumber: S,
  areCitationPreviewsEnabled: A = true,
  areVariableHighlightsEnabled: j = true,
  areWriteupActionsEnabled: M = true,
  areWriteupExportsEnabled: I = true,
  shouldPrepareWriteupPdf: L = false,
  writeupPdfPreparationPriority: _ = 0,
  onContentResizeInteraction: c,
}) => {
  const t = r.agentExecution;
  const {
    answerCitations: K,
    answerSources: $,
    missingAnswerCitationIds: k,
    missingAnswerSourceIds: v,
  } = m.useMemo(() => {
    const i = new Set((t == null ? undefined : t.citationIds) ?? []);
    const n = (r.citations ?? []).filter((a) => i.has(a.id));
    const l = new Set(n.map((a) => a.id));
    const o = new Set(n.flatMap((a) => a.sourceIds));
    const u = (r.sources ?? []).filter((a) => o.has(a.id));
    const p = new Set(u.map((a) => a.id));
    return {
      answerCitations: n,
      answerSources: u,
      missingAnswerCitationIds: (
        (t == null ? undefined : t.citationIds) ?? []
      ).filter((a) => !l.has(a)),
      missingAnswerSourceIds: [...o].filter((a) => !p.has(a)),
    };
  }, [t == null ? undefined : t.citationIds, r.citations, r.sources]);
  const d = m.useMemo(
    () =>
      new Map(
        ((t == null ? undefined : t.outputs) ?? []).map((i) => [i.id, i]),
      ),
    [t == null ? undefined : t.outputs],
  );
  const [e, G] = m.useState(null);
  const w = m.useCallback(
    (i) => {
      if (!d.has(i)) {
        throw new Error(
          `Final answer references unavailable Agent output '${i}'.`,
        );
      }
      if (c != null) {
        c();
      }
      G((n) => ({
        outputId: i,
        requestKey: ((n == null ? undefined : n.requestKey) ?? 0) + 1,
      }));
    },
    [c, d],
  );
  const y = m.useMemo(() => {
    if (!t) {
      return "";
    }
    if (t.outcome === "failed") {
      return h;
    }
    const i = new Set([...t.answer.matchAll(at)].map((o) => o[1]));
    const n = t.usedOperationOutputIds
      .filter((o) => !i.has(o))
      .map((o) => d.get(o))
      .filter((o) => o !== undefined);
    if (n.length === 0) {
      return t.answer;
    }
    const l = n.map((o) => `[${Y(o.title)}](#agent-output-${o.id})`);
    return `${t.answer}

See intermediate ${l.length === 1 ? "result" : "results"}: ${l.join(", ")}.`;
  }, [t, d]);
  const C = m.useMemo(
    () => F(y, r.markdownMathFormat ?? undefined),
    [y, r.markdownMathFormat],
  );
  const P = m.useMemo(
    () =>
      ((t == null ? undefined : t.unresolvedItems) ?? []).map((i) => {
        const n = i.startsWith(Q) ? h : i;
        return {
          content: F(n, r.markdownMathFormat ?? undefined),
          item: n,
        };
      }),
    [t == null ? undefined : t.unresolvedItems, r.markdownMathFormat],
  );
  const B = m.useMemo(
    () => ({
      a: ({ node: n, href: l, title: o, children: u, onClick: p, ...a }) => {
        var N;
        const T =
          (N = l == null ? undefined : l.match(ot)) == null ? undefined : N[1];
        if (!T || !d.has(T)) {
          if (o === Z && l) {
            return (
              <V
                className={a.className}
                href={l}
                id={a.id}
                isPreviewEnabled={A}
                label={u}
              />
            );
          } else {
            return (
              <a href={l} title={o} onClick={p} {...a}>
                {u}
              </a>
            );
          }
        } else {
          return (
            <X
              href={l}
              title={o}
              onClick={(x) => {
                if (p != null) {
                  p(x);
                }
                if (!x.defaultPrevented) {
                  x.preventDefault();
                  w(T);
                }
              }}
              {...a}
            >
              {u}
            </X>
          );
        }
      },
    }),
    [A, w, d],
  );
  if (t) {
    return (
      <E sx={z}>
        <H
          tasks={t.tasks}
          chatId={g}
          message={r}
          messageIndex={O}
          operations={t.operations}
          operationOutputs={t.outputs}
          operationOutputRequestKey={e == null ? undefined : e.requestKey}
          onOperationOutputSelect={w}
          requestedOperationOutputId={e == null ? undefined : e.outputId}
          areCitationPreviewsEnabled={A}
          areVariableHighlightsEnabled={j}
          areWriteupActionsEnabled={M}
          areWriteupExportsEnabled={I}
          onContentResizeInteraction={c}
          responseNumber={S}
          shouldPrepareWriteupPdf={L}
          writeupPdfPreparationPriority={_}
        />
        <R
          execution={t}
          areCitationPreviewsEnabled={A}
          areVariableHighlightsEnabled={j}
          areWriteupActionsEnabled={M}
          areWriteupExportsEnabled={I}
          chatId={g}
          message={r}
          messageIndex={O}
          onContentResizeInteraction={c}
          operationOutputRequestKey={e == null ? undefined : e.requestKey}
          requestedOperationOutputId={e == null ? undefined : e.outputId}
          responseNumber={S}
          shouldPrepareWriteupPdf={L}
          writeupPdfPreparationPriority={_}
        />
        <E component="section" aria-label="Final outcome" sx={st}>
          <E direction="row" sx={rt}>
            <D variant="subtitle2">Final outcome</D>
            <_Component
              label={it[t.outcome]}
              color={nt[t.outcome]}
              size="xs"
              variant="filled"
            />
          </E>
          <U
            areCitationPreviewsEnabled={A}
            components={B}
            content={C}
            citations={K}
            definitionHighlights={[]}
            mathLabelPrefix={S}
            mathSyntax={
              r.markdownMathFormat === "canonical-v1"
                ? "canonical"
                : "compatibility"
            }
            sources={$}
          />
          {k.length > 0 && (
            <_Component2 severity="error">
              Referenced answer citations are unavailable: {k.join(", ")}.
            </_Component2>
          )}
          {v.length > 0 && (
            <_Component2 severity="error">
              Referenced answer sources are unavailable: {v.join(", ")}.
            </_Component2>
          )}
        </E>
        {t.unresolvedItems.length > 0 && (
          <_Component2 severity="warning">
            <_Component3>Unresolved items</_Component3>
            <W sx={tt}>
              {P.map(({ content: i, item: n }) => (
                <J component="li" disablePadding={true} key={n}>
                  <U
                    content={i}
                    mathSyntax={
                      r.markdownMathFormat === "canonical-v1"
                        ? "canonical"
                        : "compatibility"
                    }
                    mode="compact"
                  />
                </J>
              ))}
            </W>
          </_Component2>
        )}
        {t.safeError && (
          <_Component2 severity="error">
            <_Component3>Agent error</_Component3>
            {h}
          </_Component2>
        )}
      </E>
    );
  } else {
    return null;
  }
};
const AgentExecutionResult = m.memo(et);
export { AgentExecutionResult };
