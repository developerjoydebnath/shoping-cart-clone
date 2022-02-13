function changeCartItemValue(isadd, itemNumber, price) {
    const itemTotal = document.getElementById(itemNumber + '-total');
    let total = itemTotal.value;
    // const parseItemTotal = parseInt(itemTotal.value);
    if (isadd) {
        total = parseInt(total) + 1;
    }
    else if (total > 0) {
        total = parseInt(total) - 1;
    }
    itemTotal.value = total;
    // update case number
    const caseNumber = document.getElementById(itemNumber + '-number');
    caseNumber.innerText = total * price;

    updateTotalPrice()
}

// update total price

function updateTotal(product){
    const productIinput = document.getElementById(product + '-number');
    const productPrice = parseFloat(productIinput.innerText);
    return productPrice;
}

function updateTotalPrice(){
    const subTotal = updateTotal('case') + updateTotal('phone');
    const tax = subTotal / 5;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('all-total').innerText = total;

}

// update case 
document.getElementById('plus-btn').addEventListener('click', function () {
    changeCartItemValue(true, 'case', 59);
})

document.getElementById('minus-btn').addEventListener('click', function () {
    changeCartItemValue(false, 'case', 59);
})

// update phone
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    changeCartItemValue(true, 'phone', 1219);
})


document.getElementById('phone-minus-btn').addEventListener('click', function () {
    changeCartItemValue(false, 'phone', 1219);
})


