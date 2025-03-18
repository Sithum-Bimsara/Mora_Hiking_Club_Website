import React, { useState } from 'react';
import "../styles/EditArticles.css";

const ArticleFormEdit = ({ onSave, onDelete, onBack, initialData }) => {
  const [topic, setTopic] = useState(initialData?.topic || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [memberId, setMemberId] = useState(initialData?.memberId || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [images, setImages] = useState(initialData?.images || []);
  const [comments, setComments] = useState(initialData?.comments || []);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSave = () => {
    // Validate required fields before saving
    if (!topic.trim()) {
      alert("Topic cannot be empty!");
      return;
    }
    if (!description.trim()) {
      alert("Description cannot be empty!");
      return;
    }
    if (!memberId.trim()) {
      alert("Member ID cannot be empty!");
      return;
    }
    if (!author.trim()) {
      alert("Author cannot be empty!");
      return;
    }

    onSave({
      topic,
      description,
      memberId,
      author,
      images,
      comments,
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      onDelete();
    }
  };

  const handleBack = () => {
    onBack();
  };

  const handleRemoveComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="article-form">
      <h2>Edit Article</h2>
      <div className="form-group">
        <label htmlFor="topic">Topic:</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="memberId">Member ID:</label>
        <input
          type="text"
          id="memberId"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author Name:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="images">Images:</label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <div className="image-preview">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <div>
                <img src={image} alt={`preview-${index}`} width="100" />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="delete-image-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comments-section">
        <h3>Comments:</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.commenterName}</strong>: {comment.text}</p>
              <button type="button" onClick={() => handleRemoveComment(index)}>Remove Comment</button>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <div className="form-buttons">
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={handleBack}>Back</button>
        <button type="button" className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ArticleFormEdit;
