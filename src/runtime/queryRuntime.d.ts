export interface QueryOptions<TData> {
  queryKey: readonly unknown[];
  queryFn: () => Promise<TData>;
  retry?: boolean;
  staleTime?: number;
  gcTime?: number;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean | "always";
  refetchInterval?: false | number | ((query: { state: { data?: TData } }) => false | number);
}

export interface QueryResult<TData> {
  data?: TData;
  error: unknown;
  fetchStatus: string;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch(): Promise<{ data?: TData; error?: unknown }>;
}

export interface BundledQueryClient {
  fetchQuery<TData>(options: QueryOptions<TData>): Promise<TData>;
  setQueryData<TData>(queryKey: readonly unknown[], data: TData | ((current: TData | undefined) => TData | undefined)): void;
}

export function useBundledQuery<TData>(options: QueryOptions<TData>): QueryResult<TData>;
export function useBundledQueryClient(): BundledQueryClient;

export interface MutationResult<TInput, TOutput = void> {
  error: unknown;
  isError: boolean;
  isIdle: boolean;
  isPending: boolean;
  isSuccess: boolean;
  mutate(
    input: TInput,
    callbacks?: { onSuccess?(data: TOutput): void; onError?(error: unknown): void },
  ): void;
  reset(): void;
}

export function useBundledMutation<TInput, TOutput = void>(options: {
  mutationFn(input: TInput): Promise<TOutput>;
  onSuccess?(data: TOutput, variables: TInput): void;
}): MutationResult<TInput, TOutput>;
