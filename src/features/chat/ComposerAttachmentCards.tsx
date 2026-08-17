/** Behavior-preserving recovery of ComposerAttachmentCards-CNJKQcrr.js. */

import { memo } from "#production-react";

import { ComposerAttachmentCard } from "../../runtime/chatUiComponents.js";
import type { ComposerAttachment } from "./composerAttachment";

export interface ComposerAttachmentCardsProps {
  attachments: ComposerAttachment[];
  disabled?: boolean;
  onRemove: (attachmentId: string) => void;
}

const ComposerAttachmentCardsView = ({
  attachments,
  disabled,
  onRemove,
}: ComposerAttachmentCardsProps) =>
  attachments.map((attachment) => (
    <ComposerAttachmentCard
      attachment={attachment}
      disabled={disabled}
      onRemove={() => {
        onRemove(attachment.id);
      }}
      key={attachment.id}
    />
  ));

export const ComposerAttachmentCards = memo(ComposerAttachmentCardsView);
