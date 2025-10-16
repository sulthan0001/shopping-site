import React from "react";
import Navbar from "../components/HomeLayout/Navbar";
import Home from "../components/HomeLayout/Home";
import Cards from "../components/HomeLayout/Cards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Cards />
    </>
  );
};

export default HomePage;
