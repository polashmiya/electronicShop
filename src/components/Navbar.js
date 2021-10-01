import React, { useState } from "react";
// import Select from "react-select";
// import data from "../data";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  // const options = [
  //   { value: "All Catagories", label: "All Catagories" },
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  // const tempOptions = data.map((item) => item.cata);
  // const newOptions = ["ALL", ...new Set(tempOptions)];
  // const options = newOptions.map((option) => ({
  //   value: option,
  //   label: option,
  // }));

  return (
    <div className="navbar">
      <nav>
        {/* <Select
          className="navbarSelectOptions"
          defaultValue={options[0]}
          options={options}
        /> */}
        <ul className="navbarUl">
          <Link className="link" to="/">
            <li className="navbarLi">Home</li>
          </Link>
          <Link className="link" to="/electronics">
            <li className="navbarLi">Electronics</li>
          </Link>
          <Link className="link" to="/about">
            <li className="navbarLi">About Us</li>
          </Link>
          <Link className="link" to="/services">
            <li className="navbarLi">Services</li>
          </Link>
          <Link className="link" to="/new">
            <li className="navbarLi">New Arrivals</li>
          </Link>
          <Link className="link" to="/contact">
            <li className="navbarLi">Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
