import React, { useState } from "react";
import data from "../data";
import Mobile from "./Mobile";
import SpecialOffer from "./SpecialOffer";
const NewProducts = () => {
  const [items, setItems] = useState(data);
  const mobileItems = items.filter((item) => item.cata === "Phone");
  const tvAndAudioItems = items.filter((item) => item.cata === "tvAndAudio");
  const bigItems = items.filter((item) => item.cata === "Large Appliances");
  return (
    <>
      <div className="newProducts">
        <p>
          <span className="newProductsLetter">O</span>ur 
          <span className="newProductsLetter">N</span>ew 
          <span className="newProductsLetter">P</span>roducts
        </p>
      </div>
      <Mobile title="New Brand Mobiles" items={mobileItems} />
      <Mobile title="Tv And Audio" items={tvAndAudioItems} />
      <SpecialOffer />
      <Mobile title="Large Appliances" items={bigItems} />
    </>
  );
};

export default NewProducts;
