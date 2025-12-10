import React from 'react';
import ServiceListWidgetData from '../../jsonData/ServiceListWidgetData.json'
import { HashLink as Link } from 'react-router-hash-link';

const ServiceListWidget = () => {
    return (
        <>
            <div className="single-widget services-list-widget">
                <h4 className="widget-title">Marketing services</h4>
                <ul>
                    {ServiceListWidgetData.map(service =>
                        <li key={service.id}><Link to={`/${service.listLink}#`}>{service.listTitle} <i className={service.listIcon}></i></Link></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default ServiceListWidget;