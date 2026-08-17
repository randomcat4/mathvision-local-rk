import { useMemo, useState, type ChangeEvent, type FormEvent } from "#production-react";

import {
  Alert,
  alpha,
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  getCurrentProfile,
  getErrorMessage,
  Link,
  LogoutIcon,
  MenuItem,
  PROFILE_STALE_TIME_MS,
  profileQueryKeys,
  RefreshIcon,
  SavedIcon,
  signOut,
  Stack,
  TextField,
  Typography,
  updateWaitlistInfo,
  WAITLIST_HEARD_ABOUT_OPTIONS,
  type AccessStatusProfile,
} from "../../runtime/accessStatusRuntime.js";
import {
  useBundledMutation,
  useBundledQuery,
  useBundledQueryClient,
} from "../../runtime/queryRuntime.js";

interface WaitlistDraft {
  affiliation: string;
  heardAbout: string;
  referredBy: string;
}

function WaitlistSignupForm() {
  const queryClient = useBundledQueryClient();
  const [draftOverride, setDraftOverride] = useState<WaitlistDraft | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const profileQuery = useBundledQuery({
    queryKey: profileQueryKeys.currentProfile(),
    queryFn: getCurrentProfile,
    staleTime: PROFILE_STALE_TIME_MS,
  });
  const savedDraft = useMemo(
    () => ({
      affiliation: profileQuery.data?.waitlistAffiliation ?? "",
      heardAbout: profileQuery.data?.waitlistHeardAbout ?? "Prefer not to say",
      referredBy: profileQuery.data?.waitlistReferredBy ?? "",
    }),
    [
      profileQuery.data?.waitlistAffiliation,
      profileQuery.data?.waitlistHeardAbout,
      profileQuery.data?.waitlistReferredBy,
    ],
  );
  const draft = draftOverride ?? savedDraft;
  const referralSelected = draft.heardAbout === "Referral";
  const affiliation = draft.affiliation.trim();
  const referredBy = draft.referredBy.trim();
  const affiliationError = submitted && !affiliation ? "Affiliation is required." : "";
  const referralError =
    submitted && referralSelected && !referredBy
      ? "Who referred you is required when Referral is selected."
      : "";
  const mutation = useBundledMutation<
    { affiliation: string; heardAbout: string; referredBy: string | null },
    AccessStatusProfile
  >({
    mutationFn: updateWaitlistInfo,
    onSuccess: (profile) => {
      queryClient.setQueryData(profileQueryKeys.currentProfile(), profile);
      setDraftOverride(null);
      setSubmitted(false);
    },
  });
  const disabled = mutation.isPending || (profileQuery.isLoading && !profileQuery.data);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (affiliation && (!referralSelected || referredBy)) {
      mutation.mutate({
        affiliation,
        heardAbout: draft.heardAbout,
        referredBy: referralSelected ? referredBy : null,
      });
    }
  };

  return (
    <Box component="form" sx={{ width: "100%" }} onSubmit={submit}>
      <Stack spacing={2}>
        <Stack spacing={0.75}><Typography variant="h5">Sign up for the waitlist</Typography></Stack>
        {profileQuery.isLoading && !profileQuery.data ? (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <CircularProgress size={18} />
            <Typography variant="body2" color="textSecondary">
              Loading saved waitlist information
            </Typography>
          </Stack>
        ) : null}
        {profileQuery.isError ? <Alert severity="warning">{getErrorMessage(profileQuery.error)}</Alert> : null}
        {mutation.isError ? <Alert severity="error">{getErrorMessage(mutation.error)}</Alert> : null}
        {mutation.isSuccess && draftOverride === null ? (
          <Alert severity="success">Waitlist information saved.</Alert>
        ) : null}
        <TextField
          disabled={disabled}
          error={Boolean(affiliationError)}
          fullWidth={true}
          helperText={affiliationError || ""}
          label="Affiliation"
          required={true}
          value={draft.affiliation}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDraftOverride({ ...draft, affiliation: event.target.value })
          }
        />
        <TextField
          disabled={disabled}
          fullWidth={true}
          label="How did you first hear about us?"
          select={true}
          value={draft.heardAbout}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const heardAbout = WAITLIST_HEARD_ABOUT_OPTIONS.find(
              (option) => option === event.target.value,
            );
            if (!heardAbout) throw new Error("Invalid waitlist heard-about option.");
            setDraftOverride({
              ...draft,
              heardAbout,
              referredBy: heardAbout === "Referral" ? draft.referredBy : "",
            });
          }}
        >
          {WAITLIST_HEARD_ABOUT_OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
          ))}
        </TextField>
        {referralSelected ? (
          <TextField
            disabled={disabled}
            error={Boolean(referralError)}
            fullWidth={true}
            helperText={referralError || ""}
            label="Who referred you?"
            required={true}
            value={draft.referredBy}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setDraftOverride({ ...draft, referredBy: event.target.value })
            }
          />
        ) : null}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.25}
          sx={{ alignItems: { xs: "stretch", sm: "center" } }}
        >
          <Button disabled={disabled} startIcon={<SavedIcon />} type="submit" variant="contained">
            {profileQuery.data?.waitlistAffiliation ? "Update Waitlist Info" : "Save Waitlist Info"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

function SessionActions() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
      <Button variant="contained" startIcon={<RefreshIcon fontSize="small" />} onClick={() => window.location.reload()}>
        Refresh
      </Button>
      <Button color="secondary" startIcon={<LogoutIcon fontSize="small" />} onClick={() => signOut()}>
        Sign Out
      </Button>
    </Stack>
  );
}

function LegalLinks({ color = "textSecondary" }: { color?: string }) {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/terms" color={color}><Typography variant="caption" color={color}>Terms of Service</Typography></Link>
      <Link to="/privacy" color={color}><Typography variant="caption" color={color}>Privacy Policy</Typography></Link>
    </Stack>
  );
}

export interface AccessStatusPageProps {
  title: string;
  message: string;
  layout?: "centered" | "split";
  showWaitlistSignupForm?: boolean;
}

function CenteredAccessStatus({ title, message, showWaitlistSignupForm }: AccessStatusPageProps) {
  return (
    <Box sx={{ minHeight: "100dvh", display: "grid", placeItems: "center", px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 } }}>
      <Card variant="panel" sx={{ width: "100%", maxWidth: 620, p: { xs: 3, md: 5 } }}>
        <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
          <Stack spacing={1.5}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" color="textSecondary">{message}</Typography>
          </Stack>
          {showWaitlistSignupForm ? <WaitlistSignupForm /> : null}
          <SessionActions />
          <LegalLinks />
        </Stack>
      </Card>
    </Box>
  );
}

function SplitAccessStatus({ title, message, showWaitlistSignupForm }: AccessStatusPageProps) {
  return (
    <Box sx={{ minHeight: "100dvh", display: "grid", placeItems: "center", px: { xs: 2, md: 5 }, py: { xs: 2, md: 5 } }}>
      <Card
        variant="panel"
        sx={{
          width: "100%",
          maxWidth: 1180,
          minHeight: { md: 680 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" },
          overflow: "hidden",
          p: 0,
        }}
      >
        <Stack
          sx={{
            minHeight: { xs: 420, md: "auto" },
            p: { xs: 3, sm: 4, md: 5 },
            background: (theme: { palette: { background: { paper: string }; grey: Record<number, string>; primary: { main: string } } }) =>
              `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.grey[100], 0.05)} 48%, ${alpha(theme.palette.primary.main, 0.08)} 100%)`,
          }}
        >
          <Stack spacing={4} sx={{ flexGrow: 1, justifyContent: "space-between", alignItems: "flex-start" }}>
            <Stack spacing={{ xs: 5, md: 9 }} sx={{ alignItems: "flex-start" }}>
              <Typography variant="h3">{title}</Typography>
            </Stack>
            <Stack spacing={3} sx={{ width: "100%" }}>
              <Typography variant="body1" color="textSecondary">{message}</Typography>
              <SessionActions />
              <Divider />
              <LegalLinks />
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ minHeight: { xs: 520, md: "auto" }, alignItems: "center", justifyContent: "center", p: { xs: 3, sm: 4, md: 6 } }}>
          <Stack spacing={3} sx={{ width: "100%", maxWidth: 460 }}>
            {showWaitlistSignupForm ? <WaitlistSignupForm /> : null}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export function AccessStatusPage(props: AccessStatusPageProps) {
  return props.layout === "split" ? <SplitAccessStatus {...props} /> : <CenteredAccessStatus {...props} />;
}
