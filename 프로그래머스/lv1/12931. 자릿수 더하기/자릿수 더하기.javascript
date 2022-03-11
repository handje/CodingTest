function solution(n)
{
    if(n/10<1)return n;
    
    return n.toString().split('').reduce((prev,curr)=>parseInt(prev)+parseInt(curr));
}