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
,
{
    id: 'transpose-matrix',
    title: 'Transpose Matrix',
    description: 'Given a 2D array (matrix), return the transpose of the matrix.',
    difficulty: 'Easy',
    tags: ['Matrix'],
    examples: [
      { input: '[[1,2,3],[4,5,6]]', output: '[[1,4],[2,5],[3,6]]' }
    ],
    testCases: [
      { input: [[[1,2,3],[4,5,6]]], expected: [[1,4],[2,5],[3,6]] },
      { input: [[[1]]], expected: [[1]] }
    ],
    solution: `
function transpose(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => Array(rows));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
`.trim()
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Implement binary search on a sorted array. Return the index of the target if found, else return -1.',
    difficulty: 'Medium',
    tags: ['Array', 'Searching'],
    examples: [
      { input: '[1, 3, 5, 7, 9], target = 5', output: '2' }
    ],
    testCases: [
      { input: [[1,3,5,7,9], 5], expected: 2 },
      { input: [[1,3,5,7,9], 4], expected: -1 }
    ],
    solution: `
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
`.trim()
  },
  {
    id: 'max-sum-subarray-size-k',
    title: 'Maximum Sum Subarray of Size K',
    description: 'Given an array of integers and a number k, find the maximum sum of a subarray of size k.',
    difficulty: 'Medium',
    tags: ['Array', 'Sliding Window'],
    examples: [
      { input: 'arr = [2, 1, 5, 1, 3, 2], k = 3', output: '9' }
    ],
    testCases: [
      { input: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
      { input: [[1, 9, 3, 1, 2], 2], expected: 10 }
    ],
    solution: `
function maxSumSubarrayK(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
`.trim()
  },
  {
    id: 'n-queens',
    title: 'N-Queens',
    description: 'The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. Return all distinct solutions.',
    difficulty: 'Hard',
    tags: ['Backtracking'],
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' }
    ],
    testCases: [
      { input: [4], expected: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] }
    ],
    solution: `
function solveNQueens(n) {
  const res = [];
  const board = Array(n).fill().map(() => '.'.repeat(n));
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();

  function backtrack(r, temp) {
    if (r === n) return res.push([...temp]);
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
      const row = '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1);
      cols.add(c); diag1.add(r - c); diag2.add(r + c);
      backtrack(r + 1, [...temp, row]);
      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);
    }
  }

  backtrack(0, []);
  return res;
}
`.trim()
  },
  {
    id: 'serialize-deserialize-binary-tree',
    title: 'Serialize and Deserialize Binary Tree',
    description: 'Design an algorithm to serialize and deserialize a binary tree. Encoding should be efficient and decoding should recreate the original structure.',
    difficulty: 'Hard',
    tags: ['Tree'],
    examples: [
      { input: 'root = [1,2,3,null,null,4,5]', output: 'Serialized + Deserialized tree matches' }
    ],
    testCases: [
      { input: [{ val: 1, left: { val: 2 }, right: { val: 3, left: { val: 4 }, right: { val: 5 } } }], expected: 'Matches after deserialization' }
    ],
    solution: `
function serialize(root) {
  const res = [];
  function dfs(node) {
    if (!node) {
      res.push('#');
      return;
    }
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return res.join(',');
}

function deserialize(data) {
  const vals = data.split(',');
  let i = 0;
  function build() {
    if (vals[i] === '#') {
      i++;
      return null;
    }
    const node = { val: parseInt(vals[i++]), left: null, right: null };
    node.left = build();
    node.right = build();
    return node;
  }
  return build();
}
`.trim()
  }
,
{
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    description: 'Given the head of a singly linked list, reverse the list and return the new head.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: '[1,2,3,4,5]', output: '[5,4,3,2,1]' }
    ],
    testCases: [
      { input: [{ val: 1, next: { val: 2, next: { val: 3 } } }], expected: { val: 3, next: { val: 2, next: { val: 1 } } } }
    ],
    solution: `
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
`.trim()
  },
  {
    id: 'evaluate-reverse-polish-notation',
    title: 'Evaluate Reverse Polish Notation',
    description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Supported operators: +, -, *, /',
    difficulty: 'Medium',
    tags: ['Stack'],
    examples: [
      { input: '["2","1","+","3","*"]', output: '9' }
    ],
    testCases: [
      { input: [["2","1","+","3","*"]], expected: 9 },
      { input: [["4","13","5","/","+"]], expected: 6 }
    ],
    solution: `
function evalRPN(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(Math.trunc(a / b)); break;
      }
    }
  }
  return stack.pop();
}
`.trim()
  },
  {
    id: 'jump-game',
    title: 'Jump Game',
    description: 'Given an array of non-negative integers, where each element represents your max jump length, determine if you can reach the last index.',
    difficulty: 'Medium',
    tags: ['Greedy'],
    examples: [
      { input: '[2,3,1,1,4]', output: 'true' },
      { input: '[3,2,1,0,4]', output: 'false' }
    ],
    testCases: [
      { input: [[2,3,1,1,4]], expected: true },
      { input: [[3,2,1,0,4]], expected: false }
    ],
    solution: `
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}
`.trim()
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
    difficulty: 'Hard',
    tags: ['Backtracking', 'Recursion'],
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' }
    ],
    testCases: [
      { input: [3], expected: ["((()))","(()())","(())()","()(())","()()()"] }
    ],
    solution: `
function generateParenthesis(n) {
  const res = [];
  function backtrack(curr, open, close) {
    if (curr.length === 2 * n) {
      res.push(curr);
      return;
    }
    if (open < n) backtrack(curr + '(', open + 1, close);
    if (close < open) backtrack(curr + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return res;
}
`.trim()
  },
  {
    id: 'course-schedule',
    title: 'Course Schedule (Topological Sort)',
    description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites. Determine if it is possible to finish all courses.',
    difficulty: 'Hard',
    tags: ['Graph', 'Topological Sort'],
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' }
    ],
    testCases: [
      { input: [2, [[1,0]]], expected: true },
      { input: [2, [[1,0],[0,1]]], expected: false }
    ],
    solution: `
function canFinish(numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    inDegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let taken = 0;
  while (queue.length) {
    const course = queue.shift();
    taken++;
    for (const next of graph[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return taken === numCourses;
}
`.trim()
  }
,
{
    id: 'sort-colors',
    title: 'Sort Colors (Dutch National Flag)',
    description: 'Given an array with n objects colored red, white, or blue (represented as 0, 1, or 2), sort them in-place so that objects of the same color are adjacent.',
    difficulty: 'Easy',
    tags: ['Sorting'],
    examples: [
      { input: '[2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' }
    ],
    testCases: [
      { input: [[2,0,2,1,1,0]], expected: [0,0,1,1,2,2] }
    ],
    solution: `
function sortColors(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    else if (nums[mid] === 1) mid++;
    else [nums[mid], nums[high--]] = [nums[high], nums[mid]];
  }
  return nums;
}
`.trim()
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Given an array of strings, group the anagrams together.',
    difficulty: 'Medium',
    tags: ['Hashing', 'Sorting'],
    examples: [
      { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }
    ],
    testCases: [
      { input: [["eat","tea","tan","ate","nat","bat"]], expected: [["eat","tea","ate"],["tan","nat"],["bat"]] }
    ],
    solution: `
function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}
`.trim()
  },
  {
    id: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    tags: ['Sliding Window'],
    examples: [
      { input: '"abcabcbb"', output: '3' }
    ],
    testCases: [
      { input: ["abcabcbb"], expected: 3 },
      { input: ["bbbbb"], expected: 1 },
      { input: ["pwwkew"], expected: 3 }
    ],
    solution: `
function lengthOfLongestSubstring(s) {
  let set = new Set(), left = 0, max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
`.trim()
  },
  {
    id: 'word-ladder',
    title: 'Word Ladder',
    description: 'Given two words (beginWord and endWord), and a dictionary, find the length of shortest transformation sequence where only one letter can be changed at a time and each transformed word must exist in the dictionary.',
    difficulty: 'Hard',
    tags: ['Graph', 'BFS'],
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '5' }
    ],
    testCases: [
      { input: ["hit", "cog", ["hot","dot","dog","lot","log","cog"]], expected: 5 }
    ],
    solution: `
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  let queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();
    if (word === endWord) return steps;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(next)) {
          queue.push([next, steps + 1]);
          wordSet.delete(next);
        }
      }
    }
  }
  return 0;
}
`.trim()
  },
  {
    id: 'merge-k-sorted-lists',
    title: 'Merge K Sorted Lists',
    description: 'You are given an array of k linked-lists, each linked-list is sorted. Merge all the linked-lists into one sorted list and return it.',
    difficulty: 'Hard',
    tags: ['Heap', 'Linked List', 'Sorting'],
    examples: [
      { input: '[[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' }
    ],
    testCases: [
      { input: [[[1,4,5],[1,3,4],[2,6]]], expected: [1,1,2,3,4,4,5,6] }
    ],
    solution: `
function mergeKLists(lists) {
  const nodes = [];
  for (const list of lists) {
    let curr = list;
    while (curr) {
      nodes.push(curr.val);
      curr = curr.next;
    }
  }
  nodes.sort((a, b) => a - b);
  const dummy = { val: -1, next: null };
  let curr = dummy;
  for (let val of nodes) {
    curr.next = { val, next: null };
    curr = curr.next;
  }
  return dummy.next;
}
`.trim()
  }
];