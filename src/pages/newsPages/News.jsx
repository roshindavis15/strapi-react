import { useEffect, useState } from "react";
import axios from "axios";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await axios.get("https://strapi-new-production-d256.up.railway.app/api/newsses", {
     
      params: {
        populate: {
          Image: { fields: ["url"] },
        },
        sort: "date:desc",
      },
    }
  
  );

    setNews(res.data.data);
  };

  return (
    <>
      <HeaderV5 />
      <BreadCrumb
        breadCrumb="news"
        title1="Latest"
        title2="News & Updates"
        bottomSpace="pb-0"
      />

      <section className="news-area">
        <div className="container">
          {news.map((item) => (
            <div className="news-card" key={item.id}>
              {/* IMAGE */}
              <div className="news-image">  
                <img
                  src={`https://strapi-new-production-d256.up.railway.app${item.Image?.url}`}
                  alt={item.title}
                />
              </div>

              {/* CONTENT */}
              <div className="news-content">
                <span className="news-date">
                  {new Date(item.date).toDateString()}
                </span>

                <h3>{item.Title}</h3>

                <p>{item.Description}</p>

                <Link to={`/news/${item.slug}`} className="news-btn">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterV1 />
    </>
  );
};

export default News;
