const faker = require('faker');
const fs = require('fs');

generateProduct = () => {
    return {
        product_id: faker.random.number({min: 1, max: 9999}),
        product_name: faker.commerce.productName(),
        product_price: faker.commerce.price(100,2000),
        product_qty: faker.random.number({min: 0, max: 150})
    }
}

var products = [];
const products_count = 500;

for(i = 0; i < products_count; i++){
    products[i] = generateProduct();
}
generatePart = () => {
    return{
        part_id: faker.random.number({min: 1, max: 9999}),
        part_name: faker.commerce.productName(),
        part_price: faker.commerce.price(500,5000),
        part_qty: faker.random.number({min: 1, max: 500})
    }
}

var parts = [];
const parts_counter = 1000;

for(i = 0; i < parts_counter; i++){
    parts[i] = generatePart();
}

const userRoles = ['sales', 'department', 'assembly', 'worker'];

generateUser = () => {
    return{
        user_id: faker.random.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        user_role: faker.random.arrayElement(userRoles)
    }
}

var users = [];
const users_counter = 150;

for(i = 0; i < users_counter; i++){
    users[i] = generateUser();
}

var db = {
    products: products,
    parts: parts,
    users: users
}

fs.writeFile('./fakeDatabase.json', JSON.stringify(db), (err)=>{});