import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const input = await readFile(resolve("recovered/named/documents-DhCTfQKt.jsx"), "utf8");

function extractTemplate(variableName, nextMarker) {
  const marker = `const ${variableName} = \``;
  const start = input.indexOf(marker);
  const end = input.indexOf(nextMarker, start + marker.length);
  if (start < 0 || end < 0) throw new Error(`Could not extract ${variableName}.`);
  return input.slice(start + marker.length, end - 3);
}

const privacy = extractTemplate("g", "const v = `");
const termsStart = input.indexOf("const v = `");
const termsEnd = input.indexOf("const s = ", termsStart);
if (termsStart < 0 || termsEnd < 0) throw new Error("Could not extract terms.");
const terms = input.slice(termsStart + "const v = `".length, termsEnd - 3);
const output = `// Mechanically extracted verbatim from recovered/named/documents-DhCTfQKt.jsx.\nexport const PRIVACY_MARKDOWN = ${JSON.stringify(privacy)};\n\nexport const TERMS_MARKDOWN = ${JSON.stringify(terms)};\n\nexport interface LegalDocument {\n  title: string;\n  version: string;\n  effectiveDate: string;\n  markdown: string;\n}\n\nconst EFFECTIVE_DATE = "June 7, 2026";\n\nexport const termsDocument: LegalDocument = { title: "Terms of Service", version: "2026-06-07-v2", effectiveDate: EFFECTIVE_DATE, markdown: TERMS_MARKDOWN };\nexport const privacyDocument: LegalDocument = { title: "Privacy Policy", version: "2026-06-07-v2", effectiveDate: EFFECTIVE_DATE, markdown: PRIVACY_MARKDOWN };\n`;
await writeFile(resolve("src/features/legal/legalDocuments.ts"), output, "utf8");
