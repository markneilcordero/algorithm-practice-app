export function filterProblems(problems, difficulty) {
  const normalizedDifficulty = difficulty.trim().toLowerCase();

  // ✅ Filter first based on difficulty
  let filtered = difficulty === 'All'
    ? problems
    : problems.filter(
        (problem) =>
          typeof problem.difficulty === 'string' &&
          problem.difficulty.trim().toLowerCase() === normalizedDifficulty
      );

  // ✅ (Optional) deduplicate AFTER filtering (if needed)
  return deduplicateProblems(filtered);
}

function deduplicateProblems(problems) {
  const seen = new Set();
  return problems.filter((problem) => {
    if (seen.has(problem.id)) return false;
    seen.add(problem.id);
    return true;
  });
}
