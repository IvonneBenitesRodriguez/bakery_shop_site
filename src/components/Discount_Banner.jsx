import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const FloatingLabelInput = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="my-5 discount_border p-3">
      <Row className="d-flex justify-content-center">
        <h1 className="d-flex justify-content-center">Unlock your discount</h1>
        <p className="d-flex justify-content-center fs-4">
          Join our email list for{' '}
          <span className="text-danger ms-1 me-1 fs-4">instant savings</span>on
          your next pickup order
        </p>
        <Col className="col-md-12 d-flex justify-content-center gap-3">
          <div className="floating-label-input">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={isFocused ? '' : 'Full Name*'}
            />
            <label className={isFocused || value ? 'active' : ''}>
              Full Name*
            </label>
          </div>
          <div className="floating-label-input">
            <input
              type="email"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={isFocused ? '' : 'Email Address*'}
            />
            <label className={isFocused || value ? 'active' : ''}>
              Email Address*
            </label>
          </div>
        </Col>

        <Button
          as="input"
          type="submit"
          className="button-discount btn btn-danger"
          value="Submit"
          size="sm"
        />
      </Row>
    </div>
  );
};

export default FloatingLabelInput;
