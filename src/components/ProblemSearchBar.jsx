// src/components/ProblemSearchBar.jsx
import React from 'react';

const ProblemSearchBar = ({ search, setSearch }) => {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by title or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProblemSearchBar;
