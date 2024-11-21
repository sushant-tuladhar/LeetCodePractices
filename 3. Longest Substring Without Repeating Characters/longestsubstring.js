/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let temp=1;
    let maxValue=1;
    let tempChar=[];
    tempChar.push(s[0]);

    for(let i=1;i<s.length;i++){
        if(!tempChar.includes(s[i])){
            temp++;
            tempChar.push(s[i]);
        }
        else{
            if(maxValue<temp){
                maxValue=temp;
            }
            temp=1;
            tempChar=[];
            tempChar.push(s[i]);
        }
    }
    return maxValue;
};

