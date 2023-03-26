'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header=document.querySelector(".header");

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
message.style.backgroundColor="grey";
message.style.height=Number.parseFloat(getComputedStyle(message).height)+10+"px";

const logo=document.querySelector(".nav__logo");
// console.log(logo.className);



