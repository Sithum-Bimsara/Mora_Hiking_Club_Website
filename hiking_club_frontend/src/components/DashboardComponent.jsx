import React, { useState } from "react";
import "../styles/DashboardComponent.css";

const DashboardComponent = ({ searchTerm, handleSearchChange, handleFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const handleFilterClick = (type) => {
        setSelectedFilter(type);
        handleFilterChange(type);
    };

    return (
        <div className="dashboard-header">
            <h2>Members</h2>
            <div className="members-header">
                <button 
                    className={selectedFilter === "all" ? "active" : ""} 
                    onClick={() => handleFilterClick("all")}
                >
                    All Members
                </button>
                <button 
                    className={selectedFilter === "admins" ? "active" : ""} 
                    onClick={() => handleFilterClick("admins")}
                >
                    Admins
                </button>
                <button 
                    className={selectedFilter === "fellows" ? "active" : ""} 
                    onClick={() => handleFilterClick("fellows")}
                >
                    Fellow Members
                </button>
                
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
    );
};

export default DashboardComponent;
