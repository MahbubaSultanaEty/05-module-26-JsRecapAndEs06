// In JavaScript, var, let, and const are keywords used for declaring variables. But  primarily different in their scoping rules, ability to be reassigned or redeclared, and hoisting behavior.

// var is function-scoped, meaning a variable declared inside a block (like an if statement or for loop) can still be accessed outside that block, anywhere within the enclosing function. But var is a old way of declaring variable . it doesnt get used after the launching of ES6. IT can be redeclared . which creates confusion

var name = "mahbub";
console.log(name);

var name = "Mamun";

// Let is block-scoped and can be redeclared like var. Use let only when you explicitly know that the variable's value needs to be reassigned, such as in a loop counter. It's a part of modern ES6. let cant be redeclared, it will throw an error

let age = 20;
age = 21;

// const is the safest default choice. It is block-scoped. Use const by default as a signal that the variable's value or reference should not change, promoting more reliable code. Means, it cant be redaclared and reassigned
const c = 10;
// c = 20; [ it will throw an error ]

const arr = [1, 2];

arr.push(3); // you can add data to the array but cant reasign it a new value   
// arr = []; [ error]
console.log(arr)
