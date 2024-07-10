import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideOne from '../image/slide-1.png';
import slideTwo from '../image/slide-2.png';
import slideThree from '../image/slide-3.png';
import slideFour from '../image/slide-4.png';
import slideFive from '../image/slide-5.png';
// Import Swiper styles


export const Swipercarousel = () => {
  return (
    <div className="SwiperCarousel">
      <Swiper className="mySwiper">
        <SwiperSlide><img src={slideOne}/></SwiperSlide>
        <SwiperSlide><img src={slideTwo}/></SwiperSlide>
        <SwiperSlide><img src={slideThree}/></SwiperSlide>
        <SwiperSlide><img src={slideFour}/></SwiperSlide>
        <SwiperSlide><img src={slideFive}/></SwiperSlide>
      </Swiper>
    </div>
  );
};
