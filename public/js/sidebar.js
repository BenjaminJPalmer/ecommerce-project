import { calculateUnitPrice, calculateWeight, calculateDeliveryPrice } from "./helpers.js";
const clearCart = document.getElementById("clear-cart-button");
const totalContainer = document.getElementById("total-container");
const totalsSubTotal = document.getElementById("totals__sub-total");
const totalsQuantity = document.getElementById("totals__quantity");
const totalsWeight = document.getElementById("totals__weight");
const totalsDelivery = document.getElementById("totals__delivery");
const totalsTotal = document.getElementById("totals__total");

// Handle the operation for opening and closing the cart sidebar
document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const closeSidebarButton = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");

  cartIcon.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeSidebarButton.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  clearAndPopulateCart();
});

clearCart.addEventListener("click", () => {
  localStorage.removeItem("cart");
  clearAndPopulateCart();
});

export const clearAndPopulateCart = () => {
  // Retrieve the cart object from local storage
  const cartJSON = localStorage.getItem("cart");
  const cartContainer = document.getElementById("cart-container");
  let totalPrice = 0;
  let totalQuantity = 0;
  let totalWeight = 0;

  cartContainer.innerHTML = "";

  if (cartJSON) {
    // Parse the JSON into a JavaScript object
    const cart = JSON.parse(cartJSON);

    for (const product in cart) {
      const productData = cart[product];
      const calculatedPrice = calculateUnitPrice(
        productData.pricePerGram,
        productData.weight,
        productData.quantity
      );
      const calculatedWeight = calculateWeight(productData.weight, productData.quantity);

      // For each product, display the in the cart in the sidebar
      if (productData.quantity > 0) {
        totalPrice += parseFloat(calculatedPrice);
        totalQuantity += productData.quantity;
        totalWeight += parseFloat(calculatedWeight);

        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-product");
        productDiv.setAttribute("id", `cart-product-${productData.id}`);

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("cart-product__image-container");

        const img = document.createElement("img");
        img.src = productData.imageLink;
        img.alt = `Photo of ${productData.name}`;
        img.classList.add("cart-product__image");

        imgContainer.appendChild(img);

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("cart-product__info");

        const quantity = document.createElement("p");
        quantity.classList.add("cart-product__quantity");
        quantity.textContent = `${productData.quantity} x `;

        const title = document.createElement("span");
        title.classList.add("cart-product__title");
        title.textContent = productData.name;

        const price = document.createElement("p");
        price.classList.add("cart-product__price");
        price.textContent = `£${calculatedPrice}`;

        infoContainer.appendChild(quantity);
        quantity.appendChild(title);
        infoContainer.appendChild(price);

        productDiv.appendChild(imgContainer);
        productDiv.appendChild(infoContainer);

        cartContainer.appendChild(productDiv);
      }
    }

    const rawTotalPrice = totalPrice;
    totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
    const deliveryPriceValue = calculateDeliveryPrice(totalWeight);

    totalsSubTotal.textContent = `£${totalPrice}`;
    totalsQuantity.textContent = `${totalQuantity}`;
    totalsWeight.textContent = `${totalWeight.toFixed(2)}g`;
    totalsDelivery.textContent = deliveryPriceValue
      ? `£${deliveryPriceValue.toFixed(2)}`
      : "Your order must be over 40g";

    totalsTotal.textContent = deliveryPriceValue
      ? `£${(rawTotalPrice + deliveryPriceValue).toFixed(2)}`
      : "";
  } else {
    cartContainer.innerHTML = "";
    const cartEmpty = document.createElement("p");
    cartEmpty.classList.add("cart-empty");
    cartEmpty.textContent = "You have nothing in your cart.";

    cartContainer.appendChild(cartEmpty);
  }
};
