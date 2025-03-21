import React, { use, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import MemberForm from "../components/MemberDetails";
import DashboardComponent from "../components/DashboardComponent";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState("all");
    const membersPerPage = 10;
    
    const generateMembers = () => {
        const membersArray = [];
        for (let i = 0; i < 100; i++) {
            membersArray.push({
                firstName: `FirstName ${i + 1}`,
                lastName: `LastName ${i + 1}`,
                fullName: `FirstName ${i + 1} LastName ${i + 1}`,
                memberId: (10000 + i).toString(),
                role: i % 2 === 0 ? "Member" : "Admin",
                memberType: i % 2 === 0 ? "Fellow Member" : "Regular Member",
            });
        }
        return membersArray;
    };

    const adminRole = "Admin";
    
    const [members, setMembers] = useState(generateMembers());

    const handleEditClick = (member) => {
        setEditingMember(member);
    };

    const handleSave = (updatedMember) => {
        updatedMember.fullName = `${updatedMember.fullName}`.trim();
        setMembers((prevMembers) =>
            prevMembers.map((m) =>
                m.memberId === updatedMember.memberId ? updatedMember : m
            )
        );
        setEditingMember(null);
    };

    const handleBack = () => {
        setEditingMember(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const handleFilterChange = (type) => {
        setFilter(type);
        setCurrentPage(0);
    };

    const filteredMembers = members.filter(member => {
        return (
            (filter === "all" || 
            (filter === "admins" && member.role === "Admin") || 
            (filter === "fellows" && member.memberType === "Fellow Member")) &&
            (member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.memberId.includes(searchTerm))
        );
    });

    const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
    const indexOfFirstMember = currentPage * membersPerPage;
    const indexOfLastMember = indexOfFirstMember + membersPerPage;
    const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (event) => {
        const pageNumber = Number(event.target.value) - 1;
        if (pageNumber >= 0 && pageNumber < totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <AdminSideBar />
            </div>
            <div className="dashboard-content">
                <div className="members-section">
                    {!editingMember && (
                        <DashboardComponent 
                            searchTerm={searchTerm} 
                            handleSearchChange={handleSearchChange} 
                            handleFilterChange={handleFilterChange} 
                        />
                    )}
                    {editingMember ? (
                        <MemberForm memberData={editingMember} onSave={handleSave} onBack={handleBack} currentUserRole={adminRole} />

                    ) : (
                        <>
                            <table className="members-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Member ID</th>
                                        <th>Role</th>
                                        <th>Member Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentMembers.map((member) => (
                                        <tr key={member.memberId}>
                                            <td>{member.firstName} {member.lastName}</td>
                                            <td>{member.memberId}</td>
                                            <td>{member.role}</td>
                                            <td>{member.memberType}</td>
                                            <td>
                                                <button onClick={() => handleEditClick(member)}>Edit</button>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;