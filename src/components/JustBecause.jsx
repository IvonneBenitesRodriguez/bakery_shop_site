import React, { useState } from 'react';
import {
  Carousel, Container, Row, Col,
} from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import loveImg from '../assets/love-cake.avif';
import congratsImg from '../assets/Congratulations Bouquet.jpg';
import newbabyImg from '../assets/New Baby Celebration.jpg';
import weedingImg from '../assets/Wedding Bliss Bouquet.jpg';
import anniversaryImg from '../assets/Anniversary Special.jpg';
import birthdayImg from '../assets/birthday-party-cake.jpg';
import cheesecakeImg from '../assets/cheesecake-with-raspberry-chocolate.jpg';
import fruitCakeImg from '../assets/delicious-cake-with-fruits.jpg';

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  const products = [
    {
      name: 'Love Bouquet',
      price: 'Two Sizes Starting At $79.98',
      image: loveImg,
    },
    {
      name: 'Congratulations Bouquet',
      price: 'One Size $39.99',
      image: congratsImg,
      delivery: 'Available for 1-Hour Delivery',
    },
    {
      name: 'New Baby Celebration',
      price: 'One Size $44.99',
      image: newbabyImg,
      delivery: 'Available for 1-Hour Delivery',
    },
    {
      name: 'Wedding Bliss Bouquet',
      price: 'Two Sizes Starting At $59.99',
      image: weedingImg,
      sellingFast: true,
    },
    {
      name: 'Anniversary Special',
      price: 'Two Sizes Starting At $52.99',
      image: anniversaryImg,
    },
    {
      name: 'Birthday Surprise',
      price: 'Three Sizes Starting At $49.99',
      image: birthdayImg,
      sellingFast: true,
    },
    {
      name: 'Cheese Cake',
      price: 'Three Sizes Starting At $49.99',
      image: cheesecakeImg,
      delivery: 'Available for 1-Hour Delivery',
    },
    {
      name: 'Fruit Cake',
      price: 'Three Sizes Starting At $49.99',
      image: fruitCakeImg,
      sellingFast: true,
    },
  ];

  const handleItems = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const chunkArray = (arr, size) => {
    const length = Math.ceil(arr.length / size);
    return Array.from({ length }, (v, i) => arr.slice(i * size, i * size + size));
  };

  const productChunks = chunkArray(products, 4);

  return (
    <Container className="product-carousel">
      <Row className="justify-content-between align-items-center mb-3">
        <Col>
          <h2 className="carousel-title">Just Because</h2>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            className="btn btn-light btn-outline-danger text-danger rounded-0 custom-button btn-large fw-bold"
          >
            Order Now
          </button>
        </Col>
      </Row>
      <Carousel
        activeIndex={index}
        onSelect={handleItems}
        indicators={false}
        prevIcon={<FaChevronLeft className="carousel-control-icon" />}
        nextIcon={<FaChevronRight className="carousel-control-icon" />}
      >
        {productChunks.map((chunk) => (
          <Carousel.Item key={uuidv4()}>
            <Row>
              {chunk.map((product) => (
                <Col md={3} key={uuidv4()}>
                  <div className="product-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image rounded"
                    />
                    {product.sellingFast && (
                      <span className="selling-fast-badge">Selling Fast</span>
                    )}
                    {product.delivery && (
                      <span className="delivery-badge">{product.delivery}</span>
                    )}
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
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

export default ProductCarousel;
