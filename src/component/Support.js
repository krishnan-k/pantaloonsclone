import React from "react";
import support1 from "../image/s1.png";
import support2 from "../image/s2.png";
import support3 from "../image/s3.png";
import support4 from "../image/s4.png";
import support5 from "../image/s5.png";
import support6 from "../image/s6.png";
import "../component-css/support.css";
const Support = () => {
  return (
    <div className="support pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col col-2 support-block text-center">
            <img src={support1} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              easy return
            </p>
          </div>
          <div className="col col-2 support-block text-center">
            <img src={support2} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              1800-103-7527
              <div className="fw-normal">( 10am - 10pm )</div>
            </p>
          </div>
          <div className="col col-2 support-block text-center">
            <img src={support3} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              free shipping
            </p>
          </div>
          <div className="col col-2 support-block text-center">
            <img src={support4} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              cash on delivery
            </p>
          </div>
          <div className="col col-2 support-block text-center">
            <img src={support5} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              secure payment
            </p>
          </div>
          <div className="col col-2 support-block text-center">
            <img src={support6} alt="gridiamge" />
            <p className="description text-uppercase fw-bolder mt-3 mb-0">
              free alterations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
