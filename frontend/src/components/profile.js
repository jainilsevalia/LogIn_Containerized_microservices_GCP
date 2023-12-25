import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    try {
      axios
        .get(`https://container-3-6j5ciz4cca-uc.a.run.app/session`)
        .then((response) => {
          setUserInfo(response.data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onlineUsers = userInfo.filter((user) => user.status === "Online");

  const handleLogout = async () => {
    try {
      await axios.get(
        `https://container-3-6j5ciz4cca-uc.a.run.app/logout?email=${state}`
      );
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="profile-container">
      <h1 className="heading">
        {onlineUsers.length > 0 ? "Online Users" : "No Online Users"}
      </h1>
      {onlineUsers.map((user, index) => (
        <div className="card" key={index}>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-email">{user.email}</p>
          <p className="user-location">{user.location}</p>
          <p className="user-timestamp">
            {" "}
            Online from - {new Date(
              user.timestamp._seconds * 1000
            ).getHours()}{" "}
            :{new Date(user.timestamp._seconds * 1000).getMinutes()}
          </p>
        </div>
      ))}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
