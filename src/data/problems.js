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
    pseudocode: `
SET largest TO first number in array
FOR each number in array
  IF number > largest THEN
    SET largest TO number
RETURN largest
`.trim(),
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
    id: 'sum-array-elements',
    title: 'Sum of Array Elements',
    description: 'Return the total sum of all elements in the array.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3, 4]', output: '10' },
      { input: '[0, 0, 0]', output: '0' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: 10 },
      { input: [[0, 0, 0]], expected: 0 }
    ],
    pseudocode: `
SET sum TO 0
FOR each number in array
  ADD number TO sum
RETURN sum
`.trim(),
    solution: `
function sumArrayElements(numbers) {
  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}
`.trim()
  },

  {
    id: 'second-largest-number',
    title: 'Find Second Largest Number',
    description: 'Find the second largest number in the array.',
    difficulty: 'Medium',
    tags: ['Array'],
    examples: [
      { input: '[3, 5, 7, 2]', output: '5' },
      { input: '[10, 10, 9]', output: '9' }
    ],
    testCases: [
      { input: [[3, 5, 7, 2]], expected: 5 },
      { input: [[10, 10, 9]], expected: 9 }
    ],
    pseudocode: `
REMOVE duplicates from array
SORT array in descending order
RETURN second element in array
`.trim(),
    solution: `
function secondLargest(numbers) {
  const unique = [...new Set(numbers)]
  unique.sort((a, b) => b - a)
  return unique[1]
}
`.trim()
  },

  {
    id: 'array-product-except-self',
    title: 'Product of Array Except Self',
    description: 'Return an array where each element is the product of all elements except itself.',
    difficulty: 'Medium',
    tags: ['Array'],
    examples: [
      { input: '[1, 2, 3, 4]', output: '[24, 12, 8, 6]' }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] }
    ],
    pseudocode: `
CREATE left and right product arrays
COMPUTE prefix products from left to right
COMPUTE suffix products from right to left
MULTIPLY left and right to get final result
`.trim(),
    solution: `
function productExceptSelf(nums) {
  const n = nums.length
  const result = new Array(n).fill(1)
  let left = 1, right = 1

  for (let i = 0; i < n; i++) {
    result[i] *= left
    left *= nums[i]
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right
    right *= nums[i]
  }

  return result
}
`.trim()
  },

  {
    id: 'max-subarray-sum',
    title: 'Maximum Subarray Sum (Kadane’s Algorithm)',
    description: 'Find the contiguous subarray with the largest sum.',
    difficulty: 'Hard',
    tags: ['Array'],
    examples: [
      { input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]', output: '6' }
    ],
    testCases: [
      { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 }
    ],
    pseudocode: `
SET maxSoFar = currentMax = first element
FOR each element starting from second
  SET currentMax = max(current element, currentMax + element)
  SET maxSoFar = max(maxSoFar, currentMax)
RETURN maxSoFar
`.trim(),
    solution: `
function maxSubArray(nums) {
  let maxSoFar = nums[0]
  let currentMax = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i])
    maxSoFar = Math.max(maxSoFar, currentMax)
  }

  return maxSoFar
}
`.trim()
  },

  {
    id: 'rotate-array',
    title: 'Rotate Array by K Steps',
    description: 'Rotate the array to the right by k steps.',
    difficulty: 'Hard',
    tags: ['Array'],
    examples: [
      { input: '[1,2,3,4,5,6,7], k=3', output: '[5,6,7,1,2,3,4]' }
    ],
    testCases: [
      { input: [[1,2,3,4,5,6,7], 3], expected: [5,6,7,1,2,3,4] }
    ],
    pseudocode: `
REVERSE whole array
REVERSE first k elements
REVERSE rest of the array
`.trim(),
    solution: `
function rotateArray(nums, k) {
  k %= nums.length

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)

  return nums
}
`.trim()
  }
,
// 🧱 Stack Problems

{
  id: 'valid-parentheses',
  title: 'Valid Parentheses',
  description: 'Check if the input string has valid parentheses using a stack.',
  difficulty: 'Easy',
  tags: ['Stack'],
  examples: [
    { input: '"()"', output: 'true' },
    { input: '"({[]})"', output: 'true' },
    { input: '"(]"', output: 'false' }
  ],
  testCases: [
    { input: ['()'], expected: true },
    { input: ['({[]})'], expected: true },
    { input: ['(]'], expected: false }
  ],
  pseudocode: `
CREATE a stack
FOR each character in string
  IF opening bracket, PUSH to stack
  ELSE IF closing bracket, CHECK top of stack matches
    IF not match, RETURN false
IF stack is empty, RETURN true
`.trim(),
  solution: `
function isValidParentheses(s) {
  const stack = []
  const map = { ')': '(', ']': '[', '}': '{' }

  for (let ch of s) {
    if (['(', '[', '{'].includes(ch)) {
      stack.push(ch)
    } else {
      if (stack.pop() !== map[ch]) return false
    }
  }

  return stack.length === 0
}
`.trim()
},

{
  id: 'reverse-stack',
  title: 'Reverse Stack Using Stack Operations',
  description: 'Reverse a stack using only stack operations.',
  difficulty: 'Easy',
  tags: ['Stack'],
  examples: [
    { input: '[1,2,3]', output: '[3,2,1]' }
  ],
  testCases: [
    { input: [[1, 2, 3]], expected: [3, 2, 1] }
  ],
  pseudocode: `
PUSH all elements to temporary stack
POP from temp and PUSH to result
RETURN result stack
`.trim(),
  solution: `
function reverseStack(stack) {
  const result = []
  while (stack.length) {
    result.push(stack.pop())
  }
  return result
}
`.trim()
},

{
  id: 'min-stack',
  title: 'Min Stack',
  description: 'Design a stack that supports push, pop, top, and retrieving the minimum element.',
  difficulty: 'Medium',
  tags: ['Stack'],
  examples: [],
  testCases: [],
  pseudocode: `
USE two stacks: main and minStack
PUSH: Add to both if new min
POP: Pop from both
GET MIN: Return top of minStack
`.trim(),
  solution: `
class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    this.stack.push(val)
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1])
    this.minStack.push(min)
  }

  pop() {
    this.stack.pop()
    this.minStack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}
`.trim()
},

{
  id: 'next-greater-element',
  title: 'Next Greater Element',
  description: 'For each element, find the next greater element to the right.',
  difficulty: 'Medium',
  tags: ['Stack'],
  examples: [
    { input: '[2,1,2,4,3]', output: '[4,2,4,-1,-1]' }
  ],
  testCases: [
    { input: [[2,1,2,4,3]], expected: [4,2,4,-1,-1] }
  ],
  pseudocode: `
TRAVERSE array from right to left
USE stack to track greater elements
POP smaller or equal elements
PUSH current element
`.trim(),
  solution: `
function nextGreaterElement(nums) {
  const result = Array(nums.length).fill(-1)
  const stack = []

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1]
    }

    stack.push(nums[i])
  }

  return result
}
`.trim()
},

{
  id: 'largest-rectangle-histogram',
  title: 'Largest Rectangle in Histogram',
  description: 'Find the area of the largest rectangle in the histogram.',
  difficulty: 'Hard',
  tags: ['Stack'],
  examples: [
    { input: '[2,1,5,6,2,3]', output: '10' }
  ],
  testCases: [
    { input: [[2,1,5,6,2,3]], expected: 10 }
  ],
  pseudocode: `
APPEND 0 to heights
USE stack to track increasing bars
WHEN height drops, CALCULATE area
KEEP max area
`.trim(),
  solution: `
function largestRectangleArea(heights) {
  heights.push(0)
  const stack = []
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()]
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, h * w)
    }
    stack.push(i)
  }

  return maxArea
}
`.trim()
},

{
  id: 'max-stack',
  title: 'Max Stack',
  description: 'Design a stack that supports retrieving the maximum element efficiently.',
  difficulty: 'Hard',
  tags: ['Stack'],
  examples: [],
  testCases: [],
  pseudocode: `
USE two stacks: main and maxStack
PUSH: add value and max so far
POP: pop from both
GET MAX: return top of maxStack
`.trim(),
  solution: `
class MaxStack {
  constructor() {
    this.stack = []
    this.maxStack = []
  }

  push(val) {
    this.stack.push(val)
    const max = this.maxStack.length === 0
      ? val
      : Math.max(val, this.maxStack[this.maxStack.length - 1])
    this.maxStack.push(max)
  }

  pop() {
    this.stack.pop()
    this.maxStack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMax() {
    return this.maxStack[this.maxStack.length - 1]
  }
}
`.trim()
}
,
// 🚦 Queue Problems

{
  id: 'implement-queue-using-array',
  title: 'Implement Queue Using Array',
  description: 'Implement a basic queue with enqueue and dequeue operations.',
  difficulty: 'Easy',
  tags: ['Queue'],
  examples: [],
  testCases: [],
  pseudocode: `
USE array to store elements
ENQUEUE: push to array
DEQUEUE: remove from start of array
`.trim(),
  solution: `
class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(val) {
    this.queue.push(val)
  }

  dequeue() {
    return this.queue.shift()
  }

  peek() {
    return this.queue[0]
  }

  isEmpty() {
    return this.queue.length === 0
  }
}
`.trim()
},

{
  id: 'is-circular-queue-full',
  title: 'Check If Circular Queue is Full',
  description: 'Given size and enqueue/dequeue actions, check if queue is full.',
  difficulty: 'Easy',
  tags: ['Queue'],
  examples: [],
  testCases: [],
  pseudocode: `
USE fixed-size array
INCREMENT rear on enqueue
IF next rear == front, it's full
`.trim(),
  solution: `
class CircularQueue {
  constructor(k) {
    this.queue = Array(k)
    this.size = k
    this.front = 0
    this.rear = 0
    this.count = 0
  }

  enqueue(val) {
    if (this.isFull()) return false
    this.queue[this.rear] = val
    this.rear = (this.rear + 1) % this.size
    this.count++
    return true
  }

  dequeue() {
    if (this.isEmpty()) return false
    this.front = (this.front + 1) % this.size
    this.count--
    return true
  }

  isFull() {
    return this.count === this.size
  }

  isEmpty() {
    return this.count === 0
  }
}
`.trim()
},

{
  id: 'moving-average-stream',
  title: 'Moving Average from Data Stream',
  description: 'Calculate the moving average of the last k elements from a stream.',
  difficulty: 'Medium',
  tags: ['Queue'],
  examples: [],
  testCases: [],
  pseudocode: `
USE queue to store last k numbers
IF size > k, remove oldest
RETURN average of queue
`.trim(),
  solution: `
class MovingAverage {
  constructor(size) {
    this.size = size
    this.queue = []
    this.sum = 0
  }

  next(val) {
    this.queue.push(val)
    this.sum += val
    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift()
    }
    return this.sum / this.queue.length
  }
}
`.trim()
},

{
  id: 'first-unique-character',
  title: 'First Unique Character in a Stream',
  description: 'Return the first non-repeating character from a stream of characters.',
  difficulty: 'Medium',
  tags: ['Queue'],
  examples: [],
  testCases: [],
  pseudocode: `
USE queue and hashmap
FOR each char
  INCREMENT count
  ADD to queue if first time
  WHILE front is repeating, REMOVE it
RETURN front
`.trim(),
  solution: `
class FirstUnique {
  constructor() {
    this.queue = []
    this.count = {}
  }

  add(char) {
    if (!this.count[char]) {
      this.count[char] = 1
      this.queue.push(char)
    } else {
      this.count[char]++
    }

    while (this.queue.length && this.count[this.queue[0]] > 1) {
      this.queue.shift()
    }

    return this.queue[0] || null
  }
}
`.trim()
},

{
  id: 'sliding-window-maximum',
  title: 'Sliding Window Maximum',
  description: 'Return the maximum value in each sliding window of size k.',
  difficulty: 'Hard',
  tags: ['Queue'],
  examples: [
    { input: '[1,3,-1,-3,5,3,6,7], k=3', output: '[3,3,5,5,6,7]' }
  ],
  testCases: [
    { input: [[1,3,-1,-3,5,3,6,7], 3], expected: [3,3,5,5,6,7] }
  ],
  pseudocode: `
USE deque to store indexes
FOR each element
  REMOVE smaller elements from back
  REMOVE out-of-window indexes from front
  ADD current index
  IF window full, ADD front value to result
`.trim(),
  solution: `
function maxSlidingWindow(nums, k) {
  const result = []
  const deque = []

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    if (deque[0] <= i - k) {
      deque.shift()
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}
`.trim()
},

{
  id: 'rotten-oranges',
  title: 'Rotten Oranges (Multi-Source BFS)',
  description: 'Find the minimum time required to rot all oranges.',
  difficulty: 'Hard',
  tags: ['Queue'],
  examples: [],
  testCases: [],
  pseudocode: `
USE queue to store all rotten oranges
PERFORM BFS
  FOR each minute, spread to neighbors
  TRACK time and fresh count
IF fresh left, RETURN -1
ELSE RETURN time
`.trim(),
  solution: `
function orangesRotting(grid) {
  const rows = grid.length
  const cols = grid[0].length
  const queue = []
  let fresh = 0, minutes = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c])
      if (grid[r][c] === 1) fresh++
    }
  }

  const directions = [[1,0], [-1,0], [0,1], [0,-1]]

  while (queue.length && fresh > 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const [r, c] = queue.shift()
      for (let [dr, dc] of directions) {
        const nr = r + dr, nc = c + dc
        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2
          fresh--
          queue.push([nr, nc])
        }
      }
    }
    minutes++
  }

  return fresh === 0 ? minutes : -1
}
`.trim()
}
,
// 🔗 Linked List Problems

{
  id: 'reverse-linked-list',
  title: 'Reverse a Linked List',
  description: 'Reverse a singly linked list.',
  difficulty: 'Easy',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
SET prev = null
WHILE head is not null
  SET next = head.next
  SET head.next = prev
  SET prev = head
  SET head = next
RETURN prev
`.trim(),
  solution: `
function reverseList(head) {
  let prev = null
  while (head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}
`.trim()
},

{
  id: 'find-middle-node',
  title: 'Find Middle of Linked List',
  description: 'Return the middle node of a linked list.',
  difficulty: 'Easy',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
USE slow and fast pointers
MOVE slow by 1 and fast by 2
WHEN fast reaches end, slow is middle
RETURN slow
`.trim(),
  solution: `
function findMiddle(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
`.trim()
},

{
  id: 'merge-two-sorted-lists',
  title: 'Merge Two Sorted Lists',
  description: 'Merge two sorted linked lists into one sorted list.',
  difficulty: 'Medium',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
CREATE dummy node
WHILE both lists not empty
  APPEND smaller node to tail
APPEND remaining nodes
RETURN dummy.next
`.trim(),
  solution: `
function mergeLists(l1, l2) {
  const dummy = { next: null }
  let tail = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  tail.next = l1 || l2
  return dummy.next
}
`.trim()
},

{
  id: 'remove-nth-from-end',
  title: 'Remove N-th Node from End',
  description: 'Remove the nth node from the end of the list.',
  difficulty: 'Medium',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
USE two pointers with gap of n
MOVE both until end
REMOVE node at slow pointer
`.trim(),
  solution: `
function removeNthFromEnd(head, n) {
  const dummy = { next: head }
  let first = dummy
  let second = dummy

  for (let i = 0; i <= n; i++) {
    first = first.next
  }

  while (first) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next
  return dummy.next
}
`.trim()
},

{
  id: 'detect-cycle',
  title: 'Detect Cycle in Linked List',
  description: 'Return true if the linked list has a cycle.',
  difficulty: 'Hard',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
USE slow and fast pointers
IF they meet, there is a cycle
ELSE if fast reaches null, no cycle
`.trim(),
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
  id: 'copy-random-list',
  title: 'Copy List with Random Pointer',
  description: 'Deep copy a linked list where each node has a random pointer.',
  difficulty: 'Hard',
  tags: ['Linked List'],
  examples: [],
  testCases: [],
  pseudocode: `
FOR each node
  CLONE it and insert next to original
SET random pointers for cloned nodes
SEPARATE original and clone lists
RETURN cloned head
`.trim(),
  solution: `
function copyRandomList(head) {
  if (!head) return null

  let curr = head
  while (curr) {
    const copy = { val: curr.val, next: curr.next, random: null }
    curr.next = copy
    curr = copy.next
  }

  curr = head
  while (curr) {
    if (curr.random) curr.next.random = curr.random.next
    curr = curr.next.next
  }

  curr = head
  const newHead = head.next
  while (curr) {
    const copy = curr.next
    curr.next = copy.next
    if (copy.next) copy.next = copy.next.next
    curr = curr.next
  }

  return newHead
}
`.trim()
}
,
// 🌳 Tree Problems

{
  id: 'max-depth-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  description: 'Return the maximum depth of a binary tree.',
  difficulty: 'Easy',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
IF root is null RETURN 0
RECURSE left and right
RETURN max(left, right) + 1
`.trim(),
  solution: `
function maxDepth(root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
`.trim()
},

{
  id: 'same-tree',
  title: 'Same Tree',
  description: 'Check if two binary trees are the same.',
  difficulty: 'Easy',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
IF both nodes are null RETURN true
IF one is null or values differ RETURN false
CHECK left and right subtrees recursively
`.trim(),
  solution: `
function isSameTree(p, q) {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
`.trim()
},

{
  id: 'invert-binary-tree',
  title: 'Invert Binary Tree',
  description: 'Invert a binary tree (mirror image).',
  difficulty: 'Medium',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
IF root is null RETURN null
SWAP left and right
RECURSE left and right
RETURN root
`.trim(),
  solution: `
function invertTree(root) {
  if (!root) return null
  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  return root
}
`.trim()
},

{
  id: 'level-order-traversal',
  title: 'Binary Tree Level Order Traversal',
  description: 'Return level order traversal of binary tree.',
  difficulty: 'Medium',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
USE queue
WHILE queue not empty
  PROCESS all nodes at current level
  ADD children to queue
`.trim(),
  solution: `
function levelOrder(root) {
  if (!root) return []
  const result = []
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
    result.push(level)
  }

  return result
}
`.trim()
},

{
  id: 'lowest-common-ancestor',
  title: 'Lowest Common Ancestor of BST',
  description: 'Find lowest common ancestor of two nodes in a BST.',
  difficulty: 'Hard',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
IF both nodes < root, SEARCH left
IF both nodes > root, SEARCH right
ELSE RETURN root
`.trim(),
  solution: `
function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
  return root
}
`.trim()
},

{
  id: 'serialize-deserialize-binary-tree',
  title: 'Serialize and Deserialize Binary Tree',
  description: 'Design an algorithm to serialize and deserialize a binary tree.',
  difficulty: 'Hard',
  tags: ['Tree'],
  examples: [],
  testCases: [],
  pseudocode: `
FOR serialize:
  DO preorder traversal
  ADD 'null' for empty nodes
FOR deserialize:
  USE queue and build tree recursively
`.trim(),
  solution: `
function serialize(root) {
  const result = []

  function dfs(node) {
    if (!node) {
      result.push('null')
      return
    }
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return result.join(',')
}

function deserialize(data) {
  const nodes = data.split(',')

  function build() {
    const val = nodes.shift()
    if (val === 'null') return null
    const node = { val: parseInt(val), left: null, right: null }
    node.left = build()
    node.right = build()
    return node
  }

  return build()
}
`.trim()
}
,
// 🌐 Graph Problems

{
  id: 'graph-valid-tree',
  title: 'Graph Valid Tree',
  description: 'Given n nodes labeled from 0 to n - 1, and a list of undirected edges, determine if the graph is a valid tree.',
  difficulty: 'Easy',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
IF number of edges != n - 1, RETURN false
BUILD adjacency list
PERFORM DFS
IF all nodes visited, RETURN true
`.trim(),
  solution: `
function validTree(n, edges) {
  if (edges.length !== n - 1) return false

  const adj = Array.from({ length: n }, () => [])
  for (const [a, b] of edges) {
    adj[a].push(b)
    adj[b].push(a)
  }

  const visited = new Set()

  function dfs(node, prev) {
    if (visited.has(node)) return false
    visited.add(node)
    for (let neighbor of adj[node]) {
      if (neighbor === prev) continue
      if (!dfs(neighbor, node)) return false
    }
    return true
  }

  return dfs(0, -1) && visited.size === n
}
`.trim()
},

{
  id: 'find-path-dfs',
  title: 'Find Path in Graph (DFS)',
  description: 'Given a graph, determine if a path exists between two nodes.',
  difficulty: 'Easy',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
BUILD adjacency list
USE DFS from source to target
RETURN true if target is found
`.trim(),
  solution: `
function hasPath(edges, source, target) {
  const graph = {}

  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  const visited = new Set()

  function dfs(node) {
    if (node === target) return true
    if (visited.has(node)) return false
    visited.add(node)
    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true
    }
    return false
  }

  return dfs(source)
}
`.trim()
},

{
  id: 'clone-graph',
  title: 'Clone Graph',
  description: 'Clone an undirected graph where each node contains a value and a list of neighbors.',
  difficulty: 'Medium',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
USE DFS and a map to store cloned nodes
FOR each node, copy value and neighbors recursively
RETURN cloned root
`.trim(),
  solution: `
function cloneGraph(node, visited = new Map()) {
  if (!node) return null
  if (visited.has(node)) return visited.get(node)

  const copy = { val: node.val, neighbors: [] }
  visited.set(node, copy)

  for (const neighbor of node.neighbors) {
    copy.neighbors.push(cloneGraph(neighbor, visited))
  }

  return copy
}
`.trim()
},

{
  id: 'number-of-islands',
  title: 'Number of Islands',
  description: 'Given a 2D grid, count the number of islands (connected 1s).',
  difficulty: 'Medium',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
TRAVERSE grid
WHEN land is found, PERFORM DFS to sink island
INCREMENT count
`.trim(),
  solution: `
function numIslands(grid) {
  let count = 0
  const rows = grid.length
  const cols = grid[0].length

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') return
    grid[r][c] = '0'
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
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
  id: 'course-schedule',
  title: 'Course Schedule (Topological Sort)',
  description: 'Determine if you can finish all courses given prerequisites.',
  difficulty: 'Hard',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
BUILD adjacency list and in-degree map
USE queue to process zero in-degree nodes
IF processed count equals total, RETURN true
`.trim(),
  solution: `
function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => [])
  const inDegree = Array(numCourses).fill(0)

  for (const [a, b] of prerequisites) {
    graph[b].push(a)
    inDegree[a]++
  }

  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  let count = 0
  while (queue.length) {
    const course = queue.shift()
    count++
    for (const next of graph[course]) {
      inDegree[next]--
      if (inDegree[next] === 0) queue.push(next)
    }
  }

  return count === numCourses
}
`.trim()
},

{
  id: 'alien-dictionary',
  title: 'Alien Dictionary',
  description: 'Given a sorted alien dictionary, return the order of letters.',
  difficulty: 'Hard',
  tags: ['Graph'],
  examples: [],
  testCases: [],
  pseudocode: `
BUILD graph from character pairs
COMPUTE in-degree for topological sort
PERFORM BFS
IF all letters in result, RETURN order
ELSE RETURN ""
`.trim(),
  solution: `
function alienOrder(words) {
  const graph = {}
  const inDegree = {}

  for (const word of words) {
    for (const char of word) {
      graph[char] = new Set()
      inDegree[char] = 0
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [w1, w2] = [words[i], words[i + 1]]
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const [c1, c2] = [w1[j], w2[j]]
      if (c1 !== c2) {
        if (!graph[c1].has(c2)) {
          graph[c1].add(c2)
          inDegree[c2]++
        }
        break
      }
    }
  }

  const queue = []
  for (const char in inDegree) {
    if (inDegree[char] === 0) queue.push(char)
  }

  let result = ""
  while (queue.length) {
    const char = queue.shift()
    result += char
    for (const neighbor of graph[char]) {
      inDegree[neighbor]--
      if (inDegree[neighbor] === 0) queue.push(neighbor)
    }
  }

  return result.length === Object.keys(inDegree).length ? result : ""
}
`.trim()
}
,
// 🧩 Hashing Problems

{
  id: 'first-unique-character',
  title: 'First Unique Character in a String',
  description: 'Return the index of the first non-repeating character.',
  difficulty: 'Easy',
  tags: ['Hashing'],
  examples: [
    { input: '"leetcode"', output: '0' },
    { input: '"loveleetcode"', output: '2' }
  ],
  testCases: [
    { input: ['leetcode'], expected: 0 },
    { input: ['loveleetcode'], expected: 2 }
  ],
  pseudocode: `
CREATE a hash map to count characters
TRAVERSE string and return first index with count 1
`.trim(),
  solution: `
function firstUniqChar(s) {
  const map = {}

  for (const char of s) {
    map[char] = (map[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i
  }

  return -1
}
`.trim()
},

{
  id: 'are-anagrams',
  title: 'Valid Anagram',
  description: 'Check if two strings are anagrams of each other.',
  difficulty: 'Easy',
  tags: ['Hashing'],
  examples: [
    { input: '"anagram", "nagaram"', output: 'true' },
    { input: '"rat", "car"', output: 'false' }
  ],
  testCases: [
    { input: ['anagram', 'nagaram'], expected: true },
    { input: ['rat', 'car'], expected: false }
  ],
  pseudocode: `
IF lengths differ RETURN false
COUNT characters in both strings
COMPARE counts
`.trim(),
  solution: `
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (const char of s) {
    count[char] = (count[char] || 0) + 1
  }

  for (const char of t) {
    if (!count[char]) return false
    count[char]--
  }

  return true
}
`.trim()
},

{
  id: 'two-sum',
  title: 'Two Sum',
  description: 'Find indices of two numbers that add up to a target.',
  difficulty: 'Medium',
  tags: ['Hashing'],
  examples: [
    { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' }
  ],
  testCases: [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] }
  ],
  pseudocode: `
CREATE hash map to store number:index
FOR each number
  CALCULATE complement
  IF complement in map RETURN [map[complement], current index]
`.trim(),
  solution: `
function twoSum(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
}
`.trim()
},

{
  id: 'group-anagrams',
  title: 'Group Anagrams',
  description: 'Group strings that are anagrams of each other.',
  difficulty: 'Medium',
  tags: ['Hashing'],
  examples: [],
  testCases: [],
  pseudocode: `
FOR each word
  SORT characters as key
  GROUP words in a hash map using sorted key
RETURN grouped values
`.trim(),
  solution: `
function groupAnagrams(strs) {
  const map = {}

  for (const str of strs) {
    const key = str.split('').sort().join('')
    if (!map[key]) map[key] = []
    map[key].push(str)
  }

  return Object.values(map)
}
`.trim()
},

{
  id: 'longest-consecutive-sequence',
  title: 'Longest Consecutive Sequence',
  description: 'Find the length of the longest sequence of consecutive integers.',
  difficulty: 'Hard',
  tags: ['Hashing'],
  examples: [
    { input: '[100, 4, 200, 1, 3, 2]', output: '4' }
  ],
  testCases: [
    { input: [[100, 4, 200, 1, 3, 2]], expected: 4 }
  ],
  pseudocode: `
PUT all numbers in a set
FOR each number
  IF number - 1 not in set, it's start of sequence
  COUNT how long the streak is
UPDATE longest
`.trim(),
  solution: `
function longestConsecutive(nums) {
  const set = new Set(nums)
  let longest = 0

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let current = num
      let streak = 1
      while (set.has(current + 1)) {
        current++
        streak++
      }
      longest = Math.max(longest, streak)
    }
  }

  return longest
}
`.trim()
},

{
  id: 'substring-with-concat-all-words',
  title: 'Substring with Concatenation of All Words',
  description: 'Find starting indices of substrings that are a concatenation of all words.',
  difficulty: 'Hard',
  tags: ['Hashing'],
  examples: [],
  testCases: [],
  pseudocode: `
CALCULATE word length and total length
USE sliding window
CHECK if word frequency matches target map
`.trim(),
  solution: `
function findSubstring(s, words) {
  const wordLen = words[0].length
  const totalLen = wordLen * words.length
  const wordMap = {}
  const result = []

  for (const word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1
  }

  for (let i = 0; i <= s.length - totalLen; i++) {
    const seen = {}
    let j = 0
    while (j < words.length) {
      const word = s.substr(i + j * wordLen, wordLen)
      if (!wordMap[word]) break
      seen[word] = (seen[word] || 0) + 1
      if (seen[word] > wordMap[word]) break
      j++
    }
    if (j === words.length) result.push(i)
  }

  return result
}
`.trim()
}
,
// 🔍 Searching Problems

{
  id: 'linear-search',
  title: 'Linear Search',
  description: 'Search for a target in an array using linear search.',
  difficulty: 'Easy',
  tags: ['Searching'],
  examples: [
    { input: '[4, 2, 5, 7], target = 5', output: '2' }
  ],
  testCases: [
    { input: [[4, 2, 5, 7], 5], expected: 2 }
  ],
  pseudocode: `
FOR each index in array
  IF element equals target
    RETURN index
RETURN -1
`.trim(),
  solution: `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}
`.trim()
},

{
  id: 'binary-search',
  title: 'Binary Search',
  description: 'Search for a target in a sorted array using binary search.',
  difficulty: 'Easy',
  tags: ['Searching'],
  examples: [
    { input: '[1, 2, 3, 4, 5], target = 4', output: '3' }
  ],
  testCases: [
    { input: [[1, 2, 3, 4, 5], 4], expected: 3 }
  ],
  pseudocode: `
SET left = 0, right = array length - 1
WHILE left <= right
  SET mid = floor((left + right) / 2)
  IF mid equals target RETURN mid
  ELSE IF mid > target, search left
  ELSE search right
RETURN -1
`.trim(),
  solution: `
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }

  return -1
}
`.trim()
},

{
  id: 'search-in-rotated-array',
  title: 'Search in Rotated Sorted Array',
  description: 'Search for a target in a rotated sorted array.',
  difficulty: 'Medium',
  tags: ['Searching'],
  examples: [
    { input: '[4,5,6,7,0,1,2], target = 0', output: '4' }
  ],
  testCases: [
    { input: [[4,5,6,7,0,1,2], 0], expected: 4 }
  ],
  pseudocode: `
USE binary search with conditions
CHECK which side is sorted
Narrow search to sorted half
`.trim(),
  solution: `
function searchRotated(nums, target) {
  let left = 0, right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
`.trim()
},

{
  id: 'search-in-matrix',
  title: 'Search in 2D Matrix',
  description: 'Search for a target in a sorted 2D matrix.',
  difficulty: 'Medium',
  tags: ['Searching'],
  examples: [
    { input: '[[1,3,5],[7,9,11]], target = 9', output: 'true' }
  ],
  testCases: [
    { input: [[[1,3,5],[7,9,11]], 9], expected: true }
  ],
  pseudocode: `
TREAT matrix as 1D array
PERFORM binary search
CONVERT mid index to row and col
`.trim(),
  solution: `
function searchMatrix(matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length
  let left = 0, right = rows * cols - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let r = Math.floor(mid / cols)
    let c = mid % cols
    if (matrix[r][c] === target) return true
    if (matrix[r][c] < target) left = mid + 1
    else right = mid - 1
  }

  return false
}
`.trim()
},

{
  id: 'find-min-rotated-array',
  title: 'Find Minimum in Rotated Sorted Array',
  description: 'Return the minimum element in a rotated sorted array.',
  difficulty: 'Hard',
  tags: ['Searching'],
  examples: [
    { input: '[3,4,5,1,2]', output: '1' }
  ],
  testCases: [
    { input: [[3,4,5,1,2]], expected: 1 }
  ],
  pseudocode: `
USE binary search
COMPARE mid with right
IF mid > right, min is in right half
ELSE min is in left half
`.trim(),
  solution: `
function findMin(nums) {
  let left = 0, right = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}
`.trim()
},

{
  id: 'median-two-sorted-arrays',
  title: 'Median of Two Sorted Arrays',
  description: 'Find the median of two sorted arrays in logarithmic time.',
  difficulty: 'Hard',
  tags: ['Searching'],
  examples: [],
  testCases: [],
  pseudocode: `
APPLY binary search on smaller array
PARTITION arrays to left and right halves
CHECK if leftMax <= rightMin
COMPUTE median accordingly
`.trim(),
  solution: `
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const m = nums1.length, n = nums2.length
  let left = 0, right = m

  while (left <= right) {
    const i = Math.floor((left + right) / 2)
    const j = Math.floor((m + n + 1) / 2) - i

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1]
    const minRightA = i === m ? Infinity : nums1[i]
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1]
    const minRightB = j === n ? Infinity : nums2[j]

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
      } else {
        return Math.max(maxLeftA, maxLeftB)
      }
    } else if (maxLeftA > minRightB) {
      right = i - 1
    } else {
      left = i + 1
    }
  }
}
`.trim()
}
,
// 🔃 Sorting Problems

{
  id: 'sort-numbers-asc',
  title: 'Sort Numbers Ascending',
  description: 'Sort an array of numbers in ascending order.',
  difficulty: 'Easy',
  tags: ['Sorting'],
  examples: [
    { input: '[5, 1, 3, 2]', output: '[1, 2, 3, 5]' }
  ],
  testCases: [
    { input: [[5, 1, 3, 2]], expected: [1, 2, 3, 5] }
  ],
  pseudocode: `
USE built-in sort function with compare callback
RETURN sorted array
`.trim(),
  solution: `
function sortAscending(arr) {
  return arr.sort((a, b) => a - b)
}
`.trim()
},

{
  id: 'sort-strings-alpha',
  title: 'Sort Strings Alphabetically',
  description: 'Sort an array of strings in alphabetical order.',
  difficulty: 'Easy',
  tags: ['Sorting'],
  examples: [
    { input: '["banana", "apple", "cherry"]', output: '["apple", "banana", "cherry"]' }
  ],
  testCases: [
    { input: [["banana", "apple", "cherry"]], expected: ["apple", "banana", "cherry"] }
  ],
  pseudocode: `
USE sort() without arguments
RETURN sorted array
`.trim(),
  solution: `
function sortStrings(arr) {
  return arr.sort()
}
`.trim()
},

{
  id: 'insertion-sort',
  title: 'Insertion Sort',
  description: 'Sort an array using the insertion sort algorithm.',
  difficulty: 'Medium',
  tags: ['Sorting'],
  examples: [
    { input: '[4, 3, 1]', output: '[1, 3, 4]' }
  ],
  testCases: [
    { input: [[4, 3, 1]], expected: [1, 3, 4] }
  ],
  pseudocode: `
FOR i from 1 to end
  SET key = arr[i]
  COMPARE key with sorted part
  SHIFT elements to right
  INSERT key in correct position
`.trim(),
  solution: `
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}
`.trim()
},

{
  id: 'merge-sort',
  title: 'Merge Sort',
  description: 'Sort an array using merge sort.',
  difficulty: 'Medium',
  tags: ['Sorting'],
  examples: [
    { input: '[3, 5, 1, 4]', output: '[1, 3, 4, 5]' }
  ],
  testCases: [
    { input: [[3, 5, 1, 4]], expected: [1, 3, 4, 5] }
  ],
  pseudocode: `
DIVIDE array into halves
RECURSIVELY sort each half
MERGE two sorted halves
`.trim(),
  solution: `
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  const result = []
  let i = 0, j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}
`.trim()
},

{
  id: 'quick-sort',
  title: 'Quick Sort',
  description: 'Sort an array using quick sort.',
  difficulty: 'Hard',
  tags: ['Sorting'],
  examples: [
    { input: '[5, 2, 1, 8]', output: '[1, 2, 5, 8]' }
  ],
  testCases: [
    { input: [[5, 2, 1, 8]], expected: [1, 2, 5, 8] }
  ],
  pseudocode: `
IF array length <= 1, RETURN array
SELECT pivot
PARTITION into left and right
RECURSIVELY sort both parts
RETURN combined result
`.trim(),
  solution: `
function quickSort(arr) {
  if (arr.length <= 1) return arr

  const pivot = arr[0]
  const left = arr.slice(1).filter(x => x < pivot)
  const right = arr.slice(1).filter(x => x >= pivot)

  return [...quickSort(left), pivot, ...quickSort(right)]
}
`.trim()
},

{
  id: 'count-inversions',
  title: 'Count Inversions in Array',
  description: 'Count how many pairs (i, j) where i < j and arr[i] > arr[j].',
  difficulty: 'Hard',
  tags: ['Sorting'],
  examples: [
    { input: '[2, 4, 1, 3, 5]', output: '3' }
  ],
  testCases: [
    { input: [[2, 4, 1, 3, 5]], expected: 3 }
  ],
  pseudocode: `
MODIFY merge sort to count inversions
IF left[i] > right[j], ADD (left.length - i) to count
MERGE sorted arrays and RETURN count
`.trim(),
  solution: `
function countInversions(arr) {
  function mergeSort(arr) {
    if (arr.length <= 1) return { sorted: arr, count: 0 }

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    const merged = []
    let i = 0, j = 0, inv = left.count + right.count

    while (i < left.sorted.length && j < right.sorted.length) {
      if (left.sorted[i] <= right.sorted[j]) {
        merged.push(left.sorted[i++])
      } else {
        merged.push(right.sorted[j++])
        inv += left.sorted.length - i
      }
    }

    return {
      sorted: merged.concat(left.sorted.slice(i)).concat(right.sorted.slice(j)),
      count: inv
    }
  }

  return mergeSort(arr).count
}
`.trim()
}
,
// 🔁 Recursion Problems

{
  id: 'factorial-recursive',
  title: 'Factorial (Recursive)',
  description: 'Calculate the factorial of a number using recursion.',
  difficulty: 'Easy',
  tags: ['Recursion'],
  examples: [
    { input: '5', output: '120' }
  ],
  testCases: [
    { input: [5], expected: 120 }
  ],
  pseudocode: `
IF n <= 1 RETURN 1
RETURN n * factorial(n - 1)
`.trim(),
  solution: `
function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
`.trim()
},

{
  id: 'fibonacci-recursive',
  title: 'Fibonacci (Recursive)',
  description: 'Return the n-th Fibonacci number using recursion.',
  difficulty: 'Easy',
  tags: ['Recursion'],
  examples: [
    { input: '6', output: '8' }
  ],
  testCases: [
    { input: [6], expected: 8 }
  ],
  pseudocode: `
IF n <= 1 RETURN n
RETURN fib(n - 1) + fib(n - 2)
`.trim(),
  solution: `
function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}
`.trim()
},

{
  id: 'power-function',
  title: 'Power Function',
  description: 'Calculate x raised to the power n (x^n) using recursion.',
  difficulty: 'Medium',
  tags: ['Recursion'],
  examples: [
    { input: '2, 10', output: '1024' }
  ],
  testCases: [
    { input: [2, 10], expected: 1024 }
  ],
  pseudocode: `
IF n == 0 RETURN 1
IF n < 0 RETURN 1 / power(x, -n)
IF n is even RETURN power(x*x, n/2)
ELSE RETURN x * power(x, n - 1)
`.trim(),
  solution: `
function power(x, n) {
  if (n === 0) return 1
  if (n < 0) return 1 / power(x, -n)
  if (n % 2 === 0) return power(x * x, n / 2)
  return x * power(x, n - 1)
}
`.trim()
},

{
  id: 'sum-of-digits',
  title: 'Sum of Digits',
  description: 'Return the sum of digits of a number using recursion.',
  difficulty: 'Medium',
  tags: ['Recursion'],
  examples: [
    { input: '1234', output: '10' }
  ],
  testCases: [
    { input: [1234], expected: 10 }
  ],
  pseudocode: `
IF n == 0 RETURN 0
RETURN (n % 10) + sumOfDigits(n / 10)
`.trim(),
  solution: `
function sumOfDigits(n) {
  if (n === 0) return 0
  return (n % 10) + sumOfDigits(Math.floor(n / 10))
}
`.trim()
},

{
  id: 'generate-subsets',
  title: 'Generate All Subsets',
  description: 'Return all subsets of a given array.',
  difficulty: 'Hard',
  tags: ['Recursion'],
  examples: [
    { input: '[1, 2]', output: '[[], [1], [2], [1,2]]' }
  ],
  testCases: [
    { input: [[1, 2]], expected: [[], [1], [2], [1,2]] }
  ],
  pseudocode: `
USE backtracking
FOR each element
  INCLUDE it in path
  RECURSE
  EXCLUDE it (backtrack)
`.trim(),
  solution: `
function subsets(nums) {
  const result = []

  function backtrack(start, path) {
    result.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }

  backtrack(0, [])
  return result
}
`.trim()
},

{
  id: 'generate-permutations',
  title: 'Generate Permutations',
  description: 'Return all permutations of a given array.',
  difficulty: 'Hard',
  tags: ['Recursion'],
  examples: [
    { input: '[1, 2, 3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' }
  ],
  testCases: [
    { input: [[1, 2, 3]], expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] }
  ],
  pseudocode: `
USE backtracking
SWAP elements to generate permutations
RECURSE for next index
SWAP back (backtrack)
`.trim(),
  solution: `
function permute(nums) {
  const result = []

  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums])
      return
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]
      backtrack(start + 1)
      [nums[start], nums[i]] = [nums[i], nums[start]]
    }
  }

  backtrack(0)
  return result
}
`.trim()
}
,
// 💰 Greedy Problems

{
  id: 'maximum-units-on-truck',
  title: 'Maximum Units on a Truck',
  description: 'Choose boxes to put on a truck to maximize the number of units.',
  difficulty: 'Easy',
  tags: ['Greedy'],
  examples: [],
  testCases: [],
  pseudocode: `
SORT boxTypes by units per box (descending)
FOR each type
  LOAD as many boxes as possible
  UPDATE total units
`.trim(),
  solution: `
function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let units = 0

  for (const [count, unit] of boxTypes) {
    const boxes = Math.min(count, truckSize)
    units += boxes * unit
    truckSize -= boxes
    if (truckSize === 0) break
  }

  return units
}
`.trim()
},

{
  id: 'assign-cookies',
  title: 'Assign Cookies',
  description: 'Assign cookies to children to maximize content children.',
  difficulty: 'Easy',
  tags: ['Greedy'],
  examples: [],
  testCases: [],
  pseudocode: `
SORT greed and cookies
FOR each child, find smallest cookie that fits
`.trim(),
  solution: `
function findContentChildren(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let i = 0, j = 0

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) i++
    j++
  }

  return i
}
`.trim()
},

{
  id: 'jump-game',
  title: 'Jump Game',
  description: 'Determine if you can reach the last index of the array.',
  difficulty: 'Medium',
  tags: ['Greedy'],
  examples: [
    { input: '[2,3,1,1,4]', output: 'true' }
  ],
  testCases: [
    { input: [[2,3,1,1,4]], expected: true }
  ],
  pseudocode: `
SET maxReach = 0
FOR each index
  IF index > maxReach RETURN false
  UPDATE maxReach to max(maxReach, i + nums[i])
RETURN true
`.trim(),
  solution: `
function canJump(nums) {
  let maxReach = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false
    maxReach = Math.max(maxReach, i + nums[i])
  }

  return true
}
`.trim()
},

{
  id: 'non-overlapping-intervals',
  title: 'Non-overlapping Intervals',
  description: 'Remove the minimum number of overlapping intervals.',
  difficulty: 'Medium',
  tags: ['Greedy'],
  examples: [],
  testCases: [],
  pseudocode: `
SORT intervals by end time
KEEP track of previous end
REMOVE if current start < prev end
`.trim(),
  solution: `
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 0
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++
    } else {
      end = intervals[i][1]
    }
  }

  return count
}
`.trim()
},

{
  id: 'minimum-number-of-arrows',
  title: 'Minimum Number of Arrows to Burst Balloons',
  description: 'Find the minimum number of arrows needed to burst all balloons.',
  difficulty: 'Hard',
  tags: ['Greedy'],
  examples: [],
  testCases: [],
  pseudocode: `
SORT balloons by end
USE one arrow for overlapping balloons
INCREMENT arrow when non-overlapping found
`.trim(),
  solution: `
function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1])
  let arrows = 1
  let end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++
      end = points[i][1]
    }
  }

  return arrows
}
`.trim()
},

{
  id: 'greedy-scheduling',
  title: 'Greedy Job Scheduling for Max Profit',
  description: 'Schedule jobs to maximize total profit.',
  difficulty: 'Hard',
  tags: ['Greedy'],
  examples: [],
  testCases: [],
  pseudocode: `
SORT jobs by profit descending
FOR each job, find latest available time before deadline
ASSIGN if slot available
`.trim(),
  solution: `
function jobScheduling(jobs) {
  jobs.sort((a, b) => b.profit - a.profit)
  const maxDeadline = Math.max(...jobs.map(j => j.deadline))
  const slots = Array(maxDeadline).fill(false)
  let total = 0

  for (const job of jobs) {
    for (let d = job.deadline - 1; d >= 0; d--) {
      if (!slots[d]) {
        slots[d] = true
        total += job.profit
        break
      }
    }
  }

  return total
}
`.trim()
}
,
// 🧭 Backtracking Problems

{
  id: 'subset-sum-equal-k',
  title: 'Subset Sum Equals K',
  description: 'Determine if there is a subset of numbers that adds up to target K.',
  difficulty: 'Easy',
  tags: ['Backtracking'],
  examples: [
    { input: '[1, 2, 3, 7], k = 6', output: 'true' }
  ],
  testCases: [
    { input: [[1, 2, 3, 7], 6], expected: true }
  ],
  pseudocode: `
TRY including or excluding each number
IF current sum equals target RETURN true
RECURSE with next index
`.trim(),
  solution: `
function subsetSum(nums, k) {
  function backtrack(i, sum) {
    if (sum === k) return true
    if (i >= nums.length || sum > k) return false
    return backtrack(i + 1, sum + nums[i]) || backtrack(i + 1, sum)
  }
  return backtrack(0, 0)
}
`.trim()
},

{
  id: 'generate-balanced-parentheses',
  title: 'Generate Balanced Parentheses',
  description: 'Generate all combinations of n pairs of balanced parentheses.',
  difficulty: 'Easy',
  tags: ['Backtracking'],
  examples: [
    { input: 'n = 2', output: '["(())", "()()"]' }
  ],
  testCases: [
    { input: [2], expected: ["(())", "()()"] }
  ],
  pseudocode: `
START with empty string
ADD "(" if open < n
ADD ")" if close < open
RECURSE until length = 2n
`.trim(),
  solution: `
function generateParentheses(n) {
  const result = []

  function backtrack(open, close, current) {
    if (current.length === 2 * n) {
      result.push(current)
      return
    }

    if (open < n) backtrack(open + 1, close, current + "(")
    if (close < open) backtrack(open, close + 1, current + ")")
  }

  backtrack(0, 0, "")
  return result
}
`.trim()
},

{
  id: 'word-search',
  title: 'Word Search in 2D Grid',
  description: 'Check if a word exists in a 2D board.',
  difficulty: 'Medium',
  tags: ['Backtracking'],
  examples: [],
  testCases: [],
  pseudocode: `
FOR each cell
  IF char matches, explore neighbors
  MARK visited temporarily
  BACKTRACK if not found
`.trim(),
  solution: `
function exist(board, word) {
  const rows = board.length
  const cols = board[0].length

  function backtrack(r, c, i) {
    if (i === word.length) return true
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false

    const temp = board[r][c]
    board[r][c] = '#'

    const found = backtrack(r+1, c, i+1) ||
                  backtrack(r-1, c, i+1) ||
                  backtrack(r, c+1, i+1) ||
                  backtrack(r, c-1, i+1)

    board[r][c] = temp
    return found
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) return true
    }
  }

  return false
}
`.trim()
},

{
  id: 'combination-sum',
  title: 'Combination Sum',
  description: 'Return all unique combinations that sum up to target.',
  difficulty: 'Medium',
  tags: ['Backtracking'],
  examples: [],
  testCases: [],
  pseudocode: `
FOR each candidate
  IF sum <= target, ADD to path
  RECURSE with same or next index
  BACKTRACK by removing last
`.trim(),
  solution: `
function combinationSum(candidates, target) {
  const result = []

  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path])
      return
    }
    if (sum > target) return

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      backtrack(i, path, sum + candidates[i])
      path.pop()
    }
  }

  backtrack(0, [], 0)
  return result
}
`.trim()
},

{
  id: 'n-queens',
  title: 'N-Queens Problem',
  description: 'Place N queens on an N×N board such that no two queens threaten each other.',
  difficulty: 'Hard',
  tags: ['Backtracking'],
  examples: [],
  testCases: [],
  pseudocode: `
TRY placing queen in each column
CHECK if position is safe
IF safe, place and RECURSE to next row
REMOVE queen (backtrack) if needed
`.trim(),
  solution: `
function solveNQueens(n) {
  const result = []
  const board = Array.from({ length: n }, () => Array(n).fill('.'))

  function isSafe(r, c) {
    for (let i = 0; i < r; i++) {
      if (board[i][c] === 'Q') return false
      if (c - (r - i) >= 0 && board[i][c - (r - i)] === 'Q') return false
      if (c + (r - i) < n && board[i][c + (r - i)] === 'Q') return false
    }
    return true
  }

  function backtrack(r) {
    if (r === n) {
      result.push(board.map(row => row.join('')))
      return
    }

    for (let c = 0; c < n; c++) {
      if (isSafe(r, c)) {
        board[r][c] = 'Q'
        backtrack(r + 1)
        board[r][c] = '.'
      }
    }
  }

  backtrack(0)
  return result
}
`.trim()
},

{
  id: 'sudoku-solver',
  title: 'Sudoku Solver',
  description: 'Solve a partially filled Sudoku board using backtracking.',
  difficulty: 'Hard',
  tags: ['Backtracking'],
  examples: [],
  testCases: [],
  pseudocode: `
FIND next empty cell
TRY placing 1 to 9
CHECK if valid in row, col, box
RECURSE if valid, BACKTRACK if not
`.trim(),
  solution: `
function solveSudoku(board) {
  function isValid(r, c, num) {
    const boxRow = Math.floor(r / 3) * 3
    const boxCol = Math.floor(c / 3) * 3
    for (let i = 0; i < 9; i++) {
      if (board[r][i] == num || board[i][c] == num) return false
      const row = boxRow + Math.floor(i / 3)
      const col = boxCol + i % 3
      if (board[row][col] == num) return false
    }
    return true
  }

  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(r, c, num.toString())) {
              board[r][c] = num.toString()
              if (solve()) return true
              board[r][c] = '.'
            }
          }
          return false
        }
      }
    }
    return true
  }

  solve()
}
`.trim()
}
,
// 🧮 Dynamic Programming Problems

{
  id: 'fibonacci-dp',
  title: 'Fibonacci (DP)',
  description: 'Return the n-th Fibonacci number using bottom-up DP.',
  difficulty: 'Easy',
  tags: ['Dynamic Programming'],
  examples: [
    { input: '6', output: '8' }
  ],
  testCases: [
    { input: [6], expected: 8 }
  ],
  pseudocode: `
INITIALIZE dp[0] = 0, dp[1] = 1
FOR i from 2 to n
  dp[i] = dp[i-1] + dp[i-2]
RETURN dp[n]
`.trim(),
  solution: `
function fib(n) {
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
  id: 'climb-stairs',
  title: 'Climbing Stairs',
  description: 'You can climb 1 or 2 steps. How many ways to reach the top?',
  difficulty: 'Easy',
  tags: ['Dynamic Programming'],
  examples: [
    { input: '3', output: '3' }
  ],
  testCases: [
    { input: [3], expected: 3 }
  ],
  pseudocode: `
INITIALIZE dp[0] = 1, dp[1] = 1
FOR i from 2 to n
  dp[i] = dp[i-1] + dp[i-2]
RETURN dp[n]
`.trim(),
  solution: `
function climbStairs(n) {
  if (n <= 1) return 1
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
`.trim()
},

{
  id: 'house-robber',
  title: 'House Robber',
  description: 'Maximize the amount of money you can rob without robbing two adjacent houses.',
  difficulty: 'Medium',
  tags: ['Dynamic Programming'],
  examples: [
    { input: '[2,7,9,3,1]', output: '12' }
  ],
  testCases: [
    { input: [[2,7,9,3,1]], expected: 12 }
  ],
  pseudocode: `
dp[i] = max(dp[i-1], dp[i-2] + nums[i])
`.trim(),
  solution: `
function rob(nums) {
  const n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[n - 1]
}
`.trim()
},

{
  id: 'unique-paths',
  title: 'Unique Paths in Grid',
  description: 'How many unique paths from top-left to bottom-right in a grid?',
  difficulty: 'Medium',
  tags: ['Dynamic Programming'],
  examples: [
    { input: 'm = 3, n = 7', output: '28' }
  ],
  testCases: [
    { input: [3, 7], expected: 28 }
  ],
  pseudocode: `
INITIALIZE dp[m][n] = 1 on last row and column
FILL rest with dp[i][j] = dp[i+1][j] + dp[i][j+1]
RETURN dp[0][0]
`.trim(),
  solution: `
function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(1))
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
    }
  }
  return dp[0][0]
}
`.trim()
},

{
  id: 'edit-distance',
  title: 'Edit Distance',
  description: 'Find the minimum number of operations to convert word1 to word2.',
  difficulty: 'Hard',
  tags: ['Dynamic Programming'],
  examples: [
    { input: 'word1 = "horse", word2 = "ros"', output: '3' }
  ],
  testCases: [
    { input: ["horse", "ros"], expected: 3 }
  ],
  pseudocode: `
CREATE dp matrix [m+1][n+1]
FILL first row and column with base cases
FOR each cell, compute min(insert, delete, replace)
RETURN dp[m][n]
`.trim(),
  solution: `
function minDistance(word1, word2) {
  const m = word1.length, n = word2.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }

  return dp[m][n]
}
`.trim()
},

{
  id: 'palindrome-partitioning-ii',
  title: 'Palindrome Partitioning II',
  description: 'Partition a string such that every substring is a palindrome and minimize cuts.',
  difficulty: 'Hard',
  tags: ['Dynamic Programming'],
  examples: [],
  testCases: [],
  pseudocode: `
BUILD isPalindrome table
dp[i] = min cuts to partition s[0..i]
TRY all possible partitions ending at i
`.trim(),
  solution: `
function minCut(s) {
  const n = s.length
  const dp = Array(n).fill(0)
  const isPal = Array.from({ length: n }, () => Array(n).fill(false))

  for (let end = 0; end < n; end++) {
    let minCut = end
    for (let start = 0; start <= end; start++) {
      if (s[start] === s[end] && (end - start <= 1 || isPal[start + 1][end - 1])) {
        isPal[start][end] = true
        minCut = start === 0 ? 0 : Math.min(minCut, dp[start - 1] + 1)
      }
    }
    dp[end] = minCut
  }

  return dp[n - 1]
}
`.trim()
}
,
// ⛓️ Blockchain Problems

{
  id: 'simple-hash-generator',
  title: 'Simple Hash Generator',
  description: 'Return the SHA-256 hash of a given string.',
  difficulty: 'Easy',
  tags: ['Blockchain'],
  examples: [
    { input: '"hello"', output: '"2cf24dba5fb0a..." (starts with)"' }
  ],
  testCases: [
    {
      input: ['hello'],
      expected: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
    }
  ],
  pseudocode: `
USE crypto library
RETURN SHA-256 hash of input string
`.trim(),
  solution: `
async function generateHash(message) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
`.trim()
},
{
  id: 'block-hash-comparison',
  title: 'Compare Block Hashes',
  description: 'Compare two blocks and detect if they have identical content.',
  difficulty: 'Easy',
  tags: ['Blockchain'],
  examples: [
    { input: 'two identical block objects', output: 'true' }
  ],
  testCases: [
    {
      input: [
        { index: 1, data: 'A', previousHash: '0', timestamp: 123456 },
        { index: 1, data: 'A', previousHash: '0', timestamp: 123456 }
      ],
      expected: true
    }
  ],
  pseudocode: `
HASH both block objects (stringified)
RETURN true if hashes match
`.trim(),
  solution: `
async function compareBlocks(blockA, blockB) {
  const hashA = await generateHash(JSON.stringify(blockA))
  const hashB = await generateHash(JSON.stringify(blockB))
  return hashA === hashB
}
`.trim()
},
{
  id: 'create-genesis-block',
  title: 'Create Genesis Block',
  description: 'Return the first block in a blockchain.',
  difficulty: 'Medium',
  tags: ['Blockchain'],
  examples: [
    { input: '()', output: '{ index: 0, data: "Genesis Block", previousHash: "0", hash: "..."}' }
  ],
  testCases: [
    {
      input: [],
      expected: {
        index: 0,
        data: 'Genesis Block',
        previousHash: '0',
        timestamp: 1234567890000, // Use fixed value in solution for test
        hash: 'mocked' // Cannot compare hash without mock
      }
    }
  ],
  pseudocode: `
SET index = 0
SET timestamp to now
SET data to "Genesis Block"
SET previousHash to "0"
CALCULATE hash of block
RETURN block
`.trim(),
  solution: `
async function createGenesisBlock() {
  const block = {
    index: 0,
    timestamp: 1234567890000, // Fixed for test case
    data: 'Genesis Block',
    previousHash: '0'
  }
  block.hash = await generateHash(JSON.stringify(block))
  return block
}
`.trim()
},
{
  id: 'proof-of-work',
  title: 'Simple Proof of Work',
  description: 'Find a nonce such that hash of (data + nonce) starts with leading zeros.',
  difficulty: 'Medium',
  tags: ['Blockchain'],
  examples: [
    { input: '"abc", difficulty = 2', output: 'nonce that leads to hash starting with "00"' }
  ],
  testCases: [
    {
      input: ['abc', 2],
      expectedStartsWith: '00' // You can test the hash output of abc + nonce
    }
  ],
  pseudocode: `
START nonce at 0
LOOP until hash starts with "00"
RETURN nonce
`.trim(),
  solution: `
async function proofOfWork(data, difficulty = 2) {
  let nonce = 0
  const prefix = '0'.repeat(difficulty)
  while (true) {
    const attempt = data + nonce
    const hash = await generateHash(attempt)
    if (hash.startsWith(prefix)) return nonce
    nonce++
  }
}
`.trim()
},
{
  id: 'validate-blockchain',
  title: 'Validate Blockchain Chain',
  description: 'Check if a blockchain is valid by verifying hashes and links.',
  difficulty: 'Hard',
  tags: ['Blockchain'],
  examples: [
    { input: 'valid chain with 3 blocks', output: 'true' }
  ],
  testCases: [
    {
      input: ['validChain'],
      expected: true
    }
  ],
  pseudocode: `
FOR each block from 1 to end
  CHECK if previousHash matches previous block's hash
  RE-CALCULATE current block hash
RETURN true if all valid
`.trim(),
  solution: `
async function isValidChain(chain) {
  for (let i = 1; i < chain.length; i++) {
    const current = chain[i]
    const previous = chain[i - 1]
    const recalculatedHash = await generateHash(JSON.stringify({
      index: current.index,
      timestamp: current.timestamp,
      data: current.data,
      previousHash: current.previousHash
    }))
    if (current.previousHash !== previous.hash || current.hash !== recalculatedHash) {
      return false
    }
  }
  return true
}
`.trim()
},
{
  id: 'build-simple-blockchain',
  title: 'Build Simple Blockchain',
  description: 'Build a full blockchain with N blocks linked by hashes.',
  difficulty: 'Hard',
  tags: ['Blockchain'],
  examples: [
    { input: 'n = 3', output: 'Array of 3 linked blocks' }
  ],
  testCases: [
    {
      input: [3],
      expectedLength: 3
    }
  ],
  pseudocode: `
START with genesis block
FOR each i to N
  CREATE new block with previousHash = last block's hash
  COMPUTE hash
RETURN chain
`.trim(),
  solution: `
async function buildBlockchain(n) {
  const chain = [await createGenesisBlock()]
  for (let i = 1; i < n; i++) {
    const prev = chain[chain.length - 1]
    const block = {
      index: i,
      timestamp: 1234567890000 + i, // Fixed time for testing
      data: 'Block #' + i,
      previousHash: prev.hash
    }
    block.hash = await generateHash(JSON.stringify(block))
    chain.push(block)
  }
  return chain
}
`.trim()
},
];