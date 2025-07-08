// src/data/problems.js

export const problems = [
  {
    id: "sum-of-array-numbers",
    title: "Sum of Numbers in an Array",
    description: "Return the total sum of all numbers in the given array.",
    difficulty: "Easy",
    tags: ["Array"],
    examples: [
      { input: [1, 2, 3], output: 6 },
      { input: [5, -2, 10], output: 13 }
    ],
    testCases: [
      { input: [4, 1, 2], expected: 7 },
      { input: [0, 0, 0], expected: 0 },
      { input: [-3, -2, -1], expected: -6 }
    ],
    solution: `
function sumOfNumbers(numbers) {
  let total = 0
  for (let number of numbers) {
    total = total + number
  }
  return total
}
    `.trim()
  },
  {
    id: "find-largest-number",
    title: "Find the Largest Number",
    description: "Return the biggest number from the array.",
    difficulty: "Easy",
    tags: ["Array"],
    examples: [
      { input: [1, 3, 2], output: 3 },
      { input: [-10, -5, -1], output: -1 }
    ],
    testCases: [
      { input: [100, 200, 300], expected: 300 },
      { input: [9], expected: 9 },
      { input: [0, -1, -100], expected: 0 }
    ],
    solution: `
function findLargest(numbers) {
  let biggest = numbers[0]
  for (let number of numbers) {
    if (number > biggest) {
      biggest = number
    }
  }
  return biggest
}
    `.trim()
  },
  {
    id: "count-even-numbers",
    title: "Count Even Numbers",
    description: "Count how many numbers in the array are even.",
    difficulty: "Easy",
    tags: ["Array", "Math"],
    examples: [
      { input: [1, 2, 3, 4], output: 2 },
      { input: [5, 7, 9], output: 0 }
    ],
    testCases: [
      { input: [2, 4, 6, 8], expected: 4 },
      { input: [1, 3, 5], expected: 0 },
      { input: [0, 1, 2, 3], expected: 2 }
    ],
    solution: `
function countEven(numbers) {
  let count = 0
  for (let number of numbers) {
    if (number % 2 === 0) {
      count = count + 1
    }
  }
  return count
}
    `.trim()
  },
  {
    id: "reverse-string",
    title: "Reverse a String",
    description: "Return the string in reverse order.",
    difficulty: "Easy",
    tags: ["String"],
    examples: [
      { input: "hello", output: "olleh" },
      { input: "world", output: "dlrow" }
    ],
    testCases: [
      { input: "abc", expected: "cba" },
      { input: "", expected: "" },
      { input: "a", expected: "a" }
    ],
    solution: `
function reverseText(text) {
  let result = ""
  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text[i]
  }
  return result
}
    `.trim()
  },
  {
    id: "is-palindrome",
    title: "Check for Palindrome",
    description: "Return true if the word is the same forward and backward.",
    difficulty: "Easy",
    tags: ["String"],
    examples: [
      { input: "racecar", output: true },
      { input: "hello", output: false }
    ],
    testCases: [
      { input: "madam", expected: true },
      { input: "noon", expected: true },
      { input: "cat", expected: false }
    ],
    solution: `
function isPalindrome(word) {
  let reversed = ""
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i]
  }
  return word === reversed
}
    `.trim()
  }
];
