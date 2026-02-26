// A default parameter is a function parameter that assumes a pre-defined value if no corresponding argument is provided by the caller. It simplies funciton calls and makes functions more robust by preventing errors from input

function add(num1, num2) {
    const total = num1 + num2;
    console.log(`the total is: ${total}`);
    console.log(num1, num2, total);
}

add(10);

function add2(num1, num2 = 2) {
    const total = num1 + num2;
    console.log(`the total is: ${total}`);
    console.log(num1, num2, total);
}

add2(20)
add2(10, 30);

function fullname(first, last= ' '){
    const name = first + ' ' + last;
    console.log(name) ;
}

fullname('kamruzzaman' , 'kamruzzaman');
fullname('mahbuba');

// default parameters can vary depending on the data . for example:
/* string ---> " "
 number --> 0 [for add];
 number --> [for multiply]
 array--> []
 object --> {}
 boolean--> false or true
*/