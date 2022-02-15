document.getElementById('sixteenGB').addEventListener('click', function(){
/*     const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice; */
    // updatePrice('memory-cost', 300)
})
/* document.getElementById('eightGB').addEventListener('click', function(){
    updatePrice('memory-cost', 0)
})
document.getElementById('ssd3').addEventListener('click', function(){
    updatePrice('storage-cost', 500)
})
document.getElementById('paid-delivery').addEventListener('click', function(){
    updatePrice('delivery-cost', 20)
}) */

onClick('sixteenGB', 'memory-cost', 300);
onClick('eightGB', 'memory-cost',0);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 300);
onClick('ssd3', 'storage-cost', 500);
onClick('paid-delivery', 'delivery-cost', 20);
onClick('free-delivery', 'delivery-cost', 0);
function onClick(clickId, updateId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId, price)
        // document.getElementById(clickId).style.backgroundColor = 'cornflowerblue'
    })
    
}


function updatePrice(itemId, price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
};

// promo code
const fakeCode = "pHero";
document.getElementById('apply-btn').addEventListener('click', function(){
    const code = document.getElementById('promo-input').value;
    const success = document.getElementById('applied-text');
    const error = document.getElementById('not-applied');
    if(code == fakeCode){
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);

        const disCount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - disCount;
        total.innerText = totalPrice;
        success.style.display = 'block';
        error.style.display = 'none';
    }else{
        success.style.display = 'none';
        error.style.display = 'block';
    }
})