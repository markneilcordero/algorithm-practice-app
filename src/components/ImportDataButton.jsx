// src/components/ImportDataButton.jsx
import React, { useRef } from 'react';
import { importLocalStorageData } from '../utils/fileUtils';

const ImportDataButton = () => {
  const fileInputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.endsWith('.json')) {
      alert('⚠️ Please select a valid .json file.');
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = () => {
        const json = JSON.parse(reader.result);
        importLocalStorageData(json);
        alert('✅ Data imported successfully!');
      };
      reader.readAsText(file);
    } catch (error) {
      alert('❌ Failed to import data. Please check the file format.');
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        className="d-none"
        onChange={handleFileChange}
      />
      <button
        className="btn btn-outline-primary"
        onClick={() => fileInputRef.current.click()}
      >
        📤 Import Progress (.json)
      </button>
    </>
  );
};

export default ImportDataButton;
