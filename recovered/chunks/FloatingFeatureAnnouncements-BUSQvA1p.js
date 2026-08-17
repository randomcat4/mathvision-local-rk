import {
  ax as b,
  aj as Q,
  bq as ne,
  r as o,
  j as t,
  S as x,
  T as A,
  V as y,
  X,
  p as te,
  a as O,
  n as se,
  t as oe,
  q as B,
  B as F,
  e as W,
  _ as re,
} from "./index-BM3ZINIl.js";
import { u as ae } from "./useQuery-DM2qiUYb.js";
import { u as Y } from "./useMutation-C1SgG9wr.js";
import { M as ie } from "./WorkspaceSidePanelFrame-BElEFQhq.js";
import { D as ce } from "./attachmentsApi-BHgxfYft.js";
import { T as le } from "./TimeRelative-HYP_-RcH.js";
import { a as de } from "./Markdown-Dh8LhaRc.js";
import { D as me } from "./MChip-DiH8NXBU.js";
import { D as ue } from "./Divider-BcuihGce.js";
import { C as xe } from "./chevron-left-BwEFN4zp.js";
import { C as pe } from "./MarkdownHighlights-C-ZhT8z1.js";
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
const D = Q,
  he = (e) => ({
    id: e.id,
    authorName: e.author_name,
    authorAvatarSrc: e.author_avatar_src,
    content: e.content,
    createdAt: e.created_at,
    updatedAt: e.updated_at,
    images: e.images.map((n) => ({
      id: n.id,
      name: n.name,
      contentType: n.content_type,
      sizeBytes: n.size_bytes,
      createdAt: n.created_at,
      src: n.src,
    })),
  }),
  ge = (e = !1) =>
    b.get(D, "announcements/current", { include_dismissed: e }).then((n) => n.map(he)),
  Ae = (e) => b.put(D, `announcements/${e}/dismissal`, {}),
  z = 1e3,
  fe = async (e) => {
    for (let n = 0; n < e.length; n += z)
      await b.put(D, "announcements/dismissals/bulk", { announcement_ids: e.slice(n, n + z) });
  },
  ve = 7,
  Se = ve * 24 * 60 * 60 * 1e3,
  L = "ai-math.feature-announcements-dismissed.v1",
  ye = "ai-math.feature-announcement-dismissal-outbox.v1",
  we = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  R = (e) => `${ye}:${encodeURIComponent(e)}`,
  T = (e, n) => {
    if (n.length === 0) {
      window.localStorage.removeItem(e);
      return;
    }
    window.localStorage.setItem(e, JSON.stringify(Array.from(new Set(n))));
  },
  w = (e, n) => {
    let s;
    try {
      s = window.localStorage.getItem(e);
    } catch (a) {
      return (console.warn(`Could not read ${n}.`, a), []);
    }
    if (s === null) return [];
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
    const i = r.filter((a) => typeof a == "string" && we.test(a));
    if (i.length !== r.length) {
      console.warn(`Removed invalid announcement ids from ${n}.`);
      try {
        T(e, i);
      } catch (a) {
        console.warn(`Could not clean invalid ${n}.`, a);
      }
    }
    return Array.from(new Set(i));
  },
  V = (e, n, s) => {
    const r = new Set(s);
    T(
      e,
      w(e, n).filter((i) => !r.has(i)),
    );
  },
  Ie = () => w(L, "legacy announcement dismissal state"),
  Ee = (e) => V(L, "legacy announcement dismissal state", e),
  Ce = (e) => w(R(e), "pending announcement dismissal state"),
  Ne = (e, n) => {
    const s = R(e);
    T(s, [...w(s, "pending announcement dismissal state"), n]);
  },
  H = (e, n) => V(R(e), "pending announcement dismissal state", n),
  je = () => {
    const e = ne();
    if (!e) throw new Error("Authenticated user token is missing its subject identifier.");
    const [n, s] = o.useState(() => ({
        legacyAnnouncementIds: Ie(),
        pendingAnnouncementIds: Ce(e),
      })),
      r = o.useMemo(
        () => Array.from(new Set([...n.legacyAnnouncementIds, ...n.pendingAnnouncementIds])),
        [n],
      ),
      i = o.useRef(!1),
      {
        error: a,
        isIdle: p,
        isPending: f,
        mutate: d,
      } = Y({
        mutationFn: fe,
        onSuccess: () => {
          try {
            (Ee(n.legacyAnnouncementIds), H(e, n.pendingAnnouncementIds));
          } catch (u) {
            console.warn("Could not remove reconciled announcement dismissal state.", u);
          }
          s({ legacyAnnouncementIds: [], pendingAnnouncementIds: [] });
        },
      }),
      h = r.length > 0;
    o.useEffect(() => {
      !h || !p || i.current || ((i.current = !0), d(r));
    }, [p, h, d, r]);
    const I = o.useCallback(() => {
        d(r);
      }, [d, r]),
      E = o.useCallback(
        (u) => {
          Ne(e, u);
        },
        [e],
      ),
      C = o.useCallback(
        (u) => {
          try {
            H(e, [u]);
          } catch (N) {
            console.warn("Could not remove a persisted announcement dismissal from the outbox.", N);
          }
        },
        [e],
      );
    return {
      error: a,
      isPending: h && f,
      isReady: !h,
      markDismissalPersisted: C,
      queueDismissal: E,
      retry: I,
    };
  },
  J = () => "https://app.mathvision.ai".replace(/\/$/, ""),
  _e = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  _ = `/${Q}/`,
  be = (e) => {
    if (!e) return;
    const n = J();
    return !n || !e.startsWith(_) ? e : `${n}${e}`;
  },
  De = (e) => {
    const n = J();
    return n ? e.replace(new RegExp(`(\\]\\()${_e(_)}`, "g"), `$1${n}${_}`) : e;
  },
  Re = { p: { xs: 2, sm: 2.5 } },
  Te = { width: 48, height: 48, flex: "0 0 auto" },
  $e = { minWidth: 0, flex: 1 },
  Pe = { minWidth: 0, flex: 1 };
function Me({ announcement: e, labelId: n, onClose: s }) {
  return t.jsxs(x, {
    direction: "row",
    spacing: 1.5,
    sx: Re,
    children: [
      t.jsx(ie, { alt: e.authorName, src: be(e.authorAvatarSrc), sx: Te }),
      t.jsxs(x, {
        spacing: 1.25,
        sx: $e,
        children: [
          t.jsxs(x, {
            direction: "row",
            spacing: 1,
            sx: { alignItems: "flex-start" },
            children: [
              t.jsxs(x, {
                sx: Pe,
                children: [
                  t.jsx(A, {
                    id: n,
                    variant: "subtitle2",
                    color: "textPrimary",
                    noWrap: !0,
                    children: e.authorName,
                  }),
                  t.jsxs(A, {
                    variant: "caption",
                    color: "textSecondary",
                    children: [
                      t.jsx(le, { date: e.createdAt }),
                      " · ",
                      t.jsx(ce, { value: e.createdAt }),
                    ],
                  }),
                ],
              }),
              s &&
                t.jsx(y, {
                  tooltip: "Close",
                  "aria-label": "Close announcement",
                  onClick: s,
                  children: t.jsx(X, { size: 18 }),
                }),
            ],
          }),
          t.jsx(de, { content: De(e.content) }),
        ],
      }),
    ],
  });
}
const K = o.memo(Me),
  Ue = { alignItems: { xs: "flex-end", sm: "center" } },
  ke = {
    width: { xs: "100%", sm: "min(40rem, calc(100vw - 2rem))" },
    maxHeight: { xs: "85dvh", sm: "calc(100dvh - 2rem)" },
    m: { xs: 0, sm: 1 },
    borderBottomLeftRadius: { xs: 0, sm: void 0 },
    borderBottomRightRadius: { xs: 0, sm: void 0 },
  };
function Oe({ announcement: e, onClose: n }) {
  const s = e ? `admin-announcement-${e.id}-author` : void 0;
  return t.jsx(me, {
    open: !!e,
    onClose: n,
    "aria-labelledby": s,
    maxWidth: !1,
    scroll: "paper",
    slotProps: { container: { sx: Ue }, paper: { sx: ke } },
    children: e && t.jsx(K, { announcement: e, labelId: s, onClose: n }),
  });
}
o.memo(Oe);
const Be = "floating-feature-announcement-panel",
  q = {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    maxWidth: "calc(100vw - 2rem)",
    pointerEvents: "auto",
  },
  G = {
    width: "min(28rem, calc(100vw - 2rem))",
    maxHeight: "min(36rem, calc(100dvh - 1.5rem))",
    overflowY: "auto",
  },
  Fe = { p: 2.5, alignItems: "flex-start" },
  We = { width: "100%", alignItems: "center", justifyContent: "space-between" },
  ze = { alignItems: "center", justifyContent: "space-between", px: 2.5, py: 1 },
  He = { alignItems: "center" },
  qe = (e) => {
    const n = new Date(e.createdAt);
    if (Number.isNaN(n.getTime()))
      throw new Error(`Announcement "${e.id}" has an invalid createdAt date.`);
    return n;
  },
  Ge = (e, n) => n - qe(e).getTime() <= Se,
  Qe = ({ openRequestId: e }) => {
    const n = te(),
      [s, r] = o.useState(null),
      [i, a] = o.useState(() => new Set()),
      [p, f] = o.useState(null),
      d = e > 0 && e !== p,
      {
        error: h,
        isPending: I,
        isReady: E,
        markDismissalPersisted: C,
        queueDismissal: u,
        retry: N,
      } = je(),
      v = ae({
        queryKey: O.announcements(d),
        queryFn: () => ge(d),
        enabled: E,
        refetchOnWindowFocus: "always",
        staleTime: 300 * 1e3,
      }),
      c = o.useMemo(() => {
        const l = Date.now();
        return (v.data ?? []).filter((m) => Ge(m, l) && (d || !i.has(m.id)));
      }, [v.data, d, i]),
      $ = c.findIndex((l) => l.id === s),
      S = $ >= 0 ? $ : 0,
      g = c[S] ?? null,
      { mutate: P } = Y({
        mutationFn: Ae,
        onSuccess: (l, m) => {
          (C(m),
            n.setQueryData(O.announcements(!1), (j) =>
              j == null ? void 0 : j.filter((ee) => ee.id !== m),
            ),
            se({ announcementsChanged: !0 }));
        },
      }),
      Z = o.useCallback(() => {
        if (g) {
          try {
            u(g.id);
          } catch (l) {
            oe.error(`Could not queue the announcement dismissal: ${B(l)}`);
            return;
          }
          (r(null), a((l) => new Set([...l, ...c.map((m) => m.id)])), f(e), P(g.id));
        }
      }, [g, c, P, e, u]),
      M = o.useCallback(
        (l) => {
          if (c.length < 2) return;
          const m = (S + l + c.length) % c.length;
          r(c[m].id);
        },
        [S, c],
      ),
      U = h ?? v.error;
    if (U)
      return p === e
        ? null
        : t.jsx(F, {
            sx: q,
            children: t.jsx(W, {
              role: "alert",
              variant: "floating",
              sx: G,
              children: t.jsxs(x, {
                spacing: 1.5,
                sx: Fe,
                children: [
                  t.jsxs(x, {
                    direction: "row",
                    sx: We,
                    children: [
                      t.jsx(A, {
                        variant: "subtitle2",
                        color: "error",
                        children: "Updates unavailable",
                      }),
                      t.jsx(y, {
                        tooltip: "Close",
                        "aria-label": "Close updates error",
                        onClick: () => f(e),
                        children: t.jsx(X, { size: 18 }),
                      }),
                    ],
                  }),
                  t.jsx(A, { variant: "body2", color: "textSecondary", children: B(U) }),
                  t.jsx(re, {
                    size: "small",
                    variant: "outlined",
                    disabled: I,
                    onClick: () => {
                      if (h) {
                        N();
                        return;
                      }
                      v.refetch();
                    },
                    children: "Retry",
                  }),
                ],
              }),
            }),
          });
    if (!g) return null;
    const k = `floating-feature-announcement-${g.id}-author`;
    return t.jsx(F, {
      sx: q,
      children: t.jsxs(W, {
        id: Be,
        role: "region",
        "aria-labelledby": k,
        variant: "floating",
        sx: G,
        children: [
          t.jsx(K, { announcement: g, labelId: k, onClose: Z }),
          c.length > 1 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx(ue, {}),
                t.jsxs(x, {
                  direction: "row",
                  sx: ze,
                  children: [
                    t.jsxs(A, {
                      variant: "caption",
                      color: "textSecondary",
                      children: [S + 1, " of ", c.length],
                    }),
                    t.jsxs(x, {
                      direction: "row",
                      spacing: 0.25,
                      sx: He,
                      children: [
                        t.jsx(y, {
                          tooltip: "Previous announcement",
                          "aria-label": "Previous announcement",
                          onClick: () => M(-1),
                          children: t.jsx(xe, { size: 18 }),
                        }),
                        t.jsx(y, {
                          tooltip: "Next announcement",
                          "aria-label": "Next announcement",
                          onClick: () => M(1),
                          children: t.jsx(pe, { size: 18 }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    });
  },
  In = o.memo(Qe);
export { In as FloatingFeatureAnnouncements };
