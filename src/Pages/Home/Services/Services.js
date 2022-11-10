import React from "react";
import useTitle from "../../../Hooks/UseTitle";


const Services = ({services}) => {
  useTitle('Services')


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-6 gap-4 my-12">
      {services.map(service => <div key={service._id} className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img src={service.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {service.title}
          </h2>
          <p>{service.description.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default Services;
