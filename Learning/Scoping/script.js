'use strict';

// const nameFirst="Shubham";
// const rollNo=71;

// function personal(nameFirst){
//     let no=rollNo-33;
//     console.log(`The between is ${no} ... is of ${nameFirst}`);
//     /*
//     console.log(`In outter function ${nammmm}`);
    
//     script.js:19 Uncaught ReferenceError: nammmm is not defined
//     at personal (script.js:19:39)
//     at script.js:24:1
//     */
// }


// var S=function nick(){
//     if(nameFirst==="Shubham"){
//         var nammmm="shubz";
//         // let nammmm="shubz";

//         console.log(`Real name ${nameFirst} but nickname is ${nammmm} in *******IF BLOCK****`);
//     }
//     console.log(`In Function block var is working => ${nammmm}`);
//     /* 
//         IF used let instead of var
//         let nammmm="shubz";

//         script.js:24 Uncaught ReferenceError: nammmm is not defined
//         at nick (script.js:24:56)
//         at script.js:26:1
//     */
// }

// S();
// personal("Shubham");

/* 
// console.log(year);
console.log(name1); // var can be iused for hoisting 
// console.log(error);

// let year=2002;
var name1="shubz";
// const error="404";
*/

/*

console.log(this);

// anonymous function
const calc=function(birthyear){
    console.log(2023-birthyear +` years`);
    console.log(this);
}

calc(2002);

// arrow function

const funcARR=(birthyear)=>{
    console.log( 2023-birthyear +` years`);
    console.log("funcARR "+this);
}

funcARR(2002);
*/

/*
const obj={
    firstName:"fname",
    cali:function(){
        console.log(this.firstName);
    },
}
obj.cali();

const obj1={
    firstName:"lname",
}
obj1.cali=obj.cali;
obj1.cali();
*/

/*
let jonas="teacher";
let harsh=jonas;

jonas="Udemy";

console.log(`jonas => ${jonas}`);
console.log(`harsh => ${harsh}`);
*/

/* object 
// console.log(objName,shubz);

// console.log(objName,shubz);

//{firstName: 'Shubz', lastname: 'Sukum', no: 18} 
//{firstName: 'Shubz', lastname: 'Sukum', no: 18}

*/

let objName={
    firstName:"Shubz",
    lastname:"ky mahit",
    no:17
};

let shubz=objName;
shubz.lastname="Sukum";
shubz.no=18;

const shubham=Object.assign({},shubz);
shubham.lastname="nahi sangnar";

console.log(shubz,shubham);

/* 
{firstName: 'Shubz', lastname: 'Sukum', no: 18} 
{firstName: 'Shubz', lastname: 'nahi sangnar', no: 18}
*/
