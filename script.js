/*
objects


const e="me";
console.log(obj.placement);
console.log(obj["students"]);

var size = Object.keys(obj).length;
console.log(size);

console.log(obj["na"+e]);

const inp=prompt("Enter name,website,students,placement or library for info");
console.log(obj[inp]);
*/

const obj={
    name1:"PICT",
    website:"www.pict.edu",
    students:840,
    placement:true,
    average:98,
    Library:"OKAY",
    percent:function(){
        if(this.average>=97){
            return `Eligible in ${this.name1}`;
        }
        else{
            return `Beta next time`;
        }
    }
};

console.log(obj.percent());