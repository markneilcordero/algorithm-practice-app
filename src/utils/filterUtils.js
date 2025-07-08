export function filterProblems(problems, difficulty) {
  if (difficulty === 'All') return deduplicateProblems(problems);

  const normalizedDifficulty = difficulty.trim().toLowerCase();

  return deduplicateProblems(problems).filter(
    (problem) =>
      typeof problem.difficulty === 'string' &&
      problem.difficulty.trim().toLowerCase() === normalizedDifficulty
  );
}

function deduplicateProblems(problems) {
  const seen = new Set();
  return problems.filter((problem) => {
    if (seen.has(problem.id)) return false;
    seen.add(problem.id);
    return true;
  });
}
