import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const FloatingLabelInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  return (
    <div className="my-5 discount_border p-3">
      <Row className="d-flex justify-content-center">
        <h1 className="d-flex justify-content-center">Unlock your discount</h1>
        <p className="d-flex justify-content-center fs-4">
          Join our email list for
          {' '}
          <span className="text-danger ms-1 me-1 fs-4">instant savings</span>
          on your next pickup order
        </p>
        <Col className="col-md-12 d-flex justify-content-center gap-3">
          <div className="floating-label-input">
            <input
              type="text"
              id="full-name"
              value={name}
              onChange={handleNameChange}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              placeholder={isNameFocused ? '' : 'Full Name*'}
            />
            <label
              htmlFor="full-name"
              className={isNameFocused || name ? 'active' : ''}
            >
              Full Name*
            </label>
          </div>
          <div className="floating-label-input">
            <input
              type="email"
              id="email-address"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              placeholder={isEmailFocused ? '' : 'Email Address*'}
            />
            <label
              htmlFor="email-address"
              className={isEmailFocused || email.length ? 'active' : ''}
            >
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
