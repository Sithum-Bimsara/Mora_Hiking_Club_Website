
// AdminEvents.js
import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AddEvent from "../components/AddEvent";
import "../styles/AdminEvents.css";

const initialEvents = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    category: `Event ${i + 1}`,
    place: `Location ${i + 1}`,
    date: `2025-04-${String((i % 30) + 1).padStart(2, "0")}`,
    partners: `Partner ${i + 1}, Partner B${i + 1}`
}));

const AdminEvents = () => {
    const [events, setEvents] = useState(initialEvents);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [addEvent, setAddEvent] = useState(false);
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

    const handleBackToEvents = () => {
        setAddEvent(false);
    };

    const handleSaveEvent = (newEvent) => {
        if (selectedEvent) {
            setEvents(events.map(e => (e.id === selectedEvent.id ? { ...e, ...newEvent } : e)));
        } else {
            setEvents([...events, { ...newEvent, id: events.length + 1 }]);
        }
        setAddEvent(false);
    };

    const handleDeleteEvent = (eventToDelete) => {
        setEvents(events.filter(e => e.id !== eventToDelete.id));
        setAddEvent(false);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(0);
    };

    const handlePageChange = (e) => {
        let page = Number(e.target.value) - 1;
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
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
            {addEvent ? (
                <AddEvent event={selectedEvent} onBack={handleBackToEvents} onSave={handleSaveEvent} onDelete={handleDeleteEvent} />
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
                                    <td>{event.category}</td>
                                    <td>{event.place}</td>
                                    <td>{event.date}</td>
                                    <td>{event.partners}</td>
                                    <td>
                                        <button onClick={() => handleEditEvent(event)} className="editEvent">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))} disabled={currentPage === 0}>Back</button>
                        <span> Page </span>
                        <input type="number" value={currentPage + 1} onChange={handlePageChange} min="1" max={totalPages} />
                        <span> of {totalPages} </span>
                        <button onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages - 1))} disabled={currentPage >= totalPages - 1}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminEvents;
