# DSA-Javascript
/*
problem: LeetCode #1 -  two sum
logic: element of complement (target - num) searching in HasMap
time complexity: O(n)
space complexity: O(n)
*/

var twoSum = function (nums, target) {
    let map = new Map(); // extra memory O(n)
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  
        // if the complement is found in the map.
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        // store the value and its index.
        map.set(nums[i], i);
    }
};
