// src/data/problems.js

export const problems = [
  {
    id: 'reverse-array',
    title: 'Reverse an Array',
    description: 'Given an array, return it reversed.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3]', output: '[3, 2, 1]' },
      { input: '[5, 0, -1]', output: '[-1, 0, 5]' }
    ],
    testCases: [
      { input: [[1, 2, 3]], expected: [3, 2, 1] },
      { input: [[4, 5, 6, 7]], expected: [7, 6, 5, 4] }
    ],
    solution: `
function reverseArray(arr) {
  return arr.reverse();
}
// or manually:
// function reverseArray(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }
    `
  }
];