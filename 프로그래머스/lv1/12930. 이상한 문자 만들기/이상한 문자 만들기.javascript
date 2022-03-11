function solution(s) {
    let answer = '';
    let count=0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
            answer+=s[i];
            count=0;
            continue;
        }
        if(count%2===0)answer+=s[i].toUpperCase();
        else answer+=s[i].toLowerCase();
        count++;
    }
    return answer;
}