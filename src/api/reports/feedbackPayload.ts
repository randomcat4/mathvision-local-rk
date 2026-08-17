export type ReportKind = "bug" | "feedback";

export interface FeedbackReport {
  kind: ReportKind;
  message: string;
  chatId?: string | null;
  pageUrl?: string | null;
}

export interface FeedbackReportRequest {
  kind: ReportKind;
  message: string;
  chat_id: string | null;
  page_url: string | null;
}

export function serializeFeedbackReport(report: FeedbackReport): FeedbackReportRequest {
  return {
    kind: report.kind,
    message: report.message,
    chat_id: report.chatId ?? null,
    page_url: report.pageUrl ?? null,
  };
}
