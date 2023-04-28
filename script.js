
const prices = document.querySelectorAll('[data-ns-test="prices"]');


let totalPrice = 0;
prices.forEach(price => {
  totalPrice += parseFloat(price.innerText);
});

const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
grandTotal.innerText = totalPrice.toString();
