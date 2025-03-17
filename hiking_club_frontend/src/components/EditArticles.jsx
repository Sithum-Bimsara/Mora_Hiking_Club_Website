import React, { useState } from 'react';
import "../styles/EditArticles.css";

const ArticleFormEdit = ({ onSave, onDelete, onBack, initialData }) => {
  const [topic, setTopic] = useState(initialData?.topic || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [memberId, setMemberId] = useState(initialData?.memberId || '');
  const [images, setImages] = useState(initialData?.images || []);
  const [comments, setComments] = useState(initialData?.comments || []); // Array of comments passed as initialData

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSave = () => {
    onSave({
      topic,
      description,
      memberId,
      images,
      comments, // Save the comments as well
    });
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleBack = () => {
    onBack();
  };

  const handleRemoveComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="memberId">Member ID:</label>
        <input
          type="text"
          id="memberId"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
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
            <img key={index} src={image} alt={`preview-${index}`} width="100" />
          ))}
        </div>
      </div>

      {/* Display Comments */}
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
        <button type="button" className='delete' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ArticleFormEdit;
