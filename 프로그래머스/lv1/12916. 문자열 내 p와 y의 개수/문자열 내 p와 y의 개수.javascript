function solution(s){
    let count=0;

    s=s.toLowerCase(s);
    
    for(let i=0;i<s.length;i++){
        if(s[i]==='p')count+=1;
        else if(s[i]==='y')count-=1;
        else continue;
    }
    
    return count===0?true:false;
}