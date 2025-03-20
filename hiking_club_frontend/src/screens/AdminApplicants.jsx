import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import ApplicantDetails from "../components/ApplicantDetails";
import "../styles/AdminApplicants.css";

// Updated initial applicants with 20 entries
const initialApplicants = [
    { id: 1, name: "John Doe", firstName: "John", lastName: "Doe", birthdate: "1990-01-01", phone: "123-456-7890", email: "johndoe@example.com", skills: "React, Node.js", status: "Pending" },
    { id: 2, name: "Jane Smith", firstName: "Jane", lastName: "Smith", birthdate: "1992-02-02", phone: "234-567-8901", email: "janesmith@example.com", skills: "Python, Django", status: "Approved" },
    { id: 3, name: "Michael Brown", firstName: "Michael", lastName: "Brown", birthdate: "1988-03-03", phone: "345-678-9012", email: "michaelbrown@example.com", skills: "Java, Spring", status: "Rejected" },
    { id: 4, name: "Emily Johnson", firstName: "Emily", lastName: "Johnson", birthdate: "1995-04-04", phone: "456-789-0123", email: "emilyjohnson@example.com", skills: "C++, Qt", status: "Pending" },
    { id: 5, name: "Jack White", firstName: "Jack", lastName: "White", birthdate: "1991-05-05", phone: "567-890-1234", email: "jackwhite@example.com", skills: "Ruby, Rails", status: "Pending" },
    { id: 6, name: "Sarah Green", firstName: "Sarah", lastName: "Green", birthdate: "1987-06-06", phone: "678-901-2345", email: "sarahgreen@example.com", skills: "HTML, CSS", status: "Approved" },
    { id: 7, name: "David Harris", firstName: "David", lastName: "Harris", birthdate: "1983-07-07", phone: "789-012-3456", email: "davidharris@example.com", skills: "JavaScript, Angular", status: "Rejected" },
    { id: 8, name: "Sophia Miller", firstName: "Sophia", lastName: "Miller", birthdate: "1994-08-08", phone: "890-123-4567", email: "sophiamiller@example.com", skills: "Swift, iOS", status: "Pending" },
    { id: 9, name: "Daniel Taylor", firstName: "Daniel", lastName: "Taylor", birthdate: "1992-09-09", phone: "901-234-5678", email: "danieltaylor@example.com", skills: "Go, Kubernetes", status: "Approved" },
    { id: 10, name: "Olivia Moore", firstName: "Olivia", lastName: "Moore", birthdate: "1986-10-10", phone: "012-345-6789", email: "oliviamoore@example.com", skills: "PHP, Laravel", status: "Rejected" },
    { id: 11, name: "Ethan Wilson", firstName: "Ethan", lastName: "Wilson", birthdate: "1990-11-11", phone: "123-456-7890", email: "ethanwilson@example.com", skills: "JavaScript, Node.js", status: "Pending" },
    { id: 12, name: "Amelia Lee", firstName: "Amelia", lastName: "Lee", birthdate: "1993-12-12", phone: "234-567-8901", email: "amelialee@example.com", skills: "Ruby, Sinatra", status: "Approved" },
    { id: 13, name: "Lucas King", firstName: "Lucas", lastName: "King", birthdate: "1987-01-01", phone: "345-678-9012", email: "lucasking@example.com", skills: "C#, .NET", status: "Rejected" },
    { id: 14, name: "Charlotte Scott", firstName: "Charlotte", lastName: "Scott", birthdate: "1994-02-02", phone: "456-789-0123", email: "charlottescott@example.com", skills: "Java, Hibernate", status: "Pending" },
    { id: 15, name: "Aiden Adams", firstName: "Aiden", lastName: "Adams", birthdate: "1995-03-03", phone: "567-890-1234", email: "aidenadams@example.com", skills: "Python, Flask", status: "Approved" },
    { id: 16, name: "Ella Carter", firstName: "Ella", lastName: "Carter", birthdate: "1989-04-04", phone: "678-901-2345", email: "ellacarter@example.com", skills: "C++, OpenGL", status: "Rejected" },
    { id: 17, name: "Mason Turner", firstName: "Mason", lastName: "Turner", birthdate: "1996-05-05", phone: "789-012-3456", email: "masonturner@example.com", skills: "Java, Android", status: "Pending" },
    { id: 18, name: "Harper Perez", firstName: "Harper", lastName: "Perez", birthdate: "1992-06-06", phone: "890-123-4567", email: "harperperez@example.com", skills: "TypeScript, React", status: "Approved" },
    { id: 19, name: "Benjamin Thomas", firstName: "Benjamin", lastName: "Thomas", birthdate: "1988-07-07", phone: "901-234-5678", email: "benjaminthomas@example.com", skills: "Go, Docker", status: "Rejected" },
    { id: 20, name: "Isabella Martinez", firstName: "Isabella", lastName: "Martinez", birthdate: "1991-08-08", phone: "012-345-6789", email: "isabellamartinez@example.com", skills: "Vue.js, Nuxt.js", status: "Pending" },
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