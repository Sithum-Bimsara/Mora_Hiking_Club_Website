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

    const [articleData, setArticleData] = useState([
        {
            topic: 'Article Title 1',
            description: 'This is the description of the article 1.',
            author: 'John Doe',
            memberId: '12345',
            images: [],
            comments: [
                { commenterName: 'John Doe', text: 'Great article!' },
                { commenterName: 'Jane Smith', text: 'Very informative.' },
            ],
        },
        {
            topic: 'Article Title 2',
            description: 'This is the description of the article 2.',
            author: 'Alice Green',
            memberId: '12346',
            images: [],
            comments: [
                { commenterName: 'Alice Green', text: 'Interesting read.' },
            ],
        },
        {
            topic: 'Article Title 3',
            description: 'This is the description of the article 3.',
            author: 'Bob White',
            memberId: '12347',
            images: [],
            comments: [
                { commenterName: 'Bob White', text: 'Great insights!' },
            ],
        },
    ]);

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
        setArticleDataToEdit(data); // set data to edit
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
            article.description.toLowerCase().includes(searchTerm.toLowerCase())||
            article.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

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
                                {filteredArticles.map((article) => (
                                    <tr key={article.memberId}>
                                        <td>{article.topic}</td>
                                        <td>{article.description}</td>
                                        <td>{article.author}</td>
                                        <td><button onClick={() => handleEditClickArticle(article)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminArticles;
