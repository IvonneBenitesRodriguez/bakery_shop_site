import React from 'react';
import bannerCookies from '../../assets/cookiesBg.jpg';

const BannerCookies = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center position-relative">
        <img
          src={bannerCookies}
          alt="banner Cookies"
          className="w-75 rounded cookiesPicture"
        />
        <p
          className="position-absolute text-danger fs-2 lh-1 end-0 mt-5 text-end
        textCookies"
        >
          curb your
          <br />
          cookie craving
        </p>

        <button
          type="button"
          className="btn btn-danger position-absolute bottom-0 start-1 m-3"
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
);

export default BannerCookies;
