const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = (m.f ||= [
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
  S as _Component7,
  T as _Component5,
  B as S,
  M as $,
  _ as _Component8,
  g as M,
  C as _Component9,
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
  e as _Component29,
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
import { P as _Component15, L as _e } from "./LinkOffRounded-CKGtm4_4.js";
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
import {
  g as oe,
  n as at,
  b as K,
  a as Q,
  c as dn,
} from "./chatQueryCache-DOdNJrP_.js";
import {
  C as _Component4,
  O as _Component12,
  S as _Component13,
  F as _Component30,
} from "./OpenInNewRounded-D-7V5TzF.js";
import { D as _Component6 } from "./attachmentsApi-BHgxfYft.js";
import {
  D as _Component11,
  a as Ie,
  b as _Component10,
  c as Pe,
  M as Le,
  C as _Component26,
} from "./MChip-DiH8NXBU.js";
import { F as _Component14 } from "./FormControlLabel-CQvCddOM.js";
import { T as _Component19, h as _Component28 } from "./TextField-D8vc_sXz.js";
import { D as _Component20 } from "./Divider-BcuihGce.js";
import { S as yn } from "./useResizablePanelValue-D_NwbF9E.js";
import { L as _Component24 } from "./ListItemIcon-CaLBil7Q.js";
import { L as _Component25 } from "./ListItemText-CBxudZz_.js";
const Sn = k(
  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
);
function Cn(t) {
  return At("MuiAvatar", t);
}
Dt("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const jn = (t) => {
  const { classes: n, variant: a, colorDefault: r } = t;
  return Et(
    {
      root: ["root", a, r && "colorDefault"],
      img: ["img"],
      fallback: ["fallback"],
    },
    Cn,
    n,
  );
};
const In = Se("div", {
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
        props: {
          variant: "rounded",
        },
        style: {
          borderRadius: (t.vars || t).shape.borderRadius,
        },
      },
      {
        props: {
          variant: "square",
        },
        style: {
          borderRadius: 0,
        },
      },
      {
        props: {
          colorDefault: true,
        },
        style: {
          color: (t.vars || t).palette.background.default,
          ...(t.vars
            ? {
                backgroundColor: t.vars.palette.Avatar.defaultBg,
              }
            : {
                backgroundColor: t.palette.grey[400],
                ...t.applyStyles("dark", {
                  backgroundColor: t.palette.grey[600],
                }),
              }),
        },
      },
    ],
  })),
);
const kn = Se("img", {
  name: "MuiAvatar",
  slot: "Img",
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  objectFit: "cover",
  color: "transparent",
  textIndent: 10000,
});
const Pn = Se(Sn, {
  name: "MuiAvatar",
  slot: "Fallback",
})({
  width: "75%",
  height: "75%",
});
function wn(t, n, a, r) {
  const [i, s] = g.useState(false);
  g.useEffect(() => {
    if (!t && !n) {
      return;
    }
    s(false);
    let l = true;
    const o = new Image();
    o.onload = () => {
      if (l) {
        s("loaded");
      }
    };
    o.onerror = () => {
      if (l) {
        s("error");
      }
    };
    o.crossOrigin = a;
    o.referrerPolicy = r;
    o.src = t;
    if (n) {
      o.srcset = n;
    }
    return () => {
      l = false;
    };
  }, [a, r, t, n]);
  return i;
}
const Mn = g.forwardRef(function (n, a) {
  const r = Rt({
    props: n,
    name: "MuiAvatar",
  });
  const {
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
  const d = {
    ...r,
    component: o,
    variant: f,
  };
  const { crossOrigin: P, referrerPolicy: R } =
    (typeof c.img == "function" ? c.img(d) : c.img) ?? {};
  const z = wn(m, y, P, R);
  const G = m || y;
  const q = G && z !== "error";
  d.colorDefault = !q;
  delete d.ownerState;
  const T = jn(d);
  const N = {
    slots: h,
    slotProps: c,
  };
  const [Y, E] = ge("root", {
    ref: a,
    className: Tt(T.root, l),
    elementType: In,
    externalForwardedProps: {
      ...N,
      component: o,
      ...b,
    },
    ownerState: d,
  });
  const [_, ce] = ge("img", {
    className: T.img,
    elementType: kn,
    externalForwardedProps: N,
    additionalProps: {
      alt: i,
      src: m,
      srcSet: y,
      sizes: u,
    },
    ownerState: d,
  });
  const [_Component, X] = ge("fallback", {
    className: T.fallback,
    elementType: Pn,
    externalForwardedProps: N,
    shouldForwardComponentProp: true,
    ownerState: d,
  });
  if (q) {
    p = <_ {...ce} />;
  } else if (s || s === 0) {
    p = s;
  } else if (G && i) {
    p = i[0];
  } else {
    p = <_Component {...X} />;
  }
  return <Y {...E}>{p}</Y>;
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7",
    },
  ],
  [
    "path",
    {
      d: "M3 9h18",
      key: "1pudct",
    },
  ],
  [
    "path",
    {
      d: "M3 15h18",
      key: "5xshup",
    },
  ],
  [
    "path",
    {
      d: "M9 3v18",
      key: "fh3hqa",
    },
  ],
  [
    "path",
    {
      d: "M15 3v18",
      key: "14nvp0",
    },
  ],
];
const Dn = re("grid-3x3", An);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  [
    "path",
    {
      d: "M18 5h4",
      key: "1lhgn2",
    },
  ],
  [
    "path",
    {
      d: "M20 3v4",
      key: "1olli1",
    },
  ],
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm",
    },
  ],
];
const Tn = re("moon-star", Rn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr",
    },
  ],
  [
    "path",
    {
      d: "M20 2v4",
      key: "1rf3ol",
    },
  ],
  [
    "path",
    {
      d: "M22 4h-4",
      key: "gwowj6",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y",
    },
  ],
];
const _n = re("sparkles", En);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2",
    },
  ],
  [
    "path",
    {
      d: "M12 2v2",
      key: "tus03m",
    },
  ],
  [
    "path",
    {
      d: "M12 20v2",
      key: "1lh1kg",
    },
  ],
  [
    "path",
    {
      d: "m4.93 4.93 1.41 1.41",
      key: "149t6j",
    },
  ],
  [
    "path",
    {
      d: "m17.66 17.66 1.41 1.41",
      key: "ptbguv",
    },
  ],
  [
    "path",
    {
      d: "M2 12h2",
      key: "1t8f8n",
    },
  ],
  [
    "path",
    {
      d: "M20 12h2",
      key: "1q8mjw",
    },
  ],
  [
    "path",
    {
      d: "m6.34 17.66-1.41 1.41",
      key: "1m8zz5",
    },
  ],
  [
    "path",
    {
      d: "m19.07 4.93-1.41 1.41",
      key: "1shlcs",
    },
  ],
];
const Wn = re("sun", Ln);
const V = (t, n = []) =>
  Promise.all([
    dn(t),
    t.cancelQueries({
      queryKey: C.chats(),
      exact: true,
    }),
    t.cancelQueries({
      queryKey: C.archivedChats(),
      exact: true,
    }),
    t.cancelQueries({
      queryKey: C.sharedChats(),
      exact: true,
    }),
    ...n.flatMap((a) => [
      t.cancelQueries({
        queryKey: C.chat(a),
        exact: true,
      }),
      t.cancelQueries({
        queryKey: C.chatRunState(a),
        exact: true,
      }),
    ]),
  ]);
const zn = () => {
  const t = F();
  return W({
    mutationFn: ({ chatId: n, input: a }) => en(n, a),
    onSuccess: async (n, a) => {
      await V(t, [a.chatId]);
      const r = oe(t, a.chatId);
      const i = (r != null && !!r.branchSpaceId) || !!n.branchSpaceId;
      Ce(t, n);
      t.invalidateQueries({
        queryKey: C.bookmarkRoot(),
      });
      at(n, [r == null ? undefined : r.branchSpaceId]);
      if (i) {
        await K(t);
      } else {
        await Q(t);
      }
    },
  });
};
const yr = (t = {}) => {
  const n = F();
  return W({
    mutationFn: ({ chatId: a, folderId: r }) => an(a, r),
    onSuccess: async (a, r) => {
      var s;
      await V(n, [r.chatId]);
      const i = oe(n, r.chatId);
      Ce(n, a);
      Wt(n, a.id);
      if (i != null && i.branchSpaceId) {
        Je(n, i.branchSpaceId);
      }
      n.invalidateQueries({
        queryKey: C.bookmarkRoot(),
      });
      at(a, [i == null ? undefined : i.branchSpaceId]);
      await ((s = t.onMoveSucceeded) == null
        ? undefined
        : s.call(t, r.chatId, r.folderId));
      if (i != null && i.branchSpaceId) {
        await K(n);
      } else {
        await Q(n);
      }
    },
  });
};
const Un = (t = {}) => {
  const n = F();
  return W({
    mutationFn: ({
      chatId: a,
      expectedDeleteChatIds: r,
      expectedScopeToken: i,
    }) =>
      nn(a, {
        expectedDeleteChatIds: r,
        expectedScopeToken: i,
      }),
    onSuccess: async (a, r) => {
      var c;
      var u;
      const { chatId: i } = r;
      const s = [...new Set([i, ...(r.affectedChatIds ?? [])])];
      const l = oe(n, i);
      const o = l === null || !!l.branchSpaceId;
      const h = r.dissolvedBranchSpaceId ?? null;
      if (h && l && h !== l.branchSpaceId) {
        throw new Error(
          `Deleted chat '${i}' belongs to hierarchy '${l.branchSpaceId ?? "none"}', not dissolving hierarchy '${h}'.`,
        );
      }
      await V(n, s);
      await ((c = t.onDeleteSucceededBeforeCacheUpdate) == null
        ? undefined
        : c.call(t, i));
      Xe(n, s);
      if (h) {
        Lt(n, h);
      }
      n.invalidateQueries({
        queryKey: C.archivedChats(),
      });
      n.invalidateQueries({
        queryKey: C.bookmarkRoot(),
      });
      if (o) {
        await K(n, {
          excludeBranchSpaceIds: h ? [h] : [],
        });
      } else {
        await Q(n);
      }
      se({
        branchSpaceIds: h ? [] : [l == null ? undefined : l.branchSpaceId],
        removedBranchSpaceIds: h ? [h] : [],
        removedChatIds: s,
      });
      await ((u = t.onDeleteSucceeded) == null ? undefined : u.call(t, i));
    },
  });
};
const vr = (t = {}) => {
  const n = F();
  return W({
    mutationFn: ({ chatId: a }) => rn(a),
    onSuccess: async (a, r) => {
      var h;
      const { chatId: i } = r;
      const s = oe(n, i);
      const l = s === null || !!s.branchSpaceId || !!a.branchSpaceId;
      const o = [...new Set([i, ...r.affectedChatIds])];
      await V(n, o);
      await ((h = t.onArchiveSucceeded) == null ? undefined : h.call(t, i));
      Xe(n, o);
      if (s != null && s.branchSpaceId) {
        Je(n, s.branchSpaceId);
      }
      n.invalidateQueries({
        queryKey: C.archivedChats(),
      });
      n.invalidateQueries({
        queryKey: C.bookmarkRoot(),
      });
      if (l) {
        await K(n);
      } else {
        await Q(n);
      }
      se({
        removedChatIds: o,
        branchSpaceIds: [
          s == null ? undefined : s.branchSpaceId,
          a.branchSpaceId,
        ],
      });
    },
  });
};
const Fn = () => {
  const t = F();
  return W({
    mutationFn: ({ chatId: n, expectedScopeToken: a }) => tn(n, a),
    onSuccess: async (n, a) => {
      const r = new Set([n.id, ...a.affectedChatIds]);
      await V(t, [...r]);
      Ce(t, n);
      t.setQueryData(C.archivedChats(), (i) =>
        i == null ? undefined : i.filter((s) => !r.has(s.id)),
      );
      for (const i of r) {
        if (i !== n.id) {
          t.invalidateQueries({
            queryKey: C.chat(i),
            exact: true,
          });
        }
      }
      t.invalidateQueries({
        queryKey: C.archivedChats(),
      });
      t.invalidateQueries({
        queryKey: C.bookmarkRoot(),
      });
      if (n.branchSpaceId) {
        await K(t);
      } else {
        await Q(t);
      }
      se({
        chatIds: [...r],
        branchSpaceId: n.branchSpaceId,
      });
    },
  });
};
const _Component2 = k(
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1" />,
);
const _Component3 = k(
  <path d="m20.55 5.22-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28m-8.2 4.63L17.5 15H14v2h-4v-2H6.5l5.15-5.15c.19-.19.51-.19.7 0M5.12 5l.82-1h12l.93 1z" />,
);
const Hn = /^[0-9a-f]{64}$/;
const Bn = (t, n, a) => {
  if (a.selectedChatId !== n) {
    throw new Error(
      "The archived chat action scope does not match the selected chat.",
    );
  }
  if (!Hn.test(a.scopeToken)) {
    throw new Error("The archived chat action scope token is invalid.");
  }
  const r = t === "unarchive" ? a.restoreChatIds : a.deleteChatIds;
  if (r.length === 0 || !r.includes(n) || new Set(r).size !== r.length) {
    throw new Error("The archived chat action scope is invalid.");
  }
  let i = r.length;
  let s = 0;
  if (t === "delete") {
    const l = new Set(a.archivedDeleteChatIds);
    const o = new Set(a.activeDeleteChatIds);
    const h = new Set(a.deleteChatIds);
    if (
      l.size !== a.archivedDeleteChatIds.length ||
      o.size !== a.activeDeleteChatIds.length ||
      !l.has(n) ||
      a.activeDeleteChatIds.some((u) => l.has(u)) ||
      l.size + o.size !== h.size ||
      a.deleteChatIds.some((u) => !l.has(u) && !o.has(u))
    ) {
      throw new Error("The archived delete scope partition is invalid.");
    }
    i = l.size;
    s = o.size;
  }
  return {
    action: t,
    chatId: n,
    affectedChatIds: r,
    activeChatCount: s,
    archivedChatCount: i,
    scopeToken: a.scopeToken,
  };
};
const br = (t, n) => {
  if (t.length !== n.length) {
    return false;
  }
  const a = new Set(t);
  return a.size === t.length && n.every((r) => a.has(r));
};
const te = (t, n) => `${t} ${n} ${t === 1 ? "chat" : "chats"}`;
const qn = () => {
  const t = F();
  const [n, a] = g.useState(null);
  const [r, i] = g.useState(null);
  const s = Fn();
  const l = Un();
  const o = s.isPending || l.isPending;
  const h = n !== null || o;
  const c = g.useCallback(
    async (b, p) => {
      if (!n && !r && !o) {
        a({
          action: b,
          chatId: p,
        });
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
  );
  const u = g.useCallback(() => {
    if (!o) {
      i(null);
    }
  }, [o]);
  const m = g.useCallback(async () => {
    if (!r || o) {
      return;
    }
    const { action: b, chatId: p, affectedChatIds: d, scopeToken: P } = r;
    try {
      if (b === "unarchive") {
        await s.mutateAsync({
          chatId: p,
          affectedChatIds: d,
          expectedScopeToken: P,
        });
      } else {
        await l.mutateAsync({
          chatId: p,
          affectedChatIds: d,
          expectedScopeToken: P,
        });
      }
      i(null);
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
      );
    } catch (R) {
      if (zt(R)) {
        i(null);
        t.invalidateQueries({
          queryKey: C.archivedChats(),
        });
        t.invalidateQueries({
          queryKey: C.chats(),
        });
        for (const z of d) {
          t.invalidateQueries({
            queryKey: C.chat(z),
            exact: true,
          });
        }
        D.error(L(R));
        return;
      }
      D.error(L(R));
    }
  }, [r, l, o, t, s]);
  const y = g.useCallback(() => {
    a(null);
    i(null);
  }, []);
  const f = g.useMemo(() => {
    if (!r) {
      return null;
    }
    const b = r.affectedChatIds.length;
    const p = b - 1;
    const d = r.action === "delete";
    const P = d && r.activeChatCount > 0;
    const R = d
      ? P
        ? `Permanently delete ${b} chats?`
        : b === 1
          ? "Permanently delete this archived chat?"
          : `Permanently delete ${b} archived chats?`
      : b === 1
        ? "Unarchive this chat?"
        : `Unarchive ${b} connected chats?`;
    const z = d
      ? P
        ? `This will permanently delete ${te(r.archivedChatCount, "archived")} and ${te(r.activeChatCount, "active")} from the same hierarchy, including all of their messages. This cannot be undone.`
        : b === 1
          ? "This will permanently delete this chat and all of its messages. This cannot be undone."
          : `This will permanently delete this chat and ${p} other related archived ${p === 1 ? "chat" : "chats"}, including all of their messages. This cannot be undone.`
      : b === 1
        ? "This will return this chat to your chat explorer."
        : `This will return this chat and ${p} other connected archived ${p === 1 ? "chat" : "chats"} to your chat explorer.`;
    return (
      <_Component4
        open={true}
        title={R}
        message={z}
        cancelLabel="Cancel"
        confirmLabel={d ? "Permanently delete" : "Unarchive"}
        pendingConfirmLabel={d ? "Deleting..." : "Unarchiving..."}
        onClose={u}
        onConfirm={m}
        isPending={o}
        confirmColor={d ? "error" : "primary"}
        confirmStartIcon={
          d ? (
            <_Component2 fontSize="small" />
          ) : (
            <_Component3 fontSize="small" />
          )
        }
      />
    );
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
};
const We = (t) => <Mn {...$n(t.alt)} {...t} />;
function Nn(t) {
  if (!t) {
    return Ut.black;
  }
  let n = 0;
  let a;
  for (a = 0; a < t.length; a += 1) {
    n = t.charCodeAt(a) + ((n << 5) - n);
  }
  let r = "#";
  for (a = 0; a < 3; a += 1) {
    const i = (n >> (a * 8)) & 255;
    r += `00${i.toString(16)}`.slice(-2);
  }
  return r;
}
function $n(t) {
  var r;
  var i;
  var s;
  var l;
  if (!t) {
    return {};
  }
  const n =
    ((i = (r = t.split(" ")) == null ? undefined : r[0]) == null
      ? undefined
      : i[0]) || "";
  const a =
    ((l = (s = t.split(" ")) == null ? undefined : s[1]) == null
      ? undefined
      : l[0]) || "";
  return {
    sx: {
      bgcolor: Nn(t),
    },
    children: `${n}${a}`,
  };
}
const _Component0 = k(
  <path d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27m-8.89 11.92L6.5 12H10v-2h4v2h3.5l-5.15 5.15c-.19.19-.51.19-.7 0M5.12 5l.81-1h12l.94 1z" />,
);
const _Component27 = k(
  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01" />,
);
const On = k(
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47" />,
);
const Kn = k([
  <path
    d="M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V19c0 .55.45 1 1 1h8.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98"
    key="0"
  />,
  <circle cx="10" cy="8" r="4" key="1" />,
  <path
    d="M20.75 16c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02c-.12-.21-.37-.3-.59-.22l-1.06.36q-.48-.405-1.08-.63l-.22-1.09c-.05-.23-.25-.4-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09q-.6.225-1.08.63l-1.06-.36c-.23-.08-.47.02-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36q.48.405 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09q.6-.225 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
    key="2"
  />,
]);
const Qn = k(
  <path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1M3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1m10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1M7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1m14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1m-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1" />,
);
const Vn = k(
  <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />,
);
const Gn = (t) => ({
  p: 1,
  borderRadius: t.shape.borderRadiusPx,
  border: `1px solid ${M(t.palette.text.primary, 0.08)}`,
  backgroundColor: M(t.palette.background.paper, 0.58),
});
const Yn = {
  minWidth: 0,
};
const Xn = {
  display: "flex",
  flexWrap: "wrap",
  gap: 0.6,
};
const _Component1 = g.memo(
  ({
    chat: t,
    isActionDisabled: n,
    pendingAction: a,
    executingAction: r,
    onPreview: i,
    onRequestAction: s,
  }) => {
    const l = t.title ?? Ze;
    const o = a === "unarchive";
    const h = a === "delete";
    const c = r === "unarchive";
    const u = r === "delete";
    return (
      <_Component7 spacing={0.85} sx={Gn}>
        <_Component7 spacing={0.35} sx={Yn}>
          <_Component5 variant="subtitle2" color="textPrimary" noWrap={true}>
            {l}
          </_Component5>
          <_Component5 variant="body2" color="textSecondary" noWrap={true}>
            {t.preview}
          </_Component5>
          {t.archivedAt && (
            <_Component5 variant="caption" color="textSecondary">
              Archived <_Component6 value={t.archivedAt} />
            </_Component5>
          )}
        </_Component7>
        <S sx={Xn}>
          <$
            to="/chats/$chatId"
            params={{
              chatId: t.id,
            }}
            type="button"
            size="small"
            color="secondary"
            disabled={n}
            startIcon={<Vn fontSize="small" />}
            onClick={i}
          >
            Preview
          </$>
          <_Component8
            type="button"
            size="small"
            color="secondary"
            disabled={n}
            startIcon={<_Component3 fontSize="small" />}
            onClick={() => s("unarchive", t.id)}
          >
            {o && "Checking..."}
            {c && "Unarchiving..."}
            {!o && !c && "Unarchive"}
          </_Component8>
          <_Component8
            type="button"
            size="small"
            color="error"
            disabled={n}
            startIcon={<_Component2 fontSize="small" />}
            onClick={() => s("delete", t.id)}
          >
            {h && "Checking..."}
            {u && "Deleting..."}
            {!h && !u && "Delete"}
          </_Component8>
        </S>
      </_Component7>
    );
  },
);
_Component1.displayName = "ArchivedChatRow";
const Jn = {
  minHeight: "28rem",
};
const Zn = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};
const Ue = {
  alignItems: "center",
};
const ve = {
  minHeight: "18rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const _Component32 = ({ open: t, onClose: n }) => {
  const a = O({
    queryKey: C.archivedChats(),
    queryFn: ({ signal: p }) => on(p),
    enabled: t,
  });
  const {
    confirmation: r,
    confirmationDialog: i,
    deleteChatMutation: s,
    isPending: l,
    pendingRequest: o,
    requestAction: h,
    reset: c,
    restoreChatMutation: u,
  } = qn();
  const m = a.data ?? [];
  const y = l || r !== null;
  const f = g.useCallback(() => {
    c();
    n();
  }, [n, c]);
  const b = g.useCallback(
    (p, d) => {
      h(p, d);
    },
    [h],
  );
  return (
    <e.Fragment>
      <_Component11
        open={t}
        onClose={y ? undefined : f}
        aria-labelledby="archived-chats-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <Ie id="archived-chats-title">Archived chats</Ie>
        <_Component10 dividers={true} sx={Jn}>
          <S sx={Zn}>
            {a.isPending && (
              <S sx={ve}>
                <_Component7 spacing={1.3} sx={Ue}>
                  <_Component9 size={24} />
                  <_Component5 variant="body2" color="textSecondary">
                    Loading archived chats...
                  </_Component5>
                </_Component7>
              </S>
            )}
            {a.isError && (
              <S sx={ve}>
                <_Component5 variant="body2" color="error">
                  {L(a.error)}
                </_Component5>
              </S>
            )}
            {a.isSuccess && m.length === 0 && (
              <S sx={ve}>
                <_Component7 spacing={1.1} sx={Ue}>
                  <_Component0 color="disabled" />
                  <_Component5 variant="body2" color="textSecondary">
                    No archived chats.
                  </_Component5>
                </_Component7>
              </S>
            )}
            {a.isSuccess &&
              m.length > 0 &&
              m.map((p) => {
                var d;
                var P;
                return (
                  <_Component1
                    chat={p}
                    isActionDisabled={y}
                    pendingAction={
                      (o == null ? undefined : o.chatId) === p.id
                        ? o.action
                        : null
                    }
                    executingAction={
                      u.isPending &&
                      ((d = u.variables) == null ? undefined : d.chatId) ===
                        p.id
                        ? "unarchive"
                        : s.isPending &&
                            ((P = s.variables) == null
                              ? undefined
                              : P.chatId) === p.id
                          ? "delete"
                          : null
                    }
                    onPreview={f}
                    onRequestAction={b}
                    key={p.id}
                  />
                );
              })}
          </S>
        </_Component10>
        <Pe>
          <_Component8 type="button" color="secondary" disabled={y} onClick={f}>
            Close
          </_Component8>
        </Pe>
      </_Component11>
      {i}
    </e.Fragment>
  );
};
const ta = (t) => ({
  p: 1,
  borderRadius: t.shape.borderRadiusPx,
  border: `1px solid ${M(t.palette.text.primary, 0.08)}`,
  backgroundColor: M(t.palette.background.paper, 0.58),
});
const na = {
  minWidth: 0,
};
const aa = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 0.75,
};
const _Component16 = g.memo(
  ({ chat: t, isActionDisabled: n, isUnsharing: a, onUnshare: r }) => {
    const i = t.title ?? Ze;
    return (
      <_Component7 spacing={0.85} sx={ta}>
        <_Component7 spacing={0.35} sx={na}>
          <_Component5 variant="subtitle2" color="textPrimary" noWrap={true}>
            {i}
          </_Component5>
          <_Component5 variant="body2" color="textSecondary" noWrap={true}>
            {t.preview}
          </_Component5>
          <_Component5 variant="caption" color="textSecondary">
            Updated <_Component6 value={t.lastUpdated} />
          </_Component5>
        </_Component7>
        <S sx={aa}>
          <$
            to="/share/$chatId"
            params={{
              chatId: t.id,
            }}
            type="button"
            size="small"
            color="secondary"
            target="_blank"
            rel="noopener noreferrer"
            disabled={n}
            startIcon={<_Component12 fontSize="small" />}
          >
            Open shared link
          </$>
          <_Component14
            label={a ? "Unsharing..." : "Shared"}
            control={
              <_Component13
                checked={true}
                size="small"
                disabled={n}
                slotProps={{
                  input: {
                    "aria-label": `Unshare ${i}`,
                  },
                }}
                onChange={(s, l) => {
                  if (!l) {
                    r(t);
                  }
                }}
              />
            }
          />
        </S>
      </_Component7>
    );
  },
);
_Component16.displayName = "SharedChatRow";
const ra = {
  minHeight: "28rem",
};
const sa = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};
const Fe = {
  alignItems: "center",
};
const be = {
  minHeight: "18rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const _Component31 = ({ open: t, onClose: n }) => {
  const a = F();
  const [r, i] = g.useState(false);
  const s = O({
    queryKey: C.sharedChats(),
    queryFn: ({ signal: d }) => cn(d),
    enabled: t,
  });
  const { isPending: l, mutate: o, variables: h } = zn();
  const { isPending: c, mutate: u } = W({
    mutationFn: ln,
    onSuccess: () => {
      Ft(a);
    },
  });
  const m = g.useMemo(() => s.data ?? [], [s.data]);
  const y = l || c;
  const f = g.useCallback(() => {
    if (!y) {
      i(false);
      n();
    }
  }, [y, n]);
  const b = g.useCallback(
    (d) => {
      o(
        {
          chatId: d.id,
          input: {
            isPublic: false,
          },
        },
        {
          onSuccess: () => D.success("Chat unshared."),
        },
      );
    },
    [o],
  );
  const p = g.useCallback(() => {
    u(undefined, {
      onSuccess: () => {
        i(false);
        se({
          chatIds: m.map((d) => d.id),
        });
        D.success("All chats unshared.");
      },
    });
  }, [m, u]);
  return (
    <e.Fragment>
      <_Component11
        open={t}
        onClose={y ? undefined : f}
        aria-labelledby="shared-chats-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <Ie id="shared-chats-title">Shared chats</Ie>
        <_Component10 dividers={true} sx={ra}>
          <S sx={sa}>
            {s.isPending && (
              <S sx={be}>
                <_Component7 spacing={1.3} sx={Fe}>
                  <_Component9 size={24} />
                  <_Component5 variant="body2" color="textSecondary">
                    Loading shared chats...
                  </_Component5>
                </_Component7>
              </S>
            )}
            {s.isError && (
              <S sx={be}>
                <_Component5 variant="body2" color="error">
                  {L(s.error)}
                </_Component5>
              </S>
            )}
            {s.isSuccess && m.length === 0 && (
              <S sx={be}>
                <_Component7 spacing={1.1} sx={Fe}>
                  <_Component15 color="disabled" />
                  <_Component5 variant="body2" color="textSecondary">
                    No shared chats.
                  </_Component5>
                </_Component7>
              </S>
            )}
            {s.isSuccess &&
              m.map((d) => (
                <_Component16
                  chat={d}
                  isActionDisabled={y}
                  isUnsharing={l && (h == null ? undefined : h.chatId) === d.id}
                  onUnshare={b}
                  key={d.id}
                />
              ))}
          </S>
        </_Component10>
        <Pe>
          {m.length > 0 && (
            <_Component8
              type="button"
              color="error"
              disabled={y}
              startIcon={<_e fontSize="small" />}
              onClick={() => i(true)}
            >
              Unshare all
            </_Component8>
          )}
          <_Component8 type="button" color="secondary" disabled={y} onClick={f}>
            Close
          </_Component8>
        </Pe>
      </_Component11>
      <_Component4
        open={r}
        title="Unshare all chats?"
        message="Every shared chat link will stop working. You can share individual chats again later."
        confirmLabel="Unshare all"
        pendingConfirmLabel="Unsharing..."
        confirmColor="error"
        confirmStartIcon={<_e fontSize="small" />}
        isPending={c}
        onClose={() => i(false)}
        onConfirm={p}
      />
    </e.Fragment>
  );
};
const ut = () => {
  const t = new URLSearchParams(window.location.search).get("billing");
  if (t === "success" || t === "cancelled" || t === "portal-return") {
    return t;
  } else {
    return null;
  }
};
const oa = () => {
  const t = new URL(window.location.href);
  t.searchParams.delete("billing");
  window.history.replaceState(
    window.history.state,
    "",
    `${t.pathname}${t.search}${t.hash}`,
  );
};
const le = Ht;
const la = (t) => ({
  plan: t.plan,
  billingEnabled: t.billing_enabled,
  hasBillingAccount: t.has_billing_account,
  cancelsAt: t.cancels_at,
  subscriptionProductName: t.subscription_product_name,
  subscriptionProductDescription: t.subscription_product_description,
  subscriptionProductMetadata: t.subscription_product_metadata,
});
const ca = (t) => ({
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
});
const da = () => ie.get(le, "billing/current").then(la);
const ua = () => ie.get(le, "billing/catalog").then((t) => t.map(ca));
const ha = (t) =>
  ie
    .post(le, "billing/checkout-session", {
      price_id: t,
      client_request_id: crypto.randomUUID(),
    })
    .then((n) => n.checkout_url);
const pa = () =>
  ie.post(le, "billing/portal-session", {}).then((t) => t.portal_url);
const He = 30000;
const ae = {
  all: ["billing"],
  current: () => [...ae.all, "current"],
  catalog: () => [...ae.all, "catalog"],
};
const ma = 2000;
const xa = new Intl.DateTimeFormat(undefined, {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const Be = () => {
  const t = window.open("", "_blank");
  if (t === null) {
    D.error("Allow pop-ups to open Stripe billing in a new tab.");
    return null;
  } else {
    t.opener = null;
    return t;
  }
};
const ga = (t) => {
  if (t.unitAmount === null || t.currency === null) {
    if (t.type === "recurring") {
      return "Custom recurring price";
    } else {
      return "Custom price";
    }
  }
  const n = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: t.currency,
  }).format(t.unitAmount / 100);
  if (t.recurringInterval === null) {
    return `${n} one-time`;
  } else {
    return `${n} / ${t.recurringInterval}`;
  }
};
const _Component21 = () => {
  var h;
  const t = ut();
  const n = O({
    queryKey: ae.current(),
    queryFn: da,
    staleTime: He,
    refetchInterval: (c) => {
      var u;
      if (
        t === "success" &&
        ((u = c.state.data) == null ? undefined : u.plan) !== "pro"
      ) {
        return ma;
      } else {
        return false;
      }
    },
  });
  const a = O({
    queryKey: ae.catalog(),
    queryFn: ua,
    staleTime: He,
    enabled:
      ((h = n.data) == null ? undefined : h.billingEnabled) === true &&
      n.data.plan === "free",
  });
  const r = W({
    mutationFn: async ({ billingTab: c, price: u }) => ({
      billingTab: c,
      checkoutUrl: await ha(u.id),
    }),
    onSuccess: ({ billingTab: c, checkoutUrl: u }) => {
      c.location.assign(u);
    },
    onError: (c, { billingTab: u }) => {
      u.close();
      D.error(L(c));
    },
  });
  const i = W({
    mutationFn: async (c) => ({
      billingTab: c,
      portalUrl: await pa(),
    }),
    onSuccess: ({ billingTab: c, portalUrl: u }) => {
      c.location.assign(u);
    },
    onError: (c, u) => {
      u.close();
      D.error(L(c));
    },
  });
  if (n.isPending) {
    return (
      <_Component7 spacing={0.35}>
        <_Component5 variant="subtitle2" color="textPrimary">
          Billing
        </_Component5>
        <_Component5 variant="body2" color="textSecondary">
          Loading billing details...
        </_Component5>
      </_Component7>
    );
  }
  if (n.isError) {
    return (
      <_Component7 spacing={0.35}>
        <_Component5 variant="subtitle2" color="textPrimary">
          Billing
        </_Component5>
        <_Component5 variant="body2" color="error">
          {L(n.error)}
        </_Component5>
      </_Component7>
    );
  }
  const s = n.data;
  if (s.billingEnabled && s.plan === "free" && a.isPending) {
    return (
      <_Component7 spacing={0.35}>
        <_Component5 variant="subtitle2" color="textPrimary">
          Billing
        </_Component5>
        <_Component5 variant="body2" color="textSecondary">
          Loading billing products...
        </_Component5>
      </_Component7>
    );
  }
  if (s.billingEnabled && s.plan === "free" && a.isError) {
    return (
      <_Component7 spacing={0.35}>
        <_Component5 variant="subtitle2" color="textPrimary">
          Billing
        </_Component5>
        <_Component5 variant="body2" color="error">
          {L(a.error)}
        </_Component5>
      </_Component7>
    );
  }
  const l = a.data ?? [];
  const o = r.isPending || i.isPending;
  console.log(s, l);
  return (
    <_Component7 spacing={1.4}>
      <_Component7 spacing={0.35}>
        <_Component5 variant="subtitle2" color="textPrimary">
          Billing
        </_Component5>
        {!s.billingEnabled && (
          <_Component5 variant="body2" color="textSecondary">
            Billing is not available for this account yet.
          </_Component5>
        )}
        {s.billingEnabled && s.plan === "free" && (
          <_Component5 variant="body2" color="textSecondary">
            You are on the Free plan.
          </_Component5>
        )}
        {s.billingEnabled && s.plan === "pro" && (
          <S>
            <Le
              label={s.subscriptionProductName ?? "Pro"}
              color="primary"
              variant="filled"
              size="small"
            />
            <br />
            <_Component5 variant="caption">
              {s.subscriptionProductDescription ??
                "Your subscription is active."}
            </_Component5>
          </S>
        )}
        {s.billingEnabled && s.plan === "pro" && s.cancelsAt !== null && (
          <_Component7 direction="row">
            <Le
              label={`Cancels ${xa.format(new Date(s.cancelsAt))}`}
              size="small"
              color="warning"
              variant="outlined"
            />
          </_Component7>
        )}
        {t === "success" && s.plan !== "pro" && (
          <_Component5 variant="body2" color="textSecondary">
            Stripe is confirming your subscription. Your plan will activate
            shortly.
          </_Component5>
        )}
        {t === "cancelled" && s.plan === "free" && (
          <_Component5 variant="body2" color="textSecondary">
            Checkout was canceled. You remain on the Free plan.
          </_Component5>
        )}
      </_Component7>
      {s.billingEnabled && s.plan === "free" && l.length > 0 && (
        <_Component7 spacing={1.5}>
          {l.map((c) => {
            const u = c.prices.filter((m) => m.unitAmount !== 0);
            return (
              <_Component7 spacing={0.45} key={c.id}>
                <_Component7
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <_Component5 variant="subtitle2" color="textPrimary">
                    {c.name}
                  </_Component5>
                </_Component7>
                {c.description !== null && (
                  <_Component5 variant="body2" color="textSecondary">
                    {c.description}
                  </_Component5>
                )}
                {u.map((m) => {
                  const y = s.plan === "free" && m.type === "recurring";
                  return (
                    <_Component7 spacing={0.45} key={m.id}>
                      <_Component5 variant="body2" color="textPrimary">
                        {ga(m)}
                      </_Component5>
                      {y && (
                        <_Component8
                          type="button"
                          variant="contained"
                          fullWidth={true}
                          disabled={o}
                          onClick={() => {
                            const f = Be();
                            if (f !== null) {
                              r.mutate({
                                billingTab: f,
                                price: m,
                              });
                            }
                          }}
                        >
                          {r.isPending && "Opening Stripe Checkout..."}
                          {!r.isPending && `Choose ${c.name}`}
                        </_Component8>
                      )}
                    </_Component7>
                  );
                })}
              </_Component7>
            );
          })}
        </_Component7>
      )}
      {s.billingEnabled && s.plan === "free" && l.length === 0 && (
        <_Component5 variant="body2" color="textSecondary">
          No billing products are available.
        </_Component5>
      )}
      {s.billingEnabled && s.hasBillingAccount && (
        <_Component8
          type="button"
          variant="text"
          color="secondary"
          fullWidth={true}
          disabled={o}
          onClick={() => {
            const c = Be();
            if (c !== null) {
              i.mutate(c);
            }
          }}
        >
          {i.isPending && "Opening billing portal..."}
          {!i.isPending && "Manage billing"}
        </_Component8>
      )}
    </_Component7>
  );
};
const _Component18 = k(
  <path d="M4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0zM12 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1" />,
);
const _Component17 = k(
  <path d="M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1" />,
);
const ba = (t) => ({
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
});
const Sa = (t) => ({
  zIndex: t.zIndex.drawer + 3,
});
const Ca = {
  width: "min(17rem, calc(100vw - 2rem))",
  p: 0.65,
};
const ja = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  minWidth: 0,
  px: 0.55,
  py: 0.45,
};
const Ia = {
  minWidth: 0,
};
const ka = {
  minWidth: 0,
  flex: "1 1 auto",
};
const qe = (t) => ({
  backgroundColor: M(t.palette.primary.main, 0.08),
});
const Pa = (t) => ({
  color: t.palette.error.main,
});
const Ne = {
  my: 0.35,
};
const $e = {
  position: "relative",
};
const Oe = (t) => ({
  position: "absolute",
  ...(t === "right"
    ? {
        left: "calc(100% + 0.55rem)",
      }
    : {
        right: "calc(100% + 0.55rem)",
      }),
  bottom: 0,
  width: "min(16.5rem, calc(100vw - 2rem))",
  p: 0.65,
  "@media (max-width:720px)": {
    left: 0,
    right: "auto",
    bottom: "calc(100% + 0.55rem)",
    width: "100%",
  },
});
const w = (t) => ({
  justifyContent: "flex-start",
  minHeight: "2.35rem",
  borderRadius: t.shape.borderRadiusPx,
  color: t.palette.text.primary,
  "& .MuiButton-startIcon": {
    mr: 0.9,
  },
  "& .MuiButton-endIcon": {
    ml: "auto",
  },
});
const ht = {
  display: "flex",
  flexDirection: "column",
  gap: 0.35,
};
const wa = {
  display: "flex",
  flexDirection: "column",
  gap: 0.6,
};
const Ma = ({ onNavigate: t }) => (
  <S sx={ht}>
    <$
      to="/terms"
      type="button"
      variant="text"
      color="secondary"
      fullWidth={true}
      startIcon={<_Component17 fontSize="small" />}
      sx={w}
      onClick={t}
    >
      Terms
    </$>
    <$
      to="/privacy"
      type="button"
      variant="text"
      color="secondary"
      fullWidth={true}
      startIcon={<_Component18 fontSize="small" />}
      sx={w}
      onClick={t}
    >
      Privacy
    </$>
  </S>
);
const Ke = ({ name: t, detail: n, sx: a }) => (
  <_Component7 sx={a}>
    <_Component5 variant="subtitle2" color="textPrimary" noWrap={true}>
      {t}
    </_Component5>
    {n && (
      <_Component5 variant="body2" color="textSecondary" noWrap={true}>
        {n}
      </_Component5>
    )}
  </_Component7>
);
const Aa = k(
  <path d="M13.26 3C8.17 2.86 4 6.94 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.8-2.79c.3-.31.08-.85-.37-.85H6c0-3.89 3.2-7.06 7.1-7 3.71.05 6.84 3.18 6.9 6.9.06 3.91-3.1 7.1-7 7.1-1.59 0-3.05-.53-4.23-1.43-.4-.3-.96-.27-1.31.09-.43.43-.39 1.14.09 1.5C9.06 20.31 10.95 21 13 21c5.06 0 9.14-4.17 9-9.25-.13-4.7-4.05-8.62-8.74-8.75M15 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z" />,
);
const Da = k(
  <path d="M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2" />,
);
const Ra = k(
  <path d="m11.19 1.36-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0M12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z" />,
);
const Ta = ({ displayName: t, isProfileLoading: n, onClose: a }) => {
  const r = F();
  const [i, s] = g.useState(null);
  const l = W({
    mutationFn: Bt,
    onSuccess: (p) => {
      r.setQueryData(tt.currentProfile(), p);
      s(p.displayName);
      D.success("Profile saved.");
    },
  });
  const o = i ?? t;
  const h = Qe(o);
  const c = Qe(t);
  const u = h !== c;
  const m = l.isPending;
  const y = h.length > 0 && h.length <= fe && u && !n && !m;
  const f = () => {
    if (!m) {
      a();
    }
  };
  const b = (p) => {
    p.preventDefault();
    if (y) {
      l.mutate({
        displayName: h,
      });
    }
  };
  return (
    <_Component11
      open={true}
      onClose={f}
      aria-labelledby="profile-user-settings-title"
      maxWidth="xs"
      fullWidth={true}
    >
      <S component="form" onSubmit={b}>
        <Ie id="profile-user-settings-title">User settings</Ie>
        <_Component10 dividers={true}>
          <_Component7 spacing={2}>
            <_Component7 spacing={1.4}>
              <_Component7 spacing={0.35}>
                <_Component5 variant="subtitle2" color="textPrimary">
                  Display name
                </_Component5>
                <_Component5 variant="body2" color="textSecondary">
                  Choose the name shown in your account menu and shared
                  workspace activity.
                </_Component5>
              </_Component7>
              <_Component19
                id="profile-display-name"
                label="Display name"
                size="small"
                value={o}
                disabled={n || m}
                helperText={`${o.length}/${fe}`}
                onChange={(p) => {
                  s(p.target.value);
                }}
                slotProps={{
                  htmlInput: {
                    maxLength: fe,
                  },
                  formHelperText: {
                    sx: {
                      ml: "auto",
                    },
                  },
                }}
              />
            </_Component7>
            {H === "main" && <_Component20 />}
            {H === "main" && <_Component21 />}
            <_Component20 />
            <_Component7 spacing={1.4}>
              <_Component7 spacing={0.35}>
                <_Component5 variant="subtitle2" color="textPrimary">
                  Security
                </_Component5>
                <_Component5 variant="body2" color="textSecondary">
                  Manage password and account security options.
                </_Component5>
              </_Component7>
              <S sx={wa}>
                <_Component8
                  type="button"
                  variant="text"
                  color="secondary"
                  fullWidth={true}
                  disabled={m}
                  startIcon={<Aa fontSize="small" />}
                  sx={w}
                  onClick={() => {
                    f();
                    Ee.resetPassword();
                  }}
                >
                  Reset password
                </_Component8>
                <_Component8
                  type="button"
                  variant="text"
                  color="secondary"
                  fullWidth={true}
                  disabled={m}
                  startIcon={<Ra fontSize="small" />}
                  sx={w}
                  onClick={() => {
                    f();
                    Ee.manageSignInSecurity();
                  }}
                >
                  Security
                </_Component8>
              </S>
            </_Component7>
          </_Component7>
        </_Component10>
        <Pe>
          <_Component8 type="button" color="secondary" disabled={m} onClick={f}>
            Close
          </_Component8>
          <_Component8
            type="submit"
            variant="contained"
            disabled={!y}
            startIcon={<Da fontSize="small" />}
          >
            {m ? "Saving..." : "Save"}
          </_Component8>
        </Pe>
      </S>
    </_Component11>
  );
};
const Qe = (t) => t.replace(/\s+/g, " ").trim();
const Ea = {
  light: Wn,
  dark: yn,
  nebula: _n,
  midnight: Tn,
  blueprint: Dn,
};
const _Component23 = ({ colorScheme: t, ...n }) => {
  const _Component22 = Ea[t];
  return <_Component22 aria-hidden="true" {...n} />;
};
const _a = ["light", "dark", "nebula", "midnight", "blueprint"];
const mt = {
  light: "Regular",
  dark: "Terminal Dark",
  nebula: "Nebula",
  midnight: "Midnight",
  blueprint: "Blueprint",
};
const La = {
  light: "Warm paper and teal",
  dark: "Green phosphor terminal",
  nebula: "Lavender aurora light",
  midnight: "Deep navy and electric blue",
  blueprint: "Drafting paper and cobalt",
};
const xt = () => {
  const { colorScheme: t, setColorScheme: n, setMode: a } = qt();
  const r = t ?? "light";
  const i = g.useCallback(
    (s) => {
      if (s !== "dark" && s !== "midnight") {
        n({
          light: s,
        });
        a("light");
        return;
      }
      n({
        dark: s,
      });
      a("dark");
    },
    [n, a],
  );
  return {
    activeColorScheme: r,
    activeColorSchemeLabel: mt[r],
    selectColorScheme: i,
  };
};
const Wa = (t) => ({
  p: 0.65,
  "& .MuiMenuItem-root": {
    minHeight: "3.5rem",
    gap: 1,
    borderRadius: t.shape.borderRadiusPx,
  },
  "& .MuiMenuItem-root.Mui-selected": {
    backgroundColor: M(t.palette.primary.main, 0.14),
  },
  "& .MuiListItemIcon-root": {
    minWidth: "auto",
    color: "inherit",
  },
});
const za = {
  width: "min(16.5rem, calc(100vw - 2rem))",
  p: 0,
};
const Ua = ({ onSelect: t }) => {
  const { activeColorScheme: n, selectColorScheme: a } = xt();
  return _a.map((r) => {
    const i = n === r;
    return (
      <Nt
        role="menuitemradio"
        aria-checked={i}
        selected={i}
        onClick={() => {
          a(r);
          t();
        }}
        key={r}
      >
        <_Component24>
          <_Component23 colorScheme={r} size={18} />
        </_Component24>
        <_Component25 primary={mt[r]} secondary={La[r]} />
        {i && <_Component26 aria-hidden="true" size={16} />}
      </Nt>
    );
  });
};
const Fa = g.lazy(() =>
  Qt(
    () => import("./PersonalizationDialog-SAjscOQ8.js"),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21,
    ]),
  ),
);
const Ve = 420;
const Ha = [
  {
    name: "offset",
    options: {
      offset: [0, 8],
    },
  },
];
const Ba = ({
  userTooltip: t,
  userInitials: n,
  onLogout: a,
  popperPlacement: r = "right-end",
  sideMenuPlacement: i = "right",
  showTriggerIdentity: s = true,
}) => {
  var De;
  var Re;
  var Te;
  const { profileMenuTrigger: l, profileMenuAction: o } = Jt();
  const { activeColorScheme: h, activeColorSchemeLabel: c } = xt();
  const [u, m] = g.useState(false);
  const [y, f] = g.useState(null);
  const [b, p] = g.useState(H === "main" && ut() !== null);
  const [d, P] = g.useState(false);
  const [R, z] = g.useState(false);
  const [G, q] = g.useState(false);
  const T = O({
    queryKey: tt.currentProfile(),
    queryFn: Gt,
    staleTime: Vt,
  });
  const N = Xt();
  const Y = g.useRef(null);
  const E = g.useRef(null);
  const _ = g.useRef(null);
  const [ce, de] = qa(t);
  const X = ((De = T.data) == null ? undefined : De.displayName) || ce;
  const ue = X;
  const we = ((Re = T.data) == null ? undefined : Re.email) || de;
  const Me = ue || n;
  const ft = N === "power";
  const he = y === "help";
  const J = y === "theme";
  const Z = () => {
    if (E.current !== null) {
      window.clearTimeout(E.current);
      E.current = null;
    }
  };
  const pe = () => {
    if (_.current !== null) {
      window.clearTimeout(_.current);
      _.current = null;
    }
  };
  const A = () => {
    Z();
    pe();
    m(false);
    f(null);
  };
  const me = () => {
    Z();
    m(true);
  };
  const yt = () => {
    if (l) {
      l();
      return;
    }
    me();
  };
  const B = (I) => {
    if (o) {
      o();
      return;
    }
    I();
  };
  const xe = (I, Mt) => {
    if (o) {
      I.preventDefault();
      o();
      return;
    }
    Mt();
  };
  const vt = (I) => {
    xe(I, A);
  };
  const Ae = () => {
    Z();
    E.current = window.setTimeout(() => {
      m(false);
      f(null);
      E.current = null;
    }, Ve);
  };
  const U = (I) => {
    if (!o) {
      pe();
      f(I);
    }
  };
  const ee = () => {
    pe();
    _.current = window.setTimeout(() => {
      f(null);
      _.current = null;
    }, Ve);
  };
  const bt = () => {
    A();
    p(true);
  };
  const St = () => {
    p(false);
    if (H === "main") {
      oa();
    }
  };
  const Ct = () => {
    A();
    P(true);
  };
  const jt = () => {
    P(false);
  };
  const It = () => {
    A();
    z(true);
  };
  const kt = () => {
    z(false);
  };
  const Pt = () => {
    A();
    q(true);
  };
  const wt = () => {
    q(false);
  };
  g.useEffect(
    () => () => {
      if (E.current !== null) {
        window.clearTimeout(E.current);
      }
      if (_.current !== null) {
        window.clearTimeout(_.current);
      }
    },
    [],
  );
  return (
    <e.Fragment>
      <S
        ref={Y}
        component="button"
        type="button"
        aria-label="Account menu"
        aria-controls={u ? "sidebar-profile-menu" : undefined}
        aria-expanded={u ? true : undefined}
        aria-haspopup="dialog"
        sx={ba}
        onMouseEnter={me}
        onMouseLeave={Ae}
        onFocus={me}
        onClick={yt}
        onKeyDown={(I) => {
          if (I.key === "Escape") {
            I.preventDefault();
            A();
          }
        }}
      >
        <We alt={Me} variant="rounded" />
        {s && <Ke name={ue} detail={we} sx={ka} />}
      </S>
      <$t
        id="sidebar-profile-menu"
        open={u}
        anchorEl={Y.current}
        placement={r}
        modifiers={Ha}
        sx={Sa}
        onMouseEnter={Z}
        onMouseLeave={Ae}
        onKeyDown={(I) => {
          if (I.key === "Escape") {
            I.preventDefault();
            A();
          }
        }}
      >
        <_Component29
          role="dialog"
          aria-label="Account menu"
          variant="floating"
          sx={Ca}
        >
          <S sx={ja}>
            <We alt={Me} variant="rounded" />
            <Ke name={ue} detail={we} sx={Ia} />
          </S>
          <_Component20 sx={Ne} />
          <S sx={ht}>
            {H === "admin" && (
              <_Component8
                component="a"
                href={Ot}
                variant="text"
                color="secondary"
                fullWidth={true}
                startIcon={<Kt fontSize="small" />}
                sx={w}
                onClick={(I) => {
                  xe(I, A);
                }}
              >
                Go to main app
              </_Component8>
            )}
            <_Component8
              type="button"
              variant="text"
              color="secondary"
              fullWidth={true}
              startIcon={<Kn fontSize="small" />}
              sx={w}
              onClick={() => {
                B(bt);
              }}
            >
              User settings
            </_Component8>
            <_Component8
              type="button"
              variant="text"
              color="secondary"
              fullWidth={true}
              startIcon={<Qn fontSize="small" />}
              sx={w}
              onClick={() => {
                B(Ct);
              }}
            >
              Personalization
            </_Component8>
            <S
              sx={$e}
              onMouseEnter={() => {
                U("theme");
              }}
              onMouseLeave={ee}
            >
              <_Component8
                type="button"
                variant="text"
                color="secondary"
                fullWidth={true}
                aria-controls={J ? "sidebar-profile-theme-menu" : undefined}
                aria-haspopup="menu"
                aria-expanded={J ? true : undefined}
                startIcon={<_Component23 colorScheme={h} size={18} />}
                endIcon={<_Component27 fontSize="small" />}
                sx={[w, J && qe]}
                onFocus={() => {
                  U("theme");
                }}
                onClick={() => {
                  B(() => {
                    U("theme");
                  });
                }}
              >
                Theme: {c}
              </_Component8>
              {J && (
                <_Component29
                  variant="floating"
                  sx={[Oe(i), za]}
                  onMouseEnter={() => {
                    U("theme");
                  }}
                  onMouseLeave={ee}
                >
                  <_Component28
                    id="sidebar-profile-theme-menu"
                    dense={true}
                    aria-label="Choose theme"
                    sx={Wa}
                  >
                    <Ua
                      onSelect={() => {
                        f(null);
                      }}
                    />
                  </_Component28>
                </_Component29>
              )}
            </S>
            {ft && (
              <$
                to="/research-problems"
                type="button"
                variant="text"
                color="secondary"
                fullWidth={true}
                startIcon={<_Component30 />}
                sx={w}
                onClick={(I) => {
                  xe(I, A);
                }}
              >
                Research problems
              </$>
            )}
            {H === "main" && (
              <e.Fragment>
                <_Component8
                  type="button"
                  variant="text"
                  color="secondary"
                  fullWidth={true}
                  startIcon={<_Component15 fontSize="small" />}
                  sx={w}
                  onClick={() => {
                    B(Pt);
                  }}
                >
                  Manage shared chats
                </_Component8>
                <_Component8
                  type="button"
                  variant="text"
                  color="secondary"
                  fullWidth={true}
                  startIcon={<_Component0 fontSize="small" />}
                  sx={w}
                  onClick={() => {
                    B(It);
                  }}
                >
                  Show archived chats
                </_Component8>
              </e.Fragment>
            )}
            <S
              sx={$e}
              onMouseEnter={() => {
                U("help");
              }}
              onMouseLeave={ee}
            >
              <_Component8
                type="button"
                variant="text"
                color="secondary"
                fullWidth={true}
                aria-haspopup="dialog"
                aria-expanded={he ? true : undefined}
                startIcon={<On fontSize="small" />}
                endIcon={<_Component27 fontSize="small" />}
                sx={[w, he && qe]}
                onFocus={() => {
                  U("help");
                }}
                onClick={() => {
                  U("help");
                }}
              >
                Help
              </_Component8>
              {he && (
                <_Component29
                  role="dialog"
                  aria-label="Help links"
                  variant="floating"
                  sx={Oe(i)}
                  onMouseEnter={() => {
                    U("help");
                  }}
                  onMouseLeave={ee}
                >
                  <Ma onNavigate={vt} />
                </_Component29>
              )}
            </S>
            <_Component20 sx={Ne} />
            <_Component8
              type="button"
              variant="text"
              color="error"
              fullWidth={true}
              startIcon={<Zt fontSize="small" />}
              sx={[w, Pa]}
              onClick={() => {
                B(() => {
                  A();
                  a();
                });
              }}
            >
              Logout
            </_Component8>
          </S>
        </_Component29>
      </$t>
      {b && <Ta displayName={X} isProfileLoading={T.isPending} onClose={St} />}
      {H === "main" && (
        <e.Fragment>
          <_Component31 open={G} onClose={wt} />
          <_Component32 open={R} onClose={kt} />
        </e.Fragment>
      )}
      {d && (
        <g.Suspense fallback={null}>
          <Fa
            open={d}
            personalization={
              ((Te = T.data) == null ? undefined : Te.personalization) ?? ""
            }
            isProfileLoading={T.isPending}
            onClose={jt}
          />
        </g.Suspense>
      )}
    </e.Fragment>
  );
};
const qa = (t) => {
  const [n, ...a] = t
    .split(
      `
`,
    )
    .map((r) => r.trim())
    .filter(Boolean);
  return [n || "Math User", a.join(" ")];
};
const Ge = 296;
const gt = 260;
const Na = 544;
const $a = 0.4;
const Oa = "ai-math.chat-sidebar-width.v1";
const Ka = (t) => `${t}px`;
const Qa = (t) => ({
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
  [t.breakpoints.down("md")]: {
    display: "none",
  },
});
const Va = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0.5rem",
  minWidth: 0,
  marginTop: 0,
  padding: "0.55rem 0.35rem 0 0.15rem",
  borderTop: "1px solid",
  borderColor: "divider",
};
const Ga = ({
  userTooltip: t,
  userInitials: n,
  onLogout: a,
  tourTarget: r,
}) => (
  <S data-thread-tour-target={r} sx={Va}>
    <Ba
      userTooltip={t}
      userInitials={n}
      onLogout={a}
      popperPlacement="top-start"
      sideMenuPlacement="right"
    />
  </S>
);
const Ye = () => Math.max(gt, Math.min(Na, Math.floor(window.innerWidth * $a)));
const Ya = (t) => (n) => {
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
    "&, & *, & *::before, & *::after": {
      boxSizing: "border-box",
    },
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
};
const Xa = {
  flex: "0 0 auto",
  minWidth: 0,
  display: "flex",
  gap: "0.5rem",
  padding: "0 0.35rem 0.85rem 0.15rem",
  borderBottom: "1px solid",
  borderColor: "divider",
  "@media (max-width:720px)": {
    gap: "0.45rem",
  },
  "& > *": {
    minWidth: 0,
    flex: "1",
  },
  "button, a": {
    padding: "0.25rem",
    minWidth: 0,
    flex: "1",
  },
};
const Ja = {
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
};
const Sr = ({ children: t, tourTarget: n, layout: a = "equal-actions" }) => (
  <S
    data-workspace-side-panel-header="true"
    data-layout={a}
    data-thread-tour-target={n}
    sx={[
      Xa,
      a === "title-actions" && {
        "& > *": {
          flex: "0 0 auto",
        },
        '& > [data-side-panel-header-title="true"]': {
          flex: "1 1 auto",
        },
      },
      a === "icon-actions" && {
        gap: "0.2rem",
        alignItems: "center",
        padding: "0 0.15rem 0.55rem",
        "& > *": {
          flex: "1 1 0",
        },
        "button, a": {
          flex: "1 1 0",
          minHeight: "2.35rem",
        },
      },
    ]}
  >
    {t}
  </S>
);
const Cr = ({
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
  const [c, u] = g.useState(() => (typeof window === "undefined" ? Ge : Ye()));
  g.useEffect(() => {
    const f = () => u(Ye());
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
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
  return (
    <S component="aside" aria-label={a} data-thread-tour-target={r} sx={Ya(m)}>
      {t}
      <S sx={Ja}>{n}</S>
      <Ga userTooltip={s} userInitials={l} onLogout={o} tourTarget={h} />
      <S aria-label={i} {...y} sx={Qa} />
    </S>
  );
};
export {
  _Component23 as A,
  We as M,
  Da as S,
  _Component3 as U,
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
