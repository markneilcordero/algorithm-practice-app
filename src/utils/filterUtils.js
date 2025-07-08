export function filterProblems(problems, difficulty) {
  if (difficulty === 'All') return problems;

  const normalizedDifficulty = difficulty.trim().toLowerCase();

  return problems.filter(
    (problem) =>
      typeof problem.difficulty === 'string' &&
      problem.difficulty.trim().toLowerCase() === normalizedDifficulty
  );
}
