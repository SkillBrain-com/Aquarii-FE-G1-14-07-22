const moneyInput = document.getElementById('money-input');
const range = document.getElementById('range');
const procentage = document.getElementById('procentage');
const tipAmountBox = document.getElementById('tip-amount');
const totalBillBox = document.getElementById('total-bill');


range.addEventListener('click', () => {
    if (procentage.innerHTML !== '') {
        procentage.innerHTML = '';
    }
    procentage.append(range.value + '%')

    if (tipAmountBox.innerHTML !== 'Tip amount:') {
        tipAmountBox.innerHTML = `Tip amount: `;
        totalBillBox.innerHTML = `Total bill: `;
    }

    let tipAmount = Math.floor(moneyInput.value * (range.value / 100));
    let totalBill = Math.floor(tipAmount + parseFloat(moneyInput.value));

    if (moneyInput.value !== ''){
    tipAmountBox.append(tipAmount);
    totalBillBox.append(totalBill);
}

})

