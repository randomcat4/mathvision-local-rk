const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/PersonalizationDialog-SAjscOQ8.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/useMutation-C1SgG9wr.js",
      "assets/MChip-DiH8NXBU.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/useResizablePanelWidth-DfMwOMGi.js",
      "assets/useResizablePanelValue-D_NwbF9E.js",
      "assets/useGetUserType-DlzkERhz.js",
      "assets/useQuery-DM2qiUYb.js",
      "assets/ChatInteractionOverrides-dyfOoEnd.js",
      "assets/LogoutRounded-BsETu1qq.js",
      "assets/LinkOffRounded-CKGtm4_4.js",
      "assets/chatsApi-Ck-JYICO.js",
      "assets/chatQueryCache-DOdNJrP_.js",
      "assets/OpenInNewRounded-D-7V5TzF.js",
      "assets/FormControlLabel-CQvCddOM.js",
      "assets/attachmentsApi-BHgxfYft.js",
      "assets/authFetch-DXjDztUP.js",
      "assets/Divider-BcuihGce.js",
      "assets/ListItemIcon-CaLBil7Q.js",
      "assets/ListItemText-CBxudZz_.js",
    ]),
) => i.map((i) => d[i]);
import {
  A as k,
  j as e,
  ab as At,
  am as Dt,
  r as g,
  F as Rt,
  G as ge,
  H as Tt,
  I as Et,
  K as Se,
  a3 as _t,
  E as re,
  p as F,
  s as Ce,
  a as C,
  n as se,
  cb as Xe,
  cc as Lt,
  cd as Wt,
  ce as Je,
  t as D,
  q as L,
  bW as zt,
  cf as Ut,
  af as Ze,
  S as v,
  T as x,
  B as S,
  M as $,
  _ as j,
  g as M,
  C as et,
  cg as Ft,
  ax as ie,
  aj as Ht,
  ch as Bt,
  w as tt,
  ci as fe,
  cj as H,
  U as Ee,
  ck as qt,
  x as Nt,
  bC as $t,
  e as ye,
  bw as Ot,
  ae as Kt,
  $ as Qt,
  y as Vt,
  z as Gt,
} from "./index-BM3ZINIl.js";
import { u as Yt } from "./useResizablePanelWidth-DfMwOMGi.js";
import { a as Xt } from "./useGetUserType-DlzkERhz.js";
import { u as O } from "./useQuery-DM2qiUYb.js";
import { u as Jt } from "./ChatInteractionOverrides-dyfOoEnd.js";
import { L as Zt } from "./LogoutRounded-BsETu1qq.js";
import { P as nt, L as _e } from "./LinkOffRounded-CKGtm4_4.js";
import {
  u as en,
  r as tn,
  q as nn,
  s as an,
  v as rn,
  o as sn,
  w as on,
  x as ln,
  y as cn,
} from "./chatsApi-Ck-JYICO.js";
import { u as W } from "./useMutation-C1SgG9wr.js";
import { g as oe, n as at, b as K, a as Q, c as dn } from "./chatQueryCache-DOdNJrP_.js";
import { C as rt, O as un, S as hn, F as pn } from "./OpenInNewRounded-D-7V5TzF.js";
import { D as st } from "./attachmentsApi-BHgxfYft.js";
import { D as je, a as Ie, b as ke, c as Pe, M as Le, C as mn } from "./MChip-DiH8NXBU.js";
import { F as xn } from "./FormControlLabel-CQvCddOM.js";
import { T as gn, h as fn } from "./TextField-D8vc_sXz.js";
import { D as ne } from "./Divider-BcuihGce.js";
import { S as yn } from "./useResizablePanelValue-D_NwbF9E.js";
import { L as vn } from "./ListItemIcon-CaLBil7Q.js";
import { L as bn } from "./ListItemText-CBxudZz_.js";
const Sn = k(
  e.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  }),
);
function Cn(t) {
  return At("MuiAvatar", t);
}
Dt("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const jn = (t) => {
    const { classes: n, variant: a, colorDefault: r } = t;
    return Et(
      { root: ["root", a, r && "colorDefault"], img: ["img"], fallback: ["fallback"] },
      Cn,
      n,
    );
  },
  In = Se("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (t, n) => {
      const { ownerState: a } = t;
      return [n.root, n[a.variant], a.colorDefault && n.colorDefault];
    },
  })(
    _t(({ theme: t }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: t.typography.fontFamily,
      fontSize: t.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      variants: [
        {
          props: { variant: "rounded" },
          style: { borderRadius: (t.vars || t).shape.borderRadius },
        },
        { props: { variant: "square" }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (t.vars || t).palette.background.default,
            ...(t.vars
              ? { backgroundColor: t.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: t.palette.grey[400],
                  ...t.applyStyles("dark", { backgroundColor: t.palette.grey[600] }),
                }),
          },
        },
      ],
    })),
  ),
  kn = Se("img", { name: "MuiAvatar", slot: "Img" })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  Pn = Se(Sn, { name: "MuiAvatar", slot: "Fallback" })({ width: "75%", height: "75%" });
function wn(t, n, a, r) {
  const [i, s] = g.useState(!1);
  return (
    g.useEffect(() => {
      if (!t && !n) return;
      s(!1);
      let l = !0;
      const o = new Image();
      return (
        (o.onload = () => {
          l && s("loaded");
        }),
        (o.onerror = () => {
          l && s("error");
        }),
        (o.crossOrigin = a),
        (o.referrerPolicy = r),
        (o.src = t),
        n && (o.srcset = n),
        () => {
          l = !1;
        }
      );
    }, [a, r, t, n]),
    i
  );
}
const Mn = g.forwardRef(function (n, a) {
  const r = Rt({ props: n, name: "MuiAvatar" }),
    {
      alt: i,
      children: s,
      className: l,
      component: o = "div",
      slots: h = {},
      slotProps: c = {},
      sizes: u,
      src: m,
      srcSet: y,
      variant: f = "circular",
      ...b
    } = r;
  let p = null;
  const d = { ...r, component: o, variant: f },
    { crossOrigin: P, referrerPolicy: R } = (typeof c.img == "function" ? c.img(d) : c.img) ?? {},
    z = wn(m, y, P, R),
    G = m || y,
    q = G && z !== "error";
  ((d.colorDefault = !q), delete d.ownerState);
  const T = jn(d),
    N = { slots: h, slotProps: c },
    [Y, E] = ge("root", {
      ref: a,
      className: Tt(T.root, l),
      elementType: In,
      externalForwardedProps: { ...N, component: o, ...b },
      ownerState: d,
    }),
    [_, ce] = ge("img", {
      className: T.img,
      elementType: kn,
      externalForwardedProps: N,
      additionalProps: { alt: i, src: m, srcSet: y, sizes: u },
      ownerState: d,
    }),
    [de, X] = ge("fallback", {
      className: T.fallback,
      elementType: Pn,
      externalForwardedProps: N,
      shouldForwardComponentProp: !0,
      ownerState: d,
    });
  return (
    q
      ? (p = e.jsx(_, { ...ce }))
      : s || s === 0
        ? (p = s)
        : G && i
          ? (p = i[0])
          : (p = e.jsx(de, { ...X })),
    e.jsx(Y, { ...E, children: p })
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const An = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }],
  ],
  Dn = re("grid-3x3", An);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rn = [
    ["path", { d: "M18 5h4", key: "1lhgn2" }],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  Tn = re("moon-star", Rn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  _n = re("sparkles", En);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ln = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  Wn = re("sun", Ln),
  V = (t, n = []) =>
    Promise.all([
      dn(t),
      t.cancelQueries({ queryKey: C.chats(), exact: !0 }),
      t.cancelQueries({ queryKey: C.archivedChats(), exact: !0 }),
      t.cancelQueries({ queryKey: C.sharedChats(), exact: !0 }),
      ...n.flatMap((a) => [
        t.cancelQueries({ queryKey: C.chat(a), exact: !0 }),
        t.cancelQueries({ queryKey: C.chatRunState(a), exact: !0 }),
      ]),
    ]),
  zn = () => {
    const t = F();
    return W({
      mutationFn: ({ chatId: n, input: a }) => en(n, a),
      onSuccess: async (n, a) => {
        await V(t, [a.chatId]);
        const r = oe(t, a.chatId),
          i = !!((r != null && r.branchSpaceId) || n.branchSpaceId);
        (Ce(t, n),
          t.invalidateQueries({ queryKey: C.bookmarkRoot() }),
          at(n, [r == null ? void 0 : r.branchSpaceId]),
          i ? await K(t) : await Q(t));
      },
    });
  },
  yr = (t = {}) => {
    const n = F();
    return W({
      mutationFn: ({ chatId: a, folderId: r }) => an(a, r),
      onSuccess: async (a, r) => {
        var s;
        await V(n, [r.chatId]);
        const i = oe(n, r.chatId);
        (Ce(n, a),
          Wt(n, a.id),
          i != null && i.branchSpaceId && Je(n, i.branchSpaceId),
          n.invalidateQueries({ queryKey: C.bookmarkRoot() }),
          at(a, [i == null ? void 0 : i.branchSpaceId]),
          await ((s = t.onMoveSucceeded) == null ? void 0 : s.call(t, r.chatId, r.folderId)),
          i != null && i.branchSpaceId ? await K(n) : await Q(n));
      },
    });
  },
  Un = (t = {}) => {
    const n = F();
    return W({
      mutationFn: ({ chatId: a, expectedDeleteChatIds: r, expectedScopeToken: i }) =>
        nn(a, { expectedDeleteChatIds: r, expectedScopeToken: i }),
      onSuccess: async (a, r) => {
        var c, u;
        const { chatId: i } = r,
          s = [...new Set([i, ...(r.affectedChatIds ?? [])])],
          l = oe(n, i),
          o = l === null || !!l.branchSpaceId,
          h = r.dissolvedBranchSpaceId ?? null;
        if (h && l && h !== l.branchSpaceId)
          throw new Error(
            `Deleted chat '${i}' belongs to hierarchy '${l.branchSpaceId ?? "none"}', not dissolving hierarchy '${h}'.`,
          );
        (await V(n, s),
          await ((c = t.onDeleteSucceededBeforeCacheUpdate) == null ? void 0 : c.call(t, i)),
          Xe(n, s),
          h && Lt(n, h),
          n.invalidateQueries({ queryKey: C.archivedChats() }),
          n.invalidateQueries({ queryKey: C.bookmarkRoot() }),
          o ? await K(n, { excludeBranchSpaceIds: h ? [h] : [] }) : await Q(n),
          se({
            branchSpaceIds: h ? [] : [l == null ? void 0 : l.branchSpaceId],
            removedBranchSpaceIds: h ? [h] : [],
            removedChatIds: s,
          }),
          await ((u = t.onDeleteSucceeded) == null ? void 0 : u.call(t, i)));
      },
    });
  },
  vr = (t = {}) => {
    const n = F();
    return W({
      mutationFn: ({ chatId: a }) => rn(a),
      onSuccess: async (a, r) => {
        var h;
        const { chatId: i } = r,
          s = oe(n, i),
          l = s === null || !!(s.branchSpaceId || a.branchSpaceId),
          o = [...new Set([i, ...r.affectedChatIds])];
        (await V(n, o),
          await ((h = t.onArchiveSucceeded) == null ? void 0 : h.call(t, i)),
          Xe(n, o),
          s != null && s.branchSpaceId && Je(n, s.branchSpaceId),
          n.invalidateQueries({ queryKey: C.archivedChats() }),
          n.invalidateQueries({ queryKey: C.bookmarkRoot() }),
          l ? await K(n) : await Q(n),
          se({
            removedChatIds: o,
            branchSpaceIds: [s == null ? void 0 : s.branchSpaceId, a.branchSpaceId],
          }));
      },
    });
  },
  Fn = () => {
    const t = F();
    return W({
      mutationFn: ({ chatId: n, expectedScopeToken: a }) => tn(n, a),
      onSuccess: async (n, a) => {
        const r = new Set([n.id, ...a.affectedChatIds]);
        (await V(t, [...r]),
          Ce(t, n),
          t.setQueryData(C.archivedChats(), (i) =>
            i == null ? void 0 : i.filter((s) => !r.has(s.id)),
          ));
        for (const i of r) i !== n.id && t.invalidateQueries({ queryKey: C.chat(i), exact: !0 });
        (t.invalidateQueries({ queryKey: C.archivedChats() }),
          t.invalidateQueries({ queryKey: C.bookmarkRoot() }),
          n.branchSpaceId ? await K(t) : await Q(t),
          se({ chatIds: [...r], branchSpaceId: n.branchSpaceId }));
      },
    });
  },
  it = k(
    e.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1",
    }),
  ),
  ot = k(
    e.jsx("path", {
      d: "m20.55 5.22-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28m-8.2 4.63L17.5 15H14v2h-4v-2H6.5l5.15-5.15c.19-.19.51-.19.7 0M5.12 5l.82-1h12l.93 1z",
    }),
  ),
  Hn = /^[0-9a-f]{64}$/,
  Bn = (t, n, a) => {
    if (a.selectedChatId !== n)
      throw new Error("The archived chat action scope does not match the selected chat.");
    if (!Hn.test(a.scopeToken)) throw new Error("The archived chat action scope token is invalid.");
    const r = t === "unarchive" ? a.restoreChatIds : a.deleteChatIds;
    if (r.length === 0 || !r.includes(n) || new Set(r).size !== r.length)
      throw new Error("The archived chat action scope is invalid.");
    let i = r.length,
      s = 0;
    if (t === "delete") {
      const l = new Set(a.archivedDeleteChatIds),
        o = new Set(a.activeDeleteChatIds),
        h = new Set(a.deleteChatIds);
      if (
        l.size !== a.archivedDeleteChatIds.length ||
        o.size !== a.activeDeleteChatIds.length ||
        !l.has(n) ||
        a.activeDeleteChatIds.some((u) => l.has(u)) ||
        l.size + o.size !== h.size ||
        a.deleteChatIds.some((u) => !l.has(u) && !o.has(u))
      )
        throw new Error("The archived delete scope partition is invalid.");
      ((i = l.size), (s = o.size));
    }
    return {
      action: t,
      chatId: n,
      affectedChatIds: r,
      activeChatCount: s,
      archivedChatCount: i,
      scopeToken: a.scopeToken,
    };
  },
  br = (t, n) => {
    if (t.length !== n.length) return !1;
    const a = new Set(t);
    return a.size === t.length && n.every((r) => a.has(r));
  },
  te = (t, n) => `${t} ${n} ${t === 1 ? "chat" : "chats"}`,
  qn = () => {
    const t = F(),
      [n, a] = g.useState(null),
      [r, i] = g.useState(null),
      s = Fn(),
      l = Un(),
      o = s.isPending || l.isPending,
      h = n !== null || o,
      c = g.useCallback(
        async (b, p) => {
          if (!(n || r || o)) {
            a({ action: b, chatId: p });
            try {
              const d = await sn(p);
              i(Bn(b, p, d));
            } catch (d) {
              D.error(L(d));
            } finally {
              a(null);
            }
          }
        },
        [r, o, n],
      ),
      u = g.useCallback(() => {
        o || i(null);
      }, [o]),
      m = g.useCallback(async () => {
        if (!r || o) return;
        const { action: b, chatId: p, affectedChatIds: d, scopeToken: P } = r;
        try {
          (b === "unarchive"
            ? await s.mutateAsync({ chatId: p, affectedChatIds: d, expectedScopeToken: P })
            : await l.mutateAsync({ chatId: p, affectedChatIds: d, expectedScopeToken: P }),
            i(null),
            D.success(
              b === "delete"
                ? r.activeChatCount > 0
                  ? `${d.length} chats permanently deleted (${te(r.archivedChatCount, "archived")}, ${te(r.activeChatCount, "active")}).`
                  : d.length === 1
                    ? "Archived chat permanently deleted."
                    : `${d.length} archived chats permanently deleted.`
                : d.length === 1
                  ? "Chat unarchived."
                  : `${d.length} connected chats unarchived.`,
            ));
        } catch (R) {
          if (zt(R)) {
            (i(null),
              t.invalidateQueries({ queryKey: C.archivedChats() }),
              t.invalidateQueries({ queryKey: C.chats() }));
            for (const z of d) t.invalidateQueries({ queryKey: C.chat(z), exact: !0 });
            D.error(L(R));
            return;
          }
          D.error(L(R));
        }
      }, [r, l, o, t, s]),
      y = g.useCallback(() => {
        (a(null), i(null));
      }, []),
      f = g.useMemo(() => {
        if (!r) return null;
        const b = r.affectedChatIds.length,
          p = b - 1,
          d = r.action === "delete",
          P = d && r.activeChatCount > 0,
          R = d
            ? P
              ? `Permanently delete ${b} chats?`
              : b === 1
                ? "Permanently delete this archived chat?"
                : `Permanently delete ${b} archived chats?`
            : b === 1
              ? "Unarchive this chat?"
              : `Unarchive ${b} connected chats?`,
          z = d
            ? P
              ? `This will permanently delete ${te(r.archivedChatCount, "archived")} and ${te(r.activeChatCount, "active")} from the same hierarchy, including all of their messages. This cannot be undone.`
              : b === 1
                ? "This will permanently delete this chat and all of its messages. This cannot be undone."
                : `This will permanently delete this chat and ${p} other related archived ${p === 1 ? "chat" : "chats"}, including all of their messages. This cannot be undone.`
            : b === 1
              ? "This will return this chat to your chat explorer."
              : `This will return this chat and ${p} other connected archived ${p === 1 ? "chat" : "chats"} to your chat explorer.`;
        return e.jsx(rt, {
          open: !0,
          title: R,
          message: z,
          cancelLabel: "Cancel",
          confirmLabel: d ? "Permanently delete" : "Unarchive",
          pendingConfirmLabel: d ? "Deleting..." : "Unarchiving...",
          onClose: u,
          onConfirm: m,
          isPending: o,
          confirmColor: d ? "error" : "primary",
          confirmStartIcon: d ? e.jsx(it, { fontSize: "small" }) : e.jsx(ot, { fontSize: "small" }),
        });
      }, [u, m, r, o]);
    return {
      confirmation: r,
      confirmationDialog: f,
      deleteChatMutation: l,
      isPending: h,
      pendingRequest: n,
      requestAction: c,
      reset: y,
      restoreChatMutation: s,
    };
  },
  We = (t) => e.jsx(Mn, { ...$n(t.alt), ...t });
function Nn(t) {
  if (!t) return Ut.black;
  let n = 0,
    a;
  for (a = 0; a < t.length; a += 1) n = t.charCodeAt(a) + ((n << 5) - n);
  let r = "#";
  for (a = 0; a < 3; a += 1) {
    const i = (n >> (a * 8)) & 255;
    r += `00${i.toString(16)}`.slice(-2);
  }
  return r;
}
function $n(t) {
  var r, i, s, l;
  if (!t) return {};
  const n = ((i = (r = t.split(" ")) == null ? void 0 : r[0]) == null ? void 0 : i[0]) || "",
    a = ((l = (s = t.split(" ")) == null ? void 0 : s[1]) == null ? void 0 : l[0]) || "";
  return { sx: { bgcolor: Nn(t) }, children: `${n}${a}` };
}
const lt = k(
    e.jsx("path", {
      d: "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27m-8.89 11.92L6.5 12H10v-2h4v2h3.5l-5.15 5.15c-.19.19-.51.19-.7 0M5.12 5l.81-1h12l.94 1z",
    }),
  ),
  ze = k(
    e.jsx("path", {
      d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01",
    }),
  ),
  On = k(
    e.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47",
    }),
  ),
  Kn = k([
    e.jsx(
      "path",
      {
        d: "M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V19c0 .55.45 1 1 1h8.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98",
      },
      "0",
    ),
    e.jsx("circle", { cx: "10", cy: "8", r: "4" }, "1"),
    e.jsx(
      "path",
      {
        d: "M20.75 16c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02c-.12-.21-.37-.3-.59-.22l-1.06.36q-.48-.405-1.08-.63l-.22-1.09c-.05-.23-.25-.4-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09q-.6.225-1.08.63l-1.06-.36c-.23-.08-.47.02-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36q.48.405 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09q.6-.225 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2",
      },
      "2",
    ),
  ]),
  Qn = k(
    e.jsx("path", {
      d: "M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1M3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1m10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1M7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1m14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1m-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1",
    }),
  ),
  Vn = k(
    e.jsx("path", {
      d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
    }),
  ),
  Gn = (t) => ({
    p: 1,
    borderRadius: t.shape.borderRadiusPx,
    border: `1px solid ${M(t.palette.text.primary, 0.08)}`,
    backgroundColor: M(t.palette.background.paper, 0.58),
  }),
  Yn = { minWidth: 0 },
  Xn = { display: "flex", flexWrap: "wrap", gap: 0.6 },
  ct = g.memo(
    ({
      chat: t,
      isActionDisabled: n,
      pendingAction: a,
      executingAction: r,
      onPreview: i,
      onRequestAction: s,
    }) => {
      const l = t.title ?? Ze,
        o = a === "unarchive",
        h = a === "delete",
        c = r === "unarchive",
        u = r === "delete";
      return e.jsxs(v, {
        spacing: 0.85,
        sx: Gn,
        children: [
          e.jsxs(v, {
            spacing: 0.35,
            sx: Yn,
            children: [
              e.jsx(x, { variant: "subtitle2", color: "textPrimary", noWrap: !0, children: l }),
              e.jsx(x, {
                variant: "body2",
                color: "textSecondary",
                noWrap: !0,
                children: t.preview,
              }),
              t.archivedAt &&
                e.jsxs(x, {
                  variant: "caption",
                  color: "textSecondary",
                  children: ["Archived ", e.jsx(st, { value: t.archivedAt })],
                }),
            ],
          }),
          e.jsxs(S, {
            sx: Xn,
            children: [
              e.jsx($, {
                to: "/chats/$chatId",
                params: { chatId: t.id },
                type: "button",
                size: "small",
                color: "secondary",
                disabled: n,
                startIcon: e.jsx(Vn, { fontSize: "small" }),
                onClick: i,
                children: "Preview",
              }),
              e.jsxs(j, {
                type: "button",
                size: "small",
                color: "secondary",
                disabled: n,
                startIcon: e.jsx(ot, { fontSize: "small" }),
                onClick: () => s("unarchive", t.id),
                children: [o && "Checking...", c && "Unarchiving...", !o && !c && "Unarchive"],
              }),
              e.jsxs(j, {
                type: "button",
                size: "small",
                color: "error",
                disabled: n,
                startIcon: e.jsx(it, { fontSize: "small" }),
                onClick: () => s("delete", t.id),
                children: [h && "Checking...", u && "Deleting...", !h && !u && "Delete"],
              }),
            ],
          }),
        ],
      });
    },
  );
ct.displayName = "ArchivedChatRow";
const Jn = { minHeight: "28rem" },
  Zn = { minWidth: 0, display: "flex", flexDirection: "column", gap: 1 },
  Ue = { alignItems: "center" },
  ve = { minHeight: "18rem", display: "flex", alignItems: "center", justifyContent: "center" },
  ea = ({ open: t, onClose: n }) => {
    const a = O({ queryKey: C.archivedChats(), queryFn: ({ signal: p }) => on(p), enabled: t }),
      {
        confirmation: r,
        confirmationDialog: i,
        deleteChatMutation: s,
        isPending: l,
        pendingRequest: o,
        requestAction: h,
        reset: c,
        restoreChatMutation: u,
      } = qn(),
      m = a.data ?? [],
      y = l || r !== null,
      f = g.useCallback(() => {
        (c(), n());
      }, [n, c]),
      b = g.useCallback(
        (p, d) => {
          h(p, d);
        },
        [h],
      );
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(je, {
          open: t,
          onClose: y ? void 0 : f,
          "aria-labelledby": "archived-chats-title",
          maxWidth: "sm",
          fullWidth: !0,
          children: [
            e.jsx(Ie, { id: "archived-chats-title", children: "Archived chats" }),
            e.jsx(ke, {
              dividers: !0,
              sx: Jn,
              children: e.jsxs(S, {
                sx: Zn,
                children: [
                  a.isPending &&
                    e.jsx(S, {
                      sx: ve,
                      children: e.jsxs(v, {
                        spacing: 1.3,
                        sx: Ue,
                        children: [
                          e.jsx(et, { size: 24 }),
                          e.jsx(x, {
                            variant: "body2",
                            color: "textSecondary",
                            children: "Loading archived chats...",
                          }),
                        ],
                      }),
                    }),
                  a.isError &&
                    e.jsx(S, {
                      sx: ve,
                      children: e.jsx(x, {
                        variant: "body2",
                        color: "error",
                        children: L(a.error),
                      }),
                    }),
                  a.isSuccess &&
                    m.length === 0 &&
                    e.jsx(S, {
                      sx: ve,
                      children: e.jsxs(v, {
                        spacing: 1.1,
                        sx: Ue,
                        children: [
                          e.jsx(lt, { color: "disabled" }),
                          e.jsx(x, {
                            variant: "body2",
                            color: "textSecondary",
                            children: "No archived chats.",
                          }),
                        ],
                      }),
                    }),
                  a.isSuccess &&
                    m.length > 0 &&
                    m.map((p) => {
                      var d, P;
                      return e.jsx(
                        ct,
                        {
                          chat: p,
                          isActionDisabled: y,
                          pendingAction: (o == null ? void 0 : o.chatId) === p.id ? o.action : null,
                          executingAction:
                            u.isPending && ((d = u.variables) == null ? void 0 : d.chatId) === p.id
                              ? "unarchive"
                              : s.isPending &&
                                  ((P = s.variables) == null ? void 0 : P.chatId) === p.id
                                ? "delete"
                                : null,
                          onPreview: f,
                          onRequestAction: b,
                        },
                        p.id,
                      );
                    }),
                ],
              }),
            }),
            e.jsx(Pe, {
              children: e.jsx(j, {
                type: "button",
                color: "secondary",
                disabled: y,
                onClick: f,
                children: "Close",
              }),
            }),
          ],
        }),
        i,
      ],
    });
  },
  ta = (t) => ({
    p: 1,
    borderRadius: t.shape.borderRadiusPx,
    border: `1px solid ${M(t.palette.text.primary, 0.08)}`,
    backgroundColor: M(t.palette.background.paper, 0.58),
  }),
  na = { minWidth: 0 },
  aa = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 0.75,
  },
  dt = g.memo(({ chat: t, isActionDisabled: n, isUnsharing: a, onUnshare: r }) => {
    const i = t.title ?? Ze;
    return e.jsxs(v, {
      spacing: 0.85,
      sx: ta,
      children: [
        e.jsxs(v, {
          spacing: 0.35,
          sx: na,
          children: [
            e.jsx(x, { variant: "subtitle2", color: "textPrimary", noWrap: !0, children: i }),
            e.jsx(x, { variant: "body2", color: "textSecondary", noWrap: !0, children: t.preview }),
            e.jsxs(x, {
              variant: "caption",
              color: "textSecondary",
              children: ["Updated ", e.jsx(st, { value: t.lastUpdated })],
            }),
          ],
        }),
        e.jsxs(S, {
          sx: aa,
          children: [
            e.jsx($, {
              to: "/share/$chatId",
              params: { chatId: t.id },
              type: "button",
              size: "small",
              color: "secondary",
              target: "_blank",
              rel: "noopener noreferrer",
              disabled: n,
              startIcon: e.jsx(un, { fontSize: "small" }),
              children: "Open shared link",
            }),
            e.jsx(xn, {
              label: a ? "Unsharing..." : "Shared",
              control: e.jsx(hn, {
                checked: !0,
                size: "small",
                disabled: n,
                slotProps: { input: { "aria-label": `Unshare ${i}` } },
                onChange: (s, l) => {
                  l || r(t);
                },
              }),
            }),
          ],
        }),
      ],
    });
  });
dt.displayName = "SharedChatRow";
const ra = { minHeight: "28rem" },
  sa = { minWidth: 0, display: "flex", flexDirection: "column", gap: 1 },
  Fe = { alignItems: "center" },
  be = { minHeight: "18rem", display: "flex", alignItems: "center", justifyContent: "center" },
  ia = ({ open: t, onClose: n }) => {
    const a = F(),
      [r, i] = g.useState(!1),
      s = O({ queryKey: C.sharedChats(), queryFn: ({ signal: d }) => cn(d), enabled: t }),
      { isPending: l, mutate: o, variables: h } = zn(),
      { isPending: c, mutate: u } = W({
        mutationFn: ln,
        onSuccess: () => {
          Ft(a);
        },
      }),
      m = g.useMemo(() => s.data ?? [], [s.data]),
      y = l || c,
      f = g.useCallback(() => {
        y || (i(!1), n());
      }, [y, n]),
      b = g.useCallback(
        (d) => {
          o(
            { chatId: d.id, input: { isPublic: !1 } },
            { onSuccess: () => D.success("Chat unshared.") },
          );
        },
        [o],
      ),
      p = g.useCallback(() => {
        u(void 0, {
          onSuccess: () => {
            (i(!1), se({ chatIds: m.map((d) => d.id) }), D.success("All chats unshared."));
          },
        });
      }, [m, u]);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(je, {
          open: t,
          onClose: y ? void 0 : f,
          "aria-labelledby": "shared-chats-title",
          maxWidth: "sm",
          fullWidth: !0,
          children: [
            e.jsx(Ie, { id: "shared-chats-title", children: "Shared chats" }),
            e.jsx(ke, {
              dividers: !0,
              sx: ra,
              children: e.jsxs(S, {
                sx: sa,
                children: [
                  s.isPending &&
                    e.jsx(S, {
                      sx: be,
                      children: e.jsxs(v, {
                        spacing: 1.3,
                        sx: Fe,
                        children: [
                          e.jsx(et, { size: 24 }),
                          e.jsx(x, {
                            variant: "body2",
                            color: "textSecondary",
                            children: "Loading shared chats...",
                          }),
                        ],
                      }),
                    }),
                  s.isError &&
                    e.jsx(S, {
                      sx: be,
                      children: e.jsx(x, {
                        variant: "body2",
                        color: "error",
                        children: L(s.error),
                      }),
                    }),
                  s.isSuccess &&
                    m.length === 0 &&
                    e.jsx(S, {
                      sx: be,
                      children: e.jsxs(v, {
                        spacing: 1.1,
                        sx: Fe,
                        children: [
                          e.jsx(nt, { color: "disabled" }),
                          e.jsx(x, {
                            variant: "body2",
                            color: "textSecondary",
                            children: "No shared chats.",
                          }),
                        ],
                      }),
                    }),
                  s.isSuccess &&
                    m.map((d) =>
                      e.jsx(
                        dt,
                        {
                          chat: d,
                          isActionDisabled: y,
                          isUnsharing: l && (h == null ? void 0 : h.chatId) === d.id,
                          onUnshare: b,
                        },
                        d.id,
                      ),
                    ),
                ],
              }),
            }),
            e.jsxs(Pe, {
              children: [
                m.length > 0 &&
                  e.jsx(j, {
                    type: "button",
                    color: "error",
                    disabled: y,
                    startIcon: e.jsx(_e, { fontSize: "small" }),
                    onClick: () => i(!0),
                    children: "Unshare all",
                  }),
                e.jsx(j, {
                  type: "button",
                  color: "secondary",
                  disabled: y,
                  onClick: f,
                  children: "Close",
                }),
              ],
            }),
          ],
        }),
        e.jsx(rt, {
          open: r,
          title: "Unshare all chats?",
          message:
            "Every shared chat link will stop working. You can share individual chats again later.",
          confirmLabel: "Unshare all",
          pendingConfirmLabel: "Unsharing...",
          confirmColor: "error",
          confirmStartIcon: e.jsx(_e, { fontSize: "small" }),
          isPending: c,
          onClose: () => i(!1),
          onConfirm: p,
        }),
      ],
    });
  },
  ut = () => {
    const t = new URLSearchParams(window.location.search).get("billing");
    return t === "success" || t === "cancelled" || t === "portal-return" ? t : null;
  },
  oa = () => {
    const t = new URL(window.location.href);
    (t.searchParams.delete("billing"),
      window.history.replaceState(window.history.state, "", `${t.pathname}${t.search}${t.hash}`));
  },
  le = Ht,
  la = (t) => ({
    plan: t.plan,
    billingEnabled: t.billing_enabled,
    hasBillingAccount: t.has_billing_account,
    cancelsAt: t.cancels_at,
    subscriptionProductName: t.subscription_product_name,
    subscriptionProductDescription: t.subscription_product_description,
    subscriptionProductMetadata: t.subscription_product_metadata,
  }),
  ca = (t) => ({
    id: t.id,
    active: t.active,
    name: t.name,
    description: t.description,
    prices: t.prices.map((n) => ({
      id: n.id,
      active: n.active,
      currency: n.currency,
      type: n.type,
      unitAmount: n.unit_amount,
      recurringInterval: n.recurring_interval,
    })),
  }),
  da = () => ie.get(le, "billing/current").then(la),
  ua = () => ie.get(le, "billing/catalog").then((t) => t.map(ca)),
  ha = (t) =>
    ie
      .post(le, "billing/checkout-session", { price_id: t, client_request_id: crypto.randomUUID() })
      .then((n) => n.checkout_url),
  pa = () => ie.post(le, "billing/portal-session", {}).then((t) => t.portal_url),
  He = 3e4,
  ae = {
    all: ["billing"],
    current: () => [...ae.all, "current"],
    catalog: () => [...ae.all, "catalog"],
  },
  ma = 2e3,
  xa = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" }),
  Be = () => {
    const t = window.open("", "_blank");
    return t === null
      ? (D.error("Allow pop-ups to open Stripe billing in a new tab."), null)
      : ((t.opener = null), t);
  },
  ga = (t) => {
    if (t.unitAmount === null || t.currency === null)
      return t.type === "recurring" ? "Custom recurring price" : "Custom price";
    const n = new Intl.NumberFormat(void 0, { style: "currency", currency: t.currency }).format(
      t.unitAmount / 100,
    );
    return t.recurringInterval === null ? `${n} one-time` : `${n} / ${t.recurringInterval}`;
  },
  fa = () => {
    var h;
    const t = ut(),
      n = O({
        queryKey: ae.current(),
        queryFn: da,
        staleTime: He,
        refetchInterval: (c) => {
          var u;
          return t === "success" && ((u = c.state.data) == null ? void 0 : u.plan) !== "pro"
            ? ma
            : !1;
        },
      }),
      a = O({
        queryKey: ae.catalog(),
        queryFn: ua,
        staleTime: He,
        enabled:
          ((h = n.data) == null ? void 0 : h.billingEnabled) === !0 && n.data.plan === "free",
      }),
      r = W({
        mutationFn: async ({ billingTab: c, price: u }) => ({
          billingTab: c,
          checkoutUrl: await ha(u.id),
        }),
        onSuccess: ({ billingTab: c, checkoutUrl: u }) => {
          c.location.assign(u);
        },
        onError: (c, { billingTab: u }) => {
          (u.close(), D.error(L(c)));
        },
      }),
      i = W({
        mutationFn: async (c) => ({ billingTab: c, portalUrl: await pa() }),
        onSuccess: ({ billingTab: c, portalUrl: u }) => {
          c.location.assign(u);
        },
        onError: (c, u) => {
          (u.close(), D.error(L(c)));
        },
      });
    if (n.isPending)
      return e.jsxs(v, {
        spacing: 0.35,
        children: [
          e.jsx(x, { variant: "subtitle2", color: "textPrimary", children: "Billing" }),
          e.jsx(x, {
            variant: "body2",
            color: "textSecondary",
            children: "Loading billing details...",
          }),
        ],
      });
    if (n.isError)
      return e.jsxs(v, {
        spacing: 0.35,
        children: [
          e.jsx(x, { variant: "subtitle2", color: "textPrimary", children: "Billing" }),
          e.jsx(x, { variant: "body2", color: "error", children: L(n.error) }),
        ],
      });
    const s = n.data;
    if (s.billingEnabled && s.plan === "free" && a.isPending)
      return e.jsxs(v, {
        spacing: 0.35,
        children: [
          e.jsx(x, { variant: "subtitle2", color: "textPrimary", children: "Billing" }),
          e.jsx(x, {
            variant: "body2",
            color: "textSecondary",
            children: "Loading billing products...",
          }),
        ],
      });
    if (s.billingEnabled && s.plan === "free" && a.isError)
      return e.jsxs(v, {
        spacing: 0.35,
        children: [
          e.jsx(x, { variant: "subtitle2", color: "textPrimary", children: "Billing" }),
          e.jsx(x, { variant: "body2", color: "error", children: L(a.error) }),
        ],
      });
    const l = a.data ?? [],
      o = r.isPending || i.isPending;
    return (
      console.log(s, l),
      e.jsxs(v, {
        spacing: 1.4,
        children: [
          e.jsxs(v, {
            spacing: 0.35,
            children: [
              e.jsx(x, { variant: "subtitle2", color: "textPrimary", children: "Billing" }),
              !s.billingEnabled &&
                e.jsx(x, {
                  variant: "body2",
                  color: "textSecondary",
                  children: "Billing is not available for this account yet.",
                }),
              s.billingEnabled &&
                s.plan === "free" &&
                e.jsx(x, {
                  variant: "body2",
                  color: "textSecondary",
                  children: "You are on the Free plan.",
                }),
              s.billingEnabled &&
                s.plan === "pro" &&
                e.jsxs(S, {
                  children: [
                    e.jsx(Le, {
                      label: s.subscriptionProductName ?? "Pro",
                      color: "primary",
                      variant: "filled",
                      size: "small",
                    }),
                    e.jsx("br", {}),
                    e.jsx(x, {
                      variant: "caption",
                      children: s.subscriptionProductDescription ?? "Your subscription is active.",
                    }),
                  ],
                }),
              s.billingEnabled &&
                s.plan === "pro" &&
                s.cancelsAt !== null &&
                e.jsx(v, {
                  direction: "row",
                  children: e.jsx(Le, {
                    label: `Cancels ${xa.format(new Date(s.cancelsAt))}`,
                    size: "small",
                    color: "warning",
                    variant: "outlined",
                  }),
                }),
              t === "success" &&
                s.plan !== "pro" &&
                e.jsx(x, {
                  variant: "body2",
                  color: "textSecondary",
                  children:
                    "Stripe is confirming your subscription. Your plan will activate shortly.",
                }),
              t === "cancelled" &&
                s.plan === "free" &&
                e.jsx(x, {
                  variant: "body2",
                  color: "textSecondary",
                  children: "Checkout was canceled. You remain on the Free plan.",
                }),
            ],
          }),
          s.billingEnabled &&
            s.plan === "free" &&
            l.length > 0 &&
            e.jsx(v, {
              spacing: 1.5,
              children: l.map((c) => {
                const u = c.prices.filter((m) => m.unitAmount !== 0);
                return e.jsxs(
                  v,
                  {
                    spacing: 0.45,
                    children: [
                      e.jsx(v, {
                        direction: "row",
                        sx: { justifyContent: "space-between", alignItems: "center" },
                        children: e.jsx(x, {
                          variant: "subtitle2",
                          color: "textPrimary",
                          children: c.name,
                        }),
                      }),
                      c.description !== null &&
                        e.jsx(x, {
                          variant: "body2",
                          color: "textSecondary",
                          children: c.description,
                        }),
                      u.map((m) => {
                        const y = s.plan === "free" && m.type === "recurring";
                        return e.jsxs(
                          v,
                          {
                            spacing: 0.45,
                            children: [
                              e.jsx(x, { variant: "body2", color: "textPrimary", children: ga(m) }),
                              y &&
                                e.jsxs(j, {
                                  type: "button",
                                  variant: "contained",
                                  fullWidth: !0,
                                  disabled: o,
                                  onClick: () => {
                                    const f = Be();
                                    f !== null && r.mutate({ billingTab: f, price: m });
                                  },
                                  children: [
                                    r.isPending && "Opening Stripe Checkout...",
                                    !r.isPending && `Choose ${c.name}`,
                                  ],
                                }),
                            ],
                          },
                          m.id,
                        );
                      }),
                    ],
                  },
                  c.id,
                );
              }),
            }),
          s.billingEnabled &&
            s.plan === "free" &&
            l.length === 0 &&
            e.jsx(x, {
              variant: "body2",
              color: "textSecondary",
              children: "No billing products are available.",
            }),
          s.billingEnabled &&
            s.hasBillingAccount &&
            e.jsxs(j, {
              type: "button",
              variant: "text",
              color: "secondary",
              fullWidth: !0,
              disabled: o,
              onClick: () => {
                const c = Be();
                c !== null && i.mutate(c);
              },
              children: [
                i.isPending && "Opening billing portal...",
                !i.isPending && "Manage billing",
              ],
            }),
        ],
      })
    );
  },
  ya = k(
    e.jsx("path", {
      d: "M4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0zM12 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1",
    }),
  ),
  va = k(
    e.jsx("path", {
      d: "M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1",
    }),
  ),
  ba = (t) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "1 1 auto",
    minWidth: 0,
    gap: 1,
    p: 0,
    border: 0,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: "transparent",
    cursor: "pointer",
    textAlign: "left",
    "&:focus-visible": {
      outline: `2px solid ${M(t.palette.primary.main, 0.32)}`,
      outlineOffset: 2,
    },
  }),
  Sa = (t) => ({ zIndex: t.zIndex.drawer + 3 }),
  Ca = { width: "min(17rem, calc(100vw - 2rem))", p: 0.65 },
  ja = { display: "flex", alignItems: "center", gap: 1, minWidth: 0, px: 0.55, py: 0.45 },
  Ia = { minWidth: 0 },
  ka = { minWidth: 0, flex: "1 1 auto" },
  qe = (t) => ({ backgroundColor: M(t.palette.primary.main, 0.08) }),
  Pa = (t) => ({ color: t.palette.error.main }),
  Ne = { my: 0.35 },
  $e = { position: "relative" },
  Oe = (t) => ({
    position: "absolute",
    ...(t === "right" ? { left: "calc(100% + 0.55rem)" } : { right: "calc(100% + 0.55rem)" }),
    bottom: 0,
    width: "min(16.5rem, calc(100vw - 2rem))",
    p: 0.65,
    "@media (max-width:720px)": {
      left: 0,
      right: "auto",
      bottom: "calc(100% + 0.55rem)",
      width: "100%",
    },
  }),
  w = (t) => ({
    justifyContent: "flex-start",
    minHeight: "2.35rem",
    borderRadius: t.shape.borderRadiusPx,
    color: t.palette.text.primary,
    "& .MuiButton-startIcon": { mr: 0.9 },
    "& .MuiButton-endIcon": { ml: "auto" },
  }),
  ht = { display: "flex", flexDirection: "column", gap: 0.35 },
  wa = { display: "flex", flexDirection: "column", gap: 0.6 },
  Ma = ({ onNavigate: t }) =>
    e.jsxs(S, {
      sx: ht,
      children: [
        e.jsx($, {
          to: "/terms",
          type: "button",
          variant: "text",
          color: "secondary",
          fullWidth: !0,
          startIcon: e.jsx(va, { fontSize: "small" }),
          sx: w,
          onClick: t,
          children: "Terms",
        }),
        e.jsx($, {
          to: "/privacy",
          type: "button",
          variant: "text",
          color: "secondary",
          fullWidth: !0,
          startIcon: e.jsx(ya, { fontSize: "small" }),
          sx: w,
          onClick: t,
          children: "Privacy",
        }),
      ],
    }),
  Ke = ({ name: t, detail: n, sx: a }) =>
    e.jsxs(v, {
      sx: a,
      children: [
        e.jsx(x, { variant: "subtitle2", color: "textPrimary", noWrap: !0, children: t }),
        n && e.jsx(x, { variant: "body2", color: "textSecondary", noWrap: !0, children: n }),
      ],
    }),
  Aa = k(
    e.jsx("path", {
      d: "M13.26 3C8.17 2.86 4 6.94 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.8-2.79c.3-.31.08-.85-.37-.85H6c0-3.89 3.2-7.06 7.1-7 3.71.05 6.84 3.18 6.9 6.9.06 3.91-3.1 7.1-7 7.1-1.59 0-3.05-.53-4.23-1.43-.4-.3-.96-.27-1.31.09-.43.43-.39 1.14.09 1.5C9.06 20.31 10.95 21 13 21c5.06 0 9.14-4.17 9-9.25-.13-4.7-4.05-8.62-8.74-8.75M15 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z",
    }),
  ),
  Da = k(
    e.jsx("path", {
      d: "M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2",
    }),
  ),
  Ra = k(
    e.jsx("path", {
      d: "m11.19 1.36-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0M12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z",
    }),
  ),
  Ta = ({ displayName: t, isProfileLoading: n, onClose: a }) => {
    const r = F(),
      [i, s] = g.useState(null),
      l = W({
        mutationFn: Bt,
        onSuccess: (p) => {
          (r.setQueryData(tt.currentProfile(), p), s(p.displayName), D.success("Profile saved."));
        },
      }),
      o = i ?? t,
      h = Qe(o),
      c = Qe(t),
      u = h !== c,
      m = l.isPending,
      y = h.length > 0 && h.length <= fe && u && !n && !m,
      f = () => {
        m || a();
      },
      b = (p) => {
        (p.preventDefault(), y && l.mutate({ displayName: h }));
      };
    return e.jsx(je, {
      open: !0,
      onClose: f,
      "aria-labelledby": "profile-user-settings-title",
      maxWidth: "xs",
      fullWidth: !0,
      children: e.jsxs(S, {
        component: "form",
        onSubmit: b,
        children: [
          e.jsx(Ie, { id: "profile-user-settings-title", children: "User settings" }),
          e.jsx(ke, {
            dividers: !0,
            children: e.jsxs(v, {
              spacing: 2,
              children: [
                e.jsxs(v, {
                  spacing: 1.4,
                  children: [
                    e.jsxs(v, {
                      spacing: 0.35,
                      children: [
                        e.jsx(x, {
                          variant: "subtitle2",
                          color: "textPrimary",
                          children: "Display name",
                        }),
                        e.jsx(x, {
                          variant: "body2",
                          color: "textSecondary",
                          children:
                            "Choose the name shown in your account menu and shared workspace activity.",
                        }),
                      ],
                    }),
                    e.jsx(gn, {
                      id: "profile-display-name",
                      label: "Display name",
                      size: "small",
                      value: o,
                      disabled: n || m,
                      helperText: `${o.length}/${fe}`,
                      onChange: (p) => {
                        s(p.target.value);
                      },
                      slotProps: {
                        htmlInput: { maxLength: fe },
                        formHelperText: { sx: { ml: "auto" } },
                      },
                    }),
                  ],
                }),
                H === "main" && e.jsx(ne, {}),
                H === "main" && e.jsx(fa, {}),
                e.jsx(ne, {}),
                e.jsxs(v, {
                  spacing: 1.4,
                  children: [
                    e.jsxs(v, {
                      spacing: 0.35,
                      children: [
                        e.jsx(x, {
                          variant: "subtitle2",
                          color: "textPrimary",
                          children: "Security",
                        }),
                        e.jsx(x, {
                          variant: "body2",
                          color: "textSecondary",
                          children: "Manage password and account security options.",
                        }),
                      ],
                    }),
                    e.jsxs(S, {
                      sx: wa,
                      children: [
                        e.jsx(j, {
                          type: "button",
                          variant: "text",
                          color: "secondary",
                          fullWidth: !0,
                          disabled: m,
                          startIcon: e.jsx(Aa, { fontSize: "small" }),
                          sx: w,
                          onClick: () => {
                            (f(), Ee.resetPassword());
                          },
                          children: "Reset password",
                        }),
                        e.jsx(j, {
                          type: "button",
                          variant: "text",
                          color: "secondary",
                          fullWidth: !0,
                          disabled: m,
                          startIcon: e.jsx(Ra, { fontSize: "small" }),
                          sx: w,
                          onClick: () => {
                            (f(), Ee.manageSignInSecurity());
                          },
                          children: "Security",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(Pe, {
            children: [
              e.jsx(j, {
                type: "button",
                color: "secondary",
                disabled: m,
                onClick: f,
                children: "Close",
              }),
              e.jsx(j, {
                type: "submit",
                variant: "contained",
                disabled: !y,
                startIcon: e.jsx(Da, { fontSize: "small" }),
                children: m ? "Saving..." : "Save",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Qe = (t) => t.replace(/\s+/g, " ").trim(),
  Ea = { light: Wn, dark: yn, nebula: _n, midnight: Tn, blueprint: Dn },
  pt = ({ colorScheme: t, ...n }) => {
    const a = Ea[t];
    return e.jsx(a, { "aria-hidden": "true", ...n });
  },
  _a = ["light", "dark", "nebula", "midnight", "blueprint"],
  mt = {
    light: "Regular",
    dark: "Terminal Dark",
    nebula: "Nebula",
    midnight: "Midnight",
    blueprint: "Blueprint",
  },
  La = {
    light: "Warm paper and teal",
    dark: "Green phosphor terminal",
    nebula: "Lavender aurora light",
    midnight: "Deep navy and electric blue",
    blueprint: "Drafting paper and cobalt",
  },
  xt = () => {
    const { colorScheme: t, setColorScheme: n, setMode: a } = qt(),
      r = t ?? "light",
      i = g.useCallback(
        (s) => {
          if (s !== "dark" && s !== "midnight") {
            (n({ light: s }), a("light"));
            return;
          }
          (n({ dark: s }), a("dark"));
        },
        [n, a],
      );
    return { activeColorScheme: r, activeColorSchemeLabel: mt[r], selectColorScheme: i };
  },
  Wa = (t) => ({
    p: 0.65,
    "& .MuiMenuItem-root": { minHeight: "3.5rem", gap: 1, borderRadius: t.shape.borderRadiusPx },
    "& .MuiMenuItem-root.Mui-selected": { backgroundColor: M(t.palette.primary.main, 0.14) },
    "& .MuiListItemIcon-root": { minWidth: "auto", color: "inherit" },
  }),
  za = { width: "min(16.5rem, calc(100vw - 2rem))", p: 0 },
  Ua = ({ onSelect: t }) => {
    const { activeColorScheme: n, selectColorScheme: a } = xt();
    return _a.map((r) => {
      const i = n === r;
      return e.jsxs(
        Nt,
        {
          role: "menuitemradio",
          "aria-checked": i,
          selected: i,
          onClick: () => {
            (a(r), t());
          },
          children: [
            e.jsx(vn, { children: e.jsx(pt, { colorScheme: r, size: 18 }) }),
            e.jsx(bn, { primary: mt[r], secondary: La[r] }),
            i && e.jsx(mn, { "aria-hidden": "true", size: 16 }),
          ],
        },
        r,
      );
    });
  },
  Fa = g.lazy(() =>
    Qt(
      () => import("./PersonalizationDialog-SAjscOQ8.js"),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      ]),
    ),
  ),
  Ve = 420,
  Ha = [{ name: "offset", options: { offset: [0, 8] } }],
  Ba = ({
    userTooltip: t,
    userInitials: n,
    onLogout: a,
    popperPlacement: r = "right-end",
    sideMenuPlacement: i = "right",
    showTriggerIdentity: s = !0,
  }) => {
    var De, Re, Te;
    const { profileMenuTrigger: l, profileMenuAction: o } = Jt(),
      { activeColorScheme: h, activeColorSchemeLabel: c } = xt(),
      [u, m] = g.useState(!1),
      [y, f] = g.useState(null),
      [b, p] = g.useState(H === "main" && ut() !== null),
      [d, P] = g.useState(!1),
      [R, z] = g.useState(!1),
      [G, q] = g.useState(!1),
      T = O({ queryKey: tt.currentProfile(), queryFn: Gt, staleTime: Vt }),
      N = Xt(),
      Y = g.useRef(null),
      E = g.useRef(null),
      _ = g.useRef(null),
      [ce, de] = qa(t),
      X = ((De = T.data) == null ? void 0 : De.displayName) || ce,
      ue = X,
      we = ((Re = T.data) == null ? void 0 : Re.email) || de,
      Me = ue || n,
      ft = N === "power",
      he = y === "help",
      J = y === "theme",
      Z = () => {
        E.current !== null && (window.clearTimeout(E.current), (E.current = null));
      },
      pe = () => {
        _.current !== null && (window.clearTimeout(_.current), (_.current = null));
      },
      A = () => {
        (Z(), pe(), m(!1), f(null));
      },
      me = () => {
        (Z(), m(!0));
      },
      yt = () => {
        if (l) {
          l();
          return;
        }
        me();
      },
      B = (I) => {
        if (o) {
          o();
          return;
        }
        I();
      },
      xe = (I, Mt) => {
        if (o) {
          (I.preventDefault(), o());
          return;
        }
        Mt();
      },
      vt = (I) => {
        xe(I, A);
      },
      Ae = () => {
        (Z(),
          (E.current = window.setTimeout(() => {
            (m(!1), f(null), (E.current = null));
          }, Ve)));
      },
      U = (I) => {
        o || (pe(), f(I));
      },
      ee = () => {
        (pe(),
          (_.current = window.setTimeout(() => {
            (f(null), (_.current = null));
          }, Ve)));
      },
      bt = () => {
        (A(), p(!0));
      },
      St = () => {
        (p(!1), H === "main" && oa());
      },
      Ct = () => {
        (A(), P(!0));
      },
      jt = () => {
        P(!1);
      },
      It = () => {
        (A(), z(!0));
      },
      kt = () => {
        z(!1);
      },
      Pt = () => {
        (A(), q(!0));
      },
      wt = () => {
        q(!1);
      };
    return (
      g.useEffect(
        () => () => {
          (E.current !== null && window.clearTimeout(E.current),
            _.current !== null && window.clearTimeout(_.current));
        },
        [],
      ),
      e.jsxs(e.Fragment, {
        children: [
          e.jsxs(S, {
            ref: Y,
            component: "button",
            type: "button",
            "aria-label": "Account menu",
            "aria-controls": u ? "sidebar-profile-menu" : void 0,
            "aria-expanded": u ? !0 : void 0,
            "aria-haspopup": "dialog",
            sx: ba,
            onMouseEnter: me,
            onMouseLeave: Ae,
            onFocus: me,
            onClick: yt,
            onKeyDown: (I) => {
              I.key === "Escape" && (I.preventDefault(), A());
            },
            children: [
              e.jsx(We, { alt: Me, variant: "rounded" }),
              s && e.jsx(Ke, { name: ue, detail: we, sx: ka }),
            ],
          }),
          e.jsx($t, {
            id: "sidebar-profile-menu",
            open: u,
            anchorEl: Y.current,
            placement: r,
            modifiers: Ha,
            sx: Sa,
            onMouseEnter: Z,
            onMouseLeave: Ae,
            onKeyDown: (I) => {
              I.key === "Escape" && (I.preventDefault(), A());
            },
            children: e.jsxs(ye, {
              role: "dialog",
              "aria-label": "Account menu",
              variant: "floating",
              sx: Ca,
              children: [
                e.jsxs(S, {
                  sx: ja,
                  children: [
                    e.jsx(We, { alt: Me, variant: "rounded" }),
                    e.jsx(Ke, { name: ue, detail: we, sx: Ia }),
                  ],
                }),
                e.jsx(ne, { sx: Ne }),
                e.jsxs(S, {
                  sx: ht,
                  children: [
                    H === "admin" &&
                      e.jsx(j, {
                        component: "a",
                        href: Ot,
                        variant: "text",
                        color: "secondary",
                        fullWidth: !0,
                        startIcon: e.jsx(Kt, { fontSize: "small" }),
                        sx: w,
                        onClick: (I) => {
                          xe(I, A);
                        },
                        children: "Go to main app",
                      }),
                    e.jsx(j, {
                      type: "button",
                      variant: "text",
                      color: "secondary",
                      fullWidth: !0,
                      startIcon: e.jsx(Kn, { fontSize: "small" }),
                      sx: w,
                      onClick: () => {
                        B(bt);
                      },
                      children: "User settings",
                    }),
                    e.jsx(j, {
                      type: "button",
                      variant: "text",
                      color: "secondary",
                      fullWidth: !0,
                      startIcon: e.jsx(Qn, { fontSize: "small" }),
                      sx: w,
                      onClick: () => {
                        B(Ct);
                      },
                      children: "Personalization",
                    }),
                    e.jsxs(S, {
                      sx: $e,
                      onMouseEnter: () => {
                        U("theme");
                      },
                      onMouseLeave: ee,
                      children: [
                        e.jsxs(j, {
                          type: "button",
                          variant: "text",
                          color: "secondary",
                          fullWidth: !0,
                          "aria-controls": J ? "sidebar-profile-theme-menu" : void 0,
                          "aria-haspopup": "menu",
                          "aria-expanded": J ? !0 : void 0,
                          startIcon: e.jsx(pt, { colorScheme: h, size: 18 }),
                          endIcon: e.jsx(ze, { fontSize: "small" }),
                          sx: [w, J && qe],
                          onFocus: () => {
                            U("theme");
                          },
                          onClick: () => {
                            B(() => {
                              U("theme");
                            });
                          },
                          children: ["Theme: ", c],
                        }),
                        J &&
                          e.jsx(ye, {
                            variant: "floating",
                            sx: [Oe(i), za],
                            onMouseEnter: () => {
                              U("theme");
                            },
                            onMouseLeave: ee,
                            children: e.jsx(fn, {
                              id: "sidebar-profile-theme-menu",
                              dense: !0,
                              "aria-label": "Choose theme",
                              sx: Wa,
                              children: e.jsx(Ua, {
                                onSelect: () => {
                                  f(null);
                                },
                              }),
                            }),
                          }),
                      ],
                    }),
                    ft &&
                      e.jsx($, {
                        to: "/research-problems",
                        type: "button",
                        variant: "text",
                        color: "secondary",
                        fullWidth: !0,
                        startIcon: e.jsx(pn, {}),
                        sx: w,
                        onClick: (I) => {
                          xe(I, A);
                        },
                        children: "Research problems",
                      }),
                    H === "main" &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(j, {
                            type: "button",
                            variant: "text",
                            color: "secondary",
                            fullWidth: !0,
                            startIcon: e.jsx(nt, { fontSize: "small" }),
                            sx: w,
                            onClick: () => {
                              B(Pt);
                            },
                            children: "Manage shared chats",
                          }),
                          e.jsx(j, {
                            type: "button",
                            variant: "text",
                            color: "secondary",
                            fullWidth: !0,
                            startIcon: e.jsx(lt, { fontSize: "small" }),
                            sx: w,
                            onClick: () => {
                              B(It);
                            },
                            children: "Show archived chats",
                          }),
                        ],
                      }),
                    e.jsxs(S, {
                      sx: $e,
                      onMouseEnter: () => {
                        U("help");
                      },
                      onMouseLeave: ee,
                      children: [
                        e.jsx(j, {
                          type: "button",
                          variant: "text",
                          color: "secondary",
                          fullWidth: !0,
                          "aria-haspopup": "dialog",
                          "aria-expanded": he ? !0 : void 0,
                          startIcon: e.jsx(On, { fontSize: "small" }),
                          endIcon: e.jsx(ze, { fontSize: "small" }),
                          sx: [w, he && qe],
                          onFocus: () => {
                            U("help");
                          },
                          onClick: () => {
                            U("help");
                          },
                          children: "Help",
                        }),
                        he &&
                          e.jsx(ye, {
                            role: "dialog",
                            "aria-label": "Help links",
                            variant: "floating",
                            sx: Oe(i),
                            onMouseEnter: () => {
                              U("help");
                            },
                            onMouseLeave: ee,
                            children: e.jsx(Ma, { onNavigate: vt }),
                          }),
                      ],
                    }),
                    e.jsx(ne, { sx: Ne }),
                    e.jsx(j, {
                      type: "button",
                      variant: "text",
                      color: "error",
                      fullWidth: !0,
                      startIcon: e.jsx(Zt, { fontSize: "small" }),
                      sx: [w, Pa],
                      onClick: () => {
                        B(() => {
                          (A(), a());
                        });
                      },
                      children: "Logout",
                    }),
                  ],
                }),
              ],
            }),
          }),
          b && e.jsx(Ta, { displayName: X, isProfileLoading: T.isPending, onClose: St }),
          H === "main" &&
            e.jsxs(e.Fragment, {
              children: [e.jsx(ia, { open: G, onClose: wt }), e.jsx(ea, { open: R, onClose: kt })],
            }),
          d &&
            e.jsx(g.Suspense, {
              fallback: null,
              children: e.jsx(Fa, {
                open: d,
                personalization: ((Te = T.data) == null ? void 0 : Te.personalization) ?? "",
                isProfileLoading: T.isPending,
                onClose: jt,
              }),
            }),
        ],
      })
    );
  },
  qa = (t) => {
    const [n, ...a] = t
      .split(
        `
`,
      )
      .map((r) => r.trim())
      .filter(Boolean);
    return [n || "Math User", a.join(" ")];
  },
  Ge = 296,
  gt = 260,
  Na = 544,
  $a = 0.4,
  Oa = "ai-math.chat-sidebar-width.v1",
  Ka = (t) => `${t}px`,
  Qa = (t) => ({
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    width: "0.65rem",
    height: "100%",
    padding: 0,
    border: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    cursor: "col-resize",
    touchAction: "none",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0.8rem",
      right: "0.2rem",
      bottom: "0.8rem",
      width: "2px",
      borderRadius: "999px",
      backgroundColor: M(t.palette.text.primary, 0.08),
      transition: t.transitions.create(["background-color", "width"], {
        duration: t.transitions.duration.shortest,
      }),
    },
    "&:hover::after, &:focus-visible::after, &[data-resizing='true']::after": {
      width: "3px",
      backgroundColor: M(t.palette.primary.main, 0.46),
    },
    "&:focus-visible": {
      outline: `2px solid ${M(t.palette.primary.main, 0.22)}`,
      outlineOffset: "-2px",
    },
    [t.breakpoints.down("md")]: { display: "none" },
  }),
  Va = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.5rem",
    minWidth: 0,
    marginTop: 0,
    padding: "0.55rem 0.35rem 0 0.15rem",
    borderTop: "1px solid",
    borderColor: "divider",
  },
  Ga = ({ userTooltip: t, userInitials: n, onLogout: a, tourTarget: r }) =>
    e.jsx(S, {
      "data-thread-tour-target": r,
      sx: Va,
      children: e.jsx(Ba, {
        userTooltip: t,
        userInitials: n,
        onLogout: a,
        popperPlacement: "top-start",
        sideMenuPlacement: "right",
      }),
    }),
  Ye = () => Math.max(gt, Math.min(Na, Math.floor(window.innerWidth * $a))),
  Ya = (t) => (n) => {
    const a = Ka(t);
    return {
      boxSizing: "border-box",
      width: a,
      maxWidth: a,
      flex: `0 0 ${a}`,
      minHeight: 0,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "--workspace-side-panel-scrollbar-offset": "0.7rem",
      padding: "0.75rem 0.7rem 0.55rem 0.55rem",
      overflow: "hidden",
      background: `linear-gradient(180deg, ${M(n.palette.background.paper, 0.94)} 0%, ${M(n.palette.background.paper, 0.97)} 100%)`,
      "&, & *, & *::before, & *::after": { boxSizing: "border-box" },
      [n.breakpoints.down("md")]: {
        width: "100%",
        maxWidth: "none",
        flexBasis: "auto",
        maxHeight: "min(42dvh, 22rem)",
        borderBottom: `1px solid ${M(n.palette.text.primary, 0.08)}`,
        borderRight: 0,
      },
      [n.breakpoints.down(720)]: {
        "--workspace-side-panel-scrollbar-offset": "0.55rem",
        paddingLeft: "0.55rem",
        paddingRight: "0.55rem",
      },
    };
  },
  Xa = {
    flex: "0 0 auto",
    minWidth: 0,
    display: "flex",
    gap: "0.5rem",
    padding: "0 0.35rem 0.85rem 0.15rem",
    borderBottom: "1px solid",
    borderColor: "divider",
    "@media (max-width:720px)": { gap: "0.45rem" },
    "& > *": { minWidth: 0, flex: "1" },
    "button, a": { padding: "0.25rem", minWidth: 0, flex: "1" },
  },
  Ja = { flex: 1, minHeight: 0, minWidth: 0, display: "flex", flexDirection: "column" },
  Sr = ({ children: t, tourTarget: n, layout: a = "equal-actions" }) =>
    e.jsx(S, {
      "data-workspace-side-panel-header": "true",
      "data-layout": a,
      "data-thread-tour-target": n,
      sx: [
        Xa,
        a === "title-actions" && {
          "& > *": { flex: "0 0 auto" },
          '& > [data-side-panel-header-title="true"]': { flex: "1 1 auto" },
        },
        a === "icon-actions" && {
          gap: "0.2rem",
          alignItems: "center",
          padding: "0 0.15rem 0.55rem",
          "& > *": { flex: "1 1 0" },
          "button, a": { flex: "1 1 0", minHeight: "2.35rem" },
        },
      ],
      children: t,
    }),
  Cr = ({
    header: t,
    children: n,
    ariaLabel: a,
    tourTarget: r,
    resizeHandleAriaLabel: i,
    userTooltip: s,
    userInitials: l,
    onLogout: o,
    footerTourTarget: h,
  }) => {
    const [c, u] = g.useState(() => (typeof window > "u" ? Ge : Ye()));
    g.useEffect(() => {
      const f = () => u(Ye());
      return (window.addEventListener("resize", f), () => window.removeEventListener("resize", f));
    }, []);
    const { width: m, resizeHandleProps: y } = Yt({
      storageKey: Oa,
      defaultWidth: Ge,
      minWidth: gt,
      maxWidth: c,
      resizeEdge: "right",
      storedValueErrorMessage: "Stored sidebar width must be a finite number.",
      readErrorMessage: "Ignoring unreadable sidebar width.",
      writeErrorMessage: "Could not save sidebar width.",
    });
    return e.jsxs(S, {
      component: "aside",
      "aria-label": a,
      "data-thread-tour-target": r,
      sx: Ya(m),
      children: [
        t,
        e.jsx(S, { sx: Ja, children: n }),
        e.jsx(Ga, { userTooltip: s, userInitials: l, onLogout: o, tourTarget: h }),
        e.jsx(S, { "aria-label": i, ...y, sx: Qa }),
      ],
    });
  };
export {
  pt as A,
  We as M,
  Da as S,
  ot as U,
  Cr as W,
  Ba as a,
  Sr as b,
  za as c,
  Wa as d,
  Ua as e,
  zn as f,
  yr as g,
  br as h,
  Fn as i,
  vr as j,
  Un as k,
  qn as l,
  Bn as p,
  xt as u,
};
