import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlogSideBar = ({ blog }) => {
    const { id, thumb, postLink, author, date, title, text, icon, btnText } = blog

    return (
        <>
            <div className="blog-style-one item">
                <div className="thumb">
                    <Link to={`/${postLink}/${id}#`}><img src={`/img/blog/${thumb}`} alt="Image Not Found" /></Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link to="#">{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2>
                        <Link to={`/${postLink}/${id}#`}>{title}</Link>
                    </h2>
                    <p> {text}</p>
                    <Link to={`/${postLink}/${id}#`} className="button-regular">
                        {btnText} <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSideBar;