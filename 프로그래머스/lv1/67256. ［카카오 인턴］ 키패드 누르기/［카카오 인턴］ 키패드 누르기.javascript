function solution(numbers, hand) {
    let answer = '';

    let center = [2,5,8,11]
    let leftHand = 10;
    let rightHand = 12;
    let dist_L = 0;
    let dist_R = 0;

    for(let i = 0 ; i < numbers.length; i++){
        let val = numbers[i]
        if (numbers[i] == 0 ){
            val = 11;
        }
        if ( val == 1 || val == 4 || val == 7){
            answer += 'L';
            leftHand =  val;
        } else if (val == 3 || val == 6 || val == 9){
            answer += 'R';
            rightHand =  val;
        } else{ //두 손가락의 거리 비교
            dist_L = center.indexOf(leftHand) != -1 ? Math.abs(val - leftHand ) /3 : Math.abs(val-1 - leftHand ) /3 +1;
            dist_R = center.indexOf(rightHand) != -1 ? Math.abs(val - rightHand ) /3 : Math.abs(val+1 - rightHand ) /3 +1;

            if (dist_L == dist_R){
                if (hand == "right"){
                    answer += 'R'
                    rightHand = val;
                } else{
                     answer += 'L'
                    leftHand = val;   
                } 
            } else if(dist_L > dist_R) {
                answer += 'R'
                 rightHand = val;
            } else{
                answer += 'L'
                leftHand = val;
            }
        }

    }
    return answer;
}