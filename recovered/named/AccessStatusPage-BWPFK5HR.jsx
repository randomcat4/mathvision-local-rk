import {
  j as e,
  B as S,
  e as H,
  S as _Component2,
  f as M,
  T as _Component,
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
import { L as _Component6 } from "./LogoutRounded-BsETu1qq.js";
import { u as re } from "./useQuery-DM2qiUYb.js";
import { u as te } from "./useMutation-C1SgG9wr.js";
import { D as _Component8 } from "./Divider-BcuihGce.js";
import { A as _Component3 } from "./Alert-DnFVD8li.js";
import { T as _Component4 } from "./TextField-D8vc_sXz.js";
import { C as _Component5 } from "./circle-check-big-D9HEGJKD.js";
function F() {
  var B;
  var R;
  var W;
  var T;
  const s = N();
  const [o, n] = y.useState(null);
  const [l, u] = y.useState(false);
  const i = re({
    queryKey: L.currentProfile(),
    queryFn: Z,
    staleTime: Y,
  });
  const V = y.useMemo(() => {
    var r;
    var c;
    var m;
    return {
      affiliation:
        ((r = i.data) == null ? undefined : r.waitlistAffiliation) ?? "",
      heardAbout:
        ((c = i.data) == null ? undefined : c.waitlistHeardAbout) ??
        "Prefer not to say",
      referredBy:
        ((m = i.data) == null ? undefined : m.waitlistReferredBy) ?? "",
    };
  }, [
    (B = i.data) == null ? undefined : B.waitlistAffiliation,
    (R = i.data) == null ? undefined : R.waitlistHeardAbout,
    (W = i.data) == null ? undefined : W.waitlistReferredBy,
  ]);
  const a = o ?? V;
  const f = a.heardAbout === "Referral";
  const p = a.affiliation.trim();
  const g = a.referredBy.trim();
  const b = l && !p ? "Affiliation is required." : "";
  const I =
    l && f && !g
      ? "Who referred you is required when Referral is selected."
      : "";
  const C = i.isError ? P(i.error) : null;
  const _ = (T = i.data) != null && !!T.waitlistAffiliation;
  const x = te({
    mutationFn: G,
    onSuccess: (r) => {
      s.setQueryData(L.currentProfile(), r);
      n(null);
      u(false);
    },
  });
  const h = x.isPending || (i.isLoading && !i.data);
  const U = (r) => {
    n({
      ...a,
      affiliation: r.target.value,
    });
  };
  const O = (r) => {
    const c = k.find((m) => m === r.target.value);
    if (!c) {
      throw new Error("Invalid waitlist heard-about option.");
    }
    n({
      ...a,
      heardAbout: c,
      referredBy: c === "Referral" ? a.referredBy : "",
    });
  };
  const Q = (r) => {
    n({
      ...a,
      referredBy: r.target.value,
    });
  };
  const z = (r) => {
    r.preventDefault();
    u(true);
    if (!!p && (!f || !!g)) {
      x.mutate({
        affiliation: p,
        heardAbout: a.heardAbout,
        referredBy: f ? g : null,
      });
    }
  };
  return (
    <S
      component="form"
      sx={{
        width: "100%",
      }}
      onSubmit={z}
    >
      <_Component2 spacing={2}>
        <_Component2 spacing={0.75}>
          <_Component variant="h5">Sign up for the waitlist</_Component>
        </_Component2>
        {i.isLoading && !i.data ? (
          <_Component2
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <J size={18} />
            <_Component variant="body2" color="textSecondary">
              Loading saved waitlist information
            </_Component>
          </_Component2>
        ) : null}
        {C ? <_Component3 severity="warning">{C}</_Component3> : null}
        {x.isError ? (
          <_Component3 severity="error">{P(x.error)}</_Component3>
        ) : null}
        {x.isSuccess && o === null ? (
          <_Component3 severity="success">
            Waitlist information saved.
          </_Component3>
        ) : null}
        <_Component4
          disabled={h}
          error={!!b}
          fullWidth={true}
          helperText={b || ""}
          label="Affiliation"
          required={true}
          value={a.affiliation}
          onChange={U}
        />
        <_Component4
          disabled={h}
          fullWidth={true}
          label="How did you first hear about us?"
          select={true}
          value={a.heardAbout}
          onChange={O}
        >
          {k.map((r) => (
            <X value={r} key={r}>
              {r}
            </X>
          ))}
        </_Component4>
        {f ? (
          <_Component4
            disabled={h}
            error={!!I}
            fullWidth={true}
            helperText={I || ""}
            label="Who referred you?"
            required={true}
            value={a.referredBy}
            onChange={Q}
          />
        ) : null}
        <_Component2
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.25}
          sx={{
            alignItems: {
              xs: "stretch",
              sm: "center",
            },
          }}
        >
          <A
            disabled={h}
            startIcon={<_Component5 />}
            type="submit"
            variant="contained"
          >
            {_ ? "Update Waitlist Info" : "Save Waitlist Info"}
          </A>
        </_Component2>
      </_Component2>
    </S>
  );
}
function _Component7() {
  return (
    <_Component2
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={1.25}
    >
      <A
        variant="contained"
        startIcon={<$ fontSize="small" />}
        onClick={() => window.location.reload()}
      >
        Refresh
      </A>
      <A
        color="secondary"
        startIcon={<_Component6 fontSize="small" />}
        onClick={() => K()}
      >
        Sign Out
      </A>
    </_Component2>
  );
}
function D({ color: s = "textSecondary" }) {
  return (
    <_Component2 direction="row" spacing={2}>
      <E to="/terms" color={s}>
        <_Component variant="caption" color={s}>
          Terms of Service
        </_Component>
      </E>
      <E to="/privacy" color={s}>
        <_Component variant="caption" color={s}>
          Privacy Policy
        </_Component>
      </E>
    </_Component2>
  );
}
function _Component0({ title: s, message: o, showWaitlistSignupForm: n }) {
  return (
    <S
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        px: {
          xs: 2,
          md: 3,
        },
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <H
        variant="panel"
        sx={{
          width: "100%",
          maxWidth: 620,
          p: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <_Component2
          spacing={3}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <M
            variant="mark"
            alt="Math Vision"
            sx={{
              width: 72,
              height: 72,
            }}
          />
          <_Component2 spacing={1.5}>
            <_Component variant="h4">{s}</_Component>
            <_Component variant="body1" color="textSecondary">
              {o}
            </_Component>
          </_Component2>
          {n ? <F /> : null}
          <_Component7 />
          <D />
        </_Component2>
      </H>
    </S>
  );
}
function _Component9({ title: s, message: o, showWaitlistSignupForm: n }) {
  return (
    <S
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        px: {
          xs: 2,
          md: 5,
        },
        py: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <H
        variant="panel"
        sx={{
          width: "100%",
          maxWidth: 1180,
          minHeight: {
            md: 680,
          },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) minmax(0, 1fr)",
          },
          overflow: "hidden",
          p: 0,
        }}
      >
        <_Component2
          sx={{
            minHeight: {
              xs: 420,
              md: "auto",
            },
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            background: (l) =>
              `linear-gradient(135deg, ${j(l.palette.background.paper, 0.98)} 0%, ${j(l.palette.grey[100], 0.05)} 48%, ${j(l.palette.primary.main, 0.08)} 100%)`,
          }}
        >
          <_Component2
            spacing={4}
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <_Component2
              spacing={{
                xs: 5,
                md: 9,
              }}
              sx={{
                alignItems: "flex-start",
              }}
            >
              <M
                variant="mark"
                alt="Math Vision"
                sx={{
                  width: 68,
                  height: 68,
                }}
              />
              <_Component variant="h3">{s}</_Component>
            </_Component2>
            <_Component2
              spacing={3}
              sx={{
                width: "100%",
              }}
            >
              <_Component variant="body1" color="textSecondary">
                {o}
              </_Component>
              <_Component7 />
              <_Component8 />
              <D />
            </_Component2>
          </_Component2>
        </_Component2>
        <_Component2
          sx={{
            minHeight: {
              xs: 520,
              md: "auto",
            },
            alignItems: "center",
            justifyContent: "center",
            p: {
              xs: 3,
              sm: 4,
              md: 6,
            },
          }}
        >
          <_Component2
            spacing={3}
            sx={{
              width: "100%",
              maxWidth: 460,
            }}
          >
            {n ? <F /> : null}
          </_Component2>
        </_Component2>
      </H>
    </S>
  );
}
function AccessStatusPage({
  title: s,
  message: o,
  layout: n = "centered",
  showWaitlistSignupForm: l = false,
}) {
  const u = {
    title: s,
    message: o,
    showWaitlistSignupForm: l,
  };
  if (n === "split") {
    return <_Component9 {...u} />;
  } else {
    return <_Component0 {...u} />;
  }
}
export { AccessStatusPage as A };
