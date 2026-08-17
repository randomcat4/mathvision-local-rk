import type { ComponentType } from "react";
export const Box: ComponentType<any>;
export const ButtonBase: ComponentType<any>;
export const Chip: ComponentType<any>;
export const CollapsibleTree: ComponentType<any>;
export const CopyIcon: ComponentType<any>;
export const CreateFolderIcon: ComponentType<any>;
export const Divider: ComponentType<any>;
export const FileIcon: ComponentType<any>;
export const FileMetadata: ComponentType<any>;
export const FolderChevron: ComponentType<any>;
export const FolderClosedIcon: ComponentType<any>;
export const FolderMetadata: ComponentType<any>;
export const FolderOpenIcon: ComponentType<any>;
export const GenericFileIcon: ComponentType<any>;
export const IconButton: ComponentType<any>;
export const ImageFileIcon: ComponentType<any>;
export const InlineRenameInput: ComponentType<any>;
export const Link: ComponentType<any>;
export const ListItemIcon: ComponentType<any>;
export const Menu: ComponentType<any>;
export const MenuHeader: ComponentType<any>;
export const MenuItem: ComponentType<any>;
export const MoreIcon: ComponentType<any>;
export const MoveIcon: ComponentType<any>;
export const NewFileIcon: ComponentType<any>;
export const RenameIcon: ComponentType<any>;
export const RenameLabel: ComponentType<any>;
export const Tooltip: ComponentType<any>;
export const TrashIcon: ComponentType<any>;
export const TreeConnector: ComponentType<any>;
export const Typography: ComponentType<any>;
export const contextMenuPositionStyles: unknown;
export const destructiveMenuItemStyles: unknown;
export const menuListStyles: unknown;
export const menuPaperStyles: unknown;
export const menuRootStyles: unknown;
export const nestedListStyles: (value: unknown) => unknown;
export const rowActionButtonStyles: unknown;
export const rowActionContainerStyles: unknown;
export const sidebarDensity: Record<string, { labelVariant: string }>;
export function sidebarRowStyles(input: {
  isContextMenuOpen: boolean;
  isSelected: boolean;
}): (theme: any) => Record<string, unknown>;
export function createLucideIcon(
  name: string,
  nodes: unknown[],
): ComponentType<any>;
export const toast: {
  success(message: string): void;
  error(message: string): void;
};
export function copyText(value: string): Promise<boolean>;
export function useIsMobile(): boolean;
export function useSidebarContext(): { density: string };
export function useInlineRename(options: any): any;
