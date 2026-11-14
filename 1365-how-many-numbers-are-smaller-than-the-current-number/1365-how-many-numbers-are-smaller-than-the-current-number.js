/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArr = []
    for(num of nums){
        let count = 0
        for(n of nums){
            if(n < num){
                count ++ 
            }
        }
        newArr.push(count)
    } 
    return newArr   
};