import {
  p as k,
  r as t,
  w as R,
  t as B,
  Y as E,
  Z as d,
  j as e,
  B as _Component2,
  S as A,
  _ as _Component,
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
function PersonalizationDialog({
  open: m,
  personalization: o,
  isProfileLoading: i,
  onClose: r,
}) {
  const h = k();
  const [a, l] = t.useState(o);
  const u = t.useMemo(() => a.trim(), [a]);
  const f = t.useMemo(() => o.trim(), [o]);
  const x = t.useMemo(() => u !== f, [f, u]);
  const z = t.useCallback(
    (n) => {
      h.setQueryData(R.currentProfile(), n);
      l(n.personalization);
      B.success("Personalization saved.");
      r();
    },
    [r, h],
  );
  const M = t.useMemo(
    () => ({
      mutationFn: E,
      onSuccess: z,
    }),
    [z],
  );
  const c = Q(M);
  const s = t.useMemo(() => c.isPending, [c.isPending]);
  const b = t.useMemo(() => c.mutate, [c.mutate]);
  const p = t.useMemo(
    () => x && a.length <= d && !i && !s,
    [x, s, i, a.length],
  );
  const v = t.useMemo(() => i || s, [s, i]);
  const C = t.useMemo(() => `${a.length}/${d}`, [a.length]);
  const D = t.useMemo(
    () => ({
      htmlInput: {
        maxLength: d,
      },
    }),
    [],
  );
  const j = t.useMemo(() => <O fontSize="small" />, []);
  const y = t.useMemo(() => (s ? "Saving..." : "Save changes"), [s]);
  const P = t.useCallback(() => {
    if (m) {
      l(o);
    }
  }, [m, o]);
  t.useEffect(P, [P]);
  const S = t.useCallback(() => {
    if (!s) {
      l(o);
      r();
    }
  }, [s, r, o]);
  const I = t.useCallback(
    (n) => {
      n.preventDefault();
      if (p) {
        b(u);
      }
    },
    [p, b, u],
  );
  const T = t.useCallback((n) => {
    l(n.target.value);
  }, []);
  return (
    <W
      open={m}
      onClose={S}
      aria-labelledby="profile-personalization-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <_Component2 component="form" onSubmit={I}>
        <_ id="profile-personalization-title">Personalization</_>
        <F dividers={true}>
          <A spacing={2}>
            <U
              id="profile-custom-instructions"
              label="Custom instructions"
              value={a}
              disabled={v}
              placeholder="Tell the assistant to behave or change its tone, etc."
              fullWidth={true}
              multiline={true}
              minRows={7}
              maxRows={12}
              helperText={C}
              onChange={T}
              slotProps={D}
            />
          </A>
        </F>
        <N>
          <_Component type="button" color="secondary" disabled={s} onClick={S}>
            Cancel
          </_Component>
          <_Component
            type="submit"
            variant="contained"
            disabled={!p}
            startIcon={j}
          >
            {y}
          </_Component>
        </N>
      </_Component2>
    </W>
  );
}
export { PersonalizationDialog as default };
