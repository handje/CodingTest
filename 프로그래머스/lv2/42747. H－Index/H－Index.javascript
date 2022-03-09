function solution(citations) {
    var answer = 0;
    
    citations=citations.sort((a,b)=>b-a);
    
    for(let i=citations[0];i>=0;i--){
        let count=citations.filter(e=>e>=i).length
        if(count>=i)return i;
        
    }
    return answer;
}