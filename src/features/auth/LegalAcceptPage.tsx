import { createElement, useEffect } from "#production-react";

import {
  ACCESS_STALE_TIME_MS,
  acceptLegalTerms,
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  createMuiSvgIcon,
  Divider,
  FullPageLoading,
  getCurrentAccess,
  getErrorMessage,
  Link,
  LogoutIcon,
  profileQueryKeys,
  SecondaryButton,
  signOut,
  Stack,
  Typography,
  useNavigate,
  useRouter,
  type CurrentAccess,
} from "../../runtime/legalAcceptRuntime.js";
import {
  useBundledMutation,
  useBundledQuery,
  useBundledQueryClient,
} from "../../runtime/queryRuntime.js";

const AgreeIcon = createMuiSvgIcon(
  createElement("path", {
    d: "m21.29 5.89-10 10c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 9.29-9.29c.39-.39 1.02-.39 1.41 0 .4.39.4 1.02.01 1.41m-5.52-3.15c-1.69-.69-3.61-.93-5.61-.57-4.07.73-7.32 4.01-8.01 8.08C1.01 17 6.63 22.78 13.34 21.91c3.96-.51 7.28-3.46 8.32-7.31.4-1.47.44-2.89.21-4.22-.13-.8-1.12-1.11-1.7-.54-.23.23-.33.57-.27.89.22 1.33.12 2.75-.52 4.26-1.16 2.71-3.68 4.7-6.61 4.97-5.1.47-9.33-3.85-8.7-8.98.43-3.54 3.28-6.42 6.81-6.91 1.73-.24 3.37.09 4.77.81.39.2.86.13 1.17-.18.48-.48.36-1.29-.24-1.6-.27-.12-.54-.25-.81-.36",
  }),
);

export function LegalAcceptPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const queryClient = useBundledQueryClient();
  const accessQuery = useBundledQuery({
    queryKey: profileQueryKeys.currentAccess(),
    queryFn: getCurrentAccess,
    staleTime: ACCESS_STALE_TIME_MS,
  });
  const mutation = useBundledMutation<void, CurrentAccess>({
    mutationFn: acceptLegalTerms,
    onSuccess: async (access) => {
      queryClient.setQueryData(profileQueryKeys.currentAccess(), access);
      await navigate({
        to: access.disabled ? "/account-disabled" : access.allow ? "/chats" : "/waitlist",
        replace: true,
      });
    },
  });
  const access = accessQuery.data;
  useEffect(() => {
    if (!access?.allow) return;
    const chatsRoute = router.routesById["/chats"];
    if (!chatsRoute) {
      console.error("The chats route is unavailable for preloading.");
      return;
    }
    router.loadRouteChunk(chatsRoute)?.catch((error: unknown) => {
      console.error("Failed to preload the chats route.", error);
    });
  }, [access?.allow, router]);
  const error = accessQuery.isError
    ? getErrorMessage(accessQuery.error)
    : mutation.isError
      ? getErrorMessage(mutation.error)
      : null;
  if (mutation.isPending) return <FullPageLoading />;

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "background.default",
        backgroundImage: "var(--app-shell-background)",
        px: { xs: 2, md: 3 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ p: { xs: 3, md: 5 } }}>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h4">Review Math Vision terms</Typography>
              <Typography variant="body1" color="textSecondary">
                Please review and accept the current Terms of Service before continuing.
              </Typography>
            </Stack>
            <Divider />
            {accessQuery.isLoading ? (
              <Stack spacing={1.5} sx={{ alignItems: "center", py: 3 }}>
                <CircularProgress size={28} />
                <Typography variant="body2" color="textSecondary">Loading account status</Typography>
              </Stack>
            ) : (
              <Stack spacing={2}>
                <Stack spacing={0.75}>
                  <Typography variant="subtitle2">
                    <Link to="/terms" target="_blank" rel="noreferrer">
                      Terms version: {access?.termsVersion ?? "Current"}
                    </Link>
                  </Typography>
                  <Typography variant="subtitle2">
                    <Link to="/privacy" target="_blank" rel="noreferrer">
                      Privacy policy version: {access?.privacyPolicyVersion ?? "Current"}
                    </Link>
                  </Typography>
                </Stack>
                {error ? <Alert severity="error">{error}</Alert> : null}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                  <Button
                    variant="contained"
                    startIcon={<AgreeIcon fontSize="small" />}
                    disabled={accessQuery.fetchStatus === "fetching"}
                    onClick={() => mutation.mutate(undefined)}
                  >
                    Agree
                  </Button>
                  <SecondaryButton
                    color="secondary"
                    startIcon={<LogoutIcon fontSize="small" />}
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </SecondaryButton>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
