export const LATEX_FILE_EXTENSION: string;
export function hashWriteupSource(source: string): string;

export interface LatexPdfCompileJob {
  id: string;
  status?: string;
  [key: string]: unknown;
}

export function getLatexPdfCompileJob(jobId: string): Promise<LatexPdfCompileJob>;
export function isLatexPdfCompilePending(job: LatexPdfCompileJob): boolean;
