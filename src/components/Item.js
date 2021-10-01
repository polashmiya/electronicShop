import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="mobileItems">
      <div className="mobileImg">
        <img src={item.img} alt={item.name} />
        <h6>New</h6>
        <Link className="link" to={`/electronics/${item.id}`}>
          <button className="mobileView">Quick View</button>
        </Link>
      </div>
      <div className="mobileInfo">
        <h3>{item.name}</h3>
        <h5>
          $ {item.price}
          <span className="mobileOfferPrice">$ 560.00</span>
        </h5>

        <button
          type="button"
          className="mobileBtn"
          onClick={() => dispatch(addToCart(item))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
