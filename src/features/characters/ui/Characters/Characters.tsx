import {useGetCharactersQuery} from '@/features/characters/api/charactersApi.ts';
import {CharacterCard} from '@/common/components/CharacterCard/CharacterCard.tsx';
import s from './Characters.module.css';
import {CharacterSkeleton} from '@/common/components/CharacterSkeleton/CharacterSkeleton.tsx';
import {SearchBar} from '@/common/components/SearchBar/SearchBar.tsx';
import {CharactersPagination} from '@/common/components/CharactersPagination/CharactersPagination.tsx';
import {useSearchParams} from 'react-router';

export const Characters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const searchQuery = searchParams.get('search') || '';

    const {data, isLoading, isFetching} = useGetCharactersQuery({
        params: {
            page,
            name: searchQuery
        }
    });

    if (isLoading) {
        return (
            <div className={s.characters}>
                {Array(10).fill(null).map((_, id) => (
                    <CharacterSkeleton key={id}/>
                ))}
            </div>
        );
    }

    const characters = data?.results.map(character => <CharacterCard key={character.id} character={character}/>);

    const searchCharactersByName = (searchValue: string) => {
        const params: Record<string, string> = {};
        if (searchValue) params.search = searchValue;
        params.page = '1';
        setSearchParams(params);
    }

    const handlePageChange = (newPage: number) => {
        const params: Record<string, string> = {page: newPage.toString()};
        if (searchQuery) params.search = searchQuery;
        setSearchParams(params);
    };

    if (isFetching) {
        return (
            <div className={s.wrapper}>
                <SearchBar
                    showSearchResult={searchCharactersByName}
                    initialValue={searchQuery}
                />
                <div className={s.characters}>
                    {Array(10).fill(null).map((_, id) => (
                        <CharacterSkeleton key={id}/>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={s.wrapper}>
            <SearchBar
                showSearchResult={searchCharactersByName}
                initialValue={searchQuery}
            />
            <div className={s.characters}>{characters}</div>
            <CharactersPagination totalCount={data?.info.count || 0} page={page} setPage={handlePageChange}/>
        </div>
    );
};