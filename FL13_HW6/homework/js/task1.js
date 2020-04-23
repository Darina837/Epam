let check = Number(prompt('Check number: ', '100'));
let tip = Number(prompt('Tip: ', '5'));
let payment = check * tip / Number('100'); 
let total = check + payment;
if(check <= 0 || tip < 0 || tip > Number('100') || isNaN(check) === true || isNaN(tip) === true) {
    alert('Invalid input data');
} else {
    alert(`
        Tip amount: ${payment.toFixed(Number('2'))} 
        Total sum to pay: ${total.toFixed(Number('2'))} 
    `);
}