import { createElement, useEffect, useState, type ComponentType } from "#production-react";
import { createLucideIcon } from "../../runtime/lucideRuntime.js";
import {
  Button,
  CopiedIcon,
  toast,
  TooltipIconButton,
} from "../../runtime/basicUiRuntime.js";

export const CopyIcon = createLucideIcon("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
]);

export async function copyText(
  content: string,
  { showErrorToast = true }: { showErrorToast?: boolean } = {},
): Promise<boolean> {
  if (!navigator.clipboard?.writeText) {
    if (showErrorToast) toast.error("Clipboard copy isn't available in this browser.");
    return false;
  }
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch {
    if (showErrorToast) toast.error("We couldn't copy that text. Please try again.");
    return false;
  }
}

export interface CopyButtonProps {
  content: string;
  disabled?: boolean;
  label: string;
  tooltipLabel?: string;
  iconOnly?: boolean;
  icon?: ComponentType<{ fontSize?: string }>;
  message?: string;
  size?: unknown;
  sx?: unknown;
  variant?: unknown;
}

export function CopyButton({
  content,
  disabled = false,
  label,
  tooltipLabel,
  iconOnly = false,
  icon,
  message = "Text copied",
  size,
  sx,
  variant,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2_000);
    return () => window.clearTimeout(timer);
  }, [copied]);
  if (!content.trim() && !disabled) return null;
  const accessibleLabel = tooltipLabel ?? label;
  const currentTooltip = copied ? "Copied" : accessibleLabel;
  const handleCopy = async () => {
    if (!disabled && (await copyText(content))) {
      setCopied(true);
      toast.success(message);
    }
  };
  const currentIcon = copied ? (
    <CopiedIcon />
  ) : icon ? (
    createElement(icon, { fontSize: "small" })
  ) : (
    <CopyIcon />
  );

  if (iconOnly) {
    return (
      <TooltipIconButton
        tooltip={currentTooltip}
        type="button"
        aria-label={accessibleLabel}
        disabled={disabled}
        disableRipple={true}
        onClick={() => void handleCopy()}
        sx={[
          { boxShadow: (theme: { shadows: unknown[] }) => theme.shadows[8] },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        color="inherit"
      >
        {currentIcon}
      </TooltipIconButton>
    );
  }
  return (
    <Button
      type="button"
      aria-label={accessibleLabel}
      title={accessibleLabel}
      disabled={disabled}
      disableRipple={true}
      onClick={() => void handleCopy()}
      color="secondary"
      size={size}
      startIcon={currentIcon}
      sx={sx}
      variant={variant}
    >
      <span>{copied ? "Copied" : label}</span>
    </Button>
  );
}
