const person = {
  personName: "Rahim",
  age: 22,
  city: "Dhaka",
  country: "Bangladesh"
};

const { personName, ...rest } = person;

console.log(personName);      // Rahim
console.log(rest); 

const product = {
    name: "Aghanoor",
    price: 10000,
    description: " Pure Embroidered Cotton Net Suit"
}

const newPrice = product.price;
const dressName = product.name;
console.log(`dress name is ${newPrice}`);


// Object destructuring is a JavaScript syntax feature that allows you to extract multiple properties from an object and assign them to distinct variables in a single statement
/* You use curly braces {} on the left side of an assignment to list the properties you want to extract: 
*/
const { name2, price2 } = {
    name2: "Aghanoor",
    price2: 10000,
    description: " Pure Embroidered Cotton Net Suit"
};
console.log(name2, price2);

// const product2 = {
//     name: "Iphone",
//     price: 100000,
//     brand: "apple"
// }


/* ou can extract a property and assign it to a variable with a different name using a colon */

// const { name, price: amount }={name: "Iphone", price: 100000,      brand: "apple"}
        

// console.log(name, amount);


/* also you can assign a default valua to new variable that doesnt exist in the object;
*/
const { name, price: amount, camera = "48MP" } = { name: "Iphone", price: 100000, brand: "apple" };

console.log(name, amount, camera);


        /* same goes for array
                */
const [first, second] = [12, 23, 45, 67, 89];
console.log(first, second);

// or
const numbers = [1, 2, 3, 4, 6, 7];
const [num1, num2, num3] = numbers;
console.log(num1, num2, num3)