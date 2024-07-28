import React from "react";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import BannerOne from "./components/BannerOne.jsx";
import PopularCategories from "./components/PopularCategories.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <BannerOne />
      <PopularCategories />
    </>
  );
};

export default App;
