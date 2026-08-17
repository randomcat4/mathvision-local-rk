import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  useMemo,
  useState,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "#production-react";

import { alpha, Box, CloseIcon, TooltipIconButton, Typography } from "../../runtime/basicUiRuntime.js";
import {
  DownloadIcon,
  Drawer,
  extractLatexMathPreview,
  InlineMarkdown,
  Tooltip,
} from "../../runtime/latexPreviewUiRuntime.js";
import { CopyButton } from "../clipboard/CopyButton";
import { decodeBase64Utf8, isLatexAttachment } from "./attachmentEncoding";

interface PreviewTriggerProps {
  onClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  [key: string]: unknown;
}

export interface LatexAttachmentPreviewDrawerProps {
  name: string;
  source: string | null;
  defaultOpen?: boolean;
  isLoading?: boolean;
  errorMessage?: string | null;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  drawerProps?: Record<string, unknown>;
  triggerTooltip?: string;
}

interface PreviewTheme {
  palette: { text: { primary: string } };
  spacing(...values: number[]): string;
}

const drawerPaperStyles = {
  width: "min(100vw, 48rem)",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
};
const headerStyles = (theme: PreviewTheme) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
});
const headingStyles = { minWidth: 0, display: "flex", flexDirection: "column" };
const contentStyles = (theme: PreviewTheme) => ({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  padding: theme.spacing(2),
});
const emptyStyles = (theme: PreviewTheme) => ({
  minHeight: "14rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
});

export function LatexAttachmentPreviewDrawer({
  name,
  source,
  defaultOpen = false,
  isLoading = false,
  errorMessage,
  onOpenChange,
  children,
  drawerProps,
  triggerTooltip,
}: LatexAttachmentPreviewDrawerProps) {
  const [open, setOpen] = useState(defaultOpen);
  const preview = useMemo(() => (source ? extractLatexMathPreview(source) : ""), [source]);
  const sourceUnavailable = isLoading || source == null || !source.trim();
  const child = Children.only(children);
  if (!isValidElement<PreviewTriggerProps>(child)) {
    throw new Error("LatexAttachmentPreviewDrawer requires a single React element child.");
  }
  const setDrawerOpen = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };
  const trigger = cloneElement(child as ReactElement<PreviewTriggerProps>, {
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    onClick: (event) => {
      child.props.onClick?.(event);
      if (!event.defaultPrevented) setDrawerOpen(true);
    },
    onKeyDown: (event) => {
      child.props.onKeyDown?.(event);
      if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        setDrawerOpen(true);
      }
    },
  });
  const download = () => {
    if (sourceUnavailable || !source) return;
    const url = URL.createObjectURL(new Blob([source], { type: "text/x-tex;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };
  const wrappedTrigger = triggerTooltip ? (
    <Tooltip title={triggerTooltip} describeChild={true}>{trigger}</Tooltip>
  ) : trigger;

  return (
    <Fragment>
      {wrappedTrigger}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { variant: "panel", sx: drawerPaperStyles } }}
        sx={{ zIndex: 9999 }}
        {...drawerProps}
      >
        <Box sx={headerStyles}>
          <Box sx={headingStyles}>
            <div>
              <Typography variant="h6" color="textPrimary" noWrap={true}>{name}</Typography>
              <Typography variant="caption" color="textSecondary">
                Quick math extract · not a compiled document
              </Typography>
            </div>
            <div>
              <TooltipIconButton
                onClick={download}
                tooltip="Download LaTeX source"
                disabled={sourceUnavailable}
              >
                <DownloadIcon />
              </TooltipIconButton>
              <CopyButton
                label="Copy LaTeX source"
                content={source ?? ""}
                disabled={sourceUnavailable}
                iconOnly={true}
              />
            </div>
          </Box>
          <TooltipIconButton
            tooltip="Close math extract"
            aria-label="Close LaTeX math extract"
            disableRipple={true}
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon size={18} />
          </TooltipIconButton>
        </Box>
        <Box sx={contentStyles}>
          {preview ? (
            <InlineMarkdown content={preview} />
          ) : (
            <Box sx={emptyStyles}>
              <Typography
                variant="body2"
                color={errorMessage ? "error" : "textSecondary"}
                align="center"
              >
                {errorMessage ??
                  (isLoading
                    ? "Loading math extract..."
                    : "No math expressions found in the source.")}
              </Typography>
            </Box>
          )}
        </Box>
      </Drawer>
    </Fragment>
  );
}

export const decodeBase64Text = decodeBase64Utf8;
export const isLatexAttachmentName = isLatexAttachment;
