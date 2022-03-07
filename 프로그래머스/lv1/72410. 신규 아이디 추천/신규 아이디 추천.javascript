function removeDot(new_id){
    if(new_id.charAt(0)==='.') new_id=new_id.slice(1);
    if(new_id.charAt(new_id.length-1)==='.') new_id=new_id.slice(0,-1);
    return new_id;
}

function newLength(new_id){
    if(new_id.length===0) new_id='a';
    
    else if(new_id.length<=2){
        new_id=new_id+new_id.charAt(new_id.length-1);
    }
    return new_id;
}

function solution(new_id) {
    let answer = '';
    
    //new_id=new_id.toLowerCase(); //1
    
    new_id=new_id.toLowerCase().replace(/[^a-z0-9-._]/g,''); //1,2
    
    while(true){ //3
        if(!new_id.includes('..')){
            break
        }
        new_id=new_id.replace('..','.');
    }
    
    new_id=removeDot(new_id); // 4

    
    if(new_id.length>=16){ //6
        new_id=removeDot(new_id.slice(0,15));
    }
    while(new_id.length<3){ //5, 7
        new_id=newLength(new_id);
    }
    
    return new_id;
}