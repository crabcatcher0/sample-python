import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { CoreApiListHomeworksQueryResponse } from "../types/CoreApiListHomeworks";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type CoreApiListHomeworksClient = typeof client<CoreApiListHomeworksQueryResponse, never, never>;
type CoreApiListHomeworks = {
    data: CoreApiListHomeworksQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreApiListHomeworksQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreApiListHomeworksClient>[0]>;
        return: Awaited<ReturnType<CoreApiListHomeworksClient>>;
    };
};
export const coreApiListHomeworksQueryKey = () => [{ url: "/api/homeworks/" }] as const;
export type CoreApiListHomeworksQueryKey = ReturnType<typeof coreApiListHomeworksQueryKey>;
export function coreApiListHomeworksQueryOptions<TData = CoreApiListHomeworks["response"], TQueryData = CoreApiListHomeworks["response"]>(options: CoreApiListHomeworks["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<CoreApiListHomeworks["response"], CoreApiListHomeworks["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = coreApiListHomeworksQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<CoreApiListHomeworks["data"], CoreApiListHomeworks["error"]>({
                method: "get",
                url: `/api/homeworks/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary List Homeworks
 * @link /api/homeworks/
 */
export function useCoreApiListHomeworks<TData = CoreApiListHomeworks["response"], TQueryData = CoreApiListHomeworks["response"], TQueryKey extends QueryKey = CoreApiListHomeworksQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<CoreApiListHomeworks["response"], CoreApiListHomeworks["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreApiListHomeworks["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreApiListHomeworks["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreApiListHomeworksQueryKey();
    const query = useQuery<CoreApiListHomeworks["data"], CoreApiListHomeworks["error"], TData, any>({
        ...coreApiListHomeworksQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, CoreApiListHomeworks["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}