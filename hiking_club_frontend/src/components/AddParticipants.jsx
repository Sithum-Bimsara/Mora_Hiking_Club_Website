import React, { useState } from "react";
import "../styles/AddParticipants.css";

const AddParticipants = ({ event, onBack, onSave }) => {
    const [participants, setParticipants] = useState(event.participants || []);

    const handleAccept = (id) => {
        setParticipants(participants.map(p => p.id === id ? { ...p, status: "accepted" } : p));
    };

    const handleReject = (id) => {
        setParticipants(participants.map(p => p.id === id ? { ...p, status: "rejected" } : p));
    };

    const handleRevert = (id) => {
        setParticipants(participants.map(p => p.id === id ? { ...p, status: "pending" } : p));
    };

    const handleSave = () => {
        onSave({ ...event, participants });
    };

    return (
        <div className="add-participants-container">
            <h2 className="add-participants-title">Manage Participants for {event.category}</h2>
            
            <h3 className="pending-title">Pending Participants</h3>
            <div className="participants-list">
            {participants.filter(p => p.status === "pending").map(p => (
                <p className="participant-item" key={p.id}><div className="participant-name">{p.name}</div><button className="accept-button" onClick={() => handleAccept(p.id)}>Accept</button> <button  className="reject-button" onClick={() => handleReject(p.id)}>Reject</button></p>
            ))}
            </div>

            <h3 className="accepted-title">Accepted Participants</h3>
            <div className="participants-list">
            {participants.filter(p => p.status === "accepted").map(p => (
                <p className="participant-item" key={p.id}><div className="participant-name">{p.name} </div><button className="reject-button" onClick={() => handleReject(p.id)}>Reject</button></p>
            ))}
            </div>

            <h3 className="rejected-title">Rejected Participants</h3>
            <div className="participants-list">
            {participants.filter(p => p.status === "rejected").map(p => (
                <p className="participant-item" key={p.id}><div className="participant-name">{p.name}</div> <button className="revert-button" onClick={() => handleRevert(p.id)}>Revert</button></p>
            ))}
            </div>
            <div className="action-buttons">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="back-button" onClick={onBack}>Back</button>
            </div>
        </div>
    );
};

export default AddParticipants;
