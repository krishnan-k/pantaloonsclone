import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./cardcollection.css";
import "swiper/css";
import "swiper/css/navigation";
import cardImg1 from "../image/662120-6779863.png";
import cardImg2 from "../image/663283-6793162.png";
import cardImg3 from "../image/669720-6921124.png";
import cardImg4 from "../image/723221-8037222.png";
import cardImg5 from "../image/757112-8636944.png";
import cardImg6 from "../image/761937-8736099.png";
import cardImg7 from "../image/772993-8898076.png";
import cardImg8 from "../image/776888-8972231.png";
import cardImg9 from "../image/730138-8129261.png";
export const Cardcollection = () => {
  return (
    <div className="card_collection_section mt-5 mb-0 pt-5 pb-5">
      <div className="CardSwiperCarousel container">
      <div className="card_heading mb-4 pb-2">
        <h4 className="mb-0">deal of the day</h4>
        <a className="text-uppercase fw-bolder text-decoration-none" href="#">view all</a>
      </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg1} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">indus route</h5>
                <p class="card-text mb-1">
                  Blue Solid Casual Men Regular Fit Kurtas
                </p>
                <p className="product_price mb-0">₹629<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹670</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg2} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">rangmanch</h5>
                <p class="card-text mb-1">
                  Peach Printed Athleisure Half Sleeves Round Neck Women Regular
                  Fit Tops
                </p>
                <p className="product_price mb-0">₹719<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹780</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg3} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">people</h5>
                <p class="card-text mb-1">
                  Medium Blue Textured Casual Half Sleeves Polo Collar Men Slim
                  Fit T-Shirts
                </p>
                <p className="product_price mb-0">₹830<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹880</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg4} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">bare denim</h5>
                <p class="card-text mb-1">
                  White Printed Party Full Sleeves Shirt Collar Men Slim Fit
                  Party Shirts.
                </p>
                <p className="product_price mb-0">₹750<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹800</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg5} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">rangmanch</h5>
                <p class="card-text mb-1">
                  Yellow Print Casual V Neck 3/4th Sleeves Knee Length Women
                  Regular Fit Kurta
                </p>
                <p className="product_price mb-0">₹650<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹700</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg6} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">bare denim</h5>
                <p class="card-text mb-1">
                  Peach Printed Athleisure Half Sleeves Round Neck Women Regular
                  Fit Tops
                </p>
                <p className="product_price mb-0">₹780<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹830</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg7} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">byford</h5>
                <p class="card-text mb-1">
                  Red Textured Athleisure Full Sleeves Shirt Collar Men Slim Fit
                  Casual Shirts
                </p>
                <p className="product_price mb-0">₹560<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹600</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg8} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">rangmanch</h5>
                <p class="card-text mb-1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p className="product_price mb-0">₹630<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹650</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card border-0">
              <img src={cardImg9} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-1">urabn ranger</h5>
                <p class="card-text mb-1">
                  White Printed Party Full Sleeves Shirt Collar Men Slim Fit
                  Party Shirts
                </p>
                <p className="product_price mb-0">₹648<span className="product_price text-decoration-line-through text-black-50 fw-bolder">₹750</span></p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
