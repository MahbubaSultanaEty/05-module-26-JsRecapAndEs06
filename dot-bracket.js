/* Dot Notation (obj.property)
 is the most common and readable approach. The property must be a valid identifier (no space, cant start with a number and no special character except $ or _)
 */
const employee = {
    name: "John Doe",
    1: "desk-01",
    position: "software engineer",
    "office-location": "Floor 3"
}

console.log(employee.name)
console.log(employee.position);

// console.log(employee.1) //[this will throw an error]
// console.log(employee."office-location") //[this will throw an error]



// Bracket Notaion
// The "power user" approach. It treats the key [as a string]. It can access all the properties regardless of whether they contain spaces, dashes, or start with numbers or not.

console.log(employee["office-location"]);   // output: Floor 3
console.log(employee[1]);  // output: desk-01
console.log(employee["name"]);  // output: John Doe

const key = "position";
console.log(employee[key]);
