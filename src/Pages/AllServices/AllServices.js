import React from "react";
import {useLoaderData, Link} from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";

const AllServices = () => {
    
  const allService = useLoaderData();
  useTitle('Services');
  console.log(allService)
  
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-24 my-20 ">
        {allService.map(service => <div key={service._id} className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={service.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {service.title}
            </h2>
            <p>{service.description.slice(0, 100)}</p>
            <div className="card-actions justify-between">
             <p>Price:  <span className="text-red-500"> ${service.price}</span></p>
             <Link to={`/services/${service._id}`}> <div className="badge badge-outline">Details</div></Link>
            </div>
          </div>
        </div>)}
      </div>
    );
};

export default AllServices;