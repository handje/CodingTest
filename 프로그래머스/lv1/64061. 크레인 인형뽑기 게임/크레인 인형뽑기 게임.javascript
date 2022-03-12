function solution(board, moves) {
    let answer = 0;
    const crane=new Array();
    const basket=new Array();

    //인형의 처음 상태 세팅
    for(let i=0;i<board[0].length;i++){
        const temp=new Array();
        for(let k=board.length-1;k>=0;k--){
            temp.push(board[k][i]);
        }
        crane.push(temp.filter(e=>e!==0));
    }
    console.log(crane);
    
    for(let m of moves){
        if(crane[m-1].length===0)continue;
        
        let toy=crane[m-1].pop();
        
        if(toy===basket[basket.length-1]){
            basket.pop();
            answer++;
        }else basket.push(toy);

    }
    
    
    return answer*2;
}