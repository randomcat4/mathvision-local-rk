import type { ReactNode } from "#production-react";
import {
  artifactContentStyles,
  artifactListStyles,
  Box,
  messageContentStyles,
  SupportingArtifactCard,
  ViewportVisualizationFigure,
  type Artifact,
} from "../../runtime/artifactUiRuntime.js";
import { parseArtifactReferences } from "./artifactReferences";

export type MathSyntax = "compatibility" | string;

export interface GeneratedArtifactContentProps {
  artifactRefs: unknown;
  artifacts: Artifact[];
  children: ReactNode;
  mathSyntax?: MathSyntax;
}

export function GeneratedArtifactContent({
  artifactRefs,
  artifacts,
  children,
  mathSyntax = "compatibility",
}: GeneratedArtifactContentProps) {
  const references = parseArtifactReferences(artifactRefs);
  const referenceByName = new Map(references.map((reference) => [reference.artifactName, reference]));
  const artifactByName = new Map(artifacts.map((artifact) => [artifact.name, artifact]));
  const includedNames = new Set<string>();
  const orderedArtifacts = references.flatMap((reference) => {
    const artifact = artifactByName.get(reference.artifactName);
    if (!artifact || includedNames.has(artifact.name)) return [];
    includedNames.add(artifact.name);
    return [artifact];
  });
  let figureNumber = 0;
  let supportingFileNumber = 0;

  return (
    <Box sx={artifactContentStyles}>
      <Box sx={messageContentStyles}>{children}</Box>
      {orderedArtifacts.length > 0 && (
        <Box sx={artifactListStyles}>
          {orderedArtifacts.map((artifact) => {
            const reference = referenceByName.get(artifact.name);
            const caption = reference?.caption ?? artifact.name;
            const altText = reference?.altText ?? caption;
            const pythonCode = reference?.pythonCode;
            if (
              (artifact.kind === "image" && Boolean(artifact.attachmentId || artifact.href)) ||
              (artifact.kind !== "image" && artifact.kind !== "file" && Boolean(artifact.attachmentId))
            ) {
              figureNumber += 1;
              return (
                <ViewportVisualizationFigure
                  altText={altText}
                  artifact={artifact}
                  caption={caption}
                  figureNumber={figureNumber}
                  mathSyntax={mathSyntax}
                  pythonCode={pythonCode}
                  key={artifact.key}
                />
              );
            }
            supportingFileNumber += 1;
            return (
              <SupportingArtifactCard
                artifact={artifact}
                caption={caption}
                mathSyntax={mathSyntax}
                pythonCode={pythonCode}
                supportingFileNumber={supportingFileNumber}
                key={artifact.key}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}
