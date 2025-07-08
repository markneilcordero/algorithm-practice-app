export function filterProblems(problems, difficulty) {
  const normalizedDifficulty = difficulty.trim().toLowerCase();

  // Step 1: Filter problems by difficulty
  const filtered = difficulty === 'All'
    ? problems
    : problems.filter(
        (problem) =>
          typeof problem.difficulty === 'string' &&
          problem.difficulty.trim().toLowerCase() === normalizedDifficulty
      );

  // Step 2: Remove duplicates by ID within this filtered result
  return deduplicateById(filtered);
}

function deduplicateById(problems) {
  const seen = new Set();
  return problems.filter((problem) => {
    if (seen.has(problem.id)) return false;
    seen.add(problem.id);
    return true;
  });
}
