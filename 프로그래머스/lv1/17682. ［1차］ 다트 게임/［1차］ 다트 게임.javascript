function solution(dartResult) {
    let temp=new Array();
    let num='';
    
    for(let i=0;i<dartResult.length;i++){
        if(!isNaN(dartResult[i])){
            num+=dartResult[i];
        }
        else{
            num*=1;
            switch(dartResult[i]){
                case 'S':
                    temp.push(num);
                    break;
                case 'D':
                    temp.push(num**2);
                    break;
                case 'T':
                    temp.push(num**3);
                    break;
                case '*':
                    temp[temp.length-1]*=2;
                    temp[temp.length-2]*=2;
                    break;
                case '#':
                    temp[temp.length-1]*=-1;
                    break;
            }
            num='';
        }
    }
    return temp.reduce((prev,curr)=>prev+curr);
}