const firstItemPrice = document.getElementById('firstItemPrice').textContent;
const secondItemPrice = document.getElementById('secondItemPrice').textContent;
const thirdItemPrice = document.getElementById('thirdItemPrice').textContent;
const fourthItemPrice = document.getElementById('fourthItemPrice').textContent;
const fifthItemPrice = document.getElementById('fifthItemPrice').textContent;

document.getElementById('sum').textContent = Number(firstItemPrice)+Number(secondItemPrice)+Number(thirdItemPrice)+Number(fourthItemPrice)+Number(fifthItemPrice);

function getDiscount() {
  const price = document.getElementById('sum');
  price.classList.add('crossedOut');
  const result = price.textContent*0.8;
  document.getElementById('discountSum').textContent = ' ' + result;
}

document.getElementById('getDiscount').onclick = getDiscount;