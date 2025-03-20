import React, { useState, useEffect, useRef } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditingLog, setIsEditingLog] = useState(false);
  const [isEditingHistory, setIsEditingHistory] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLog, setUserLog] = useState("Hi, I am Sasmitha Jayasinghe");
  const [userHistory, setUserHistory] = useState("Mehe giya ahare giya");
  const modalRef = useRef(null); // Reference for modal

  const [userDetails, setUserDetails] = useState({
    application_status: "Pending",
    password_hash: "",
    first_name: "John",
    last_name: "Doe",
    full_name: "John Doe",
    date_of_birth: "1990-01-01",
    NIC_no: "123456789V",
    gender: "Male",
    email: "xx@email.com",
    contact_no: "+123456789",
    university_id: "U123456",
    faculty: "Engineering",
    degree_program: "Software Engineering",
    year: "Final Year",
    bio_description: "Passionate developer.",
    skills: "JavaScript, React, Node.js",
    facebook_url: "https://facebook.com/johndoe",
    instagram_url: "https://instagram.com/johndoe",
    contact_person_id: "CP123",
    blood_type: "O+",
    first_aid_skills: "CPR",
    injuries: "None",
    long_term_medical_issues: "None",
    medicines: "None",
    payment_proof_link: "N/A",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Account</h2>
      <div className="profile-content">
        <div className="profile-left">
          {/* Profile Image */}
          <div className="profile-picture">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-img" />
            ) : (
              <p className="placeholder-text"></p>
            )}
          </div>

          <label htmlFor="upload" className="edit-button">
            Edit Photo
          </label>

          {/* User Details */}
          <div className="user-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>ID:</strong> 123456</p>
            <p><strong>Email:</strong> xx@email.com</p>

            {/* Edit Details Button */}
            <button
              className="edit-button"
              onClick={() => setIsModalOpen(true)}
            >
              Edit Details
            </button>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            id="upload"
            className="file-input"
            onChange={handleImageChange}
          />
        </div>

        <div className="profile-right">
          {/* Editable User Log */}
          <h4>My Log</h4>
          <div className="user-log">
            {isEditingLog ? (
              <textarea
                value={userLog}
                onChange={(e) => setUserLog(e.target.value)}
                className="editable-input"
              />
            ) : (
              <p>{userLog}</p>
            )}
          </div>
          <button
            className="edit-button"
            onClick={() => setIsEditingLog(!isEditingLog)}
          >
            {isEditingLog ? "Save" : "Edit Log"}
          </button>

          <br />

          {/* Editable User History */}
          <h4>My History</h4>
          <div className="user-log">
            {isEditingHistory ? (
              <textarea
                value={userHistory}
                onChange={(e) => setUserHistory(e.target.value)}
                className="editable-input"
              />
            ) : (
              <p>{userHistory}</p>
            )}
          </div>
          <button
            className="edit-button"
            onClick={() => setIsEditingHistory(!isEditingHistory)}
          >
            {isEditingHistory ? "Save" : "Edit History"}
          </button>

          <div className="divider"></div>
        </div>
      </div>

      {/* Editable Details Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <h3>Edit Details</h3>
            <div className="modal-body">
              {Object.keys(userDetails)
                .filter((key) => key !== "password_hash" && key !== "application_status") // Exclude specific fields
                .map((key) => (
                  <div key={key}>
                    <label>{key.replace(/_/g, " ")}</label>
                    <input
                      type={key === "password_hash" ? "password" : "text"}
                      name={key}
                      value={userDetails[key]}
                      onChange={handleChange}
                      disabled={["first_name", "last_name", "full_name", "email"].includes(key)} // Disable specific fields
                    />
                  </div>
                ))}
            </div>

            <button
              className="save-button"
              onClick={() => setIsModalOpen(false)}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
