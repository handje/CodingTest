function solution(n) {
    let answer = 0;
    
    for(let i=2;i<=n;i++){
        let count=0;
        let j;
        for(j=2;j*j<=i;j++){
            if(i%j===0)break;
        }
        if(j*j>i)answer+=1;
    }
    
    return answer;
}