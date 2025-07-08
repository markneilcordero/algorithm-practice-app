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
,
// ✅ Easy - Array + Greedy
{
  id: 'maximum-consecutive-sum',
  title: 'Maximum Consecutive Sum',
  description: 'Find the maximum sum of any two consecutive numbers in an array.',
  difficulty: 'Easy',
  tags: ['Array', 'Greedy'],
  examples: [
    { input: '[1, 3, 5, 1, 9]', output: '10' },
    { input: '[4, 2, 1, 7]', output: '8' }
  ],
  testCases: [
    { input: [[1, 3, 5, 1, 9]], expected: 10 },
    { input: [[4, 2, 1, 7]], expected: 8 }
  ],
  solution: `
function maxConsecutiveSum(arr) {
  let max = arr[0] + arr[1]
  for (let i = 1; i < arr.length - 1; i++) {
    max = Math.max(max, arr[i] + arr[i + 1])
  }
  return max
}
`.trim()
},

// ✅ Easy - Searching
{
  id: 'linear-search',
  title: 'Linear Search',
  description: 'Return the index of the target in an array, or -1 if not found.',
  difficulty: 'Easy',
  tags: ['Array', 'Searching'],
  examples: [
    { input: '[3, 5, 2, 9], 5', output: '1' },
    { input: '[1, 2, 3], 4', output: '-1' }
  ],
  testCases: [
    { input: [[3, 5, 2, 9], 5], expected: 1 },
    { input: [[1, 2, 3], 4], expected: -1 }
  ],
  solution: `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}
`.trim()
},

// ✅ Medium - Linked List
{
  id: 'reverse-linked-list',
  title: 'Reverse Linked List',
  description: 'Reverse a singly linked list and return the new head.',
  difficulty: 'Medium',
  tags: ['Linked List'],
  examples: [
    { input: '1 -> 2 -> 3 -> null', output: '3 -> 2 -> 1 -> null' }
  ],
  testCases: [
    {
      input: [{
        val: 1, next: { val: 2, next: { val: 3, next: null } }
      }],
      expected: {
        val: 3, next: { val: 2, next: { val: 1, next: null } }
      }
    }
  ],
  solution: `
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
`.trim()
},

// ✅ Medium - Backtracking + Tree
{
  id: 'path-sum-tree',
  title: 'Path Sum',
  description: 'Return true if the tree has a root-to-leaf path summing to target.',
  difficulty: 'Medium',
  tags: ['Tree', 'Recursion', 'Backtracking'],
  examples: [
    { input: 'Tree = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', output: 'true' }
  ],
  testCases: [
    {
      input: [{
        val: 5,
        left: {
          val: 4,
          left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
          },
          right: null
        },
        right: {
          val: 8,
          left: { val: 13, left: null, right: null },
          right: {
            val: 4,
            left: null,
            right: { val: 1, left: null, right: null }
          }
        }
      }, 22],
      expected: true
    }
  ],
  solution: `
function hasPathSum(root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}
`.trim()
},

// ✅ Hard - Graph + Blockchain (chain validation)
{
  id: 'validate-blockchain',
  title: 'Validate Blockchain',
  description: 'Validate if a blockchain array is valid by checking hashes and previousHash links.',
  difficulty: 'Hard',
  tags: ['Graph', 'Blockchain', 'Hashing'],
  examples: [
    { input: '[{hash: "abc", previousHash: "0"}, {hash: "def", previousHash: "abc"}]', output: 'true' },
    { input: '[{hash: "abc", previousHash: "0"}, {hash: "xyz", previousHash: "def"}]', output: 'false' }
  ],
  testCases: [
    {
      input: [[
        { hash: 'abc', previousHash: '0' },
        { hash: 'def', previousHash: 'abc' }
      ]],
      expected: true
    },
    {
      input: [[
        { hash: 'abc', previousHash: '0' },
        { hash: 'xyz', previousHash: 'def' }
      ]],
      expected: false
    }
  ],
  solution: `
function validateBlockchain(chain) {
  for (let i = 1; i < chain.length; i++) {
    if (chain[i].previousHash !== chain[i - 1].hash) return false
  }
  return true
}
`.trim()
}
,
// ✅ Easy - Sorting
{
  id: 'sort-array-ascending',
  title: 'Sort Array in Ascending Order',
  description: 'Sort an array of integers in ascending order.',
  difficulty: 'Easy',
  tags: ['Array', 'Sorting'],
  examples: [
    { input: '[5, 2, 9, 1]', output: '[1, 2, 5, 9]' }
  ],
  testCases: [
    { input: [[5, 2, 9, 1]], expected: [1, 2, 5, 9] }
  ],
  solution: `
function sortArray(arr) {
  return arr.sort((a, b) => a - b)
}
`.trim()
},

// ✅ Easy - Hashing
{
  id: 'contains-duplicate',
  title: 'Contains Duplicate',
  description: 'Check if any number appears more than once in the array.',
  difficulty: 'Easy',
  tags: ['Array', 'Hashing'],
  examples: [
    { input: '[1,2,3,1]', output: 'true' },
    { input: '[1,2,3,4]', output: 'false' }
  ],
  testCases: [
    { input: [[1, 2, 3, 1]], expected: true },
    { input: [[1, 2, 3, 4]], expected: false }
  ],
  solution: `
function containsDuplicate(nums) {
  const set = new Set()
  for (let num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }
  return false
}
`.trim()
},

// ✅ Medium - Graph
{
  id: 'has-path-dfs',
  title: 'Graph Path Exists (DFS)',
  description: 'Given a graph and two nodes, determine if a path exists using DFS.',
  difficulty: 'Medium',
  tags: ['Graph'],
  examples: [
    { input: 'edges = [["a","b"],["b","c"],["c","d"]], start = "a", end = "d"', output: 'true' }
  ],
  testCases: [
    { input: [[["a","b"],["b","c"],["c","d"]], "a", "d"], expected: true },
    { input: [[["a","b"],["c","d"]], "a", "d"], expected: false }
  ],
  solution: `
function hasPath(edges, start, end) {
  const graph = {}
  for (let [a, b] of edges) {
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  const visited = new Set()
  function dfs(node) {
    if (node === end) return true
    if (visited.has(node)) return false
    visited.add(node)
    for (let neighbor of graph[node]) {
      if (dfs(neighbor)) return true
    }
    return false
  }
  return dfs(start)
}
`.trim()
},

// ✅ Medium - Tree
{
  id: 'max-depth-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  description: 'Return the maximum depth of a binary tree.',
  difficulty: 'Medium',
  tags: ['Tree', 'Recursion'],
  examples: [
    { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
  ],
  testCases: [
    {
      input: [{
        val: 3,
        left: { val: 9, left: null, right: null },
        right: {
          val: 20,
          left: { val: 15, left: null, right: null },
          right: { val: 7, left: null, right: null }
        }
      }],
      expected: 3
    }
  ],
  solution: `
function maxDepth(root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
`.trim()
},

// ✅ Hard - Dynamic Programming + Backtracking
{
  id: 'word-break',
  title: 'Word Break',
  description: 'Return true if the string can be segmented into space-separated words from the dictionary.',
  difficulty: 'Hard',
  tags: ['Dynamic Programming', 'Backtracking'],
  examples: [
    { input: 's = "leetcode", wordDict = ["leet", "code"]', output: 'true' }
  ],
  testCases: [
    { input: ["leetcode", ["leet", "code"]], expected: true },
    { input: ["applepenapple", ["apple", "pen"]], expected: true },
    { input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]], expected: false }
  ],
  solution: `
function wordBreak(s, wordDict) {
  const dp = Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i >= word.length && s.slice(i - word.length, i) === word) {
        if (dp[i - word.length]) {
          dp[i] = true
          break
        }
      }
    }
  }
  return dp[s.length]
}
`.trim()
}
];