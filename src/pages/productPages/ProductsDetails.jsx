import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderV5 from "../../components/header/HeaderV5";
import FooterV1 from "../../components/footer/FooterV1";
import Preloader from "../../components/others/Preloader";
import HeaderV1 from "../../components/header/HeaderV1";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://strapi-production-77e6.up.railway.app/api/products", {
        params: {
          filters: { slug: { $eq: slug } },
          populate: { Image: true },
        },
      })
      .then((res) => {
        setProduct(res.data.data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!product) return <Preloader/>

  return (
    <>
      <HeaderV1 />

      <section className="product-detail-area">
        <div className="container">
          <div className="product-detail-grid">

            {/* IMAGE */}
            <div className="product-image-box">
              {product.Badge && (
                <span className="product-badge">{product.Badge}</span>
              )}

              <img
                src={`https://strapi-production-77e6.up.railway.app${product.Image?.url}`}
                alt={product.Title}
              />
            </div>

            {/* CONTENT */}
            <div className="product-info">
              <span className="category">{product.Subtitle}</span>
              <h1>{product.Title}</h1>

              <div className="price">₹{product.Price}</div>

              <p className="description">
                High-quality product designed to deliver the best performance
                and durability. Perfect for everyday use.
              </p>

              <div className="product-actions">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-outline">Buy Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FooterV1 />
    </>
  );
};

export default ProductDetail;
