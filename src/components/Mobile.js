import React, { useState } from "react";
import Item from "./Item";
const Mobile = ({ title, items }) => {
  return (
    <div className="mobile">
      <p>{title}</p>
      <div className="mobileAllItems">
        {items.map((item, id) => {
          return <Item key={id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Mobile;
