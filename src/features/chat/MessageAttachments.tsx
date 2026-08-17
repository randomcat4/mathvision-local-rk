import { Fragment, memo, useMemo, useState } from "#production-react";

import { AttachmentFileName, AttachmentThumbnail } from "../attachments/AttachmentFileName";
import { useAttachmentContent } from "../attachments/useAttachmentContent";
import {
  getEmbeddedAttachmentUrl,
  type MessageAttachmentData,
} from "../attachments/messageAttachmentData";
import { decodeBase64Utf8, isLatexAttachment } from "../latex/attachmentEncoding";
import { LatexAttachmentPreviewDrawer } from "../latex/LatexAttachmentPreviewDrawer";
import { isPastedTextAttachment } from "./composerAttachment";
import {
  alpha,
  Box,
  ButtonBase,
  Card,
  Link,
  Tooltip,
  Typography,
} from "../../runtime/messageAttachmentsUiRuntime.js";

interface AttachmentTheme {
  spacing(...values: number[]): string;
  shape: { borderRadiusPx: number };
  palette: {
    primary: { main: string };
    text: { primary: string };
    background: { paper: string };
  };
  transitions: {
    create(properties: string[], options: { duration: number }): string;
    duration: { shorter: number };
  };
}

const fileCardStyles = (theme: AttachmentTheme) => ({
  minWidth: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.4),
  padding: theme.spacing(1.4, 1.6),
  borderRadius: theme.shape.borderRadiusPx,
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.86),
  boxShadow: `0 10px 24px ${alpha(theme.palette.text.primary, 0.05)}`,
  color: theme.palette.text.primary,
  appearance: "none",
  font: "inherit",
  textAlign: "left",
  textDecoration: "none",
  cursor: "pointer",
  transition: theme.transitions.create(
    ["transform", "border-color", "background-color", "box-shadow"],
    { duration: theme.transitions.duration.shorter },
  ),
  "&:hover": {
    transform: "translateY(-1px)",
    borderColor: alpha(theme.palette.primary.main, 0.18),
    backgroundColor: alpha(theme.palette.background.paper, 0.92),
    boxShadow: `0 14px 28px ${alpha(theme.palette.text.primary, 0.08)}`,
  },
});
const imageCardStyles = (theme: AttachmentTheme) => ({
  minWidth: 0,
  overflow: "hidden",
  borderRadius: theme.shape.borderRadiusPx,
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.9),
  boxShadow: `0 12px 28px ${alpha(theme.palette.text.primary, 0.06)}`,
});
const imageLinkStyles = { display: "block", color: "inherit", textDecoration: "none" };
const imageStyles = (theme: AttachmentTheme) => ({
  width: "100%",
  maxHeight: "28rem",
  display: "block",
  objectFit: "contain",
  backgroundColor: alpha(theme.palette.text.primary, 0.03),
});
const imageFooterStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 1.6,
  px: 1.8,
  pt: 1.6,
  pb: 1.7,
};
const imageNameStyles = { minWidth: 0, flex: "1 1 12rem" };
const fileNameStyles = {
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0.25,
};
const imageActionsStyles = {
  display: "inline-flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 0.9,
  flex: "0 0 auto",
};
const imageActionStyles = (theme: AttachmentTheme) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: theme.spacing(4),
  padding: theme.spacing(0.4, 1.4),
  borderRadius: theme.shape.borderRadiusPx,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  textDecoration: "none",
  transition: theme.transitions.create(["transform", "border-color", "background-color"], {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    transform: "translateY(-1px)",
    borderColor: alpha(theme.palette.primary.main, 0.24),
    backgroundColor: alpha(theme.palette.primary.main, 0.09),
  },
});
const fileListStyles = { display: "flex", flexDirection: "column", gap: 1.4, mb: 1.6 };
const imageListStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, min(100%, 22rem)))",
  gap: 1.7,
  mb: 1.6,
};

function MessageImageAttachment({ attachment }: { attachment: MessageAttachmentData }) {
  const content = useAttachmentContent(attachment.attachmentId, !attachment.dataBase64);
  const objectUrl = content.objectUrl ?? getEmbeddedAttachmentUrl(attachment);
  if (!objectUrl) {
    return (
      <Tooltip title={attachment.name} describeChild={true}>
        <Box sx={imageCardStyles}>
          <Box sx={imageFooterStyles}>
            <Box sx={imageNameStyles}>
              <AttachmentFileName name={attachment.name} />
              <Typography
                variant="caption"
                color={content.error || !attachment.attachmentId ? "error" : "textSecondary"}
              >
                {content.error && "Could not load image."}
                {!content.error && attachment.attachmentId && "Loading image..."}
                {!content.error && !attachment.attachmentId && "Image content is unavailable."}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Tooltip>
    );
  }
  return (
    <Tooltip title={attachment.name} describeChild={true}>
      <Box sx={imageCardStyles}>
        <Link href={objectUrl} target="_blank" rel="noreferrer" underline="none" sx={imageLinkStyles}>
          <Box component="img" src={objectUrl} alt={attachment.name} sx={imageStyles} />
        </Link>
        <Box sx={imageFooterStyles}>
          <Box sx={imageNameStyles}><AttachmentFileName name={attachment.name} /></Box>
          <Box sx={imageActionsStyles}>
            <Link href={objectUrl} target="_blank" rel="noreferrer" variant="button" color="primary" underline="none" sx={imageActionStyles}>Open</Link>
            <Link href={objectUrl} download={attachment.name} variant="button" color="primary" underline="none" sx={imageActionStyles}>Download</Link>
          </Box>
        </Box>
      </Box>
    </Tooltip>
  );
}

function MessageFileAttachment({ attachment }: { attachment: MessageAttachmentData }) {
  const content = useAttachmentContent(attachment.attachmentId, false);
  const objectUrl = content.objectUrl ?? getEmbeddedAttachmentUrl(attachment);
  const latexAttachment = isLatexAttachment(attachment.name);
  const pastedText = isPastedTextAttachment(attachment.name);
  const embeddedSource = useMemo(
    () => (!latexAttachment || !attachment.dataBase64 ? null : decodeBase64Utf8(attachment.dataBase64)),
    [attachment.dataBase64, latexAttachment],
  );
  const [loadedSource, setLoadedSource] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const previewSource = embeddedSource ?? loadedSource;

  const handlePreviewOpenChange = (open: boolean) => {
    if (!open || !latexAttachment || embeddedSource) {
      setPreviewLoading(false);
      return;
    }
    if (!attachment.attachmentId) {
      setPreviewError("Preview source is unavailable for this attachment.");
      return;
    }
    setPreviewError(null);
    setPreviewLoading(true);
    content.load()
      .then((blob) => blob.text())
      .then(setLoadedSource)
      .catch((error: unknown) => {
        setPreviewError(error instanceof Error ? error.message : `Could not load ${attachment.name}.`);
      })
      .finally(() => setPreviewLoading(false));
  };

  const download = async () => {
    if (!attachment.attachmentId) {
      setDownloadError("File content is unavailable.");
      return;
    }
    setDownloadError(null);
    setDownloading(true);
    try {
      const blob = await content.load();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = attachment.name;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : "Could not download file.");
    } finally {
      setDownloading(false);
    }
  };
  const error = downloadError ?? content.error;
  const unavailable = Boolean(error) || (!objectUrl && !attachment.attachmentId);
  const inner = (
    <Fragment>
      <AttachmentThumbnail kind="file" name={attachment.name} href={objectUrl} />
      <Box sx={fileNameStyles}>
        <AttachmentFileName name={attachment.name} />
        <Typography variant="caption" color={unavailable ? "error" : "textSecondary"}>
          {error && "Could not load file."}
          {!error && !objectUrl && !attachment.attachmentId && "File content is unavailable."}
          {!unavailable && downloading && "Downloading file..."}
          {!unavailable && !downloading && !pastedText && "File"}
          {!unavailable && !downloading && pastedText && "Pasted text"}
        </Typography>
      </Box>
    </Fragment>
  );

  if (latexAttachment) {
    const trigger = <Card component="button" type="button" variant="interactive" sx={fileCardStyles}>{inner}</Card>;
    return (
      <LatexAttachmentPreviewDrawer
        name={attachment.name}
        source={previewSource}
        isLoading={previewLoading}
        errorMessage={previewError}
        onOpenChange={handlePreviewOpenChange}
        triggerTooltip={attachment.name}
      >
        {trigger}
      </LatexAttachmentPreviewDrawer>
    );
  }
  if (objectUrl) {
    return (
      <Tooltip title={attachment.name} describeChild={true}>
        <Card component={Link} variant="interactive" href={objectUrl} download={attachment.name} target="_blank" rel="noreferrer" underline="none" sx={fileCardStyles}>{inner}</Card>
      </Tooltip>
    );
  }
  if (attachment.attachmentId) {
    return (
      <Card component={ButtonBase} variant="interactive" type="button" aria-label={`Download ${attachment.name}`} sx={fileCardStyles} disabled={downloading} onClick={() => { void download(); }}>{inner}</Card>
    );
  }
  return (
    <Tooltip title={attachment.name} describeChild={true}>
      <Card variant="inset" sx={fileCardStyles}>{inner}</Card>
    </Tooltip>
  );
}

export interface MessageAttachmentsProps { attachments: MessageAttachmentData[] }

function MessageAttachmentsView({ attachments }: MessageAttachmentsProps) {
  const images = attachments.filter((attachment) => attachment.kind === "image");
  const files = attachments.filter((attachment) => attachment.kind === "file");
  return (
    <Fragment>
      {images.length > 0 && <Box sx={imageListStyles}>{images.map((attachment, index) => <MessageImageAttachment attachment={attachment} key={attachment.id ?? `${attachment.name}-${index}`} />)}</Box>}
      {files.length > 0 && <Box sx={fileListStyles}>{files.map((attachment, index) => <MessageFileAttachment attachment={attachment} key={attachment.id ?? `${attachment.name}-${index}`} />)}</Box>}
    </Fragment>
  );
}

export const MessageAttachments = memo(MessageAttachmentsView);
