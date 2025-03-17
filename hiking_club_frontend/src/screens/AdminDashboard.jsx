import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import MemberForm from "../components/MemberDetails";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);

    const [members, setMembers] = useState([
        { name: "John Doe", memberId: "12345" },
        { name: "Jane Smith", memberId: "67890" },
        { name: "Michael Johnson", memberId: "11223" }
      ]);
    
      const handleEditClick = (member) => {
        setEditingMember(member);
      };
    
      const handleSave = (updatedMember) => {
        // Implement save functionality
        console.log("Saved Member:", updatedMember);
        setEditingMember(null);
      };
    
    
      const handleBack = () => {
        setEditingMember(null);
      };
    
    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <AdminSideBar/>
            </div>
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                <div className="members-section">  
                    {!editingMember && (
                    <div className="members-header">
                    
                        <h3>Members</h3>
                        <div className="search-bar">
                            <div>
                                <input type="text" placeholder="Search Members" value={searchTerm} />
                            </div>
                            <div>
                                <button>Search</button>
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
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.memberId}</td>
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