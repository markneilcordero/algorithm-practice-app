// src/pages/ProblemListPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProblemCard from '../components/ProblemCard';
import ProblemFilterBar from '../components/ProblemFilterBar';
import ProblemSearchBar from '../components/ProblemSearchBar';
import NoResults from '../components/NoResults';

import { problems } from '../data/problems';
import { getProblemStatus } from '../utils/localStorage';
import { filterProblems } from '../utils/filterUtils';
import { searchProblems } from '../utils/searchUtils';

const ProblemListPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProblems, setFilteredProblems] = useState([]);

  useEffect(() => {
    let result = [...problems];

    // Filter by difficulty
    result = filterProblems(result, difficultyFilter);

    // Apply search
    result = searchProblems(result, searchTerm);

    setFilteredProblems(result);
  }, [difficultyFilter, searchTerm]);

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h2 className="text-center mb-4">🧩 Algorithm Practice Problems</h2>

        <ProblemFilterBar
          selected={difficultyFilter}
          onChange={(level) => setDifficultyFilter(level)}
        />

        <ProblemSearchBar
          search={searchTerm}
          setSearch={setSearchTerm}
        />

        <div className="row mt-4">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <div className="col-md-6 col-lg-4 mb-4" key={problem.id}>
                <ProblemCard
                  problem={problem}
                  status={getProblemStatus(problem.id)}
                />
              </div>
            ))
          ) : (
            <NoResults />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProblemListPage;
