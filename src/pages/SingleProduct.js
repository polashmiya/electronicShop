import React, { useState, useEffect } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import data from "../data";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import defaultImg from "../images/defaultImg.jpg";
import {}
const SingleProduct = () => {
  const [items, setItems] = useState(data);
  const { id } = useParams();
  let newId = parseInt(id);
  // Here's a problem why it's doesn't work with useParams id; //solved it
  const getItem = (id) => {
    const item = items.find((r) => r.id === id);
    return item;
  };
  const item = getItem(newId);
  const { img, name, price, cata, quantity, description } = item;

  //image's is't work fine.......
  return (
    <div className="productContainer">
      <Header />
      <Navbar />
      <div className="productWrapper">
        <div className="imgContainer">
          <img src={defaultImg} alt={name} />
        </div>
        <div className="productInfoContainer">
          <h1>{name}</h1>
          <p className="productDesc">{description}</p>
          <span> {price} BDT </span>
          <div className="productFilterContainer">
            <div className="productFilter">
              <span>Color</span>
              <div
                className="filterColor"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className="productFilter">
              <span>Size</span>
              <select name="" id="filterSize">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <FaMinusCircle className="minus" />
              <span className="amount">{quantity}</span>
              <FaPlusCircle className="plus" />
            </div>
            <div className="btnContainer">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
