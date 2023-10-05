import { calculateUnitPrice } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productSingleImage = document.getElementById("product-single__image");
const productSingleTitle = document.getElementById("product-single__title");
const productSingleDescription = document.getElementById("product-single__description");
const productSinglePrice = document.getElementById("product-single__price");
const productSingleWeight = document.getElementById("product-single__weight");
const productSingleExample = document.getElementById("product-single__example");
const mixButton = document.getElementById("product-single__mix");
const noProductMessage = document.getElementById("no-product-message");

// Check if a product ID is present in the URL
if (productId) {
  // Make a GET request to your API endpoint
  fetch(`http://localhost:8888/ecommerce-project/api/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      if (product.error) {
        mixButton.style.display = "none";
        noProductMessage.textContent = `Error: ${product.error}. Please contact your administrator.`;
      } else {
        const calculatedPrice = calculateUnitPrice(100, product.price_per_gram, product.weight);
        productSingleTitle.textContent = product.name;
        productSingleDescription.textContent = product.description;
        productSingleImage.src = product.image_link ? product.image_link : "public/images/logo.png";
        productSingleImage.alt = `A picture of ${product.name} sweets`;
        productSinglePrice.textContent = `Price per gram: £${product.price_per_gram / 100}`;
        productSingleWeight.textContent = `Weight per sweet: ${product.weight}g`;
        productSingleExample.textContent = `For example, if you purchase 100 ${product.name} sweets, the total cost will be: £${calculatedPrice}`;
      }
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
} else {
  // Handle the case when no product ID is provided
  mixButton.style.display = "none";
  noProductMessage.textContent = "Please add a product ID to the URL in the format 'product?id=1'.";
}
