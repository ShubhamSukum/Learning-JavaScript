/*
objects
*/

const obj={
    name:"PICT",
    website:"www.pict.edu",
    students:840,
    placement:true,
    Library:"OKAY"
};

const e="me";
console.log(obj.placement);
console.log(obj["students"]);

var size = Object.keys(obj).length;
console.log(size);

console.log(obj["na"+e]);