import React from "react";

const HeroSection = () => (
  <div>
    <div className="jumbotron ">
      <div className="sub-jumbo">
        <h1 className="display-4 ">Explore The World!</h1>
        <p className="lead ">
          The greatest glory in living lies not in never falling, but in rising
          every time we fall.
        </p>
      </div>

      <hr className="my-4" />
      <div className="d-flex flex-column align-items-center">
        <p>The longest journeys start with the smallest steps.</p>
        <button className="btn btn-success btn-lg  " href="/">
          Explore
        </button>
      </div>
    </div>
  </div>
);

export default HeroSection;
