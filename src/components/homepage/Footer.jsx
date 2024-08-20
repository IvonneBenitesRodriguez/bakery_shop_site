import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => (
  <footer className="mt-5 bg-light py-4">
    <Container className="mx-auto">
      <Row className="mb-4">
        <Col>
          <h5 className="mb-3">Follow Us</h5>
          <div>
            <label htmlFor="instagram-link" />
            <Link id="instagram-link" to="/" className="me-3 text-dark ms-0">
              <FaInstagram size={34} />
            </Link>
            <label htmlFor="facebook-link" />
            <Link id="facebook-link" to="/" className="me-3 text-dark ms-3">
              <FaFacebookF size={34} />
            </Link>
            <label htmlFor="twitter-link" />
            <Link id="twitter-link" to="/" className="me-3 text-dark ms-3">
              <FaTwitter size={34} />
            </Link>
            <label htmlFor="pinterest-link" />
            <Link id="pinterest-link" to="/" className="me-3 text-dark ms-3">
              <FaPinterest size={34} />
            </Link>
            <label htmlFor="youtube-link" />
            <Link id="youtube-link" to="/" className="text-dark ms-3">
              <FaYoutube size={34} />
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h5>Secure Payments By</h5>
          <div className="d-flex flex-wrap">
            <img
              src="https://th.bing.com/th/id/OIP.2Wn_QwGm8-Pw09teA3tg9gAAAA?rs=1&pid=ImgDetMain"
              alt="stripe"
              // className="me-3 mb-2"
              height="40"
            />
          </div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={3}>
          <img src={logo} alt="Edible" height="100" />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap justify-content-center">
            <Link to="/ugc-terms" className="text-dark me-3 mb-2">
              UGC Terms
            </Link>
            <Link to="/terms-of-use" className="text-dark me-3 mb-2">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="text-dark me-3 mb-2">
              Privacy Policy
            </Link>
            <Link
              to="/california-privacy-rights"
              className="text-dark me-3 mb-2"
            >
              California Privacy Rights
            </Link>
            <Link to="/promotion-terms" className="text-dark me-3 mb-2">
              Promotion Terms and Conditions
            </Link>
            <Link to="/privacy-choices" className="text-dark mb-2">
              Your Privacy Choices
              <span>✓</span>
            </Link>
          </div>
        </Col>
        <Col md={3} className="d-md-flex justify-content-md-end">
          <small>
            © 2009-2024 Edible Arrangements, LLC.
            <br />
            All rights reserved.
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
