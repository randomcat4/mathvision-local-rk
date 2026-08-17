import { createElement } from "#production-react";
import {
  alpha,
  Box,
  createMuiSvgIcon,
  styled,
  Typography,
} from "../../runtime/basicUiRuntime.js";

const ImageIcon = createMuiSvgIcon(
  createElement("path", {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02",
  }),
);
const FileIcon = createMuiSvgIcon(
  createElement("path", {
    d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1",
  }),
);

const thumbnailContainerStyles = {
  width: "3rem",
  height: "3rem",
  flex: "0 0 auto",
  overflow: "hidden",
  borderRadius: (theme: { shape: { borderRadiusPx: number } }) => theme.shape.borderRadiusPx,
  background: (theme: { palette: { primary: { main: string } } }) =>
    alpha(theme.palette.primary.main, 0.08),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: (theme: { palette: { primary: { main: string } } }) => theme.palette.primary.main,
};
const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export interface AttachmentThumbnailProps {
  kind: string;
  name: string;
  href?: string | null;
}

export function AttachmentThumbnail({ kind, name, href }: AttachmentThumbnailProps) {
  if (kind === "image" && href) {
    return (
      <Box sx={thumbnailContainerStyles}>
        <Box component="img" src={href} alt={name} sx={imageStyles} />
      </Box>
    );
  }
  return (
    <Box sx={thumbnailContainerStyles}>
      {kind === "image" ? <ImageIcon fontSize="small" /> : <FileIcon fontSize="small" />}
    </Box>
  );
}

const ClampedFileName = styled("span")({
  minWidth: 0,
  maxWidth: "100%",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflowWrap: "anywhere",
  wordBreak: "break-word",
});

export function AttachmentFileName({
  name,
  variant = "subtitle2",
}: {
  name: string;
  variant?: string;
}) {
  return (
    <ClampedFileName>
      <Typography component="span" variant={variant}>
        {name}
      </Typography>
    </ClampedFileName>
  );
}
