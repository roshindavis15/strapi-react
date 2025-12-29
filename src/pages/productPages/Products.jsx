import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import Preloader from "../../components/others/Preloader";
import HeaderV1 from "../../components/header/HeaderV1";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [loading,setLoading]= useState(true);

  const PAGE_SIZE = 3;

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (pageNumber) => {
    try {
      setLoading(true)
          const res = await axios.get("https://strapi-production-77e6.up.railway.app/api/products", {
      params: {
        populate:{
            Image:true
        },
        sort: "Order",
        filters: {
          isActive: { $eq: true },
        },
        pagination: {
          page: pageNumber,
          pageSize: PAGE_SIZE,
        },
      },
    });
    


    setProducts(res.data.data);
    setPagination(res.data.meta.pagination);
  } catch(error){
    console.error("api error:",error)
  } finally{
    setLoading(false)
  }

  };
  if(loading) return <Preloader/>

  return (
    <>
   <HeaderV1 headerClass="dark" />
            <BreadCrumb breadCrumb="products" title1="Explore Our" title2="All Products" bottomSpace="pb-0" />
    <section className="products-area">
      <div className="container py-4">
      

        {/* PRODUCTS GRID */}
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={`https://strapi-production-77e6.up.railway.app${product.Image?.url}`}
                alt={product.Title}
              />

              {product.badge && (
                <span className="badge">{product.Badge}</span>
              )}

              <h4>{product.Title}</h4>
              <p className="price">₹{product.Price}</p>

              <Link to={`/products/${product.slug}`} className="btn">
                View Product
              </Link>
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

export default Products;
