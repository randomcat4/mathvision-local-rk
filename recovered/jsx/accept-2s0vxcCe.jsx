import { A as h, j as r, az as y, u as j, p as v, aB as f, w as u, r as C, q as d, aC as S, B as _Component6, e as _Component5, S as _Component2, T as _Component, C as A, o as _Component3, _ as E, h as L, l as R, a0 as T, a1 as w } from "./index-BM3ZINIl.js";
import { L as I } from "./LogoutRounded-BsETu1qq.js";
import { u as M } from "./useQuery-DM2qiUYb.js";
import { u as P } from "./useMutation-C1SgG9wr.js";
import { C as _ } from "./Container-C988byeG.js";
import { D as B } from "./Divider-BcuihGce.js";
import { A as Q } from "./Alert-DnFVD8li.js";
const _Component4 = h(<path d="m21.29 5.89-10 10c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 9.29-9.29c.39-.39 1.02-.39 1.41 0 .4.39.4 1.02.01 1.41m-5.52-3.15c-1.69-.69-3.61-.93-5.61-.57-4.07.73-7.32 4.01-8.01 8.08C1.01 17 6.63 22.78 13.34 21.91c3.96-.51 7.28-3.46 8.32-7.31.4-1.47.44-2.89.21-4.22-.13-.8-1.12-1.11-1.7-.54-.23.23-.33.57-.27.89.22 1.33.12 2.75-.52 4.26-1.16 2.71-3.68 4.7-6.61 4.97-5.1.47-9.33-3.85-8.7-8.98.43-3.54 3.28-6.42 6.81-6.91 1.73-.24 3.37.09 4.77.81.39.2.86.13 1.17-.18.48-.48.36-1.29-.24-1.6-.27-.12-.54-.25-.81-.36" />);
function z() {
  const x = y();
  const i = j();
  const p = v();
  const a = M({
    queryKey: u.currentAccess(),
    queryFn: w,
    staleTime: T
  });
  const o = P({
    mutationFn: f,
    onSuccess: async s => {
      p.setQueryData(u.currentAccess(), s);
      await x({
        to: s.disabled ? "/account-disabled" : s.allow ? "/chats" : "/waitlist",
        replace: true
      });
    }
  });
  const e = a.data;
  C.useEffect(() => {
    if (e == null || !e.allow) {
      return;
    }
    const s = i.routesById["/chats"];
    if (!s) {
      console.error("The chats route is unavailable for preloading.");
      return;
    }
    const c = i.loadRouteChunk(s);
    if (c != null) {
      c.catch(g => {
        console.error("Failed to preload the chats route.", g);
      });
    }
  }, [e == null ? undefined : e.allow, i]);
  const l = a.isError ? d(a.error) : o.isError ? d(o.error) : null;
  if (o.isPending) {
    return <S />;
  } else {
    return <_Component6 sx={{
      minHeight: "100dvh",
      display: "grid",
      placeItems: "center",
      backgroundColor: "background.default",
      backgroundImage: "var(--app-shell-background)",
      px: {
        xs: 2,
        md: 3
      },
      py: {
        xs: 4,
        md: 6
      }
    }}><_ maxWidth="sm"><_Component5 sx={{
          p: {
            xs: 3,
            md: 5
          }
        }}><_Component2 spacing={3}><_Component2 spacing={1}><_Component variant="h4">Review Math Vision terms</_Component><_Component variant="body1" color="textSecondary">Please review and accept the current Terms of Service before continuing.</_Component></_Component2><B />{a.isLoading ? <_Component2 spacing={1.5} sx={{
              alignItems: "center",
              py: 3
            }}><A size={28} /><_Component variant="body2" color="textSecondary">Loading account status</_Component></_Component2> : <_Component2 spacing={2}><_Component2 spacing={0.75}><_Component variant="subtitle2"><_Component3 to="/terms" target="_blank" rel="noreferrer">Terms version: {(e == null ? undefined : e.termsVersion) ?? "Current"}</_Component3></_Component><_Component variant="subtitle2"><_Component3 to="/privacy" target="_blank" rel="noreferrer">Privacy policy version: {(e == null ? undefined : e.privacyPolicyVersion) ?? "Current"}</_Component3></_Component></_Component2>{l ? <Q severity="error">{l}</Q> : null}<_Component2 direction={{
                xs: "column",
                sm: "row"
              }} spacing={1.25}><E variant="contained" startIcon={<_Component4 fontSize="small" />} disabled={a.isFetching} onClick={() => o.mutate()}>Agree</E><L color="secondary" startIcon={<I fontSize="small" />} onClick={() => R()}>Sign Out</L></_Component2></_Component2>}</_Component2></_Component5></_></_Component6>;
  }
}
const O = z;
export { O as component };
