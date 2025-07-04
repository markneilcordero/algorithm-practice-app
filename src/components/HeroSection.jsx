// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to <span className="text-primary">AlgoPlay 🧠</span>
        </h1>
        <p className="lead text-muted mb-4">
          Practice Data Structures and Algorithms in a fun and interactive way.
        </p>
        <img
          src="/undraw_problem-solving.png"
          alt="Coding Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '300px' }}
        />
        <div>
          <Link to="/practice" className="btn btn-primary btn-lg">
            🚀 Start Practicing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
