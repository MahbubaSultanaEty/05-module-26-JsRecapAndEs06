// The for...in loop is a classic way to loop through the keys (property names) and values of an object. 
const product = {
    id: 101,
    name: "Wireless Mouse",
    brand: "LogiTech",
    price: 1200,
    inStock: true,
    rating: 4.5
}

for (const key in product) {
    console.log(key); //output: id // name // brand// price// inStock // rating
    const value = product[key]; 
    console.log(key, value);  // output: id 101
    // name
    // name Wireless Mouse
    // brand
    // brand LogiTech
    // price
    // price 1200
    // inStock
    // inStock true
    // rating
    // rating 4.5
}


        /* the for...of loop is for Iterables (like Arrays, Strings)
                    */


for (const char of "Hello") {
    console.log(char); //output:  H, i, l ,l , o
}


const flowers = ["rose", "lilies", "tulip", "sunflower"];
for (const flower of flowers) {
    console.log(flower); //output: rose // lilies //tulip //sunflower
}

