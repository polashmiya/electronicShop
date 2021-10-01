import React, { useState } from "react";
import data from "../data";
import Mobile from "../components/Mobile";
import SpecialOffer from "../components/SpecialOffer";
import HomeContacts from "../components/HomeContacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderOne from "../components/HeaderOne";
import Navbar from "../components/Navbar";
import Select from "react-select";
const Electronics = () => {
  const [items, setItems] = useState(data);
  const tempOptions = data.map((item) => item.cata);
  const newOptions = ["ALL", ...new Set(tempOptions)];
  const options = newOptions.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <>
      <Header />
      <HeaderOne />
      <Navbar />
      <Select
          className="navbarSelectOptions"
          defaultValue={options[0]}
          options={options}
        />
      <Mobile title="ALL PRODUCTS" items={items} />
      <SpecialOffer />
      <HomeContacts />
      <Footer />
    </>
  );
};

export default Electronics;
