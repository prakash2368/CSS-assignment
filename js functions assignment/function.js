//Named function

function trianglearea(a,b){
    console.log((a*b)/2);
}
trianglearea(3,4);//6

 //Function Expression
 var rectanglearea=function(l,b)
{
   console.log(l*b);
 }
 rectanglearea(5,6)

//Immediately invoked function expression

var res=(function()
{console.log("welcome to IIFE function");
})
res();//welcome to IIFE function

(function(dt){console.log(dt.toLocaleTimeString());})(new Date());//6:54:10 PM

//arrow function
const materials=['hydrogen','helium','Lithium','Beryllium'];
console.log(materials.map(material=>material.length))//(4) [8, 6, 7, 9]

hello=()=>{
    return( "hello world");//hello world
}
console.log(hello());