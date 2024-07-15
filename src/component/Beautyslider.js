import React from 'react'
import beautyOne from "../image/beauty.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../component/beautyslider.css'
const Beautyslider = () => {
    const imaClassName = 'image_class';
  return (
    <div className="SwiperCarousel beauty_slider">
      <Swiper className="mySwiper" navigation = {true} modules={[Navigation]}>
      <SwiperSlide><img className={imaClassName} src={beautyOne} alt='slider-image' />
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={beautyOne} alt='slider-image' />
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={beautyOne} alt='slider-image' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Beautyslider
