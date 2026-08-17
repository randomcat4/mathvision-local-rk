import { memo, useCallback, type MouseEvent } from "#production-react";

import {
  alpha,
  Box,
  Card,
  CloseIcon,
  InlineMarkdown,
  QuoteIcon,
  TooltipIconButton,
} from "../../runtime/quoteUiRuntime.js";

export interface QuotedTextSelection {
  messageIndex: number;
  text: string;
}

export interface QuotedSelectionProps {
  quote: QuotedTextSelection;
  tone: "message" | "composer" | string;
  onJump?: (messageIndex: number) => void;
  onRemove?: () => void;
}

interface QuoteTheme {
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

const cardStyles = (tone: string, interactive: boolean, removable: boolean) =>
  (theme: QuoteTheme) => {
    const isMessage = tone === "message";
    return {
      minWidth: 0,
      width: "100%",
      display: "grid",
      gridTemplateColumns: removable
        ? "auto minmax(0, 1fr) auto"
        : "auto minmax(0, 1fr)",
      alignItems: "start",
      gap: theme.spacing(1),
      marginBottom: theme.spacing(isMessage ? 1 : 1.5),
      padding: theme.spacing(isMessage ? 0.9 : 1.15, isMessage ? 1.1 : 1.25),
      borderColor: alpha(theme.palette.primary.main, isMessage ? 0.26 : 0.2),
      borderLeft: `3px solid ${alpha(theme.palette.primary.main, isMessage ? 0.68 : 0.48)}`,
      borderRadius: theme.shape.borderRadiusPx,
      backgroundColor: alpha(theme.palette.primary.main, isMessage ? 0.09 : 0.055),
      backgroundImage: "none",
      boxShadow: `inset 0 1px 0 ${alpha(theme.palette.background.paper, isMessage ? 0.78 : 0.68)}`,
      cursor: interactive ? "pointer" : "default",
      transition: theme.transitions.create(
        ["background-color", "border-color", "box-shadow"],
        { duration: theme.transitions.duration.shorter },
      ),
      ...(interactive
        ? {
            "&:hover": {
              borderColor: alpha(theme.palette.primary.main, 0.38),
              borderLeftColor: theme.palette.primary.main,
              backgroundColor: alpha(theme.palette.primary.main, isMessage ? 0.13 : 0.09),
              boxShadow: `inset 0 1px 0 ${alpha(theme.palette.background.paper, 0.86)}, 0 8px 20px ${alpha(theme.palette.primary.main, 0.08)}`,
            },
          }
        : {}),
    };
  };

const staticIconStyles = (theme: QuoteTheme) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  color: theme.palette.primary.main,
});
const jumpIconStyles = (theme: QuoteTheme) => ({
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  color: theme.palette.primary.main,
});
const removeIconStyles = (theme: QuoteTheme) => ({
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.08),
    color: theme.palette.text.primary,
  },
});

function QuotedSelectionView({ quote, tone, onJump, onRemove }: QuotedSelectionProps) {
  const interactive = onJump !== undefined;
  const jumpFromCard = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!onJump) return;
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("a, button")) {
        onJump(quote.messageIndex);
      }
    },
    [onJump, quote.messageIndex],
  );
  const jumpFromButton = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      onJump?.(quote.messageIndex);
    },
    [onJump, quote.messageIndex],
  );
  const remove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      onRemove?.();
    },
    [onRemove],
  );

  return (
    <Card
      variant={interactive ? "interactive" : "inset"}
      sx={cardStyles(tone, interactive, onRemove !== undefined)}
      onClick={interactive ? jumpFromCard : undefined}
    >
      {interactive ? (
        <TooltipIconButton
          type="button"
          size="small"
          tooltip="Jump to quoted selection"
          aria-label="Jump to quoted selection"
          sx={jumpIconStyles}
          onClick={jumpFromButton}
        >
          <QuoteIcon size={19} />
        </TooltipIconButton>
      ) : (
        <Box sx={staticIconStyles} aria-hidden="true">
          <QuoteIcon size={19} />
        </Box>
      )}
      <Box sx={{ minWidth: 0 }}>
        <InlineMarkdown content={quote.text} tone={tone === "message" ? "user" : "assistant"} />
      </Box>
      {onRemove ? (
        <TooltipIconButton
          type="button"
          size="small"
          tooltip="Remove quoted selection"
          aria-label="Remove quoted selection"
          sx={removeIconStyles}
          onClick={remove}
        >
          <CloseIcon size={18} />
        </TooltipIconButton>
      ) : null}
    </Card>
  );
}

export const QuotedSelection = memo(QuotedSelectionView);
