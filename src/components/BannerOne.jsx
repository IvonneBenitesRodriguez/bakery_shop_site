import React from "react";
import pic1 from "../assets/banpic1.jpg";
import pic2 from "../assets/banpic2.jpg";

const BannerOne = () => {
  return (
    <div className="container my-5">
      <div className="row g-3">
        <div className="col-md-6 d-flex justify-content-center position-relative">
          <p className="position-absolute top-3 text-danger fs-2 lh-1 ms-5 ps-5 pt-3 start-0 m-3">
            top-sellers
            <br />
            for summer
          </p>
          <img src={pic1} alt="picture1_banner" className="w-75 rounded" />
          <button className="btn btn-danger position-absolute bottom-0 start-1 m-3">
            Shop Now
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-center position-relative">
          <p className="position-absolute top-3 text-danger fs-2 lh-1 ms-5 ps-5 pt-3 start-0 m-3">
            birthday fun
            <br />
            delivered
          </p>
          <img src={pic2} alt="picture2_banner" className="w-75 rounded" />
          <button className="btn btn-danger position-absolute bottom-0 start-1 m-3">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
