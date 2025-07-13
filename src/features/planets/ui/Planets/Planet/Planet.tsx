import {useParams} from 'react-router';
import {useGetPlanetByIdQuery} from '@/features/planets/api/planetsApi.ts';
import s from './Planet.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Planet = () => {

    const params = useParams<{ id: string }>()

    const {data: planet, isLoading} = useGetPlanetByIdQuery(params.id!, {skip: !params.id})


    if (!params.id) {
        return <div>Error: ID not found</div>;
    }

    if (isLoading) return <div>Loading...</div>

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
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
};