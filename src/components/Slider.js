import React from "react";
import { Link } from "react-router-dom";
const ReactSlider = () => {
  return (
    <div className="slider">
      <div className="sliderItem">
        <div className="sliderImage">
          <img width="100%" height="550px" src="images/laptop.jpg" alt="" />
        </div>
        <div className="sliderInfo">
          <h3>
            Get <span className="sliderPercent"> 15%</span> Discount
          </h3>
          <h2>
            Today <span className="sliderDiscount">Discount</span>
          </h2>
          <Link to="/electronics" className="link">
            <button className="sliderBtn">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReactSlider;
