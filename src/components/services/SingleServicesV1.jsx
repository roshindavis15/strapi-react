import React from "react";

const SingleServicesV1 = ({ service }) => {
  const { Title, ShortDescription } = service;

  return (
    <div className="services-carousel-caption">
      <h2 className="services-title">{Title}</h2>
      <p className="services-description">{ShortDescription}</p>
    </div>
  );
};

export default SingleServicesV1;
