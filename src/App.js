import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import BannerOne from './components/BannerOne';
import PopularCategories from './components/PopularCategories';
import SameDayCarouselData from './components/SameDayCarouselData';
import ProductCarousel from './components/JustBecause';
import BannerCookies from './components/BannerCookies';
import CookieCarousel from './components/CookieCarousel';
import FloatingLabelInput from './components/Discount_Banner';

const App = () => (
  <>
    <Header />
    <Carousel />
    <BannerOne />
    <PopularCategories />
    <SameDayCarouselData />
    <ProductCarousel />
    <BannerCookies />
    <CookieCarousel />
    <FloatingLabelInput />
  </>
);

export default App;
