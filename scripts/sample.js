let idElement = document.getElementById("product");
let numberElement = document.getElementById("number");
let purchases = [];
let products = {
    "1" : {name : "Original blend 200g", price: 500},
    "2" : {name : "Original blend 500g", price: 900},
    "3" : {name : "Special blend 200g", price: 700},
    "4" : {name : "Special blend 500g", price: 1200}
    
}
function add() {
    const selectedProduct = products[idElement.value];
    price = selectedProduct.price;
    number = parseInt(numberElement.value);
    const purchase = {
        name : selectedProduct.name,
        price : price,
        number: number,
    };
    let existingPurchase = purchases.find(item => item.price === purchase.price);

    if (existingPurchase) {
        existingPurchase.number += purchase.number;
    } else {
        purchases.push(purchase);
    }
    window.alert(`${displayPrices()}\nsubtotal ${subtotal()}¥`);
}



function calc() {
    const items = displayPrices();
    const subTotal = subtotal();
    const postage = calcPostage(subTotal);
    const total = subTotal + postage;

    const message = `Detalles de la compra:\n\n${items}\nSubtotal: ${subTotal}¥\nGastos de envío: ${postage}¥\nTotal: ${total}¥`;

    window.alert(message);
}

function calcPostage(x) {
    if (x == 0 || x >= 3000) {
        return 0;
    } else if (x < 2000){
        return 500;
    } else {
        return 250;
    }
};


function subtotal(){
    return purchases.reduce((prev, purchase) => {return prev + purchase.price * purchase.number;}, 0);    
};


function displayPrices(){
    return purchases.map(purchase => {return `${purchase.name} at ${purchase.price} yen for ${purchase.number} units`}).join("\n");
};
