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

trans("Javascript mastery",first);
trans("Javascript mastery",second);
