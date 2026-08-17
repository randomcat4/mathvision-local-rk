import {
  getLatexPdfCompileJob,
  isLatexPdfCompilePending,
  type LatexPdfCompileJob,
} from "../../runtime/latexRuntime.js";

const POLL_INTERVAL_MS = 700;
let compileQueueTail: Promise<void> = Promise.resolve();

const waitForPollInterval = () =>
  new Promise<void>((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));

async function waitForCompileToSettle(jobId: string): Promise<LatexPdfCompileJob> {
  let job = await getLatexPdfCompileJob(jobId);
  while (isLatexPdfCompilePending(job)) {
    await waitForPollInterval();
    job = await getLatexPdfCompileJob(jobId);
  }
  return job;
}

export interface QueuedWriteupPdfCompile {
  job: LatexPdfCompileJob;
  settledJobPromise: Promise<LatexPdfCompileJob>;
}

export async function enqueueWriteupPdfCompile(
  startCompile: () => Promise<LatexPdfCompileJob>,
): Promise<QueuedWriteupPdfCompile> {
  const previous = compileQueueTail;
  let releaseQueue: () => void = () => {};
  const release = new Promise<void>((resolve) => {
    releaseQueue = resolve;
  });
  compileQueueTail = previous.then(() => release, () => release);
  await previous;

  try {
    const job = await startCompile();
    const settledJobPromise = waitForCompileToSettle(job.id);
    void settledJobPromise
      .catch((error: unknown) => {
        console.warn("Could not monitor queued writeup PDF compile job.", error);
      })
      .finally(releaseQueue);
    return { job, settledJobPromise };
  } catch (error) {
    releaseQueue();
    throw error;
  }
}
