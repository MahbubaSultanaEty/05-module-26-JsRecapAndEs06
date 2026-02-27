// Object chaining (often called property chaining) is simply the act of accessing nested properties or methods using the dot (.) operator in a single line.
const employee = {
    name: "Dan Abramov",
    1: "desk-01",
    position: "software engineer",
    family : {
        wife: "Kseniya Abramova",
        sister: { name: "Ronnie Abrams",
            Age: 57,
            Proffession:  "District Judge "    
        }
            }
}

console.log(employee.family.sister.Age); //output: 57

// but if we try to access a property , but the properties parent object isn't defined we will get an error

// console.log(employee.family.brother.Age); // throws an error


/*this is where we can use optional chaining
 Optional chaining is a safer version of standard chaining introduced in ES2020. It allows you to read properties deep within a chain without manually checking if each level exists. It returns the value if the property object exist or returns undefined if not but doesn't throws an error
 */

console.log(employee.family.brother?.Age); //output: undefined

