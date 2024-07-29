import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../component-css/cardcollection.css";
import "swiper/css";
import "swiper/css/navigation";
import dealDayProduct from "../collection-products/Dealdayproduct";
import flashImage from "../image/flash.svg";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";
import { Link } from "react-router-dom";
export const Cardcollection = () => {
  // const autoplay = {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // }
  const product = useSelector(state =>
    state.cart.cartItems
  )
  const dispatch = useDispatch();
  const addCart = (item) =>{
    dispatch(addToCart(item))
  }
  const deleteFromCart = (item) =>{
    dispatch(deleteCart(item))
  }
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
          slidesPerView={4}
          spaceBetween={30}
          loop={false}
          
        >
          {dealDayProduct.map((item) => (
            <SwiperSlide>
              <div className="card border-0 card-product" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt="image" />
                  <div className="add-to-cart-button">  
                    {product.find(items => items.id === item.id)
                    ? <div className="add">
                      <Link to="cart" className="view-cart text-center text-decoration-none text-white text-capitalize">view cart</Link>
                     <div className="delete-cart text-center text-white text-capitalize" onClick={()=> deleteFromCart(item) }>delete cart <MdDeleteForever/></div> </div>   :
                    <div className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect" onClick={() => addCart(item)}>add to cart</div>
                    } 
                  </div>
                </div>
                <div class="card-body">
                  <div className="offer-tag">
                    <div className="offer-percentage ">
                      <span className="offer-text text-uppercase">30% off</span>
                    </div>
                    <div className="flash">
                      <img src={flashImage} alt="flash-image" />
                      <span className="flash-text text-capitalize ms-1 me-1">
                        flash deal
                      </span>
                    </div>
                  </div>
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
