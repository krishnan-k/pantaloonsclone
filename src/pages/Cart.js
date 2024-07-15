import React from "react";
import './cart.css';
import emptyCartIcon from "../image/empty-cart.jpg";
import Cardcollectiontrend from "../component/Cardcollectiontrend";
export const Cart = () => {
  return (
    <div className="container-fluid cart-page">
      <div className="empty-cart-page text-center pt-5 pb-2 mt-3 mb-1">
        <img src={emptyCartIcon} alt="empty-cart-icon" />
        <div className="empty-cart-heading mt-5">
          <h3 className="empty-cart-heading">Oops!</h3>
          <p className="description">
            Its empty in here. <br/>Let's find you your fashion fix
          </p>
          <button className="cart-empty-button mt-4 mb-4" type="button">explore</button>
        </div>
      </div>
      <Cardcollectiontrend/>
    </div>
  );
};
