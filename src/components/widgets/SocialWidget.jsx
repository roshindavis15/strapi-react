import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SocialWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <li className='facebook'>
                            <Link to="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li className='twitter'>
                            <Link to="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
                        </li>
                        <li className="pinterest">
                            <Link to="http://pinterest.com" target='_blank'>
                                <i className="fab fa-pinterest"></i>
                            </Link>
                        </li>
                        <li className='linkedin'>
                            <Link to="http://linkedin.com" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SocialWidget;