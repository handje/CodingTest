function solution(number, k) {
    const temp=[]; //stack 이용
    let answer = '';
    for(let i=0;i<number.length;i++){
        const num=number[i];
        
        while(k>0&&temp[temp.length-1]<num){
            temp.pop();
            k--;
        }
        temp.push(num);
    }
    temp.splice(temp.length-k,k); //k>0일 경우 k만큼 제외
    
    return temp.join('');
}