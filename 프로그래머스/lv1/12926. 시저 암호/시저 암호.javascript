function solution(s, n) {
    let answer = '';
    
    for(let i=0;i<s.length;i++){
        const ascii=s.charCodeAt(i);
        if(s[i]===' ')answer+=' ';
        else 
        {
            let move=0;
            if(s[i]===s[i].toUpperCase()&&ascii+n>90)move=(ascii+n)%30+64;
            else if(s[i]===s[i].toLowerCase()&&ascii+n>122)move=(ascii+n)%30+94;
            else move=ascii+n;
            answer+=String.fromCharCode(move);
        }
    }
    return answer;
}