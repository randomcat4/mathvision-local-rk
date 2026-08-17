import axios, { AxiosHeaders } from "axios";
import { authSession, keycloak } from "./authRuntime.js";

export const apiBasePath = "api/v1";
export const adminApiBasePath = `${apiBasePath}/admin`;

export class ApiRequestError extends Error {
  constructor({
    status,
    code = null,
    detail = null,
    requestId = null,
    activeCount = null,
    requestedCount = null,
    limit = null,
    expectedRevision = null,
    currentRevision = null,
  }) {
    super(
      status === null
        ? "Could not reach the server. Check your connection and try again."
        : status >= 500
          ? "Something went wrong on our side. Please try again."
          : "We couldn’t complete that request. Please try again.",
    );
    this.name = "ApiRequestError";
    Object.assign(this, {
      status,
      code,
      detail,
      requestId,
      activeCount,
      requestedCount,
      limit,
      expectedRevision,
      currentRevision,
    });
  }
}

export function createHttpResponseError(response) {
  return new ApiRequestError({
    status: response.status,
    requestId: response.headers.get("x-request-id"),
  });
}

function normalizeAxiosError(error) {
  if (axios.isCancel(error) || !axios.isAxiosError(error)) return error;
  const data = error.response?.data;
  const code =
    data && typeof data === "object" && typeof data.code === "string"
      ? data.code
      : null;
  const rawDetail =
    data && typeof data === "object" && "detail" in data ? data.detail : null;
  const detailObject =
    rawDetail && typeof rawDetail === "object" ? rawDetail : null;
  const detail =
    typeof rawDetail === "string"
      ? rawDetail
      : typeof detailObject?.message === "string"
        ? detailObject.message
        : null;
  return new ApiRequestError({
    status: error.response?.status ?? null,
    code:
      code ??
      (typeof detailObject?.code === "string" ? detailObject.code : null),
    detail,
    requestId:
      typeof error.response?.headers?.["x-request-id"] === "string"
        ? error.response.headers["x-request-id"]
        : null,
    activeCount:
      data && typeof data === "object" && typeof data.active_count === "number"
        ? data.active_count
        : null,
    requestedCount:
      data && typeof data === "object" && typeof data.requested_count === "number"
        ? data.requested_count
        : null,
    limit:
      data && typeof data === "object" && typeof data.limit === "number"
        ? data.limit
        : null,
    expectedRevision:
      typeof detailObject?.expected_revision === "number"
        ? detailObject.expected_revision
        : null,
    currentRevision:
      typeof detailObject?.current_revision === "number"
        ? detailObject.current_revision
        : null,
  });
}

const localPreview = ["127.0.0.1", "localhost"].includes(
  window.location.hostname,
);
const client = axios.create({
  adapter: localPreview ? "fetch" : undefined,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.request.use(async (config) => {
  config.headers ||= new AxiosHeaders();
  config.url = `https://app.mathvision.ai/${config.url}`;
  if (localPreview || !authSession.isLoggedIn()) return config;
  const expiresAt = keycloak.tokenParsed?.exp ?? 0;
  if (expiresAt - Math.floor(Date.now() / 1000) < 30) {
    await authSession.updateToken(() => {});
  }
  if (!keycloak.token) {
    throw new Error("Authentication token was not available after refresh.");
  }
  config.headers.Authorization = `Bearer ${keycloak.token}`;
  return config;
});
client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeAxiosError(error)),
);

export const httpClient = {
  get: (basePath, path, params, signal) =>
    client
      .get(`${basePath}/${path}`, { params, signal })
      .then((response) => response.data),
  post: (basePath, path, body) =>
    client.post(`${basePath}/${path}`, body).then((response) => response.data),
  put: (basePath, path, body) =>
    client.put(`${basePath}/${path}`, body).then((response) => response.data),
  patch: (basePath, path, body, params) =>
    client
      .patch(`${basePath}/${path}`, body, { params })
      .then((response) => response.data),
  delete: (basePath, path, params) =>
    client
      .delete(`${basePath}/${path}`, { params })
      .then((response) => response.data),
};
