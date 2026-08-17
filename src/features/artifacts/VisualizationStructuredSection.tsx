import { useMemo, type ReactNode } from "#production-react";
import {
  getMessageArtifactsByKind,
  type Artifact,
} from "../../runtime/artifactUiRuntime.js";
import {
  GeneratedArtifactContent,
  type MathSyntax,
} from "./GeneratedArtifactContent";

export interface VisualizationStructuredSectionProps {
  artifactMessage?: unknown;
  artifactRefs: unknown;
  artifacts?: Artifact[] | null;
  children: ReactNode;
  mathSyntax?: MathSyntax;
}

export function VisualizationStructuredSection({
  artifactMessage,
  artifactRefs,
  artifacts,
  children,
  mathSyntax,
}: VisualizationStructuredSectionProps) {
  const messageArtifacts = useMemo(
    () => (artifactMessage ? getMessageArtifactsByKind(artifactMessage, "visualization") : []),
    [artifactMessage],
  );
  return (
    <GeneratedArtifactContent
      artifactRefs={artifactRefs}
      artifacts={artifacts ?? messageArtifacts}
      mathSyntax={mathSyntax}
    >
      {children}
    </GeneratedArtifactContent>
  );
}
