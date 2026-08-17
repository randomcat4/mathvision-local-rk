import { Fragment, Suspense, lazy, useState } from "#production-react";

import {
  createLucideIcon,
  GuidedTourIcon,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  threadTourTargets,
} from "../../runtime/chatMoreMenuRuntime.js";

const BugIcon = createLucideIcon("bug", [
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }],
]);
const AnnouncementsIcon = createLucideIcon("megaphone", [
  ["path", { d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", key: "q8bfy3" }],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 6v8", key: "15ugcq" }],
]);
const SupportIcon = createLucideIcon("message-circle-question-mark", [
  ["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
const ReportFeedbackDialog = lazy(() =>
  import("../feedback/ReportFeedbackDialog").then((module) => ({
    default: module.ReportFeedbackDialog,
  })),
);
const SLACK_SUPPORT_URL =
  "https://join.slack.com/t/mathvision-public/shared_invite/zt-4095a07tx-e_TF2aoDv3WMgZgv9Lf~uw";
const listStyles = {
  p: 0,
  "& .MuiMenuItem-root": { gap: 0.9 },
  "& .MuiListItemIcon-root": { minWidth: "auto", color: "inherit", mr: 0.5 },
};
const paperStyles = { minWidth: "14rem", mt: 1, p: 1 };

function FeedbackMenuItem({
  selectedChat,
  onSelect,
}: {
  selectedChat?: { id: string } | null;
  onSelect(): void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const select = () => {
    onSelect();
    setLoaded(true);
    setOpen(true);
  };
  return (
    <Fragment>
      <MenuItem dense={true} onClick={select}>
        <ListItemIcon><BugIcon size={18} /></ListItemIcon>
        <ListItemText>Report a bug or feedback</ListItemText>
      </MenuItem>
      {loaded ? (
        <Suspense fallback={null}>
          <ReportFeedbackDialog open={open} selectedChat={selectedChat} onClose={() => setOpen(false)} />
        </Suspense>
      ) : null}
    </Fragment>
  );
}

export interface ChatPanelMoreMenuContentProps {
  anchorEl: Element | null;
  ariaLabel: string;
  buttonId: string;
  menuId: string;
  selectedChat?: { id: string } | null;
  onClose(): void;
  onOpenAnnouncements(): void;
  onOpenThreadTourGuide?: () => void;
}

export function ChatPanelMoreMenuContent({
  anchorEl,
  ariaLabel,
  buttonId,
  menuId,
  selectedChat,
  onClose,
  onOpenAnnouncements,
  onOpenThreadTourGuide,
}: ChatPanelMoreMenuContentProps) {
  return (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      keepMounted={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        list: { "aria-labelledby": buttonId, sx: listStyles },
        paper: { "aria-label": ariaLabel, variant: "floating", sx: paperStyles },
      }}
      onClose={onClose}
    >
      {onOpenThreadTourGuide ? (
        <MenuItem
          data-thread-tour-target={threadTourTargets.tourButton}
          dense={true}
          onClick={() => { onClose(); onOpenThreadTourGuide(); }}
        >
          <ListItemIcon><GuidedTourIcon size={18} /></ListItemIcon>
          <ListItemText>Guided tour</ListItemText>
        </MenuItem>
      ) : null}
      <MenuItem dense={true} onClick={() => { onClose(); onOpenAnnouncements(); }}>
        <ListItemIcon><AnnouncementsIcon size={18} /></ListItemIcon>
        <ListItemText>What's new</ListItemText>
      </MenuItem>
      <MenuItem
        dense={true}
        onClick={() => {
          window.open(SLACK_SUPPORT_URL, "_blank", "noopener,noreferrer");
          onClose();
        }}
      >
        <ListItemIcon><SupportIcon size={18} /></ListItemIcon>
        <ListItemText>Join Slack support</ListItemText>
      </MenuItem>
      <FeedbackMenuItem selectedChat={selectedChat} onSelect={onClose} />
    </Menu>
  );
}
