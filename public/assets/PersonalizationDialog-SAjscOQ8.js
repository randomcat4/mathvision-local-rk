import {
  p as k,
  r as t,
  w as R,
  t as B,
  Y as E,
  Z as d,
  j as e,
  B as w,
  S as A,
  _ as g,
} from "./index-BM3ZINIl.js";
import { S as O } from "./WorkspaceSidePanelFrame-BElEFQhq.js";
import { u as Q } from "./useMutation-C1SgG9wr.js";
import { D as W, a as _, b as F, c as N } from "./MChip-DiH8NXBU.js";
import { T as U } from "./TextField-D8vc_sXz.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./useGetUserType-DlzkERhz.js";
import "./useQuery-DM2qiUYb.js";
import "./ChatInteractionOverrides-dyfOoEnd.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./Divider-BcuihGce.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./ListItemText-CBxudZz_.js";
function ct({ open: m, personalization: o, isProfileLoading: i, onClose: r }) {
  const h = k(),
    [a, l] = t.useState(o),
    u = t.useMemo(() => a.trim(), [a]),
    f = t.useMemo(() => o.trim(), [o]),
    x = t.useMemo(() => u !== f, [f, u]),
    z = t.useCallback(
      (n) => {
        (h.setQueryData(R.currentProfile(), n),
          l(n.personalization),
          B.success("Personalization saved."),
          r());
      },
      [r, h],
    ),
    M = t.useMemo(() => ({ mutationFn: E, onSuccess: z }), [z]),
    c = Q(M),
    s = t.useMemo(() => c.isPending, [c.isPending]),
    b = t.useMemo(() => c.mutate, [c.mutate]),
    p = t.useMemo(() => x && a.length <= d && !i && !s, [x, s, i, a.length]),
    v = t.useMemo(() => i || s, [s, i]),
    C = t.useMemo(() => `${a.length}/${d}`, [a.length]),
    D = t.useMemo(() => ({ htmlInput: { maxLength: d } }), []),
    j = t.useMemo(() => e.jsx(O, { fontSize: "small" }), []),
    y = t.useMemo(() => (s ? "Saving..." : "Save changes"), [s]),
    P = t.useCallback(() => {
      m && l(o);
    }, [m, o]);
  t.useEffect(P, [P]);
  const S = t.useCallback(() => {
      s || (l(o), r());
    }, [s, r, o]),
    I = t.useCallback(
      (n) => {
        (n.preventDefault(), p && b(u));
      },
      [p, b, u],
    ),
    T = t.useCallback((n) => {
      l(n.target.value);
    }, []);
  return e.jsx(W, {
    open: m,
    onClose: S,
    "aria-labelledby": "profile-personalization-title",
    maxWidth: "sm",
    fullWidth: !0,
    children: e.jsxs(w, {
      component: "form",
      onSubmit: I,
      children: [
        e.jsx(_, { id: "profile-personalization-title", children: "Personalization" }),
        e.jsx(F, {
          dividers: !0,
          children: e.jsx(A, {
            spacing: 2,
            children: e.jsx(U, {
              id: "profile-custom-instructions",
              label: "Custom instructions",
              value: a,
              disabled: v,
              placeholder: "Tell the assistant to behave or change its tone, etc.",
              fullWidth: !0,
              multiline: !0,
              minRows: 7,
              maxRows: 12,
              helperText: C,
              onChange: T,
              slotProps: D,
            }),
          }),
        }),
        e.jsxs(N, {
          children: [
            e.jsx(g, {
              type: "button",
              color: "secondary",
              disabled: s,
              onClick: S,
              children: "Cancel",
            }),
            e.jsx(g, {
              type: "submit",
              variant: "contained",
              disabled: !p,
              startIcon: j,
              children: y,
            }),
          ],
        }),
      ],
    }),
  });
}
export { ct as default };
