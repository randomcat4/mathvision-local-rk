export const keycloak: {
  token?: string;
  tokenParsed?: { exp?: number };
};

export const authSession: {
  isLoggedIn(): boolean;
  updateToken(onUpdated: () => void): Promise<unknown>;
};
