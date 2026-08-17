/** Behavior-preserving recovery of authFetch-DXjDztUP.js. */

import { authSession, keycloak } from "../../runtime/authRuntime.js";

const TOKEN_REFRESH_WINDOW_SECONDS = 30;

async function refreshExpiringToken(): Promise<void> {
  if (!authSession.isLoggedIn()) {
    throw new Error("Authentication is required for this request.");
  }
  const expiresAt = keycloak.tokenParsed?.exp;
  if (expiresAt === undefined) {
    throw new Error("Authentication token is missing an expiration.");
  }
  const now = Math.floor(Date.now() / 1_000);
  if (expiresAt - now < TOKEN_REFRESH_WINDOW_SECONDS) {
    await authSession.updateToken(() => {});
  }
}

export async function getAuthorizationHeader(): Promise<string> {
  await refreshExpiringToken();
  if (!keycloak.token) {
    throw new Error("Authentication token was not available after refresh.");
  }
  return `Bearer ${keycloak.token}`;
}
