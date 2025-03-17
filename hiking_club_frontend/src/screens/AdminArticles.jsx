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

    const [articleData, setArticleData] = useState({
        topic: 'Article Topic',
        description: 'Article Description',
        memberId: '12345',
        images: [],
    });

    const initialData = {
        topic: 'Article Title',
        description: 'This is the description of the article.',
        memberId: '12345',
        images: [], // Array of image URLs
        comments: [
          { commenterName: 'John Doe', text: 'Great article!' },
          { commenterName: 'Jane Smith', text: 'Very informative.' },
        ],
      };
    
      const initialDataAdd = {
        memberId: '12345',
      };

    
    
      const handleBackAdd= () => {
        setisAddingArticle(false);
      };
    
      const handleSaveAdd = () => {
        setisAddingArticle(false);
      };
    

    const handleSaveArticle = (data) => {
        console.log('Saved Article:', data)
        setisEditingArticle(false);
      };
    
      const handleDeleteArticle = () => {
        console.log('Deleted Article')
        setisEditingArticle(false);
      };
    
     const handleEditClickArticle = () => {
        setisEditingArticle(true); 
      };
    
      const handleAddClickArticle = () => {
        setisAddingArticle(true);
        console.log("isAddingArticle changed:", isAddingArticle);
      }
    
    
      const handleBackArticle = () => {
        console.log('Back to previous page')
        setisEditingArticle(false);
      };


    return (
        
        <div className="admin-articles">
            <div className="sidebar">
                <AdminSideBar/>
            </div>
        

            <div className="articles-content">

                {isAddingArticle ? (
                    // Show Add Article Form
                    <ArticleFormAdd
                        onSave={handleSaveAdd}
                        onBack={handleBackAdd}
                        initialData={initialDataAdd}
                    />
                ) : isEditingArticle ? (
                    // Show Edit Form
                    <ArticleFormEdit
                        onSave={handleSaveArticle}
                        onDelete={handleDeleteArticle}
                        onBack={handleBackArticle}
                        initialData={initialData}
                    />
                ) : (
                    // Show Articles List
                    <div>
                        <h2>Articles</h2>
                        <div className="articles-header">
                            <div className="add-new-article">
                                <button onClick={() => handleAddClickArticle(initialData)}>Add an Article</button>
                            </div>
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search an Article"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button>Search</button>
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
                                <tr>
                                    <td>topic</td>
                                    <td>bla bla bla</td>
                                    <td>imansha</td>
                                    <td><button onClick={() => handleEditClickArticle(initialData)}>Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}     
            </div>
        </div>
    );
};

export default AdminArticles;