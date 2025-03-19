import React, { useState } from "react";
import "../styles/AddEvent.css";

const AddEvent = ({ event = null, onBack, onSave, onDelete }) => {
    const [eventData, setEventData] = useState(
        event || { category: "", place: "", date: "", partners: "" }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!eventData.category || !eventData.place || !eventData.date || !eventData.partners) {
            alert("All fields must be filled out before saving.");
            return;
        }

        if (window.confirm("Are you sure you want to save this event?")) {
            onSave(eventData);
        }
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            onDelete(eventData);
        }
    };

    return (
        <div className="add-event">
            <h1>{event ? "Edit Event" : "Add Event"}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Category:
                    <input
                        type="text"
                        name="category"
                        value={eventData.category}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Place:
                    <input
                        type="text"
                        name="place"
                        value={eventData.place}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Event Partners (comma-separated):
                    <input
                        type="text"
                        name="partners"
                        value={eventData.partners}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="button-container">
                    <button type="save-button">Save Event</button>
                    <button type="back-button" onClick={onBack} className="backButton">Back</button>
                    {event && (
                        <button
                            type="delete-button"
                            onClick={handleDelete}
                            className="deleteButton"
                        >
                            Delete Event
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
