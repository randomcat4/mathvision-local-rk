export const OVERLEAF_NAME_LIMIT = 180;
export const OVERLEAF_ARCHIVE_SIZE_LIMIT = 52_428_800;

export function submitOverleafForm(
  fields: Record<string, string>,
  target = "_blank",
  targetDocument: Document = document,
): void {
  const form = targetDocument.createElement("form");
  form.action = "https://www.overleaf.com/docs";
  form.method = "post";
  form.target = target;
  form.setAttribute("rel", "noopener noreferrer");
  Object.entries(fields).forEach(([name, value]) => {
    const input = targetDocument.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });
  targetDocument.body.appendChild(form);
  form.submit();
  form.remove();
}

export function readBlobAsDataUrl(archive: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        if (typeof reader.result !== "string") {
          reject(new Error("Could not encode the project archive."));
          return;
        }
        resolve(reader.result);
      },
      { once: true },
    );
    reader.addEventListener(
      "error",
      () => reject(reader.error ?? new Error("Could not read the project archive.")),
      { once: true },
    );
    reader.addEventListener(
      "abort",
      () => reject(new Error("Project archive encoding was interrupted.")),
      { once: true },
    );
    reader.readAsDataURL(archive);
  });
}

export interface ExportToOverleafOptions {
  archive: Blob;
  compiler: string;
  mainDocument: string;
  name: string;
  targetWindow: Window;
}

export async function exportToOverleaf({
  archive,
  compiler,
  mainDocument,
  name,
  targetWindow,
}: ExportToOverleafOptions): Promise<void> {
  if (archive.size > OVERLEAF_ARCHIVE_SIZE_LIMIT) {
    throw new Error("Overleaf project archives cannot exceed 50 MB.");
  }
  const dataUrl = await readBlobAsDataUrl(archive);
  submitOverleafForm(
    { snip_uri: dataUrl, snip_name: name, main_document: mainDocument, engine: compiler },
    "_self",
    targetWindow.document,
  );
}
