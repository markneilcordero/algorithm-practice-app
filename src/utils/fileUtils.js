// src/utils/fileUtils.js

/**
 * Exports all app data from LocalStorage under the specified key
 * into a downloadable .json file with a timestamped filename.
 */
export function exportLocalStorageData() {
  const STORAGE_KEY = 'algo-practice-app-v1';
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    alert('⚠️ No data found to export.');
    return;
  }

  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `algo-progress-${timestamp}.json`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Imports a parsed JSON object into LocalStorage under the specified key.
 * Replaces existing progress data.
 * @param {Object} json - Parsed JSON data to be stored
 * @throws Error if structure is invalid
 */
export function importLocalStorageData(json) {
  const STORAGE_KEY = 'algo-practice-app-v1';

  if (!json || typeof json !== 'object') {
    throw new Error('Invalid data format: expected a JSON object.');
  }

  const requiredFields = ['totalSolved', 'sessionCount', 'submissions'];
  const isValid = requiredFields.every((key) => key in json);

  if (!isValid) {
    throw new Error('Invalid data: Missing one or more required fields.');
  }

  // Save to LocalStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
}
