import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas,
  Row,
  Col,
} from 'react-bootstrap';
import {
  FaShoppingCart, FaPhoneAlt, FaBars, FaSearch,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => (
  // header
  <header>
    {/* logo */}
    <Navbar bg="white" expand="lg" className="px-3">
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Edible"
            height="130"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        {/* search form */}
        <Form className="d-none d-lg-flex flex-grow-1 mx-4 position-relative">
          <input
            type="search"
            placeholder="Looking for something special?"
            className="form-control search-input"
            aria-label="Search"
          />
          <FaSearch className="search-icon" />
        </Form>
        {/* account and cart links */}
        <Nav className="d-none d-lg-flex ms-auto">
          <Nav.Link href="#account" className="fw-bold text-dark">
            Account
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-center gap-2">
          <Nav.Link
            href="#cart"
            className="d-flex align-items-center me-2 position-relative"
          >
            <FaShoppingCart size={24} />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '0.75rem', padding: '0.35em 0.65em' }}
            >
              0
            </span>
          </Nav.Link>
          {/* hamburger */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md">
            <FaBars size={24} />
          </Navbar.Toggle>
        </div>
        {/* offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-lg-none mb-3">
              <FormControl
                type="search"
                placeholder="Looking for something special?"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#account">Account</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#occasions">Categories</Nav.Link>
              <Nav.Link href="#under-50">Under $50</Nav.Link>
              <Nav.Link href="#sweet-deals" className="text-danger">
                Sweet Deals
              </Nav.Link>
              <Nav.Link href="#same-day">Same Day</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    {/* category */}
    <Navbar expand="lg" className="d-none d-lg-block border-bottom">
      <Container className="d-flex justify-content-center">
        <Nav className="d-flex gap-5">
          <Nav.Link href="#shop" className="shop-link text-dark fw-bold">
            Shop
          </Nav.Link>
          {/* subcategory dropdown */}
          <NavDropdown
            title="Occasions"
            id="occasions-dropdown"
            className="mega-menu-dropdown shop-link"
          >
            <Container>
              <Row>
                <Col md={6} className="fw-normal">
                  <h6>Occasions</h6>
                  <Nav.Link href="#anniversary">Anniversary</Nav.Link>
                  <Nav.Link href="#birthday">Birthday</Nav.Link>
                  <Nav.Link href="#congratulations">Congratulations</Nav.Link>
                  <Nav.Link href="#love">Love</Nav.Link>
                  <Nav.Link href="#new-baby">New Baby</Nav.Link>
                  <Nav.Link href="#wedding">Wedding</Nav.Link>
                </Col>
                <Col md={6} className="fw-normal">
                  <h6>Holidays</h6>
                  <Nav.Link href="#back-to-school">Back to School</Nav.Link>
                </Col>
              </Row>
            </Container>
          </NavDropdown>
          <Nav.Link href="#under-50" className="shop-link text-dark fw-bold">
            Under $50
          </Nav.Link>
          <Nav.Link
            href="#sweet-deals"
            className="shop-link text-danger fw-bold"
          >
            Sweet Deals
          </Nav.Link>
          <Nav.Link href="#same-day" className="shop-link text-dark fw-bold">
            Same Day
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    {/* contact number */}
    <div className="py-2">
      <Container fluid>
        <div className="d-flex flex-wrap align-items-center">
          <div className="ms-auto mt-2 mt-sm-0">
            <Button variant="link" className="text-danger p-0 me-3">
              <FaPhoneAlt className="me-1" />
              425-814-2420
            </Button>
          </div>
        </div>
      </Container>
    </div>
  </header>
);

export default Header;
