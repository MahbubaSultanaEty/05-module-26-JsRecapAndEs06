// Template strings, also known as template literals, are a modern programming feature that allows for more convenient and readable string manipulation, including multi-line strings, string interpolation, and embedded expressions.

const firstName = "Mahbuba";
const lastName = "Sultana";
 
console.log(`user name is ${firstName} ${lastName}`);


const sum = `doing a sum. result is ${(56 - 46) / 5}`;
console.log(sum)


const productName = "Dress";
const price = 2000;
const quantity = 2;

function createCard(productName, price, quantity) {
    const div = `
    <div class="class">
    <h2>${productName.toLowerCase()+ " converted all the lettes to lower Case"}</h2>
    <p>Total Price is ${(price) * (quantity)}</p>
    </div>`;
    console.log(div);
}

createCard(productName, price, quantity);
