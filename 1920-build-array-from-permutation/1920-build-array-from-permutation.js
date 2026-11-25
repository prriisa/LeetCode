/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let resultArr = []
    for(num of nums){
        resultArr.push(nums[num])
    }
    return resultArr
    
};