// src/utils/chartUtils.js

/**
 * Format LocalStorage stats into Chart.js-compatible datasets.
 * @param {Object} stats - Object from getDashboardStats() utility.
 * @returns {Object} - { solvedOverTime, byDifficulty, byTags }
 */
export function formatChartData(stats) {
  const submissions = stats.submissions || [];

  // === Solved Over Time (Line Chart) ===
  const solvedPerDay = {};

  submissions.forEach(sub => {
    const dateObj = new Date(sub.solvedAt);
    const dateKey = dateObj.toISOString().split('T')[0];
    solvedPerDay[dateKey] = (solvedPerDay[dateKey] || 0) + 1;
  });

  const sortedDates = Object.keys(solvedPerDay).sort((a, b) =>
    new Date(a) - new Date(b)
  );

  const solvedOverTime = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Problems Solved',
        data: sortedDates.map(date => solvedPerDay[date]),
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // === By Difficulty (Doughnut Chart) ===
  const difficultyCount = { Easy: 0, Medium: 0, Hard: 0 };

  submissions.forEach(sub => {
    if (['Easy', 'Medium', 'Hard'].includes(sub.difficulty)) {
  difficultyCount[sub.difficulty]++;
}

  });

  const byDifficulty = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [difficultyCount.Easy, difficultyCount.Medium, difficultyCount.Hard],
        backgroundColor: ['#198754', '#ffc107', '#dc3545'],
      },
    ],
  };

  // === By Tags (Bar Chart) ===
  const tagCount = {};

  submissions.forEach(sub => {
    if (Array.isArray(sub.tags)) {
      sub.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    }
  });

  const tagLabels = Object.keys(tagCount);
  const tagValues = Object.values(tagCount);

  const byTags = {
    labels: tagLabels,
    datasets: [
      {
        label: 'Solved',
        data: tagValues,
        backgroundColor: '#6610f2',
      },
    ],
  };

  return { solvedOverTime, byDifficulty, byTags };
}
