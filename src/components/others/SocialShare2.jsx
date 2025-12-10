import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link to="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="http://twitter.com" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="https://www.pinterest.com" target='_blank' ><i className="fab fa-pinterest"></i></Link></li>
            <li><Link to="https://www.linkedin.com" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare2;