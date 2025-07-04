// src/components/TestCaseRunner.jsx
import React from 'react';

const TestCaseRunner = ({ results }) => {
  return (
    <div className="mt-3">
      <ul className="list-group">
        {results.map((result, idx) => (
          <li
            key={idx}
            className={`list-group-item d-flex flex-column ${
              result.pass ? 'list-group-item-success' : 'list-group-item-danger'
            }`}
          >
            <div className="fw-bold">
              Test {idx + 1}: {result.pass ? '✅ Passed' : '❌ Failed'}
            </div>

            <div className="small mt-1">
              <div><strong>Input:</strong> {JSON.stringify(result.input)}</div>
              <div><strong>Expected:</strong> {JSON.stringify(result.expected)}</div>
              <div><strong>Output:</strong> {JSON.stringify(result.output)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestCaseRunner;
