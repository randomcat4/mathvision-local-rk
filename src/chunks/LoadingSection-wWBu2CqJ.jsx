import {
  ab as q,
  am as I,
  r as N,
  F as O,
  aP as z,
  j as s,
  H as A,
  a8 as v,
  I as B,
  K as d,
  a3 as b,
  aV as p,
  aW as C,
  aX as L,
  E,
  ad as S,
} from "./index-BM3ZINIl.jsx";
function w(a) {
  return q("MuiLinearProgress", a);
}
I("MuiLinearProgress", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "determinate",
  "indeterminate",
  "buffer",
  "query",
  "dashed",
  "bar",
  "bar1",
  "bar2",
]);
const h = 4;
const x = L`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;
const T =
  typeof x != "string"
    ? C`
        animation: ${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `
    : null;
const k = L`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;
const U =
  typeof k != "string"
    ? C`
        animation: ${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `
    : null;
const P = L`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;
const D =
  typeof P != "string"
    ? C`
        animation: ${P} 3s infinite linear;
      `
    : null;
const K = (a) => {
  const { classes: r, variant: t, color: n } = a;
  const e = {
    root: ["root", `color${v(n)}`, t],
    dashed: ["dashed"],
    bar1: ["bar", "bar1"],
    bar2: ["bar", "bar2", t === "buffer" && `color${v(n)}`],
  };
  return B(e, w, r);
};
const $ = (a, r) =>
  a.vars
    ? a.vars.palette.LinearProgress[`${r}Bg`]
    : a.palette.mode === "light"
      ? a.lighten(a.palette[r].main, 0.62)
      : a.darken(a.palette[r].main, 0.5);
const V = d("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const { ownerState: t } = a;
    return [r.root, r[`color${v(t.color)}`], r[t.variant]];
  },
})(
  b(({ theme: a }) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact",
    },
    variants: [
      ...Object.entries(a.palette)
        .filter(p())
        .map(([r]) => ({
          props: {
            color: r,
          },
          style: {
            backgroundColor: $(a, r),
          },
        })),
      {
        props: ({ ownerState: r }) =>
          r.color === "inherit" && r.variant !== "buffer",
        style: {
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "currentColor",
            opacity: 0.3,
          },
        },
      },
      {
        props: {
          variant: "buffer",
        },
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        props: {
          variant: "query",
        },
        style: {
          transform: "rotate(180deg)",
        },
      },
    ],
  })),
);
const X = d("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
})(
  b(({ theme: a }) => ({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px",
    variants: [
      {
        props: {
          color: "inherit",
        },
        style: {
          opacity: 0.3,
          backgroundImage:
            "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)",
        },
      },
      ...Object.entries(a.palette)
        .filter(p())
        .map(([r]) => {
          const t = $(a, r);
          return {
            props: {
              color: r,
            },
            style: {
              backgroundImage: `radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,
            },
          };
        }),
    ],
  })),
  D || {
    animation: `${P} 3s infinite linear`,
  },
);
const _ = d("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (a, r) => [r.bar, r.bar1],
})(
  b(({ theme: a }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      {
        props: {
          color: "inherit",
        },
        style: {
          backgroundColor: "currentColor",
        },
      },
      ...Object.entries(a.palette)
        .filter(p())
        .map(([r]) => ({
          props: {
            color: r,
          },
          style: {
            backgroundColor: (a.vars || a).palette[r].main,
          },
        })),
      {
        props: {
          variant: "determinate",
        },
        style: {
          transition: `transform .${h}s linear`,
        },
      },
      {
        props: {
          variant: "buffer",
        },
        style: {
          zIndex: 1,
          transition: `transform .${h}s linear`,
        },
      },
      {
        props: ({ ownerState: r }) =>
          r.variant === "indeterminate" || r.variant === "query",
        style: {
          width: "auto",
        },
      },
      {
        props: ({ ownerState: r }) =>
          r.variant === "indeterminate" || r.variant === "query",
        style: T || {
          animation: `${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
        },
      },
    ],
  })),
);
const F = d("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (a, r) => [r.bar, r.bar2],
})(
  b(({ theme: a }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      ...Object.entries(a.palette)
        .filter(p())
        .map(([r]) => ({
          props: {
            color: r,
          },
          style: {
            "--LinearProgressBar2-barColor": (a.vars || a).palette[r].main,
          },
        })),
      {
        props: ({ ownerState: r }) =>
          r.variant !== "buffer" && r.color !== "inherit",
        style: {
          backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)",
        },
      },
      {
        props: ({ ownerState: r }) =>
          r.variant !== "buffer" && r.color === "inherit",
        style: {
          backgroundColor: "currentColor",
        },
      },
      {
        props: {
          color: "inherit",
        },
        style: {
          opacity: 0.3,
        },
      },
      ...Object.entries(a.palette)
        .filter(p())
        .map(([r]) => ({
          props: {
            color: r,
            variant: "buffer",
          },
          style: {
            backgroundColor: $(a, r),
            transition: `transform .${h}s linear`,
          },
        })),
      {
        props: ({ ownerState: r }) =>
          r.variant === "indeterminate" || r.variant === "query",
        style: {
          width: "auto",
        },
      },
      {
        props: ({ ownerState: r }) =>
          r.variant === "indeterminate" || r.variant === "query",
        style: U || {
          animation: `${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
        },
      },
    ],
  })),
);
const H = N.forwardRef(function (r, t) {
  const n = O({
    props: r,
    name: "MuiLinearProgress",
  });
  const {
    className: e,
    color: m = "primary",
    value: g,
    valueBuffer: j,
    variant: i = "indeterminate",
    ...R
  } = n;
  const l = {
    ...n,
    color: m,
    variant: i,
  };
  const c = K(l);
  const M = z();
  const u = {};
  const f = {
    bar1: {},
    bar2: {},
  };
  if ((i === "determinate" || i === "buffer") && g !== undefined) {
    u["aria-valuenow"] = Math.round(g);
    u["aria-valuemin"] = 0;
    u["aria-valuemax"] = 100;
    let o = g - 100;
    if (M) {
      o = -o;
    }
    f.bar1.transform = `translateX(${o}%)`;
  }
  if (i === "buffer" && j !== undefined) {
    let o = (j || 0) - 100;
    if (M) {
      o = -o;
    }
    f.bar2.transform = `translateX(${o}%)`;
  }
  return (
    <V
      className={A(c.root, e)}
      ownerState={l}
      role="progressbar"
      {...u}
      ref={t}
      {...R}
    >
      {i === "buffer" ? <X className={c.dashed} ownerState={l} /> : null}
      <_ className={c.bar1} ownerState={l} style={f.bar1} />
      {i === "determinate" ? null : (
        <F className={c.bar2} ownerState={l} style={f.bar2} />
      )}
    </V>
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = [
  [
    "path",
    {
      d: "M15 3h6v6",
      key: "1q9fwt",
    },
  ],
  [
    "path",
    {
      d: "M10 14 21 3",
      key: "gplh6r",
    },
  ],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
];
const J = E("external-link", W);
const y = {
  width: "75%",
  mx: "auto",
};
function Q({ title: a, subtitle: r, icon: t, sx: n, sxLoading: e }) {
  const m = e === undefined ? y : Array.isArray(e) ? [y, ...e] : [y, e];
  return (
    <S title={a} subtitle={r} icon={t} sx={n}>
      <H sx={m} />
    </S>
  );
}
export { J as E, Q as L, H as a };
