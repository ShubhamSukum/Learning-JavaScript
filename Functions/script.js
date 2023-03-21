'use strict';

// let Arr=[];

// function shubz(cns=40,cc=40,wadl=40,dsbda=40){
//     const obj={
//         cns,
//         cc,
//         wadl,
//         dsbda
//     };

//     Arr.push(obj);

//     console.log(obj);
// }

// shubz(58,58);
// shubz(70,70,70,38);

// Procrastination 1-0


// -------------------------------------------
/*
const first=function(str){
    return str.replace(/ /g,"").toUpperCase();
}

const second=function(str,fn){
    const [first,...others]=str.split(" ");
    return [first.toUpperCase(),...others].join(" ");
};

const trans=function(str,fn){
    console.log(`Original string => ${str}`);

    console.log(`Maniplulated => ${fn(str)}`);
    console.log(`${fn.name} function`)
}

// trans("Javascript mastery",first);
// trans("Javascript mastery",second);

const first1=function(greeting){
    return function(greet){
        console.log(`${greeting}*****${greet}`);
    };
};


const arrow1=(greeting)=>{
    return (greet)=>{
        console.log(`${greeting} => ${greet}`);
    };
};

// const func=first1("Shubham");
// func("HELLOOOO!!")

// first1("Shubz")("Hello!");

// arrow function



// arrow1("SHubz")("hello");


// objName.add("Shubham Sukum","Te-11");
// objName.add("ky mahit kon","Te-12");
// objName.add("ky mahit sudbua","se-12");
// console.log(objName.friends);

*/

const objName={
    name:"Shubz",
    class:11,
    friends:[],

    add(friName,nameClass){
        console.log(`Function name => ${this.name} from class ${this.class} is adding ${friName} from ${nameClass} as his friend!!`);
        this.friends.push({name:friName,class:nameClass});
    }
};

const real={
    name:"real",
    class:"High",
    friends:[]
};
const friend=objName.add;

const dotdot=["argument","values"];

// friend.call(real,...dotdot);
// console.log(...dotdot);

// call the function from where we need it to call it. 
// friend.call(real,"Shreetej","Medical");
// friend.call(objName,"ObjName..","Class no idea");

// document.querySelector("buy").
// addEventListener("click",);

const Bind1=friend.bind(real);

// Bind1("shubz","opieee");

objName.planes=200;

objName.func=function(){
    console.log(this);
    this.planes++;
    console.log(`=> ${this.planes} <=`);
};

document.querySelector(".buy").
addEventListener("click",objName.func.bind(objName));