import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./cardcollectionnew.css";
import bestSellerProducts from "../collection-products/Bestsellerproducts";
const Bestseller = () => {
    return (
        <div className="card_collection_one card_trend mt-4 mb-4 pt-2 pb-2">
          <div className="Card_Swiper_Carousel_One container">
            <div className="card_heading mb-4 pb-2">
              <h4 className="mb-0">Bestseller</h4>
            </div>
            <Swiper
              className="mySwiper"
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={30}
            >
              {bestSellerProducts.map((item) =>(
                <SwiperSlide>
                <div class="card border-0 p-0" key={item.id}>
                <img src={item.image} alt="image" />
                </div>
                <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">{item.title}</h5>
                <p class="card-text mb-1">{item.description}</p>  
                  <p className="product_price mb-0">
                    ₹829</p>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
}

export default Bestseller
