import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./cardcollectionnew.css";
import trendingProducts from "../collection-products/Trendingproducts";
const Cardcollectiontrend = () => {
  return (
    <div className="card_collection_one card_trend mt-4 mb-4 pt-2 pb-2">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Trending now</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
        >
          {trendingProducts.map((item) =>(
            <SwiperSlide>
            <div class="card border-0 p-0" key={item.id}>
            <img src={item.image} alt="image" />
            </div>
            <div class="card-body">
            <h5 class="card-title text-uppercase mb-1">{item.title}</h5>
            <p class="card-text mb-1">{item.description}</p>  
              <p className="product_price mb-0">
                ₹629
                <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
                  ₹670
                </span>
                <span className="special_offer text-uppercase ">35%off</span>
              </p>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cardcollectiontrend;
