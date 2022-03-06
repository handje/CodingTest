function solution(N, stages) {
    let answer = new Array();
    let fail={};
    
    stages=stages.sort((a,b)=>a-b);
    for(let i=0;i<N;i++){
        let clearUser=stages.filter(e=>e>=i+1).length;
        let failUser=stages.filter(e=>e===i+1).length;
        if(clearUser===0) fail[i+1]=0;
        else fail[i+1]=failUser/clearUser;
    }
    
    const failure=Object.values(fail).sort((a,b)=>b-a); //딕셔너리의 값을 배열로

    for(let f of failure){
        let index=parseInt(Object.keys(fail).find(key => fail[key] === f))
        answer.push(index);
        fail[index]=-1;

    }
    return answer;
}