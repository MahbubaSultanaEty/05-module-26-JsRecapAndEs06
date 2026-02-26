/*
funciton declaration syntax: 
	function name() { ... }

    Fully hoisted: Can be called before define and must always have a name
*/
console.log(add(10, 20));
function add(a, b) {
    return a+b;
}



/*function expression 
const name = function() { ... };

 Not hoisted: Calling before definition causes a ReferenceError and anonymous or named
*/

// console.log(add2(20,40)); [this will throw a reference error]
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(20, 40));


// arrow Function 
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

//  so basically arrow function is a shortcut where you directy write a function in a varible without the keyword function and return if you have one line function .
// also parantheses are optional if there is only one parameter
const square = x => x * x;
const cube = (y) => y * y * y;
console.log(square(5));
console.log(cube(10));

// if there is no parameter then parantheses are must;
const getPi = () => 3.1416;
console.log(getPi());

// you can also check boolean in a arrow function
const isEven = num => num % 2 === 0;
console.log(isEven(5));

// Multi-line Body Requires curly braces {} and an explicit return.
const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const multiply = x *y;
    const divide  = x / y;
    const addDouble = x + x + y + y;
    const isOdd = num => num % 2 === 1;
    return `sum: ${sum}, difference: ${difference}, mulplication: ${multiply}, divide ${divide}, addDouble: ${addDouble}, isOdd ${isOdd}`;
}

console.log(doMath(5, 10));

// real-life use case;
document.getElementById(btn).addEventListener("click", (event) => {
    console.log("btn clicked");
})