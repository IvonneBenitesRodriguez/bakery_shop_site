import React from "react";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import BannerOne from "./components/BannerOne.jsx";
import PopularCategories from "./components/PopularCategories.jsx";
import SameDay from "./components/SameDay.jsx";
import SameDayCarouselData from "./components/SameDayCarouselData.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <BannerOne />
      <PopularCategories />
      <SameDay />
      <SameDayCarouselData />
    </>
  );
};

export default App;
