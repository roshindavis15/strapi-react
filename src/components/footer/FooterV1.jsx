import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="footer-animated-shape">
                                    <img src="/img/shape/6.png" alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <img className="logo" src="/img/logo/logo-light.png" alt="Logo" />
                                    <p>
                                        Are off under folly death writter transforming cold regular. Almost do am or limits of hearts.
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us#">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us#">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq#">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing#">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                5919 Trussville Crossings Pkwy, Birmingham
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:2151234567">+123 34598768</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Join our subscribers list to get the instant latest news and special offers.
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} ValidThemes. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;