import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import SingleTestimonialV2 from "./SingleTestimonialV2";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialV2 = ({ testimonials = [] }) => {
  const slideRef = useRef(null);

  if (!testimonials.length) return null;

  return (
    <div className="testimonail-style-one-area default-padding">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-lg-5">
            <div className="testimonial-style-one-thumb">
              <h2 className="text-large">Testimonial</h2>
              {/* <img src="/img/illustration/1.png" alt="Testimonials" /> */}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 offset-lg-1 pt-200 pt-md-50 pt-xs-40">
            <Swiper
              ref={slideRef}
              modules={[Keyboard, Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={25}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              pagination={{
                clickable: true,
              }}
              keyboard={{ enabled: true }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <SingleTestimonialV2 testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialV2;
