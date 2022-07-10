const form = document.querySelector("form");

const tableBody = document.getElementById("table-body");
const button = document.getElementById("clear");
const quantity = document.getElementById("quantity");
const product = document.getElementById("product");
const price = document.getElementById("price");

let itemsArray = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

localStorage.setItem("cart", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("cart"));

const addToCart = (list) => {
  var newRow = document.createElement("tr");
  var product = document.createElement("td");
  var quantity = document.createElement("td");
  var price = document.createElement("td");
  var total = document.createElement("td");

  product.innerHTML = list.product;
  quantity.innerHTML = list.quantity;
  price.innerHTML = list.price;
  total.innerHTML = list.total;

  newRow.append(product, quantity, price, total);

  tableBody.appendChild(newRow);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const total = quantity.value * price.value;

  const orderItem = {
    product: product.value,
    quantity: quantity.value,
    price: price.value,
    total: total,
  };

  itemsArray.push(orderItem);

  localStorage.setItem("cart", JSON.stringify(itemsArray));

  addToCart(orderItem);

  orderItem = {};
});

data.forEach((item) => {
  addToCart(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
});
