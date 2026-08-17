import { Fragment, Suspense, lazy, useCallback, useMemo, useState, type MouseEvent, type ReactNode } from "#production-react";
import { LatexAttachmentPreviewDrawer } from "./LatexAttachmentPreviewDrawer";
import {
  alpha,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  ExternalLinkIcon,
  FilePlusIcon,
  getAvailableLatexDocumentName,
  isModifiedEvent,
  Popover,
  RouterLink,
  setLatexDocumentSearch,
  TextField,
  toast,
  TooltipIconButton,
  Typography,
  useLatexDocuments,
  useNavigate,
  type LatexDocumentOption,
} from "../../runtime/latexDocumentSelectorRuntime.js";

const EyeIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>;
const optionStyles = { minWidth: 0, width: "100%", display: "flex", alignItems: "center", gap: 1 };
const optionTextStyles = { minWidth: 0, flex: 1, display: "flex", flexDirection: "column" };
interface SelectorTheme { spacing(value: number): string; shape: { radiusSmPx: number }; palette: { text: { secondary: string }; primary: { main: string } } }
const optionActionStyles = (theme: SelectorTheme) => ({ flex: "0 0 auto", width: theme.spacing(3.4), height: theme.spacing(3.4), display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: theme.shape.radiusSmPx, color: theme.palette.text.secondary, "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.main } });

function DocumentOption({ option, selected, listItemProps }: { option: LatexDocumentOption; selected: boolean; listItemProps: Record<string, unknown> }) {
  const navigate = useNavigate();
  const [previewMounted, setPreviewMounted] = useState(false);
  const openEditor = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.button === 0 || event.button === 1) {
      if (!isModifiedEvent()) {
        event.preventDefault();
        navigate({ to: "/chats", search: (search: Record<string, unknown>) => setLatexDocumentSearch(search, option.id) });
      }
    }
  }, [navigate, option.id]);
  const previewButton = <TooltipIconButton tooltip={`Inspect math in ${option.name}`} aria-label={`Inspect math in ${option.name}`} size="small" disableRipple={true} sx={optionActionStyles} onMouseDown={(event: MouseEvent) => event.stopPropagation()} onClick={(event: MouseEvent) => { event.stopPropagation(); setPreviewMounted(true); }}><EyeIcon /></TooltipIconButton>;
  return <li {...listItemProps}><Box sx={optionStyles}><Checkbox checked={selected} size="small" tabIndex={-1} disableRipple={true}/><Box sx={optionTextStyles}><Typography variant="body2" noWrap={true}>{option.name}</Typography><Typography variant="caption" color="textSecondary" noWrap={true}>Last edited {new Date(option.lastUpdated).toLocaleDateString()}</Typography></Box>{!previewMounted && previewButton}{previewMounted && <Suspense fallback={previewButton}><LatexAttachmentPreviewDrawer name={option.name} source={option.source} defaultOpen={true} drawerProps={{ onClick: (event: MouseEvent) => event.stopPropagation(), onSelect: (event: Event) => event.stopPropagation(), onMouseDown: (event: MouseEvent) => event.stopPropagation() }}>{<TooltipIconButton tooltip={`Inspect math in ${option.name}`} aria-label={`Inspect math in ${option.name}`} size="small" disableRipple={true} sx={optionActionStyles} onMouseDown={(event: MouseEvent) => event.stopPropagation()} onClick={(event: MouseEvent) => event.stopPropagation()}><EyeIcon /></TooltipIconButton>}</LatexAttachmentPreviewDrawer></Suspense>}<RouterLink to="/chats" search={{ "workspace-panel": "latex", "latex-document-id": option.id }} target="_blank" rel="noreferrer" aria-label={`Open ${option.name} in LaTeX editor`} title="Open in LaTeX editor" sx={optionActionStyles} onMouseDown={(event: MouseEvent) => event.stopPropagation()} onClick={openEditor} onAuxClick={openEditor}><ExternalLinkIcon /></RouterLink></Box></li>;
}

const autocompleteStyles = { width: "100%", border: "none" };
const paperStyles = { mt: 1, boxShadow: "none", backgroundImage: "none" };
const listboxStyles = { maxHeight: "16rem", p: 0 };
function StaticPopper({ children, open }: { children: ReactNode | ((props: { placement: string }) => ReactNode); open: boolean }) { if (!open) return null; return <Box>{typeof children === "function" ? children({ placement: "bottom" }) : children}</Box>; }

interface DocumentListProps { value: LatexDocumentOption[]; documents: LatexDocumentOption[]; disabled: boolean; loading: boolean; hasError: boolean; onChange(documents: LatexDocumentOption[]): void }
function DocumentList({ value, documents, disabled, loading, hasError, onChange }: DocumentListProps) {
  return <Autocomplete multiple={true} open={true} disableCloseOnSelect={true} disablePortal={true} disabled={disabled} loading={loading} options={documents} value={value} fullWidth={true} size="small" sx={autocompleteStyles} slots={{ popper: StaticPopper }} slotProps={{ paper: { elevation: 0, variant: "inset", sx: paperStyles }, listbox: { sx: listboxStyles } }} forcePopupIcon={false} isOptionEqualToValue={(left: LatexDocumentOption, right: LatexDocumentOption) => left.id === right.id} getOptionLabel={(option: LatexDocumentOption) => option.name} filterOptions={(options: LatexDocumentOption[], { inputValue }: { inputValue: string }) => { const query = inputValue.toLowerCase(); return options.filter((option) => option.name.toLowerCase().includes(query)); }} loadingText="Loading LaTeX projects..." noOptionsText={hasError ? "Could not load LaTeX projects." : "No LaTeX projects found."} renderValue={() => null} onChange={(_event: unknown, next: LatexDocumentOption[]) => onChange(next)} renderOption={({ key, ...props }: { key: string } & Record<string, unknown>, option: LatexDocumentOption, { selected }: { selected: boolean }) => <DocumentOption option={option} selected={selected} listItemProps={props} key={key}/>} renderInput={(params: { slotProps: { input: Record<string, unknown> } } & Record<string, unknown>) => <TextField {...params} autoFocus={true} variant="standard" placeholder="Search LaTeX projects" error={hasError} size="small" slotProps={{ ...params.slotProps, input: { ...params.slotProps.input, disableUnderline: true, endAdornment: <Fragment>{loading && <CircularProgress color="inherit" size={18}/>} {params.slotProps.input.endAdornment as ReactNode}</Fragment> } }}/>} />;
}

const createButtonStyles = { justifyContent: "flex-start" };
const dividerStyles = { my: 1 };
const popoverStyles = { width: "min(22rem, calc(100vw - 2rem))", p: 1 };
interface SelectorPopoverProps extends DocumentListProps { anchorEl: HTMLElement | null; onClose(): void; onOpenCreateDrawer(): boolean }
function SelectorPopover({ anchorEl, onClose, onOpenCreateDrawer, ...listProps }: SelectorPopoverProps) {
  return <Popover id="latex-document-selector-popover" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} transformOrigin={{ vertical: "top", horizontal: "left" }} slotProps={{ paper: { variant: "floating", sx: popoverStyles } }}><Button type="button" fullWidth={true} variant="text" color="secondary" disableRipple={true} disabled={listProps.disabled || listProps.loading} sx={createButtonStyles} onClick={() => { if (onOpenCreateDrawer()) onClose(); }} startIcon={<FilePlusIcon/>}>Create LaTeX project</Button><Divider sx={dividerStyles}/><DocumentList {...listProps}/></Popover>;
}

const LazyCreateDrawer = lazy(() => import("./LatexDocumentCreateDrawer").then((module) => ({ default: module.LatexDocumentCreateDrawer })));
export interface LatexDocumentSelectorProps { anchorEl: HTMLElement | null; attachedDocumentIds: string[]; disabled: boolean; onChange(documents: LatexDocumentOption[]): void; onClose(): void }
export function LatexDocumentSelector({ anchorEl, attachedDocumentIds, disabled, onChange, onClose }: LatexDocumentSelectorProps) {
  const query = useLatexDocuments();
  const documents = useMemo(() => query.data ?? [], [query.data]);
  const selected = useMemo(() => documents.filter((document) => attachedDocumentIds.includes(document.id)), [attachedDocumentIds, documents]);
  const [createOpen, setCreateOpen] = useState(false);
  const [initialName, setInitialName] = useState("");
  const [drawerKey, setDrawerKey] = useState(0);
  const openCreate = useCallback(() => { try { setInitialName(getAvailableLatexDocumentName(documents)); setDrawerKey((value) => value + 1); setCreateOpen(true); return true; } catch (error) { toast.error(error instanceof Error ? error.message : "Could not create LaTeX project."); return false; } }, [documents]);
  const created = useCallback((document: LatexDocumentOption) => { onChange(selected.some((item) => item.id === document.id) ? selected : [...selected, document]); setCreateOpen(false); }, [onChange, selected]);
  return <Fragment><SelectorPopover anchorEl={anchorEl} value={selected} documents={documents} disabled={disabled} loading={query.isPending} hasError={query.isError} onChange={onChange} onClose={onClose} onOpenCreateDrawer={openCreate}/>{createOpen && <Suspense fallback={null}><LazyCreateDrawer open={true} initialName={initialName} onClose={() => setCreateOpen(false)} onDocumentCreated={created} key={drawerKey}/></Suspense>}</Fragment>;
}
