function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>b-a);
    let k=people.length-1;
    
    for(let i=0;i<people.length;i++){
        if(k<=i){
            if(k===i)answer++;
            break;
        }
        if(people[i]+people[k]<=limit){
            answer++;
            k--;
        }
        else answer++;
    }
    return answer;
}