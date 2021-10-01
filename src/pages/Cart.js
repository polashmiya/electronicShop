import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="cartContainer">
      <Header />
      <Navbar />
      <div className="cartWrapper">
        <h1>Your Cart </h1>
        <div className="cartTop">
          <Link to="" className="links">
            <button className="shoppingBtn">Continue Shopping</button>
          </Link>
          <div className="topTexts">
            <span className="topText">Shopping Cart (3)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div>
          <button className="checkOutBtn">Check Out</button>
        </div>
        <div className="cartBottom">
          <div className="cartInfo">
            {cartItems.map((cartItem) => {
              return (
                <>
                  <div key={cartItem.id} className="cartProduct">
                    <div className="cartProductDetail">
                      <img src={cartItem.img} alt={cartItem.name} />
                      <div className="cartDetails">
                        <span className="cartProductName">
                          <b>Product : </b> {cartItem.name}
                        </span>
                        <span className="cartProductId">
                          <b>ID : </b> {cartItem.name}
                        </span>
                        <div className="cartProductColor">
                          <b>Category</b> : {cartItem.cata}
                        </div>
                        {/* <span className="cartProductSize">
                        <b>SIze :</b> 37.5
                      </span> */}
                      </div>
                    </div>
                    <div className="cartPriceDetail">
                      <div className="cartAmountContainer">
                        <FaMinusCircle />
                        <div className="cartAmount">{cartItem.quantity}</div>
                        <FaPlusCircle />
                      </div>
                      <div className="cartPrice">{cartItem.price} Tk</div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
          <div className="cartSummary">
            <h1>ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">SubTotal</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="summaryItem total ">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">BDT 2500</span>
            </div>
            <div className="lastBtn">Check Out Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
