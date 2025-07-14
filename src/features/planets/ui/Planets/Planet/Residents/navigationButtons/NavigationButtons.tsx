import { type RefObject } from 'react';
import { Swiper as SwiperType } from 'swiper';
import s from './NavigationButtons.module.css'
import prevIcon from '@/assets/icons/prevIcon.svg'
import nextIcon from '@/assets/icons/nextIcon.svg'

type NavigationButtonsProps = {
    swiper: RefObject<null | SwiperType>;
};

export const NavigationButtons = ({ swiper }: NavigationButtonsProps) => (
    <>
        <img src={prevIcon} className={s.prev} onClick={() => swiper.current?.slidePrev()} alt='prev'/>
        <img src={nextIcon} className={s.next} onClick={() => swiper.current?.slideNext()} alt='next'/>
    </>
);
