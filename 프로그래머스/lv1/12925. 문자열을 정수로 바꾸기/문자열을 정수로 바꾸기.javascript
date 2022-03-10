function solution(s) {
    if(isNaN(s.charAt(0)))return s.charAt(0)==='-'?parseInt(s.slice(1))*-1:parseInt(s.slice(1));
    else return parseInt(s);
}