function solution(strings, n) {
    let answer = new Array();
    
    
    for(let s of strings){
        const alp={};
        alp["alp"]=s;
        alp["value"]=s[n];
        answer.push(alp);
    }

    answer.sort((a,b)=>{
        if(a.value>b.value)return 1;
        else if(a.value<b.value)return -1;
        else{
            if(a.alp>b.alp) return 1;
            else if(a.alp<b.alp) return -1;
            else return 0;
        }
    })
    
    for(let i=0;i<answer.length;i++){
        answer[i]=answer[i].alp
    }
    return answer;
}