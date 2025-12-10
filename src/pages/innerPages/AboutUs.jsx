import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV2 from '../../components/about/AboutV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';

const AboutUs = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" />
            <AboutV2 />
            <WhyChooseUsV2 />
            <TestimonialV2 />
            <TeamV2 bgColor="bg-gray" />
            <FooterV1 />
        </>
    );
};

export default AboutUs;