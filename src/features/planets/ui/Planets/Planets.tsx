import s from './Planets.module.css'
import {useGetPlanetsQuery} from '@/features/planets/api/planetsApi.ts';
import {Link} from 'react-router';
import {Path} from '@/common/routing/Routing.tsx';


export const Planets = () => {

    const {data, isLoading} = useGetPlanetsQuery()
    console.log(data)

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={s.container}>
            {data?.map((planet) => (
                <Link key={planet.id} className={s.item} to={`${Path.Planets}/${planet.id}`}>
                    <img src={planet.imgUrl} alt={planet.name} className={s.image}/>
                    <div className={s.planetName}>
                        {planet.name}
                    </div>
                </Link>
            ))}
        </div>
    )
};