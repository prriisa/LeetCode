/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = 0
    let sumArr = []
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
        sumArr.push(sum)
    }
    return sumArr

};