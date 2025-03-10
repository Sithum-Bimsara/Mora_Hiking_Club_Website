import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("Software Engineer | React Enthusiast");

  const handleSave = () => {
    // Add logic to save the profile information
    alert("Profile saved successfully!");
  };

  const files = [
    { id: 1, name: "document.pdf", date: "2023-10-01" },
    { id: 2, name: "image.png", date: "2023-09-25" },
    { id: 3, name: "report.docx", date: "2023-09-20" },
  ];

  return (
    <div className="profile-container">
      <h2 style={{ fontSize: "40px" }} className="profile-title">
        My Account
      </h2>
      <div className="profile-content">
        <div className="profile-left">
          <div
            style={{ height: "300px", width: "300px" }}
            className="profile-picture"
          ></div>
          <div className="profile-info">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="profile-right">
          <h4 style={{ fontSize: "30px" }}>My Files</h4>
          <div className="divider"></div>
          <ul className="file-list">
            {files.map((file) => (
              <li key={file.id} className="file-item">
                <span className="file-name">{file.name}</span>
                <span className="file-date">{file.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;