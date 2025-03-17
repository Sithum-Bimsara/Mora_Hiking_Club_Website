import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import MemberForm from "../components/MemberDetails";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);
    
    const [members, setMembers] = useState([
        { firstName: "John", lastName: "Doe", fullName: "John Doe", memberId: "12345", role: "Member", memberType: "Fellow Member" },
        { firstName: "Jane", lastName: "Smith", fullName: "Jane Smith", memberId: "67890", role: "Admin", memberType: "Regular Member" },
        { firstName: "Michael", lastName: "Johnson", fullName: "Michael Johnson", memberId: "11223", role: "Admin", memberType: "Fellow Member" }
    ]);

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
    };

    const filteredMembers = members.filter(member =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.memberId.includes(searchTerm)
    );

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <AdminSideBar />
            </div>
            <div className="dashboard-content">
                <div className="members-section">
                    {!editingMember && (
                        <div>
                            <h2>Dashboard</h2>
                            <div className="members-header">
                                <h3>Members</h3>
                                <div className="search-bar">
                                    <input
                                        type="text"
                                        placeholder="Search Members"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    )}
                    {editingMember ? (
                        <MemberForm memberData={editingMember} onSave={handleSave} onBack={handleBack} />
                    ) : (
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
                                {filteredMembers.map((member) => (
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
