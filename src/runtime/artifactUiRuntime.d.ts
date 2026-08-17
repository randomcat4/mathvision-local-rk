import type { ComponentType } from "react";

export const Box: ComponentType<any>;
export const SupportingArtifactCard: ComponentType<any>;
export const ViewportVisualizationFigure: ComponentType<any>;
export const artifactContentStyles: unknown;
export const messageContentStyles: unknown;
export const artifactListStyles: unknown;
export function getMessageArtifactsByKind(message: unknown, kind: string): Artifact[];

export interface Artifact {
  key: string;
  name: string;
  kind: string;
  attachmentId?: string | null;
  href?: string | null;
  [key: string]: unknown;
}
