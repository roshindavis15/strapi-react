import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlogV1 = ({ blog }) => {
    const { id, thumb, tag, author, date, title, postLink, btnText, btnIcon } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="relative">
                    <div className="thumb">
                        <Link to={`/${postLink}/${id}#`}><img src={`/img/blog/${thumb}`} alt="Image Not Found" /></Link>
                    </div>
                    <div className="tags">
                        <Link to={void (0)}>{tag}</Link>
                    </div>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link to={void (0)}>{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h3 className="post-title"><Link to={`/${postLink}/${id}#`}>{title}</Link></h3>
                    <Link to={`/${postLink}/${id}#`} className="button-regular">
                        {btnText} <i className={btnIcon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;