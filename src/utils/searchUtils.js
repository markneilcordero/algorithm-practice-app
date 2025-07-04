// src/utils/searchUtils.js

/**
 * Search problems by title or tags using a case-insensitive substring match.
 * @param {Array} problems - The full list of problems
 * @param {string} term - The search term input by the user
 * @returns {Array} Filtered list of problems
 */
export function searchProblems(problems, term) {
  if (!term || term.trim() === '') return problems;

  const lowerTerm = term.toLowerCase();

  return problems.filter((problem) => {
    const titleMatch = problem.title.toLowerCase().includes(lowerTerm);
    const tagMatch = problem.tags.some((tag) =>
      tag.toLowerCase().includes(lowerTerm)
    );
    return titleMatch || tagMatch;
  });
}
