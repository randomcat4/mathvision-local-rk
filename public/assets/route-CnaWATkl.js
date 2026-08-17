import {
  ab as j,
  am as B,
  r as g,
  F as C,
  j as a,
  H as I,
  a8 as y,
  I as k,
  K as f,
  Q as R,
  a3 as A,
  aV as L,
  A as T,
  bv as M,
  bw as w,
  bx as z,
  U as b,
  B as n,
  T as d,
  l as P,
  bp as H,
  M as D,
  g as u,
  p as W,
  O as N,
} from "./index-BM3ZINIl.js";
import { u as $ } from "./useQuery-DM2qiUYb.js";
import { u as F } from "./useMutation-C1SgG9wr.js";
import { L as E } from "./TextField-D8vc_sXz.js";
import { L as U } from "./ListItemIcon-CaLBil7Q.js";
import { L as O } from "./ListItemText-CBxudZz_.js";
import { a as G, W as Q, b as V } from "./WorkspaceSidePanelFrame-BElEFQhq.js";
import { u as q, R as K, a as _, r as h, g as X } from "./ResearchProblemsContext-D2iMu4To.js";
import { M as v } from "./MChip-DiH8NXBU.js";
import { T as Y } from "./TimeRelative-HYP_-RcH.js";
import { A as J } from "./Alert-DnFVD8li.js";
import { F as Z } from "./file-plus-corner-CfeYwU0X.js";
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
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./Divider-BcuihGce.js";
function rr(r) {
  return j("MuiAppBar", r);
}
B("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const or = (r) => {
    const { color: o, position: s, classes: t } = r,
      i = { root: ["root", `color${y(o)}`, `position${y(s)}`] };
    return k(i, rr, t);
  },
  S = (r, o) => (r ? `${r.replace(")", "")}, ${o})` : o),
  ar = f(R, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (r, o) => {
      const { ownerState: s } = r;
      return [o.root, o[`position${y(s.position)}`], o[`color${y(s.color)}`]];
    },
  })(
    A(({ theme: r }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (r.vars || r).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (r.vars || r).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (r.vars || r).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        {
          props: { color: "inherit" },
          style: { "--AppBar-color": "inherit", color: "var(--AppBar-color)" },
        },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": r.vars ? r.vars.palette.AppBar.defaultBg : r.palette.grey[100],
            "--AppBar-color": r.vars
              ? r.vars.palette.text.primary
              : r.palette.getContrastText(r.palette.grey[100]),
            ...r.applyStyles("dark", {
              "--AppBar-background": r.vars ? r.vars.palette.AppBar.defaultBg : r.palette.grey[900],
              "--AppBar-color": r.vars
                ? r.vars.palette.text.primary
                : r.palette.getContrastText(r.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(r.palette)
          .filter(L(["contrastText"]))
          .map(([o]) => ({
            props: { color: o },
            style: {
              "--AppBar-background": (r.vars ?? r).palette[o].main,
              "--AppBar-color": (r.vars ?? r).palette[o].contrastText,
            },
          })),
        {
          props: (o) => o.enableColorOnDark === !0 && !["inherit", "transparent"].includes(o.color),
          style: { backgroundColor: "var(--AppBar-background)", color: "var(--AppBar-color)" },
        },
        {
          props: (o) => o.enableColorOnDark === !1 && !["inherit", "transparent"].includes(o.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...r.applyStyles("dark", {
              backgroundColor: r.vars
                ? S(r.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: r.vars ? S(r.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...r.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    })),
  ),
  sr = g.forwardRef(function (o, s) {
    const t = C({ props: o, name: "MuiAppBar" }),
      {
        className: i,
        color: l = "primary",
        enableColorOnDark: p = !1,
        position: e = "fixed",
        ...m
      } = t,
      c = { ...t, color: l, position: e, enableColorOnDark: p },
      x = or(c);
    return a.jsx(ar, {
      square: !0,
      component: "header",
      ownerState: c,
      elevation: 4,
      className: I(x.root, i, e === "fixed" && "mui-fixed"),
      ref: s,
      ...m,
    });
  });
function tr(r) {
  return j("MuiToolbar", r);
}
B("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const er = (r) => {
    const { classes: o, disableGutters: s, variant: t } = r;
    return k({ root: ["root", !s && "gutters", t] }, tr, o);
  },
  ir = f("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (r, o) => {
      const { ownerState: s } = r;
      return [o.root, !s.disableGutters && o.gutters, o[s.variant]];
    },
  })(
    A(({ theme: r }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableGutters,
          style: {
            paddingLeft: r.spacing(2),
            paddingRight: r.spacing(2),
            [r.breakpoints.up("sm")]: { paddingLeft: r.spacing(3), paddingRight: r.spacing(3) },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: r.mixins.toolbar },
      ],
    })),
  ),
  nr = g.forwardRef(function (o, s) {
    const t = C({ props: o, name: "MuiToolbar" }),
      {
        className: i,
        component: l = "div",
        disableGutters: p = !1,
        variant: e = "regular",
        ...m
      } = t,
      c = { ...t, component: l, disableGutters: p, variant: e },
      x = er(c);
    return a.jsx(ir, { as: l, className: I(x.root, i), ref: s, ownerState: c, ...m });
  }),
  lr = T(a.jsx("path", { d: "M12 3 4 9v12h5v-7h6v7h5V9z" })),
  pr = { alignItems: "center", py: 1, borderColor: "primary.main", borderRadius: 1 },
  cr = { minWidth: "40px", justifyContent: "center", color: "primary.dark" },
  dr = () =>
    a.jsx(E, {
      component: "nav",
      sx: { display: "flex", alignItems: "center", p: 0, m: 0 },
      children: a.jsxs(M, {
        component: "a",
        href: w,
        "aria-label": "Back to main app",
        sx: pr,
        children: [
          a.jsx(U, { sx: cr, children: a.jsx(lr, {}) }),
          a.jsx(O, { slotProps: { primary: { variant: "body2" } }, primary: "Back to main app" }),
        ],
      }),
    }),
  ur = f(sr, { shouldForwardProp: (r) => r !== "open" })(({ theme: r, open: o }) => ({
    zIndex: r.zIndex.drawer + 1,
    transition: r.transitions.create(["width", "margin"], {
      easing: r.transitions.easing.sharp,
      duration: r.transitions.duration.leavingScreen,
    }),
    ...(o && {
      transition: r.transitions.create(["width", "margin"], {
        easing: r.transitions.easing.sharp,
        duration: r.transitions.duration.enteringScreen,
      }),
    }),
  })),
  mr = (r) => {
    const o = z({ select: (l) => l.location.pathname.startsWith("/admin") }),
      s = b.getDisplayName(),
      t =
        [s, b.getEmail()].filter(Boolean).join(`
`) || s,
      i = b.getInitials() || "AI";
    return a.jsxs(n, {
      sx: {
        height: "100vh",
        backgroundColor: "transparent",
        color: "textPrimary",
        display: "flex",
        flexDirection: "column",
        pb: r.noSpacing ? 0 : 10,
        position: "relative",
      },
      children: [
        !r.hideHeader &&
          a.jsx(ur, {
            position: "fixed",
            open: !0,
            sx: { zIndex: 1001 },
            children: a.jsxs(nr, {
              sx: {
                alignItems: "center",
                px: 3,
                minHeight: 64,
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
              },
              children: [
                a.jsx(n, {
                  sx: {
                    justifySelf: "start",
                    pl: 5,
                    a: { textDecoration: "none", color: "inherit" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  },
                  children: a.jsx("a", {
                    href: w,
                    children: a.jsx(d, { variant: "h5", children: "Math Vision" }),
                  }),
                }),
                a.jsx(n, { sx: {}, children: a.jsx(dr, {}) }),
                a.jsx(n, {
                  sx: { justifySelf: "end", display: "flex", alignItems: "center", pr: 2 },
                  children: a.jsx(G, {
                    userTooltip: t,
                    userInitials: i,
                    onLogout: P,
                    popperPlacement: "bottom-end",
                    sideMenuPlacement: o ? "left" : "right",
                    showTriggerIdentity: !1,
                  }),
                }),
              ],
            }),
          }),
        a.jsx(n, {
          sx: r.noSpacing
            ? { display: "flex", flex: 1, minHeight: 0, mt: r.hideHeader ? 0 : "64px" }
            : { display: "flex" },
          children: a.jsx(n, {
            sx: r.noSpacing
              ? { width: "100%", height: "100%" }
              : { p: "90px", width: "100%", height: "100%" },
            children: r.children,
          }),
        }),
      ],
    });
  },
  xr = { display: "flex", flexDirection: "column", justifyContent: "center" };
function br() {
  const {
      researchSubmissions: r,
      isResearchSubmissionsLoading: o,
      researchSubmissionsError: s,
    } = q(),
    t = g.useMemo(
      () => r.filter((e) => e.submissionType === "problem" || e.problemSubmissionId === null),
      [r],
    ),
    i = b.getDisplayName(),
    l =
      [i, b.getEmail()].filter(Boolean).join(`
`) || i,
    p = b.getInitials() || "AI";
  return a.jsx(Q, {
    ariaLabel: "Research problems",
    header: a.jsxs(V, {
      children: [
        a.jsxs(n, {
          sx: xr,
          children: [
            a.jsx(d, {
              variant: "subtitle2",
              color: "textPrimary",
              noWrap: !0,
              children: "Research problems",
            }),
            a.jsx(d, {
              variant: "caption",
              color: "textSecondary",
              noWrap: !0,
              children: "Submission workspace",
            }),
          ],
        }),
        a.jsx(D, {
          to: "/research-problems",
          search: { draft: !0 },
          resetScroll: !1,
          tooltip: "Create new submission",
          "aria-label": "Create new submission",
          color: "secondary",
          children: a.jsx(Z, { size: 20 }),
        }),
      ],
    }),
    resizeHandleAriaLabel: "Resize research problems panel",
    userTooltip: l,
    userInitials: p,
    onLogout: P,
    children: a.jsxs(n, {
      sx: gr,
      children: [
        a.jsxs(n, {
          sx: { display: "flex", alignItems: "center", justifyContent: "space-between" },
          children: [
            a.jsx(d, {
              variant: "overline",
              color: "textSecondary",
              children: "Submitted entries",
            }),
            a.jsx(v, { label: t.length, size: "small" }),
          ],
        }),
        a.jsxs(n, {
          sx: yr,
          children: [
            o &&
              a.jsx(d, {
                variant: "body2",
                color: "textSecondary",
                children: "Loading submissions…",
              }),
            s && a.jsx(J, { severity: "error", children: "Could not load submissions." }),
            !o &&
              !s &&
              t.map((e) =>
                a.jsx(
                  H,
                  {
                    to: "/research-problems/$problemId",
                    params: { problemId: e.id },
                    resetScroll: !1,
                    disableGutters: !0,
                    sx: fr,
                    children: a.jsxs(n, {
                      sx: hr,
                      children: [
                        a.jsxs(n, {
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            justifyContent: "space-between",
                          },
                          children: [
                            a.jsx(d, { variant: "subtitle2", noWrap: !0, children: e.title }),
                            a.jsx(v, {
                              size: "small",
                              color: e.submissionType === "problem" ? "primary" : "default",
                              sx: { ml: 0.5, textTransform: "capitalize" },
                              label: e.submissionType,
                            }),
                          ],
                        }),
                        a.jsx(d, {
                          variant: "caption",
                          color: "textSecondary",
                          noWrap: !0,
                          children: a.jsx(Y, { date: e.createdAt }),
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
            !o &&
              !s &&
              t.length === 0 &&
              a.jsx(d, {
                variant: "body2",
                color: "textSecondary",
                children: "No submissions yet.",
              }),
          ],
        }),
      ],
    }),
  });
}
const gr = {
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarGutter: "stable",
    marginTop: "0.85rem",
    padding: "0 0.35rem 0 0.15rem",
  },
  yr = { minWidth: 0, width: "100%", display: "flex", flexDirection: "column", gap: "0.3rem" },
  fr = (r) => ({
    borderRadius: r.shape.borderRadiusPx,
    width: "auto",
    minHeight: "2.5rem",
    px: 1,
    py: 0.65,
    pl: 1,
    border: "1px solid transparent",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "transparent",
    transition: r.transitions.create(
      ["background-color", "border-color", "box-shadow", "padding"],
      { duration: r.transitions.duration.shortest },
    ),
    "&::before": {
      content: '""',
      position: "absolute",
      left: r.spacing(0.45),
      top: r.spacing(0.55),
      bottom: r.spacing(0.55),
      width: 0,
      borderRadius: r.shape.radiusSmPx,
      backgroundColor: r.palette.primary.main,
      opacity: 0,
      transition: r.transitions.create(["opacity", "width"], {
        duration: r.transitions.duration.shortest,
      }),
    },
    "&:hover": {
      borderColor: u(r.palette.primary.main, 0.16),
      backgroundColor: u(r.palette.text.primary, 0.04),
    },
    '&[data-status="active"]': {
      paddingTop: r.spacing(0.85),
      paddingBottom: r.spacing(0.85),
      paddingLeft: r.spacing(1.5),
      borderColor: u(r.palette.primary.main, 0.32),
      backgroundColor: u(r.palette.primary.main, 0.12),
      boxShadow: `0 14px 30px ${u(r.palette.primary.main, 0.14)}`,
    },
    '&[data-status="active"]::before': { width: "0.24rem", opacity: 1 },
    '&[data-status="active"]:hover': {
      borderColor: u(r.palette.primary.main, 0.42),
      backgroundColor: u(r.palette.primary.main, 0.16),
    },
  }),
  hr = { width: "100%", minWidth: 0 },
  vr = (r) => ({
    width: "100%",
    height: "100%",
    minHeight: 0,
    display: "flex",
    [r.breakpoints.down(980)]: { flexDirection: "column" },
  }),
  Sr = { flex: "1 1 auto", minWidth: 0, minHeight: 0, overflow: "auto" },
  jr = () => {
    const r = W(),
      o = $({ queryKey: h.submissions(), queryFn: X, staleTime: 3e4 }),
      { mutateAsync: s, isPending: t } = F({
        mutationFn: _,
        onSuccess: async () => {
          await r.invalidateQueries({ queryKey: h.submissions() });
        },
      }),
      i = g.useCallback((p) => s(p), [s]),
      l = g.useMemo(() => {
        var p, e, m, c, x;
        return {
          researchSubmissions: ((p = o.data) == null ? void 0 : p.submissions) ?? [],
          createResearchSubmission: i,
          isCreatingResearchSubmission: t,
          isResearchSubmissionsLoading: o.isPending,
          researchSubmissionsError: o.isError ? o.error : null,
          isPilotIntakeOpen: ((e = o.data) == null ? void 0 : e.isPilotIntakeOpen) ?? !1,
          pilotSubmissionLimit: ((m = o.data) == null ? void 0 : m.pilotSubmissionLimit) ?? 0,
          remainingPilotSubmissionSlots:
            ((c = o.data) == null ? void 0 : c.remainingPilotSubmissionSlots) ?? 0,
          attachmentMaxCount: ((x = o.data) == null ? void 0 : x.attachmentMaxCount) ?? 0,
        };
      }, [i, t, o.data, o.error, o.isError, o.isPending]);
    return a.jsx(mr, {
      noSpacing: !0,
      children: a.jsx(K.Provider, {
        value: l,
        children: a.jsxs(n, {
          sx: vr,
          children: [
            a.jsx(br, {}),
            a.jsx(n, { component: "main", sx: Sr, children: a.jsx(N, {}) }),
          ],
        }),
      }),
    });
  },
  Kr = jr;
export { Kr as component };
