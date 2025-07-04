// src/utils/localStorage.js

const STORAGE_KEY = 'algo-practice-app-v1';

/**
 * Initialize LocalStorage with default structure if not present.
 */
function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const defaultData = {
      totalSolved: 0,
      lastSolved: null,
      sessionCount: 0,
      submissions: [], // optional: for tracking individual submissions
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  }
}

/**
 * Get full data object from LocalStorage.
 */
export function getStorageData() {
  initStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

/**
 * Save updated data to LocalStorage.
 * @param {Object} data 
 */
export function setStorageData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Extract only the relevant user stats for display.
 * @returns {{ totalSolved: number, lastSolved: string|null, sessionCount: number }}
 */
export function getUserStats() {
  const data = getStorageData();
  return {
    totalSolved: data.totalSolved || 0,
    lastSolved: data.lastSolved || null,
    sessionCount: data.sessionCount || 0,
  };
}

/**
 * Add a new solved problem with metadata.
 * @param {string} problemId
 * @param {string} difficulty - 'Easy' | 'Medium' | 'Hard'
 * @param {string[]} tags - Array of strings like ['Array', 'Hashing']
 */
export function markProblemSolved(problemId, difficulty = '', tags = []) {
  const data = getStorageData();

  // Prevent double-counting
  const alreadySubmitted = data.submissions.some(
    (entry) => entry.id === problemId
  );
  if (!alreadySubmitted) {
    const newEntry = {
      id: problemId,
      solvedAt: new Date().toISOString(),
      difficulty,
      tags,
    };

    data.totalSolved += 1;
    data.sessionCount += 1;
    data.lastSolved = newEntry.solvedAt;
    data.submissions.push(newEntry);

    setStorageData(data);
  }
}


/**
 * Extract chart-friendly dashboard stats.
 * @returns {{ totalSolved: number, totalAttempted: number, totalUnsolved: number }}
 */
export function getDashboardStats() {
  const data = getStorageData();

  const totalSolved = data.totalSolved || 0;
  const totalAttempted = data.submissions.length || 0;
  const totalUnsolved = Math.max(totalAttempted - totalSolved, 0); // fallback-safe

  return {
    totalSolved,
    totalAttempted,
    totalUnsolved,
    submissions: data.submissions || [],
  };
}

/**
 * Save user's code per problem.
 * @param {string} problemId 
 * @param {string} code 
 */
export function saveUserCode(problemId, code) {
  const data = getStorageData();
  if (!data.userCode) data.userCode = {};
  data.userCode[problemId] = code;
  setStorageData(data);
}

/**
 * Get user's code for a problem.
 * @param {string} problemId 
 * @returns {string|null}
 */
export function getUserCode(problemId) {
  const data = getStorageData();
  return data.userCode?.[problemId] || '';
}

/**
 * Get the solved status of a problem.
 * @param {string} problemId 
 * @returns {'solved' | 'unsolved'}
 */
export function getProblemStatus(problemId) {
  const data = getStorageData();
  return data.submissions.some((entry) => entry.id === problemId)
    ? 'solved'
    : 'unsolved';
}

