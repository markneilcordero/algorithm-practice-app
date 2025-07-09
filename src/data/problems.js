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
];