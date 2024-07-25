import React from "react";
import { Carousel } from "react-bootstrap";
import carouelImg1 from "../assets/carousel_image1.jpg";
import carouelImg2 from "../assets/carousel_image2.jpg";
import carouelImg3 from "../assets/carousel_image3.jpg";
import carouelImg4 from "../assets/carousel_image4.jpg";
import carouelImg5 from "../assets/carousel_image5.jpg";

const CustomCarousel = () => {
  return (
    <Carousel
      fade
      interval={3000}
      controls={true}
      indicators={true}
      className="custom-carousel"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={carouelImg1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouelImg2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouelImg3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouelImg4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouelImg5} alt="Fivth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
