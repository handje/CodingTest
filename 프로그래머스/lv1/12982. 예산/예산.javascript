function solution(d, budget) {
    let answer = 0;

    d=d.sort((a,b)=>a-b); //오름차순 정렬
    for(let i of d){
        if(budget<i)break;
        budget-=i;
        answer+=1;
    }

    
    return answer;
}