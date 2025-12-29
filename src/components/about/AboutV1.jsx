import React from "react";
import { Link } from "react-router-dom";

const AboutV1 = ({ mission }) => {
  if (!mission || !mission.isActive) return null;

  const {
    mainTitle,
    highlightedWord,
    backgroundImage,
    videoLabel,
    videoUrl,
    featuresTitle,
    featuresDescriptions,
  } = mission;

  return (
    <div className="about-style-one-area default-padding">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-xl-4 col-lg-12">
            <div
              className="about-style-one bg-dark text-light"
              style={{
                backgroundImage: "url(img/shape/7.png)",
              }}
            >
              <ul className="check-list-item">
                {featuresTitle && (
                  <li>
                    <h5>{featuresTitle}</h5>
                    <p>{featuresDescriptions}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-8 col-lg-12">
            <div className="about-style-one">
              <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                {mainTitle} <br />
                <strong>{highlightedWord}</strong>
              </h2>

              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: backgroundImage?.url
                    ? `url( https://strapi-production-77e6.up.railway.app${backgroundImage.url})`
                    : "none",
                }}
              >
                {videoUrl && (
                  <Link
                    to={videoUrl}
                    className="mfp-iframe popup-youtube video-play-button with-text mt-20"
                    target="_blank"
                  >
                    <div className="effect"></div>
                    <span>
                      <i className="fa-solid fa-play"></i> {videoLabel}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutV1;
