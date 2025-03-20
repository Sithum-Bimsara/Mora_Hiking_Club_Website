import React, { useState, useEffect } from "react";
import AdminSideBar from "../components/AdminSideBar";
import MemberForm from "../components/MemberDetails";
import DashboardComponent from "../components/DashboardComponent";
import axios from "axios";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState("all");
    const [members, setMembers] = useState([]);
    const membersPerPage = 10;
    
    // Fetch members from the backend on component mount
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/api/members", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // Map the API data to our frontend format if needed
                const formattedMembers = response.data.map(member => ({
                    email: member.email,
                    fullName: member.full_name,
                    memberId: member.member_id,
                    role: member.role,
                    memberType: member.membership_type
                }));
                setMembers(formattedMembers);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        fetchMembers();
    }, []);

    const handleEditClick = (member) => {
        setEditingMember(member);
    };

    const handleSave = (updatedMember) => {
        // In a complete integration, you might send an update to the backend here.
        updatedMember.fullName = updatedMember.fullName.trim();
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
             (filter === "admins" && member.role === "admin") || 
             (filter === "fellows" && member.memberType === "fellow member")
            ) &&
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
                        <MemberForm memberData={editingMember} onSave={handleSave} onBack={handleBack} />
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
                                            <td>{member.fullName}</td>
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
