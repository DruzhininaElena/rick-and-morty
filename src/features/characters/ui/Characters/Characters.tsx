import {useGetAllCharactersQuery} from '@/features/characters/api/charactersApi.ts';
import {CharacterCard} from '@/features/characters/ui/Characters/CharacterCard/CharacterCard.tsx';
import s from './Characters.module.css';
import {CharacterSkeleton} from '@/features/characters/ui/Characters/CharacterSkeleton/CharacterSkeleton.tsx';
import {SearchBar} from '@/common/components/SearchBar/SearchBar.tsx';
import {useState} from 'react';
import {CharactersPagination} from '@/common/components/CharactersPagination/CharactersPagination.tsx';

export const Characters = () => {

    const [page, setPage] = useState(1)

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

    const characters = data?.results.map(character => {

        return (
            <div key={character.id}>
                <div>
                    <CharacterCard
                        character={character}
                    />
                </div>
            </div>
        );
    });

    const searchCharactersByName = (searchQuery: string) => {
        alert(`search: ${searchQuery}`)
    }

    return (
        <div className={s.wrapper}>
            <SearchBar showSearchResult={(searchQuery: string) => searchCharactersByName(searchQuery)}/>
            <div className={s.characters}>{characters}</div>
            <CharactersPagination totalCount={data?.info.count || 0} page={page} setPage={setPage}/>
        </div>
    );
};