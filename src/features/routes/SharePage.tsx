import {
  AutoAwesomeRounded,
  Box,
  LinkButton,
  Outlet,
  Stack,
  Typography,
  useLocation,
} from "../../runtime/routeUiRuntime.js";

export function SharePage() {
  const location = useLocation();
  if (location.pathname !== "/share" && location.pathname !== "/share/") return <Outlet />;
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 6,
        bgcolor: "background.default",
      }}
    >
      <Stack spacing={2} sx={{ maxWidth: 560, textAlign: "center" }}>
        <AutoAwesomeRounded color="primary" sx={{ alignSelf: "center", fontSize: 44 }} />
        <Typography variant="h3">Shared Math Vision</Typography>
        <Typography color="textSecondary">Shared chats are available without signing in.</Typography>
        <LinkButton to="/" variant="contained" sx={{ alignSelf: "center" }}>
          Open app
        </LinkButton>
      </Stack>
    </Box>
  );
}
