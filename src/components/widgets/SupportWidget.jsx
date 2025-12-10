import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SupportWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget text-light" style={{ backgroundImage: "url(/img/thumb/4.jpg)" }}>
                <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                        Speak with a human to filling out a form? call corporate office and we will connect.
                    </p>
                    <h2>+(012) 6679545</h2>
                    <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                    <Link className="btn mt-30 circle btn-sm btn-gradient" to="/contact-us#">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default SupportWidget;