import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swipercarousel.css'
import slideOne from '../image/slide-1.png';
import slideTwo from '../image/slide-2.png';
import slideThree from '../image/slide-3.png';
import slideFour from '../image/slide-4.png';
import slideFive from '../image/slide-5.png';
// Import Swiper styles


export const Swipercarousel = () => {
  const imaClassName = 'image_class';
  const pagination = {
    clickable: true,
  }
  return (
    <div className="SwiperCarousel">
      <Swiper pagination={pagination} navigation = {true}  modules={[Navigation,Pagination]} className="mySwiper">
        <SwiperSlide><img className={imaClassName} src={slideOne} alt='slider-image' /></SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideTwo} alt='slider-image' /></SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideThree} alt='slider-image' /></SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideFour} alt='slider-image' /></SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideFive} alt='slider-image' /></SwiperSlide>

      </Swiper>
    </div>
  );
};
