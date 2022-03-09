function solution(numbers) {
    var answer = '';
    const temp=new Array();
    numbers=numbers.sort((b,a)=>{
        let n=(a.toString()+b.toString())-(b.toString()+a.toString())
        if(n>0)return 1;
        else if(n<0) return -1;
        else return 0;
    })
    
    if(numbers[0]===0)return "0"
    return numbers.join('');
}