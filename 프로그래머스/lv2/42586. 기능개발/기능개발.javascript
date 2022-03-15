function solution(progresses, speeds) {
    const answer = [];
    const day=new Array();
    
    //작업일 계산
    for(let i=0;i<progresses.length;i++){
        const reserve=100-progresses[i];
        day.push(Math.ceil(reserve/speeds[i]));
    }

    let first=day[0];
    let count=1;
    for(let i=1;i<day.length;i++){
        if(day[i]>first){
            answer.push(count);
            first=day[i];
            count=1;
        }else{
            count++;
        }
        if(i===day.length-1)answer.push(count);

    }
    return answer;
}