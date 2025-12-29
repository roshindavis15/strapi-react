import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../utils/auth";
import Preloader from "../../components/others/Preloader";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = getToken();

      const res = await axios.get(
        "https://strapi-production-77e6.up.railway.app/api/users/me",
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
  if (!user) return <p className="text-center mt-5">Unable to load profile</p>;

  return (
    <>
      <HeaderV1 />

      <div className="container profile-wrapper py-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="profile-card shadow-sm">
              <div className="profile-header text-center">
                <div className="profile-avatar">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <h3 className="mt-3">{user.username}</h3>
                <p className="text-muted">{user.email}</p>
              </div>

              <div className="profile-body">
                <div className="profile-item">
                  <span>Username</span>
                  <strong>{user.username}</strong>
                </div>

                <div className="profile-item">
                  <span>Email</span>
                  <strong>{user.email}</strong>
                </div>

                <div className="profile-item">
                  <span>Joined</span>
                  <strong>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </strong>
                </div>
              </div>

              {/* Future buttons like Orders, Address, Logout can go here */}
            </div>
          </div>
        </div>
      </div>
       <FooterV1 />
    </>
  );
};

export default Profile;
