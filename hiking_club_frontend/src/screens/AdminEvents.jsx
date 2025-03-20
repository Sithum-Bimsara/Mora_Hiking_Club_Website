import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AddEvent from "../components/AddEvent";
import AddParticipants from "../components/AddParticipants";
import EventDetails from "../components/EventDetails"; // Import EventDetails
import "../styles/AdminEvents.css";

const numberOfEvents = 20;

const initialEvents = Array.from({ length: numberOfEvents }, (_, i) => ({
    id: i + 1,
    category: `Event ${i + 1}`,
    place: `Location ${i + 1}`,
    date: `2025-04-${String((i % 30) + 1).padStart(2, "0")}`,
    partners: `Partner ${i + 1}, Partner B${i + 1}`,
    participants: [
        { id: 10001, name: "Participant 1", status: "accepted" },
        { id: 20005, name: "Participant 2", status: "pending" },
        { id: 35256, name: "Participant 3", status: "rejected" },
        { id: 4576, name: "Participant 4", status: "pending" },
        { id: 5567, name: "Participant 5", status: "accepted" },
    ],
}));

const AdminEvents = () => {
    const [events, setEvents] = useState(initialEvents);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [addEvent, setAddEvent] = useState(false);
    const [addParticipants, setAddParticipants] = useState(false);
    const [showDetails, setShowDetails] = useState(false); // Track event details visibility
    const [currentPage, setCurrentPage] = useState(0);
    const eventsPerPage = 10;

    const handleAddEvent = () => {
        setSelectedEvent(null);
        setAddEvent(true);
    };

    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setAddEvent(true);
    };

    const handleAddParticipants = (event) => {
        setSelectedEvent(event);
        setAddParticipants(true);
    };

    const handleViewDetails = (event) => {
        setSelectedEvent(event);
        setShowDetails(true);
    };

    const handleBackToEvents = () => {
        setAddEvent(false);
        setAddParticipants(false);
        setShowDetails(false);
    };

    const handleSaveEvent = (newEvent) => {
        setEvents(events.map(e => (e.id === newEvent.id ? newEvent : e)));
        setAddEvent(false);
    };

    const handleSaveParticipants = (updatedEvent) => {
        setEvents(events.map(e => (e.id === updatedEvent.id ? updatedEvent : e)));
        setAddParticipants(false);
    };

    const handleDeleteEvent = (eventToDelete) => {
        setEvents(events.filter(e => e.id !== eventToDelete.id));
        setAddEvent(false);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(0);
    };

    const filteredEvents = events.filter(event =>
        event.category.toLowerCase().includes(searchTerm) ||
        event.place.toLowerCase().includes(searchTerm) ||
        event.partners.toLowerCase().includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    const displayedEvents = filteredEvents.slice(
        currentPage * eventsPerPage,
        (currentPage + 1) * eventsPerPage
    );

    return (
        <div className="admin-events">
            <div className="sidebar">
                <AdminSideBar />
            </div>
            <div className="events-container">
                {addEvent ? (
                    <AddEvent 
                        event={selectedEvent} 
                        onBack={handleBackToEvents} 
                        onSave={handleSaveEvent} 
                        onDelete={handleDeleteEvent} 
                    />
                ) : addParticipants ? (
                    <AddParticipants 
                        event={selectedEvent} 
                        onBack={handleBackToEvents} 
                        onSave={handleSaveParticipants} 
                    />
                ) : showDetails ? ( // Show event details when selected
                    <EventDetails 
                        event={selectedEvent} 
                        onBack={handleBackToEvents} 
                    />
                ) : (
                    <div className="events-content">
                        <h2>Events</h2>
                        <div className="events-header">
                            <button className="addEvent" onClick={handleAddEvent}>Add Event</button>
                            <input type="text" placeholder="Search an Event" onChange={handleSearch} />
                        </div>
                        <table className="events-table">
                            <thead>
                                <tr>
                                    <th>Event Category</th>
                                    <th>Place</th>
                                    <th>Date</th>
                                    <th>Event Partners</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedEvents.map(event => (
                                    <tr key={event.id}>
                                        <td>
                                            <button className="event-name-button" onClick={() => handleViewDetails(event)}>
                                                {event.category}
                                            </button>
                                        </td>
                                        <td>{event.place}</td>
                                        <td>{event.date}</td>
                                        <td>{event.partners}</td>
                                        <td className="action-buttons">
                                            <button onClick={() => handleEditEvent(event)} className="editEvent act-btn">Edit</button>
                                            <button onClick={() => handleAddParticipants(event)} className="AddParticipants act-btn">Manage Participants</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))} disabled={currentPage === 0}>Back</button>
                            <span> Page {currentPage + 1} of {totalPages} </span>
                            <button onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages - 1))} disabled={currentPage >= totalPages - 1}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminEvents;
