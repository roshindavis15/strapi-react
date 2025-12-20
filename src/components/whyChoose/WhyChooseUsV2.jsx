import React from "react";

const WhyChooseUsV2 = ({ data }) => {
   
  if (!data) return null;

  const {
    Title,
    sinceYear,
    circularText,
    HeroImage,
    items = [],
  } = data;

  


  return (
    <div className="choose-us-style-two-area default-padding bg-dark text-light">
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-xl-4">
            <div className="choose-us-style-two">
              <h2 className="title mb-50">{Title}</h2>

              <ul className="check-list-item">
                {items
                  .filter(item => item?.title && item?.Text)
                  .map(item => (
                    <li key={item.id}>
                      <h4>{item.title}</h4>
                      <p>{item.Text}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE / INFO */}
          <div className="col-xl-7 offset-xl-1 text-end">
            <div className="choose-us-style-two-thumb">

              {/* CIRCULAR TEXT */}
              <div className="curve-text">
                <svg viewBox="0 0 150 150">
                  <path
                    id="textPath"
                    d="M 0,75 a 75,75 0 1,1 0,1 z"
                  />
                  <text>
                    <textPath href="#textPath">
                      {circularText}
                    </textPath>
                  </text>
                </svg>
              </div>

              <h4>We have served customers</h4>
              <h2 className="text-path">since {sinceYear}</h2>

              {/* HERO IMAGE */}
              {HeroImage?.url && (
                <img
                  src={`https://strapi-new-production-d256.up.railway.app${HeroImage.url}`}
                  alt="Why choose us"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsV2;
