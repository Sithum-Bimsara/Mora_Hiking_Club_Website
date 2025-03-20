import React, { useState } from 'react';
import "../styles/EditKnowledge.css";

const KnowledgeFormEdit = ({ onSave, onDelete, onBack, initialData }) => {
  const [topic, setTopic] = useState(initialData?.topic || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [images, setImages] = useState(initialData?.images || []);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSave = () => {
    if (!topic.trim()) {
      alert("Topic cannot be empty!");
      return;
    }
    if (!description.trim()) {
      alert("Description cannot be empty!");
      return;
    }

    onSave({
      topic,
      description,
      images,
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this knowledge entry?")) {
      onDelete();
    }
  };

  const handleBack = () => {
    onBack();
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="knowledge-form">
      <h2>Edit Knowledge</h2>
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

      <div className="form-buttons">
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={handleBack}>Back</button>
        <button type="button" className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default KnowledgeFormEdit;