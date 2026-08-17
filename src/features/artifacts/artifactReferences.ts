export interface ArtifactReference {
  artifactName: string;
  caption: string;
  altText: string;
  pythonCode: string | null;
}

function recordValue(value: unknown, key: string): unknown {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return null;
  return Object.entries(value).find(([entryKey]) => entryKey === key)?.[1] ?? null;
}

const stringValue = (value: unknown) => (typeof value === "string" ? value : null);

export function parseArtifactReferences(value: unknown): ArtifactReference[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) => {
    const artifactName = stringValue(recordValue(entry, "artifact_name"))?.trim();
    const caption = stringValue(recordValue(entry, "caption"))?.trim();
    const altText = stringValue(recordValue(entry, "alt_text"))?.trim();
    const pythonCode = stringValue(recordValue(entry, "python_code"));
    return artifactName && caption && altText
      ? [{ artifactName, caption, altText, pythonCode }]
      : [];
  });
}
