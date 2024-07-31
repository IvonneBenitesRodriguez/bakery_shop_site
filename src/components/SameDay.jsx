import React from "react";
import { Container } from "react-bootstrap";
const SameDay = () => {
  return (
    <Container>
      <div className="heading_part d-flex justify-content-between py-4">
        <h3>1 Hour Delivery</h3>
        <button
          type="button"
          className="btn btn-light btn-outline-danger text-danger rounded-0 custom-button btn-large fw-bold"
        >
          Order Now
        </button>
      </div>
    </Container>
  );
};

export default SameDay;
