import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">My Account</h2>
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-picture"></div>
          <button className="save-button">Save</button>
        </div>
        <div className="profile-right">
          <h4>My Files</h4>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
