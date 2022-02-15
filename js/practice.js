onClick('sixteenGB','memory-cost', 200);
onClick('eightGB','memory-cost',0);
onClick('ssd1','storage-cost',0);
onClick('ssd2','storage-cost',300);
onClick('ssd3','storage-cost',500);
onClick('free-delivery','delivery-cost',0);
onClick('paid-delivery','delivery-cost',20);

function onClick(clickId, updateId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId, price)
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
}

// promo code
const fakeId = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function(){
    const codeInput = document.getElementById('promo-input');
    const success = document.getElementById('applied-text');
    const fail = document.getElementById('not-applied');
    if(codeInput.value == fakeId){
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        const disCount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - disCount;
        total.innerText = totalPrice;

        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        fail.style.display = 'block';
        success.style.display = 'none';
    }
    codeInput.value = '';
})