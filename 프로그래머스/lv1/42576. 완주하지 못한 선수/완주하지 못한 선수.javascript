function solution(participant, completion) {
    participant=participant.sort();
    completion=completion.sort();

    for(let i=0;i<participant.length;i++){
        if(i>=completion.length)return participant[i];        
        else if(participant[i]!=completion[i]){
            return participant[i]
        }
    }
}