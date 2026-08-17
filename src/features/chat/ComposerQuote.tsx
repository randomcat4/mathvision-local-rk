/** Behavior-preserving recovery of ComposerQuote-2g1HGk7u.js. */

import { memo } from "#production-react";

import { Markdown, QuotedSelection } from "../../runtime/chatUiComponents.js";
import type { QuotedTextSelection } from "./QuotedSelection";

export interface ComposerQuoteProps {
  macros?: Record<string, string>;
  onJump?: (messageIndex: number) => void;
  onRemove?: () => void;
  quote: QuotedTextSelection;
}

const ComposerQuoteView = ({ macros, onJump, onRemove, quote }: ComposerQuoteProps) => (
  <Markdown macros={macros}>
    <QuotedSelection quote={quote} tone="composer" onJump={onJump} onRemove={onRemove} />
  </Markdown>
);

export const ComposerQuote = memo(ComposerQuoteView);
