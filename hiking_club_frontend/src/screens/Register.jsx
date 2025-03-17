import React, { useState } from "react";
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
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value),
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the uploaded file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-content">
          <h2>Sign Up</h2>
          <p className="HaveAccount">
            Already have an account? <a className="login-link" href="/login">Login</a>
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
                    "Designing (Photoshop, Coraldraw, Illustrator)",
                    "Web Designing and Development (HTML, PHP, CSS, JS)",
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
                  minLength="100"
                  required
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
                <div className="checkbox-group">
                  {["Father", "Mother", "Other"].map((relation) => (
                    <label key={relation}>
                      <input
                        type="checkbox"
                        name="kinship"
                        value={relation}
                        checked={formData.kinship.includes(relation)}
                        onChange={handleChange}
                      />
                      {relation}
                    </label>
                  ))}
                </div>
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
                <p>Plaese note that inorder to activate your membership you have to pay a fee of Rs 500 /= and upload the receipt here</p>
                <input
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