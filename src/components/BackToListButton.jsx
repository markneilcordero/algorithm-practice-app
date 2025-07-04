// src/components/BackToListButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToListButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-3">
      <button
        className="btn btn-outline-secondary"
        onClick={() => navigate('/practice')}
      >
        ← Back to Problem List
      </button>
    </div>
  );
};

export default BackToListButton;
