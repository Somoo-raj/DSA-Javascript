// problem: LeetCode #1 - two sum
// time complexity 

let nums = [5, 1, 9, 6]; // DSA two sum
let target = 7;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums [i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target)); // [1, 3] time complexity O(n**2)
