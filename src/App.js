import React from 'react';
import Header from './components/homepage/Header';
import Carousel from './components/homepage/Carousel';
import BannerOne from './components/homepage/BannerOne';
import PopularCategories from './components/homepage/PopularCategories';
import SameDayCarouselData from './components/homepage/SameDayCarouselData';
import ProductCarousel from './components/homepage/JustBecause';
import BannerCookies from './components/homepage/BannerCookies';
import CookieCarousel from './components/homepage/CookieCarousel';
import FloatingLabelInput from './components/homepage/Discount_Banner';

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
