import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AboutV2 = ({ about }) => {
  if (!about) return null;

  const {
    SubTitle,
    title,
    Description,
    ExperienceYears,
    HeroImage,
    aboutlist,
  } = about;

  return (
    <div className="about-style-two-area default-padding">
      <div className="container">
        <div className="row">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 about-style-two">
            <div className="about-two-thumb">
              <img
                src={
                  HeroImage?.url
                    ? `https://strapi-production-77e6.up.railway.app${HeroImage.url}`
                    : "/img/thumb/4.jpg"
                }
                alt={title}
              />

              <div className="experience">
                <h2>
                  <strong>{ExperienceYears}</strong> Years Experience
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
            <div className="about-two-info">
              <h4 className="sub-title">{SubTitle}</h4>

              <h2 className="title">{title}</h2>

              <p>{Description}</p>

              <div className="about-grid-info">
                <Link className="btn-round-animation" to="/services#">
                  Discover More <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <ul className="list-info-item">
                  {aboutlist?.map((item) => (
                    <li key={item.id}>
                      <h4>
                        <Link to={`/${item.link || "#"}`}>
                          {item.Title}{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutV2;
