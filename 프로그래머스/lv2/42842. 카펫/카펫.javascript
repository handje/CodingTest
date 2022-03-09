function solution(brown, yellow) {
    let answer = [];
    const total=brown+yellow;
    
    for(let h=3;h<=brown;h++){ //최소높이는 3
        if(total%h!=0)continue;
        else{
            w=total/h;
            if((w-2)*(h-2)===yellow) return [w,h]
        }
    }
    return answer;
}