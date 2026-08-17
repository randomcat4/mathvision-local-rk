import { useState, type FormEvent } from "#production-react";
import {
  sendFeedbackReport,
  type FeedbackReport,
  type ReportKind,
} from "../../api/reports/feedback";
import { useBundledMutation } from "../../runtime/queryRuntime.js";
import {
  Button,
  CloseIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  getErrorMessage,
  Radio,
  RadioGroup,
  SendIcon,
  Stack,
  TextField,
  toast,
  TooltipIconButton,
  Typography,
} from "../../runtime/reportUiRuntime.js";

const REPORT_CHARACTER_LIMIT = 4_000;
const reportKinds: Array<{ value: ReportKind; label: string }> = [
  { value: "bug", label: "Bug" },
  { value: "feedback", label: "Feedback" },
];
const titleStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
};
const contentStyles = { display: "flex", flexDirection: "column", gap: 2 };

export interface ReportFeedbackDialogProps {
  open: boolean;
  selectedChat?: { id: string } | null;
  onClose(): void;
}

export function ReportFeedbackDialog({
  open,
  selectedChat,
  onClose,
}: ReportFeedbackDialogProps) {
  const [kind, setKind] = useState<ReportKind>("bug");
  const [message, setMessage] = useState("");
  const mutation = useBundledMutation<FeedbackReport>({ mutationFn: sendFeedbackReport });
  const trimmedMessage = message.trim();
  const isSending = mutation.isPending;
  const reset = () => {
    setKind("bug");
    setMessage("");
    mutation.reset();
  };
  const close = () => {
    if (isSending) return;
    onClose();
    reset();
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!trimmedMessage) return;
    mutation.mutate(
      {
        kind,
        message: trimmedMessage,
        chatId: selectedChat?.id ?? null,
        pageUrl: window.location.href,
      },
      {
        onSuccess: () => {
          toast.success("Report sent. Thank you for the help.");
          onClose();
          reset();
        },
        onError: (error) => {
          toast.error(getErrorMessage(error) || "Could not send this report.");
        },
      },
    );
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth={true} onClose={close}>
      <Stack component="form" onSubmit={submit}>
        <DialogTitle sx={titleStyles}>
          Report bug or feedback
          <TooltipIconButton
            tooltip="Close"
            aria-label="Close report dialog"
            disabled={isSending}
            onClick={close}
          >
            <CloseIcon size={18} />
          </TooltipIconButton>
        </DialogTitle>
        <DialogContent sx={contentStyles}>
          <Typography variant="body2" color="textSecondary">
            Share what broke, felt confusing, or would make Math Vision better.
          </Typography>
          <FormControl disabled={isSending}>
            <FormLabel id="report-feedback-kind-label">Type</FormLabel>
            <RadioGroup
              row={true}
              aria-labelledby="report-feedback-kind-label"
              name="report-feedback-kind"
              value={kind}
              onChange={(event: { target: { value: string } }) =>
                setKind(event.target.value as ReportKind)
              }
            >
              {reportKinds.map((option) => (
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  key={option.value}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus={true}
            fullWidth={true}
            required={true}
            multiline={true}
            minRows={5}
            label="Details"
            value={message}
            disabled={isSending}
            helperText={`${message.length}/${REPORT_CHARACTER_LIMIT}`}
            slotProps={{ htmlInput: { maxLength: REPORT_CHARACTER_LIMIT } }}
            onChange={(event: { target: { value: string } }) => setMessage(event.target.value)}
          />
          {selectedChat && (
            <Typography variant="caption" color="textSecondary" noWrap={true}>
              Current chat will be attached to this report.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button disabled={isSending} onClick={close}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            startIcon={<SendIcon size={16} />}
            disabled={isSending || !trimmedMessage}
          >
            {isSending ? "Sending..." : "Send report"}
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}
