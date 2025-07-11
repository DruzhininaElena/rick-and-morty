import {baseApi} from '@/app/baseApi.ts';
import type {CharacterType} from '@/features/characters/api/charactersApi.types.ts';
import type {ResponseType} from '@/common/types';

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCharacters: builder.query<ResponseType<CharacterType>, void>({
            query: () => '/character'
        })
    })
})

export const {useGetAllCharactersQuery} = charactersApi