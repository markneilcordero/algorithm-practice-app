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
,
  {
    id: 'first-unique-char',
    title: 'First Unique Character in String',
    description: 'Given a string, return the index of the first non-repeating character. If none exists, return -1.',
    difficulty: 'Easy',
    tags: ['Hashing'],
    examples: [
      { input: '"leetcode"', output: '0' },
      { input: '"aabb"', output: '-1' }
    ],
    testCases: [
      { input: ["leetcode"], expected: 0 },
      { input: ["loveleetcode"], expected: 2 },
      { input: ["aabb"], expected: -1 }
    ],
    solution: `
function firstUniqChar(s) {
  const count = {};
  for (let char of s) count[char] = (count[char] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}
`.trim()
  },
  {
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue using Stacks',
    description: 'Implement a queue using two stacks. Your queue should support enqueue and dequeue operations.',
    difficulty: 'Medium',
    tags: ['Stack', 'Queue'],
    examples: [
      { input: 'enqueue(1), enqueue(2), dequeue() → 1', output: '1' }
    ],
    testCases: [
      { input: [], expected: undefined } // This is a design problem, so it's more for interactive testing
    ],
    solution: `
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
`.trim()
  },
  {
    id: 'detect-cycle-in-linkedlist',
    title: 'Detect Cycle in Linked List',
    description: 'Given the head of a linked list, determine if the list has a cycle.',
    difficulty: 'Medium',
    tags: ['Linked List', 'Two Pointers'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true' }
    ],
    testCases: [
      { input: [], expected: false } // Can't simulate in pure data — needs linked list setup
    ],
    solution: `
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
`.trim()
  },
  {
    id: 'word-search',
    title: 'Word Search in Grid',
    description: 'Given a 2D board and a word, return true if the word exists in the grid. The word must be constructed from letters of sequentially adjacent cells (horizontal/vertical).',
    difficulty: 'Hard',
    tags: ['Backtracking'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }
    ],
    testCases: [
      { input: [[["A","B"],["C","D"]], "ABCD"], expected: false }
    ],
    solution: `
function exist(board, word) {
  const rows = board.length, cols = board[0].length;
  const dfs = (i, j, k) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) return false;
    if (k === word.length - 1) return true;
    const tmp = board[i][j];
    board[i][j] = '#';
    const found = dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);
    board[i][j] = tmp;
    return found;
  };
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
}
`.trim()
  },
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    description: 'Given a 2D grid of "1"s (land) and "0"s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
    difficulty: 'Hard',
    tags: ['Graph', 'DFS'],
    examples: [
      { input: '[["1","1","0","0"],["1","0","0","1"],["0","0","1","1"]]', output: '3' }
    ],
    testCases: [
      { input: [[["1","1","0"],["0","1","0"],["1","0","1"]]], expected: 3 }
    ],
    solution: `
function numIslands(grid) {
  let count = 0;
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') return;
    grid[i][j] = '0';
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
}
`.trim()
  }
,
{
    id: 'factorial-recursion',
    title: 'Factorial using Recursion',
    description: 'Write a function to compute the factorial of a non-negative integer using recursion.',
    difficulty: 'Easy',
    tags: ['Recursion'],
    examples: [
      { input: '5', output: '120' },
      { input: '0', output: '1' }
    ],
    testCases: [
      { input: [5], expected: 120 },
      { input: [0], expected: 1 }
    ],
    solution: `
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
`.trim()
  },
  {
    id: 'minimum-meeting-rooms',
    title: 'Minimum Meeting Rooms',
    description: 'Given an array of meeting time intervals consisting of start and end times, return the minimum number of conference rooms required.',
    difficulty: 'Medium',
    tags: ['Greedy', 'Sorting'],
    examples: [
      { input: '[[0,30],[5,10],[15,20]]', output: '2' }
    ],
    testCases: [
      { input: [[[0,30],[5,10],[15,20]]], expected: 2 },
      { input: [[[7,10],[2,4]]], expected: 1 }
    ],
    solution: `
function minMeetingRooms(intervals) {
  if (!intervals.length) return 0;
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
  let rooms = 0, end = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
}
`.trim()
  },
  {
    id: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    description: 'Write a function to find the longest common prefix string among an array of strings. If there is no common prefix, return an empty string.',
    difficulty: 'Medium',
    tags: ['String', 'Trie'],
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' }
    ],
    testCases: [
      { input: [["flower","flow","flight"]], expected: "fl" },
      { input: [["dog","racecar","car"]], expected: "" }
    ],
    solution: `
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}
`.trim()
  },
  {
    id: 'edit-distance',
    title: 'Edit Distance (Levenshtein)',
    description: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. Allowed operations: insert, delete, replace.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3' }
    ],
    testCases: [
      { input: ["horse", "ros"], expected: 3 },
      { input: ["intention", "execution"], expected: 5 }
    ],
    solution: `
function minDistance(word1, word2) {
  const m = word1.length, n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}
`.trim()
  },
  {
    id: 'burst-balloons',
    title: 'Burst Balloons',
    description: 'Given n balloons, each with a number on it, return the maximum coins you can collect by bursting them wisely. You burst balloon i to get coins equal to nums[i-1] * nums[i] * nums[i+1].',
    difficulty: 'Hard',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[3,1,5,8]', output: '167' }
    ],
    testCases: [
      { input: [[3,1,5,8]], expected: 167 }
    ],
    solution: `
function maxCoins(nums) {
  const n = nums.length;
  const newNums = [1, ...nums, 1];
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let left = 1; left <= n - len + 1; left++) {
      const right = left + len - 1;
      for (let k = left; k <= right; k++) {
        dp[left][right] = Math.max(dp[left][right],
          newNums[left - 1] * newNums[k] * newNums[right + 1] +
          dp[left][k - 1] + dp[k + 1][right]);
      }
    }
  }
  return dp[1][n];
}
`.trim()
  }
,
{
    id: 'count-set-bits',
    title: 'Count Set Bits',
    description: 'Given a non-negative integer, return the number of 1-bits it has (also known as the Hamming weight).',
    difficulty: 'Easy',
    tags: ['Bit Mask'],
    examples: [
      { input: '11', output: '3' }, // 1011
      { input: '128', output: '1' }
    ],
    testCases: [
      { input: [11], expected: 3 },
      { input: [128], expected: 1 }
    ],
    solution: `
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
}
`.trim()
  },
  {
    id: 'lowest-common-ancestor-bst',
    title: 'Lowest Common Ancestor in BST',
    description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes.',
    difficulty: 'Medium',
    tags: ['Tree'],
    examples: [
      { input: 'root = [6,2,8,0,4,7,9], p = 2, q = 8', output: '6' }
    ],
    testCases: [
      { input: [{ val: 6, left: { val: 2 }, right: { val: 8 } }, 2, 8], expected: 6 }
    ],
    solution: `
function lowestCommonAncestor(root, p, q) {
  if (p < root.val && q < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p > root.val && q > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root.val;
}
`.trim()
  },
  {
    id: 'friend-circles',
    title: 'Friend Circles (Disjoint Set)',
    description: 'There are N students in a class. Some of them are friends. If A is friends with B and B is friends with C, then A is also friends with C. Find the number of friend circles.',
    difficulty: 'Medium',
    tags: ['Graph', 'Disjoint Set'],
    examples: [
      { input: '[[1,1,0],[1,1,0],[0,0,1]]', output: '2' }
    ],
    testCases: [
      { input: [[[1,1,0],[1,1,0],[0,0,1]]], expected: 2 }
    ],
    solution: `
function findCircleNum(M) {
  const n = M.length;
  const parent = Array(n).fill(0).map((_, i) => i);
  function find(i) {
    if (parent[i] !== i) parent[i] = find(parent[i]);
    return parent[i];
  }
  function union(i, j) {
    parent[find(i)] = find(j);
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (M[i][j] === 1) union(i, j);
    }
  }
  const uniqueParents = new Set(parent.map(find));
  return uniqueParents.size;
}
`.trim()
  },
  {
    id: 'word-break',
    title: 'Word Break',
    description: 'Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Trie'],
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' }
    ],
    testCases: [
      { input: ["leetcode", ["leet","code"]], expected: true },
      { input: ["applepenapple", ["apple","pen"]], expected: true },
      { input: ["catsandog", ["cats","dog","sand","and","cat"]], expected: false }
    ],
    solution: `
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
`.trim()
  },
  {
    id: 'network-delay-time',
    title: 'Network Delay Time',
    description: 'You are given a network represented as a list of travel times as directed edges. Find the time it takes for all nodes to receive the signal from a source.',
    difficulty: 'Hard',
    tags: ['Graph', 'Dijkstra'],
    examples: [
      { input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2', output: '2' }
    ],
    testCases: [
      { input: [[[2,1,1],[2,3,1],[3,4,1]], 4, 2], expected: 2 }
    ],
    solution: `
function networkDelayTime(times, n, k) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    adj[u].push([v, w]);
  }
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const pq = [[0, k]];
  while (pq.length) {
    pq.sort((a, b) => b[0] - a[0]);
    const [time, node] = pq.pop();
    if (time > dist[node]) continue;
    for (const [nei, wt] of adj[node]) {
      if (dist[nei] > time + wt) {
        dist[nei] = time + wt;
        pq.push([dist[nei], nei]);
      }
    }
  }
  const max = Math.max(...dist.slice(1));
  return max === Infinity ? -1 : max;
}
`.trim()
  }
];