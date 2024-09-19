import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiListSummaryQueryResponse } from "../types/CoreApiListSummary";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiListSummaryClient = typeof client<CoreApiListSummaryQueryResponse, never, never>;
type CoreApiListSummary = {
    data: CoreApiListSummaryQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiListSummaryQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiListSummaryClient>[0]>;
        return: Awaited<ReturnType<CoreApiListSummaryClient>>;
    };
};
export const coreApiListSummaryQueryKey = () => [{ url: "/api/homeworks/summary/" }] as const;
export type CoreApiListSummaryQueryKey = ReturnType<typeof coreApiListSummaryQueryKey>;
export function coreApiListSummaryQueryOptions<TData = CoreApiListSummary["response"], TQueryData = CoreApiListSummary["response"]>(options: CoreApiListSummary["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiListSummary["response"], CoreApiListSummary["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiListSummaryQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiListSummary["data"], CoreApiListSummary["error"]>({
                method: "get",
                url: `/api/homeworks/summary/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary List Summary
 * @link /api/homeworks/summary/
 */
export function useCoreApiListSummary<TData = CoreApiListSummary["response"], TQueryData = CoreApiListSummary["response"], TQueryKey extends QueryKey = CoreApiListSummaryQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<CoreApiListSummary["response"], CoreApiListSummary["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiListSummary["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiListSummary["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiListSummaryQueryKey();
    const query = useQuery<CoreApiListSummary["data"], CoreApiListSummary["error"], TData, any>({
        ...coreApiListSummaryQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiListSummary["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}