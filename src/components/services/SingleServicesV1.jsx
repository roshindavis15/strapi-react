import React from "react";

const SingleServicesV1 = ({ service }) => {
  const { title, shortDescription } = service;

  return (
    <div className="services-carousel-caption">
      <h2 className="services-title">{title}</h2>
      <p className="services-description">{shortDescription}</p>
    </div>
  );
};

export default SingleServicesV1;
