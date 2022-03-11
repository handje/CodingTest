function solution(x) {
    const sum=x.toString().split('').reduce((prev,curr)=>parseInt(prev)+parseInt(curr));
    return Number.isInteger(x/sum);

}