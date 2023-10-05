import { clearAndPopulateCart } from "./sidebar.js";

const productContainer = document.getElementById("mix-products");
const currentImage = document.getElementById("current-image");
const quantityInput = document.getElementById("quantity-input");
const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
let cartProduct = null;
let first = true; // Set flag for first time action during fetch mapping

// Function to update the quantity input and local storage for a specific product
function updateQuantity(productName, cartProduct) {
  // Retrieve the cart object from local storage or initialize it as an empty object
  const cart = JSON.parse(localStorage.getItem("cart")) || {};

  if (!cart[productName]) {
    cart[productName] = cartProduct;
  }

  // Update the quantity input value
  quantityInput.value = cart[productName].quantity;

  // Store the updated cart object in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Runs the function from sidebar.js to update the sidebar cart
  clearAndPopulateCart();
}

// Fetch the products that have the sweet category
fetch(`/ecommerce-project/api/products?category=1`)
  .then((response) => response.json())
  .then((data) => {
    data.map((sweet) => {
      const product = document.createElement("div");
      product.classList.add("product");
      product.id = sweet.id;

      const productImage = document.createElement("img");
      productImage.src = sweet.image_link;
      productImage.classList.add("product-image");

      const productName = document.createElement("p");
      productName.textContent = sweet.name;
      productName.classList.add("product-name");

      product.appendChild(productImage);
      product.appendChild(productName);

      productContainer.appendChild(product);

      if (first) {
        currentImage.setAttribute("src", sweet.image_link);
        currentImage.setAttribute("data-name", sweet.name);

        // Map the product to an object that can be used later
        cartProduct = {
          id: sweet.id,
          name: sweet.name,
          quantity: 0,
          pricePerGram: sweet.price_per_gram,
          weight: sweet.weight,
          imageLink: sweet.image_link,
        };

        updateQuantity(sweet.name, cartProduct); // Keep to make sure input dispalys correct value
        first = false;
      }

      product.addEventListener("click", () => {
        currentImage.setAttribute("src", sweet.image_link);
        currentImage.setAttribute("data-name", sweet.name);

        cartProduct = {
          id: sweet.id,
          name: sweet.name,
          quantity: 0,
          pricePerGram: sweet.price_per_gram,
          weight: sweet.weight,
          imageLink: sweet.image_link,
        };

        // Update the quantity input and local storage for the selected product
        updateQuantity(sweet.name, cartProduct);
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

quantityInput.addEventListener("change", () => {
  const productName = currentImage.getAttribute("data-name");
  const newQuantity = parseInt(quantityInput.value);
  // Retrieve the cart object from local storage or initialize it as an empty object
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  if (!isNaN(newQuantity) && newQuantity >= 0) {
    // Update the cart object with the new quantity
    cart[productName].quantity = newQuantity;
    // Store the updated cart object in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    clearAndPopulateCart();
  } else {
    updateQuantity(productName, cart[productName]);
  }
});

minusButton.addEventListener("click", () => {
  const productName = currentImage.getAttribute("data-name");
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  // Check if the product exists in the cart
  if (cart[productName]) {
    let quantity = cart[productName].quantity;
    if (quantity > 0) {
      cart[productName].quantity--;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateQuantity(productName, cart[productName]);
    }
  }
});

plusButton.addEventListener("click", () => {
  const productName = currentImage.getAttribute("data-name");
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  if (!cart[productName]) {
    cart[productName] = cartProduct; // Initialize with cartProduct
  }

  cart[productName].quantity++; // Increment quantity
  localStorage.setItem("cart", JSON.stringify(cart));
  updateQuantity(productName, cart[productName]);
});

// Add event listener for the show sidebar / view cart button
document.addEventListener("DOMContentLoaded", () => {
  const showSidebarButton = document.getElementById("show-sidebar");

  showSidebarButton.addEventListener("click", () => {
    sidebar.classList.add("open");
  });
});
