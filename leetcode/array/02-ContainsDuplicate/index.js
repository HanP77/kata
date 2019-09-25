// https://leetcode.com/problems/contains-duplicate/description/

const nums = [1, 2, 3, 1];
const target = 9;

const containsDuplicate = function(nums) {
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashTable.hasOwnProperty(nums[i])) return true;

    hashTable[nums[i]] = i;
  }

  return false;
};

// Other Solution

var containsDuplicate2 = function(nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;

    if (obj[nums[i]] > 1) return true;
  }

  return false;
};

// containsDuplicate(nums, target);
console.log(containsDuplicate(nums));
