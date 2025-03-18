import { useState } from "react";
import "../styles/MemberDetails.css";

const MemberForm = ({ memberData, onSave, onBack }) => {
  const [member, setMember] = useState({
    firstName: memberData?.firstName || "",
    lastName: memberData?.lastName || "",
    fullName: memberData?.fullName || "",
    memberId: memberData?.memberId || "",
    role: memberData?.role || "Member",
    memberType: memberData?.memberType || "Standard",
  });

  const roles = ["Member", "Admin", "Super Admin"];
  const memberTypes = ["Regular Member", "Fellow Member"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validation to ensure required fields are not empty
    if (
      !member.firstName ||
      !member.lastName ||
      !member.fullName ||
      !member.memberId
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (window.confirm("Are you sure you want to save these details?")) {
      onSave(member);
    }
  };

  return (
    <div className="member-form">
      <h2>Edit Member Details</h2>

      <div className="firstName">
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            value={member.firstName} 
            onChange={handleChange} 
          />
        </label>
      </div>

      <div className="lastName">
        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            value={member.lastName} 
            onChange={handleChange} 
          />
        </label>
      </div>

      <div className="fullName">
        <label>
          Full Name:
          <input 
            type="text" 
            name="fullName" 
            value={member.fullName} 
            onChange={handleChange} 
          />
        </label>
      </div>

      <div className="id">
        <label>
          Member ID:
          <input 
            type="number" 
            name="memberId" 
            value={member.memberId} 
            onChange={handleChange} 
          />
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
          Member Type:
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
