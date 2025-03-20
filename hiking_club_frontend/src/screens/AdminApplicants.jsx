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
                const response = await axios.get("http://localhost:8080/api/applicants");  // Adjust URL if needed
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
        setSelectedApplicant(applicant);
        setIsSelectingApplicant(true);
    };

    const handleBack = () => {
        setIsSelectingApplicant(false);
        setSelectedApplicant(null);
    };

    // Function to update application status in backend
    const handleStatusChange = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:8080/api/applicants/${id}/status`, { application_status: newStatus });

            // Update local state after successful request
            setApplicants((prevApplicants) =>
                prevApplicants.map((applicant) =>
                    applicant.id === id ? { ...applicant, application_status: newStatus } : applicant
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
                <ApplicantDetails applicant={selectedApplicant} onBack={handleBack} />
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
                                <tr key={applicant.id}>
                                    <td>{applicant.first_name + " " + applicant.last_name}</td>
                                    <td>
                                        <select
                                            value={applicant.application_status}
                                            onChange={(e) => handleStatusChange(applicant.id, e.target.value)}
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
