/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let newList = [];
    let lastNum = nums[0];
    newList.push(lastNum);
    for(let i = 0; i < nums.length; i++) {
        if(lastNum === nums[i]) {
            continue;
        }
        else if(lastNum < nums[i]) {
            newList.push(nums[i])
            lastNum = nums[i];
        }
    }
    return newList
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 9]))
console.log(removeDuplicates([1, 1, 2]))