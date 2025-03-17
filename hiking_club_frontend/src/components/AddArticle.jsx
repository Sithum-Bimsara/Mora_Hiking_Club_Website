import React, { useState, useEffect } from 'react';
import "../styles/AddArticle.css";

const ArticleFormAdd = ({ onSave, onBack, initialData }) => {
  const [memberId, setMemberId] = useState(initialData?.memberId || '');
  const [images, setImages] = useState(initialData?.images || []);
  const [topic, setTopic] = useState(initialData?.topic || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImageUrls = Array.from(files).map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImageUrls]);
  };

  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [images]);

  const handleSave = () => {
    onSave({
      topic,
      description,
      memberId,
      images,
    });
  };

  return (
    <div className="article-form">
      <h2>Add an Article</h2>
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
      <div className="form-buttons">
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default ArticleFormAdd;
