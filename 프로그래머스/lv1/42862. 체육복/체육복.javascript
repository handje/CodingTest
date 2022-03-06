function solution(n, lost, reserve) {
    const clothes=new Array(n).fill(1);
    
    for(let i of lost) clothes[i-1]-=1;
    for(let i of reserve) clothes[i-1]+=1;

    for(let i=0;i<n;i++){
        if(clothes[i]!=0)continue;
        else if((i===0&&clothes[i+1]<=1) || (i===n-1&&clothes[i-1]<=1))continue;
        else{
            if(clothes[i-1]>1){
                clothes[i]++;
                clothes[i-1]--;
            }else if(clothes[i+1]>1){
                clothes[i]++;
                clothes[i+1]--;
            }
        }
    }

    return clothes.filter(e=>e!=0).length;
}