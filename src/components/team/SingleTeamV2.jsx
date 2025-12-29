import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleTeamV2 = ({ team }) => {
  const { id, Name, Profession, slug, Photo } = team;

  return (
    <div className="team-style-two">
      <div className="thumb">
        <img
          src={` https://strapi-production-77e6.up.railway.app${Photo?.url}`}
          alt={name}
        />

        <div className="team-info">
          <div className="content">
            <h4>
              <Link to={`/team/${slug}#`}>{Name}</Link>
            </h4>
            <span>{Profession}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamV2;
