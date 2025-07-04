// src/components/ExportDataButton.jsx
import React from 'react';
import { exportLocalStorageData } from '../utils/fileUtils';

const ExportDataButton = () => {
  return (
    <button
      className="btn btn-outline-success"
      onClick={exportLocalStorageData}
    >
      ⬇️ Export Progress (.json)
    </button>
  );
};

export default ExportDataButton;
