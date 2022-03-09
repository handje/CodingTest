function solution(participant, completion) {   
    participant=participant.sort();
    completion=completion.sort();
    
    console.log(participant);
    console.log(completion);

    for(let i=0;i<completion.length;i++){
        if(participant[i]!=completion[i]) return participant[i]
    }
    return participant[participant.length-1];
}