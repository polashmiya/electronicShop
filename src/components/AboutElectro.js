import React from "react";
import { FaRegThumbsUp, FaShippingFast, FaTruckMoving } from "react-icons/fa";
const AboutElectro = () => {
  return (
    <div className="aboutElectro">
      <p className="aboutElectroTitle">Electronics : </p>
      <p className="aboutElectroPara">
        If you're considering a new laptop, looking for a powerful new car
        stereo or shopping for a new HDTV, we make it easy to find exactly what
        you need at a price you can afford. We offer Every Day Low Prices on
        TVs, laptops, cell phones, tablets and iPads, video games, desktop
        computers, cameras and camcorders, audio, video and more.
      </p>
      <div className="aboutElectroItems">
        <div className="aboutElectroItem">
          <FaShippingFast className="aboutElectroItemIcon" />
          <h3 className="aboutElectroItemTitle">Free Shipping</h3>
          <p className="aboutElectroItemPara">on orders over $ 100</p>
        </div>
        <div className="aboutElectroItem">
          <FaTruckMoving className="aboutElectroItemIcon" />
          <h3 className="aboutElectroItemTitle">Fast Delivery</h3>
          <p className="aboutElectroItemPara">world wide delivery</p>
        </div>
        <div className="aboutElectroItem">
          <FaRegThumbsUp className="aboutElectroItemIcon" />
          <h3 className="aboutElectroItemTitle">Big Choice</h3>
          <p className="aboutElectroItemPara">of products</p>
        </div>
      </div>
    </div>
  );
};

export default AboutElectro;
