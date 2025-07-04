// src/components/ProblemCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DifficultyBadge from './DifficultyBadge';
import StatusBadge from './StatusBadge';

const ProblemCard = ({ problem, status }) => {
  const { id, title, tags, difficulty } = problem;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>

          <div className="mb-2">
            <DifficultyBadge difficulty={difficulty} />
            <StatusBadge status={status} />
          </div>

          <div className="mb-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="badge bg-secondary me-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link to={`/practice/${id}`} className="btn btn-sm btn-primary mt-3 w-100">
          📝 Solve Now
        </Link>
      </div>
    </div>
  );
};

export default ProblemCard;
