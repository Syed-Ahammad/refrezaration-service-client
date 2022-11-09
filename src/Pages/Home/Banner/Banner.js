import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-min rounded-lg mt-12"
      style={{ backgroundImage: `url("https://demo.htmlcodex.com/2574/ac-repair-website-template/img/carousel-2.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Quality Heating & Air Condition Services</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Services</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
