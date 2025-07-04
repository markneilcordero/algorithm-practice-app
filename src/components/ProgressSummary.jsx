// src/components/ProgressSummary.jsx
import React from 'react';

const ProgressSummary = ({ stats }) => {
  const { totalSolved = 0, sessionCount = 0, lastSolved = null } = stats;

  const formatDate = (iso) => {
    if (!iso) return 'N/A';
    const date = new Date(iso);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="row text-center mb-4">
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h6 className="text-muted">🧩 Problems Solved</h6>
            <h2 className="fw-bold">{totalSolved}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h6 className="text-muted">📆 Sessions Completed</h6>
            <h2 className="fw-bold">{sessionCount}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h6 className="text-muted">🕒 Last Solved</h6>
            <h2 className="fw-bold">{formatDate(lastSolved)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
