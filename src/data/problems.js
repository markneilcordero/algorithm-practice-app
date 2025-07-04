// src/data/problems.js

export const problems = [
  {
    id: 'reverse-array',
    title: 'Reverse an Array',
    description: 'Given an array, return it reversed.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      {
        input: '[1, 2, 3]',
        output: '[3, 2, 1]'
      },
      {
        input: '[5, 0, -1]',
        output: '[-1, 0, 5]'
      }
    ],
    testCases: [
      { input: [[1, 2, 3]], expected: [3, 2, 1] },
      { input: [[4, 5, 6, 7]], expected: [7, 6, 5, 4] }
    ]
  },
  {
    id: 'find-maximum-element',
    title: 'Find the Maximum Element in an Array',
    description: 'Given an array of numbers, return the maximum element.',
    difficulty: 'Easy',
    tags: ['Array', 'Iteration'],
    examples: [
      {
        input: '[1, 5, 2, 9, 3]',
        output: '9'
      },
      {
        input: '[-10, -3, -20, -1]',
        output: '-1'
      }
    ],
    testCases: [
      { input: [[1, 5, 2, 9, 3]], expected: 9 },
      { input: [[-10, -3, -20, -1]], expected: -1 },
      { input: [[7]], expected: 7 }
    ]
  },
  {
    id: 'remove-duplicates',
    title: 'Remove Duplicates from Array',
    description: 'Given an array, return a new array with duplicates removed.',
    difficulty: 'Easy',
    tags: ['Array', 'Set'],
    examples: [
      {
        input: '[1, 2, 2, 3, 4, 4]',
        output: '[1, 2, 3, 4]'
      },
      {
        input: '[5, 5, 5]',
        output: '[5]'
      }
    ],
    testCases: [
      { input: [[1, 2, 2, 3, 4, 4]], expected: [1, 2, 3, 4] },
      { input: [[5, 5, 5]], expected: [5] },
      { input: [[1, 1, 2, 2, 3]], expected: [1, 2, 3] }
    ]
  },
  {
    id: 'sum-of-elements',
    title: 'Sum of Array Elements',
    description: 'Given an array of numbers, return the sum of all elements.',
    difficulty: 'Easy',
    tags: ['Array', 'Math'],
    examples: [
      {
        input: '[1, 2, 3]',
        output: '6'
      },
      {
        input: '[10, -2, 5]',
        output: '13'
      }
    ],
    testCases: [
      { input: [[1, 2, 3]], expected: 6 },
      { input: [[10, -2, 5]], expected: 13 },
      { input: [[0, 0, 0]], expected: 0 }
    ]
  },
  {
    id: 'second-largest',
    title: 'Find Second Largest Element',
    description: 'Given an array, return the second largest element. If it does not exist, return null.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      {
        input: '[1, 2, 3, 4]',
        output: '3'
      },
      {
        input: '[5]',
        output: 'null'
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: 3 },
      { input: [[5, 5, 5]], expected: null },
      { input: [[7]], expected: null }
    ]
  },
  {
    id: 'is-sorted',
    title: 'Check if Array is Sorted',
    description: 'Determine if an array is sorted in non-decreasing order.',
    difficulty: 'Easy',
    tags: ['Array'],
    examples: [
      {
        input: '[1, 2, 3, 4]',
        output: 'true'
      },
      {
        input: '[4, 3, 2, 1]',
        output: 'false'
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4]], expected: true },
      { input: [[4, 3, 2, 1]], expected: false },
      { input: [[7]], expected: true }
    ]
  }  ,
  {
    id: 'stack-push-pop',
    title: 'Implement Stack (Push and Pop)',
    description: 'Implement a stack using an array. You will receive an array of operations where each operation is either "push x" or "pop". Return the final stack content.',
    difficulty: 'Easy',
    tags: ['Stack', 'Implementation'],
    examples: [
      {
        input: '["push 1", "push 2", "pop", "push 3"]',
        output: '[1, 3]'
      },
      {
        input: '["push 5", "push 10", "pop", "pop"]',
        output: '[]'
      }
    ],
    testCases: [
      { input: [["push 1", "push 2", "pop", "push 3"]], expected: [1, 3] },
      { input: [["push 5", "push 10", "pop", "pop"]], expected: [] },
      { input: [["push 7", "push 8"]], expected: [7, 8] }
    ]
  },
  {
    id: 'stack-valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing just the characters (), {}, and [], determine if the input string is valid. A valid string must have open brackets closed by the same type and in correct order.',
    difficulty: 'Easy',
    tags: ['Stack'],
    examples: [
      {
        input: '"()[]{}"',
        output: 'true'
      },
      {
        input: '"(]"',
        output: 'false'
      }
    ],
    testCases: [
      { input: ["()[]{}"], expected: true },
      { input: ["(]"], expected: false },
      { input: ["([{}])"], expected: true }
    ]
  },
  {
    id: 'queue-implementation',
    title: 'Implement Queue (Enqueue and Dequeue)',
    description: 'Implement a queue using an array. You will receive an array of operations where each operation is either "enqueue x" or "dequeue". Return the final queue content.',
    difficulty: 'Easy',
    tags: ['Queue', 'Implementation'],
    examples: [
      {
        input: '["enqueue 1", "enqueue 2", "dequeue", "enqueue 3"]',
        output: '[2, 3]'
      },
      {
        input: '["enqueue 10", "dequeue", "dequeue"]',
        output: '[]'
      }
    ],
    testCases: [
      { input: [["enqueue 1", "enqueue 2", "dequeue", "enqueue 3"]], expected: [2, 3] },
      { input: [["enqueue 10", "dequeue", "dequeue"]], expected: [] },
      { input: [["enqueue 5", "enqueue 6"]], expected: [5, 6] }
    ]
  },
  {
    id: 'queue-first-non-repeating',
    title: 'First Non-Repeating Character in Stream',
    description: 'Given a stream of characters, return the first non-repeating character at each point in the stream using a queue.',
    difficulty: 'Medium',
    tags: ['Queue', 'HashMap'],
    examples: [
      {
        input: '"aabc"',
        output: '"a#bb"'
      },
      {
        input: '"xyz"',
        output: '"xxxy"'
      }
    ],
    testCases: [
      { input: ["aabc"], expected: "a#bb" },
      { input: ["xyz"], expected: "xxxy" },
      { input: ["aabbcc"], expected: "a#a#a#" }
    ]
  }
  ,
  {
    id: 'linear-search',
    title: 'Linear Search',
    description: 'Given an array and a target value, return the index of the target using linear search. If not found, return -1.',
    difficulty: 'Easy',
    tags: ['Array', 'Search'],
    examples: [
      {
        input: '[1, 3, 5, 7], target = 5',
        output: '2'
      },
      {
        input: '[10, 20, 30], target = 25',
        output: '-1'
      }
    ],
    testCases: [
      { input: [[1, 3, 5, 7], 5], expected: 2 },
      { input: [[10, 20, 30], 25], expected: -1 },
      { input: [[4, 6, 8, 9], 4], expected: 0 }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Given a sorted array and a target value, return the index of the target using binary search. If not found, return -1.',
    difficulty: 'Easy',
    tags: ['Array', 'Search', 'BinarySearch'],
    examples: [
      {
        input: '[1, 2, 3, 4, 5], target = 4',
        output: '3'
      },
      {
        input: '[1, 3, 5, 7, 9], target = 2',
        output: '-1'
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5], 4], expected: 3 },
      { input: [[1, 3, 5, 7, 9], 2], expected: -1 },
      { input: [[10, 20, 30, 40, 50], 30], expected: 2 }
    ]
  }
  ,
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    description: 'Implement bubble sort to sort the array in ascending order.',
    difficulty: 'Easy',
    tags: ['Array', 'Sorting'],
    examples: [
      {
        input: '[5, 2, 9, 1]',
        output: '[1, 2, 5, 9]'
      },
      {
        input: '[3, 3, 2]',
        output: '[2, 3, 3]'
      }
    ],
    testCases: [
      { input: [[5, 2, 9, 1]], expected: [1, 2, 5, 9] },
      { input: [[3, 3, 2]], expected: [2, 3, 3] },
      { input: [[7, -1, 4, 0]], expected: [-1, 0, 4, 7] }
    ]
  },
  {
    id: 'insertion-sort',
    title: 'Insertion Sort',
    description: 'Implement insertion sort to sort the array in ascending order.',
    difficulty: 'Easy',
    tags: ['Array', 'Sorting'],
    examples: [
      {
        input: '[4, 3, 2, 1]',
        output: '[1, 2, 3, 4]'
      },
      {
        input: '[9, 5, 7]',
        output: '[5, 7, 9]'
      }
    ],
    testCases: [
      { input: [[4, 3, 2, 1]], expected: [1, 2, 3, 4] },
      { input: [[9, 5, 7]], expected: [5, 7, 9] },
      { input: [[10, -2, 3]], expected: [-2, 3, 10] }
    ]
  },
  {
    id: 'selection-sort',
    title: 'Selection Sort',
    description: 'Implement selection sort to sort the array in ascending order.',
    difficulty: 'Easy',
    tags: ['Array', 'Sorting'],
    examples: [
      {
        input: '[3, 1, 4, 2]',
        output: '[1, 2, 3, 4]'
      },
      {
        input: '[0, -1, 5]',
        output: '[-1, 0, 5]'
      }
    ],
    testCases: [
      { input: [[3, 1, 4, 2]], expected: [1, 2, 3, 4] },
      { input: [[0, -1, 5]], expected: [-1, 0, 5] },
      { input: [[8, 6, 7]], expected: [6, 7, 8] }
    ]
  },
  {
    id: 'merge-sort',
    title: 'Merge Sort',
    description: 'Implement merge sort to sort the array in ascending order.',
    difficulty: 'Medium',
    tags: ['Array', 'Sorting', 'DivideAndConquer'],
    examples: [
      {
        input: '[8, 3, 5, 1]',
        output: '[1, 3, 5, 8]'
      },
      {
        input: '[10, 2, 7, 6]',
        output: '[2, 6, 7, 10]'
      }
    ],
    testCases: [
      { input: [[8, 3, 5, 1]], expected: [1, 3, 5, 8] },
      { input: [[10, 2, 7, 6]], expected: [2, 6, 7, 10] },
      { input: [[9, -1, 0, 4]], expected: [-1, 0, 4, 9] }
    ]
  },
  {
    id: 'quick-sort',
    title: 'Quick Sort',
    description: 'Implement quick sort to sort the array in ascending order.',
    difficulty: 'Medium',
    tags: ['Array', 'Sorting', 'DivideAndConquer'],
    examples: [
      {
        input: '[4, 1, 3, 2]',
        output: '[1, 2, 3, 4]'
      },
      {
        input: '[9, 7, 5]',
        output: '[5, 7, 9]'
      }
    ],
    testCases: [
      { input: [[4, 1, 3, 2]], expected: [1, 2, 3, 4] },
      { input: [[9, 7, 5]], expected: [5, 7, 9] },
      { input: [[-5, 100, 0]], expected: [-5, 0, 100] }
    ]
  }
  ,
  {
    id: 'matrix-diagonal-sum',
    title: 'Matrix Diagonal Sum',
    description: 'Given a square matrix, return the sum of its primary and secondary diagonals. If an element is on both diagonals, count it only once.',
    difficulty: 'Easy',
    tags: ['Matrix'],
    examples: [
      {
        input: '[[1, 2, 3], [4, 5, 6], [7, 8, 9]]',
        output: '25'
      }
    ],
    testCases: [
      { input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 25 },
      { input: [[[5]]], expected: 5 }
    ]
  },
  {
    id: 'transpose-matrix',
    title: 'Transpose a Matrix',
    description: 'Given a 2D matrix, return its transpose.',
    difficulty: 'Easy',
    tags: ['Matrix'],
    examples: [
      {
        input: '[[1, 2, 3], [4, 5, 6]]',
        output: '[[1, 4], [2, 5], [3, 6]]'
      }
    ],
    testCases: [
      { input: [[[1, 2, 3], [4, 5, 6]]], expected: [[1, 4], [2, 5], [3, 6]] },
      { input: [[[7]]], expected: [[7]] }
    ]
  },
  {
    id: 'rotate-matrix',
    title: 'Rotate Matrix 90 Degrees Clockwise',
    description: 'Given an n x n matrix, rotate it 90 degrees clockwise in-place.',
    difficulty: 'Medium',
    tags: ['Matrix'],
    examples: [
      {
        input: '[[1, 2], [3, 4]]',
        output: '[[3, 1], [4, 2]]'
      }
    ],
    testCases: [
      { input: [[[1, 2], [3, 4]]], expected: [[3, 1], [4, 2]] },
      { input: [[[1]]], expected: [[1]] }
    ]
  },
  {
    id: 'spiral-matrix',
    title: 'Spiral Matrix',
    description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
    difficulty: 'Medium',
    tags: ['Matrix'],
    examples: [
      {
        input: '[[1, 2, 3], [4, 5, 6], [7, 8, 9]]',
        output: '[1, 2, 3, 6, 9, 8, 7, 4, 5]'
      }
    ],
    testCases: [
      { input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
      { input: [[[1, 2], [3, 4]]], expected: [1, 2, 4, 3] }
    ]
  },
  {
    id: 'search-matrix',
    title: 'Search a 2D Matrix',
    description: 'Write an efficient algorithm to search for a target value in a 2D matrix. The matrix has the properties: integers in each row are sorted, and the first integer of each row is greater than the last integer of the previous row.',
    difficulty: 'Medium',
    tags: ['Matrix', 'BinarySearch'],
    examples: [
      {
        input: 'matrix = [[1, 3, 5], [7, 9, 11]], target = 9',
        output: 'true'
      },
      {
        input: 'matrix = [[1, 3, 5], [7, 9, 11]], target = 6',
        output: 'false'
      }
    ],
    testCases: [
      { input: [[[1, 3, 5], [7, 9, 11]], 9], expected: true },
      { input: [[[1, 3, 5], [7, 9, 11]], 6], expected: false },
      { input: [[[1, 2, 3]], 2], expected: true }
    ]
  }
  ,
  {
    id: 'graph-adjacency-list',
    title: 'Graph Representation (Adjacency List)',
    description: 'Given a list of edges, build an adjacency list representation of an undirected graph.',
    difficulty: 'Easy',
    tags: ['Graph', 'AdjacencyList'],
    examples: [
      {
        input: '[[0, 1], [0, 2], [1, 2], [2, 3]]',
        output: '{0: [1, 2], 1: [0, 2], 2: [0, 1, 3], 3: [2]}'
      }
    ],
    testCases: [
      {
        input: [[[0, 1], [0, 2], [1, 2], [2, 3]]],
        expected: { 0: [1, 2], 1: [0, 2], 2: [0, 1, 3], 3: [2] }
      }
    ]
  },
  {
    id: 'graph-bfs',
    title: 'Breadth-First Search (BFS)',
    description: 'Given an undirected graph represented as an adjacency list and a starting node, return the nodes visited in BFS order.',
    difficulty: 'Medium',
    tags: ['Graph', 'BFS'],
    examples: [
      {
        input: 'adjList = {0: [1, 2], 1: [0, 3], 2: [0], 3: [1]}, start = 0',
        output: '[0, 1, 2, 3]'
      }
    ],
    testCases: [
      {
        input: [{ 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] }, 0],
        expected: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'graph-dfs',
    title: 'Depth-First Search (DFS)',
    description: 'Given an undirected graph represented as an adjacency list and a starting node, return the nodes visited in DFS order.',
    difficulty: 'Medium',
    tags: ['Graph', 'DFS'],
    examples: [
      {
        input: 'adjList = {0: [1, 2], 1: [0, 3], 2: [0], 3: [1]}, start = 0',
        output: '[0, 1, 3, 2]'
      }
    ],
    testCases: [
      {
        input: [{ 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] }, 0],
        expected: [0, 1, 3, 2]
      }
    ]
  },
  {
    id: 'graph-has-cycle',
    title: 'Detect Cycle in Undirected Graph',
    description: 'Given an undirected graph represented as an adjacency list, return true if it contains a cycle, otherwise false.',
    difficulty: 'Medium',
    tags: ['Graph', 'CycleDetection'],
    examples: [
      {
        input: 'adjList = {0: [1], 1: [0, 2], 2: [1, 3], 3: [2, 0]}',
        output: 'true'
      },
      {
        input: 'adjList = {0: [1], 1: [0, 2], 2: [1, 3], 3: [2]}',
        output: 'false'
      }
    ],
    testCases: [
      {
        input: [{ 0: [1], 1: [0, 2], 2: [1, 3], 3: [2, 0] }],
        expected: true
      },
      {
        input: [{ 0: [1], 1: [0, 2], 2: [1, 3], 3: [2] }],
        expected: false
      }
    ]
  },
  {
    id: 'graph-is-connected',
    title: 'Check if Graph is Connected',
    description: 'Given an undirected graph and a number of nodes, return true if the graph is connected (i.e., every node is reachable from any node).',
    difficulty: 'Medium',
    tags: ['Graph', 'Connectivity'],
    examples: [
      {
        input: 'n = 4, edges = [[0, 1], [1, 2], [2, 3]]',
        output: 'true'
      },
      {
        input: 'n = 4, edges = [[0, 1], [2, 3]]',
        output: 'false'
      }
    ],
    testCases: [
      { input: [4, [[0, 1], [1, 2], [2, 3]]], expected: true },
      { input: [4, [[0, 1], [2, 3]]], expected: false }
    ]
  }
  ,
  {
    id: 'tree-inorder-traversal',
    title: 'Inorder Traversal of Binary Tree',
    description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
    difficulty: 'Easy',
    tags: ['Tree', 'DFS'],
    examples: [
      {
        input: 'root = [1, null, 2, 3]',
        output: '[1, 3, 2]'
      }
    ],
    testCases: [
      { input: [{ val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } }], expected: [1, 3, 2] }
    ]
  },
  {
    id: 'tree-level-order-traversal',
    title: 'Level Order Traversal of Binary Tree',
    description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values (left to right, level by level).',
    difficulty: 'Easy',
    tags: ['Tree', 'BFS'],
    examples: [
      {
        input: 'root = [3, 9, 20, null, null, 15, 7]',
        output: '[[3], [9, 20], [15, 7]]'
      }
    ],
    testCases: [
      { input: [{ val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }], expected: [[3], [9, 20], [15, 7]] }
    ]
  },
  {
    id: 'tree-max-depth',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given the root of a binary tree, return its maximum depth.',
    difficulty: 'Easy',
    tags: ['Tree', 'DFS'],
    examples: [
      {
        input: 'root = [3, 9, 20, null, null, 15, 7]',
        output: '3'
      }
    ],
    testCases: [
      { input: [{ val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }], expected: 3 }
    ]
  },
  {
    id: 'tree-is-symmetric',
    title: 'Check if Binary Tree is Symmetric',
    description: 'Given the root of a binary tree, check whether it is a mirror of itself (symmetric around its center).',
    difficulty: 'Medium',
    tags: ['Tree', 'DFS'],
    examples: [
      {
        input: 'root = [1, 2, 2, 3, 4, 4, 3]',
        output: 'true'
      },
      {
        input: 'root = [1, 2, 2, null, 3, null, 3]',
        output: 'false'
      }
    ],
    testCases: [
      { input: [{ val: 1, left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } } }], expected: true },
      { input: [{ val: 1, left: { val: 2, left: null, right: { val: 3, left: null, right: null } }, right: { val: 2, left: null, right: { val: 3, left: null, right: null } } }], expected: false }
    ]
  },
  {
    id: 'tree-path-sum',
    title: 'Path Sum in Binary Tree',
    description: 'Given the root of a binary tree and a target sum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the target sum.',
    difficulty: 'Medium',
    tags: ['Tree', 'DFS'],
    examples: [
      {
        input: 'root = [5, 4, 8, 11, null, 13, 4, 7, 2], targetSum = 22',
        output: 'true'
      }
    ],
    testCases: [
      { input: [{ val: 5, left: { val: 4, left: { val: 11, left: { val: 7, left: null, right: null }, right: { val: 2, left: null, right: null } }, right: null }, right: { val: 8, left: { val: 13, left: null, right: null }, right: { val: 4, left: null, right: null } } }, 22], expected: true },
      { input: [{ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }, 5], expected: false }
    ]
  }
  ,
  {
    id: 'recursion-factorial',
    title: 'Factorial using Recursion',
    description: 'Given a non-negative integer n, return its factorial using recursion.',
    difficulty: 'Easy',
    tags: ['Recursion', 'Math'],
    examples: [
      {
        input: '5',
        output: '120'
      },
      {
        input: '0',
        output: '1'
      }
    ],
    testCases: [
      { input: [5], expected: 120 },
      { input: [0], expected: 1 },
      { input: [3], expected: 6 }
    ]
  },
  {
    id: 'recursion-fibonacci',
    title: 'Fibonacci using Recursion',
    description: 'Given n, return the nth Fibonacci number using recursion. The sequence starts from 0, 1, 1, 2, 3, 5...',
    difficulty: 'Easy',
    tags: ['Recursion', 'Math'],
    examples: [
      {
        input: '5',
        output: '5'
      },
      {
        input: '7',
        output: '13'
      }
    ],
    testCases: [
      { input: [5], expected: 5 },
      { input: [7], expected: 13 },
      { input: [0], expected: 0 }
    ]
  },
  {
    id: 'recursion-sum-array',
    title: 'Sum of Array using Recursion',
    description: 'Given an array of numbers, return the sum using recursion.',
    difficulty: 'Easy',
    tags: ['Recursion', 'Array'],
    examples: [
      {
        input: '[1, 2, 3]',
        output: '6'
      }
    ],
    testCases: [
      { input: [[1, 2, 3]], expected: 6 },
      { input: [[5, 5, 5]], expected: 15 },
      { input: [[0, 0, 0]], expected: 0 }
    ]
  },
  {
    id: 'recursion-palindrome',
    title: 'Check Palindrome using Recursion',
    description: 'Given a string, check if it is a palindrome using recursion.',
    difficulty: 'Medium',
    tags: ['Recursion', 'String'],
    examples: [
      {
        input: '"racecar"',
        output: 'true'
      },
      {
        input: '"hello"',
        output: 'false'
      }
    ],
    testCases: [
      { input: ["racecar"], expected: true },
      { input: ["hello"], expected: false },
      { input: ["madam"], expected: true }
    ]
  },
  {
    id: 'recursion-power',
    title: 'Power Function using Recursion',
    description: 'Implement power(x, n) that calculates x raised to the power n using recursion.',
    difficulty: 'Medium',
    tags: ['Recursion', 'Math'],
    examples: [
      {
        input: '2, 3',
        output: '8'
      },
      {
        input: '5, 0',
        output: '1'
      }
    ],
    testCases: [
      { input: [2, 3], expected: 8 },
      { input: [5, 0], expected: 1 },
      { input: [3, 2], expected: 9 }
    ]
  }
  ,
  {
    id: 'merge-sort-dnc',
    title: 'Merge Sort (Divide and Conquer)',
    description: 'Sort an array using the merge sort algorithm, which follows the divide and conquer approach.',
    difficulty: 'Medium',
    tags: ['DivideAndConquer', 'Sorting'],
    examples: [
      {
        input: '[5, 2, 4, 1]',
        output: '[1, 2, 4, 5]'
      }
    ],
    testCases: [
      { input: [[5, 2, 4, 1]], expected: [1, 2, 4, 5] },
      { input: [[3, -1, 0]], expected: [-1, 0, 3] }
    ]
  },
  {
    id: 'quick-sort-dnc',
    title: 'Quick Sort (Divide and Conquer)',
    description: 'Sort an array using the quick sort algorithm, which follows the divide and conquer strategy.',
    difficulty: 'Medium',
    tags: ['DivideAndConquer', 'Sorting'],
    examples: [
      {
        input: '[4, 3, 2, 1]',
        output: '[1, 2, 3, 4]'
      }
    ],
    testCases: [
      { input: [[4, 3, 2, 1]], expected: [1, 2, 3, 4] },
      { input: [[8, -2, 7]], expected: [-2, 7, 8] }
    ]
  },
  {
    id: 'max-subarray-dnc',
    title: 'Maximum Subarray (Divide and Conquer)',
    description: 'Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum using divide and conquer.',
    difficulty: 'Hard',
    tags: ['DivideAndConquer', 'DynamicProgramming'],
    examples: [
      {
        input: '[-2,1,-3,4,-1,2,1,-5,4]',
        output: '6'
      }
    ],
    testCases: [
      { input: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
      { input: [[1]], expected: 1 }
    ]
  },
  {
    id: 'search-rotated-array',
    title: 'Search in Rotated Sorted Array',
    description: 'Given a rotated sorted array and a target value, return the index of the target if found using binary search logic, else return -1.',
    difficulty: 'Medium',
    tags: ['DivideAndConquer', 'BinarySearch'],
    examples: [
      {
        input: '[4,5,6,7,0,1,2], target = 0',
        output: '4'
      }
    ],
    testCases: [
      { input: [[4,5,6,7,0,1,2], 0], expected: 4 },
      { input: [[4,5,6,7,0,1,2], 3], expected: -1 }
    ]
  },
  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays using a divide and conquer strategy.',
    difficulty: 'Hard',
    tags: ['DivideAndConquer', 'BinarySearch'],
    examples: [
      {
        input: 'nums1 = [1, 3], nums2 = [2]',
        output: '2.0'
      },
      {
        input: 'nums1 = [1, 2], nums2 = [3, 4]',
        output: '2.5'
      }
    ],
    testCases: [
      { input: [[1, 3], [2]], expected: 2.0 },
      { input: [[1, 2], [3, 4]], expected: 2.5 }
    ]
  }
  ,
  {
    id: 'greedy-activity-selection',
    title: 'Activity Selection Problem',
    description: 'Given start and end times of N activities, select the maximum number of activities that can be performed by a single person assuming that a person can only work on a single activity at a time.',
    difficulty: 'Medium',
    tags: ['Greedy', 'Sorting'],
    examples: [
      {
        input: 'start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]',
        output: '4'
      }
    ],
    testCases: [
      { input: [[1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]], expected: 4 }
    ]
  },
  {
    id: 'greedy-coin-change',
    title: 'Minimum Coins (Greedy)',
    description: 'Given an amount and an array of coin denominations, return the minimum number of coins required to make the amount using a greedy approach.',
    difficulty: 'Medium',
    tags: ['Greedy'],
    examples: [
      {
        input: 'coins = [1, 5, 10, 25], amount = 30',
        output: '2'
      }
    ],
    testCases: [
      { input: [[1, 5, 10, 25], 30], expected: 2 },
      { input: [[1, 3, 4], 6], expected: 2 }
    ]
  },
  {
    id: 'greedy-fractional-knapsack',
    title: 'Fractional Knapsack',
    description: 'Given weights and values of items and a knapsack capacity, find the maximum value in the knapsack by taking fractional parts using a greedy approach.',
    difficulty: 'Medium',
    tags: ['Greedy'],
    examples: [
      {
        input: 'weights = [10, 20, 30], values = [60, 100, 120], capacity = 50',
        output: '240.0'
      }
    ],
    testCases: [
      { input: [[10, 20, 30], [60, 100, 120], 50], expected: 240.0 }
    ]
  },
  {
    id: 'greedy-jump-game',
    title: 'Jump Game (Minimum Jumps)',
    description: 'Given an array of positive integers where each element represents the max jump length, find the minimum number of jumps to reach the end.',
    difficulty: 'Medium',
    tags: ['Greedy'],
    examples: [
      {
        input: '[2, 3, 1, 1, 4]',
        output: '2'
      }
    ],
    testCases: [
      { input: [[2, 3, 1, 1, 4]], expected: 2 },
      { input: [[1, 1, 1, 1]], expected: 3 }
    ]
  },
  {
    id: 'greedy-non-overlapping-intervals',
    title: 'Non-Overlapping Intervals',
    description: 'Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
    difficulty: 'Medium',
    tags: ['Greedy', 'Sorting'],
    examples: [
      {
        input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
        output: '1'
      }
    ],
    testCases: [
      { input: [[[1,2],[2,3],[3,4],[1,3]]], expected: 1 },
      { input: [[[1,2],[1,2],[1,2]]], expected: 2 }
    ]
  }
  ,
  {
    id: 'dp-fibonacci-memo',
    title: 'Fibonacci with Memoization',
    description: 'Compute the nth Fibonacci number using dynamic programming with memoization.',
    difficulty: 'Easy',
    tags: ['DynamicProgramming', 'Recursion', 'Memoization'],
    examples: [
      {
        input: '5',
        output: '5'
      },
      {
        input: '10',
        output: '55'
      }
    ],
    testCases: [
      { input: [5], expected: 5 },
      { input: [10], expected: 55 },
      { input: [0], expected: 0 }
    ]
  },
  {
    id: 'dp-climbing-stairs',
    title: 'Climbing Stairs',
    description: 'You are climbing a staircase with n steps. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    difficulty: 'Easy',
    tags: ['DynamicProgramming'],
    examples: [
      {
        input: '2',
        output: '2'
      },
      {
        input: '3',
        output: '3'
      }
    ],
    testCases: [
      { input: [2], expected: 2 },
      { input: [3], expected: 3 },
      { input: [5], expected: 8 }
    ]
  },
  {
    id: 'dp-house-robber',
    title: 'House Robber',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money. You cannot rob two adjacent houses. Return the maximum amount you can rob.',
    difficulty: 'Medium',
    tags: ['DynamicProgramming'],
    examples: [
      {
        input: '[2, 7, 9, 3, 1]',
        output: '12'
      }
    ],
    testCases: [
      { input: [[2, 7, 9, 3, 1]], expected: 12 },
      { input: [[1, 2, 3, 1]], expected: 4 }
    ]
  },
  {
    id: 'dp-longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Given an unsorted array of integers, return the length of the longest increasing subsequence.',
    difficulty: 'Medium',
    tags: ['DynamicProgramming'],
    examples: [
      {
        input: '[10, 9, 2, 5, 3, 7, 101, 18]',
        output: '4'
      }
    ],
    testCases: [
      { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
      { input: [[0, 1, 0, 3, 2, 3]], expected: 4 }
    ]
  },
  {
    id: 'dp-0-1-knapsack',
    title: '0/1 Knapsack Problem',
    description: 'Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value using 0/1 dynamic programming.',
    difficulty: 'Hard',
    tags: ['DynamicProgramming'],
    examples: [
      {
        input: 'weights = [1, 3, 4, 5], values = [1, 4, 5, 7], capacity = 7',
        output: '9'
      }
    ],
    testCases: [
      { input: [[1, 3, 4, 5], [1, 4, 5, 7], 7], expected: 9 },
      { input: [[2, 3, 4], [4, 5, 6], 5], expected: 5 }
    ]
  }
  ,
  {
    id: 'hashmap-two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. Use a HashMap for optimal performance.',
    difficulty: 'Easy',
    tags: ['HashMap', 'Array'],
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]'
      }
    ],
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ]
  },
  {
    id: 'hashset-contains-duplicate',
    title: 'Contains Duplicate',
    description: 'Given an array of integers, determine if any value appears at least twice. Use a HashSet to solve in linear time.',
    difficulty: 'Easy',
    tags: ['HashSet', 'Array'],
    examples: [
      {
        input: '[1, 2, 3, 1]',
        output: 'true'
      },
      {
        input: '[1, 2, 3, 4]',
        output: 'false'
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 1]], expected: true },
      { input: [[1, 2, 3, 4]], expected: false }
    ]
  },
  {
    id: 'hashmap-group-anagrams',
    title: 'Group Anagrams',
    description: 'Given an array of strings, group the anagrams together using a HashMap.',
    difficulty: 'Medium',
    tags: ['HashMap', 'String'],
    examples: [
      {
        input: '["eat", "tea", "tan", "ate", "nat", "bat"]',
        output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]'
      }
    ],
    testCases: [
      {
        input: [["eat", "tea", "tan", "ate", "nat", "bat"]],
        expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
      }
    ]
  },
  {
    id: 'hashmap-longest-consecutive-sequence',
    title: 'Longest Consecutive Sequence',
    description: 'Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Solve it in O(n) using a HashSet.',
    difficulty: 'Medium',
    tags: ['HashSet'],
    examples: [
      {
        input: '[100, 4, 200, 1, 3, 2]',
        output: '4'
      }
    ],
    testCases: [
      { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
      { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 }
    ]
  },
  {
    id: 'hashmap-subarray-sum',
    title: 'Subarray Sum Equals K',
    description: 'Given an array of integers and an integer k, return the total number of continuous subarrays whose sum equals to k. Use prefix sum with a HashMap.',
    difficulty: 'Medium',
    tags: ['HashMap', 'PrefixSum'],
    examples: [
      {
        input: 'nums = [1,1,1], k = 2',
        output: '2'
      }
    ],
    testCases: [
      { input: [[1, 1, 1], 2], expected: 2 },
      { input: [[1, 2, 3], 3], expected: 2 }
    ]
  }
  ,
  {
    id: 'disjoint-set-find-union',
    title: 'Basic Union-Find (Disjoint Set)',
    description: 'Implement a Disjoint Set (Union-Find) data structure with path compression and union by rank.',
    difficulty: 'Medium',
    tags: ['DisjointSet', 'Graph'],
    examples: [
      {
        input: 'n = 5, operations = [["union", 0, 1], ["union", 1, 2], ["find", 0, 2], ["find", 0, 3]]',
        output: '[true, false]'
      }
    ],
    testCases: [
      {
        input: [5, [["union", 0, 1], ["union", 1, 2], ["find", 0, 2], ["find", 0, 3]]],
        expected: [true, false]
      }
    ]
  },
  {
    id: 'disjoint-set-cycle-detection',
    title: 'Cycle Detection in Undirected Graph (Union-Find)',
    description: 'Use Union-Find to detect a cycle in an undirected graph. Return true if a cycle exists.',
    difficulty: 'Medium',
    tags: ['DisjointSet', 'Graph', 'CycleDetection'],
    examples: [
      {
        input: 'n = 5, edges = [[0, 1], [1, 2], [2, 3], [1, 3]]',
        output: 'true'
      },
      {
        input: 'n = 4, edges = [[0, 1], [1, 2], [2, 3]]',
        output: 'false'
      }
    ],
    testCases: [
      { input: [5, [[0, 1], [1, 2], [2, 3], [1, 3]]], expected: true },
      { input: [4, [[0, 1], [1, 2], [2, 3]]], expected: false }
    ]
  },
  {
    id: 'disjoint-set-number-of-connected-components',
    title: 'Number of Connected Components',
    description: 'Given n nodes and a list of undirected edges, return the number of connected components using Union-Find.',
    difficulty: 'Medium',
    tags: ['DisjointSet', 'Graph', 'ConnectedComponents'],
    examples: [
      {
        input: 'n = 5, edges = [[0, 1], [1, 2], [3, 4]]',
        output: '2'
      }
    ],
    testCases: [
      { input: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { input: [4, [[0, 1], [2, 3]]], expected: 2 }
    ]
  },
  {
    id: 'disjoint-set-redundant-connection',
    title: 'Redundant Connection',
    description: 'In a graph with a cycle, return the redundant edge that can be removed so the graph becomes a tree.',
    difficulty: 'Medium',
    tags: ['DisjointSet', 'Graph', 'CycleDetection'],
    examples: [
      {
        input: 'edges = [[1, 2], [1, 3], [2, 3]]',
        output: '[2, 3]'
      }
    ],
    testCases: [
      { input: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
      { input: [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]], expected: [1, 4] }
    ]
  },
  {
    id: 'disjoint-set-accounts-merge',
    title: 'Accounts Merge (Union-Find)',
    description: 'Given a list of accounts with emails, merge accounts that belong to the same person using Union-Find.',
    difficulty: 'Hard',
    tags: ['DisjointSet', 'Graph', 'String'],
    examples: [
      {
        input: '[["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]',
        output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"], ["John","johnnybravo@mail.com"], ["Mary","mary@mail.com"]]'
      }
    ],
    testCases: [
      {
        input: [[
          ["John", "johnsmith@mail.com", "john00@mail.com"],
          ["John", "johnnybravo@mail.com"],
          ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
          ["Mary", "mary@mail.com"]
        ]],
        expected: [
          ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
          ["John", "johnnybravo@mail.com"],
          ["Mary", "mary@mail.com"]
        ]
      }
    ]
  }
  ,
  {
    id: 'heap-k-largest-elements',
    title: 'K Largest Elements',
    description: 'Given an array and an integer k, return the k largest elements in descending order using a max heap.',
    difficulty: 'Easy',
    tags: ['Heap', 'PriorityQueue'],
    examples: [
      {
        input: 'nums = [3, 2, 1, 5, 6, 4], k = 2',
        output: '[6, 5]'
      }
    ],
    testCases: [
      { input: [[3, 2, 1, 5, 6, 4], 2], expected: [6, 5] },
      { input: [[1, 23, 12, 9, 30, 2, 50], 3], expected: [50, 30, 23] }
    ]
  },
  {
    id: 'heap-kth-largest-element',
    title: 'Kth Largest Element in Array',
    description: 'Return the kth largest element in an unsorted array using a min heap of size k.',
    difficulty: 'Medium',
    tags: ['Heap', 'PriorityQueue'],
    examples: [
      {
        input: 'nums = [3, 2, 1, 5, 6, 4], k = 2',
        output: '5'
      }
    ],
    testCases: [
      { input: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { input: [[1, 23, 12, 9, 30, 2, 50], 3], expected: 23 }
    ]
  },
  {
    id: 'heap-k-closest-points',
    title: 'K Closest Points to Origin',
    description: 'Given an array of points and an integer k, return the k closest points to the origin (0, 0) using a max heap.',
    difficulty: 'Medium',
    tags: ['Heap', 'PriorityQueue', 'Geometry'],
    examples: [
      {
        input: 'points = [[1,3],[−2,2]], k = 1',
        output: '[[-2,2]]'
      }
    ],
    testCases: [
      { input: [[[1,3],[-2,2]], 1], expected: [[-2,2]] },
      { input: [[[3,3],[5,-1],[-2,4]], 2], expected: [[3,3],[-2,4]] }
    ]
  },
  {
    id: 'heap-top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    description: 'Given an array of integers, return the k most frequent elements using a min heap.',
    difficulty: 'Medium',
    tags: ['Heap', 'HashMap', 'PriorityQueue'],
    examples: [
      {
        input: 'nums = [1,1,1,2,2,3], k = 2',
        output: '[1, 2]'
      }
    ],
    testCases: [
      { input: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { input: [[1], 1], expected: [1] }
    ]
  },
  {
    id: 'heap-merge-k-sorted-lists',
    title: 'Merge K Sorted Lists',
    description: 'Merge k sorted linked lists and return it as one sorted list using a min heap.',
    difficulty: 'Hard',
    tags: ['Heap', 'LinkedList', 'DivideAndConquer', 'PriorityQueue'],
    examples: [
      {
        input: '[[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]'
      }
    ],
    testCases: [
      { input: [[[1,4,5],[1,3,4],[2,6]]], expected: [1,1,2,3,4,4,5,6] },
      { input: [[]], expected: [] }
    ]
  }
  ,
  {
    id: 'trie-implement',
    title: 'Implement Trie (Prefix Tree)',
    description: 'Implement a Trie with insert, search, and startsWith methods.',
    difficulty: 'Medium',
    tags: ['Trie', 'PrefixTree'],
    examples: [
      {
        input: 'Insert: "apple", Search: "apple", Search: "app", StartsWith: "app"',
        output: 'true, false, true'
      }
    ],
    testCases: [
      {
        input: [["insert", "apple"], ["search", "apple"], ["search", "app"], ["startsWith", "app"]],
        expected: [null, true, false, true]
      }
    ]
  },
  {
    id: 'trie-prefix-matching',
    title: 'Prefix Matching',
    description: 'Given a list of words and a prefix string, return all words that start with that prefix using a Trie.',
    difficulty: 'Medium',
    tags: ['Trie', 'PrefixTree'],
    examples: [
      {
        input: 'words = ["apple", "app", "apricot", "banana"], prefix = "ap"',
        output: '["apple", "app", "apricot"]'
      }
    ],
    testCases: [
      {
        input: [["apple", "app", "apricot", "banana"], "ap"],
        expected: ["apple", "app", "apricot"]
      }
    ]
  },
  {
    id: 'trie-word-search-ii',
    title: 'Word Search II',
    description: 'Given a 2D board and a list of words, return all words that can be formed in the board using a Trie and DFS. Words can be constructed from letters of sequentially adjacent cells.',
    difficulty: 'Hard',
    tags: ['Trie', 'Backtracking', 'DFS'],
    examples: [
      {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["oath","eat"]'
      }
    ],
    testCases: [
      {
        input: [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]],
        expected: ["oath", "eat"]
      }
    ]
  },
  {
    id: 'trie-delete-word',
    title: 'Delete Word from Trie',
    description: 'Implement a method to delete a word from a Trie. After deletion, the Trie should not contain that word anymore.',
    difficulty: 'Medium',
    tags: ['Trie'],
    examples: [
      {
        input: 'Insert: "hello", "help", Delete: "help", Search: "help"',
        output: 'false'
      }
    ],
    testCases: [
      {
        input: [["insert", "hello"], ["insert", "help"], ["delete", "help"], ["search", "help"]],
        expected: [null, null, null, false]
      }
    ]
  },
  {
    id: 'trie-count-prefix',
    title: 'Count Words Starting with Prefix',
    description: 'Given a list of words, count how many start with a given prefix using a Trie.',
    difficulty: 'Medium',
    tags: ['Trie'],
    examples: [
      {
        input: 'words = ["apple", "app", "april", "banana"], prefix = "ap"',
        output: '3'
      }
    ],
    testCases: [
      {
        input: [["apple", "app", "april", "banana"], "ap"],
        expected: 3
      },
      {
        input: [["apple", "app", "banana"], "ba"],
        expected: 1
      }
    ]
  }
  ,
  {
    id: 'treap-insert',
    title: 'Treap Insertion',
    description: 'Implement insertion in a Treap (randomized binary search tree). Each node has a key and a randomly assigned priority. Maintain BST order on keys and heap order on priorities.',
    difficulty: 'Hard',
    tags: ['Treap', 'BinarySearchTree', 'Heap', 'Randomized'],
    examples: [
      {
        input: 'Insert nodes with keys: [5, 2, 8, 6]',
        output: 'A valid Treap with BST and heap properties'
      }
    ],
    testCases: [
      {
        input: [[5, 2, 8, 6]],
        expected: 'Valid Treap structure (BST on keys, Heap on priorities)' // to be verified by structure, not just value
      }
    ]
  },
  {
    id: 'treap-delete',
    title: 'Treap Deletion',
    description: 'Implement deletion in a Treap. Maintain both BST and heap properties while removing a node.',
    difficulty: 'Hard',
    tags: ['Treap', 'BinarySearchTree', 'Heap'],
    examples: [
      {
        input: 'Initial keys: [10, 20, 30, 40], Delete: 30',
        output: 'Treap without node 30, BST + heap valid'
      }
    ],
    testCases: [
      {
        input: [[10, 20, 30, 40], 30],
        expected: 'Valid Treap structure without 30'
      }
    ]
  },
  {
    id: 'treap-search',
    title: 'Search in Treap',
    description: 'Implement search operation in a Treap. Return true if a given key exists.',
    difficulty: 'Medium',
    tags: ['Treap', 'BinarySearchTree'],
    examples: [
      {
        input: 'Insert: [15, 10, 20], Search: 10',
        output: 'true'
      },
      {
        input: 'Insert: [15, 10, 20], Search: 5',
        output: 'false'
      }
    ],
    testCases: [
      { input: [[15, 10, 20], 10], expected: true },
      { input: [[15, 10, 20], 5], expected: false }
    ]
  },
  {
    id: 'treap-split-merge',
    title: 'Split and Merge Treaps',
    description: 'Given a Treap and a key x, implement split operation (split into ≤ x and > x) and merge two valid Treaps back.',
    difficulty: 'Hard',
    tags: ['Treap', 'Split', 'Merge'],
    examples: [
      {
        input: 'Treap with keys [5, 10, 15, 20], Split at 12, Merge back',
        output: 'Treap with same keys and valid structure'
      }
    ],
    testCases: [
      {
        input: [[5, 10, 15, 20], 12],
        expected: 'Split and merged Treap with [5,10,15,20] and valid structure'
      }
    ]
  },
  {
    id: 'treap-range-query',
    title: 'Treap Range Sum Query',
    description: 'Augment Treap to support range sum queries in O(log n). Given a range [l, r], return sum of keys within that range.',
    difficulty: 'Hard',
    tags: ['Treap', 'SegmentTree', 'AugmentedTree'],
    examples: [
      {
        input: 'Insert: [10, 5, 15, 3, 7], Query: [5, 10]',
        output: '22'
      }
    ],
    testCases: [
      { input: [[10, 5, 15, 3, 7], 5, 10], expected: 22 },
      { input: [[1, 2, 3, 4, 5], 2, 4], expected: 9 }
    ]
  }
  ,
  {
    id: 'bitmask-single-number',
    title: 'Single Number',
    description: 'Given a non-empty array of integers, every element appears twice except for one. Find that single one using bit manipulation.',
    difficulty: 'Easy',
    tags: ['BitMask', 'XOR'],
    examples: [
      {
        input: '[2, 2, 1]',
        output: '1'
      },
      {
        input: '[4, 1, 2, 1, 2]',
        output: '4'
      }
    ],
    testCases: [
      { input: [[2, 2, 1]], expected: 1 },
      { input: [[4, 1, 2, 1, 2]], expected: 4 }
    ]
  },
  {
    id: 'bitmask-count-set-bits',
    title: 'Count Set Bits',
    description: 'Given a positive integer n, return the number of set bits (1s) in its binary representation.',
    difficulty: 'Easy',
    tags: ['BitMask'],
    examples: [
      {
        input: '5',
        output: '2'
      },
      {
        input: '7',
        output: '3'
      }
    ],
    testCases: [
      { input: [5], expected: 2 },
      { input: [7], expected: 3 },
      { input: [0], expected: 0 }
    ]
  },
  {
    id: 'bitmask-subsets',
    title: 'All Subsets Using Bitmasking',
    description: 'Given a list of unique integers, return all possible subsets using bitmasking.',
    difficulty: 'Medium',
    tags: ['BitMask', 'Backtracking'],
    examples: [
      {
        input: '[1, 2]',
        output: '[[], [1], [2], [1, 2]]'
      }
    ],
    testCases: [
      { input: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
      { input: [[0]], expected: [[], [0]] }
    ]
  },
  {
    id: 'bitmask-sum-of-two-integers',
    title: 'Sum of Two Integers (No + or -)',
    description: 'Calculate the sum of two integers a and b, but you are not allowed to use the operator + or −.',
    difficulty: 'Medium',
    tags: ['BitMask'],
    examples: [
      {
        input: 'a = 1, b = 2',
        output: '3'
      }
    ],
    testCases: [
      { input: [1, 2], expected: 3 },
      { input: [-2, 3], expected: 1 }
    ]
  },
  {
    id: 'bitmask-missing-number',
    title: 'Missing Number Using XOR',
    description: 'Given an array containing n distinct numbers taken from 0 to n, find the one that is missing using XOR.',
    difficulty: 'Easy',
    tags: ['BitMask', 'XOR'],
    examples: [
      {
        input: '[3, 0, 1]',
        output: '2'
      },
      {
        input: '[0, 1]',
        output: '2'
      }
    ],
    testCases: [
      { input: [[3, 0, 1]], expected: 2 },
      { input: [[0, 1]], expected: 2 }
    ]
  }
  ,
  {
    id: 'bloom-filter-implement',
    title: 'Implement Bloom Filter',
    description: 'Design and implement a simple Bloom Filter with insert and possiblyContains methods using multiple hash functions.',
    difficulty: 'Hard',
    tags: ['BloomFilter', 'Hashing', 'BitMask'],
    examples: [
      {
        input: 'Insert: ["apple", "banana"], Check: "apple", Check: "grape"',
        output: 'true, false (possible false positive allowed)'
      }
    ],
    testCases: [
      {
        input: [["insert", "apple"], ["insert", "banana"], ["check", "apple"], ["check", "grape"]],
        expected: [null, null, true, false]
      }
    ]
  },
  {
    id: 'bloom-filter-batch-queries',
    title: 'Batch Queries on Bloom Filter',
    description: 'Insert a list of strings into a Bloom Filter and check multiple query strings for possible presence.',
    difficulty: 'Hard',
    tags: ['BloomFilter', 'Hashing', 'BitMask'],
    examples: [
      {
        input: 'Insert: ["cat", "dog", "cow"], Queries: ["dog", "sheep", "cat"]',
        output: '[true, false, true]'
      }
    ],
    testCases: [
      {
        input: [["cat", "dog", "cow"], ["dog", "sheep", "cat"]],
        expected: [true, false, true]
      }
    ]
  },
  {
    id: 'bloom-filter-false-positive-rate',
    title: 'Estimate False Positive Rate',
    description: 'Given the size of the Bloom Filter, number of hash functions, and number of inserted elements, estimate the false positive probability.',
    difficulty: 'Medium',
    tags: ['BloomFilter', 'Probability'],
    examples: [
      {
        input: 'n = 100, k = 3, m = 512',
        output: '~0.02 (estimated)'
      }
    ],
    testCases: [
      {
        input: [100, 3, 512],
        expected: 0.02 // Acceptable approximation
      }
    ]
  },
  {
    id: 'bloom-filter-vs-hashset',
    title: 'Compare Bloom Filter vs HashSet',
    description: 'Explain and implement space vs time differences between Bloom Filter and HashSet for membership testing.',
    difficulty: 'Easy',
    tags: ['BloomFilter', 'Hashing', 'Comparison'],
    examples: [
      {
        input: 'Elements = ["a", "b", "c"], Queries = ["a", "z"]',
        output: 'Bloom: [true, false], HashSet: [true, false]'
      }
    ],
    testCases: [
      {
        input: [["a", "b", "c"], ["a", "z"]],
        expected: {
          bloom: [true, false],
          hashset: [true, false]
        }
      }
    ]
  },
  {
    id: 'bloom-filter-design-url-checker',
    title: 'Design URL Membership Checker',
    description: 'Design a system using Bloom Filter to detect if a URL has been visited before.',
    difficulty: 'Medium',
    tags: ['BloomFilter', 'Design', 'Web'],
    examples: [
      {
        input: 'Insert: ["google.com", "openai.com"], Check: "openai.com", Check: "example.com"',
        output: 'true, false'
      }
    ],
    testCases: [
      {
        input: [["google.com", "openai.com"], ["openai.com", "example.com"]],
        expected: [true, false]
      }
    ]
  }
  ,
  {
    id: 'approx-vc-greedy',
    title: 'Vertex Cover Approximation (Greedy)',
    description: 'Given an undirected graph, implement a 2-approximation algorithm to find a vertex cover using a greedy strategy.',
    difficulty: 'Hard',
    tags: ['Approximation', 'Graph', 'Greedy'],
    examples: [
      {
        input: 'edges = [[1, 2], [2, 3], [3, 4]]',
        output: '[2, 3] (or any valid 2-approximation)'
      }
    ],
    testCases: [
      {
        input: [[[1, 2], [2, 3], [3, 4]]],
        expected: 'A valid 2-approximate vertex cover (e.g., [2, 3])'
      }
    ]
  },
  {
    id: 'approx-set-cover-greedy',
    title: 'Set Cover Approximation (Greedy)',
    description: 'Given a universe U and a collection of subsets S, return a subcollection of S that covers U using a greedy approximation algorithm.',
    difficulty: 'Hard',
    tags: ['Approximation', 'Greedy'],
    examples: [
      {
        input: 'U = {1, 2, 3, 4, 5}, S = [{1, 2}, {2, 3, 4}, {4, 5}]',
        output: 'Subsets that cover all elements of U (approximate solution)'
      }
    ],
    testCases: [
      {
        input: [[1, 2, 3, 4, 5], [[1, 2], [2, 3, 4], [4, 5]]],
        expected: 'A minimal or near-minimal subset cover (e.g., 2 subsets covering all)'
      }
    ]
  },
  {
    id: 'approx-tsp-nearest-neighbor',
    title: 'TSP Approximation using Nearest Neighbor',
    description: 'Given a complete weighted graph, use the nearest neighbor heuristic to approximate the shortest Hamiltonian cycle.',
    difficulty: 'Hard',
    tags: ['Approximation', 'Graph', 'TSP'],
    examples: [
      {
        input: 'matrix = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]',
        output: 'Approximate TSP cost (e.g., 80)'
      }
    ],
    testCases: [
      {
        input: [[[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]],
        expected: 'An approximate tour cost (e.g., 80)'
      }
    ]
  },
  {
    id: 'approx-knapsack-fptas',
    title: 'Knapsack Approximation using FPTAS',
    description: 'Implement a Fully Polynomial-Time Approximation Scheme (FPTAS) for the 0/1 Knapsack Problem with scaling.',
    difficulty: 'Hard',
    tags: ['Approximation', 'Knapsack', 'DP'],
    examples: [
      {
        input: 'weights = [2, 3, 4], values = [4, 5, 6], capacity = 5, ε = 0.5',
        output: 'An approximate max value (e.g., 7 or 8)'
      }
    ],
    testCases: [
      {
        input: [[2, 3, 4], [4, 5, 6], 5, 0.5],
        expected: 'Approximate optimal value (e.g., close to 8)'
      }
    ]
  },
  {
    id: 'approx-bin-packing-first-fit',
    title: 'Bin Packing using First-Fit Approximation',
    description: 'Given a list of item sizes and a bin capacity, return the number of bins used using the First-Fit heuristic.',
    difficulty: 'Medium',
    tags: ['Approximation', 'Greedy'],
    examples: [
      {
        input: 'items = [0.5, 0.7, 0.2, 0.3, 0.8], binSize = 1.0',
        output: '3'
      }
    ],
    testCases: [
      {
        input: [[0.5, 0.7, 0.2, 0.3, 0.8], 1.0],
        expected: 3
      }
    ]
  }
  ,
  {
    id: 'randomized-reservoir-sampling',
    title: 'Reservoir Sampling',
    description: 'Implement Reservoir Sampling to randomly select k items from a stream of unknown length.',
    difficulty: 'Hard',
    tags: ['Randomized', 'Sampling'],
    examples: [
      {
        input: 'stream = [1, 2, 3, 4, 5, 6], k = 2',
        output: 'Any 2 random items from the stream'
      }
    ],
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6], 2],
        expected: 'Random 2 elements from input (e.g., [2, 5])'
      }
    ]
  },
  {
    id: 'randomized-quickselect',
    title: 'Quickselect (Randomized)',
    description: 'Use randomized partitioning to implement Quickselect and return the kth smallest element.',
    difficulty: 'Medium',
    tags: ['Randomized', 'DivideAndConquer'],
    examples: [
      {
        input: '[3, 2, 1, 5, 4], k = 3',
        output: '3'
      }
    ],
    testCases: [
      { input: [[3, 2, 1, 5, 4], 3], expected: 3 },
      { input: [[7, 10, 4, 3, 20, 15], 4], expected: 7 }
    ]
  },
  {
    id: 'randomized-random-pick-with-weight',
    title: 'Random Pick with Weight',
    description: 'Given an array of weights, return an index randomly with probability proportional to its weight.',
    difficulty: 'Medium',
    tags: ['Randomized', 'PrefixSum'],
    examples: [
      {
        input: 'weights = [1, 3]',
        output: 'Randomly 0 (25%) or 1 (75%)'
      }
    ],
    testCases: [
      {
        input: [[1, 3]],
        expected: 'Index 0 or 1, weighted randomly'
      }
    ]
  },
  {
    id: 'randomized-randomized-binary-search',
    title: 'Randomized Binary Search',
    description: 'Implement a binary search that randomly picks a mid index instead of the middle to balance probabilistically.',
    difficulty: 'Medium',
    tags: ['Randomized', 'BinarySearch'],
    examples: [
      {
        input: '[1, 2, 3, 4, 5], target = 3',
        output: '2'
      }
    ],
    testCases: [
      { input: [[1, 2, 3, 4, 5], 3], expected: 2 }
    ]
  },
  {
    id: 'randomized-skiplist',
    title: 'Design a Skip List',
    description: 'Design and implement a randomized Skip List with insert, delete, and search operations.',
    difficulty: 'Hard',
    tags: ['Randomized', 'DataStructure'],
    examples: [
      {
        input: 'Insert: 1, 3, 7; Search: 3; Delete: 3; Search: 3',
        output: 'true, false'
      }
    ],
    testCases: [
      {
        input: [["insert", 1], ["insert", 3], ["insert", 7], ["search", 3], ["delete", 3], ["search", 3]],
        expected: [null, null, null, true, null, false]
      }
    ]
  }

];
