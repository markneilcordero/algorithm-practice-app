// src/components/RecentActivityCard.jsx
import React from 'react';
import { formatDate } from '../utils/formatDate';

const RecentActivityCard = ({ stats }) => {
  const { totalSolved, lastSolved, sessionCount } = stats;

  return (
    <div className="card shadow-sm mx-auto mb-4" style={{ maxWidth: '500px' }}>
      <div className="card-body">
        <h5 className="card-title fw-bold">📊 Recent Activity</h5>
        <p className="card-text mb-2">
          ✅ <strong>{totalSolved}</strong> problems solved
        </p>
        <p className="card-text mb-2">
          🧠 <strong>{sessionCount}</strong> sessions completed
        </p>
        <p className="card-text text-muted">
          🕒 Last session: <strong>{lastSolved ? formatDate(lastSolved) : 'N/A'}</strong>
        </p>
      </div>
    </div>
  );
};

export default RecentActivityCard;
