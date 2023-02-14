/*function statement or function diclaration
  syntax = ES5
keyword nameOfFunction(parameters){
    return output
}*/
//function defination/ declaration
function add(a,b){
    return a+b;
}
console.log(add(1,2));

//------------------------------------------------------------------------------


//Annonymous function -  a function without name and it doesnt have an identity
//used when the func are used as values
//function (){

//}
//function expression
var c = function() {
    console.log("Hello World");
};
c();

//--------------------------------------------------------------------------------------
 
let x;
function oddOrEven (a){
    if(a% 2===0){
        x="even";
    }
    else{
        x ="odd";
    }
    return x;

}
console.log(oddOrEven(4));

//--------------------------------------------------------------------------------------

//Arrow function - ES6
let addNum = (a,b) => a + b;
console.log(addNum(2,3));

//greater Number a,b
let largeNum = (a,b) => {
    if(a > b) return "a is greater";
    else return "b is greater";
};
console.log(largeNum(10,20));


let oddNum1 = (a) =>{
    if(a% 2===0) return "even";
    else return "odd"
};
console.log(oddNum1(10,15));


// `` back tick
function isEven(num1) {
    let out
    if(num1%2===0){
     out = `Number ${num1} is even`;
    } else {
        out = `Number ${num1} is odd`;
    }
    return out;
}
console.log(isEven(3));
console.log(isEven(88));
//-----------------------------------------------------------------------------

//IIFE - Immediate involved function expression
(function () {
    console.log("Hello Faiza");
}) ();


