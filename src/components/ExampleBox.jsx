// src/components/ExampleBox.jsx
import React from 'react';

const ExampleBox = ({ input, output }) => {
  return (
    <div className="bg-light border rounded p-3 mb-3">
      <pre className="mb-2"><strong>Input:</strong> {input}</pre>
      <pre className="mb-0"><strong>Output:</strong> {output}</pre>
    </div>
  );
};

export default ExampleBox;
