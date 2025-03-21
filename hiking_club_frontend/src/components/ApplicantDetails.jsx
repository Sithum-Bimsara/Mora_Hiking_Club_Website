import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ApplicantDetails.css";

const ApplicantDetails = ({ applicantId, onBack }) => {
    const [applicant, setApplicant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!applicantId) return;
        console.log("Fetching details for applicant_id:", applicantId);
        const fetchApplicantDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:8080/api/applicants/${applicantId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setApplicant(response.data);
            } catch (err) {
                console.error("Error fetching applicant details:", err);
                setError("Failed to load applicant details.");
            } finally {
                setLoading(false);
            }
        };

        fetchApplicantDetails();
    }, [applicantId]);

    if (loading) return <p>Loading applicant details...</p>;
    if (error) return <p>{error}</p>;
    if (!applicant) return <p>No applicant details available.</p>;

    // Construct the payment proof URL
    const paymentProofUrl = applicant.payment_proof_link
        ? `http://localhost:8080/uploads/payment-receipts/${applicant.payment_proof_link.split("\\").pop()}`
        : null;

    return (
        <div className="ApplicantDetails">
            <h2>Applicant Details</h2>
            <div className="ApplicantInfo">
                <p><strong>First Name:</strong> {applicant.first_name || "N/A"}</p>
                <p><strong>Last Name:</strong> {applicant.last_name || "N/A"}</p>
                <p><strong>Full Name:</strong> {applicant.full_name || "N/A"}</p>
                <p><strong>Date of Birth:</strong> {applicant.date_of_birth || "N/A"}</p>
                <p><strong>NIC Number:</strong> {applicant.NIC_no || "N/A"}</p>
                <p><strong>Gender:</strong> {applicant.gender || "N/A"}</p>
                <p><strong>Email:</strong> {applicant.email || "N/A"}</p>
                <p><strong>Contact No:</strong> {applicant.contact_no || "N/A"}</p>
                <p><strong>University ID:</strong> {applicant.university_id || "N/A"}</p>
                <p><strong>Faculty:</strong> {applicant.faculty || "N/A"}</p>
                <p><strong>Degree Program:</strong> {applicant.degree_program || "N/A"}</p>
                <p><strong>Year:</strong> {applicant.year || "N/A"}</p>
                <p><strong>Bio Description:</strong> {applicant.bio_description || "N/A"}</p>
                <p><strong>Skills:</strong> {applicant.skills || "N/A"}</p>
                <p><strong>Facebook:</strong> {applicant.facebook_url ? <a href={applicant.facebook_url} target="_blank" rel="noopener noreferrer">View Profile</a> : "N/A"}</p>
                <p><strong>Instagram:</strong> {applicant.instagram_url ? <a href={applicant.instagram_url} target="_blank" rel="noopener noreferrer">View Profile</a> : "N/A"}</p>
                <p><strong>Blood Type:</strong> {applicant.blood_type || "N/A"}</p>
                <p><strong>First Aid Skills:</strong> {applicant.first_aid_skills || "N/A"}</p>
                <p><strong>Injuries:</strong> {applicant.injuries || "None"}</p>
                <p><strong>Long-Term Medical Issues:</strong> {applicant.long_term_medical_issues || "None"}</p>
                <p><strong>Medicines:</strong> {applicant.medicines || "N/A"}</p>
                
                {/* Payment Proof Display */}
                <p><strong>Payment Proof:</strong></p>
                {paymentProofUrl ? (
                    paymentProofUrl.endsWith(".pdf") ? (
                        <iframe 
                            src={paymentProofUrl} 
                            width="100%" 
                            height="500px"
                            title="Payment Proof"
                        ></iframe>
                    ) : (
                        <img src={paymentProofUrl} alt="Payment Proof" style={{ maxWidth: "100%", height: "auto" }} />
                    )
                ) : (
                    <p>N/A</p>
                )}
            </div>

            <button onClick={onBack} className="back-button">Back</button>
        </div>
    );
};

export default ApplicantDetails;
