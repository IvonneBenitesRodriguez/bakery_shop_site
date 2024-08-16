import React from 'react';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import birthdayImg from '../../assets/birthday.jpg';
import loveImg from '../../assets/love.jpg';
import congratsImg from '../../assets/congrax.jpg';
import newbabyImg from '../../assets/newbaby.jpg';
import weedingImg from '../../assets/weeding.jpg';
import anniversaryImg from '../../assets/anniversary1.jpg';

const categories = [
  { name: 'Birthday', image: birthdayImg },
  { name: 'Love', image: loveImg },
  {
    name: 'Congratulation',
    image: congratsImg,
  },
  { name: 'New Baby', image: newbabyImg },
  { name: 'Weeding', image: weedingImg },
  { name: 'Anniversary', image: anniversaryImg },
];

const PopularCategories = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Shop by Popular Categories</h2>
    <Row className="justify-content-center">
      {categories.map((category) => (
        <Col xs={6} sm={4} md={2} key={uuidv4()} className="mb-4 text-center">
          <div className="category-item" style={{ cursor: 'pointer' }}>
            <Image
              src={category.image}
              alt={category.name}
              fluid
              rounded
              className="mb-2 category-img"
            />
            <p className="mb-0 fw-bold">{category.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default PopularCategories;
