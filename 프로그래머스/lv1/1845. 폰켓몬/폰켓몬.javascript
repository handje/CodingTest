function solution(nums) {
    let answer = 0;
    let numOfType=[...(new Set(nums))].length;

    return(numOfType<=(nums.length/2) ? numOfType : nums.length/2);
}