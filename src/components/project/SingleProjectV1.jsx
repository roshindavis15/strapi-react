import React from "react";

const SingleProjectV1 = ({ product }) => {
  const {
    Title,
    Subtitle,
    slug,
    Price,
    Badge,
    Image,
  } = product;

  return (
    <div className="">
      {/* IMAGE */}
      <img
        src={` https://strapi-production-77e6.up.railway.app${Image?.url}`}
        alt={Title}
        className="img-fluid"
      />

      {/* BADGE */}
      {Badge && <span className="badge">{Badge}</span>}

      {/* OVERLAY CONTENT */}
      <div className="overlay">
        <span>{Subtitle}</span>

        <h4>
          <a href={`/product/${slug}`}>{Title}</a>
        </h4>

        <div className="price">
          <strong>₹{Price}</strong>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectV1;
