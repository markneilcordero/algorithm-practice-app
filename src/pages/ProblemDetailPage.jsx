import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';
import TestCaseRunner from '../components/TestCaseRunner';
import SubmitButton from '../components/SubmitButton';
import BackToListButton from '../components/BackToListButton';
import DifficultyBadge from '../components/DifficultyBadge';
import StatusBadge from '../components/StatusBadge';
import ExampleBox from '../components/ExampleBox';

import { problems } from '../data/problems';
import {
  getProblemStatus,
  saveUserCode,
  getUserCode,
  markProblemSolved
} from '../utils/localStorage';
import { runTests } from '../utils/testRunner';

const ProblemDetailPage = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const found = problems.find(p => p.id === problemId);
    if (!found) return navigate('/practice');
    setProblem(found);

    const saved = getUserCode(problemId);
    if (saved) setCode(saved);
  }, [problemId, navigate]);

  const handleSubmit = async () => {
    if (!problem) return;

    const result = await runTests(code, problem.testCases, problem); // ✅ await for async tests
    setTestResults(result);

    if (result.every(r => r.pass)) {
      markProblemSolved(problemId, problem.difficulty, problem.tags || []);
    }

    saveUserCode(problemId, code);
  };

  if (!problem) return null;

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <BackToListButton />

        <h2 className="fw-bold mb-1">{problem.title}</h2>
        <div className="mb-3">
          <DifficultyBadge difficulty={problem.difficulty} />
          <StatusBadge status={getProblemStatus(problemId)} />
        </div>

        <p>{problem.description}</p>

        {problem.examples && problem.examples.length > 0 && (
          <>
            <h5>📘 Examples</h5>
            {problem.examples.map((ex, idx) => (
              <ExampleBox key={idx} input={ex.input} output={ex.output} />
            ))}
          </>
        )}

        {problem.pseudocode && (
          <div className="mt-4">
            <h5>🧠 Pseudocode</h5>
            <pre className="mt-2 p-3 rounded text-start overflow-auto" style={{
              backgroundColor: '#f4f4f4',
              color: '#34495e',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              border: '1px solid #ccc',
              borderRadius: '10px',
            }}>
              <code>{problem.pseudocode.trim()}</code>
            </pre>
          </div>
        )}

        {problem.solution && (
          <div className="mt-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && (
              <pre className="mt-3 p-3 rounded text-start overflow-auto" style={{
                backgroundColor: '#fff8dc',
                color: '#2c3e50',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                border: '2px dashed #ffb347',
                borderRadius: '12px',
              }}>
                <code>{problem.solution.trim()}</code>
              </pre>
            )}
          </div>
        )}

        <h5 className="mt-4">💻 Code Editor</h5>
        <CodeEditor code={code} setCode={setCode} />

        <SubmitButton onClick={handleSubmit} />

        {testResults && (
          <>
            <h5 className="mt-4">🧪 Test Results</h5>
            <TestCaseRunner results={testResults} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProblemDetailPage;