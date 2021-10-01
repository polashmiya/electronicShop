import React from "react";
import Header from "../components/Header";
import HeaderOne from "../components/HeaderOne";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NewProducts from "../components/NewProducts";
import ExtraSection from "../components/ExtraSection";
import AboutElectro from "../components/AboutElectro";
import Contacts from "../components/HomeContacts";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <HeaderOne />
      <Navbar />
      <Slider />
      <NewProducts />
      <ExtraSection />
      <AboutElectro />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
