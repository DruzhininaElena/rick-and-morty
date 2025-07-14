import s from './CharacterCard.module.css'
import type {CharacterType} from '@/features/characters/api/charactersApi.types.ts';

type Props = {
    character: CharacterType
};
export const CharacterCard = ({character}: Props) => {

    const {name, image} = character

    return (
        <div className={s.cardBlock}>
            <h3 className={s.name}>{name}</h3>
            <img className={s.image} src={image} alt={`image of ${name}`}/>
        </div>
    );
};