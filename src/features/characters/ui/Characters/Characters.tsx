import {useGetAllCharactersQuery} from '@/features/characters/api/charactersApi.ts';
import {CharacterCard} from '@/common/components/CharacterCard/CharacterCard.tsx';
import s from './Characters.module.css';
import {CharacterSkeleton} from '@/common/components/CharacterSkeleton/CharacterSkeleton.tsx';
import {SearchBar} from '@/common/components/SearchBar/SearchBar.tsx';
import {CharactersPagination} from '@/common/components/CharactersPagination/CharactersPagination.tsx';
import {useSearchParams} from 'react-router';

export const Characters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;

    const {data, isLoading} = useGetAllCharactersQuery({params: {page}});

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

    const searchCharactersByName = (searchQuery: string) => {
        alert(`search: ${searchQuery}`)
    }

    const handlePageChange = (newPage: number) => {
        const params: Record<string, string> = {page: newPage.toString()};
        setSearchParams(params);
    };

    return (
        <div className={s.wrapper}>
            <SearchBar showSearchResult={(searchQuery: string) => searchCharactersByName(searchQuery)}/>
            <div className={s.characters}>{characters}</div>
            <CharactersPagination totalCount={data?.info.count || 0} page={page} setPage={handlePageChange}/>
        </div>
    );
};