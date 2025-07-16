import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper';
import 'swiper/swiper-bundle.css';
import {CharacterCard} from '@/common/components/CharacterCard/CharacterCard.tsx';
import type {CharacterType} from '@/features/characters/api/charactersApi.types.ts';
import s from './Residents.module.css'
import {useRef} from 'react';
import {
    NavigationButtons
} from '@/features/planets/ui/Planets/Planet/Residents/navigationButtons/NavigationButtons.tsx';

type Props = {
    residents: CharacterType[]
};
export const Residents = ({residents}: Props) => {

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <Swiper
                    navigation={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        900: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {residents?.map(resident => (
                        <SwiperSlide key={resident.id}>
                            <CharacterCard character={resident}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NavigationButtons swiper={swiperRef}/>
            </div>
        </div>
    );
};