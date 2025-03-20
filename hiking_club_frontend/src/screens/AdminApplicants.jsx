import React, { useState, useEffect } from "react";
import AdminSideBar from "../components/AdminSideBar";
import ApplicantDetails from "../components/ApplicantDetails";
import axios from "axios";  // Import axios for API calls
import "../styles/AdminApplicants.css";

const AdminApplicants = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSelectingApplicant, setIsSelectingApplicant] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const applicantsPerPage = 10;

    // Fetch applicants from backend
    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/api/applicants" , {
                    headers: {
                        Authorization: `Bearer ${token}` // Send token in Authorization header
                    }
                }); 
                setApplicants(response.data);
            } catch (error) {
                console.error("Error fetching applicants:", error);
            }
        };

        fetchApplicants();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const filteredApplicants = applicants.filter((applicant) =>
        applicant.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        applicant.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastApplicant = (currentPage + 1) * applicantsPerPage;
    const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
    const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant);

    const totalPages = Math.ceil(filteredApplicants.length / applicantsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const handlePageChange = (e) => {
        let newPage = parseInt(e.target.value) - 1;
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleApplicant = (applicant) => {
        setSelectedApplicant(applicant.applicant_id);  
        setIsSelectingApplicant(true);
    };
    

    const handleBack = () => {
        setIsSelectingApplicant(false);
        setSelectedApplicant(null);
    };

    
    const handleStatusChange = async (applicant_id, newStatus) => {
        try {
            const token = localStorage.getItem("token");
    
            // Convert to lowercase to match database ENUM values
            const formattedStatus = newStatus.toLowerCase(); 
            // console.log(formattedStatus);
            await axios.put(`http://localhost:8080/api/applicants/${applicant_id}/status`, 
                { application_status: formattedStatus }, // Send lowercase value
                {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                }
            );
    
            setApplicants((prevApplicants) =>
                prevApplicants.map((applicant) =>
                    applicant.applicant_id === applicant_id ? { ...applicant, application_status: formattedStatus } : applicant
                )
            );
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    
    

    return (
        <div className="admin-applicants">
            <div className="sidebar">
                <AdminSideBar />
            </div>

            {isSelectingApplicant ? (
                <ApplicantDetails applicantId={selectedApplicant} onBack={handleBack} />
            ) : (
                <div className="applicants-content">
                    <h2>New Applicants</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search an Applicant"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <table className="applicants-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentApplicants.map((applicant) => (
                                <tr key={applicant.applicant_id}>
                                    <td>{applicant.first_name + " " + applicant.last_name}</td>
                                    <td>
                                        <select
                                            value={applicant.application_status.charAt(0).toUpperCase() + applicant.application_status.slice(1)}
                                            onChange={(e) => handleStatusChange(applicant.applicant_id, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => handleApplicant(applicant)}>Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                            Back
                        </button>
                        <span> Page </span>
                        <input
                            type="number"
                            value={currentPage + 1}
                            onChange={handlePageChange}
                            min="1"
                            max={totalPages}
                        />
                        <span> of {totalPages} </span>
                        <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminApplicants;
