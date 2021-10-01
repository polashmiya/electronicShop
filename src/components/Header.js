import React, { useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaTruckMoving,
  FaSignInAlt,
  FaSignOutAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <span className="headerLogoTitle">Offer Zone Top Deals & Discount</span>
        <FaShoppingCart className="headerLogoIcon" />
      </div>
      <div className="headerNav">
        <ul>
          <li>
            <FaMapMarkerAlt className="headerIcon" />
            Select Location
          </li>
          <li>
            <FaTruckMoving className="headerIcon" />
            Track Order
          </li>
          <li>
            <FaPhoneAlt className="headerIcon" />
            01719623984
          </li>
          <Link to="/login" className="link">
            <li>
              <FaSignInAlt className="headerIcon" />
              Login
            </li>
          </Link>
          <Link to="/register" className="link">
            <li>
              <FaSignInAlt className="headerIcon" />
              Register
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
