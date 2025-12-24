import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, logout } from "../../utils/auth";
import Preloader from "../../components/others/Preloader";
import HeaderV1 from "../../components/header/HeaderV1";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = getToken();
      console.log("token:",token)

      const res = await axios.get(
        "https://strapi-new-production-d256.up.railway.app/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
    } catch (error) {
      console.error("Profile fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Preloader />;

  if (!user) return <p>Unable to load profile</p>;

  return (
    <>
    <HeaderV1/>
    <div className="container" style={{paddingTop:"10rem"}}>
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* <button
          className="btn btn-danger mt-3"
          onClick={() => {
            logout();
            window.location.href = "/";
          }}
        >
          Logout
        </button> */}
      </div>
    </div>
    </>
  );
};

export default Profile;
