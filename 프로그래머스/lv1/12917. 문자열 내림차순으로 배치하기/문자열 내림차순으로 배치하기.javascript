function solution(s) {
    
    return s.split('').sort().reverse().join('');
}


//처음 코드
// for(let i=0;i<s.length;i++){
//         if(s[i]===s[i].toLowerCase())answer.push(s[i]);
//         else upper.push(s[i]);
//     }
    
// return answer.sort().reverse().join('')+upper.sort().reverse().join('');