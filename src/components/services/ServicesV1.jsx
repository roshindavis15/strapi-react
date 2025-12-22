import React from "react";
import SingleServicesV1 from "./SingleServicesV1";

const ServicesV1 = ({ services = [] }) => {
  // Only active services
  const activeServices = services.filter(item => item.isActive);
  console.log("activeServices:",activeServices)

  if (!activeServices.length) return null;

  return (
    <div className="container-fluid p-0 " style={{margin:"-24px"}} >
      <div
        id="servicesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Slides */}
        <div className="carousel-inner">
          {activeServices.map((service, index) => {
            const imageUrl = service.Icon?.url
              ? `https://strapi-new-production-d256.up.railway.app${service.Icon.url}`
              : "";

            return (
              <div
                key={service.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="services-carousel-slide"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >
                  <SingleServicesV1 service={service} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
};

export default ServicesV1;
