'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/*
  DESTRUCTURING

  let arr=[2,3,4,5];
  let [a,b]=arr;

  let temp=a
  a=b;
  b=temp;
  // console.log(arr);

  let [A,B]=restaurant.order(0,2);

  let temp1=A;
  A=B;
  B=temp1;

  // console.log(A,B);
  // destructuring inside destructuring

  const er=[11,21,[12,32]];
  let [s,,[t,r]]=er;
  console.log(s+" "+t,r);


  const shubz1={
  name1:"asdnasid",
  js:"vs",
  };
  console.log(shubz1);
  Object.assign(shubz1,restaurant);

  console.log(shubz1);

  
  const {name:N,openingHours:O,categories:C,shubz=[]}=restaurant;
  // // console.log(shubz);
  // console.log(N);

*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(st,rd){
    return [this.categories[st],this.categories[rd]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
}

let arr=[1,2,3,4];
const newArr=[5,6,...arr];
newArr.sort();  // for storing

// console.log(...newArr);

const NEWWW=[...arr,...newArr];
// console.log(...NEWWW);

// //
// const prompttt=[
//   prompt("Enter your element"),
//   prompt("Enter your element"),
//   prompt("Enter your element")
// ];
// console.log(prompttt);

// rest DEMO 
// console.log(NEWWW);

// const [one ,two ,...n]=NEWWW;
// console.log(one,two,n);

const add=function(...nums){
    let sum=0;

    for(let i=0;i<nums.length;i++)
    {
      sum+=nums[i];
    }

    console.log(sum);
}

let nums=[1,3,2,34,14,1,1];
console.log(...nums);
add(...nums);