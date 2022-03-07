function rank(win){
    if(win<2) return 6;
    return 7-win;
}

function solution(lottos, win_nums) {
    const answer=new Array(2);
    answer.fill(0);
    let win=0;

    lottos.map((num)=>{
        if(win_nums.includes(num)){
           win+=1
        }
    })

    answer[0]=rank(win+lottos.filter(n=>n===0).length)
    answer[1]=rank(win)

    console.log(answer)
    return answer;
}