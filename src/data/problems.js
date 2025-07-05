// src/data/problems.js

export const problems = [
  {
    id: 'max-in-array',
    title: 'Find Maximum in Array',
    description: 'Given an array of integers, return the maximum number.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 5, 3, 9, 2]', output: '9' },
      { input: '[-1, -5, -3]', output: '-1' }
    ],
    testCases: [
      { input: [[1, 5, 3, 9, 2]], expected: 9 },
      { input: [[-1, -5, -3]], expected: -1 }
    ],
    solution: `
function maxInArray(arr) {
  return Math.max(...arr);
}
`.trim()
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\', and \']\', determine if the input string is valid. A string is valid if open brackets are closed by the same type in the correct order.',
    difficulty: 'Medium',
    tags: ['Stack'],
    examples: [
      { input: '"()[]{}"', output: 'true' },
      { input: '"(]"', output: 'false' }
    ],
    testCases: [
      { input: ["()[]{}"], expected: true },
      { input: ["(]"], expected: false },
      { input: ["({[]})"], expected: true },
      { input: ["({[})]"], expected: false }
    ],
    solution: `
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}
`.trim()
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers and a target sum, return the indices of the two numbers such that they add up to the target.',
    difficulty: 'Medium',
    tags: ['Array', 'Hashing'],
    examples: [
      { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' }
    ],
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ],
    solution: `
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}
`.trim()
  },
  {
    id: 'max-depth-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given the root of a binary tree, return its maximum depth. A binary tree’s depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    difficulty: 'Hard',
    tags: ['Tree', 'Recursion'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
    ],
    testCases: [
      { input: [{ val: 1, left: { val: 2, left: null, right: null }, right: null }], expected: 2 }
    ],
    solution: `
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
`.trim()
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'You are given coins of different denominations and a total amount of money. Return the fewest number of coins needed to make up that amount. If it is not possible, return -1.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Recursion'],
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3' }
    ],
    testCases: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[2], 3], expected: -1 }
    ],
    solution: `
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
`.trim()
  }
];