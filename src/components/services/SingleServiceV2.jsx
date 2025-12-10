import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleServiceV2 = ({ service }) => {
    const { id, text, thumb, serviceName, tag, serviceLink, icon, shape } = service

    return (
        <>
            <div className="service-style-two">
                <div className="icon">
                    <img src={`/img/icon/${thumb}`} alt="Image Not Found" />
                </div>
                <p>{text}</p>
                <h4><Link to={`/${serviceLink}/${id}#`}>{serviceName}</Link></h4>
                <span>{tag}</span>
                <Link to={`/${serviceLink}/${id}#`} className="icon-btn"><i className={icon}></i></Link>
                <div className="shape">
                    <img src={`/img/shape/${shape}`} alt="Image Not Found" />
                </div>
            </div>
        </>
    );
};

export default SingleServiceV2;