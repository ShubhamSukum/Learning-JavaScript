'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header=document.querySelector(".header");
const btnScroll=document.querySelector(".btn--scroll-to");
const section1=document.getElementById("section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='Its Working <button class="btn btn--close">WORKED</button>';
header.append(message);


// console.log(sec1);

/* Self Prac */
// Adding a button before section--1
// Button Between => ButBet

// Code
// const sec1=document.getElementById("section--1");
// document.body.addEventListener("click",function(){
//   const butBet=document.createElement("button");
//   butBet.innerHTML="Button text";
//   sec1.before(butBet);
// })

// Removing DOM
document.querySelector(".btn--close").addEventListener("click",function(){
  message.remove();
})

// console.log(message.style);
// console.log(getComputedStyle(message).color);

// message.style.width="120%";
// message.style.backgroundColor="grey";
message.style.height=Number.parseFloat(getComputedStyle(message).height)+15+"px";

const logo=document.querySelector(".nav__logo");
// console.log(logo.className);

btnScroll.addEventListener("click",function(){
  // const s1Cords=section1.getBoundingClientRect();
  // console.log(s1Cords);
  section1.scrollIntoView({behavior:"smooth"});
});


// mouse Events
const h1=document.querySelector("h1");

// h1.onmouseenter=function(e){ 
// console.log(e);
// console.log("Working with mouseenter!!")
// }

// const H=h1.addEventListener("mouseenter",function(){
//     console.log("Hovered on H1 element");
// });

// h1.removeEventListener("mouseenter",H)

// setTimeout(()=>h1.removeEventListener("mouseenter",H),1000);
  

// const w=document.querySelector("body");

// // for clicking
// w.onmousedown=function(){
//   console.log("HELLO!!");
// };

// random Color generating function

// const randomInt=(min,max)=>{Math.floor(Math.random()*(max-min+1)+min);} // gives error
// const randomInt1=(min,max)=>{return Math.floor(Math.random()*(max-min+1)+min);} // works well

// Explaination ={
  // diff = (max-min+1) so values will be between that vakue only.. 
  // and then adding min as value generated from Math.random()*(max-min+1) will RANGE from 0 to diff
  // and to range it Between min and max we add max and it will be between them only as (Math.random()*(max-min+1) will RANGE from 0 to diff)
// }

const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);  // works well
const randColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randColor(0,255))

// document.querySelector(".nav__links").addEventListener("click",function(e){
//   e.stopPropagation();
//   this.style.backgroundColor=randColor();
//   // console.log("working")
// });

// document.querySelector(".nav").addEventListener("click",function(){
//   this.style.backgroundColor=randColor();
//   // console.log("working")
// });

// console.log(randColor());

// document.querySelectorAll(".nav__link").forEach(function(el){
//   el.addEventListener("click",function(e){
//     e.preventDefault();
//     // console.log(this);
//     const id=this.getAttribute("href");
//     // console.log(this.getAttribute("href"));
//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   })
// });

document.querySelector(".nav__links").
addEventListener("click",function(e){
  e.preventDefault();
  
  if(e.target.classList.contains("nav__link")){
    console.log("LINK"+e.target.getAttribute("href"));                                                                  
    const id=e.target.getAttribute("href");                                           
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
}); 
    // console.log(e.target);
    //comments
    // LINK#section--1
    // console.log(this);
    // console.log(this.getAttribute("href"));




