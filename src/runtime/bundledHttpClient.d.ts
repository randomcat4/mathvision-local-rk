export interface HttpClient {
  get<T>(basePath: string, path: string, params?: unknown, signal?: AbortSignal): Promise<T>;
  post<T>(basePath: string, path: string, body: unknown): Promise<T>;
  put<T>(basePath: string, path: string, body: unknown): Promise<T>;
  patch<T>(basePath: string, path: string, body: unknown, params?: unknown): Promise<T>;
  delete<T>(basePath: string, path: string, params?: unknown): Promise<T>;
}

export const httpClient: HttpClient;
export const apiBasePath: string;
export const adminApiBasePath: string;
export function createHttpResponseError(response: Response): Error;
