function makeTransaction(quantity, pricePerDroid) {
    const listOrderDroids = (`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`);
    return listOrderDroids;
}

console.log(makeTransaction(5, 3000));

console.log(makeTransaction(3, 1000));

console.log(makeTransaction(10, 500));