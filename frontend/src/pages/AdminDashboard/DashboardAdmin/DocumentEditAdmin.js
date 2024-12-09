import React, { useState } from 'react';
import './DocumentEditAdmin.css';

function DocumentEditAdmin() {
  const [documentContent, setDocumentContent] = useState('');

  const handleContentChange = (event) => {
    setDocumentContent(event.target.value);
  };

  const handleSave = () => {
    alert('Document saved!');
    
  };

  return (
    <div className="document-edit-admin">
      <h1>Edit Document</h1>
      <textarea
        value={documentContent}
        onChange={handleContentChange}
        rows="10"
        cols="50"
        placeholder="Edit the document content here..."
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default DocumentEditAdmin;
