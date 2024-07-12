import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./grid.css";
import gridimg1 from "../image/grid-1.jpeg";
import gridimg2 from "../image/grid-2.jpeg";

const Grid = () => {
  return (
    <div className="container grid_section">
      <Swiper slidesPerView={2} spaceBetween={30}>
        <SwiperSlide>
          <img src={gridimg1} alt="gridiamge" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridimg2} alt="gridiamge" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridimg1} alt="gridiamge" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Grid;
