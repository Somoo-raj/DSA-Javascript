// problem: LeetCode #1 - two sum
// time complexity: O(n) [single loop with HasMap lookups]
// space complexity: O(n) [HashMap stores up to n elements]

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
