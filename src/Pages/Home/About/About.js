import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-fit bg-base-200 rounded-lg my-12">
        <div className="hero-content grid md:grid-cols-2 grid-cols-1">
         <div className="w-full">
         <img
            src="https://demo.themexbd.com/html/fridge/assets/images/why.jpg"
            className="m-0 rounded-lg shadow-2xl"
            alt=""
          />
         </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Tired of calling and finding a fridge or refrigerator repair
              service center near you? Sheba.xyz is the largest marketplace in
              Bangladesh where we serve you with every possible household
              service. Refrigerator repairing service is one of our services to
              repair all types of fridge or freezer related problems. At
              Sheba.xyz online marketplace, you can hire professional
              technicians to repair your fridge or freezer. From general
              diagnosis to material repairing you can find it all in one place.
              Our verified Service Providers will deliver skilled and
              professional refrigerator technicians at your service. We deliver
              a fridge expert technician with integrity from our professional
              service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
