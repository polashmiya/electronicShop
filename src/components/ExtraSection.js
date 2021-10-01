import React from "react";
const ExtraSection = () => {
  return (
    <div className="extra">
      <div className="extraItem" style={{ marginRight: "25px" }}>
        <div className="extraInfo">
          <p>Smooth, Rich & Loud Audio</p>
          <h3>Branded Headphones</h3>
          <p>Sale up to 25% off all in store</p>
        </div>
        <div>
          <img src="images/tv.jpg" alt="" />
        </div>
      </div>
      <div className="extraItem">
        <div className="extraInfo">
          <p>Smooth, Rich & Loud Audio</p>
          <h3>Branded Headphones</h3>
          <p>Sale up to 25% off all in store</p>
        </div>
        <div>
          <img src="images/audio.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
