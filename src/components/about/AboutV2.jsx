import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import AboutListInfo from '../../jsonData/AboutListInfo.json';

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-two">
                            <div className="about-two-thumb">
                                <img src="/img/thumb/4.jpg" alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>18</strong> Years Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
                            <div className="about-two-info">
                                <h4 className="sub-title">About our compnay</h4>
                                <h2 className="title">Providing the best service <br /> In digital marketing</h2>
                                <p>
                                    Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfa-solidt. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                </p>
                                <div className="about-grid-info">
                                    <Link className="btn-round-animation" to="/services#">Discover More <i className="fa-solid fa-arrow-right"></i></Link>
                                    <ul className="list-info-item">
                                        {AboutListInfo.map(list =>
                                            <li key={list.id}>
                                                <h4><Link href="#">{list.title} <i className="fa-solid fa-angle-right"></i></Link></h4>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;