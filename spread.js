// The spread operator (...) in JavaScript is used to "unpack" or expand the elements of an iterable (like an array, string, or object) into individual elements.
const max = Math.max(4, 3, 6, 7, 8, 9, 7);
console.log(max);

const numbers = [3, 5, 2, 6, 8];
const max2 = Math.max(numbers);
console.log(max2); // output will be NaN; Because max doesnt work directly with array. but you can unpack the numbers as individuals with spread operator;
const max3 = Math.max(...numbers);
console.log(max3); // this will give a correct answer

const parameters = [23, 45, 67];
function sum(a, b, c) {
    return a + b + c;
}
const result = sum(parameters);;
console.log(result); // it wont give a correct output cause parameters is only the first parameter of the function . and the other two are undefined. But you can use these number in this array as individual parameters with parameter
const result2 = sum(...parameters); 
console.log(result2);//gives a correct output


// if you assign a variables value to a new variable. then try to change one of them, both of them will change. but it can also be solved with spread operator
const arr1 = [2, 3, 4];
const arr2 = arr1;
arr2.push(5);
console.log(arr1, arr2) //output: [ 2, 3, 4, 5 ] [ 2, 3, 4, 5 ]

const arr3 = [2, 3, 4];
const arr4 = [...arr3];
arr4.push(5);
console.log(arr3, arr4) //output: [ 2, 3, 4 ] [ 2, 3, 4, 5 ]


// same goes for object
const person = { name: "Mahbuba", Age: 23 , profession: "student"};
const person2 = person;
person2.Age = 20;
console.log(person, person2) //outpu= { name: 'Mahbuba', Age: 20 } { name: 'Mahbuba', Age: 20 };

const person3 = { ...person };
person3.Age = 22;
person3.profession = "developer";

console.log(person, person3); //output= { name: 'Mahbuba', Age: 20, profession: 'student' } { name: 'Mahbuba', Age: 22, profession: 'developer' } --------------- this time {person} value didn't changed

