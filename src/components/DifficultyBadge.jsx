// src/components/DifficultyBadge.jsx
import React from 'react';

/**
 * Returns a Bootstrap badge color class based on difficulty level.
 * @param {string} difficulty - One of: Easy, Medium, Hard
 */
const getColorClass = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 'success';   // Green
    case 'Medium':
      return 'warning';   // Yellow
    case 'Hard':
      return 'danger';    // Red
    default:
      return 'secondary'; // Fallback
  }
};

const DifficultyBadge = ({ difficulty }) => {
  return (
    <span className={`badge bg-${getColorClass(difficulty)} me-2`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
