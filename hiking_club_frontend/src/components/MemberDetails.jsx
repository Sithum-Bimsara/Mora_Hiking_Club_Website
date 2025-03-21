import { useState } from "react";
import "../styles/MemberDetails.css";
import axios from "axios";

const MemberForm = ({ memberData, onSave, onBack }) => {
  const [member, setMember] = useState({
    fullName: memberData?.fullName || "",
    memberId: memberData?.memberId || "",
    role: memberData?.role || "Member",
    memberType: memberData?.memberType || "regular member",
  });

  const roles = ["member", "admin", "super_admin"];
  const memberTypes = ["regular member", "fellow member"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!window.confirm("Are you sure you want to save these details?")) {
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Ensure JSON format
      };
      const promises = [];
  
      // Update role if changed
      if (member.role !== memberData.role) {
        promises.push(
          axios.put(
            `http://localhost:8080/api/members/${member.memberId}/role`,
            { newRole: member.role }, // Ensure correct key
            { headers }
          )
        );
      }
  
      // Update membership type if changed
      if (member.memberType !== memberData.memberType) {
        promises.push(
          axios.put(
            `http://localhost:8080/api/members/${member.memberId}/membership-type`,
            { newMembershipType: member.memberType }, // Ensure correct key
            { headers }
          )
        );
      }
      console.log(member);
      await Promise.all(promises);
      alert("Member details updated successfully!");
      onSave(member);
    } catch (error) {
      console.error("Error updating member details:", error.response?.data || error);
      alert(`Failed to update member details: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <div className="member-form">
      <h2>Edit Member Details</h2>

      <div className="fullName">
        <label>
          Full Name:
          <input type="text" name="fullName" value={member.fullName} readOnly />
        </label>
      </div>

      <div className="role">
        <label>
          Role:
          <select name="role" value={member.role} onChange={handleChange}>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="type">
        <label>
          Membership Type:
          <select name="memberType" value={member.memberType} onChange={handleChange}>
            {memberTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default MemberForm;
