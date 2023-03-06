'use strict';

// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".label-highscore").textContent);
// console.log(document.querySelector(".guess").value);

let NO=Math.trunc(Math.random()*20+1);
// document.querySelector(".number").textContent=NO; //answer
let highscore=0;

let score=5;
document.querySelector(".score").textContent=5;

document.querySelector(".check").
addEventListener('click',function(){

    const num=Number(document.querySelector(".guess").value);
    console.log(num);

    if(!num){
        document.querySelector(".message").textContent="No Input!";
    }

    else if(num===NO){
            // Styling
            document.querySelector("body").
            style.backgroundColor="green";

            document.querySelector(".number").textContent=NO;
            
            document.querySelector(".badge").style.fontSize="2.3rem";
            
            document.querySelector(".message").
            textContent="Correct Answer!";

            score+=20;
            console.log(document.querySelector(".score").
            textContent=score);

            document.querySelector(".highscore").textContent=
            highscore>score?highscore:score;
    }
    
    else if(num>NO){

        if(score>1)
        {
            document.querySelector(".message").
            textContent="HIGH!!";

            score--;
            console.log(document.querySelector(".score").
            textContent=score);
        }
        else{
            document.querySelector(".message").
            textContent="Game Over!!";

            document.querySelector(".score").
            textContent=0;
        }
    }
    
    else if(num<NO){
        if(score>1)
        {
            document.querySelector(".message").
            textContent="LOW!!";

            score--;
            console.log(document.querySelector(".score").
            textContent=score);
        }
        else{
            document.querySelector(".message").
            textContent="Game Over!!";

            document.querySelector(".score").
            textContent=0;
        }
    }
});

document.querySelector(".again").addEventListener
("click",function(){
    NO=Math.trunc(Math.random()*20+1);
    document.querySelector(".number").textContent="?";
    // document.querySelector(".number").textContent=NO; // answer

    document.querySelector(".message").
    textContent="Start guessing...";

    document.querySelector(".guess").value="";

    document.querySelector("body").style.backgroundColor="#222";
});