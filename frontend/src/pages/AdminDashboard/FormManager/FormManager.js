import React, { useState, useEffect } from 'react';
import './FormManager.css';

function FormManager() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const dummyForms = [
        { id: 1, name: 'Internship Application Form', createdDate: '2024-12-01' },
        { id: 2, name: 'Internship Evaluation Form', createdDate: '2024-12-02' },
      ];
      setForms(dummyForms);
    };
    fetchForms();
  }, []);

  const handleFormCreate = () => {
    console.log('Create new form');
  };

  const handleFormEdit = (formId) => {
    console.log(`Edit form with ID: ${formId}`);
  };

  const handleFormDelete = (formId) => {
    console.log(`Delete form with ID: ${formId}`);
  };

  return (
    <div className="form-manager-container">
      <h1>Form Manager</h1>

      <div className="form-settings">
        <div className="setting-item">
          <button onClick={handleFormCreate}>Create New Form</button>
          <div className="form-list">
            {forms.map((form) => (
              <div className="form-item" key={form.id}>
                <span className="form-name">{form.name}</span>
                <button onClick={() => handleFormEdit(form.id)}>Edit</button>
                <button className="delete" onClick={() => handleFormDelete(form.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormManager;
