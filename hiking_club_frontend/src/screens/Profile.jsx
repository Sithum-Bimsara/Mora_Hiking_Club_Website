import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditingLog, setIsEditingLog] = useState(false);
  const [isEditingbio, setIsEditingbio] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLog, setUserLog] = useState("");
  const [userbio, setUserbio] = useState("");

  const [userDetails, setUserDetails] = useState({
    // application_status: "Pending",
    // password_hash: "",
    First_Name: "John",
    Last_Name: "Doe",
    Full_Name: "John Doe",
    Date_of_Birth: "1990-01-01",
    NIC_nnumber: "123456789V",
    Gender: "Male",
    Email: "xx@email.com",
    Contact_Number: "+123456789",
    University_Index_Number: "U123456",
    Faculty: "Engineering",
    Degree_Program: "Software Engineering",
    Year: "Final Year",
    // bio_description: "Passionate developer.",
    Skills: "JavaScript, React, Node.js",
    Facebook_url: "https://facebook.com/johndoe",
    Instagram_url: "https://instagram.com/johndoe",
    // contact_person_id: "CP123",
    Blood_Type: "O+",
    First_Aid_Skills: "CPR",
    Injuries: "None",
    Long_Term_Medical_Issues: "None",
    Medicines: "None",
    // payment_proof_link: "N/A",
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

          {/* Editable User bio */}
          <h4>My Bio</h4>
          <div className="user-log">
            {isEditingbio ? (
              <textarea
                value={userbio}
                onChange={(e) => setUserbio(e.target.value)}
                className="editable-input"
              />
            ) : (
              <p>{userbio}</p>
            )}
          </div>
          <button
            className="edit-button"
            onClick={() => setIsEditingbio(!isEditingbio)}
          >
            {isEditingbio ? "Save" : "Edit bio"}
          </button>

          <div className="divider"></div>
        </div>
      </div>

      {/* Editable Details Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Details</h3>
            <div className="modal-body">
              {Object.keys(userDetails).map((key) => (
                <div key={key}>
                  <label>{key.replace(/_/g, " ")}</label>
                  <input
                    // type={key === "password_hash" ? "password" : "text"}
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