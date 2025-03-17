import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import "../styles/AdminHikes.css";

const AdminHikes = () => {
    return (
        <div className="admin-hikes">
            <div className="sidebar">
                <AdminSideBar/>
            </div>
            <div className="hikes-content">
                <h2>Hikes</h2>
                <table className="hikes-table">
                <thead>
                    <tr>
                    <th>Hike</th>
                    <th>University ID</th>
                    <th>Tags</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Tags</td>
                    <td>Date</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminHikes;