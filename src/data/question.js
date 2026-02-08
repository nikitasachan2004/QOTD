export const todaysQuestion = {
  id: "qotd-2026-01-31",
  date: "January 31, 2026",
  title: "Two Sum with Sorted Array",
  difficulty: "Easy",
  timeEstimate: "15-20 min",
  description: "Given a sorted array of integers and a target sum, find two numbers that add up to the target. Return the indices of these two numbers (1-indexed).",
  constraints: [
    "2 ≤ array.length ≤ 10⁴",
    "-10⁹ ≤ array[i] ≤ 10⁹",
    "-10⁹ ≤ target ≤ 10⁹",
    "Array is sorted in ascending order",
    "Exactly one valid solution exists"
  ],
  examples: [
    {
      input: "array = [1, 3, 5, 7, 11], target = 8",
      output: "[2, 3]",
      explanation: "array[2] + array[3] = 3 + 5 = 8"
    },
    {
      input: "array = [2, 4, 6, 8], target = 10",
      output: "[2, 4]",
      explanation: "array[2] + array[4] = 4 + 6 = 10"
    },
    {
      input: "array = [-1, 0, 3, 5, 9, 12], target = 4",
      output: "[2, 4]",
      explanation: "array[2] + array[4] = 0 + 4 = 4"
    }
  ],
  hint: "Since the array is sorted, you can use a two-pointer approach starting from both ends. If the sum is too small, move the left pointer right. If too large, move the right pointer left.",
  starterCode: {
    javascript: `function twoSum(array, target) {
  // Your code here
  
}`,
    python: `def two_sum(array, target):
    # Your code here
    pass`,
    cpp: `#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& array, int target) {
    // Your code here
    
}`
  }
};
