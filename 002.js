let basketItems = [
    {product: 'Apples', qunatity: 5, price: 100},
    {product: 'Oranges', qunatity: 7, price: 120},
    {product: 'Peaches', qunatity: 3, price: 140},
    {product: 'Grapes', qunatity: 2, price: 110}
];


function countBasketPrice(items) {
    let sumTotal = 0;
    for (let i = 0; i < items.length; i++) {
        sumTotal += items[i].qunatity * items[i].price; 
    }

    return sumTotal;
}

console.log(countBasketPrice(basketItems));