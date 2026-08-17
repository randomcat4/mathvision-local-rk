import {
  LegalDocumentPage,
  privacyDocument,
  termsDocument,
} from "../../runtime/routeUiRuntime.js";

export function PrivacyPage() {
  return <LegalDocumentPage document={privacyDocument} />;
}

export function TermsPage() {
  return <LegalDocumentPage document={termsDocument} />;
}
