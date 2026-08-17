import { AccessStatusPage } from "../../runtime/routeUiRuntime.js";

export function WaitlistPage() {
  return (
    <AccessStatusPage
      layout="split"
      title="Math Vision is at capacity"
      message="Your account is on the waitlist while access is limited. We may email you once a spot opens and your account is allowed to use the app."
      showWaitlistSignupForm={true}
    />
  );
}
