'use strict';

const player0El=document.querySelector(".player--0");
const player1El=document.querySelector(".player--1");

const score0El=document.getElementById("score--0");
const score1El=document.getElementById("score--1");
const diceEl=document.querySelector(".dice");

const butNew=document.querySelector(".btn--new");
const butRoll=document.querySelector(".btn--roll");
const butHold=document.querySelector(".btn--hold");

let play=true; 

score0El.textContent=0;
score1El.textContent=0;

const switch1=function(){
    document.getElementById(`current--${active}`).
        textContent=0;
        curScore=0;
        active=active===0?1:0;

        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
};

let scores=[0,0];
let curScore=0;
let active=0;

diceEl.classList.add("hidden");

butRoll.addEventListener("click",function(){

    if(play)
    {   
        // generating a random number
        const diceNo=Math.trunc(Math.random()*6)+1;
        // console.log(diceNo);

        // displaying the changed no. as per random val
        diceEl.src=`dice-${diceNo}.png`;

        diceEl.classList.remove("hidden");

        if(diceNo!==1)
        {
            curScore+=diceNo;

            document.getElementById(`current--${active}`).
            textContent=curScore;
        }
        else
        {
            switch1();
        }
    }
    
    
});

butHold.addEventListener("click",function(){
    if(play){
        scores[active]+=curScore;

        document.getElementById(`score--${active}`).
        textContent=scores[active];

        if(scores[active]>=10){
            play=false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${active}`).
            classList.add("player--winner");

            document.querySelector(`.player--${active}`).
            classList.remove("player--active");
        }

        switch1();
    }
});
