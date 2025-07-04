// src/components/ClearDataButton.jsx
import React from 'react';

const ClearDataButton = ({ onClick }) => {
  return (
    <button className="btn btn-outline-danger" onClick={onClick}>
      🧹 Reset All Progress
    </button>
  );
};

export default ClearDataButton;
