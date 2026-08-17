import { useEffect, useState } from "#production-react";

export function decodePdfBase64(value: string): Blob {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: "application/pdf" });
}

export function usePdfObjectUrl(base64Pdf: string | null | undefined): string | null {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!base64Pdf) {
      setObjectUrl(null);
      return;
    }

    const nextObjectUrl = URL.createObjectURL(decodePdfBase64(base64Pdf));
    setObjectUrl(nextObjectUrl);
    return () => URL.revokeObjectURL(nextObjectUrl);
  }, [base64Pdf]);

  return objectUrl;
}
