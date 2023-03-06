'use strict';

// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".label-highscore").textContent);
// while(true)
// console.log(document.querySelector(".guess").value);

const NO=Math.trunc(Math.random()*20+1);
document.querySelector(".number").textContent=NO;

document.querySelector(".check").
addEventListener('click',function(){
    const num=Number(document.querySelector(".guess").value);
    console.log(num);

    if(!num){
        document.querySelector(".message").textContent="No Input!";
    }else if(num===NO){
        document.querySelector(".message").textContent="Correct Answer!";
    }else if(num>NO){
        document.querySelector(".message").textContent="HIGH!!";
    }else if(num<NO){
        document.querySelector(".message").textContent="LOW!!";
    }
});