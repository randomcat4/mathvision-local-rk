import { ab as j, am as B, r as g, F as C, j as a, H as I, a8 as y, I as k, K as f, Q as R, a3 as A, aV as L, A as T, bv as M, bw as w, bx as z, U as b, B as _Component5, T as _Component4, l as P, bp as H, M as D, g as u, p as W, O as N } from "./index-BM3ZINIl.js";
import { u as $ } from "./useQuery-DM2qiUYb.js";
import { u as F } from "./useMutation-C1SgG9wr.js";
import { L as E } from "./TextField-D8vc_sXz.js";
import { L as U } from "./ListItemIcon-CaLBil7Q.js";
import { L as O } from "./ListItemText-CBxudZz_.js";
import { a as G, W as Q, b as V } from "./WorkspaceSidePanelFrame-BElEFQhq.js";
import { u as q, R as K, a as _, r as h, g as X } from "./ResearchProblemsContext-D2iMu4To.js";
import { M as _Component9 } from "./MChip-DiH8NXBU.js";
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
B("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const or = r => {
  const {
    color: o,
    position: s,
    classes: t
  } = r;
  const i = {
    root: ["root", `color${y(o)}`, `position${y(s)}`]
  };
  return k(i, rr, t);
};
const S = (r, o) => r ? `${r.replace(")", "")}, ${o})` : o;
const _Component = f(R, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (r, o) => {
    const {
      ownerState: s
    } = r;
    return [o.root, o[`position${y(s.position)}`], o[`color${y(s.color)}`]];
  }
})(A(({
  theme: r
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (r.vars || r).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (r.vars || r).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (r.vars || r).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit",
      color: "var(--AppBar-color)"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": r.vars ? r.vars.palette.AppBar.defaultBg : r.palette.grey[100],
      "--AppBar-color": r.vars ? r.vars.palette.text.primary : r.palette.getContrastText(r.palette.grey[100]),
      ...r.applyStyles("dark", {
        "--AppBar-background": r.vars ? r.vars.palette.AppBar.defaultBg : r.palette.grey[900],
        "--AppBar-color": r.vars ? r.vars.palette.text.primary : r.palette.getContrastText(r.palette.grey[900])
      })
    }
  }, ...Object.entries(r.palette).filter(L(["contrastText"])).map(([o]) => ({
    props: {
      color: o
    },
    style: {
      "--AppBar-background": (r.vars ?? r).palette[o].main,
      "--AppBar-color": (r.vars ?? r).palette[o].contrastText
    }
  })), {
    props: o => o.enableColorOnDark === true && !["inherit", "transparent"].includes(o.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: o => o.enableColorOnDark === false && !["inherit", "transparent"].includes(o.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...r.applyStyles("dark", {
        backgroundColor: r.vars ? S(r.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: r.vars ? S(r.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...r.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
})));
const sr = g.forwardRef(function (o, s) {
  const t = C({
    props: o,
    name: "MuiAppBar"
  });
  const {
    className: i,
    color: l = "primary",
    enableColorOnDark: p = false,
    position: e = "fixed",
    ...m
  } = t;
  const c = {
    ...t,
    color: l,
    position: e,
    enableColorOnDark: p
  };
  const x = or(c);
  return <_Component square={true} component="header" ownerState={c} elevation={4} className={I(x.root, i, e === "fixed" && "mui-fixed")} ref={s} {...m} />;
});
function tr(r) {
  return j("MuiToolbar", r);
}
B("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const er = r => {
  const {
    classes: o,
    disableGutters: s,
    variant: t
  } = r;
  return k({
    root: ["root", !s && "gutters", t]
  }, tr, o);
};
const _Component2 = f("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (r, o) => {
    const {
      ownerState: s
    } = r;
    return [o.root, !s.disableGutters && o.gutters, o[s.variant]];
  }
})(A(({
  theme: r
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: o
    }) => !o.disableGutters,
    style: {
      paddingLeft: r.spacing(2),
      paddingRight: r.spacing(2),
      [r.breakpoints.up("sm")]: {
        paddingLeft: r.spacing(3),
        paddingRight: r.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: r.mixins.toolbar
  }]
})));
const _Component7 = g.forwardRef(function (o, s) {
  const t = C({
    props: o,
    name: "MuiToolbar"
  });
  const {
    className: i,
    component: l = "div",
    disableGutters: p = false,
    variant: e = "regular",
    ...m
  } = t;
  const c = {
    ...t,
    component: l,
    disableGutters: p,
    variant: e
  };
  const x = er(c);
  return <_Component2 as={l} className={I(x.root, i)} ref={s} ownerState={c} {...m} />;
});
const _Component3 = T(<path d="M12 3 4 9v12h5v-7h6v7h5V9z" />);
const pr = {
  alignItems: "center",
  py: 1,
  borderColor: "primary.main",
  borderRadius: 1
};
const cr = {
  minWidth: "40px",
  justifyContent: "center",
  color: "primary.dark"
};
const _Component6 = () => <E component="nav" sx={{
  display: "flex",
  alignItems: "center",
  p: 0,
  m: 0
}}><M component="a" href={w} aria-label="Back to main app" sx={pr}><U sx={cr}><_Component3 /></U><O slotProps={{
      primary: {
        variant: "body2"
      }
    }} primary="Back to main app" /></M></E>;
const _Component8 = f(sr, {
  shouldForwardProp: r => r !== "open"
})(({
  theme: r,
  open: o
}) => ({
  zIndex: r.zIndex.drawer + 1,
  transition: r.transitions.create(["width", "margin"], {
    easing: r.transitions.easing.sharp,
    duration: r.transitions.duration.leavingScreen
  }),
  ...(o && {
    transition: r.transitions.create(["width", "margin"], {
      easing: r.transitions.easing.sharp,
      duration: r.transitions.duration.enteringScreen
    })
  })
}));
const _Component1 = r => {
  const o = z({
    select: l => l.location.pathname.startsWith("/admin")
  });
  const s = b.getDisplayName();
  const t = [s, b.getEmail()].filter(Boolean).join(`
`) || s;
  const i = b.getInitials() || "AI";
  return <_Component5 sx={{
    height: "100vh",
    backgroundColor: "transparent",
    color: "textPrimary",
    display: "flex",
    flexDirection: "column",
    pb: r.noSpacing ? 0 : 10,
    position: "relative"
  }}>{!r.hideHeader && <_Component8 position="fixed" open={true} sx={{
      zIndex: 1001
    }}><_Component7 sx={{
        alignItems: "center",
        px: 3,
        minHeight: 64,
        display: "flex",
        justifyContent: "space-between",
        gap: 4
      }}><_Component5 sx={{
          justifySelf: "start",
          pl: 5,
          a: {
            textDecoration: "none",
            color: "inherit"
          },
          display: "flex",
          alignItems: "center",
          gap: 1
        }}><a href={w}><_Component4 variant="h5">Math Vision</_Component4></a></_Component5><_Component5 sx={{}}><_Component6 /></_Component5><_Component5 sx={{
          justifySelf: "end",
          display: "flex",
          alignItems: "center",
          pr: 2
        }}><G userTooltip={t} userInitials={i} onLogout={P} popperPlacement="bottom-end" sideMenuPlacement={o ? "left" : "right"} showTriggerIdentity={false} /></_Component5></_Component7></_Component8>}<_Component5 sx={r.noSpacing ? {
      display: "flex",
      flex: 1,
      minHeight: 0,
      mt: r.hideHeader ? 0 : "64px"
    } : {
      display: "flex"
    }}><_Component5 sx={r.noSpacing ? {
        width: "100%",
        height: "100%"
      } : {
        p: "90px",
        width: "100%",
        height: "100%"
      }}>{r.children}</_Component5></_Component5></_Component5>;
};
const xr = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
function _Component0() {
  const {
    researchSubmissions: r,
    isResearchSubmissionsLoading: o,
    researchSubmissionsError: s
  } = q();
  const t = g.useMemo(() => r.filter(e => e.submissionType === "problem" || e.problemSubmissionId === null), [r]);
  const i = b.getDisplayName();
  const l = [i, b.getEmail()].filter(Boolean).join(`
`) || i;
  const p = b.getInitials() || "AI";
  return <Q ariaLabel="Research problems" header={<V><_Component5 sx={xr}><_Component4 variant="subtitle2" color="textPrimary" noWrap={true}>Research problems</_Component4><_Component4 variant="caption" color="textSecondary" noWrap={true}>Submission workspace</_Component4></_Component5><D to="/research-problems" search={{
      draft: true
    }} resetScroll={false} tooltip="Create new submission" aria-label="Create new submission" color="secondary"><Z size={20} /></D></V>} resizeHandleAriaLabel="Resize research problems panel" userTooltip={l} userInitials={p} onLogout={P}><_Component5 sx={gr}><_Component5 sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}><_Component4 variant="overline" color="textSecondary">Submitted entries</_Component4><_Component9 label={t.length} size="small" /></_Component5><_Component5 sx={yr}>{o && <_Component4 variant="body2" color="textSecondary">Loading submissions…</_Component4>}{s && <J severity="error">Could not load submissions.</J>}{!o && !s && t.map(e => <H to="/research-problems/$problemId" params={{
          problemId: e.id
        }} resetScroll={false} disableGutters={true} sx={fr} key={e.id}><_Component5 sx={hr}><_Component5 sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              justifyContent: "space-between"
            }}><_Component4 variant="subtitle2" noWrap={true}>{e.title}</_Component4><_Component9 size="small" color={e.submissionType === "problem" ? "primary" : "default"} sx={{
                ml: 0.5,
                textTransform: "capitalize"
              }} label={e.submissionType} /></_Component5><_Component4 variant="caption" color="textSecondary" noWrap={true}><Y date={e.createdAt} /></_Component4></_Component5></H>)}{!o && !s && t.length === 0 && <_Component4 variant="body2" color="textSecondary">No submissions yet.</_Component4>}</_Component5></_Component5></Q>;
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
  padding: "0 0.35rem 0 0.15rem"
};
const yr = {
  minWidth: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem"
};
const fr = r => ({
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
  transition: r.transitions.create(["background-color", "border-color", "box-shadow", "padding"], {
    duration: r.transitions.duration.shortest
  }),
  "&::before": {
    content: "\"\"",
    position: "absolute",
    left: r.spacing(0.45),
    top: r.spacing(0.55),
    bottom: r.spacing(0.55),
    width: 0,
    borderRadius: r.shape.radiusSmPx,
    backgroundColor: r.palette.primary.main,
    opacity: 0,
    transition: r.transitions.create(["opacity", "width"], {
      duration: r.transitions.duration.shortest
    })
  },
  "&:hover": {
    borderColor: u(r.palette.primary.main, 0.16),
    backgroundColor: u(r.palette.text.primary, 0.04)
  },
  "&[data-status=\"active\"]": {
    paddingTop: r.spacing(0.85),
    paddingBottom: r.spacing(0.85),
    paddingLeft: r.spacing(1.5),
    borderColor: u(r.palette.primary.main, 0.32),
    backgroundColor: u(r.palette.primary.main, 0.12),
    boxShadow: `0 14px 30px ${u(r.palette.primary.main, 0.14)}`
  },
  "&[data-status=\"active\"]::before": {
    width: "0.24rem",
    opacity: 1
  },
  "&[data-status=\"active\"]:hover": {
    borderColor: u(r.palette.primary.main, 0.42),
    backgroundColor: u(r.palette.primary.main, 0.16)
  }
});
const hr = {
  width: "100%",
  minWidth: 0
};
const vr = r => ({
  width: "100%",
  height: "100%",
  minHeight: 0,
  display: "flex",
  [r.breakpoints.down(980)]: {
    flexDirection: "column"
  }
});
const Sr = {
  flex: "1 1 auto",
  minWidth: 0,
  minHeight: 0,
  overflow: "auto"
};
const jr = () => {
  const r = W();
  const o = $({
    queryKey: h.submissions(),
    queryFn: X,
    staleTime: 30000
  });
  const {
    mutateAsync: s,
    isPending: t
  } = F({
    mutationFn: _,
    onSuccess: async () => {
      await r.invalidateQueries({
        queryKey: h.submissions()
      });
    }
  });
  const i = g.useCallback(p => s(p), [s]);
  const l = g.useMemo(() => {
    var p;
    var e;
    var m;
    var c;
    var x;
    return {
      researchSubmissions: ((p = o.data) == null ? undefined : p.submissions) ?? [],
      createResearchSubmission: i,
      isCreatingResearchSubmission: t,
      isResearchSubmissionsLoading: o.isPending,
      researchSubmissionsError: o.isError ? o.error : null,
      isPilotIntakeOpen: ((e = o.data) == null ? undefined : e.isPilotIntakeOpen) ?? false,
      pilotSubmissionLimit: ((m = o.data) == null ? undefined : m.pilotSubmissionLimit) ?? 0,
      remainingPilotSubmissionSlots: ((c = o.data) == null ? undefined : c.remainingPilotSubmissionSlots) ?? 0,
      attachmentMaxCount: ((x = o.data) == null ? undefined : x.attachmentMaxCount) ?? 0
    };
  }, [i, t, o.data, o.error, o.isError, o.isPending]);
  return <_Component1 noSpacing={true}><K.Provider value={l}><_Component5 sx={vr}><_Component0 /><_Component5 component="main" sx={Sr}><N /></_Component5></_Component5></K.Provider></_Component1>;
};
const Kr = jr;
export { Kr as component };
