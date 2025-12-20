import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

import "swiper/css";
import SingleProjectV1 from "./SingleProjectV1";

const ProjectV1 = ({ products = [] }) => {
  const slideRef = useRef(null);

  const handleNext = () => {
    slideRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    slideRef.current?.swiper.slidePrev();
  };

  if (!products.length) return null;

  return (
    <div className="project-style-one-area overflow-hidden default-padding-top bg-gray">
      {/* HEADING */}
      <div className="container">
        <div className="heading-left">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="content-left">
                <h5 className="sub-title">Featured Products</h5>
                <h2 className="heading">Popular Items</h2>
              </div>
            </div>
          </div>
        </div>

        {/* NAV ICONS */}
        <div className="project-nav-box">
          <div className="project-swiper-nav">
            <div
              className="project-button-prev"
              onClick={handlePrev}
            ></div>
            <div
              className="project-button-next"
              onClick={handleNext}
            ></div>
          </div>
        </div>
      </div>

      {/* SWIPER */}
      <div className="project-style-one-items">
        <div className="container-fill">
          <Swiper
            ref={slideRef}
            modules={[Keyboard]}
            speed={700}
            loop={true}
            grabCursor
        
            keyboard={{ enabled: true }}
            breakpoints={{
              991: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 60,
              },
              1800: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <SingleProjectV1 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectV1;
