import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderOne = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="headerOne">
      <Link to="/" className="link">
        <div className="headerOneLogo">Polash Electro</div>
      </Link>
      <div className="headerOneForm">
        <form>
          <input className="headerOneInput" type="text" placeholder="Search" />
          <button className="headerOneBtn">Search</button>
        </form>
      </div>
      <Link to="/cart" className="link">
        <div className="headerOneIcon">
          <FaCartArrowDown />
          <div className="cartTotal">({cartItems.length})</div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderOne;
