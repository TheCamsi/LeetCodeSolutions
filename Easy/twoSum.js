/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let pairs = {};
    //loop through numbers
    for(i = 0; i < nums.length; i++) {
        let num = nums[i];
        //find number needed to reach targer
        let complement = target - num;
        //if the complement has an index, then return current index and index of complement
        if(pairs[complement] !== undefined) {
            return [i, pairs[complement]]
        }
        //add the current numbers index to the hashmap
        pairs[num] = i;
    }
}