import { useMemo, useState } from "#production-react";
import {
  Alert,
  alpha,
  Box,
  Button,
  CheckCircleIcon,
  ConfirmationDialog,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FileIcon,
  TextField,
  Typography,
} from "../../runtime/latexDialogsRuntime.js";
import { getLatexProjectTemplate, latexProjectTemplates } from "./projectTemplates";

export interface UnsavedChangesDialogProps {
  error?: Error | null;
  isDiscarding?: boolean;
  isSaving: boolean;
  open: boolean;
  onCancel(): void;
  onDiscard(): void;
  onSaveAndContinue(): void;
}
export function LatexUnsavedChangesDialog({ error, isDiscarding = false, isSaving, open, onCancel, onDiscard, onSaveAndContinue }: UnsavedChangesDialogProps) {
  return <Dialog open={open} aria-labelledby="latex-unsaved-changes-title" onClose={isSaving || isDiscarding ? undefined : onCancel}>
    <DialogTitle id="latex-unsaved-changes-title">Save your changes?</DialogTitle>
    <DialogContent><Typography variant="body2" color="textSecondary">This file has changes that have not reached the server. Save them before continuing, or explicitly discard the local draft.</Typography>{error && <Alert severity="error" variant="outlined">{error.message}</Alert>}</DialogContent>
    <DialogActions><Button variant="outlined" disabled={isSaving || isDiscarding} onClick={onCancel}>Stay here</Button><Button color="error" disabled={isSaving || isDiscarding} onClick={onDiscard}>{isDiscarding ? "Discarding…" : "Discard and continue"}</Button><Button variant="contained" disabled={isSaving || isDiscarding} onClick={onSaveAndContinue}>{isSaving ? "Saving…" : "Save and continue"}</Button></DialogActions>
  </Dialog>;
}

export interface RecoveryDraftRecord { fileName?: string | null }
export interface RecoveryDialogProps {
  error?: Error | null;
  isDiscarding?: boolean;
  isCurrentRevision: boolean;
  open: boolean;
  record?: RecoveryDraftRecord | null;
  onDiscard(): void;
  onRestore(): void;
}
export function LatexRecoveryDialog({ error, isDiscarding = false, isCurrentRevision, open, record, onDiscard, onRestore }: RecoveryDialogProps) {
  return <Dialog open={open} aria-labelledby="latex-recovery-title" maxWidth="sm" fullWidth={true}>
    <DialogTitle id="latex-recovery-title">Recover local changes</DialogTitle>
    <DialogContent><Typography variant="body2" color="textSecondary">A newer local draft for {record?.fileName ?? "this file"} survived a refresh or browser crash.</Typography>{!isCurrentRevision && <Alert severity="warning" variant="outlined">The server copy changed after this recovery draft was created. Restoring it will keep the local text for review, but the next save may require conflict resolution.</Alert>}{error && <Alert severity="error" variant="outlined">{error.message}</Alert>}</DialogContent>
    <DialogActions><Button color="error" disabled={isDiscarding} onClick={onDiscard}>{isDiscarding ? "Discarding…" : "Discard local draft"}</Button><Button variant="contained" disabled={isDiscarding} onClick={onRestore}>Restore draft</Button></DialogActions>
  </Dialog>;
}

export interface SaveConflictDialogProps { currentRevision: number | null; error?: Error | null; isReloading?: boolean; open: boolean; onKeepLocalChanges(): void; onReloadServerCopy(): void }
export function LatexSaveConflictDialog({ currentRevision, error, isReloading = false, open, onKeepLocalChanges, onReloadServerCopy }: SaveConflictDialogProps) {
  return <Dialog open={open} fullWidth={true} maxWidth="sm" aria-labelledby="latex-save-conflict-title"><DialogTitle id="latex-save-conflict-title">This project changed elsewhere</DialogTitle><DialogContent><Typography variant="body2" color="textSecondary">Another tab or device saved a newer revision. Reload the server copy to avoid overwriting it, or explicitly keep your local text and save it on top of revision {currentRevision ?? "the latest"}.</Typography>{error && <Alert severity="error" variant="outlined">{error.message}</Alert>}</DialogContent><DialogActions><Button variant="outlined" disabled={isReloading} onClick={onReloadServerCopy}>{isReloading ? "Reloading…" : "Reload server copy"}</Button><Button color="warning" variant="contained" disabled={currentRevision === null || isReloading} onClick={onKeepLocalChanges}>Keep my local changes</Button></DialogActions></Dialog>;
}

export interface DeleteConfirmationProps { isDeleting: boolean; open: boolean; target: string; onCancel(): void; onConfirm(): void }
export function LatexDeleteConfirmationDialog({ isDeleting, open, target, onCancel, onConfirm }: DeleteConfirmationProps) {
  return <ConfirmationDialog open={open} title={`Delete ${target}?`} message="This removes the item from your active workspace. The server keeps a recoverable archived record." confirmLabel="Delete" pendingConfirmLabel="Deleting..." confirmColor="error" isPending={isDeleting} onClose={onCancel} onConfirm={onConfirm} />;
}

interface DialogTheme { spacing(value: number): string; breakpoints: { down(value: string): string }; shape: { borderRadiusPx: number }; palette: { primary: { main: string }; text: { primary: string }; background: { paper: string } }; transitions: { create(properties: string[]): string } }
const templateGridStyles = (theme: DialogTheme) => ({ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: theme.spacing(1), marginTop: theme.spacing(1.5), [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" } });
const templateCardStyles = (selected: boolean) => (theme: DialogTheme) => ({ minHeight: "7rem", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", gap: theme.spacing(1), padding: theme.spacing(1.25), border: `1px solid ${selected ? alpha(theme.palette.primary.main, 0.55) : alpha(theme.palette.text.primary, 0.12)}`, borderRadius: theme.shape.borderRadiusPx, backgroundColor: selected ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.background.paper, 0.55), color: theme.palette.text.primary, textAlign: "left", cursor: "pointer", transition: theme.transitions.create(["background-color", "border-color", "transform"]), "&:hover": { borderColor: alpha(theme.palette.primary.main, 0.4), backgroundColor: alpha(theme.palette.primary.main, 0.07), transform: "translateY(-1px)" }, "&:focus-visible": { outline: `2px solid ${alpha(theme.palette.primary.main, 0.45)}`, outlineOffset: 2 } });
const templateTextStyles = { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 0.35 };

export interface CreateProjectInput { name: string; source: string; templateId: string }
export interface CreateProjectDialogProps { isCreating: boolean; open: boolean; onClose(): void; onCreate(input: CreateProjectInput): Promise<boolean> }
export function LatexCreateProjectDialog({ isCreating, open, onClose, onCreate }: CreateProjectDialogProps) {
  const [templateId, setTemplateId] = useState("article");
  const selectedTemplate = useMemo(() => getLatexProjectTemplate(templateId), [templateId]);
  const [projectName, setProjectName] = useState(latexProjectTemplates[0].projectName);
  return <Dialog open={open} fullWidth={true} maxWidth="md" aria-labelledby="latex-create-project-title" onClose={isCreating ? undefined : onClose}><DialogTitle id="latex-create-project-title">Create a LaTeX project</DialogTitle><DialogContent dividers={true}><Typography variant="body2" color="textSecondary">Pick a starting point and name the project. A main.tex file is created automatically; you can add folders, bibliography files, packages, and assets afterward.</Typography><Box sx={templateGridStyles}>{latexProjectTemplates.map((template) => { const selected = template.id === templateId; return <Box component="button" type="button" aria-pressed={selected} sx={templateCardStyles(selected)} onClick={() => { setTemplateId(template.id); setProjectName(template.projectName); }} key={template.id}>{selected ? <CheckCircleIcon size={20} /> : <FileIcon size={20} />}<Box sx={templateTextStyles}><Typography variant="subtitle1">{template.name}</Typography><Typography variant="body2" color="textSecondary">{template.description}</Typography></Box></Box>; })}</Box><TextField fullWidth={true} autoFocus={true} margin="normal" label="Project name" value={projectName} onChange={(event: { target: { value: string } }) => setProjectName(event.target.value)} /></DialogContent><DialogActions><Button variant="outlined" disabled={isCreating} onClick={onClose}>Cancel</Button><Button variant="contained" disabled={isCreating || projectName.trim().length === 0} onClick={() => { void onCreate({ name: projectName, source: selectedTemplate.source, templateId: selectedTemplate.id }).then((created) => { if (created) onClose(); }); }}>{isCreating ? "Creating…" : "Create project"}</Button></DialogActions></Dialog>;
}

export const LatexProjectDialogs = Object.freeze({ LatexCreateProjectDialog, LatexDeleteConfirmationDialog });
