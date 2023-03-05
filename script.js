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

const obj={
    name1:"PICT",
    website:"www.pict.edu",
    students:840,
    placement:true,
    average:98,
    Library:"OKAY",

    percent:function (){
    return `${this.name1} is the name \n${this.website} is the website \n${this.students} is the numbers of students\n${this.placement} is the placement state\n${this.average} is the average\n${this.Library} is the average\n`;
    }

    // percent:function(){
    //     if(this.average>=97){
    //         return `Eligible in ${this.name1}`;
    //     }
    //     else{
    //         return `Beta next time`;
    //     }
    // }

    // Didn't Worked!!
    // percent:function(){      
    //     this.name1=`Eligible in ${this.name1}`;
    //     console.log(name1);
    // }
};

console.log(obj.percent());
*/

/* Assignment Implemented

const mark={
    firstName:"Mark",
    mass:78.9,
    height:1.7,
    calcBmi:function(){
        return this.mass/this.height**2;
    }
};

const john={
    firstName:"John",
    mass:80.9,
    height:1.6,
    calcBmi:function(){
        return this.mass/this.height**2;
    }
};

console.log(john.calcBmi(),mark.calcBmi());

const bmi1=john.calcBmi();
const bmi2=mark.calcBmi()

    if(bmi1>bmi2)
    {
        console.log(`${john.firstName}'s BMI(${bmi1}) is higher than ${mark.firstName}'s BMI(${bmi2})`);
    }
    else if(bmi1<bmi2)
    {
        console.log(`${mark.firstName}'s BMI(${bmi2}) is higher than ${john.firstName}'s BMI(${bmi1})`);
    }

*/

/*
Learning javascript For loops

    for(let i=1;i<=10;i++)
    {
        console.log(`The number after iteration is ${i}`);
    }

    



for(let g=0;g<jonasArray.length;g++)
{
    if(typeof jonasArray[g]=='object')
    {
        console.log("Oops "+typeof jonasArray[g]+" occured!"+ "=> "+jonasArray[g]);
        break;
    }
    console.log(jonasArray[g],typeof jonasArray[g]);
}



const obj={
    name1:"PICT",
    website:"www.pict.edu",
    students:840,
    placement:true,
    average:98,
    Library:"OKAY"
};

const jonasArray=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','peter','Steven']
];


*/


let dice=Math.trunc(Math.random()*6)+1;
console.log(`${dice} firstly`);
let count=0;
while(dice!=6)
{
    count++;
    console.log(`${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
}

if(dice==6){console.log(`Baby we found ${dice} 🧞‍♂️ in ${count}`);}
