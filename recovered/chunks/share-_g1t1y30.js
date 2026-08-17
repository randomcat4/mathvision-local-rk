import { j as e, O as a, B as o, S as r, T as t, M as i } from "./index-BM3ZINIl.js";
import { A as s } from "./AutoAwesomeRounded-DwWNeeYP.js";
import { u as c } from "./useLocation-BxGXieoN.js";
function p() {
  const n = c();
  return n.pathname === "/share" || n.pathname === "/share/"
    ? e.jsx(o, {
        sx: {
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          py: 6,
          bgcolor: "background.default",
        },
        children: e.jsxs(r, {
          spacing: 2,
          sx: { maxWidth: 560, textAlign: "center" },
          children: [
            e.jsx(s, { color: "primary", sx: { alignSelf: "center", fontSize: 44 } }),
            e.jsx(t, { variant: "h3", children: "Shared Math Vision" }),
            e.jsx(t, {
              color: "textSecondary",
              children: "Shared chats are available without signing in.",
            }),
            e.jsx(i, {
              to: "/",
              variant: "contained",
              sx: { alignSelf: "center" },
              children: "Open app",
            }),
          ],
        }),
      })
    : e.jsx(a, {});
}
export { p as component };
