// src/components/StatusBadge.jsx
import React from 'react';

/**
 * Returns a Bootstrap badge color class based on problem status.
 * @param {string} status - "Completed", "In Progress", or "Not Started"
 */
const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'success';    // Green
    case 'In Progress':
      return 'info';       // Blue
    case 'Not Started':
      return 'secondary';  // Gray
    default:
      return 'dark';       // Fallback
  }
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`badge bg-${getStatusColor(status)} me-2`}>
      {status}
    </span>
  );
};

export default StatusBadge;
