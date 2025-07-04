// src/components/StartButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StartButton = () => {
  return (
    <div className="mt-4">
      <Link to="/practice" className="btn btn-primary btn-lg px-5 py-2 rounded-pill">
        🚀 Start Practicing
      </Link>
    </div>
  );
};

export default StartButton;
