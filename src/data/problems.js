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
  {
    id: 'count-vowels',
    title: 'Count Vowels in a String',
    description: 'Count how many vowels are in a given string.',
    difficulty: 'Easy',
    tags: ['String'],
    examples: [
      { input: '"hello"', output: '2' },
      { input: '"xyz"', output: '0' }
    ],
    testCases: [
      { input: ["hello"], expected: 2 },
      { input: ["xyz"], expected: 0 }
    ],
    solution: `
function countVowels(text) {
  let count = 0
  const vowels = 'aeiouAEIOU'
  for (let char of text) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}
`.trim()
  },
  {
    id: 'reverse-string',
    title: 'Reverse a String',
    description: 'Return the reversed version of the input string.',
    difficulty: 'Easy',
    tags: ['String'],
    examples: [
      { input: '"hello"', output: '"olleh"' }
    ],
    testCases: [
      { input: ["hello"], expected: "olleh" },
      { input: ["abc"], expected: "cba" }
    ],
    solution: `
function reverseString(text) {
  let reversed = ''
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i]
  }
  return reversed
}
`.trim()
  },
  {
    id: 'sum-of-numbers',
    title: 'Sum of Numbers in an Array',
    description: 'Return the sum of all numbers in the array.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3, 4]', output: '10' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: 10 },
      { input: [[5, 5, 5]], expected: 15 }
    ],
    solution: `
function sumOfNumbers(numbers) {
  let total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}
`.trim()
  },
  {
    id: 'is-even',
    title: 'Check if a Number is Even',
    description: 'Return true if the number is even, otherwise false.',
    difficulty: 'Easy',
    tags: ['Math'],
    examples: [
      { input: '4', output: 'true' },
      { input: '5', output: 'false' }
    ],
    testCases: [
      { input: [4], expected: true },
      { input: [5], expected: false }
    ],
    solution: `
function isEven(number) {
  return number % 2 === 0
}
`.trim()
  }
  ,
    {
    id: 'is-palindrome',
    title: 'Check Palindrome',
    description: 'Return true if the given string is a palindrome. A palindrome reads the same forward and backward.',
    difficulty: 'Easy',
    tags: ['String'],
    examples: [
      { input: '"racecar"', output: 'true' },
      { input: '"hello"', output: 'false' }
    ],
    testCases: [
      { input: ["racecar"], expected: true },
      { input: ["hello"], expected: false }
    ],
    solution: `
function isPalindrome(text) {
  const reversed = text.split('').reverse().join('')
  return text === reversed
}
`.trim()
  },
  {
    id: 'find-smallest-number',
    title: 'Find the Smallest Number',
    description: 'Return the smallest number from a given array.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[8, 3, 5, 1, 9]', output: '1' }
    ],
    testCases: [
      { input: [[8, 3, 5, 1, 9]], expected: 1 },
      { input: [[10, 10, 10]], expected: 10 }
    ],
    solution: `
function findSmallestNumber(numbers) {
  let smallest = numbers[0]
  for (let number of numbers) {
    if (number < smallest) {
      smallest = number
    }
  }
  return smallest
}
`.trim()
  },
  {
    id: 'count-occurrences',
    title: 'Count Occurrences of a Character',
    description: 'Count how many times a specific character appears in a string.',
    difficulty: 'Easy',
    tags: ['String'],
    examples: [
      { input: '"hello", "l"', output: '2' }
    ],
    testCases: [
      { input: ["hello", "l"], expected: 2 },
      { input: ["banana", "a"], expected: 3 }
    ],
    solution: `
function countOccurrences(text, char) {
  let count = 0
  for (let c of text) {
    if (c === char) {
      count++
    }
  }
  return count
}
`.trim()
  },
  {
    id: 'double-numbers',
    title: 'Double All Numbers in an Array',
    description: 'Return a new array with all numbers doubled.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3]', output: '[2, 4, 6]' }
    ],
    testCases: [
      { input: [[1, 2, 3]], expected: [2, 4, 6] },
      { input: [[5, 0, -2]], expected: [10, 0, -4] }
    ],
    solution: `
function doubleNumbers(numbers) {
  const result = []
  for (let number of numbers) {
    result.push(number * 2)
  }
  return result
}
`.trim()
  },
  {
    id: 'is-positive',
    title: 'Check if a Number is Positive',
    description: 'Return true if the number is greater than zero.',
    difficulty: 'Easy',
    tags: ['Math'],
    examples: [
      { input: '5', output: 'true' },
      { input: '0', output: 'false' },
      { input: '-3', output: 'false' }
    ],
    testCases: [
      { input: [5], expected: true },
      { input: [0], expected: false },
      { input: [-3], expected: false }
    ],
    solution: `
function isPositive(number) {
  return number > 0
}
`.trim()
  }
,
    {
    id: 'sum-array-elements',
    title: 'Sum of Array Elements',
    description: 'Given an array of numbers, return the sum of all elements.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3, 4, 5]', output: '15' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5]], expected: 15 },
      { input: [[0, 0, 0]], expected: 0 }
    ],
    solution: `
function sumArray(numbers) {
  let total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}
`.trim()
  },
  {
    id: 'stack-basic',
    title: 'Stack Push and Pop',
    description: 'Create a stack. Push elements 1, 2, 3 in order, then pop once. Return the final stack.',
    difficulty: 'Easy',
    tags: ['Stack'],
    examples: [
      { input: 'Push 1, 2, 3 then Pop', output: '[1, 2]' }
    ],
    testCases: [
      { input: [], expected: [1, 2] }
    ],
    solution: `
function useStack() {
  const stack = []
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.pop()
  return stack
}
`.trim()
  },
  {
    id: 'queue-basic',
    title: 'Queue Enqueue and Dequeue',
    description: 'Create a queue. Enqueue 10, 20, 30 in order, then dequeue once. Return the final queue.',
    difficulty: 'Easy',
    tags: ['Queue'],
    examples: [
      { input: 'Enqueue 10, 20, 30 then Dequeue', output: '[20, 30]' }
    ],
    testCases: [
      { input: [], expected: [20, 30] }
    ],
    solution: `
function useQueue() {
  const queue = []
  queue.push(10)
  queue.push(20)
  queue.push(30)
  queue.shift()
  return queue
}
`.trim()
  },
  {
    id: 'search-number',
    title: 'Linear Search in Array',
    description: 'Given an array and a target number, return the index of the target if found, otherwise -1.',
    difficulty: 'Easy',
    tags: ['Searching'],
    examples: [
      { input: '[4, 7, 1, 9], target = 1', output: '2' },
      { input: '[4, 7, 1, 9], target = 5', output: '-1' }
    ],
    testCases: [
      { input: [[4, 7, 1, 9], 1], expected: 2 },
      { input: [[4, 7, 1, 9], 5], expected: -1 }
    ],
    solution: `
function linearSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i
    }
  }
  return -1
}
`.trim()
  },
  {
    id: 'factorial-recursive',
    title: 'Factorial Using Recursion',
    description: 'Given a non-negative integer, return its factorial using recursion.',
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
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
`.trim()
  }
,
    {
    id: 'linked-list-traverse',
    title: 'Traverse a Linked List',
    description: 'Given the head of a linked list, return all values as an array.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: 'head = 1 -> 2 -> 3', output: '[1, 2, 3]' }
    ],
    testCases: [
      { input: [{ val: 1, next: { val: 2, next: { val: 3, next: null } } }], expected: [1, 2, 3] }
    ],
    solution: `
function traverseLinkedList(head) {
  const result = []
  let current = head
  while (current) {
    result.push(current.val)
    current = current.next
  }
  return result
}
`.trim()
  },
  {
    id: 'tree-inorder-traversal',
    title: 'Inorder Traversal of Binary Tree',
    description: 'Given the root of a binary tree, return the inorder traversal as an array.',
    difficulty: 'Easy',
    tags: ['Tree'],
    examples: [
      { input: 'root = [1,null,2,3]', output: '[1,3,2]' }
    ],
    testCases: [
      { input: [{ val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } }], expected: [1, 3, 2] }
    ],
    solution: `
function inorderTraversal(root) {
  const result = []
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }
  traverse(root)
  return result
}
`.trim()
  },
  {
    id: 'graph-adjacency-list',
    title: 'Graph: Build Adjacency List',
    description: 'Given a list of edges, build an adjacency list representation of a graph.',
    difficulty: 'Easy',
    tags: ['Graph'],
    examples: [
      { input: 'edges = [[0,1],[1,2]]', output: '{0:[1],1:[2],2:[]}' }
    ],
    testCases: [
      { input: [[[0, 1], [1, 2]]], expected: { 0: [1], 1: [2], 2: [] } }
    ],
    solution: `
function buildAdjacencyList(edges) {
  const graph = {}
  for (let [from, to] of edges) {
    if (!graph[from]) graph[from] = []
    if (!graph[to]) graph[to] = []
    graph[from].push(to)
  }
  return graph
}
`.trim()
  },
  {
    id: 'count-frequency',
    title: 'Count Frequency of Numbers',
    description: 'Given an array, return an object with the frequency of each number.',
    difficulty: 'Easy',
    tags: ['Hashing'],
    examples: [
      { input: '[1,2,2,3,3,3]', output: '{1:1,2:2,3:3}' }
    ],
    testCases: [
      { input: [[1,2,2,3,3,3]], expected: { 1: 1, 2: 2, 3: 3 } }
    ],
    solution: `
function countFrequency(numbers) {
  const count = {}
  for (let num of numbers) {
    if (!count[num]) {
      count[num] = 1
    } else {
      count[num]++
    }
  }
  return count
}
`.trim()
  },
  {
    id: 'sort-numbers',
    title: 'Sort Numbers in Ascending Order',
    description: 'Given an array of numbers, return the array sorted in ascending order.',
    difficulty: 'Easy',
    tags: ['Sorting'],
    examples: [
      { input: '[4, 2, 7, 1]', output: '[1, 2, 4, 7]' }
    ],
    testCases: [
      { input: [[4, 2, 7, 1]], expected: [1, 2, 4, 7] },
      { input: [[3, 3, 1]], expected: [1, 3, 3] }
    ],
    solution: `
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b)
}
`.trim()
  }
,
    {
    id: 'minimum-coins',
    title: 'Minimum Coins to Make Amount',
    description: 'Given an amount and coin denominations, return the minimum number of coins to make the amount. If it’s not possible, return -1.',
    difficulty: 'Medium',
    tags: ['Greedy'],
    examples: [
      { input: 'coins = [1, 2, 5], amount = 11', output: '3' }
    ],
    testCases: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[2], 3], expected: -1 }
    ],
    solution: `
function minCoins(coins, amount) {
  coins.sort((a, b) => b - a)
  let count = 0
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin
      count++
    }
  }
  return amount === 0 ? count : -1
}
`.trim()
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Valid Parentheses',
    description: 'Given n pairs of parentheses, return all valid combinations.',
    difficulty: 'Medium',
    tags: ['Backtracking'],
    examples: [
      { input: 'n = 2', output: '["(())", "()()"]' }
    ],
    testCases: [
      { input: [2], expected: ['(())', '()()'] }
    ],
    solution: `
function generateParentheses(n) {
  const result = []
  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current)
      return
    }
    if (open < n) backtrack(current + '(', open + 1, close)
    if (close < open) backtrack(current + ')', open, close + 1)
  }
  backtrack('', 0, 0)
  return result
}
`.trim()
  },
  {
    id: 'fibonacci-dp',
    title: 'Fibonacci Number (DP)',
    description: 'Return the nth Fibonacci number using dynamic programming.',
    difficulty: 'Easy',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'n = 5', output: '5' }
    ],
    testCases: [
      { input: [5], expected: 5 },
      { input: [10], expected: 55 }
    ],
    solution: `
function fibonacci(n) {
  if (n <= 1) return n
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
`.trim()
  },
  {
    id: 'unique-paths',
    title: 'Unique Paths in Grid',
    description: 'Given m x n grid, find the number of unique paths from top-left to bottom-right. Only right or down moves allowed.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'm = 3, n = 2', output: '3' }
    ],
    testCases: [
      { input: [3, 2], expected: 3 },
      { input: [7, 3], expected: 28 }
    ],
    solution: `
function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}
`.trim()
  },
  {
    id: 'is-subsequence',
    title: 'Is Subsequence',
    description: 'Check if one string is a subsequence of another.',
    difficulty: 'Easy',
    tags: ['Greedy'],
    examples: [
      { input: 's = "abc", t = "ahbgdc"', output: 'true' }
    ],
    testCases: [
      { input: ['abc', 'ahbgdc'], expected: true },
      { input: ['axc', 'ahbgdc'], expected: false }
    ],
    solution: `
function isSubsequence(s, t) {
  let i = 0, j = 0
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++
    j++
  }
  return i === s.length
}
`.trim()
  }
,
    {
    id: 'reverse-array-recursively',
    title: 'Reverse an Array Recursively',
    description: 'Given an array, return a new array with elements in reverse order using recursion.',
    difficulty: 'Easy',
    tags: ['Array', 'Recursion'],
    examples: [
      { input: '[1, 2, 3, 4]', output: '[4, 3, 2, 1]' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: [4, 3, 2, 1] },
      { input: [[10]], expected: [10] }
    ],
    solution: `
function reverseArray(arr) {
  if (arr.length === 0) return []
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)))
}
`.trim()
  }
,
    {
    id: 'first-non-repeating-character',
    title: 'First Non-Repeating Character',
    description: 'Given a string, return the first character that does not repeat. If all characters repeat, return null.',
    difficulty: 'Easy',
    tags: ['Hashing'],
    examples: [
      { input: '"aabbcddce"', output: '"e"' },
      { input: '"aabbcc"', output: 'null' }
    ],
    testCases: [
      { input: ['aabbcddce'], expected: 'e' },
      { input: ['aabbcc'], expected: null }
    ],
    solution: `
function firstNonRepeatingChar(str) {
  const count = {}

  for (let char of str) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char
    }
  }

  return null
}
`.trim()
  }
,
    {
    id: 'binary-search',
    title: 'Binary Search in Sorted Array',
    description: 'Given a sorted array and a target value, return the index of the target using binary search. If not found, return -1.',
    difficulty: 'Easy',
    tags: ['Searching'],
    examples: [
      { input: 'arr = [1, 3, 5, 7, 9], target = 5', output: '2' },
      { input: 'arr = [1, 3, 5, 7, 9], target = 6', output: '-1' }
    ],
    testCases: [
      { input: [[1, 3, 5, 7, 9], 5], expected: 2 },
      { input: [[1, 3, 5, 7, 9], 6], expected: -1 }
    ],
    solution: `
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
`.trim()
  }
,
    {
    id: 'remove-duplicates',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given a sorted array, remove the duplicates in-place and return the new length. The first part of the array should contain only unique elements.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 1, 2]', output: '2, [1, 2]' }
    ],
    testCases: [
      { input: [[1, 1, 2]], expected: 2 },
      { input: [[0,0,1,1,1,2,2,3,3,4]], expected: 5 }
    ],
    solution: `
function removeDuplicates(nums) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
`.trim()
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string of brackets, return true if it is valid. Open brackets must be closed in the correct order.',
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
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let char of s) {
    if (pairs[char]) {
      stack.push(char)
    } else {
      if (stack.length === 0) return false
      const last = stack.pop()
      if (pairs[last] !== char) return false
    }
  }

  return stack.length === 0
}
`.trim()
  },
  {
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue Using Stacks',
    description: 'Implement a queue using two stacks. Support enqueue, dequeue, peek, and empty operations.',
    difficulty: 'Medium',
    tags: ['Stack', 'Queue'],
    examples: [
      { input: 'enqueue(1), enqueue(2), dequeue()', output: '1' }
    ],
    testCases: [
      { input: [], expected: null } // Custom testing needed for class
    ],
    solution: `
class MyQueue {
  constructor() {
    this.inStack = []
    this.outStack = []
  }

  enqueue(x) {
    this.inStack.push(x)
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack.pop()
  }

  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack[this.outStack.length - 1]
  }

  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0
  }
}
`.trim()
  },
  {
    id: 'sorted-squares',
    title: 'Squares of a Sorted Array',
    description: 'Given a sorted array, return a new array with the squares of each number also sorted in non-decreasing order.',
    difficulty: 'Medium',
    tags: ['Array', 'Sorting'],
    examples: [
      { input: '[-4,-1,0,3,10]', output: '[0,1,9,16,100]' }
    ],
    testCases: [
      { input: [[-4,-1,0,3,10]], expected: [0,1,9,16,100] },
      { input: [[-7,-3,2,3,11]], expected: [4,9,9,49,121] }
    ],
    solution: `
function sortedSquares(nums) {
  const result = nums.map(n => n * n)
  return result.sort((a, b) => a - b)
}
`.trim()
  },
  {
    id: 'max-depth-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root to a leaf.',
    difficulty: 'Hard',
    tags: ['Tree', 'Recursion'],
    examples: [
      { input: '[3,9,20,null,null,15,7]', output: '3' }
    ],
    testCases: [
      { input: [{ val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } }], expected: 3 }
    ],
    solution: `
function maxDepth(root) {
  if (!root) return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return 1 + Math.max(left, right)
}
`.trim()
  }
,
    {
    id: 'missing-number',
    title: 'Find the Missing Number',
    description: 'Given an array containing n distinct numbers taken from 0 to n, find the one number that is missing.',
    difficulty: 'Easy',
    tags: ['Array', 'Hashing'],
    examples: [
      { input: '[3, 0, 1]', output: '2' }
    ],
    testCases: [
      { input: [[3, 0, 1]], expected: 2 },
      { input: [[9,6,4,2,3,5,7,0,1]], expected: 8 }
    ],
    solution: `
function missingNumber(nums) {
  const n = nums.length
  const total = (n * (n + 1)) / 2
  const sum = nums.reduce((acc, num) => acc + num, 0)
  return total - sum
}
`.trim()
  },
  {
    id: 'is-anagram',
    title: 'Valid Anagram',
    description: 'Given two strings, return true if one is an anagram of the other.',
    difficulty: 'Easy',
    tags: ['Hashing'],
    examples: [
      { input: '"listen", "silent"', output: 'true' },
      { input: '"hello", "world"', output: 'false' }
    ],
    testCases: [
      { input: ['listen', 'silent'], expected: true },
      { input: ['hello', 'world'], expected: false }
    ],
    solution: `
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (let char of s) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of t) {
    if (!count[char]) return false
    count[char]--
  }

  return true
}
`.trim()
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'Given coins of different denominations and a total amount, return the fewest number of coins to make up that amount. If not possible, return -1.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'coins = [1, 2, 5], amount = 11', output: '3' }
    ],
    testCases: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[2], 3], expected: -1 }
    ],
    solution: `
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
`.trim()
  },
  {
    id: 'partition-equal-subset-sum',
    title: 'Partition Equal Subset Sum',
    description: 'Given an array, determine if it can be partitioned into two subsets with equal sum.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[1,5,11,5]', output: 'true' }
    ],
    testCases: [
      { input: [[1,5,11,5]], expected: true },
      { input: [[1,2,3,5]], expected: false }
    ],
    solution: `
function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0)
  if (total % 2 !== 0) return false
  const target = total / 2
  const dp = new Set([0])

  for (let num of nums) {
    const next = new Set(dp)
    for (let sum of dp) {
      next.add(sum + num)
    }
    dp.clear()
    for (let sum of next) {
      dp.add(sum)
    }
  }

  return dp.has(target)
}
`.trim()
  },
  {
    id: 'word-search',
    title: 'Word Search in Grid',
    description: 'Given a 2D board and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.',
    difficulty: 'Hard',
    tags: ['Backtracking'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }
    ],
    testCases: [
      {
        input: [
          [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
          "ABCCED"
        ],
        expected: true
      },
      {
        input: [
          [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
          "SEE"
        ],
        expected: true
      },
      {
        input: [
          [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
          "ABCB"
        ],
        expected: false
      }
    ],
    solution: `
function exist(board, word) {
  const rows = board.length
  const cols = board[0].length

  function dfs(r, c, i) {
    if (i === word.length) return true
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false

    const temp = board[r][c]
    board[r][c] = '#'

    const found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1)

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
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing only parentheses, determine if the input string is valid. A string is valid if open brackets are closed by the same type and in the correct order.',
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
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char])
    } else {
      if (stack.pop() !== char) return false
    }
  }

  return stack.length === 0
}
`.trim()
  },
  {
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue using Stacks',
    description: 'Design a queue using two stacks.',
    difficulty: 'Easy',
    tags: ['Stack', 'Queue'],
    examples: [
      { input: 'push(1), push(2), pop()', output: '1' }
    ],
    testCases: [
  { input: [], expected: null } // Use a placeholder
],
    solution: `
class MyQueue {
  constructor() {
    this.input = []
    this.output = []
  }

  push(x) {
    this.input.push(x)
  }

  pop() {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop())
      }
    }
    return this.output.pop()
  }

  peek() {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop())
      }
    }
    return this.output[this.output.length - 1]
  }

  empty() {
    return this.input.length === 0 && this.output.length === 0
  }
}
`.trim()
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Given n pairs of parentheses, generate all combinations of well-formed parentheses.',
    difficulty: 'Medium',
    tags: ['Backtracking', 'Recursion'],
    examples: [
      { input: '3', output: '["((()))","(()())","(())()","()(())","()()()"]' }
    ],
    testCases: [
      { input: [3], expected: ["((()))","(()())","(())()","()(())","()()()"] }
    ],
    solution: `
function generateParenthesis(n) {
  const result = []

  function backtrack(str, open, close) {
    if (str.length === 2 * n) {
      result.push(str)
      return
    }

    if (open < n) {
      backtrack(str + '(', open + 1, close)
    }

    if (close < open) {
      backtrack(str + ')', open, close + 1)
    }
  }

  backtrack('', 0, 0)
  return result
}
`.trim()
  },
  {
    id: 'greedy-jump-game',
    title: 'Jump Game',
    description: 'Given an array of non-negative integers where each element represents your max jump length, return true if you can reach the last index.',
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
  let reach = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false
    reach = Math.max(reach, i + nums[i])
  }

  return true
}
`.trim()
  },
  {
    id: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    description: 'Given a non-empty binary tree, return the maximum path sum. The path may start and end at any node.',
    difficulty: 'Hard',
    tags: ['Tree', 'Recursion', 'Dynamic Programming'],
    examples: [
      { input: '[-10,9,20,null,null,15,7]', output: '42' }
    ],
    testCases: [
      {
        input: [
          {
            val: -10,
            left: { val: 9, left: null, right: null },
            right: {
              val: 20,
              left: { val: 15, left: null, right: null },
              right: { val: 7, left: null, right: null }
            }
          }
        ],
        expected: 42
      }
    ],
    solution: `
function maxPathSum(root) {
  let max = -Infinity

  function helper(node) {
    if (!node) return 0

    const left = Math.max(0, helper(node.left))
    const right = Math.max(0, helper(node.right))

    max = Math.max(max, node.val + left + right)

    return node.val + Math.max(left, right)
  }

  helper(root)
  return max
}
`.trim()
  }
,
    {
    id: 'find-largest-number',
    title: 'Find the Largest Number in Array',
    description: 'Given an array of numbers, return the largest number.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[4, 9, 1, 3]', output: '9' }
    ],
    testCases: [
      { input: [[4, 9, 1, 3]], expected: 9 },
      { input: [[-5, -1, -3]], expected: -1 }
    ],
    solution: `
function findLargestNumber(arr) {
  let max = arr[0]
  for (let num of arr) {
    if (num > max) {
      max = num
    }
  }
  return max
}
`.trim()
  },
  {
    id: 'sort-numbers',
    title: 'Sort Numbers in Ascending Order',
    description: 'Given an array of numbers, return a new array sorted in ascending order.',
    difficulty: 'Easy',
    tags: ['Sorting'],
    examples: [
      { input: '[5, 2, 9, 1]', output: '[1, 2, 5, 9]' }
    ],
    testCases: [
      { input: [[5, 2, 9, 1]], expected: [1, 2, 5, 9] },
      { input: [[3, 3, 2, 1]], expected: [1, 2, 3, 3] }
    ],
    solution: `
function sortNumbers(arr) {
  return arr.slice().sort((a, b) => a - b)
}
`.trim()
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse a Linked List',
    description: 'Given the head of a singly linked list, reverse it and return the new head.',
    difficulty: 'Medium',
    tags: ['Linked List'],
    examples: [
      { input: '1 -> 2 -> 3 -> 4', output: '4 -> 3 -> 2 -> 1' }
    ],
    testCases: [
      {
        input: [{
          val: 1,
          next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
        }],
        expected: {
          val: 4,
          next: { val: 3, next: { val: 2, next: { val: 1, next: null } } }
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
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    description: 'Given a 2D grid of "1"s (land) and "0"s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
    difficulty: 'Medium',
    tags: ['Graph'],
    examples: [
      {
        input: '[["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]]',
        output: '3'
      }
    ],
    testCases: [
      {
        input: [[
          ["1","1","0","0"],
          ["1","1","0","0"],
          ["0","0","1","0"],
          ["0","0","0","1"]
        ]],
        expected: 3
      }
    ],
    solution: `
function numIslands(grid) {
  let count = 0
  const rows = grid.length
  const cols = grid[0].length

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols ||
      grid[r][c] === "0"
    ) return

    grid[r][c] = "0"
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++
        dfs(r, c)
      }
    }
  }

  return count
}
`.trim()
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Given an array of integers, find the length of the longest increasing subsequence.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[10, 9, 2, 5, 3, 7, 101, 18]', output: '4' }
    ],
    testCases: [
      { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
      { input: [[0, 1, 0, 3, 2, 3]], expected: 4 }
    ],
    solution: `
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1)

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
    {
    id: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given a sorted array, remove the duplicates in-place and return the new length.',
    difficulty: 'Easy',
    tags: ['Array', 'Two Pointers'],
    examples: [
      { input: '[1, 1, 2]', output: '2' }
    ],
    testCases: [
      { input: [[1, 1, 2]], expected: 2 },
      { input: [[0, 0, 1, 1, 1, 2, 2, 3]], expected: 4 }
    ],
    solution: `
function removeDuplicates(nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
`.trim()
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing just the characters (), [], {}, determine if the input is valid.',
    difficulty: 'Easy',
    tags: ['Stack'],
    examples: [
      { input: '"()[]{}"', output: 'true' },
      { input: '"(]"', output: 'false' }
    ],
    testCases: [
      { input: ['()[]{}'], expected: true },
      { input: ['(]'], expected: false },
      { input: ['([{}])'], expected: true }
    ],
    solution: `
function isValid(s) {
  const stack = []
  const map = { '(': ')', '[': ']', '{': '}' }

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char])
    } else {
      if (stack.pop() !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}
`.trim()
  },
  {
    id: 'find-peak-element',
    title: 'Find Peak Element',
    description: 'A peak element is one that is greater than its neighbors. Given an array, return the index of any peak.',
    difficulty: 'Medium',
    tags: ['Array', 'Binary Search'],
    examples: [
      { input: '[1, 2, 3, 1]', output: '2' }
    ],
    testCases: [
      { input: [[1, 2, 3, 1]], expected: 2 },
      { input: [[1, 2, 1, 3, 5, 6, 4]], expected: 5 }
    ],
    solution: `
function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
`.trim()
  },
  {
    id: 'partition-equal-subset-sum',
    title: 'Partition Equal Subset Sum',
    description: 'Given a non-empty array, determine if it can be partitioned into two subsets with equal sum.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[1, 5, 11, 5]', output: 'true' }
    ],
    testCases: [
      { input: [[1, 5, 11, 5]], expected: true },
      { input: [[1, 2, 3, 5]], expected: false }
    ],
    solution: `
function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0)
  if (total % 2 !== 0) return false

  const target = total / 2
  const dp = new Array(target + 1).fill(false)
  dp[0] = true

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]
    }
  }

  return dp[target]
}
`.trim()
  },
  {
    id: 'word-break',
    title: 'Word Break',
    description: 'Given a string s and a dictionary of words, return true if s can be segmented into space-separated words from the dictionary.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Hashing'],
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' }
    ],
    testCases: [
      { input: ['leetcode', ['leet', 'code']], expected: true },
      { input: ['applepenapple', ['apple', 'pen']], expected: true },
      { input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: false }
    ],
    solution: `
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict)
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}
`.trim()
  }
,
    {
    id: 'sum-of-even-numbers',
    title: 'Sum of Even Numbers',
    description: 'Given an array of numbers, return the sum of all even numbers.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3, 4, 5, 6]', output: '12' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6]], expected: 12 },
      { input: [[7, 9, 11]], expected: 0 }
    ],
    solution: `
function sumOfEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
}
`.trim()
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse a Linked List',
    description: 'Given the head of a singly linked list, reverse the list and return the new head.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: '[1 -> 2 -> 3]', output: '[3 -> 2 -> 1]' }
    ],
    testCases: [
      { input: [{ val: 1, next: { val: 2, next: { val: 3, next: null } } }], expected: { val: 3, next: { val: 2, next: { val: 1, next: null } } } }
    ],
    solution: `
function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
`.trim()
  },
  {
    id: 'implement-queue-using-stacks',
    title: 'Implement Queue Using Stacks',
    description: 'Implement a queue using two stacks. Support enqueue and dequeue operations.',
    difficulty: 'Medium',
    tags: ['Stack', 'Queue'],
    examples: [
      { input: 'enqueue(1), enqueue(2), dequeue()', output: '1' }
    ],
    testCases: [
      { input: ['enqueue(1)', 'enqueue(2)', 'dequeue()'], expected: 1 }
    ],
    solution: `
class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue(x) {
    this.stack1.push(x)
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }
}
`.trim()
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'Given coins of different denominations and a total amount, return the fewest number of coins needed to make up the amount. If it is not possible, return -1.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'coins = [1, 2, 5], amount = 11', output: '3' }
    ],
    testCases: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[2], 3], expected: -1 }
    ],
    solution: `
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
`.trim()
  },
  {
    id: 'word-search-backtracking',
    title: 'Word Search',
    description: 'Given a 2D board and a word, return true if the word exists in the board. The word can be constructed from letters of sequentially adjacent cells.',
    difficulty: 'Hard',
    tags: ['Backtracking'],
    examples: [
      { input: 'board = [["A","B","C"],["D","E","F"],["G","H","I"]], word = "BEF"', output: 'true' }
    ],
    testCases: [
      { input: [[['A','B','C'],['D','E','F'],['G','H','I']], 'BEF'], expected: true },
      { input: [[['A','B','C'],['D','E','F'],['G','H','I']], 'AEI'], expected: false }
    ],
    solution: `
function exist(board, word) {
  const rows = board.length
  const cols = board[0].length

  function dfs(r, c, i) {
    if (i === word.length) return true
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false

    const temp = board[r][c]
    board[r][c] = '#'

    const found = dfs(r + 1, c, i + 1) ||
                  dfs(r - 1, c, i + 1) ||
                  dfs(r, c + 1, i + 1) ||
                  dfs(r, c - 1, i + 1)

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
    id: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Given a sorted array, remove the duplicates in-place and return the length of the new array.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1,1,2]', output: '2' },
      { input: '[0,0,1,1,1,2,2,3,3,4]', output: '5' }
    ],
    testCases: [
      { input: [[1,1,2]], expected: 2 },
      { input: [[0,0,1,1,1,2,2,3,3,4]], expected: 5 }
    ],
    solution: `
function removeDuplicates(nums) {
  if (nums.length === 0) return 0

  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
}
`.trim()
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing just the characters (), {}, and [], determine if the input string is valid.',
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
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    tags: ['Hashing', 'Sliding Window'],
    examples: [
      { input: '"abcabcbb"', output: '3' },
      { input: '"bbbbb"', output: '1' }
    ],
    testCases: [
      { input: ['abcabcbb'], expected: 3 },
      { input: ['bbbbb'], expected: 1 }
    ],
    solution: `
function lengthOfLongestSubstring(s) {
  let set = new Set()
  let left = 0
  let max = 0

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }

    set.add(s[right])
    max = Math.max(max, right - left + 1)
  }

  return max
}
`.trim()
  },
  {
    id: 'find-all-anagrams-in-a-string',
    title: 'Find All Anagrams in a String',
    description: 'Given a string s and a non-empty string p, find all the start indices of p\'s anagrams in s.',
    difficulty: 'Medium',
    tags: ['Hashing', 'Sliding Window'],
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0, 6]' }
    ],
    testCases: [
      { input: ['cbaebabacd', 'abc'], expected: [0, 6] },
      { input: ['abab', 'ab'], expected: [0, 1, 2] }
    ],
    solution: `
function findAnagrams(s, p) {
  const result = []
  const map = {}
  for (let char of p) {
    map[char] = (map[char] || 0) + 1
  }

  let left = 0
  let right = 0
  let count = p.length

  while (right < s.length) {
    if (map[s[right]] > 0) {
      count--
    }

    map[s[right]]--
    right++

    if (count === 0) {
      result.push(left)
    }

    if (right - left === p.length) {
      if (map[s[left]] >= 0) {
        count++
      }

      map[s[left]]++
      left++
    }
  }

  return result
}
`.trim()
  },
  {
    id: 'regular-expression-matching',
    title: 'Regular Expression Matching',
    description: 'Implement regular expression matching with support for \'.\' and \'*\'.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Recursion'],
    examples: [
      { input: 's = "aab", p = "c*a*b"', output: 'true' },
      { input: 's = "mississippi", p = "mis*is*p*."', output: 'false' }
    ],
    testCases: [
      { input: ['aab', 'c*a*b'], expected: true },
      { input: ['mississippi', 'mis*is*p*.'], expected: false }
    ],
    solution: `
function isMatch(s, p) {
  const dp = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(false))
  dp[0][0] = true

  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]
        }
      }
    }
  }

  return dp[s.length][p.length]
}
`.trim()
  }
,
    {
    id: 'reverse-linked-list',
    title: 'Reverse a Linked List',
    description: 'Given the head of a singly linked list, reverse the list and return the new head.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: '[1 -> 2 -> 3 -> 4 -> 5]', output: '[5 -> 4 -> 3 -> 2 -> 1]' }
    ],
    testCases: [],
    solution: `
function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
`.trim()
  },
  {
    id: 'inorder-traversal',
    title: 'Binary Tree Inorder Traversal',
    description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion'],
    examples: [
      { input: '[1,null,2,3]', output: '[1,3,2]' }
    ],
    testCases: [],
    solution: `
function inorderTraversal(root) {
  if (!root) return []
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
}
`.trim()
  },
  {
    id: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    description: 'Given an integer array and an integer k, return the k most frequent elements.',
    difficulty: 'Medium',
    tags: ['Hashing', 'Sorting'],
    examples: [
      { input: '[1,1,1,2,2,3], k = 2', output: '[1,2]' }
    ],
    testCases: [],
    solution: `
function topKFrequent(nums, k) {
  const map = {}
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1
  }

  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1])
  return sorted.slice(0, k).map(pair => parseInt(pair[0]))
}
`.trim()
  },
  {
    id: 'word-search',
    title: 'Word Search',
    description: 'Given a 2D board and a word, return true if the word exists in the grid.',
    difficulty: 'Medium',
    tags: ['Backtracking'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }
    ],
    testCases: [],
    solution: `
function exist(board, word) {
  const rows = board.length
  const cols = board[0].length

  function dfs(i, j, index) {
    if (index === word.length) return true
    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[index]) return false

    const temp = board[i][j]
    board[i][j] = '#'

    const found = dfs(i + 1, j, index + 1) ||
                  dfs(i - 1, j, index + 1) ||
                  dfs(i, j + 1, index + 1) ||
                  dfs(i, j - 1, index + 1)

    board[i][j] = temp
    return found
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
}
`.trim()
  },
  {
    id: 'minimum-path-sum',
    title: 'Minimum Path Sum',
    description: 'Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right with the minimum sum.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Greedy'],
    examples: [
      { input: '[[1,3,1],[1,5,1],[4,2,1]]', output: '7' }
    ],
    testCases: [],
    solution: `
function minPathSum(grid) {
  const rows = grid.length
  const cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0) grid[i][j] += grid[i][j - 1]
      else if (j === 0) grid[i][j] += grid[i - 1][j]
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }

  return grid[rows - 1][cols - 1]
}
`.trim()
  }
,
    {
    id: 'detect-cycle-in-linked-list',
    title: 'Detect Cycle in Linked List',
    description: 'Given the head of a linked list, return true if there is a cycle in the list. Otherwise, return false.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: '1 → 2 → 3 → 4 → 2 (cycle)', output: 'true' },
      { input: '1 → 2 → 3 → null', output: 'false' }
    ],
    testCases: [],
    solution: `
function hasCycle(head) {
  let slow = head
  let fast = head

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
    id: 'height-of-binary-tree',
    title: 'Height of Binary Tree',
    description: 'Given the root of a binary tree, return its height.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion'],
    examples: [
      { input: '[1,2,3,null,null,4,5]', output: '3' }
    ],
    testCases: [],
    solution: `
function treeHeight(root) {
  if (!root) return 0
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}
`.trim()
  },
  {
    id: 'dijkstra-shortest-path',
    title: 'Dijkstra\'s Shortest Path',
    description: 'Given a graph represented as an adjacency list and a start node, return the shortest distances to all other nodes.',
    difficulty: 'Medium',
    tags: ['Graph', 'Greedy'],
    examples: [
      { input: 'graph = { A: { B: 1, C: 4 }, B: { C: 2, D: 5 }, C: { D: 1 }, D: {} }, start = "A"', output: '{ A: 0, B: 1, C: 3, D: 4 }' }
    ],
    testCases: [],
    solution: `
function dijkstra(graph, start) {
  const distances = {}
  const visited = new Set()
  const pq = [[0, start]]

  for (let node in graph) {
    distances[node] = Infinity
  }

  distances[start] = 0

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0])
    const [dist, node] = pq.shift()

    if (visited.has(node)) continue
    visited.add(node)

    for (let neighbor in graph[node]) {
      let newDist = dist + graph[node][neighbor]
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist
        pq.push([newDist, neighbor])
      }
    }
  }

  return distances
}
`.trim()
  },
  {
    id: 'coin-change-combinations',
    title: 'Coin Change - Number of Combinations',
    description: 'Given coins and an amount, return the number of ways to make the amount using the coins.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: 'coins = [1,2,5], amount = 5', output: '4' }
    ],
    testCases: [],
    solution: `
function change(amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
}
`.trim()
  },
  {
    id: 'valid-blockchain-sequence',
    title: 'Valid Blockchain Hash Chain',
    description: 'Each block in a blockchain has a hash and a previousHash. Verify if the chain is valid from first to last block.',
    difficulty: 'Hard',
    tags: ['Hashing', 'Blockchain', 'Backtracking'],
    examples: [
      { input: '[{hash:"abc", prev:"null"}, {hash:"bcd", prev:"abc"}, {hash:"cde", prev:"bcd"}]', output: 'true' },
      { input: '[{hash:"abc", prev:"null"}, {hash:"bcd", prev:"xyz"}]', output: 'false' }
    ],
    testCases: [],
    solution: `
function isValidBlockchain(chain) {
  if (chain.length === 0) return false
  if (chain[0].prev !== 'null') return false

  for (let i = 1; i < chain.length; i++) {
    if (chain[i].prev !== chain[i - 1].hash) {
      return false
    }
  }

  return true
}
`.trim()
  }
,
    {
    id: 'reverse-linked-list',
    title: 'Reverse a Linked List',
    description: 'Given the head of a singly linked list, reverse the list and return the new head.',
    difficulty: 'Easy',
    tags: ['Linked List'],
    examples: [
      { input: '[1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' }
    ],
    testCases: [],
    solution: `
function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
`.trim()
  },
  {
    id: 'inorder-traversal',
    title: 'Inorder Traversal of Binary Tree',
    description: 'Return the inorder traversal of a binary tree\'s nodes.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion'],
    examples: [
      { input: '[1,null,2,3]', output: '[1,3,2]' }
    ],
    testCases: [],
    solution: `
function inorderTraversal(root) {
  const result = []

  function dfs(node) {
    if (!node) return
    dfs(node.left)
    result.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  return result
}
`.trim()
  },
  {
    id: 'topological-sort',
    title: 'Topological Sort of DAG',
    description: 'Given a directed acyclic graph (DAG), return a topological ordering of its vertices.',
    difficulty: 'Medium',
    tags: ['Graph'],
    examples: [
      { input: 'edges = [[0,1],[0,2],[1,3],[2,3]]', output: '[0,1,2,3] or [0,2,1,3]' }
    ],
    testCases: [],
    solution: `
function topologicalSort(n, edges) {
  const graph = Array(n).fill(0).map(() => [])
  const inDegree = Array(n).fill(0)

  for (let [u, v] of edges) {
    graph[u].push(v)
    inDegree[v]++
  }

  const queue = []
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  const result = []
  while (queue.length) {
    const node = queue.shift()
    result.push(node)
    for (let neighbor of graph[node]) {
      inDegree[neighbor]--
      if (inDegree[neighbor] === 0) queue.push(neighbor)
    }
  }

  return result
}
`.trim()
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Return the length of the longest increasing subsequence in an array.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming'],
    examples: [
      { input: '[10,9,2,5,3,7,101,18]', output: '4' }
    ],
    testCases: [],
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
  },
  {
    id: 'validate-blockchain-chain',
    title: 'Validate Blockchain Chain with Hash Map',
    description: 'Each block has a hash and prevHash. Check if all blocks form a valid chain.',
    difficulty: 'Hard',
    tags: ['Blockchain', 'Hashing', 'Backtracking'],
    examples: [
      { input: '[{hash:"A",prev:"null"},{hash:"B",prev:"A"},{hash:"C",prev:"B"}]', output: 'true' },
      { input: '[{hash:"A",prev:"null"},{hash:"B",prev:"X"}]', output: 'false' }
    ],
    testCases: [],
    solution: `
function isValidChain(blocks) {
  const map = new Map()

  for (let block of blocks) {
    map.set(block.hash, block.prev)
  }

  let seen = new Set()
  let current = blocks[blocks.length - 1].hash

  while (map.has(current)) {
    if (seen.has(current)) return false
    seen.add(current)
    current = map.get(current)
    if (current === 'null') return true
  }

  return false
}
`.trim()
  }
,
    {
    id: 'linked-list-middle-node',
    title: 'Find Middle of Linked List',
    description: 'Design a LinkedList class and implement a method to find the middle node.',
    difficulty: 'Easy',
    tags: ['Linked List', 'OOP'],
    examples: [
      { input: '[1, 2, 3, 4, 5]', output: '3' }
    ],
    testCases: [],
    solution: `
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  findMiddle() {
    let slow = this.head
    let fast = this.head

    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }

    return slow ? slow.val : null
  }
}
`.trim()
  },
  {
    id: 'binary-search-tree-search',
    title: 'Binary Search Tree Lookup',
    description: 'Design a BST and implement a search method that returns true if a value exists.',
    difficulty: 'Easy',
    tags: ['Tree', 'Searching', 'OOP'],
    examples: [
      { input: '[4,2,7,1,3], target = 2', output: 'true' }
    ],
    testCases: [],
    solution: `
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const node = new TreeNode(val)

    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = node
          break
        }
        current = current.right
      }
    }
  }

  search(val) {
    let current = this.root
    while (current) {
      if (current.val === val) return true
      current = val < current.val ? current.left : current.right
    }
    return false
  }
}
`.trim()
  },
  {
    id: 'graph-cycle-detection',
    title: 'Detect Cycle in Graph',
    description: 'Create a Graph class and check if the graph contains a cycle.',
    difficulty: 'Medium',
    tags: ['Graph', 'Backtracking', 'OOP'],
    examples: [
      { input: '[[0,1],[1,2],[2,0]]', output: 'true' }
    ],
    testCases: [],
    solution: `
class Graph {
  constructor(n) {
    this.adj = Array(n).fill(0).map(() => [])
  }

  addEdge(u, v) {
    this.adj[u].push(v)
  }

  hasCycle() {
    const visited = Array(this.adj.length).fill(false)
    const path = Array(this.adj.length).fill(false)

    const dfs = (node) => {
      if (path[node]) return true
      if (visited[node]) return false

      visited[node] = true
      path[node] = true

      for (let neighbor of this.adj[node]) {
        if (dfs(neighbor)) return true
      }

      path[node] = false
      return false
    }

    for (let i = 0; i < this.adj.length; i++) {
      if (dfs(i)) return true
    }

    return false
  }
}
`.trim()
  },
  {
    id: 'knapsack-problem',
    title: '0/1 Knapsack Problem',
    description: 'Design a class to solve the 0/1 Knapsack Problem using DP.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming', 'Greedy', 'OOP'],
    examples: [
      { input: 'values = [60, 100, 120], weights = [10, 20, 30], capacity = 50', output: '220' }
    ],
    testCases: [],
    solution: `
class Knapsack {
  constructor(values, weights, capacity) {
    this.values = values
    this.weights = weights
    this.capacity = capacity
  }

  solve() {
    const n = this.values.length
    const dp = Array(n + 1).fill(0).map(() => Array(this.capacity + 1).fill(0))

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= this.capacity; w++) {
        if (this.weights[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - this.weights[i - 1]] + this.values[i - 1])
        } else {
          dp[i][w] = dp[i - 1][w]
        }
      }
    }

    return dp[n][this.capacity]
  }
}
`.trim()
  },
  {
    id: 'blockchain-proof-of-chain',
    title: 'Validate Blockchain Chain with Class',
    description: 'Create a Blockchain class with Block objects that validate the full chain integrity.',
    difficulty: 'Hard',
    tags: ['Blockchain', 'Hashing', 'OOP'],
    examples: [
      { input: 'blockchain.addBlock("A"); blockchain.addBlock("B"); blockchain.isValid()', output: 'true' }
    ],
    testCases: [],
    solution: `
class Block {
  constructor(data, prevHash = '0') {
    this.data = data
    this.prevHash = prevHash
    this.hash = this.computeHash()
  }

  computeHash() {
    return (this.data + this.prevHash).split('').reduce((a, b) => a + b.charCodeAt(0), 0).toString()
  }
}

class Blockchain {
  constructor() {
    this.chain = [new Block('Genesis')]
  }

  addBlock(data) {
    const prevHash = this.chain[this.chain.length - 1].hash
    const block = new Block(data, prevHash)
    this.chain.push(block)
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i]
      const previous = this.chain[i - 1]

      if (current.prevHash !== previous.hash || current.hash !== current.computeHash()) {
        return false
      }
    }

    return true
  }
}
`.trim()
  }
,
    {
    id: 'linked-list-reverse',
    title: 'Reverse a Linked List',
    description: 'Build a LinkedList class and implement a method to reverse the list.',
    difficulty: 'Easy',
    tags: ['Linked List', 'OOP'],
    examples: [{ input: '[1,2,3]', output: '[3,2,1]' }],
    testCases: [],
    solution: `
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  reverse() {
    let prev = null
    let current = this.head
    while (current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
}
`.trim()
  },
  {
    id: 'tree-sum-recursive',
    title: 'Sum of Binary Tree',
    description: 'Build a binary tree and recursively find the sum of all nodes.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion', 'OOP'],
    examples: [{ input: '[1,2,3]', output: '6' }],
    testCases: [],
    solution: `
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const node = new TreeNode(val)
    if (!this.root) {
      this.root = node
      return
    }

    const queue = [this.root]
    while (queue.length) {
      const current = queue.shift()
      if (!current.left) {
        current.left = node
        return
      } else if (!current.right) {
        current.right = node
        return
      }
      queue.push(current.left, current.right)
    }
  }

  sum(root = this.root) {
    if (!root) return 0
    return root.val + this.sum(root.left) + this.sum(root.right)
  }
}
`.trim()
  },
  {
    id: 'hash-map-first-unique',
    title: 'First Unique Character',
    description: 'Create a HashMap to find the first unique character in a string.',
    difficulty: 'Medium',
    tags: ['Hashing', 'OOP'],
    examples: [{ input: '"leetcode"', output: '0' }],
    testCases: [],
    solution: `
class FirstUniqueChar {
  constructor(text) {
    this.text = text
  }

  findIndex() {
    const map = {}

    for (let char of this.text) {
      map[char] = (map[char] || 0) + 1
    }

    for (let i = 0; i < this.text.length; i++) {
      if (map[this.text[i]] === 1) return i
    }

    return -1
  }
}
`.trim()
  },
  {
    id: 'graph-shortest-path-bfs',
    title: 'Shortest Path in Unweighted Graph',
    description: 'Use BFS to find the shortest path from start to target in an unweighted graph.',
    difficulty: 'Medium',
    tags: ['Graph', 'Searching', 'OOP'],
    examples: [{ input: 'edges = [[0,1],[1,2],[2,3]], start = 0, end = 3', output: '3' }],
    testCases: [],
    solution: `
class Graph {
  constructor(n) {
    this.adj = Array(n).fill(0).map(() => [])
  }

  addEdge(u, v) {
    this.adj[u].push(v)
    this.adj[v].push(u)
  }

  shortestPath(start, end) {
    const visited = Array(this.adj.length).fill(false)
    const queue = [[start, 0]]

    visited[start] = true

    while (queue.length) {
      const [node, dist] = queue.shift()
      if (node === end) return dist

      for (let neighbor of this.adj[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push([neighbor, dist + 1])
        }
      }
    }

    return -1
  }
}
`.trim()
  },
  {
    id: 'blockchain-verify-chain',
    title: 'Blockchain: Verify Tampered Chain',
    description: 'Build a Blockchain class and check if any block was tampered by comparing hashes.',
    difficulty: 'Hard',
    tags: ['Blockchain', 'Hashing', 'OOP'],
    examples: [{ input: 'addBlock("A"); addBlock("B"); tamper block; isValid()', output: 'false' }],
    testCases: [],
    solution: `
class Block {
  constructor(data, prevHash = '0') {
    this.data = data
    this.prevHash = prevHash
    this.hash = this.computeHash()
  }

  computeHash() {
    return (this.data + this.prevHash).split('').reduce((a, b) => a + b.charCodeAt(0), 0).toString()
  }
}

class Blockchain {
  constructor() {
    this.chain = [new Block('Genesis')]
  }

  addBlock(data) {
    const prevHash = this.chain[this.chain.length - 1].hash
    const newBlock = new Block(data, prevHash)
    this.chain.push(newBlock)
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i]
      const previous = this.chain[i - 1]
      if (current.prevHash !== previous.hash || current.hash !== current.computeHash()) {
        return false
      }
    }
    return true
  }
}
`.trim()
  }
,
    {
    id: 'linked-list-remove-duplicates',
    title: 'Remove Duplicates from Linked List',
    description: 'Create a linked list and remove duplicate values in-place.',
    difficulty: 'Easy',
    tags: ['Linked List', 'Hashing', 'OOP'],
    examples: [{ input: '[1,2,2,3,1]', output: '[1,2,3]' }],
    testCases: [],
    solution: `
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  removeDuplicates() {
    const seen = new Set()
    let current = this.head
    let prev = null

    while (current) {
      if (seen.has(current.val)) {
        prev.next = current.next
      } else {
        seen.add(current.val)
        prev = current
      }
      current = current.next
    }
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
}
`.trim()
  },
  {
    id: 'binary-search-tree-contains',
    title: 'Check if BST Contains a Value',
    description: 'Create a binary search tree and check if a target value exists.',
    difficulty: 'Easy',
    tags: ['Tree', 'Searching', 'OOP'],
    examples: [{ input: '[5,3,7,2,4], search 4', output: 'true' }],
    testCases: [],
    solution: `
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const node = new TreeNode(val)
    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = node
          break
        }
        current = current.right
      }
    }
  }

  contains(val) {
    let current = this.root
    while (current) {
      if (val === current.val) return true
      current = val < current.val ? current.left : current.right
    }
    return false
  }
}
`.trim()
  },
  {
    id: 'graph-dfs-count-nodes',
    title: 'Count Reachable Nodes Using DFS',
    description: 'Build a graph class and count how many nodes are reachable from a given node using DFS.',
    difficulty: 'Medium',
    tags: ['Graph', 'Recursion', 'Searching', 'OOP'],
    examples: [{ input: 'edges=[[0,1],[1,2],[2,3]], start=0', output: '4' }],
    testCases: [],
    solution: `
class Graph {
  constructor(n) {
    this.adj = Array(n).fill(0).map(() => [])
  }

  addEdge(u, v) {
    this.adj[u].push(v)
    this.adj[v].push(u)
  }

  countReachable(start) {
    const visited = new Set()
    const dfs = (node) => {
      if (visited.has(node)) return
      visited.add(node)
      for (let neighbor of this.adj[node]) {
        dfs(neighbor)
      }
    }
    dfs(start)
    return visited.size
  }
}
`.trim()
  },
  {
    id: 'coin-change-greedy',
    title: 'Minimum Coins Change (Greedy)',
    description: 'Given coin denominations and a target amount, find the minimum coins needed using greedy.',
    difficulty: 'Medium',
    tags: ['Greedy', 'Sorting', 'OOP'],
    examples: [{ input: 'coins = [1, 5, 10], amount = 18', output: '4' }],
    testCases: [],
    solution: `
class CoinChanger {
  constructor(coins) {
    this.coins = coins.sort((a, b) => b - a)
  }

  minCoins(amount) {
    let count = 0
    for (let coin of this.coins) {
      while (amount >= coin) {
        amount -= coin
        count++
      }
    }
    return amount === 0 ? count : -1
  }
}
`.trim()
  },
  {
    id: 'knapsack-0-1-dp',
    title: '0/1 Knapsack Problem',
    description: 'Implement the 0/1 Knapsack problem using dynamic programming.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Backtracking', 'OOP'],
    examples: [{ input: 'weights = [1,3,4,5], values = [1,4,5,7], W = 7', output: '9' }],
    testCases: [],
    solution: `
class Knapsack {
  constructor(weights, values, capacity) {
    this.weights = weights
    this.values = values
    this.capacity = capacity
  }

  solve() {
    const n = this.weights.length
    const dp = Array(n + 1).fill(0).map(() => Array(this.capacity + 1).fill(0))

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= this.capacity; w++) {
        if (this.weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            this.values[i - 1] + dp[i - 1][w - this.weights[i - 1]],
            dp[i - 1][w]
          )
        } else {
          dp[i][w] = dp[i - 1][w]
        }
      }
    }

    return dp[n][this.capacity]
  }
}
`.trim()
  }
,
    {
    id: 'linked-list-reverse',
    title: 'Reverse a Linked List',
    description: 'Reverse the elements of a singly linked list.',
    difficulty: 'Easy',
    tags: ['Linked List', 'OOP'],
    examples: [{ input: '[1, 2, 3, 4]', output: '[4, 3, 2, 1]' }],
    testCases: [],
    solution: `
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      return
    }
    let curr = this.head
    while (curr.next) {
      curr = curr.next
    }
    curr.next = node
  }

  reverse() {
    let prev = null
    let curr = this.head
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  toArray() {
    const result = []
    let curr = this.head
    while (curr) {
      result.push(curr.val)
      curr = curr.next
    }
    return result
  }
}
`.trim()
  },
  {
    id: 'tree-inorder-traversal',
    title: 'Inorder Traversal of Binary Tree',
    description: 'Perform an inorder traversal of a binary tree and return the values.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion', 'OOP'],
    examples: [{ input: '[1,null,2,3]', output: '[1,3,2]' }],
    testCases: [],
    solution: `
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root
  }

  inorderTraversal() {
    const result = []
    const traverse = (node) => {
      if (!node) return
      traverse(node.left)
      result.push(node.val)
      traverse(node.right)
    }
    traverse(this.root)
    return result
  }
}
`.trim()
  },
  {
    id: 'graph-bfs-search',
    title: 'Breadth-First Search in Graph',
    description: 'Use BFS to search for a target node in an undirected graph.',
    difficulty: 'Medium',
    tags: ['Graph', 'Searching', 'Queue', 'OOP'],
    examples: [{ input: 'edges=[[0,1],[1,2],[2,3]], start=0, target=3', output: 'true' }],
    testCases: [],
    solution: `
class Graph {
  constructor(n) {
    this.adj = Array(n).fill(0).map(() => [])
  }

  addEdge(u, v) {
    this.adj[u].push(v)
    this.adj[v].push(u)
  }

  bfs(start, target) {
    const visited = new Set()
    const queue = [start]

    while (queue.length) {
      const node = queue.shift()
      if (node === target) return true
      if (!visited.has(node)) {
        visited.add(node)
        for (let neighbor of this.adj[node]) {
          queue.push(neighbor)
        }
      }
    }

    return false
  }
}
`.trim()
  },
  {
    id: 'min-cost-coins',
    title: 'Minimum Coins (Greedy)',
    description: 'Find the fewest coins needed to make a target amount.',
    difficulty: 'Medium',
    tags: ['Greedy', 'Sorting', 'OOP'],
    examples: [{ input: 'coins=[1,5,10], amount=28', output: '6' }],
    testCases: [],
    solution: `
class CoinSolver {
  constructor(coins) {
    this.coins = coins.sort((a, b) => b - a)
  }

  getMinCoins(amount) {
    let count = 0
    for (let coin of this.coins) {
      while (amount >= coin) {
        amount -= coin
        count++
      }
    }
    return amount === 0 ? count : -1
  }
}
`.trim()
  },
  {
    id: 'word-break-dp',
    title: 'Word Break Using DP',
    description: 'Check if a string can be segmented into words from a given dictionary.',
    difficulty: 'Hard',
    tags: ['Dynamic Programming', 'Backtracking', 'Hashing', 'OOP'],
    examples: [{ input: 's="applepenapple", dict=["apple", "pen"]', output: 'true' }],
    testCases: [],
    solution: `
class WordBreaker {
  constructor(dict) {
    this.words = new Set(dict)
  }

  canSegment(s) {
    const n = s.length
    const dp = Array(n + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && this.words.has(s.slice(j, i))) {
          dp[i] = true
          break
        }
      }
    }

    return dp[n]
  }
}
`.trim()
  }
,
    {
  id: 'linked-list-find-middle',
  title: 'Find Middle of Linked List',
  description: 'Return the middle value of a singly linked list.',
  difficulty: 'Easy',
  tags: ['Linked List', 'OOP'],
  examples: [{ input: '[1, 2, 3, 4, 5]', output: '3' }],
  testCases: [],
  solution: `
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      return
    }
    let curr = this.head
    while (curr.next) {
      curr = curr.next
    }
    curr.next = node
  }

  findMiddle() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow ? slow.val : null
  }
}
`.trim()
}
,
  {
    id: 'tree-max-depth',
    title: 'Max Depth of Binary Tree',
    description: 'Find the maximum depth of a binary tree.',
    difficulty: 'Easy',
    tags: ['Tree', 'Recursion', 'OOP'],
    examples: [{ input: '[3,9,20,null,null,15,7]', output: '3' }],
    testCases: [],
    solution: `
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root
  }

  maxDepth(node = this.root) {
    if (!node) return 0
    return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right))
  }
}
`.trim()
  },
  {
    id: 'graph-detect-cycle',
    title: 'Detect Cycle in Undirected Graph',
    description: 'Detect if an undirected graph contains a cycle.',
    difficulty: 'Medium',
    tags: ['Graph', 'DFS', 'OOP'],
    examples: [{ input: 'edges=[[0,1],[1,2],[2,0]]', output: 'true' }],
    testCases: [],
    solution: `
class Graph {
  constructor(n) {
    this.adj = Array(n).fill(0).map(() => [])
  }

  addEdge(u, v) {
    this.adj[u].push(v)
    this.adj[v].push(u)
  }

  hasCycle() {
    const visited = new Set()

    const dfs = (node, parent) => {
      visited.add(node)
      for (let neighbor of this.adj[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true
        } else if (neighbor !== parent) {
          return true
        }
      }
      return false
    }

    for (let i = 0; i < this.adj.length; i++) {
      if (!visited.has(i)) {
        if (dfs(i, -1)) return true
      }
    }

    return false
  }
}
`.trim()
  },
  {
    id: 'coin-change-min-coins',
    title: 'Coin Change - Minimum Coins',
    description: 'Find the minimum number of coins to make the target amount.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming', 'Greedy', 'OOP'],
    examples: [{ input: 'coins=[1,2,5], amount=11', output: '3' }],
    testCases: [],
    solution: `
class CoinChange {
  constructor(coins) {
    this.coins = coins
  }

  minCoins(amount) {
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of this.coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
  }
}
`.trim()
  },
  {
    id: 'blockchain-valid-chain',
    title: 'Validate Blockchain',
    description: 'Validate if a blockchain is consistent (previousHash matches hash of previous block).',
    difficulty: 'Hard',
    tags: ['Blockchain', 'Hashing', 'OOP'],
    examples: [{ input: 'chain=[{data:"A"},{data:"B"},{data:"C"}]', output: 'true' }],
    testCases: [],
    solution: `
class Block {
  constructor(data, previousHash = '') {
    this.data = data
    this.previousHash = previousHash
    this.hash = this.computeHash()
  }

  computeHash() {
    return String(this.data + this.previousHash)
  }
}

class Blockchain {
  constructor() {
    this.chain = [new Block('Genesis')]
  }

  addBlock(data) {
    const prev = this.chain[this.chain.length - 1]
    const block = new Block(data, prev.hash)
    this.chain.push(block)
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const curr = this.chain[i]
      const prev = this.chain[i - 1]
      if (curr.previousHash !== prev.hash) return false
      if (curr.hash !== curr.computeHash()) return false
    }
    return true
  }
}
`.trim()
  }

  function shuffleArray(array) {
  const shuffled = [...array]; // Create a shallow copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

];
