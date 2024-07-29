import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import cake1Image from "../assets/cake1.jpg";
import cake2Image from "../assets/cake2.jpg";
import cake3Image from "../assets/cake3.jpg";
import cake4Image from "../assets/cake4.jpg";
import cake5Image from "../assets/cake5.jpg";
import cake6Image from "../assets/cake6.jpg";
import cake7Image from "../assets/cake7.jpg";
import cake8Image from "../assets/cake8.jpg";
import cake9Image from "../assets/cake9.jpg";
import cake10Image from "../assets/cake10.jpg";
import cake11Image from "../assets/cake11.jpg";
import cake12Image from "../assets/cake12.jpg";

const items = [
  {
    image: cake1Image,
    alt: "First item",
    title: "Available for 1 Hour Delivery",
    description: "Cinamon Honey Cake",
    Size: "One Size",
    Price: "$49.99",
  },
  {
    image: cake2Image,
    alt: "Second item",
    title: "Available for 1 Hour Delivery",
    description: "Lavender Cake",
    Size: "One Size",
    Price: "$38",
  },
  {
    image: cake3Image,
    alt: "Third item",
    title: "Available for 1 Hour Delivery",
    description: "Panettone",
    Size: "One Size",
    Price: "$24",
  },
  {
    image: cake4Image,
    alt: "Fourth item",
    title: "Available for 1 Hour Delivery",
    description: "Panettone",
    Size: "Seven Sizes at",
    Price: "$45",
  },
  {
    image: cake5Image,
    alt: "Fifth item",
    title: "Available for 1 Hour Delivery",
    description: "Muffin Vanilla",
    Size: "One Size",
    Price: "$10",
  },
  {
    image: cake6Image,
    alt: "Sixth item",
    title: "Available for 1 Hour Delivery",
    description: "Flower Cake",
    Size: "One Size",
    Price: "$39.99",
  },
  {
    image: cake7Image,
    alt: "Seventh item",
    title: "Available for 1 Hour Delivery",
    description: "Macaroons's Fruits",
    Size: "One Size",
    Price: "$9.99",
  },
  {
    image: cake8Image,
    alt: "Eight item",
    title: "Available for 1 Hour Delivery",
    description: "Figues Cake",
    Size: "One Size",
    Price: "$40",
  },
  {
    image: cake9Image,
    alt: "Ninth item",
    title: "Available for 1 Hour Delivery",
    description: " Rainbow Cupcakes",
    Size: "One Size",
    Price: "$9.99",
  },
  {
    image: cake10Image,
    alt: "Tenth item",
    title: "Available for 1 Hour Delivery",
    description: "Mint Cupcake",
    Size: "One Size",
    Price: "$9.99",
  },
  {
    image: cake11Image,
    alt: "Eleventh item",
    title: "Available for 1 Hour Delivery",
    description: "Ostern Cake",
    Size: "One Size",
    Price: "$11",
  },
  {
    image: cake12Image,
    alt: "Twelveth item",
    title: "Available for 1 Hour Delivery",
    description: "Strawberry Cake",
    Size: "One Size",
    Price: "$27",
  },
];

const SameDayCarouselData = () => {
  const itemsPerSlide = 6;
  const numberOfSlides = Math.ceil(items.length / itemsPerSlide);

  const carouselItems = [...Array(numberOfSlides)].map((_, index) => {
    const start = index * itemsPerSlide;
    const end = start + itemsPerSlide;
    return items.slice(start, end);
  });

  return (
    <Container className="my-5">
      <Carousel interval={6000} controls={true} indicators={false}>
        {carouselItems.map((slide, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="justify-content-center">
              {slide.map((item, itemIndex) => (
                <Col
                  xs={6}
                  sm={4}
                  md={2}
                  key={itemIndex}
                  className="mb-4 text-center"
                >
                  <div className="item" style={{ cursor: "pointer" }}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fluid
                      rounded-0
                      className="mb-2 item-image border border-secondary-subtle"
                    />
                    <p className="mb-0 fw-bold titleStyle">{item.title}</p>
                    <p className="mb-0 fw-bold fs-6 text-sameday">
                      {item.description}
                    </p>
                    <p className="mb-0 fs-6 text-sameday">{item.Size}</p>
                    <span className="mb-0 fw-bold text-sameday">
                      {item.Price}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default SameDayCarouselData;
