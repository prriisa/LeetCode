/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let a = 0; a < nums.length; a++){
        for (let b = 0; b < nums.length; b++){
            if(a == b) continue;
            else {
                if(nums[a] + nums[b] == target){
                    return [a, b];
                }
            }
        }
    }
};