// src/utils/formatDate.js

/**
 * Format an ISO date string into a human-readable format.
 * Example output: "Jul 4, 2025, 9:15 AM"
 * @param {string} iso - The ISO 8601 date string
 * @returns {string} - Formatted date string or 'N/A'
 */
export function formatDate(iso) {
  if (!iso) return 'N/A';

  const date = new Date(iso);
  if (isNaN(date.getTime())) return 'Invalid date';

  return date.toLocaleString('en-US', {
    month: 'short',     // Jul
    day: 'numeric',     // 4
    year: 'numeric',    // 2025
    hour: 'numeric',    // 9
    minute: '2-digit',  // 15
    hour12: true,       // AM/PM
  });
}
