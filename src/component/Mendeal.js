import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../component-css/cardcollection.css";
import "swiper/css";
import "swiper/css/navigation";
import menDealDayProduct from "../collection-products/Mendealdayproducts";

const Mendeal = () => {
  return (
    <div className="card_collection_section mt-5 mb-0 pt-5 pb-5">
      <div className="CardSwiperCarousel container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">deal of the day</h4>
          <a className="text-uppercase fw-bolder text-decoration-none" href="#">
            view all
          </a>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={30}
        >
          {menDealDayProduct.map((item) => (
            <SwiperSlide>
              <div className="card border-0" key={item.id}>
                <img src={item.image} alt="image" />
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-1">{item.title}</h5>
                  <p class="card-text mb-1">{item.description}</p>
                  <p className="product_price mb-0">
                    ₹{item.price}
                    <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
                      ₹{item.comparePrice}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Mendeal;
