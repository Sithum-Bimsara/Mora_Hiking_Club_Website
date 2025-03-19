import React from "react";
import "../styles/ApplicantDetails.css";

const ApplicantDetails = ({ applicant, onBack }) => {
    if (!applicant) return <p>No applicant selected.</p>;
    
    return (
        <div className="ApplicantDetails">
            <h2>Applicant Details</h2>
            <div className="ApplicantInfo">
                <p>First Name: {applicant.firstName}</p>
                <p>Last Name: {applicant.lastName}</p>
                <p>Full Name: {applicant.name}</p>
                <p>Birthdate: {applicant.birthdate || "N/A"}</p>
                <p>Phone Number: {applicant.phone || "N/A"}</p>
                <p>Email: {applicant.email || "N/A"}</p>  
                <p>Skills: {applicant.skills || "N/A"}</p>  
                <p>Status: {applicant.status}</p>
            </div>
            
            <button onClick={onBack} className="back-button">Back</button>        
        </div>
    );
};

export default ApplicantDetails;