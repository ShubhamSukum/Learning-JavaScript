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
    // console.log(this);
    this.planes++;
    console.log(`=> ${this.planes} <=`);
};

document.querySelector(".buy").
addEventListener("click",objName.func.bind(objName));

// Coding Challenge

const poll={
    question: "What is your favourite programming language?",
    options: ['0: JavaScript','1: Python','2: Rust','3: C++'],
    answers: new Array(4).fill(0),
    checked(){
        const answer=
        Number(prompt(`${this.question}\n${this.options.join('\n')}
(Write option Number)`));
        // console.log(answer);
        typeof answer==='number' && answer<this.answers.length && this.answers[answer]++;

        // console.log(this.answers);
        this.displayResult();
        this.displayResult("string");

    },

    displayResult(type="array"){
        if(type==="array"){
            console.log(this.answers);
        }
        else if(type==="string"){
            console.log(`The stringified result is => ${this.answers.join(", ")}`);
        }
    }
};

// document.querySelector(".poll").addEventListener("click",poll);
document.
querySelector(".poll").
addEventListener("click",poll.checked.bind(poll));

// poll.displayResult.call({answers:[5,2,4]});

// IFIE

// (function(){
//     console.log(`IFIE is working`);
// })()

const dunc=function(){
    let element=0;

    return function(){
        element++;
        console.log(element);
    }
}

const dunc1=dunc();

// dunc1();
// dunc1();
// dunc1();

// console.dir(dunc1);

const timer=function(n,wait){
    const perGroup=Math.trunc(n/3);

    setTimeout(function(){
        console.log(`${n} ${n===1?"is":"are"} the number of groups`);
        console.log(`There are 3 group each with ${perGroup} passengers!!`);
    },wait*1000);

    console.log(`The boarding will start in ${wait}`);
};

// timer(180,3);

// Closure Coding challenge => 2

(function(){
    const header=document.querySelector("h1");
    header.style.color="red";

    document.querySelector("body").
    addEventListener("click",function(){
        header.style.color="blue";
    });
})()

// End of Closure lecture!!
