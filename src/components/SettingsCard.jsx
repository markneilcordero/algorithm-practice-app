// src/components/SettingsCard.jsx
import React from 'react';

const SettingsCard = ({ title, description, children }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-text text-muted">{description}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SettingsCard;
