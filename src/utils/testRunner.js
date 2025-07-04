// src/utils/testRunner.js

/**
 * Safely runs the user's code against an array of test cases.
 * @param {string} code - The user's function as a string
 * @param {Array<{input: any[], expected: any}>} testCases - Test cases to run
 * @returns {Array<{pass: boolean, input: any[], expected: any, output: any}>}
 */
export function runTests(code, testCases = []) {
  const results = [];

  let userFunction;

  try {
    // Convert string into a real function
    // Example: function solution(a, b) { return a + b; }
    // Wrap in parentheses to treat as expression
    // ⚠️ Only works in a trusted local environment
    // eslint-disable-next-line no-eval
    userFunction = eval(`(${code})`);
  } catch (error) {
    // Return failure for all test cases if the function has syntax errors
    return testCases.map((test) => ({
      input: test.input,
      expected: test.expected,
      output: error.message,
      pass: false,
    }));
  }

  for (const test of testCases) {
    let output;

    try {
      output = userFunction(...test.input);
    } catch (err) {
      output = err.message;
    }

    const pass = JSON.stringify(output) === JSON.stringify(test.expected);

    results.push({
      input: test.input,
      expected: test.expected,
      output,
      pass,
    });
  }

  return results;
}
