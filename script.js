
const prices = document.querySelectorAll('[data-ns-test="price"]');


let totalPrice = 0;
for(let i=0; i<prices.length; i++)
	{
		totalPrice+=parseInt(prices[i].innerText);
	}
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
grandTotal.innerText = totalPrice.toString();
