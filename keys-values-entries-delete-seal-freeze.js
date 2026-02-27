// Object.keys() is a method that returns an array of a given objects own string keyed property names. It is one of the most common way to convert an object into an iterable format [array].

const user = { name: "Mahbuba", age: 23, role: "Developer" };
const keys = Object.keys(user);
console.log(keys);



// Object.values() is the direct counterpart to Object.keys(). It returns an array containing the values of an object's own values of  string-keyed properties
const product = {
  title: "Dairy Milk",
    price: 200,
  description: "Discover Cadbury Dairy Milk - Made with a glass and a half of fresh milk"
};
const values = Object.values(product);
console.log(values);



// Object.entries() is the merged method of object.keys() and object.values(). It returns an array of arrays, where each inner array is a pair.

const result = {
  math: 80,
  english: 75,
  physics: 90
};
const entries = Object.entries(result);
console.log(entries);



// The delete operator is used to remove a property from an object.
const settings = {
  darkMode: true,
  notifications: false,
    autoSave: true,
    write: false,
  delete: false
};
delete settings.autoSave;
delete settings.write;

settings.notifications = true; //changed the value of an existing key
settings.read = true; //added a new key and value
console.log(settings);



// Object.freeze() is the ultimate "lock" for an object. Once frozen, an object becomes immutable: you cannot add, delete, or change any properties.
const scoreboard = {
  teamA: 120,
  teamB: 115,
  teamC: 98
};
Object.freeze(scoreboard);
delete scoreboard.teamA;
scoreboard.teamD = 56;

scoreboard.teamA = 10;

console.log(scoreboard) // output : { teamA: 120, teamB: 115, teamC: 98 }



// Object.seal() is the "middle ground" of object restriction. It prevents adding or removing properties but allows you to change the values of existing properties.
const cart = {
  rice: 1,
  oil: 2,
  salt: 3
};
Object.seal(cart);

cart.rice = 5;
delete cart.oil;
cart.flour = 4;

console.log(cart);