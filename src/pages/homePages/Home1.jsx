import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderV1 from "../../components/header/HeaderV1";
import ServicesV1 from "../../components/services/ServicesV1";
import AboutV1 from "../../components/about/AboutV1";
import ProjectV1 from "../../components/project/ProjectV1";
import TeamV1 from "../../components/team/TeamV2";
import BlogV1 from "../../components/blog/BlogV1";
import FooterV1 from "../../components/footer/FooterV1";
import Preloader from "../../components/others/Preloader";

const Home1 = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
axios.get(" https://strapi-production-77e6.up.railway.app/api/home", {
  
  params: {
    populate: {
      mission: {
        populate: ["backgroundImage"],
      },
      services: {
        populate: ["Icon"],
      },
      products: {
        populate: ["Image"],
      },
      team_members: {
        populate: ["Photo"],
      },
      blogs: {
        populate: ["thumbnail"],
      },
    },
  },
})

      .then((res) => {
          console.log("homeData:",res.data.data)
        setHomeData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Home API error:", err);
        setLoading(false);
      });
  }, []);

  // if (loading) return <p>Loading...</p>;
  if (!homeData) return  <Preloader/>

  return (
    <>
      <HeaderV1 headerClass="dark" />

      {/* SERVICES */}
      {homeData.services?.length > 0 && (
        <div className="py-4">
          <ServicesV1 services={homeData.services} />
        </div>
      )}

      {/* MISSION / ABOUT */}
      {homeData.mission && (
        <AboutV1 mission={homeData.mission} />
      )}

      {/* PRODUCTS */}
      {homeData.products?.length > 0 && (
        <ProjectV1 products={homeData.products} />
      )}

      {/* TEAM */}
      {homeData.team_members?.length > 0 && (
        <TeamV1 teamMembers={homeData.team_members} />
      )}

      {/* BLOG */}
      {homeData.blogs?.length > 0 && (
        <BlogV1 blogs={homeData.blogs} />
      )}

      <FooterV1 />
    </>
  );
};

export default Home1;
