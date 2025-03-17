import { useState } from "react";
import "../styles/MemberDetails.css";

const MemberForm = ({ memberData, onSave, onBack }) => {
  const [member, setMember] = useState(memberData || {
    firstName: "",
    lastName: "",
    fullName: "",
    memberId: "",
    role: "Member",
    memberType: "Standard"
  });

  const roles = ["Member", "Admin", "Moderator"];
  const memberTypes = ["Standard", "Premium", "VIP"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="member-form">
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
                Name:
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
            type="text" 
            name="memberId" 
            value={member.memberId} 
            onChange={handleChange} 
            />
        </label>
      </div>
      <div className="role">
        <label>
            Role:
            <select 
            name="role" 
            value={member.role} 
            onChange={handleChange}>
            {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
            ))}
            </select>
        </label>
      </div>
      
      <div className="type">
        <label>
            Member Type:
            <select 
            name="memberType" 
            value={member.memberType} 
            onChange={handleChange}>
            {memberTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
            ))}
            </select>
        </label>
      </div>
      
      <div className="buttons">
        <button onClick={() => onSave(member)}>Save</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default MemberForm;
