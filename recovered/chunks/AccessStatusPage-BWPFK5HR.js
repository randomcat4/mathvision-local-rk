import {
  j as e,
  B as S,
  e as H,
  S as t,
  f as M,
  T as d,
  g as j,
  h as A,
  k as $,
  l as K,
  o as E,
  p as N,
  r as y,
  q as P,
  v as G,
  w as L,
  C as J,
  W as k,
  x as X,
  y as Y,
  z as Z,
} from "./index-BM3ZINIl.js";
import { L as ee } from "./LogoutRounded-BsETu1qq.js";
import { u as re } from "./useQuery-DM2qiUYb.js";
import { u as te } from "./useMutation-C1SgG9wr.js";
import { D as ie } from "./Divider-BcuihGce.js";
import { A as v } from "./Alert-DnFVD8li.js";
import { T as w } from "./TextField-D8vc_sXz.js";
import { C as se } from "./circle-check-big-D9HEGJKD.js";
function F() {
  var B, R, W, T;
  const s = N(),
    [o, n] = y.useState(null),
    [l, u] = y.useState(!1),
    i = re({ queryKey: L.currentProfile(), queryFn: Z, staleTime: Y }),
    V = y.useMemo(() => {
      var r, c, m;
      return {
        affiliation: ((r = i.data) == null ? void 0 : r.waitlistAffiliation) ?? "",
        heardAbout: ((c = i.data) == null ? void 0 : c.waitlistHeardAbout) ?? "Prefer not to say",
        referredBy: ((m = i.data) == null ? void 0 : m.waitlistReferredBy) ?? "",
      };
    }, [
      (B = i.data) == null ? void 0 : B.waitlistAffiliation,
      (R = i.data) == null ? void 0 : R.waitlistHeardAbout,
      (W = i.data) == null ? void 0 : W.waitlistReferredBy,
    ]),
    a = o ?? V,
    f = a.heardAbout === "Referral",
    p = a.affiliation.trim(),
    g = a.referredBy.trim(),
    b = l && !p ? "Affiliation is required." : "",
    I = l && f && !g ? "Who referred you is required when Referral is selected." : "",
    C = i.isError ? P(i.error) : null,
    _ = !!((T = i.data) != null && T.waitlistAffiliation),
    x = te({
      mutationFn: G,
      onSuccess: (r) => {
        (s.setQueryData(L.currentProfile(), r), n(null), u(!1));
      },
    }),
    h = x.isPending || (i.isLoading && !i.data),
    U = (r) => {
      n({ ...a, affiliation: r.target.value });
    },
    O = (r) => {
      const c = k.find((m) => m === r.target.value);
      if (!c) throw new Error("Invalid waitlist heard-about option.");
      n({ ...a, heardAbout: c, referredBy: c === "Referral" ? a.referredBy : "" });
    },
    Q = (r) => {
      n({ ...a, referredBy: r.target.value });
    },
    z = (r) => {
      (r.preventDefault(),
        u(!0),
        !(!p || (f && !g)) &&
          x.mutate({ affiliation: p, heardAbout: a.heardAbout, referredBy: f ? g : null }));
    };
  return e.jsx(S, {
    component: "form",
    sx: { width: "100%" },
    onSubmit: z,
    children: e.jsxs(t, {
      spacing: 2,
      children: [
        e.jsx(t, {
          spacing: 0.75,
          children: e.jsx(d, { variant: "h5", children: "Sign up for the waitlist" }),
        }),
        i.isLoading && !i.data
          ? e.jsxs(t, {
              direction: "row",
              spacing: 1,
              sx: { alignItems: "center" },
              children: [
                e.jsx(J, { size: 18 }),
                e.jsx(d, {
                  variant: "body2",
                  color: "textSecondary",
                  children: "Loading saved waitlist information",
                }),
              ],
            })
          : null,
        C ? e.jsx(v, { severity: "warning", children: C }) : null,
        x.isError ? e.jsx(v, { severity: "error", children: P(x.error) }) : null,
        x.isSuccess && o === null
          ? e.jsx(v, { severity: "success", children: "Waitlist information saved." })
          : null,
        e.jsx(w, {
          disabled: h,
          error: !!b,
          fullWidth: !0,
          helperText: b || "",
          label: "Affiliation",
          required: !0,
          value: a.affiliation,
          onChange: U,
        }),
        e.jsx(w, {
          disabled: h,
          fullWidth: !0,
          label: "How did you first hear about us?",
          select: !0,
          value: a.heardAbout,
          onChange: O,
          children: k.map((r) => e.jsx(X, { value: r, children: r }, r)),
        }),
        f
          ? e.jsx(w, {
              disabled: h,
              error: !!I,
              fullWidth: !0,
              helperText: I || "",
              label: "Who referred you?",
              required: !0,
              value: a.referredBy,
              onChange: Q,
            })
          : null,
        e.jsx(t, {
          direction: { xs: "column", sm: "row" },
          spacing: 1.25,
          sx: { alignItems: { xs: "stretch", sm: "center" } },
          children: e.jsx(A, {
            disabled: h,
            startIcon: e.jsx(se, {}),
            type: "submit",
            variant: "contained",
            children: _ ? "Update Waitlist Info" : "Save Waitlist Info",
          }),
        }),
      ],
    }),
  });
}
function q() {
  return e.jsxs(t, {
    direction: { xs: "column", sm: "row" },
    spacing: 1.25,
    children: [
      e.jsx(A, {
        variant: "contained",
        startIcon: e.jsx($, { fontSize: "small" }),
        onClick: () => window.location.reload(),
        children: "Refresh",
      }),
      e.jsx(A, {
        color: "secondary",
        startIcon: e.jsx(ee, { fontSize: "small" }),
        onClick: () => K(),
        children: "Sign Out",
      }),
    ],
  });
}
function D({ color: s = "textSecondary" }) {
  return e.jsxs(t, {
    direction: "row",
    spacing: 2,
    children: [
      e.jsx(E, {
        to: "/terms",
        color: s,
        children: e.jsx(d, { variant: "caption", color: s, children: "Terms of Service" }),
      }),
      e.jsx(E, {
        to: "/privacy",
        color: s,
        children: e.jsx(d, { variant: "caption", color: s, children: "Privacy Policy" }),
      }),
    ],
  });
}
function ae({ title: s, message: o, showWaitlistSignupForm: n }) {
  return e.jsx(S, {
    sx: {
      minHeight: "100dvh",
      display: "grid",
      placeItems: "center",
      px: { xs: 2, md: 3 },
      py: { xs: 4, md: 6 },
    },
    children: e.jsx(H, {
      variant: "panel",
      sx: { width: "100%", maxWidth: 620, p: { xs: 3, md: 5 } },
      children: e.jsxs(t, {
        spacing: 3,
        sx: { alignItems: "flex-start" },
        children: [
          e.jsx(M, { variant: "mark", alt: "Math Vision", sx: { width: 72, height: 72 } }),
          e.jsxs(t, {
            spacing: 1.5,
            children: [
              e.jsx(d, { variant: "h4", children: s }),
              e.jsx(d, { variant: "body1", color: "textSecondary", children: o }),
            ],
          }),
          n ? e.jsx(F, {}) : null,
          e.jsx(q, {}),
          e.jsx(D, {}),
        ],
      }),
    }),
  });
}
function ne({ title: s, message: o, showWaitlistSignupForm: n }) {
  return e.jsx(S, {
    sx: {
      minHeight: "100dvh",
      display: "grid",
      placeItems: "center",
      px: { xs: 2, md: 5 },
      py: { xs: 2, md: 5 },
    },
    children: e.jsxs(H, {
      variant: "panel",
      sx: {
        width: "100%",
        maxWidth: 1180,
        minHeight: { md: 680 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" },
        overflow: "hidden",
        p: 0,
      },
      children: [
        e.jsx(t, {
          sx: {
            minHeight: { xs: 420, md: "auto" },
            p: { xs: 3, sm: 4, md: 5 },
            background: (l) =>
              `linear-gradient(135deg, ${j(l.palette.background.paper, 0.98)} 0%, ${j(l.palette.grey[100], 0.05)} 48%, ${j(l.palette.primary.main, 0.08)} 100%)`,
          },
          children: e.jsxs(t, {
            spacing: 4,
            sx: { flexGrow: 1, justifyContent: "space-between", alignItems: "flex-start" },
            children: [
              e.jsxs(t, {
                spacing: { xs: 5, md: 9 },
                sx: { alignItems: "flex-start" },
                children: [
                  e.jsx(M, { variant: "mark", alt: "Math Vision", sx: { width: 68, height: 68 } }),
                  e.jsx(d, { variant: "h3", children: s }),
                ],
              }),
              e.jsxs(t, {
                spacing: 3,
                sx: { width: "100%" },
                children: [
                  e.jsx(d, { variant: "body1", color: "textSecondary", children: o }),
                  e.jsx(q, {}),
                  e.jsx(ie, {}),
                  e.jsx(D, {}),
                ],
              }),
            ],
          }),
        }),
        e.jsx(t, {
          sx: {
            minHeight: { xs: 520, md: "auto" },
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, sm: 4, md: 6 },
          },
          children: e.jsx(t, {
            spacing: 3,
            sx: { width: "100%", maxWidth: 460 },
            children: n ? e.jsx(F, {}) : null,
          }),
        }),
      ],
    }),
  });
}
function me({ title: s, message: o, layout: n = "centered", showWaitlistSignupForm: l = !1 }) {
  const u = { title: s, message: o, showWaitlistSignupForm: l };
  return n === "split" ? e.jsx(ne, { ...u }) : e.jsx(ae, { ...u });
}
export { me as A };
