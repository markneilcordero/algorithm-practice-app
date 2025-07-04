// src/components/InfoHighlight.jsx
import React from 'react';

const InfoHighlight = ({ label, value }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center shadow-sm h-100">
        <div className="card-body">
          <h6 className="text-muted">{label}</h6>
          <h2 className="fw-bold">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoHighlight;
