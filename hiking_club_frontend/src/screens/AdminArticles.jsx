import React, { useState } from "react";
import ArticleFormEdit from "../components/EditArticles";
import ArticleFormAdd from "../components/AddArticle";
import AdminSideBar from "../components/AdminSideBar";

import "../styles/AdminArticles.css";

const AdminArticles = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);
    const [isAddingArticle, setisAddingArticle] = useState(false);
    const [isEditingArticle, setisEditingArticle] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 10;

    const generateArticles = () => {
        const articlesArray = [];
        for (let i = 1; i <= 20; i++) {
            articlesArray.push({
                topic: `Article Title ${i}`,
                description: `This is the description of the article ${i}.`,
                author: `Author ${i}`,
                memberId: (10000 + i).toString(),
                images: [],
                comments: [
                    { commenterName: `Commenter ${i}`, text: `Comment on article ${i}` },
                    { commenterName: `Commenter ${i + 1}`, text: `Another comment on article ${i}` },
                ],
            });
        }
        return articlesArray;
    };

    const [articleData, setArticleData] = useState(generateArticles());

    const [articleDataToEdit, setArticleDataToEdit] = useState({
        topic: '',
        description: '',
        memberId: '',
        images: [],
        comments: [],
    });

    const initialDataAdd = {
        memberId: '12345',
    };

    const handleBackAdd = () => {
        setisAddingArticle(false);
    };

    const handleSaveAdd = (newArticleData) => {
        setArticleData((prevData) => [...prevData, newArticleData]);
        setisAddingArticle(false);
    };

    const handleSaveArticle = (data) => {
        setArticleData((prevData) => 
            prevData.map((article) =>
                article.memberId === data.memberId ? { ...article, ...data } : article
            )
        );
        setisEditingArticle(false);
    };

    const handleDeleteArticle = () => {
        setArticleData((prevData) => 
            prevData.filter((article) => article.memberId !== articleDataToEdit.memberId)
        );
        setisEditingArticle(false);
    };

    const handleEditClickArticle = (data) => {
        setisEditingArticle(true); 
        setArticleDataToEdit(data);
    };

    const handleAddClickArticle = () => {
        setisAddingArticle(true);
    }

    const handleBackArticle = () => {
        setisEditingArticle(false);
    };

    // Filter articles based on search term
    const filteredArticles = articleData.filter((article) => {
        return (
            article.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const indexOfFirstArticle = currentPage * articlesPerPage;
    const indexOfLastArticle = indexOfFirstArticle + articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

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
        <div className="admin-articles">
            <div className="sidebar">
                <AdminSideBar />
            </div>

            <div className="articles-content">
                {isAddingArticle ? (
                    <ArticleFormAdd
                        onSave={handleSaveAdd}
                        onBack={handleBackAdd}
                        initialData={initialDataAdd}
                    />
                ) : isEditingArticle ? (
                    <ArticleFormEdit
                        onSave={handleSaveArticle}
                        onDelete={handleDeleteArticle}
                        onBack={handleBackArticle}
                        initialData={articleDataToEdit}
                    />
                ) : (
                    <div>
                        <h2>Articles</h2>
                        <div className="articles-header">
                            <div className="add-new-article">
                                <button onClick={handleAddClickArticle}>Add an Article</button>
                            </div>
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search an Article"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <table className="articles-table">
                            <thead>
                                <tr>
                                    <th>Article Topic</th>
                                    <th>Description</th>
                                    <th>Author Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentArticles.map((article) => (
                                    <tr key={article.memberId}>
                                        <td>{article.topic}</td>
                                        <td>{article.description}</td>
                                        <td>{article.author}</td>
                                        <td><button onClick={() => handleEditClickArticle(article)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button onClick={handlePreviousPage} disabled={currentPage === 0}>Back</button>
                            <span> Page </span>
                            <input
                                type="number"
                                value={currentPage + 1}
                                onChange={handlePageChange}
                                min="1"
                                max={totalPages}
                            />
                            <span> of {totalPages} </span>
                            <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminArticles;
