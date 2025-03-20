import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import ApplicantDetails from "../components/ApplicantDetails";
import "../styles/AdminApplicants.css";

const initialApplicants = [
    { id: 1, name: "John Doe", firstName: "John", lastName: "Doe", birthdate: "1990-01-01", phone: "123-456-7890", email: "johndoe@example.com", skills: "React, Node.js", status: "Pending" },
];

const AdminApplicants = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSelectingApplicant, setIsSelectingApplicant] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [applicants, setApplicants] = useState(initialApplicants);
    const [currentPage, setCurrentPage] = useState(0);  // zero-based indexing
    const applicantsPerPage = 10;
    const totalPages = Math.ceil(applicants.length / applicantsPerPage);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const filteredApplicants = applicants.filter((applicant) => {
        return (
            applicant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            applicant.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Calculate the current applicants based on the page
    const indexOfLastApplicant = (currentPage + 1) * applicantsPerPage;
    const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
    const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant);
   
    // Change page to previous
    const handlePreviousPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    // Change page to next
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    // Handle page number input change
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

    const handleStatusChange = (id, newStatus) => {
        setApplicants((prevApplicants) =>
            prevApplicants.map((applicant) =>
                applicant.id === id ? { ...applicant, status: newStatus } : applicant
            )
        );
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
                                    <td>{applicant.firstName + " " + applicant.lastName}</td>
                                    <td>
                                        <select
                                            value={applicant.status}
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
                            value={currentPage + 1}  // Convert zero-based index to user-friendly 1-based number
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