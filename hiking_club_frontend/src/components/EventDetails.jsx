import React from "react";
import "../styles/EventDetails.css";

const EventDetails = ({ event, onBack }) => {
    return (
        <div className="event-details-container">
            <h2>Event Details</h2>
            <div className="event-info">
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Place:</strong> {event.place}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Partners:</strong> {event.partners}</p>
                <h2 className="participants-title">Participants</h2>
                <ul className="participant-list">
                    <h3 className="status accepted">Accepted Participants</h3>
                    {event.participants.filter(p => p.status === "accepted").map(p => (
                        <li key={p.id}>
                        {p.name} - <span>{p.id}</span>
                        </li>
                    ))}
                </ul>
                <ul className="participant-list">
                    <h3 className="status pending">Pending Participants</h3>
                    {event.participants.filter(p => p.status === "pending").map(p => (
                        <li key={p.id}>
                        {p.name} - <span>{p.id}</span>
                        </li>
                    ))}
                </ul>
                <ul className="participant-list">
                    <h3 className="status rejected">Rejected Participants</h3>
                    {event.participants.filter(p => p.status === "rejected").map(p => (
                        <li key={p.id}>
                        {p.name} - <span>{p.id}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="back-button" onClick={onBack}>Back</button>
        </div>
    );
};

export default EventDetails;
