function solution(record) {
    var answer = [];
    const nickname={};
    for(let r of record){
        const rec=r.split(" ");
        if(rec[0]!="Leave"){
            nickname[rec[1]]=rec[2];
        }
    }

    for(let r of record){
        const rec=r.split(" ");
        if(rec[0]=="Enter"){
            answer.push(`${nickname[rec[1]]}님이 들어왔습니다.`);
        }else if(rec[0]=="Leave"){
            answer.push(`${nickname[rec[1]]}님이 나갔습니다.`);
        }
      }  
    return answer;
}