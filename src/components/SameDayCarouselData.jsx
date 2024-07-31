import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cake1Image from "../assets/cake1.jpg";
import cake2Image from "../assets/cake2.jpg";
import cake3Image from "../assets/cake3.jpg";
import cake4Image from "../assets/cake4.jpg";
import cake5Image from "../assets/cake5.jpg";
import cake6Image from "../assets/cake6.jpg";
import cake7Image from "../assets/cake7.jpg";
import cake8Image from "../assets/cake8.jpg";

const ItemCarousel = () => {
  const [index, setIndex] = useState(0);

  const items = [
    {
      image: cake1Image,
      alt: "First item",
      title: "Available for 1 Hour Delivery",
      description: "Cinamon Honey Cake",
      size: "One Size",
      price: "$49.99",
    },
    {
      image: cake2Image,
      alt: "Second item",
      title: "Available for 1 Hour Delivery",
      description: "Lavender Cake",
      size: "One Size",
      price: "$38",
      delivery: "Available for 1-Hour delivery",
    },
    {
      image: cake3Image,
      alt: "Third item",
      title: "Available for 1 Hour Delivery",
      description: "Panettone",
      size: "One Size",
      price: "$24",
      sellingFast: true,
    },
    {
      image: cake4Image,
      alt: "Fourth item",
      title: "Available for 1 Hour Delivery",
      description: "Panettone",
      size: "Seven Sizes at",
      price: "$45",
      delivery: "Available for 1-Hour delivery",
    },
    {
      image: cake5Image,
      alt: "Fifth item",
      title: "Available for 1 Hour Delivery",
      description: "Muffin Vanilla",
      size: "One Size",
      price: "$10",
    },
    {
      image: cake6Image,
      alt: "Sixth item",
      title: "Available for 1 Hour Delivery",
      description: "Flower Cake",
      size: "One Size",
      price: "$39.99",
    },
    {
      image: cake7Image,
      alt: "Seventh item",
      title: "Available for 1 Hour Delivery",
      description: "Macaroons's Fruits",
      size: "One Size",
      price: "$9.99",
      sellingFast: true,
    },
    {
      image: cake8Image,
      alt: "Eight item",
      title: "Available for 1 Hour Delivery",
      description: "Figues Cake",
      size: "One Size",
      price: "$40",
    },
  ];

  const handleItems = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slidesDisplayed = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const itemsSlides = slidesDisplayed(items, 4);
  return (
    <Container className="my-5 item-carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleItems}
        indicators={false}
        prevIcon={<FaChevronLeft className="carousel-control-icon" />}
        nextIcon={<FaChevronRight className="carousel-control-icon" />}
      >
        {itemsSlides.map((item, itemIndex) => (
          <Carousel.Item key={itemIndex}>
            <Row>
              {item.map((item, itemIndex) => (
                <Col md={3} key={itemIndex}>
                  <div className="product-item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                    />
                    {item.sellingFast && (
                      <span className="selling-fast-badge">Selling Fast</span>
                    )}
                    {item.delivery && (
                      <span className="delivery-badge">{item.delivery}</span>
                    )}
                    <h3 className="product-name">{item.title}</h3>
                    <p className="product-description">{item.description}</p>
                    <p className="product-size">{item.size}</p>
                    <span className="product-price">{item.price}</span>
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

export default ItemCarousel;
