// src/data/problems.js

export const problems = [
  {
    id: 'find-largest-number',
    title: 'Find the Largest Number',
    description: 'Given an array of numbers, return the largest one.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 5, 3, 9, 2]', output: '9' },
      { input: '[10, 10, 10]', output: '10' }
    ],
    testCases: [
      { input: [[1, 5, 3, 9, 2]], expected: 9 },
      { input: [[10, 10, 10]], expected: 10 }
    ],
    solution: `
function findLargestNumber(numbers) {
  let largest = numbers[0]
  for (let number of numbers) {
    if (number > largest) {
      largest = number
    }
  }
  return largest
}
`.trim()
  },

  // ✅ Easy - Stack
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Check if the input string has valid parentheses.',
    difficulty: 'Easy',
    tags: ['Stack'],
    examples: [
      { input: '"()[]{}"', output: 'true' },
      { input: '"(]"', output: 'false' }
    ],
    testCases: [
      { input: ['()[]{}'], expected: true },
      { input: ['(]'], expected: false }
    ],
    solution: `
function isValid(s) {
  const stack = []
  const map = { '(': ')', '{': '}', '[': ']' }
  for (let char of s) {
    if (map[char]) {
      stack.push(map[char])
    } else {
      if (char !== stack.pop()) return false
    }
  }
  return stack.length === 0
}
`.trim()
  },

  // ✅ Easy - Queue
  {
    id: 'first-unique-character',
    title: 'First Unique Character in a String',
    description: 'Find the index of the first non-repeating character in a string.',
    difficulty: 'Easy',
    tags: ['Queue', 'Hashing'],
    examples: [
      { input: '"leetcode"', output: '0' },
      { input: '"loveleetcode"', output: '2' }
    ],
    testCases: [
      { input: ['leetcode'], expected: 0 },
      { input: ['loveleetcode'], expected: 2 }
    ],
    solution: `
function firstUniqChar(s) {
  const count = {}
  for (let c of s) {
    count[c] = (count[c] || 0) + 1
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i
  }
  return -1
}
`.trim()
  },

  // ✅ Medium - Recursion
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Generate all combinations of well-formed parentheses for n pairs.',
    difficulty: 'Medium',
    tags: ['Recursion', 'Backtracking'],
    examples: [
      { input: '3', output: '["((()))","(()())","(())()","()(())","()()()"]' }
    ],
    testCases: [
      { input: [3], expected: ["((()))","(()())","(())()","()(())","()()()"] }
    ],
    solution: `
function generateParenthesis(n) {
  const res = []
  function backtrack(curr, open, close) {
    if (curr.length === n * 2) {
      res.push(curr)
      return
    }
    if (open < n) backtrack(curr + '(', open + 1, close)
    if (close < open) backtrack(curr + ')', open, close + 1)
  }
  backtrack('', 0, 0)
  return res
}
`.trim()
  },

  // ✅ Medium - Hashing
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Group the anagrams from the list of strings.',
    difficulty: 'Medium',
    tags: ['Hashing'],
    examples: [
      { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }
    ],
    testCases: [
      { input: [["eat","tea","tan","ate","nat","bat"]], expected: [["eat","tea","ate"],["tan","nat"],["bat"]] }
    ],
    solution: `
function groupAnagrams(strs) {
  const map = {}
  for (let str of strs) {
    const key = str.split('').sort().join('')
    if (!map[key]) map[key] = []
    map[key].push(str)
  }
  return Object.values(map)
}
`.trim()
  },

  // ✅ Hard - Dynamic Programming
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Find the length of the longest increasing subsequence in an array.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[10,9,2,5,3,7,101,18]', output: '4' }
    ],
    testCases: [
      { input: [[10,9,2,5,3,7,101,18]], expected: 4 }
    ],
    solution: `
function lengthOfLIS(nums) {
  const dp = Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}
`.trim()
  }
];