/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    for(let j=0;j<nums.length;j++){
        let temp=nums[j];
        for(let i=0;i<nums.length;i++){
            if(i!==j && (temp+nums[i]===target)){
                return [i,j];
            }
        }
    }
};