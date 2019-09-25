// https://leetcode.com/problems/two-sum/description//

const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = function(nums, target) {
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hashTable.hasOwnProperty(complement)) {
      return [hashTable[complement], i];
    }
    hashTable[nums[i]] = i;
  }

  return `No solutions`;
};

// twoSum(nums, target);
console.log(twoSum(nums, target));
