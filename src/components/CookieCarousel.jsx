import React, { useState } from 'react';
import {
  Container, Row, Col, Carousel,
} from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import cookiesImg1 from '../assets/cookiesImg1.jpg';
import cookiesImg2 from '../assets/cookiesImg2.jpg';
import cookiesImg3 from '../assets/cookiesImg3.jpg';
import cookiesImg4 from '../assets/cookiesImg4.jpg';
import cookiesImg5 from '../assets/cookiesImg5.jpg';
import cookiesImg6 from '../assets/cookiesImg6.jpg';
import cookiesImg7 from '../assets/cookiesImg7.jpg';
import cookiesImg8 from '../assets/cookiesImg8.jpg';

const CookieCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      id: 1,
      image: cookiesImg1,
      alt: 'First item',
      title: 'Cinnamon Honey Cookie',
      size: 'Large',
      price: '$49.99',
    },
    {
      id: 2,
      image: cookiesImg2,
      alt: 'Second item',
      title: 'Lavender Delight Cookie',
      size: 'Medium',
      price: '$38',
      delivery: 'Available for 1-Hour delivery',
    },
    {
      id: 3,
      image: cookiesImg3,
      alt: 'Third item',
      title: 'Classic Panettone Cookie',
      size: 'Small',
      price: '$24',
      sellingFast: true,
    },
    {
      id: 4,
      image: cookiesImg4,
      alt: 'Fourth item',
      title: 'Panettone Assortment Cookie',
      size: 'Assorted',
      price: '$45',
      delivery: 'Available for 1-Hour delivery',
    },
    {
      id: 5,
      image: cookiesImg5,
      alt: 'Fifth item',
      title: 'Vanilla Muffin Cookie',
      size: 'Medium',
      price: '$10',
    },
    {
      id: 6,
      image: cookiesImg6,
      alt: 'Sixth item',
      title: 'Flower Power Cookie',
      size: 'Large',
      price: '$39.99',
    },
    {
      id: 7,
      image: cookiesImg7,
      alt: 'Seventh item',
      title: 'Fruit Macaroon Cookie',
      size: 'Small',
      price: '$9.99',
      sellingFast: true,
    },
    {
      id: 8,
      image: cookiesImg8,
      alt: 'Eighth item',
      title: 'Fig Cake Cookie',
      size: 'Medium',
      price: '$40',
    },
  ];

  const handleItems = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slidesDisplayed = (arr, size) => {
    const length = Math.ceil(arr.length / size);
    return Array.from({ length }, (v, i) => arr.slice(i * size, i * size + size));
  };

  const itemsSlides = slidesDisplayed(items, 4);

  return (
    <>
      <Container className="my-5 item-carousel">
        <Carousel
          activeIndex={index}
          onSelect={handleItems}
          indicators={false}
          prevIcon={<FaChevronLeft className="carousel-control-icon" />}
          nextIcon={<FaChevronRight className="carousel-control-icon" />}
        >
          {itemsSlides.map((slide) => (
            <Carousel.Item key={uuidv4()}>
              <Row>
                {slide.map((item) => (
                  <Col md={3} key={item.id}>
                    <div className="product-item">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="product-image rounded"
                      />
                      {item.sellingFast && (
                        <span className="selling-fast-badge">Selling Fast</span>
                      )}
                      {item.delivery && (
                        <span className="delivery-badge">{item.delivery}</span>
                      )}
                      <p className="product-description">{item.title}</p>
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

      <div className="my-5 dropdown-container">
        <div
          className="header-container px-5"
          role="button"
          tabIndex="0"
          onClick={toggleContent}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleContent();
            }
          }}
        >
          <h2 className="header-text fw-bold">
            Edible Arrangements Fruit Bouquets, Chocolate Covered Strawberries &
            Gift Delivery
          </h2>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            &#9660;
          </span>
        </div>
        {isOpen && (
          <div className="content px-5">
            <h3>
              We&apos;ll Deliver Gourmet Desserts & Other Delicious Edible®
              Gifts Right to Their Doorstep
            </h3>
            <p>
              Edible Arrangements® is your go-to destination for Edible® gifts
              that are oh-so delicious and perfect for just about any occasion!
              Our handcrafted Edible® gifts are made with fresh fruits, gourmet
              chocolate, and other irresistible treats that are sure to bring a
              smile to anyone&apos;s face. Whether you&apos;re celebrating a
              special occasion or just want to show someone you care, our gifts
              are the perfect way to make a lasting impression. And with our
              fast and reliable delivery service, you can surprise your loved
              ones with a sweet Edible® gift no matter where they are. We even
              have
              {' '}
              <span className="highlight">same day delivery gifts</span>
              {' '}
              so
              you can send the perfect gift even in a pinch, as well as
              affordable
              {' '}
              <span className="highlight">gifts under $50</span>
              {' '}
              to
              suit any budget! So why wait? Make their day a whole lot sweeter
              with an Edible® gift from Edible Arrangements®!
            </p>

            <h3>Order the Best Chocolate Covered Strawberries Online</h3>
            <p>
              Why settle for just ordinary dipped strawberries when you can have
              the best chocolate covered strawberries delivered right to your
              doorstep! Here at Edible Arrangements®, we prepare our chocolate
              covered strawberries with only the most delectable ingredients. We
              start by selecting the most plump and juiciest strawberries, which
              then get hand-dipped in real, gourmet chocolate for a simply
              sensational treat. Searching for a sweet
              {' '}
              <span className="highlight">birthday gift</span>
              {' '}
              for someone in
              your life? We have birthday-themed white chocolate covered
              strawberries rolled in cake batter and confetti sprinkles for a
              festive surprise! Trying to find the perfect gift for another
              occasion? Our chocolate covered strawberries are available in a
              variety of flavors and gift bundles, allowing you to send a gift
              that&apos;s just perfect for the moment!
            </p>

            <h3>
              Send the Sweetest Gift with an Edible Arrangements® Fruit Gift
              Basket Delivery
            </h3>
            <p>
              Looking to send an incredible gift that&apos;s oh-so delicious?
              Our selection of fruit gift baskets are perfect for any occasion!
              Whether you want to send a
              {' '}
              <span className="highlight">Valentine&apos;s Day gift</span>
              {' '}
              that&apos;s oh-so sweet, or a delightful and delicious
              {' '}
              <span className="highlight">Mother&apos;s Day gift</span>
              {' '}
              that
              will really show your love, Edible Arrangements® has fruit gift
              baskets that can be delivered right to their doorstep. And, each
              of our fruit basket delivery gifts are handcrafted by a Fruit
              Expert®, ensuring that your loved one is receiving only the
              freshest and most delicious gift possible! For fruit gift baskets
              near you, order online today or contact your
              {' '}
              <span className="highlight">
                local Edible Arrangements® location
              </span>
              . The teams at our 1,200+ independently owned locations are ready
              to help you send the perfect gift!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CookieCarousel;
