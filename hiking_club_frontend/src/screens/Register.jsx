import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    fullName: "",
    dateOfBirth: "",
    nationalIdCardNo: "",
    gender: "",
    contactNo: "",
    // Account Details
    email: "",
    password: "",
    confirmPassword: "",
    // University Details
    universityRegistrationNo: "",
    faculty: "",
    degreeProgram: "",
    level: "",
    // Club Details
    skills: [],
    bio: "",
    facebookUrl: "",
    instagramUrl: "",
    // Additional Details
    nameOfKin: "",
    kinship: "",
    kinContactNo: "",
    kinAddress: "",
    // Medical Details
    bloodType: "",
    firstAidSkills: "No",
    specialMedicalConditions: "No",
    injuries: "No",
    longTermMedicalIssues: "No",
    medicines: "No",
    paymentReceipt: null, // Add this field
 
  });

  const [showPassword, setShowPassword] = useState(false);  
    

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    if (type === "checkbox") {

      if (name === "skills") {
        setFormData((prevData) => ({
          ...prevData,
          skills: checked
            ? [...prevData.skills, value]
            : prevData.skills.filter((skill) => skill !== value),
        }));
      } else if (name === "kinship") {
        setFormData((prevData) => ({
          ...prevData,
          kinship: checked
            ? [...prevData.kinship, value]
            : prevData.kinship.filter((k) => k !== value),
        }));
      }
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the actual file object
      }));
    } else if (name === "gender") {
      setFormData((prevData) => ({
        ...prevData,
        gender: value, // Keep as displayed ('Male', 'Female')

      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert gender to lowercase
    const formattedGender = formData.gender.toLowerCase();
  
    // Create FormData for file upload
    const formDataToSend = new FormData();
  
    formDataToSend.append("password_hash", formData.password);
    formDataToSend.append("first_name", formData.firstName);
    formDataToSend.append("last_name", formData.lastName);
    formDataToSend.append("full_name", formData.fullName);
    formDataToSend.append("date_of_birth", formData.dateOfBirth);
    formDataToSend.append("NIC_no", formData.nationalIdCardNo);
    formDataToSend.append("gender", formattedGender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact_no", formData.contactNo);
    formDataToSend.append("university_id", formData.universityRegistrationNo);
    formDataToSend.append("faculty", formData.faculty);
    formDataToSend.append("degree_program", formData.degreeProgram);
    formDataToSend.append("year", formData.level);
    formDataToSend.append("bio_description", formData.bio);
    formDataToSend.append("skills", JSON.stringify(formData.skills)); // Store skills as JSON array
    formDataToSend.append("facebook_url", formData.facebookUrl);
    formDataToSend.append("instagram_url", formData.instagramUrl);
    formDataToSend.append("blood_type", formData.bloodType);
    formDataToSend.append("first_aid_skills", formData.firstAidSkills);
    formDataToSend.append("injuries", formData.injuries);
    formDataToSend.append("long_term_medical_issues", formData.longTermMedicalIssues);
    formDataToSend.append("medicines", formData.medicines);
    formDataToSend.append("emergency_relationship", formData.kinship);
    formDataToSend.append("emergency_contact_name", formData.nameOfKin);
    formDataToSend.append("emergency_contact_no_1", formData.kinContactNo);
    formDataToSend.append("emergency_contact_no_2", "");
    formDataToSend.append("emergency_address", formData.kinAddress);
  
    // Handle file upload
    if (formData.paymentReceipt) {
      formDataToSend.append("payment_proof_link", formData.paymentReceipt);
    }
  
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 201) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  


  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-content">
          <h2>Sign Up</h2>
          <p className="HaveAccount">
            Already have an account? <a className="login-link" href="/login">Login</a>
          </p>

          <p className="Eligibility">
          Eligibility: <br /><br />
● Undergraduates from the 21,22, 23 and 24 batches,<br />
● Undergraduates from faculty of architecture and faculty of medicine of the 20 th batch. <br /><br />

Please only proceed if you meet these requirements
          </p>

          <form onSubmit={handleSubmit}>
            {/* Personal Details Section */}
            <div className="section">
              <h3>Personal Details</h3>
              <div className="form-row">
                <div className="form-group inline">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group inline">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>National Identity Card Number:</label>
                <input
                  type="text"
                  name="nationalIdCardNo"
                  value={formData.nationalIdCardNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      required
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      required
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <hr />

            {/* Account Details Section */}
            <div className="section">
              <h3>Account Details</h3>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group password-field">
                <label>Password:</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="form-group password-field">
                <label>Confirm Password:</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <hr />

            {/* University Details Section */}
            <div className="section">
              <h3>University Details</h3>
              <div className="form-group">
                <label>University Registration Number:</label>
                <input
                  type="text"
                  name="universityRegistrationNo"
                  value={formData.universityRegistrationNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Faculty:</label>
                <input
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Degree Program:</label>
                <input
                  type="text"
                  name="degreeProgram"
                  value={formData.degreeProgram}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <input
                  type="number"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  required
                />
              </div>
            </div>

            <hr />

            {/* Club Details Section */}
            <div className="section">
              <h3>Club Details</h3>
              <div className="form-group">
              <label>Skills:</label>
              <div className="checkbox-group">
                {[
                  "Photography",
                  "Videography",
                  "Photo Editing",
                  "Video Editing",
                  "First Aid",
                  "Article Writing",
                  "Sponsorship Hunting",
                  "Fund Raising",
                  "Event Planning",
                  "Risk Management",
                  "Graphic Designing",
                  "Web Designing",
                ].map((skill) => (
                  <label key={skill}>
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}

                  // minLength="100"
                  // required
                />
              </div>
              <div className="form-group">
                <label>Facebook URL:</label>
                <input
                  type="url"
                  name="facebookUrl"
                  value={formData.facebookUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Instagram URL:</label>
                <input
                  type="url"
                  name="instagramUrl"
                  value={formData.instagramUrl}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr />

            {/* Additional Details Section */}
            <div className="section">
              <h3>Additional Details</h3>
              <div className="form-group">
                <label>Name of Guardian:</label>
                <input
                  type="text"
                  name="nameOfKin"
                  value={formData.nameOfKin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Relationship with Guardian:</label>

                <input
                  type="text"
                  name="kinship"
                  value={formData.nameOfKin}
                  onChange={handleChange}
                  required
                />

              </div>
              <div className="form-group">
                <label>Guardian Contact Number:</label>
                <input
                  type="tel"
                  name="kinContactNo"
                  value={formData.kinContactNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="kinAddress"
                  value={formData.kinAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <hr />

            {/* Medical Details Section */}
            <div className="section">
              <h3>Medical Details</h3>
              <div className="form-group">
                <label>Blood Type:</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label>First Aid Skills:</label>
                <textarea
                  name="firstAidSkills"
                  value={formData.firstAidSkills}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Special Medical Conditions:</label>
                <textarea
                  name="specialMedicalConditions"
                  value={formData.specialMedicalConditions}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Long-term Medical Issues:</label>
                <textarea
                  name="longTermMedicalIssues"
                  value={formData.longTermMedicalIssues}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Medicines:</label>
                <textarea
                  name="medicines"
                  value={formData.medicines}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr />
            

            {/* Payment Receipt Upload Section */}
            <div className="section">
              <h3>Payment Details</h3>
              <div className="form-group">
                <label>Upload Payment Receipt:</label>
<br />
                <p>Please note that inorder to activate your membership you have to pay a fee of Rs 500 /= and upload the receipt here</p>
                <br /><p>Name: T. D. Sahan
                <br />
Account Number: 94254272   <br />
Bank: BOC <br />
Branch: Avissawella</p>
                <br />    <input
                  type="file"
                  name="paymentReceipt"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png" // Specify accepted file types
                  required
                />
                <p className="file-format-info">Accepted formats: PDF, JPG, JPEG, PNG</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="submit-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;