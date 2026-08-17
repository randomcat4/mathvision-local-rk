import { AccessStatusPage } from "../../runtime/routeUiRuntime.js";

export function AccountDisabledPage() {
  return (
    <AccessStatusPage
      title="Your account has been disabled"
      message="Your access to Math Vision has been disabled. Please contact an administrator if you believe this is a mistake."
    />
  );
}
