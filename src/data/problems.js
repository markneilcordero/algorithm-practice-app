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

];
