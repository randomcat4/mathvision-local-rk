import type { ComponentType } from "react";
import type { Artifact } from "./artifactUiRuntime";

export const Chip: ComponentType<any>;
export const CodeSourceCard: ComponentType<any>;
export const DownloadSourceButton: ComponentType<any>;
export const InlineMarkdown: ComponentType<any>;
export const Stack: ComponentType<any>;
export const Typography: ComponentType<any>;
export function getArtifactsFromMessage(message: unknown, kind: string): Artifact[];
