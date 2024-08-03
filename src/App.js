import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import BannerOne from './components/BannerOne';
import PopularCategories from './components/PopularCategories';
import SameDayCarouselData from './components/SameDayCarouselData';
import ProductCarousel from './components/JustBecause';

const App = () => (
  <>
    <Header />
    <Carousel />
    <BannerOne />
    <PopularCategories />
    <SameDayCarouselData />
    <ProductCarousel />
  </>
);

export default App;
