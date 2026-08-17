import { j as e, O as _Component6, B as _Component5, S as _Component4, T as _Component2, M as _Component3 } from "./index-BM3ZINIl.js";
import { A as _Component } from "./AutoAwesomeRounded-DwWNeeYP.js";
import { u as c } from "./useLocation-BxGXieoN.js";
function p() {
  const n = c();
  if (n.pathname === "/share" || n.pathname === "/share/") {
    return <_Component5 sx={{
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 3,
      py: 6,
      bgcolor: "background.default"
    }}><_Component4 spacing={2} sx={{
        maxWidth: 560,
        textAlign: "center"
      }}><_Component color="primary" sx={{
          alignSelf: "center",
          fontSize: 44
        }} /><_Component2 variant="h3">Shared Math Vision</_Component2><_Component2 color="textSecondary">Shared chats are available without signing in.</_Component2><_Component3 to="/" variant="contained" sx={{
          alignSelf: "center"
        }}>Open app</_Component3></_Component4></_Component5>;
  } else {
    return <_Component6 />;
  }
}
export { p as component };
