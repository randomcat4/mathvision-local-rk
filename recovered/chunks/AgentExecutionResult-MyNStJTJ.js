import { r as m, j as s, S as E, T as D, a5 as X } from "./index-BM3ZINIl.js";
import { A as H, a as R, L as J } from "./AgentTaskProgress-bXMst_Kr.js";
import { A as h, f as F, b as Q, c as V } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { a as Y, A as Z } from "./MessageBubble-DqxHrk03.js";
import { S as U } from "./StructuredMarkdown-DAWLLRpf.js";
import { M as q } from "./MChip-DiH8NXBU.js";
import { A as f } from "./Alert-DnFVD8li.js";
import { A as b } from "./AlertTitle-B2wnIUF2.js";
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
const z = (r) => ({ display: "flex", flexDirection: "column", gap: r.spacing(1.2) }),
  tt = { listStyle: "disc", paddingLeft: 3 },
  st = (r) => ({ gap: r.spacing(1) }),
  rt = (r) => ({ alignItems: "center", gap: r.spacing(0.7) }),
  at = /#agent-output-(agent-operation-(?:0|[1-9][0-9]*))/g,
  ot = /^#agent-output-(agent-operation-(?:0|[1-9][0-9]*))$/,
  it = { completed: "Completed", partial: "Partial result", failed: "Failed" },
  nt = { completed: "success", partial: "warning", failed: "error" },
  et = ({
    message: r,
    chatId: g,
    messageIndex: O,
    responseNumber: S,
    areCitationPreviewsEnabled: A = !0,
    areVariableHighlightsEnabled: j = !0,
    areWriteupActionsEnabled: M = !0,
    areWriteupExportsEnabled: I = !0,
    shouldPrepareWriteupPdf: L = !1,
    writeupPdfPreparationPriority: _ = 0,
    onContentResizeInteraction: c,
  }) => {
    const t = r.agentExecution,
      {
        answerCitations: K,
        answerSources: $,
        missingAnswerCitationIds: k,
        missingAnswerSourceIds: v,
      } = m.useMemo(() => {
        const i = new Set((t == null ? void 0 : t.citationIds) ?? []),
          n = (r.citations ?? []).filter((a) => i.has(a.id)),
          l = new Set(n.map((a) => a.id)),
          o = new Set(n.flatMap((a) => a.sourceIds)),
          u = (r.sources ?? []).filter((a) => o.has(a.id)),
          p = new Set(u.map((a) => a.id));
        return {
          answerCitations: n,
          answerSources: u,
          missingAnswerCitationIds: ((t == null ? void 0 : t.citationIds) ?? []).filter(
            (a) => !l.has(a),
          ),
          missingAnswerSourceIds: [...o].filter((a) => !p.has(a)),
        };
      }, [t == null ? void 0 : t.citationIds, r.citations, r.sources]),
      d = m.useMemo(
        () => new Map(((t == null ? void 0 : t.outputs) ?? []).map((i) => [i.id, i])),
        [t == null ? void 0 : t.outputs],
      ),
      [e, G] = m.useState(null),
      w = m.useCallback(
        (i) => {
          if (!d.has(i))
            throw new Error(`Final answer references unavailable Agent output '${i}'.`);
          (c == null || c(),
            G((n) => ({
              outputId: i,
              requestKey: ((n == null ? void 0 : n.requestKey) ?? 0) + 1,
            })));
        },
        [c, d],
      ),
      y = m.useMemo(() => {
        if (!t) return "";
        if (t.outcome === "failed") return h;
        const i = new Set([...t.answer.matchAll(at)].map((o) => o[1])),
          n = t.usedOperationOutputIds
            .filter((o) => !i.has(o))
            .map((o) => d.get(o))
            .filter((o) => o !== void 0);
        if (n.length === 0) return t.answer;
        const l = n.map((o) => `[${Y(o.title)}](#agent-output-${o.id})`);
        return `${t.answer}

See intermediate ${l.length === 1 ? "result" : "results"}: ${l.join(", ")}.`;
      }, [t, d]),
      C = m.useMemo(() => F(y, r.markdownMathFormat ?? void 0), [y, r.markdownMathFormat]),
      P = m.useMemo(
        () =>
          ((t == null ? void 0 : t.unresolvedItems) ?? []).map((i) => {
            const n = i.startsWith(Q) ? h : i;
            return { content: F(n, r.markdownMathFormat ?? void 0), item: n };
          }),
        [t == null ? void 0 : t.unresolvedItems, r.markdownMathFormat],
      ),
      B = m.useMemo(
        () => ({
          a: ({ node: n, href: l, title: o, children: u, onClick: p, ...a }) => {
            var N;
            const T = (N = l == null ? void 0 : l.match(ot)) == null ? void 0 : N[1];
            return !T || !d.has(T)
              ? o === Z && l
                ? s.jsx(V, {
                    className: a.className,
                    href: l,
                    id: a.id,
                    isPreviewEnabled: A,
                    label: u,
                  })
                : s.jsx("a", { href: l, title: o, onClick: p, ...a, children: u })
              : s.jsx(X, {
                  href: l,
                  title: o,
                  onClick: (x) => {
                    (p == null || p(x), !x.defaultPrevented && (x.preventDefault(), w(T)));
                  },
                  ...a,
                  children: u,
                });
          },
        }),
        [A, w, d],
      );
    return t
      ? s.jsxs(E, {
          sx: z,
          children: [
            s.jsx(H, {
              tasks: t.tasks,
              chatId: g,
              message: r,
              messageIndex: O,
              operations: t.operations,
              operationOutputs: t.outputs,
              operationOutputRequestKey: e == null ? void 0 : e.requestKey,
              onOperationOutputSelect: w,
              requestedOperationOutputId: e == null ? void 0 : e.outputId,
              areCitationPreviewsEnabled: A,
              areVariableHighlightsEnabled: j,
              areWriteupActionsEnabled: M,
              areWriteupExportsEnabled: I,
              onContentResizeInteraction: c,
              responseNumber: S,
              shouldPrepareWriteupPdf: L,
              writeupPdfPreparationPriority: _,
            }),
            s.jsx(R, {
              execution: t,
              areCitationPreviewsEnabled: A,
              areVariableHighlightsEnabled: j,
              areWriteupActionsEnabled: M,
              areWriteupExportsEnabled: I,
              chatId: g,
              message: r,
              messageIndex: O,
              onContentResizeInteraction: c,
              operationOutputRequestKey: e == null ? void 0 : e.requestKey,
              requestedOperationOutputId: e == null ? void 0 : e.outputId,
              responseNumber: S,
              shouldPrepareWriteupPdf: L,
              writeupPdfPreparationPriority: _,
            }),
            s.jsxs(E, {
              component: "section",
              "aria-label": "Final outcome",
              sx: st,
              children: [
                s.jsxs(E, {
                  direction: "row",
                  sx: rt,
                  children: [
                    s.jsx(D, { variant: "subtitle2", children: "Final outcome" }),
                    s.jsx(q, {
                      label: it[t.outcome],
                      color: nt[t.outcome],
                      size: "xs",
                      variant: "filled",
                    }),
                  ],
                }),
                s.jsx(U, {
                  areCitationPreviewsEnabled: A,
                  components: B,
                  content: C,
                  citations: K,
                  definitionHighlights: [],
                  mathLabelPrefix: S,
                  mathSyntax:
                    r.markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility",
                  sources: $,
                }),
                k.length > 0 &&
                  s.jsxs(f, {
                    severity: "error",
                    children: [
                      "Referenced answer citations are unavailable:",
                      " ",
                      k.join(", "),
                      ".",
                    ],
                  }),
                v.length > 0 &&
                  s.jsxs(f, {
                    severity: "error",
                    children: [
                      "Referenced answer sources are unavailable:",
                      " ",
                      v.join(", "),
                      ".",
                    ],
                  }),
              ],
            }),
            t.unresolvedItems.length > 0 &&
              s.jsxs(f, {
                severity: "warning",
                children: [
                  s.jsx(b, { children: "Unresolved items" }),
                  s.jsx(W, {
                    sx: tt,
                    children: P.map(({ content: i, item: n }) =>
                      s.jsx(
                        J,
                        {
                          component: "li",
                          disablePadding: !0,
                          children: s.jsx(U, {
                            content: i,
                            mathSyntax:
                              r.markdownMathFormat === "canonical-v1"
                                ? "canonical"
                                : "compatibility",
                            mode: "compact",
                          }),
                        },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
            t.safeError &&
              s.jsxs(f, {
                severity: "error",
                children: [s.jsx(b, { children: "Agent error" }), h],
              }),
          ],
        })
      : null;
  },
  Pt = m.memo(et);
export { Pt as AgentExecutionResult };
