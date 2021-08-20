
// Main Function 
function updateCost(product, number) {
    const productField = document.getElementById(product + '-cost');
    productField.innerText = number;
    const productCostText = productField.innerText;
    const productCost = parseInt(productCostText);

    calcTotal();
}

//Memery Part
document.getElementById('8-gb-btn').addEventListener('click', function () {
    updateCost('extra-memory', 0)
})

document.getElementById('16-gb-btn').addEventListener('click', function () {
    updateCost('extra-memory', 180);
})

//Storage Part
document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    updateCost('extra-storage', 0);

})
document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    updateCost('extra-storage', 100);
})
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    updateCost('extra-storage', 180);

})

//delivery part
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    updateCost('delivery', 0);
})
document.getElementById('delivery-charge-btn').addEventListener('click', function () {
    updateCost('delivery', 20);
})


// product inputs 
function getInput(product) {
    const productField = document.getElementById(product + '-cost');
    const productFieldText = productField.innerText;
    const productCost = parseInt(productFieldText);
    return productCost;
}

//total price part
function calcTotal() {
    const extraMemoryCost = getInput('extra-memory');
    const extraStorageCost = getInput('extra-storage');
    const deliveryCharge = getInput('delivery');

    const totalPriceField = document.getElementById('total-price');

    const mainTotal = extraMemoryCost + extraStorageCost + deliveryCharge;
    totalPriceField.innerText = mainTotal + 1299;
    document.getElementById('final-total-price').innerText = totalPriceField.innerText;
}


//coupon code part
function couponClick() {
    const couponInput = document.getElementById('coupon-input');
    const totalPriceField = document.getElementById('total-price');
    const totalPriceFieldText = totalPriceField.innerText;
    const totalPrice = parseInt(totalPriceFieldText);
    if (couponInput.value == 'stevekaku') {
        const finalTotalPriceField = document.getElementById('final-total-price');
        const finalTotalPriceFieldText = finalTotalPriceField.innerText;
        const finalTotalPrice = parseInt(finalTotalPriceFieldText);
        const theCoupon = (20 / 100) * totalPrice;
        finalTotalPriceField.innerText = finalTotalPrice - theCoupon;
    }
}

