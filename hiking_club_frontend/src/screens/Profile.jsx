import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 style = {{fontSize : '40px'}} className="profile-title">My Account</h2>
      <div className="profile-content">
        <div className="profile-left">
          <div style={{height : '300px',width : '300px'}} className="profile-picture"></div>
          <button className="save-button">Save</button>
        </div>
        <div className="profile-right">
          <h4 style = {{fontSize : '30px'}}>My Files</h4>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
