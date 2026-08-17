import { ax as b, aj as Q, bq as ne, r as o, j as t, S as _Component4, T as A, V as _Component5, X, p as te, a as O, n as se, t as oe, q as B, B as F, e as W, _ as _Component8 } from "./index-BM3ZINIl.js";
import { u as ae } from "./useQuery-DM2qiUYb.js";
import { u as Y } from "./useMutation-C1SgG9wr.js";
import { M as _Component } from "./WorkspaceSidePanelFrame-BElEFQhq.js";
import { D as _Component3 } from "./attachmentsApi-BHgxfYft.js";
import { T as _Component2 } from "./TimeRelative-HYP_-RcH.js";
import { a as _Component6 } from "./Markdown-Dh8LhaRc.js";
import { D as _Component7 } from "./MChip-DiH8NXBU.js";
import { D as _Component9 } from "./Divider-BcuihGce.js";
import { C as _Component0 } from "./chevron-left-BwEFN4zp.js";
import { C as _Component1 } from "./MarkdownHighlights-C-ZhT8z1.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./useGetUserType-DlzkERhz.js";
import "./ChatInteractionOverrides-dyfOoEnd.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
import "./TextField-D8vc_sXz.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./ListItemText-CBxudZz_.js";
import "./authFetch-DXjDztUP.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./index-DzMT-bSF.js";
import "./index-Yb6ONXKu.js";
const D = Q;
const he = e => ({
  id: e.id,
  authorName: e.author_name,
  authorAvatarSrc: e.author_avatar_src,
  content: e.content,
  createdAt: e.created_at,
  updatedAt: e.updated_at,
  images: e.images.map(n => ({
    id: n.id,
    name: n.name,
    contentType: n.content_type,
    sizeBytes: n.size_bytes,
    createdAt: n.created_at,
    src: n.src
  }))
});
const ge = (e = false) => b.get(D, "announcements/current", {
  include_dismissed: e
}).then(n => n.map(he));
const Ae = e => b.put(D, `announcements/${e}/dismissal`, {});
const z = 1000;
const fe = async e => {
  for (let n = 0; n < e.length; n += z) {
    await b.put(D, "announcements/dismissals/bulk", {
      announcement_ids: e.slice(n, n + z)
    });
  }
};
const ve = 7;
const Se = ve * 24 * 60 * 60 * 1000;
const L = "ai-math.feature-announcements-dismissed.v1";
const ye = "ai-math.feature-announcement-dismissal-outbox.v1";
const we = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const R = e => `${ye}:${encodeURIComponent(e)}`;
const T = (e, n) => {
  if (n.length === 0) {
    window.localStorage.removeItem(e);
    return;
  }
  window.localStorage.setItem(e, JSON.stringify(Array.from(new Set(n))));
};
const w = (e, n) => {
  let s;
  try {
    s = window.localStorage.getItem(e);
  } catch (a) {
    console.warn(`Could not read ${n}.`, a);
    return [];
  }
  if (s === null) {
    return [];
  }
  let r;
  try {
    r = JSON.parse(s);
  } catch (a) {
    console.warn(`Removed unreadable ${n}.`, a);
    try {
      window.localStorage.removeItem(e);
    } catch (p) {
      console.warn(`Could not remove unreadable ${n}.`, p);
    }
    return [];
  }
  if (!Array.isArray(r)) {
    console.warn(`Removed invalid ${n}: expected an array.`);
    try {
      window.localStorage.removeItem(e);
    } catch (a) {
      console.warn(`Could not remove invalid ${n}.`, a);
    }
    return [];
  }
  const i = r.filter(a => typeof a == "string" && we.test(a));
  if (i.length !== r.length) {
    console.warn(`Removed invalid announcement ids from ${n}.`);
    try {
      T(e, i);
    } catch (a) {
      console.warn(`Could not clean invalid ${n}.`, a);
    }
  }
  return Array.from(new Set(i));
};
const V = (e, n, s) => {
  const r = new Set(s);
  T(e, w(e, n).filter(i => !r.has(i)));
};
const Ie = () => w(L, "legacy announcement dismissal state");
const Ee = e => V(L, "legacy announcement dismissal state", e);
const Ce = e => w(R(e), "pending announcement dismissal state");
const Ne = (e, n) => {
  const s = R(e);
  T(s, [...w(s, "pending announcement dismissal state"), n]);
};
const H = (e, n) => V(R(e), "pending announcement dismissal state", n);
const je = () => {
  const e = ne();
  if (!e) {
    throw new Error("Authenticated user token is missing its subject identifier.");
  }
  const [n, s] = o.useState(() => ({
    legacyAnnouncementIds: Ie(),
    pendingAnnouncementIds: Ce(e)
  }));
  const r = o.useMemo(() => Array.from(new Set([...n.legacyAnnouncementIds, ...n.pendingAnnouncementIds])), [n]);
  const i = o.useRef(false);
  const {
    error: a,
    isIdle: p,
    isPending: f,
    mutate: d
  } = Y({
    mutationFn: fe,
    onSuccess: () => {
      try {
        Ee(n.legacyAnnouncementIds);
        H(e, n.pendingAnnouncementIds);
      } catch (u) {
        console.warn("Could not remove reconciled announcement dismissal state.", u);
      }
      s({
        legacyAnnouncementIds: [],
        pendingAnnouncementIds: []
      });
    }
  });
  const h = r.length > 0;
  o.useEffect(() => {
    if (!!h && !!p && !i.current) {
      i.current = true;
      d(r);
    }
  }, [p, h, d, r]);
  const I = o.useCallback(() => {
    d(r);
  }, [d, r]);
  const E = o.useCallback(u => {
    Ne(e, u);
  }, [e]);
  const C = o.useCallback(u => {
    try {
      H(e, [u]);
    } catch (N) {
      console.warn("Could not remove a persisted announcement dismissal from the outbox.", N);
    }
  }, [e]);
  return {
    error: a,
    isPending: h && f,
    isReady: !h,
    markDismissalPersisted: C,
    queueDismissal: E,
    retry: I
  };
};
const J = () => "https://app.mathvision.ai".replace(/\/$/, "");
const _e = e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const _ = `/${Q}/`;
const be = e => {
  if (!e) {
    return;
  }
  const n = J();
  if (!n || !e.startsWith(_)) {
    return e;
  } else {
    return `${n}${e}`;
  }
};
const De = e => {
  const n = J();
  if (n) {
    return e.replace(new RegExp(`(\\]\\()${_e(_)}`, "g"), `$1${n}${_}`);
  } else {
    return e;
  }
};
const Re = {
  p: {
    xs: 2,
    sm: 2.5
  }
};
const Te = {
  width: 48,
  height: 48,
  flex: "0 0 auto"
};
const $e = {
  minWidth: 0,
  flex: 1
};
const Pe = {
  minWidth: 0,
  flex: 1
};
function Me({
  announcement: e,
  labelId: n,
  onClose: s
}) {
  return <_Component4 direction="row" spacing={1.5} sx={Re}><_Component alt={e.authorName} src={be(e.authorAvatarSrc)} sx={Te} /><_Component4 spacing={1.25} sx={$e}><_Component4 direction="row" spacing={1} sx={{
        alignItems: "flex-start"
      }}><_Component4 sx={Pe}><A id={n} variant="subtitle2" color="textPrimary" noWrap={true}>{e.authorName}</A><A variant="caption" color="textSecondary"><_Component2 date={e.createdAt} /> · <_Component3 value={e.createdAt} /></A></_Component4>{s && <_Component5 tooltip="Close" aria-label="Close announcement" onClick={s}><X size={18} /></_Component5>}</_Component4><_Component6 content={De(e.content)} /></_Component4></_Component4>;
}
const K = o.memo(Me);
const Ue = {
  alignItems: {
    xs: "flex-end",
    sm: "center"
  }
};
const ke = {
  width: {
    xs: "100%",
    sm: "min(40rem, calc(100vw - 2rem))"
  },
  maxHeight: {
    xs: "85dvh",
    sm: "calc(100dvh - 2rem)"
  },
  m: {
    xs: 0,
    sm: 1
  },
  borderBottomLeftRadius: {
    xs: 0,
    sm: undefined
  },
  borderBottomRightRadius: {
    xs: 0,
    sm: undefined
  }
};
function Oe({
  announcement: e,
  onClose: n
}) {
  const s = e ? `admin-announcement-${e.id}-author` : undefined;
  return <_Component7 open={!!e} onClose={n} aria-labelledby={s} maxWidth={false} scroll="paper" slotProps={{
    container: {
      sx: Ue
    },
    paper: {
      sx: ke
    }
  }}>{e && <K announcement={e} labelId={s} onClose={n} />}</_Component7>;
}
o.memo(Oe);
const Be = "floating-feature-announcement-panel";
const q = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
  maxWidth: "calc(100vw - 2rem)",
  pointerEvents: "auto"
};
const G = {
  width: "min(28rem, calc(100vw - 2rem))",
  maxHeight: "min(36rem, calc(100dvh - 1.5rem))",
  overflowY: "auto"
};
const Fe = {
  p: 2.5,
  alignItems: "flex-start"
};
const We = {
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between"
};
const ze = {
  alignItems: "center",
  justifyContent: "space-between",
  px: 2.5,
  py: 1
};
const He = {
  alignItems: "center"
};
const qe = e => {
  const n = new Date(e.createdAt);
  if (Number.isNaN(n.getTime())) {
    throw new Error(`Announcement "${e.id}" has an invalid createdAt date.`);
  }
  return n;
};
const Ge = (e, n) => n - qe(e).getTime() <= Se;
const Qe = ({
  openRequestId: e
}) => {
  const n = te();
  const [s, r] = o.useState(null);
  const [i, a] = o.useState(() => new Set());
  const [p, f] = o.useState(null);
  const d = e > 0 && e !== p;
  const {
    error: h,
    isPending: I,
    isReady: E,
    markDismissalPersisted: C,
    queueDismissal: u,
    retry: N
  } = je();
  const v = ae({
    queryKey: O.announcements(d),
    queryFn: () => ge(d),
    enabled: E,
    refetchOnWindowFocus: "always",
    staleTime: 300000
  });
  const c = o.useMemo(() => {
    const l = Date.now();
    return (v.data ?? []).filter(m => Ge(m, l) && (d || !i.has(m.id)));
  }, [v.data, d, i]);
  const $ = c.findIndex(l => l.id === s);
  const S = $ >= 0 ? $ : 0;
  const g = c[S] ?? null;
  const {
    mutate: P
  } = Y({
    mutationFn: Ae,
    onSuccess: (l, m) => {
      C(m);
      n.setQueryData(O.announcements(false), j => j == null ? undefined : j.filter(ee => ee.id !== m));
      se({
        announcementsChanged: true
      });
    }
  });
  const Z = o.useCallback(() => {
    if (g) {
      try {
        u(g.id);
      } catch (l) {
        oe.error(`Could not queue the announcement dismissal: ${B(l)}`);
        return;
      }
      r(null);
      a(l => new Set([...l, ...c.map(m => m.id)]));
      f(e);
      P(g.id);
    }
  }, [g, c, P, e, u]);
  const M = o.useCallback(l => {
    if (c.length < 2) {
      return;
    }
    const m = (S + l + c.length) % c.length;
    r(c[m].id);
  }, [S, c]);
  const U = h ?? v.error;
  if (U) {
    if (p === e) {
      return null;
    } else {
      return <F sx={q}><W role="alert" variant="floating" sx={G}><_Component4 spacing={1.5} sx={Fe}><_Component4 direction="row" sx={We}><A variant="subtitle2" color="error">Updates unavailable</A><_Component5 tooltip="Close" aria-label="Close updates error" onClick={() => f(e)}><X size={18} /></_Component5></_Component4><A variant="body2" color="textSecondary">{B(U)}</A><_Component8 size="small" variant="outlined" disabled={I} onClick={() => {
              if (h) {
                N();
                return;
              }
              v.refetch();
            }}>Retry</_Component8></_Component4></W></F>;
    }
  }
  if (!g) {
    return null;
  }
  const k = `floating-feature-announcement-${g.id}-author`;
  return <F sx={q}><W id={Be} role="region" aria-labelledby={k} variant="floating" sx={G}><K announcement={g} labelId={k} onClose={Z} />{c.length > 1 && <t.Fragment><_Component9 /><_Component4 direction="row" sx={ze}><A variant="caption" color="textSecondary">{S + 1} of {c.length}</A><_Component4 direction="row" spacing={0.25} sx={He}><_Component5 tooltip="Previous announcement" aria-label="Previous announcement" onClick={() => M(-1)}><_Component0 size={18} /></_Component5><_Component5 tooltip="Next announcement" aria-label="Next announcement" onClick={() => M(1)}><_Component1 size={18} /></_Component5></_Component4></_Component4></t.Fragment>}</W></F>;
};
const In = o.memo(Qe);
export { In as FloatingFeatureAnnouncements };
