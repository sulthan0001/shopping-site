import React from "react";
import Home from "../components/HomeLayout/Home";
import Cards from "../components/HomeLayout/Cards";
import BestSellers from "../components/HomeLayout/BestSellers";
import History from "../components/HomeLayout/History";
import NewArrivals from "../components/HomeLayout/NewArrivals";
import OurBlog from "../components/HomeLayout/OurBlog";

const HomePage = () => {
  return (
    <>
      <Home />
      <Cards />
      <BestSellers />
      <History />
      <NewArrivals />
      <OurBlog />
    </>
  );
};

export default HomePage;
