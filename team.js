// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Simple Cart Logic
let cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  console.log("Cart:", cart);
  alert(productName + " has been added to your cart!");
}
