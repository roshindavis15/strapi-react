import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import Preloader from "../../components/others/Preloader";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const PAGE_SIZE = 3;

  useEffect(() => {
    fetchServices(page);
  }, [page]);

  const fetchServices = async (pageNumber) => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://strapi-production-77e6.up.railway.app/api/servicesses",
        {
          params: {
            "fields[0]": "Title",
            "fields[1]": "Description",
            "fields[2]": "slug",

            "populate[Image][fields][0]": "url",
            "populate[Icon][fields][0]": "url",

            pagination: {
              page: pageNumber,
              pageSize: PAGE_SIZE,
            },
          },
        }
      );

      setServices(res.data.data);
      setPagination(res.data.meta.pagination);
    } catch (error) {
      console.error("Service API error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Preloader />;

  return (
    <>
      <HeaderV1 />

      <BreadCrumb
        breadCrumb="services"
        title1="Turn Information"
        title2="Into Actionable Insights"
        bottomSpace="pb-0"
      />

      <section className="services-area">
        <div className="container">
          {/* SECTION HEADER */}
          <div className="services-header">
            <h2>Our Services</h2>
            <p>
              We provide reliable services using modern tools and
              experienced professionals.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-image">
                  {service.Image && (
                    <img
                      src={`https://strapi-production-77e6.up.railway.app${service.Image.url}`}
                      alt={service.Title}
                    />
                  )}

                  {service.Icon && (
                    <div className="service-icon-circle">
                      <img
                        src={`https://strapi-production-77e6.up.railway.app${service.Icon.url}`}
                        alt="service icon"
                      />
                    </div>
                  )}
                </div>

                <div className="service-content">
                  <h4>{service.Title}</h4>
                  <p>{service.Description}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="service-btn"
                  >
                    View Service
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>

            <span>
              Page {pagination.page} of {pagination.pageCount}
            </span>

            <button
              disabled={page === pagination.pageCount}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <FooterV1 />
    </>
  );
};

export default ServicesSection;
