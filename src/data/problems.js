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
,
{
  id: 'next-greater-element',
  title: 'Next Greater Element',
  description: 'Find the next greater element for each element in the array.',
  difficulty: 'Easy',
  tags: ['Array', 'Stack'],
  examples: [
    { input: '[2, 1, 2, 4, 3]', output: '[4, 2, 4, -1, -1]' }
  ],
  testCases: [
    { input: [[2, 1, 2, 4, 3]], expected: [4, 2, 4, -1, -1] }
  ],
  solution: `
function nextGreaterElements(nums) {
  const res = Array(nums.length).fill(-1)
  const stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = nums[i]
    }
    stack.push(i)
  }
  return res
}
`.trim()
},
{
  id: 'detect-cycle',
  title: 'Detect Cycle in Linked List',
  description: 'Check if a linked list has a cycle.',
  difficulty: 'Medium',
  tags: ['Linked List', 'Recursion'],
  examples: [
    { input: 'head = [3,2,0,-4] with pos = 1', output: 'true' }
  ],
  testCases: [
    {
      input: [{
        val: 3,
        next: {
          val: 2,
          next: {
            val: 0,
            next: {
              val: -4,
              next: null // then manually cycle back to node with val: 2
            }
          }
        }
      }],
      expected: true
    }
  ],
  solution: `
function hasCycle(head) {
  let slow = head, fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
`.trim()
},
{
  id: 'word-search',
  title: 'Word Search in Grid',
  description: 'Given a grid of letters, determine if a word exists in the grid.',
  difficulty: 'Hard',
  tags: ['Graph', 'Backtracking'],
  examples: [
    { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }
  ],
  testCases: [
    {
      input: [[
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
      ], "ABCCED"],
      expected: true
    }
  ],
  solution: `
function exist(board, word) {
  const rows = board.length, cols = board[0].length
  const dfs = (r, c, i) => {
    if (i === word.length) return true
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false
    const temp = board[r][c]
    board[r][c] = '#'
    const found = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1)
    board[r][c] = temp
    return found
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true
    }
  }
  return false
}
`.trim()
}
,
{
  id: 'sum-of-array',
  title: 'Sum of Array using Recursion',
  description: 'Return the sum of all numbers in the array using recursion.',
  difficulty: 'Easy',
  tags: ['Array', 'Recursion'],
  examples: [
    { input: '[1, 2, 3, 4]', output: '10' }
  ],
  testCases: [
    { input: [[1, 2, 3, 4]], expected: 10 }
  ],
  solution: `
function sumArray(arr) {
  if (arr.length === 0) return 0
  return arr[0] + sumArray(arr.slice(1))
}
`.trim()
},
{
  id: 'remove-outer-parentheses',
  title: 'Remove Outer Parentheses',
  description: 'Remove the outermost parentheses from every primitive string.',
  difficulty: 'Easy',
  tags: ['Stack'],
  examples: [
    { input: '"(()())(())"', output: '"()()()"' }
  ],
  testCases: [
    { input: ['(()())(())'], expected: '()()()' }
  ],
  solution: `
function removeOuterParentheses(s) {
  let res = '', open = 0
  for (let c of s) {
    if (c === '(') {
      if (open > 0) res += c
      open++
    } else {
      open--
      if (open > 0) res += c
    }
  }
  return res
}
`.trim()
},
{
  id: 'sum-left-leaves',
  title: 'Sum of Left Leaves',
  description: 'Return the sum of all left leaf nodes in a binary tree.',
  difficulty: 'Medium',
  tags: ['Tree', 'Recursion'],
  examples: [
    { input: 'root = [3,9,20,null,null,15,7]', output: '24' }
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
      expected: 24
    }
  ],
  solution: `
function sumOfLeftLeaves(root) {
  if (!root) return 0
  let sum = 0
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val
  }
  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}
`.trim()
},
{
  id: 'shortest-path-binary-matrix',
  title: 'Shortest Path in Binary Matrix',
  description: 'Find the shortest path from top-left to bottom-right in a binary grid.',
  difficulty: 'Medium',
  tags: ['Queue', 'Graph'],
  examples: [
    { input: '[[0,1],[1,0]]', output: '2' }
  ],
  testCases: [
    { input: [[[0,1],[1,0]]], expected: 2 }
  ],
  solution: `
function shortestPathBinaryMatrix(grid) {
  const n = grid.length
  if (grid[0][0] || grid[n-1][n-1]) return -1
  const dirs = [[0,1],[1,0],[1,1],[-1,0],[0,-1],[-1,-1],[1,-1],[-1,1]]
  const queue = [[0,0,1]]
  grid[0][0] = 1
  while (queue.length) {
    const [x, y, d] = queue.shift()
    if (x === n - 1 && y === n - 1) return d
    for (let [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 0) {
        queue.push([nx, ny, d + 1])
        grid[nx][ny] = 1
      }
    }
  }
  return -1
}
`.trim()
},
{
  id: 'reconstruct-blockchain-order',
  title: 'Reconstruct Blockchain Order',
  description: 'Given unordered blocks, reconstruct the chain in order.',
  difficulty: 'Hard',
  tags: ['Blockchain', 'Hashing', 'Array'],
  examples: [
    {
      input: '[{hash: "b", prev: "a"}, {hash: "a", prev: "0"}, {hash: "c", prev: "b"}]',
      output: '[{hash: "a", prev: "0"}, {hash: "b", prev: "a"}, {hash: "c", prev: "b"}]'
    }
  ],
  testCases: [
    {
      input: [[
        { hash: "b", prev: "a" },
        { hash: "a", prev: "0" },
        { hash: "c", prev: "b" }
      ]],
      expected: [
        { hash: "a", prev: "0" },
        { hash: "b", prev: "a" },
        { hash: "c", prev: "b" }
      ]
    }
  ],
  solution: `
function reconstructChain(blocks) {
  const map = {}, result = []
  let start = null
  for (let b of blocks) {
    map[b.prev] = b
  }
  let curr = map["0"]
  while (curr) {
    result.push(curr)
    curr = map[curr.hash]
  }
  return result
}
`.trim()
},
{
  id: 'two-sum',
  title: 'Two Sum',
  description: 'Find two numbers that add up to the target.',
  difficulty: 'Easy',
  tags: ['Array', 'Hashing'],
  examples: [
    { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' }
  ],
  testCases: [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] }
  ],
  solution: `
function twoSum(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (diff in map) return [map[diff], i]
    map[nums[i]] = i
  }
}
`.trim()
},
{
  id: 'reverse-string-stack',
  title: 'Reverse String using Stack',
  description: 'Reverse a given string using a stack.',
  difficulty: 'Easy',
  tags: ['Stack'],
  examples: [
    { input: '"hello"', output: '"olleh"' }
  ],
  testCases: [
    { input: ["hello"], expected: "olleh" }
  ],
  solution: `
function reverseString(s) {
  const stack = s.split('')
  let res = ''
  while (stack.length) {
    res += stack.pop()
  }
  return res
}
`.trim()
},
{
  id: 'power-set',
  title: 'Power Set',
  description: 'Return all subsets of a given set.',
  difficulty: 'Medium',
  tags: ['Array', 'Recursion', 'Backtracking'],
  examples: [
    { input: '[1, 2, 3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' }
  ],
  testCases: [
    { input: [[1, 2, 3]], expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] }
  ],
  solution: `
function subsets(nums) {
  const res = []
  function backtrack(start, path) {
    res.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return res
}
`.trim()
},
{
  id: 'level-order-traversal',
  title: 'Binary Tree Level Order Traversal',
  description: 'Return the level order traversal of a binary tree.',
  difficulty: 'Medium',
  tags: ['Tree', 'Queue'],
  examples: [
    { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }
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
      expected: [[3],[9,20],[15,7]]
    }
  ],
  solution: `
function levelOrder(root) {
  const res = []
  if (!root) return res
  const queue = [root]
  while (queue.length) {
    const level = []
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(level)
  }
  return res
}
`.trim()
},
{
  id: 'jump-game-ii',
  title: 'Jump Game II',
  description: 'Return the minimum number of jumps to reach the end of the array.',
  difficulty: 'Hard',
  tags: ['Array', 'Greedy', 'Dynamic Programming'],
  examples: [
    { input: '[2,3,1,1,4]', output: '2' }
  ],
  testCases: [
    { input: [[2,3,1,1,4]], expected: 2 }
  ],
  solution: `
function jump(nums) {
  let jumps = 0, far = 0, end = 0
  for (let i = 0; i < nums.length - 1; i++) {
    far = Math.max(far, i + nums[i])
    if (i === end) {
      jumps++
      end = far
    }
  }
  return jumps
}
`.trim()
}
];