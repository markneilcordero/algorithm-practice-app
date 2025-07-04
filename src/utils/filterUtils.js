// src/utils/filterUtils.js

/**
 * Filters an array of problems by difficulty level.
 * @param {Array} problems - The full list of problems
 * @param {string} difficulty - "All", "Easy", "Medium", or "Hard"
 * @returns {Array} Filtered problems
 */
export function filterProblems(problems, difficulty) {
  if (difficulty === 'All') return problems;
  return problems.filter((problem) => problem.difficulty === difficulty);
}
