// ITERATION 1

function updateSubtotal(product) {
  const singlePrice = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const result = singlePrice * quantity;

  subtotal.innerText = result;

  return subtotal;
}

const myProduct = document.querySelector('.product');
const myButton = document.querySelector('#calculate');

myButton.addEventListener('click', calculateAll);

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach((product) => {
    const subtotal = updateSubtotal(product);
    total += parseFloat(subtotal.innerText);
  });
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
  // console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  addRemoveListener();
  //... your code goes here
});

function addRemoveListener() {
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    product
      .querySelector('.btn-remove')
      .addEventListener('click', removeProduct);
  });
}
