import React from "react";

const SingleTestimonialV2 = ({ testimonial }) => {
  const { Text, name, designation, Photo } = testimonial;
  

  return (
    <div className="testimonial-style-one">
      <div className="item">
        <div className="content">
          <p>{Text}</p>
        </div>

        <div className="provider">
          <div className="thumb">
            {Photo?.url && (
              <img
                src={`https://strapi-new-production-d256.up.railway.app${Photo.url}`}
                alt={name}
              />
            )}
          </div>

          <div className="info">
            <h4>{name}</h4>
            <span>{designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialV2;
