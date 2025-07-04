// src/components/ProblemFilterBar.jsx
import React from 'react';

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

const ProblemFilterBar = ({ selected, onChange }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="btn-group" role="group" aria-label="Difficulty Filter">
        {difficulties.map((level) => (
          <button
            key={level}
            type="button"
            className={`btn btn-outline-primary ${
              selected === level ? 'active' : ''
            }`}
            onClick={() => onChange(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProblemFilterBar;
