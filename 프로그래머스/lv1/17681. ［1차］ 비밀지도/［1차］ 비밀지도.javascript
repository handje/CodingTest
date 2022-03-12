function change(arr,i){ //2진수로 변환
    let string=arr[i].toString(2);
    return  string.length===arr.length?string:'0'.repeat(arr.length-string.length)+string;
}

function solution(n, arr1, arr2) {
    const answer = new Array();
    
    for(let i=0;i<arr1.length;i++){
        arr1[i]=change(arr1,i);
        arr2[i]=change(arr2,i);
    }

    for(let i=0;i<arr1.length;i++){
        let temp='';
        for(let k=0;k<arr1[0].length;k++){
            if(arr1[i][k]==='1'||arr2[i][k]==='1') temp+='#';
            else temp+=' ';
        }
        answer.push(temp);
    }

    return answer;
}