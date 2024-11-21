/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums= [...nums1,...nums2]
    let temp=nums.sort(function(a,b){
        return a-b;
    });
    let index;
    
    if(temp.length%2==0){
        index=temp.length/2;
        return (temp[index]+temp[index-1])/2;
    }
    else{
        index=parseInt(temp.length/2);
        return temp[index];
    }
};