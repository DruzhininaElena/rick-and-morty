import {useGetAllCharactersQuery} from '@/features/characters/api/charactersApi.ts';
import {CharacterCard} from '@/features/characters/ui/Characters/CharacterCard/CharacterCard.tsx';
import s from './Characters.module.css';
import {CharacterSkeleton} from '@/features/characters/ui/Characters/CharacterSkeleton/CharacterSkeleton.tsx';
import {useImagePreloader} from '@/common/hooks';
import {IconButton, InputBase, Paper} from '@mui/material';
import {SearchIcon} from '@/assets/icons/SearchIcon.tsx';

export const Characters = () => {
    const {data, isLoading} = useGetAllCharactersQuery();
    const {loadedImages, handleImageLoad} = useImagePreloader();

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
        const isImageLoaded = loadedImages[character.id];

        return (
            <div key={character.id}>
                {!isImageLoaded && <CharacterSkeleton/>}
                <div style={{display: isImageLoaded ? 'block' : 'none'}}>
                    <CharacterCard
                        character={character}
                        onImageLoad={() => handleImageLoad(character.id)}
                    />
                </div>
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            {/*<TextField label="Search by name" variant="filled" color="primary" sx={{width: '500px'}}/>*/}
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1, width: '500px'}}
                    placeholder="Search by name"
                    inputProps={{'aria-label': 'Search by name'}}
                    color="primary"
                />
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <div className={s.characters}>{characters}</div>
        </div>
    );
};