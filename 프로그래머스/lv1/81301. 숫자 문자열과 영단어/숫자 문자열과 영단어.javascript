function solution(s) {
    const alp={'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9};
    
    while(true){
        if(!isNaN(s)) return parseInt(s);
        else{
            for(let a in alp){
                if(s.includes(a))s=s.replace(a,alp[a]);
            }
        }
    }
}