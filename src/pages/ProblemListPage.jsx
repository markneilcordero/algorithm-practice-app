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

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ProblemListPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [shuffledProblems, setShuffledProblems] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState([]);

  // 🔀 Shuffle once on mount
  useEffect(() => {
    setShuffledProblems(shuffleArray(problems));
  }, []);

  // 🎯 Re-apply filter/search whenever filter/search term changes
  useEffect(() => {
    let result = [...shuffledProblems];
    result = filterProblems(result, difficultyFilter);
    result = searchProblems(result, searchTerm);
    setFilteredProblems(result);
  }, [difficultyFilter, searchTerm, shuffledProblems]);

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
