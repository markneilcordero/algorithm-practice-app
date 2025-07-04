// src/components/SubmitButton.jsx
import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <div className="mt-4">
      <button
        className="btn btn-success btn-lg w-100"
        onClick={onClick}
      >
        🚀 Submit & Test
      </button>
    </div>
  );
};

export default SubmitButton;
