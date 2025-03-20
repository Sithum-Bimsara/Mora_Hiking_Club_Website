import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import "../styles/AdminKnowledge.css";

const AdminKnowledge = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const knowledgeData = [
        {
          title: "Title 1",
          author: "Author 1",
          tags: "Tag1, Tag2",
          date: "2025-03-17"
        },
        {
          title: "Title 2",
          author: "Author 2",
          tags: "Tag3, Tag4",
          date: "2025-03-18"
        },
        {
          title: "Title 3",
          author: "Author 3",
          tags: "Tag5, Tag6",
          date: "2025-03-19"
        }
      ];

    
    return (
        <div className="admin-knowledge">
            <div className="sidebar">
                <AdminSideBar/>
            </div>
            <div className="knowledge-content">
                <h2>Knowledge</h2>
                <div className="knowledge-header">
                    <div className="knowledge-actions">
                        <button className="add-new-btn">Add New</button>
                        <div className="search-container">
                        <input type="text" placeholder="Search" value={searchTerm} className="search-input" />
                        </div>
                    </div>
                </div>
                <div className="knowledge-table-container">
                    <table className="knowledge-table">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Tags</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {knowledgeData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.tags}</td>
                            <td>{item.date}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};

export default AdminKnowledge;