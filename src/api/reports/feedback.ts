import { apiBasePath, httpClient } from "../../runtime/bundledHttpClient.js";
import {
  serializeFeedbackReport,
  type FeedbackReport,
} from "./feedbackPayload";

export * from "./feedbackPayload";

export async function sendFeedbackReport(report: FeedbackReport): Promise<void> {
  await httpClient.post(apiBasePath, "reports/bug-feedback", serializeFeedbackReport(report));
}
