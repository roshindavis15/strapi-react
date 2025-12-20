import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderV5 from "../../components/header/HeaderV5";
import FooterV1 from "../../components/footer/FooterV1";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [slug]);

  const fetchService = async () => {
    try {
      const res = await axios.get(
        "https://strapi-new-production-d256.up.railway.app/api/servicesses",
        {
          params: {
            "filters[slug][$eq]": slug,

            "fields[0]": "Title",
            "fields[1]": "Description",
            "fields[2]": "slug",

            "populate[Image][fields][0]": "url",
            "populate[Icon][fields][0]": "url",
          },
        }
      );

      if (res.data.data.length === 0) {
        navigate("/service"); // invalid slug
        return;
      }

      setService(res.data.data[0]);
    } catch (error) {
      console.error("Service detail error:", error);
      navigate("/services");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!service) return null;

  return (
    <>
      <HeaderV5 />

      <section className="service-detail-area">
        <div className="container">
          <div className="service-detail-wrapper">

            {/* IMAGE */}
            <div className="service-detail-image">
              {service.Image && (
                <img
                  src={`https://strapi-new-production-d256.up.railway.app${service.Image.url}`}
                  alt={service.Title}
                />
              )}

              {service.Icon && (
                <div className="service-detail-icon">
                  <img
                    src={`https://strapi-new-production-d256.up.railway.app${service.Icon.url}`}
                    alt="icon"
                  />
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="service-detail-content">
              <h2>{service.Title}</h2>

              <p className="short-desc">
                {service.Description}
              </p>

              {/* <ul className="service-points">
                <li>✔ Trusted professionals</li>
                <li>✔ Transparent pricing</li>
                <li>✔ On-time delivery</li>
                <li>✔ Customer satisfaction guaranteed</li>
              </ul> */}

              <a href="/contact-us" className="service-cta">
                Get This Service
              </a>
            </div>

          </div>
        </div>
      </section>

      <FooterV1 />
    </>
  );
};

export default ServiceDetail;
