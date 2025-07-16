import {baseApi} from '@/app/baseApi.ts';
import type {CharacterType, ParamsType} from '@/features/characters/api/charactersApi.types.ts';
import type {ResponseType} from '@/common/types';

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<ResponseType<CharacterType>, {params: ParamsType}>({
            query: ({params}) => ({
                url: '/character',
                params
            })
        }),
        // getFilteredCharacters: builder.query<ResponseType<CharacterType>, {params: ParamsType}>({
        //     query: ({params}) => ({
        //         url: '/character',
        //         params
        //     })
        // }),
        getMultipleCharacters: builder.query<CharacterType[], number[]>({
            query: (ids) => `/character/${ids}`
        }),
    })
})

export const {useGetCharactersQuery, useGetMultipleCharactersQuery} = charactersApi