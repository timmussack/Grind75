// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              result.push(i);
              result.push(j);
              return result;
          }
      }
  }
};

//Different approach with same time complexity, a map solution would be more optimized
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const differenceIndex = nums.indexOf(target - array[i]);
    if (differenceIndex >= 0 && differenceIndex !== i) {
      return [i, differenceIndex];
    }
  }
  return [];
}