import React from "react";
import "../component-css/cart.css";
import emptyCartIcon from "../image/empty-cart.jpg";
import Cardcollectiontrend from "../component/Cardcollectiontrend";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../store/Cartslice";
import { MdDeleteForever } from "react-icons/md";
import flashImage from "../image/flash.svg";
export const Cart = () => {
  const product = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const deleteFromCart = (item) => {
    dispatch(deleteCart(item));
  };
  return (
    <div className="container-fluid cart-page">
      <div className="empty-cart-page text-center pt-5 pb-2 mt-3 mb-1">
        <img src={emptyCartIcon} alt="empty-cart-icon" />
        <div className="empty-cart-heading mt-5">
          <h3 className="empty-cart-heading">Oops!</h3>
          <p className="description">
            Its empty in here. <br />
            Let's find you your fashion fix
          </p>
          <button className="cart-empty-button mt-4 mb-4" type="button">
            explore
          </button>
        </div>
        <div className="cart-section">
          {product.map((item) => (
            <div className="card border-0" key={item.id}>
              <div className="product-image">
                <img src={item.image} alt="image" />
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
              <div className="add-to-cart-button">
                <MdDeleteForever onClick={() => deleteFromCart(item)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cardcollectiontrend />
    </div>
  );
};
