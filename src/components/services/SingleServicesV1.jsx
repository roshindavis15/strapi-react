import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServicesV1 = ({ service }) => {
    const { id, serviceLink, icon1, icon1Dark, icon2, text, title } = service;

    const location = useLocation();
    const pathname = location.pathname;
    const iconName = pathname === '/' ? `${icon1}` : `${icon1Dark}`;

    return (
        <>
            <div className="services-style-one">
                <img src={`/img/icon/${iconName}`} alt="Icon" />
                <Link to={`/${serviceLink}/${id}#`} className="btn-arrow">
                    <i className={icon2}></i>
                </Link>
                <p>{text}</p>
                <h4><Link to={`/${serviceLink}/${id}#`}>{title}</Link></h4>
            </div>
        </>
    );
};

export default SingleServicesV1;