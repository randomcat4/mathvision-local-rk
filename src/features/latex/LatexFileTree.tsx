import {
  Fragment,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "#production-react";
import {
  buildLatexFileTree,
  getLatexParentPath,
  getLatexPathName,
  type LatexFileTreeNode,
  type LatexProjectFile,
} from "./latexFolderTree";
import {
  Box,
  ButtonBase,
  Chip,
  CollapsibleTree,
  contextMenuPositionStyles,
  copyText,
  CopyIcon,
  CreateFolderIcon,
  createLucideIcon,
  destructiveMenuItemStyles,
  Divider,
  FileIcon,
  FileMetadata,
  FolderChevron,
  FolderClosedIcon,
  FolderMetadata,
  FolderOpenIcon,
  GenericFileIcon,
  IconButton,
  ImageFileIcon,
  InlineRenameInput,
  Link,
  ListItemIcon,
  Menu,
  MenuHeader,
  MenuItem,
  menuListStyles,
  menuPaperStyles,
  menuRootStyles,
  MoreIcon,
  MoveIcon,
  nestedListStyles,
  NewFileIcon,
  RenameIcon,
  RenameLabel,
  rowActionButtonStyles,
  rowActionContainerStyles,
  sidebarDensity,
  sidebarRowStyles,
  toast,
  Tooltip,
  TrashIcon,
  TreeConnector,
  Typography,
  useInlineRename,
  useIsMobile,
  useSidebarContext,
} from "../../runtime/latexFileTreeRuntime.js";
const ArchiveIcon = createLucideIcon("file-archive", [
  [
    "path",
    {
      d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
      key: "4pqfef",
    },
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 12v-1", key: "1ej8lb" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M8 7V6", key: "1nbb54" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }],
]);
const StarIcon = createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
export interface LatexFileTreeProps {
  allowRootItemSingleClickRename?: boolean;
  ariaLabel: string;
  expandedFolderPaths: Set<string>;
  files: LatexProjectFile[];
  onExpandedFolderPathsChange(paths: Set<string>): void;
  canManage?: boolean;
  isPending: boolean;
  selectedFileId?: string | null;
  mainFilePath?: string | null;
  onCreate?(kind: "text" | "folder", parentPath: string): void;
  onDelete?(file: LatexProjectFile): void;
  onMove?(file: LatexProjectFile): void;
  onRename?(file: LatexProjectFile, path: string): Promise<boolean>;
  onSelect(file: LatexProjectFile): void;
  onSetMain?(file: LatexProjectFile): void;
}
function FileKindIcon({
  file,
  expanded,
}: {
  file: LatexProjectFile;
  expanded: boolean;
}) {
  if (file.kind === "folder")
    return expanded ? (
      <FolderOpenIcon size={16} />
    ) : (
      <FolderClosedIcon size={16} />
    );
  if (file.kind === "binary" && file.contentType?.startsWith("image/"))
    return <ImageFileIcon size={16} />;
  if (file.path.toLowerCase().endsWith(".pdf")) return <FileIcon size={16} />;
  if (file.path.toLowerCase().endsWith(".zip"))
    return <ArchiveIcon size={16} />;
  if (file.kind === "text") return <FileIcon size={16} />;
  return <GenericFileIcon size={16} />;
}
function ItemMenu({
  anchor,
  position,
  file,
  expanded,
  open,
  pending,
  selected,
  mainFilePath,
  canManage,
  name,
  onClose,
  onCreate,
  onDelete,
  onMove,
  onRename,
  onSelect,
  onSetMain,
  onToggle,
}: {
  anchor: HTMLElement | null;
  position: { left: number; top: number } | null;
  file: LatexProjectFile;
  expanded: boolean;
  open: boolean;
  pending: boolean;
  selected: boolean;
  mainFilePath?: string | null;
  canManage: boolean;
  name: string;
  onClose(): void;
  onCreate?: LatexFileTreeProps["onCreate"];
  onDelete?: LatexFileTreeProps["onDelete"];
  onMove?: LatexFileTreeProps["onMove"];
  onRename(): void;
  onSelect: LatexFileTreeProps["onSelect"];
  onSetMain?: LatexFileTreeProps["onSetMain"];
  onToggle(): void;
}) {
  const folder = file.kind === "folder";
  const main = file.path === mainFilePath;
  const containsMain =
    folder && mainFilePath?.startsWith(`${file.path}/`) === true;
  return (
    <Menu
      open={open}
      anchorEl={position ? null : anchor}
      anchorPosition={position ?? undefined}
      anchorReference={position ? "anchorPosition" : "anchorEl"}
      sx={menuRootStyles}
      slotProps={{
        list: { sx: menuListStyles },
        paper: {
          "aria-label": "LaTeX project item actions",
          variant: "floating",
          sx: [menuPaperStyles, position && contextMenuPositionStyles],
        },
      }}
      onClose={onClose}
      onClick={(event: MouseEvent) => event.stopPropagation()}
    >
      <MenuHeader kind={folder ? "folder" : "file"} title={name} />
      {!folder && !selected && (
        <MenuItem
          dense
          disabled={pending}
          onClick={() => {
            onClose();
            onSelect(file);
          }}
        >
          <ListItemIcon>
            <FileIcon size={16} />
          </ListItemIcon>
          Open file
        </MenuItem>
      )}
      {folder && (
        <MenuItem
          dense
          onClick={() => {
            onClose();
            onToggle();
          }}
        >
          <ListItemIcon>
            <FolderChevron isExpanded={expanded} size={16} />
          </ListItemIcon>
          {expanded ? "Collapse folder" : "Expand folder"}
        </MenuItem>
      )}
      {canManage && folder && (
        <Fragment>
          <MenuItem
            dense
            disabled={pending}
            onClick={() => {
              onClose();
              if (!onCreate)
                throw new Error(
                  "File creation actions are unavailable in this tree.",
                );
              onCreate("text", file.path);
            }}
          >
            <ListItemIcon>
              <NewFileIcon size={16} />
            </ListItemIcon>
            New file here
          </MenuItem>
          <MenuItem
            dense
            disabled={pending}
            onClick={() => {
              onClose();
              if (!onCreate)
                throw new Error(
                  "Folder creation actions are unavailable in this tree.",
                );
              onCreate("folder", file.path);
            }}
          >
            <ListItemIcon>
              <CreateFolderIcon size={16} />
            </ListItemIcon>
            New folder here
          </MenuItem>
        </Fragment>
      )}
      {canManage &&
        file.kind === "text" &&
        file.path.toLowerCase().endsWith(".tex") &&
        !main && (
          <MenuItem
            dense
            disabled={pending}
            onClick={() => {
              onClose();
              if (!onSetMain)
                throw new Error(
                  "Main file actions are unavailable in this tree.",
                );
              onSetMain(file);
            }}
          >
            <ListItemIcon>
              <StarIcon size={16} />
            </ListItemIcon>
            Set as main document
          </MenuItem>
        )}
      {canManage && (
        <Fragment>
          <MenuItem dense disabled={pending} onClick={onRename}>
            <ListItemIcon>
              <RenameIcon size={16} />
            </ListItemIcon>
            Rename
          </MenuItem>
          <MenuItem
            dense
            disabled={pending}
            onClick={() => {
              onClose();
              if (!onMove)
                throw new Error(
                  "File move actions are unavailable in this tree.",
                );
              onMove(file);
            }}
          >
            <ListItemIcon>
              <MoveIcon size={16} />
            </ListItemIcon>
            Move…
          </MenuItem>
        </Fragment>
      )}
      <MenuItem
        dense
        onClick={() => {
          onClose();
          void copyText(file.path).then((copied) => {
            if (copied) toast.success("Project path copied.");
          });
        }}
      >
        <ListItemIcon>
          <CopyIcon size={16} />
        </ListItemIcon>
        Copy project path
      </MenuItem>
      {canManage && (
        <Fragment>
          <Divider />
          <MenuItem
            dense
            disabled={pending || main || containsMain}
            sx={destructiveMenuItemStyles}
            onClick={() => {
              onClose();
              if (!onDelete)
                throw new Error(
                  "File delete actions are unavailable in this tree.",
                );
              onDelete(file);
            }}
          >
            <ListItemIcon>
              <TrashIcon size={16} />
            </ListItemIcon>
            {main
              ? "Delete (main document)"
              : containsMain
                ? "Delete (contains main document)"
                : "Delete"}
          </MenuItem>
        </Fragment>
      )}
    </Menu>
  );
}
const buttonStyles = {
  width: "100%",
  flex: 1,
  minWidth: 0,
  minHeight: "2rem",
  display: "flex",
  alignItems: "center",
  gap: 0.7,
  padding: 0,
  paddingRight: "2rem",
  color: "inherit",
  textAlign: "left",
};
const iconStyles = {
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center",
};
const labelStyles = {
  width: "100%",
  flex: 1,
  minWidth: 0,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  overflow: "hidden",
};
const rowListStyles = {
  width: "100%",
  flex: 1,
  minWidth: 0,
  minHeight: "2rem",
  display: "flex",
  alignItems: "center",
  color: "inherit",
};
const childStyles = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: ".125rem",
  position: "relative",
  "--sidebar-explorer-tree-guide-offset": ".6625rem",
};
const FileTreeRow = memo(function FileTreeRow({
  file,
  expanded,
  itemCount,
  selected,
  allowSingleClickRename,
  tree,
}: {
  file: LatexProjectFile;
  expanded: boolean;
  itemCount: number | null;
  selected: boolean;
  allowSingleClickRename: boolean;
  tree: LatexFileTreeProps & { onToggleFolder(path: string): void };
}) {
  const mobile = useIsMobile();
  const { density } = useSidebarContext();
  const densityStyle = sidebarDensity[density];
  const anchorRef = useRef<HTMLElement | null>(null);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const menuOpen = !!anchor || !!position;
  const folder = file.kind === "folder";
  const main = file.path === tree.mainFilePath;
  const name = getLatexPathName(file.path);
  if (folder !== (itemCount !== null))
    throw new Error(
      `LaTeX project folder count does not match item '${file.path}'.`,
    );
  const close = () => {
    setAnchor(null);
    setPosition(null);
  };
  const openMenu = () => {
    if (!anchorRef.current)
      throw new Error(
        `LaTeX project item actions are missing for '${file.path}'.`,
      );
    setPosition(null);
    setAnchor(anchorRef.current);
  };
  const toggle = () => tree.onToggleFolder(file.path);
  const rename = useInlineRename({
    isLabelActive: tree.canManage !== false && !mobile,
    isPending: tree.isPending,
    isSingleClickRenameEnabled: selected || allowSingleClickRename,
    value: name,
    onRename: async (value: string) => {
      if (tree.canManage === false || !tree.onRename)
        throw new Error("File rename actions are unavailable in this tree.");
      const trimmed = value.trim();
      if (!trimmed) {
        toast.error("Project item name must not be blank.");
        return false;
      }
      if (trimmed.includes("/") || trimmed.includes("\\")) {
        toast.error("Use Move to change this item's project folder.");
        return false;
      }
      const parent = getLatexParentPath(file.path);
      const path = parent ? `${parent}/${trimmed}` : trimmed;
      return path === file.path || tree.onRename(file, path);
    },
  });
  const content = (
    <Fragment>
      {folder && (
        <Box
          aria-hidden
          sx={{
            width: 14,
            flex: "0 0 14px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FolderChevron isExpanded={expanded} size={14} />
        </Box>
      )}
      <Box aria-hidden sx={iconStyles}>
        <FileKindIcon file={file} expanded={expanded} />
      </Box>
      <Box sx={labelStyles}>
        {rename.isRenaming ? (
          <InlineRenameInput
            ariaLabel={`Rename ${name}`}
            isPending={tree.isPending}
            value={rename.renameDraft}
            onCancel={rename.cancelRename}
            onChange={rename.setRenameDraft}
            onSubmit={rename.submitRename}
          />
        ) : (
          <RenameLabel
            isEnabled={tree.canManage !== false && !mobile && !tree.isPending}
            onClick={rename.handleLabelClick}
            onDoubleClick={rename.handleLabelDoubleClick}
          >
            <Typography variant={densityStyle.labelVariant} noWrap>
              {name}
            </Typography>
          </RenameLabel>
        )}
        {folder ? (
          <FolderMetadata
            detail={`${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            timestamp={file.lastUpdated}
          />
        ) : (
          <FileMetadata timestamp={file.lastUpdated} />
        )}
      </Box>
      {main && <Chip size="small" color="primary" label="Main" />}
    </Fragment>
  );
  return (
    <Box
      data-actions-open={menuOpen ? "true" : undefined}
      data-context-menu-open={position ? "true" : undefined}
      data-inline-renaming={rename.isRenaming ? "true" : undefined}
      sx={(theme: any) => ({
        ...sidebarRowStyles({
          isContextMenuOpen: !!position,
          isSelected: selected,
        })(theme),
        display: "flex",
        alignItems: "center",
        color: selected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      })}
      onContextMenu={(event: MouseEvent) => {
        if (!rename.isRenaming) {
          event.preventDefault();
          event.stopPropagation();
          setAnchor(null);
          setPosition({ left: event.clientX + 8, top: event.clientY + 8 });
        }
      }}
    >
      {rename.isRenaming ? (
        <Box sx={rowListStyles}>{content}</Box>
      ) : folder ? (
        <Tooltip title={file.path}>
          <ButtonBase
            aria-expanded={expanded}
            sx={buttonStyles}
            onClick={toggle}
          >
            {content}
          </ButtonBase>
        </Tooltip>
      ) : file.kind === "text" ? (
        <Tooltip title={file.path}>
          <Link
            aria-current={selected ? "page" : undefined}
            aria-disabled={tree.isPending || undefined}
            tabIndex={tree.isPending ? -1 : undefined}
            to="/chats"
            search={{
              "workspace-panel": "latex",
              "latex-document-id": file.documentId,
              "latex-file-id": file.id,
            }}
            sx={buttonStyles}
            onClick={(event: MouseEvent) => {
              if (tree.isPending) {
                event.preventDefault();
                return;
              }
              if (
                !event.defaultPrevented &&
                event.button === 0 &&
                !event.metaKey &&
                !event.ctrlKey &&
                !event.shiftKey &&
                !event.altKey
              ) {
                event.preventDefault();
                if (!selected) tree.onSelect(file);
              }
            }}
          >
            {content}
          </Link>
        </Tooltip>
      ) : (
        <Tooltip title={file.path}>
          <ButtonBase
            aria-current={selected ? "page" : undefined}
            sx={buttonStyles}
            onClick={() => tree.onSelect(file)}
          >
            {content}
          </ButtonBase>
        </Tooltip>
      )}
      {!rename.isRenaming && (
        <Box className="latex-file-row-actions" sx={rowActionContainerStyles}>
          <IconButton
            ref={anchorRef}
            data-sidebar-row-action-trigger="true"
            aria-label={`Actions for ${name}`}
            aria-expanded={menuOpen || undefined}
            aria-haspopup="menu"
            sx={rowActionButtonStyles}
            onClick={(event: MouseEvent) => {
              event.preventDefault();
              event.stopPropagation();
              menuOpen ? close() : openMenu();
            }}
          >
            <MoreIcon size={15} />
          </IconButton>
        </Box>
      )}
      <ItemMenu
        anchor={anchor}
        position={position}
        file={file}
        expanded={expanded}
        open={menuOpen}
        pending={tree.isPending}
        selected={selected}
        mainFilePath={tree.mainFilePath}
        canManage={tree.canManage !== false}
        name={name}
        onClose={close}
        onCreate={tree.onCreate}
        onDelete={tree.onDelete}
        onMove={tree.onMove}
        onRename={() => {
          close();
          rename.beginRename();
        }}
        onSelect={tree.onSelect}
        onSetMain={tree.onSetMain}
        onToggle={toggle}
      />
    </Box>
  );
});
function TreeNode({
  node,
  selectedPath,
  allowRename,
  tree,
}: {
  node: LatexFileTreeNode;
  selectedPath: string | null;
  allowRename: boolean;
  tree: LatexFileTreeProps & { onToggleFolder(path: string): void };
}) {
  const folder = node.file.kind === "folder";
  const expanded = folder && tree.expandedFolderPaths.has(node.file.path);
  const selected = node.file.id === tree.selectedFileId;
  const active =
    selected ||
    (folder && selectedPath?.startsWith(`${node.file.path}/`) === true);
  return (
    <Box
      component="li"
      data-active-explorer-path={active ? "true" : undefined}
      sx={childStyles}
    >
      <FileTreeRow
        file={node.file}
        expanded={expanded}
        itemCount={folder ? node.children.length : null}
        selected={selected}
        allowSingleClickRename={allowRename}
        tree={tree}
      />
      {folder && node.children.length > 0 && (
        <Fragment>
          <TreeConnector
            gap=".125rem"
            isExpanded={expanded}
            isInActivePath={active}
          />
          <CollapsibleTree isExpanded={expanded}>
            <Box component="ul" sx={nestedListStyles(undefined)}>
              {node.children.map((child) => (
                <TreeNode
                  node={child}
                  selectedPath={selectedPath}
                  allowRename={false}
                  tree={tree}
                  key={child.file.id}
                />
              ))}
            </Box>
          </CollapsibleTree>
        </Fragment>
      )}
    </Box>
  );
}
export const LatexFileTree = memo(function LatexFileTree(
  props: LatexFileTreeProps,
) {
  const expandedRef = useRef(props.expandedFolderPaths);
  const changeRef = useRef(props.onExpandedFolderPathsChange);
  expandedRef.current = props.expandedFolderPaths;
  changeRef.current = props.onExpandedFolderPathsChange;
  const toggle = useCallback((path: string) => {
    const next = new Set(expandedRef.current);
    next.has(path) ? next.delete(path) : next.add(path);
    changeRef.current(next);
  }, []);
  const nodes = useMemo(
    () => buildLatexFileTree(props.files, props.mainFilePath),
    [props.files, props.mainFilePath],
  );
  const selectedPath =
    props.files.find((file) => file.id === props.selectedFileId)?.path ?? null;
  const tree = { ...props, onToggleFolder: toggle };
  return (
    <Box
      component="ul"
      aria-label={props.ariaLabel}
      sx={nestedListStyles(undefined)}
    >
      {nodes.map((node) => (
        <TreeNode
          node={node}
          selectedPath={selectedPath}
          allowRename={props.allowRootItemSingleClickRename ?? false}
          tree={tree}
          key={node.file.id}
        />
      ))}
    </Box>
  );
});
export { ArchiveIcon };
