import {useParams} from 'react-router';
import {useGetPlanetByIdQuery} from '@/features/planets/api/planetsApi.ts';
import s from './Planet.module.css';

import {useGetMultipleCharactersQuery} from '@/features/characters/api/charactersApi.ts';
import {Residents} from '@/features/planets/ui/Planets/Planet/Residents/Residents.tsx';

export const Planet = () => {

    const params = useParams<{ id: string }>()

    const {data: planet, isLoading} = useGetPlanetByIdQuery(params.id!, {skip: !params.id})

    const residentsIds = planet?.residents.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length - 1]);
    }) || []

    const { data: residents, isLoading: isResidentsLoading } = useGetMultipleCharactersQuery(
        residentsIds,
        { skip: residentsIds.length === 0 }
    );

    if (!params.id) {
        return <div>Error: ID not found</div>;
    }

    if (isLoading || isResidentsLoading) return <div>Loading...</div>

    return (
        <>
            <div className={s.planetWrapper}>
                <img src={planet?.imgUrl} alt={planet?.name} className={s.image}/>
                <div className={s.description}>
                    <div className={s.key}>Planet:</div>
                    <span className={s.value}>{planet?.name}</span>
                    <div className={s.key}>Dimension:</div>
                    <span className={s.value}>{planet?.dimension}</span>
                </div>
            </div>
            <Residents residents={residents || []}/>
        </>
    );
};