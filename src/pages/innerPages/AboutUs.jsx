import React, { useEffect, useState } from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV2 from '../../components/about/AboutV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';
import axios from 'axios';
import HeaderV1 from '../../components/header/HeaderV1';

const AboutUs = () => {
     const [aboutData, setAboutData] = useState(null);

     useEffect(() => {
    axios
      .get("https://strapi-production-77e6.up.railway.app/api/about", {
        params: {
          populate: {
            HeroImage: true,
            aboutlist: true,
                 whyChooseUs: {
        populate: {
          HeroImage: true,
          items: true,
        },
      },
            testimonialItem: { populate: ["Photo"] },
            // team_members: { populate: ["photo"] },
          },
        },
      })
      .then((res) => setAboutData(res.data.data))
      .catch(console.error);
  }, []);

  if (!aboutData) return null;

    return (
        <>
            <HeaderV1 />
            <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" />
            <AboutV2 about={aboutData} />
            <WhyChooseUsV2 data={aboutData.whyChooseUs} />
            <TestimonialV2 testimonials={aboutData.testimonialItem}  />
            {/* <TeamV2 bgColor="bg-gray" /> */}
            <FooterV1 />
        </>
    );
};

export default AboutUs;