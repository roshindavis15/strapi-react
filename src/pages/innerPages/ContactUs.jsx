import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import ContactV1Reverse from '../../components/contact/ContactV1Reverse';

const ContactUs = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="contact-us" title1="Get in touch with us" bottomSpace="pb-0" />
            <ContactV1Reverse />
            <FooterV1 />
        </>
    );
};

export default ContactUs;