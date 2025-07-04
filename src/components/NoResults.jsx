// src/components/NoResults.jsx
import React from 'react';

const NoResults = () => {
  return (
    <div className="text-center mt-5">
      <h4 className="text-muted">😢 No matching problems found.</h4>
      <p className="text-muted">Try adjusting your filters or search terms.</p>
    </div>
  );
};

export default NoResults;
