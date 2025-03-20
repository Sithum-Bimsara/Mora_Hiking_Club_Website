import React, { useState } from "react";
import KnowledgeFormEdit from "../components/EditKnowledge";
import KnowledgeFormAdd from "../components/AddKnowledge";
import AdminSideBar from "../components/AdminSideBar";

import "../styles/AdminKnowledge.css";

const AdminKnowledge = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isAddingKnowledge, setIsAddingKnowledge] = useState(false);
    const [isEditingKnowledge, setIsEditingKnowledge] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const knowledgePerPage = 10;

    const generateKnowledge = () => {
        const knowledgeArray = [];
        for (let i = 1; i <= 20; i++) {
            knowledgeArray.push({
                topic: `Knowledge Topic ${i}`,
                description: `This is a description of knowledge ${i}.`,
                id: (10000 + i).toString(),
            });
        }
        return knowledgeArray;
    };

    const [knowledgeData, setKnowledgeData] = useState(generateKnowledge());
    const [knowledgeDataToEdit, setKnowledgeDataToEdit] = useState({ topic: '', description: '', id: '' });

    const handleBackAdd = () => {
        setIsAddingKnowledge(false);
    };

    const handleSaveAdd = (newKnowledgeData) => {
        setKnowledgeData((prevData) => [...prevData, newKnowledgeData]);
        setIsAddingKnowledge(false);
    };

    const handleSaveKnowledge = (data) => {
        setKnowledgeData((prevData) =>
            prevData.map((knowledge) => (knowledge.id === data.id ? { ...knowledge, ...data } : knowledge))
        );
        setIsEditingKnowledge(false);
    };

    const handleDeleteKnowledge = () => {
        setKnowledgeData((prevData) => prevData.filter((knowledge) => knowledge.id !== knowledgeDataToEdit.id));
        setIsEditingKnowledge(false);
    };

    const handleEditClickKnowledge = (data) => {
        setIsEditingKnowledge(true);
        setKnowledgeDataToEdit(data);
    };

    const handleAddClickKnowledge = () => {
        setIsAddingKnowledge(true);
    };

    const handleBackKnowledge = () => {
        setIsEditingKnowledge(false);
    };

    const filteredKnowledge = knowledgeData.filter((knowledge) =>
        knowledge.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        knowledge.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredKnowledge.length / knowledgePerPage);
    const indexOfFirstKnowledge = currentPage * knowledgePerPage;
    const indexOfLastKnowledge = indexOfFirstKnowledge + knowledgePerPage;
    const currentKnowledge = filteredKnowledge.slice(indexOfFirstKnowledge, indexOfLastKnowledge);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (event) => {
        const pageNumber = Number(event.target.value) - 1;
        if (pageNumber >= 0 && pageNumber < totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="admin-knowledge">
            <div className="sidebar">
                <AdminSideBar />
            </div>

            <div className="knowledge-content">
                {isAddingKnowledge ? (
                    <KnowledgeFormAdd onSave={handleSaveAdd} onBack={handleBackAdd} />
                ) : isEditingKnowledge ? (
                    <KnowledgeFormEdit onSave={handleSaveKnowledge} onDelete={handleDeleteKnowledge} onBack={handleBackKnowledge} initialData={knowledgeDataToEdit} />
                ) : (
                    <div>
                        <h2>Knowledge Base</h2>
                        <div className="knowledge-header">
                            <button onClick={handleAddClickKnowledge}>Add New Knowledge</button>
                            <input type="text" placeholder="Search Knowledge" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <table className="knowledge-table">
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentKnowledge.map((knowledge) => (
                                    <tr key={knowledge.id}>
                                        <td>{knowledge.topic}</td>
                                        <td>{knowledge.description.slice(0, 50)} ...</td>
                                        <td><button onClick={() => handleEditClickKnowledge(knowledge)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button onClick={handlePreviousPage} disabled={currentPage === 0}>Back</button>
                            <span> Page </span>
                            <input type="number" value={currentPage + 1} onChange={handlePageChange} min="1" max={totalPages} />
                            <span> of {totalPages} </span>
                            <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminKnowledge;