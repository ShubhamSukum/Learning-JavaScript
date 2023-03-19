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

    
  let arr=[1,2,3,4];
  const newArr=[5,6,...arr];
  newArr.sort();  // for storing

  // console.log(...newArr);

  const NEWWW=[...arr,...newArr];
  console.log(...NEWWW);

  //
  const prompttt=[
    prompt("Enter your element"),
    prompt("Enter your element"),
    prompt("Enter your element")
  ];
  console.log(prompttt);

  rest DEMO 
  console.log(NEWWW);

  const [one ,two ,...n]=NEWWW;
  console.log(one,two,n);

  //getting n number of inputs and process it!!
  const add=function(...nums){
      let sum=0;
      for(let i=0;i<nums.length;i++)sum+=nums[i];
      console.log(sum);
  }
  let nums=[1,3,2,34,14,1,123,123,12,31];
  nums.push(38);
  console.log(...nums);
  add(...nums);

  restaurant.numGuest=0;
  const guests=restaurant.numGuest||90;
  console.log(guests);  // output 90

  // nullish value opertor
  const guests11=restaurant.numGuest??90;
  console.log(guests11);  // output 0

  
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

*/

/* coding challenge 1 🧞‍♂️🤫


// 1  two players array

const [player1,player2]=game.players;
// console.log(player1,player2);

// 2 one goal kepper and other as player

const [goale1,...others1]=player1;
const [goale2,...others2]=player2;

// console.log(goale2,others2);

 // all other players except goalies XD
const otherPlayers=[...others1,...others2];

for(let i=0;i<otherPlayers.length;i++)
{
  console.log(otherPlayers[i]);
}

// 3 all players together

const allPlayers=[...player1,...player2];
// console.log(allPlayers);

// 4 Add other players in player2 array

const newly2=[...player2,"newly1","newly2","newly3"];
// console.log(newly2);



// 5 object selective selection

const {odds:{team1,x:draw,team2}}=game;
// console.log(team1,draw,team2);

// 6 Name of player scored goal return count

const six=function(...ardu){
  console.log(`${ardu.length} goals has been scored!!`);
}

six("1","2","safs","12123asd","rasda");

six(...game.scored);

// 7 passing the avaliable goals

team1>team2 && console.log("Team 1 won the game!!");
team1<team2 && console.log("Team 2 won the game!!");

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};


const MENU=[...restaurant.starterMenu,restaurant.mainMenu];
// console.log(MENU);

for(const [no,i] of restaurant.starterMenu.entries())
  console.log(no,i); 
  // const user=[{name:"shuba",branch:"IT"}];
  // console.log(user[0]?.name ?? console.log("User name not found!!"));

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

// for(const {open,close} of Object.values(restaurant.openingHours)){
//   // console.log(open,close);
// }

// const MENU=restaurant.mainMenu;
// // console.log(MENU.values());
// for(const x of MENU.values())
// {
//   console.log(x);
// }


// const x=`team1`;
// console.log(game.x);

// Bonus Challenge

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

  date: 'Nov 9th, 2037',

  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const sccore=game.scored;
let flag=0;
let Arr=[];
let objArr={};
let temp;

for(let i=0;i<sccore.length;i++)
{
  flag=0;
  if(i==0)Arr.push(sccore[0]);

  for(let j=0;j<Arr.length;j++)
  {
    if(Arr[j]==sccore[i])
    {
      flag=1;
      // console.log(`foundYA!! => ${sccore[i]}`);
      temp=sccore[i];
    // console.log(sccore[i]);
      objArr[temp]=1;
      // console.log(objArr);
    }
  }

  if(flag===0){
    Arr.push(sccore[i]);
    temp=sccore[i];
    // console.log(temp);
    objArr[temp]=1;
  }

  else{
    objArr[temp]+=1;
  }
}

console.log(objArr);
*/
// Coding challenge #2

/*
// 1 LOOP on scored!!
for(const [no,name] of game.scored.entries())
{
  console.log(`Goal ${no+1}: ${name}`);
}
*/

/*

// 2 average of obj

let avg=0;
const oddy=Object.values(game.odds);
for(const i of oddy)avg+=i;
avg/=oddy.length;
// console.log(`Average is ${avg}`);

// 3 obj manipulation

for(const [team,odd] of Object.entries(game.odds)){
  const teamStr=team==='x'?"Draw":game[team];
  console.log(`odds of ${teamStr} is ${odd}`);
}

2 odds in nice formatted way
*/

// const oddQ=Object.entries(game.odds);
// // console.log(oddQ);

// for(const [,[x,y]] of oddQ.entries())
// {
//   console.log(`${game.x} `)
//   if(x==="x"){
//     console.log(`Odds of draw: ${game.y}`);
//   }else
//   {
//     console.log(`Odds of victory of ${x}: ${y}`);
//   }
  
// }

// // SETs

// const arr=[1,313,1,414,23,412,4,12,2,2,2,2,22,1,2,1,21,2,1];
// const set1=new Set(arr);

// console.log(set1)

// // searching for element in set 
// console.log(set1.has(1));

// let objname={
//   hello:"adsnias",
//   hii:"asbubsua"
// }

// console.log(Object.keys(objname).length);
/*
// MAP

const mapy=new Map();
mapy.set("key1","value1"); // => Adding 
console.log(mapy.get("key1")); // => fetching
console.log(mapy.has("key1")); // => Checking 
console.log(mapy.delete("key1")); // => deleting 
mapy.set("key1","value1");
mapy.set("key1","value1");
mapy.set("key1","value1");
console.log(mapy)
// has and delete same like 
*/
/* 
const mapy=new Map();
mapy.set(document.querySelector("h1"),"Heading");
console.log(mapy);
*/

const MAP=new Map(
  [
    ["HELLO","namaskar"],
    ["1","namaasdskar"],
    ["2","namasqweqwkar"],
    ["3","namaqweqwskar"],
  ]
);

// for array to map
const arr2MAP=new Map(restaurant.starterMenu.entries());
// for object to map
const obj2MAP=new Map(Object.entries(restaurant.openingHours));

// console.log(arr2MAP);
// console.log(obj2MAP);

// console.log(MAP.entries());


// Coding challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1
const taks1=[...new Set(gameEvents.values())];
// console.log(taks1);

// Task 2
// gameEvents.delete(64);

// Task 3
// console.log(`An event happen on every ${90/gameEvents.size} minutes`);
const tTime=[...gameEvents.keys()].pop();
// console.log(tTime);
// console.log(`An event happen on every ${tTime/gameEvents.size} minutes`);

// Task 4 

// for(const [min , event] of gameEvents){
//   const Half=min<=46? "First":"Second";  
//   console.log(`${Half} Half  min => ${min} events => ${event}`);
// }









