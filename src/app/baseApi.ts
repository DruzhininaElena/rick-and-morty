import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {handleError} from '@/common/utils/handleError.ts';

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ['Characters'],
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
        })(args, api, extraOptions)

        handleError(api, result)

        return result
    },
    endpoints: () => ({}),
    // keepUnusedDataFor: 120
    // refetchOnFocus: true,
    refetchOnReconnect: true,
})
