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
import slideSix from '../image/slide-6.jpg';
// Import Swiper styles


export const Swipercarousel = () => {
  const imaClassName = 'image_class';
  const pagination = {
    clickable: true,
  }
  return (
    <div className="SwiperCarousel">
      <Swiper pagination={pagination} navigation = {true}  modules={[Navigation,Pagination]} className="mySwiper">
      <SwiperSlide>
        <img className={imaClassName} src={slideSix} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideOne} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideTwo} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideThree} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideFour} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
        <SwiperSlide><img className={imaClassName} src={slideFive} alt='slider-image' />
        <a class="text-decoration-none text-dark mt-3 mb-3" href="">Pantaloons Sale is here! Get Upto 60% Off + Extra Rs.1500/- Off* on order value of Rs.5999/-, Code: SALE1500.</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
