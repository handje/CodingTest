function solution(array, commands) {
    const answer=new Array();
    
    for(let c of commands){
        answer.push(array.slice(c[0]-1,c[1]).sort((a,b)=>a-b)[c[2]-1]);
    }
    return answer;
}