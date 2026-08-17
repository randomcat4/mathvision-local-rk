import { useCallback, useEffect, useMemo, useState, type FormEvent } from "#production-react";
import {
  useBundledMutation,
  useBundledQueryClient,
} from "../../runtime/queryRuntime.js";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  PERSONALIZATION_CHARACTER_LIMIT,
  PersonalizationIcon,
  profileQueryKeys,
  Stack,
  TextField,
  toast,
  updatePersonalization,
  type UserProfile,
} from "../../runtime/personalizationRuntime.js";

export interface PersonalizationDialogProps {
  open: boolean;
  personalization: string;
  isProfileLoading: boolean;
  onClose(): void;
}

export default function PersonalizationDialog({
  open,
  personalization,
  isProfileLoading,
  onClose,
}: PersonalizationDialogProps) {
  const queryClient = useBundledQueryClient();
  const [draft, setDraft] = useState(personalization);
  const trimmedDraft = useMemo(() => draft.trim(), [draft]);
  const trimmedSaved = useMemo(() => personalization.trim(), [personalization]);
  const changed = useMemo(() => trimmedDraft !== trimmedSaved, [trimmedDraft, trimmedSaved]);
  const onSuccess = useCallback(
    (profile: UserProfile) => {
      queryClient.setQueryData(profileQueryKeys.currentProfile(), profile);
      setDraft(profile.personalization);
      toast.success("Personalization saved.");
      onClose();
    },
    [onClose, queryClient],
  );
  const mutation = useBundledMutation<string, UserProfile>({
    mutationFn: updatePersonalization,
    onSuccess,
  });
  const canSave =
    changed && draft.length <= PERSONALIZATION_CHARACTER_LIMIT && !isProfileLoading && !mutation.isPending;
  const disabled = isProfileLoading || mutation.isPending;
  const slotProps = useMemo(
    () => ({ htmlInput: { maxLength: PERSONALIZATION_CHARACTER_LIMIT } }),
    [],
  );
  const startIcon = useMemo(() => <PersonalizationIcon fontSize="small" />, []);
  useEffect(() => {
    if (open) setDraft(personalization);
  }, [open, personalization]);
  const close = useCallback(() => {
    if (!mutation.isPending) {
      setDraft(personalization);
      onClose();
    }
  }, [mutation.isPending, onClose, personalization]);
  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (canSave) mutation.mutate(trimmedDraft);
    },
    [canSave, mutation, trimmedDraft],
  );

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="profile-personalization-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <Box component="form" onSubmit={submit}>
        <DialogTitle id="profile-personalization-title">Personalization</DialogTitle>
        <DialogContent dividers={true}>
          <Stack spacing={2}>
            <TextField
              id="profile-custom-instructions"
              label="Custom instructions"
              value={draft}
              disabled={disabled}
              placeholder="Tell the assistant to behave or change its tone, etc."
              fullWidth={true}
              multiline={true}
              minRows={7}
              maxRows={12}
              helperText={`${draft.length}/${PERSONALIZATION_CHARACTER_LIMIT}`}
              onChange={(event: { target: { value: string } }) => setDraft(event.target.value)}
              slotProps={slotProps}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="button" color="secondary" disabled={mutation.isPending} onClick={close}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={!canSave} startIcon={startIcon}>
            {mutation.isPending ? "Saving..." : "Save changes"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
