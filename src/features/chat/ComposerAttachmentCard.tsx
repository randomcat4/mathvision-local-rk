import {
  Suspense,
  createElement,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "#production-react";

import { AttachmentFileName, AttachmentThumbnail } from "../attachments/AttachmentFileName";
import { useAttachmentContent, useObjectUrl } from "../attachments/useAttachmentContent";
import { isLatexAttachment } from "../latex/attachmentEncoding";
import {
  alpha,
  Box,
  createMuiSvgIcon,
  TooltipIconButton,
  Typography,
} from "../../runtime/basicUiRuntime.js";
import {
  Card,
  LatexAttachmentPreview,
  Tooltip,
} from "../../runtime/composerAttachmentUiRuntime.js";
import {
  isPastedTextAttachment,
  type ComposerAttachment,
} from "./composerAttachment";

export interface ComposerAttachmentCardProps {
  attachment: ComposerAttachment;
  disabled?: boolean;
  onRemove(): void;
}

interface AttachmentCardTheme {
  palette: {
    primary: { main: string };
    background: { paper: string };
    text: { primary: string; secondary: string };
  };
  shape: { borderRadiusPx: number };
  spacing(...values: number[]): string;
  transitions: {
    create(properties: string[], options: { duration: number }): string;
    duration: { shorter: number };
  };
}

const CloseIcon = createMuiSvgIcon(
  createElement("path", {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4",
  }),
);

const cardStyles = (previewable: boolean) => (theme: AttachmentCardTheme) => ({
  boxSizing: "border-box",
  minWidth: 0,
  width: "fit-content",
  maxWidth: "min(100%, 28rem)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.4),
  padding: theme.spacing(1.25, 1.5),
  borderRadius: theme.shape.borderRadiusPx,
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.86),
  boxShadow: `0 10px 24px ${alpha(theme.palette.text.primary, 0.05)}`,
  cursor: previewable ? "pointer" : "default",
  transition: theme.transitions.create(["border-color", "background-color"], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(previewable
    ? {
        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.18),
          backgroundColor: alpha(theme.palette.background.paper, 0.92),
        },
        "&:focus-visible": {
          outline: `2px solid ${alpha(theme.palette.primary.main, 0.42)}`,
          outlineOffset: 2,
        },
      }
    : null),
});
const detailsStyles = {
  minWidth: 0,
  maxWidth: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0.25,
};
const removeButtonStyles = (theme: AttachmentCardTheme) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  flex: "0 0 auto",
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.text.primary, 0.06),
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
    color: theme.palette.text.primary,
  },
});

export function ComposerAttachmentCard({
  attachment,
  disabled = false,
  onRemove,
}: ComposerAttachmentCardProps) {
  const previewable = isLatexAttachment(attachment.name);
  const pastedText = isPastedTextAttachment(attachment.name);
  const localImageUrl = useObjectUrl(
    attachment.storage === "local" && attachment.kind === "image" ? attachment.file : null,
  );
  const storedImage = useAttachmentContent(
    attachment.storage === "stored" ? attachment.attachmentId : null,
    attachment.storage === "stored" && attachment.kind === "image",
  );
  const thumbnailUrl = localImageUrl ?? storedImage.objectUrl;
  const [latexSource, setLatexSource] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const requestSequence = useRef(0);

  const handlePreviewOpen = (open: boolean) => {
    requestSequence.current += 1;
    const request = requestSequence.current;
    if (!open || !previewable) {
      setIsLoading(false);
      return;
    }
    setErrorMessage(null);
    setLatexSource(null);
    setIsLoading(true);
    const content =
      attachment.storage === "local"
        ? attachment.file.text()
        : storedImage.load().then((blob) => blob.text());
    content
      .then((source) => {
        if (request === requestSequence.current) setLatexSource(source);
      })
      .catch((error: unknown) => {
        if (request === requestSequence.current) {
          setErrorMessage(
            error instanceof Error ? error.message : `Could not read ${attachment.name}.`,
          );
        }
      })
      .finally(() => {
        if (request === requestSequence.current) setIsLoading(false);
      });
  };

  const card = (
    <Card
      variant="inset"
      sx={cardStyles(previewable)}
      role={previewable ? "button" : undefined}
      tabIndex={previewable ? 0 : undefined}
      aria-label={previewable ? `Preview ${attachment.name}` : undefined}
    >
      <AttachmentThumbnail kind={attachment.kind} name={attachment.name} href={thumbnailUrl} />
      <Box sx={detailsStyles}>
        <AttachmentFileName name={attachment.name} />
        <Typography variant="caption" color="textSecondary">
          {attachment.kind === "image" && "Photo"}
          {attachment.kind === "file" && !pastedText && "File"}
          {pastedText && "Pasted text"}
        </Typography>
      </Box>
      <TooltipIconButton
        sx={removeButtonStyles}
        aria-label={`Remove ${attachment.name}`}
        disabled={disabled}
        disableRipple={true}
        onClick={(event: MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          onRemove();
        }}
        onKeyDown={(event: KeyboardEvent<HTMLElement>) => event.stopPropagation()}
      >
        <CloseIcon fontSize="small" />
      </TooltipIconButton>
    </Card>
  );

  if (previewable) {
    return (
      <Suspense fallback={card}>
        <LatexAttachmentPreview
          name={attachment.name}
          source={latexSource}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onOpenChange={handlePreviewOpen}
          triggerTooltip={attachment.name}
        >
          {card}
        </LatexAttachmentPreview>
      </Suspense>
    );
  }
  return (
    <Tooltip title={attachment.name} describeChild={true}>
      {card}
    </Tooltip>
  );
}
