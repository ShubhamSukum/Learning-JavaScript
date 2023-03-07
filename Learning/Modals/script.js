'use strict';

const butts=document.querySelectorAll(".show-modal");
const modal=document.querySelector(".modal");
const butCloseModal=document.querySelector(".close-modal");
const overlays=document.querySelector(".overlay");

const openModal=function(){
    console.log("Button CLicked!!");
    modal.classList.remove("hidden");
    overlays.classList.remove("hidden");
    // modal.style.display="block";
};

const funcDRY=function(){
    modal.classList.add("hidden");
    overlays.classList.add("hidden");
    console.log("Button Closed🤫");
};

for(let i=0;i<butts.length;i++)
butts[i].addEventListener("click",openModal);

butCloseModal.addEventListener("click",funcDRY);
overlays.addEventListener("click",funcDRY);

document.addEventListener("keypress",function(event){
    if(event.key==="-" && !modal.classList.contains("hidden")){
        funcDRY();
    }
});
