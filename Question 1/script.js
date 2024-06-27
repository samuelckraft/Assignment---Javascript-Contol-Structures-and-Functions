//Task 1

let loggedIn = true;

if (loggedIn) {
    console.log("Welcome to the store!")
} else {
    console.log("Please log in before browsing")
}

//Task 2

let products = [{article:'shirt', price: 10.99}, {article:'pants', price: 15.99}, {article:'shoes', price: 20.99}]

let cart = []


function display_items() {
    console.log("Products:")
    for (let product of products) {
        console.log(`${product.article} - $${product.price}`);
    }
}

display_items()

function add_item(article) {
    let product = products.find(p => p.article === article);
    if (product) {
        cart.push(product);
        console.log(`${product.article} has been added to your cart.`);
        return;
    } else {
        console.log("Product not found.");
    }
}

add_item('shirt')
add_item('pants')

//Task 3

function calculateTotalCost() {
    let totalCost = 0;
    for (let item of cart) {
        totalCost += item.price;
    }
    console.log(`The total cost of your cart is $${totalCost.toFixed(2)}`);
}

calculateTotalCost()