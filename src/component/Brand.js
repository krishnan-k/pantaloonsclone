import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./brand.css";
import brand1 from "../image/brand-1.png";
import brand2 from "../image/brand-2.png";
import brand3 from "../image/brand-3.png";
import brand4 from "../image/brand-4.png";
import brand5 from "../image/brand-5.png";
import brand6 from "../image/brand-6.png";
const Brand = () => {
  return (
    <div className="container mt-4 mb-4 pt-4 pt-4 brand">
      <div className="card_heading mb-4 pb-2">
        <h4 className="mb-0">Brands You Love</h4>
        <a className="text-uppercase fw-bolder text-decoration-none" href="#">
          view all
        </a>
      </div>
      <Swiper slidesPerView={5.5} spaceBetween={30}>
        <SwiperSlide>
          <img src={brand1} alt="brand-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt="brand-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt="brand-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt="brand-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt="brand-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="brand-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
