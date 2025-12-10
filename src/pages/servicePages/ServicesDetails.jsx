import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesDetailsContent from '../../components/services/ServicesDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {

    const { id } = useParams()
    const data = ServiceV1Data.filter(service => service.id === parseInt(id))[0]

    return (
        <>
            <div className="wrapper">
                <HeaderV5 />
                <BreadCrumb breadCrumb="services-details" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                <ServicesDetailsContent serviceInfo={data} />
                <FooterV1 />
            </div>
        </>
    );
};

export default ServicesDetails;