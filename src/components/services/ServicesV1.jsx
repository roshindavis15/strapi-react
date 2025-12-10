import React from 'react';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import SingleServicesV1 from './SingleServicesV1';

const ServicesV1 = () => {
    return (
        <>
            <div className="default-padding box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover" style={{ backgroundImage: "url(/img/shape/banner-2.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Service were offering</h5>
                                <h2 className="title">Turn Information <br /> Into Actionable Insights</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServiceV1Data.slice(0, 3).map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServicesV1 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;