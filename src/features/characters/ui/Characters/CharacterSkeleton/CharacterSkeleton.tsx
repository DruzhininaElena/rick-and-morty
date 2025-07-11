import s from '../CharacterCard/CharacterCard.module.css';
import styles from './CharacterSkeleton.module.css'
import {Skeleton} from '@mui/material';

export const CharacterSkeleton = () => {
    return (
        <div className={s.cardBlock}>
            <Skeleton className={styles.name} width={150} height={50}/>
            <Skeleton
                className={styles.image}
                width={250}
                height={250}
                sx={{
                    transform: 'none',
                    margin: 0,
                    padding: 0
                }}/>
        </div>
    );
};