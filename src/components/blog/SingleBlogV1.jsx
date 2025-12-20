import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBlogV1 = ({ blog }) => {
  const {
    id,
    Title,
    Tag,
    Author,
   Date: publishedDate,
    slug,
    BtnText,
    BtnIcon,
    thumbnail,
  } = blog;

  // Use Strapi media URL if thumb exists
  const thumbUrl = thumbnail?.url
    ? `https://strapi-new-production-d256.up.railway.app${thumbnail.url}`
    : "/img/blog/default.jpg"; // fallback image

  return (
    <div className="blog-style-one">
      <div className="relative">
        <div className="thumb">
          <Link to={`/blog/${slug}`}>
            <img src={thumbUrl} alt={Title} />
          </Link>
        </div>
        {Tag && (
          <div className="tags">
            <Link to={void 0}>{Tag}</Link>
          </div>
        )}
      </div>

      <div className="info">
        <div className="meta">
          <ul>
            {Author && <li><Link to={void 0}>{Author}</Link></li>}
           {publishedDate && (
  <li>{new Date(publishedDate).toLocaleDateString()}</li>
)}

          </ul>
        </div>

        <h3 className="post-title">
          <Link to={`/blog/${slug}`}>{Title}</Link>
        </h3>
{BtnText && (
  <button className="button-regular">
    {BtnText} <i className={BtnIcon}></i>
  </button>
)}

      </div>
    </div>
  );
};

export default SingleBlogV1;
