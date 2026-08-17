import {
  ax as v,
  aj as y,
  r as b,
  j as e,
  S as D,
  V as F,
  X as R,
  T as g,
  _ as x,
  t as h,
  q as T,
} from "./index-BM3ZINIl.js";
import { u as E } from "./useMutation-C1SgG9wr.js";
import { D as C, a as M, b as _, c as w } from "./MChip-DiH8NXBU.js";
import { a as A, F as I, T as P } from "./TextField-D8vc_sXz.js";
import { R as B, a as L } from "./RadioGroup-CvCoRbaB.js";
import { F as W } from "./FormControlLabel-CQvCddOM.js";
import { S as G } from "./send-CDdCro4v.js";
import "./FormGroup-BsLWbxpH.js";
const K = y,
  q = (a) => ({
    kind: a.kind,
    message: a.message,
    chat_id: a.chatId ?? null,
    page_url: a.pageUrl ?? null,
  }),
  z = (a) => v.post(K, "reports/bug-feedback", q(a)).then(() => {}),
  f = 4e3,
  H = [
    { value: "bug", label: "Bug" },
    { value: "feedback", label: "Feedback" },
  ],
  O = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 },
  U = { display: "flex", flexDirection: "column", gap: 2 },
  ee = ({ open: a, selectedChat: r, onClose: c }) => {
    const [d, u] = b.useState("bug"),
      [s, p] = b.useState(""),
      n = E({ mutationFn: z }),
      l = s.trim(),
      o = n.isPending,
      m = () => {
        (u("bug"), p(""), n.reset());
      },
      i = () => {
        o || (c(), m());
      },
      j = (t) => {
        if ((t.preventDefault(), !l)) return;
        const k = {
          kind: d,
          message: l,
          chatId: (r == null ? void 0 : r.id) ?? null,
          pageUrl: window.location.href,
        };
        n.mutate(k, {
          onSuccess: () => {
            (h.success("Report sent. Thank you for the help."), c(), m());
          },
          onError: (S) => {
            h.error(T(S) || "Could not send this report.");
          },
        });
      };
    return e.jsx(C, {
      open: a,
      maxWidth: "sm",
      fullWidth: !0,
      onClose: i,
      children: e.jsxs(D, {
        component: "form",
        onSubmit: j,
        children: [
          e.jsxs(M, {
            sx: O,
            children: [
              "Report bug or feedback",
              e.jsx(F, {
                tooltip: "Close",
                "aria-label": "Close report dialog",
                disabled: o,
                onClick: i,
                children: e.jsx(R, { size: 18 }),
              }),
            ],
          }),
          e.jsxs(_, {
            sx: U,
            children: [
              e.jsx(g, {
                variant: "body2",
                color: "textSecondary",
                children: "Share what broke, felt confusing, or would make Math Vision better.",
              }),
              e.jsxs(A, {
                disabled: o,
                children: [
                  e.jsx(I, { id: "report-feedback-kind-label", children: "Type" }),
                  e.jsx(B, {
                    row: !0,
                    "aria-labelledby": "report-feedback-kind-label",
                    name: "report-feedback-kind",
                    value: d,
                    onChange: (t) => {
                      u(t.target.value);
                    },
                    children: H.map((t) =>
                      e.jsx(W, { value: t.value, control: e.jsx(L, {}), label: t.label }, t.value),
                    ),
                  }),
                ],
              }),
              e.jsx(P, {
                autoFocus: !0,
                fullWidth: !0,
                required: !0,
                multiline: !0,
                minRows: 5,
                label: "Details",
                value: s,
                disabled: o,
                helperText: `${s.length}/${f}`,
                slotProps: { htmlInput: { maxLength: f } },
                onChange: (t) => {
                  p(t.target.value);
                },
              }),
              r &&
                e.jsx(g, {
                  variant: "caption",
                  color: "textSecondary",
                  noWrap: !0,
                  children: "Current chat will be attached to this report.",
                }),
            ],
          }),
          e.jsxs(w, {
            children: [
              e.jsx(x, { disabled: o, onClick: i, children: "Cancel" }),
              e.jsx(x, {
                type: "submit",
                variant: "contained",
                startIcon: e.jsx(G, { size: 16 }),
                disabled: o || !l,
                children: o ? "Sending..." : "Send report",
              }),
            ],
          }),
        ],
      }),
    });
  };
export { ee as ReportFeedbackDialog };
