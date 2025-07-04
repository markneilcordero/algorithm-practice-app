// src/components/CodeEditor.jsx
import React from 'react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="mt-2">
      <textarea
        className="form-control font-monospace"
        rows={10}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`function solution(input) {\n  // your code here\n}`}
        spellCheck={false}
        style={{
          backgroundColor: '#f8f9fa',
          resize: 'vertical',
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
