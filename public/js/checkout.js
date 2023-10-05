import {
  calculateUnitPrice,
  calculateWeight,
  calculateDeliveryPrice,
  roundTwoDecimals,
} from "./helpers.js";

const checkoutContainer = document.querySelector(".checkout-container");
const checkoutDetails = document.getElementById("checkout-details");
const checkoutBody = document.getElementById("checkout-body");
const checkoutTotalQuantity = document.getElementById("checkout-total-quantity");
const checkoutTotalWeight = document.getElementById("checkout-total-weight");
const checkoutTotalPrice = document.getElementById("checkout-total-price");
const checkoutDelivery = document.getElementById("checkout-delivery");

const cartJSON = localStorage.getItem("cart");

if (cartJSON) {
  const cart = JSON.parse(cartJSON);
  let totalQuantity = 0;
  let totalWeight = 0;
  let totalPrice = 0;

  for (const product in cart) {
    const productData = cart[product];

    if (productData.quantity > 0) {
      const calculatedUnitPrice = calculateUnitPrice(
        productData.quantity,
        productData.pricePerGram,
        productData.weight
      );
      const calculatedWeight = calculateWeight(productData.weight, productData.quantity);

      totalQuantity += productData.quantity;
      totalWeight += parseFloat(calculatedWeight);
      totalPrice += parseFloat(calculatedUnitPrice);

      const newRow = document.createElement("tr");

      const name = document.createElement("td");
      name.textContent = productData.name;
      name.style.fontWeight = "600";

      const pricePerGram = document.createElement("td");
      pricePerGram.textContent = productData.pricePerGram / 100;

      const weight = document.createElement("td");
      weight.textContent = productData.weight;

      const quantity = document.createElement("td");
      quantity.textContent = productData.quantity;

      const unitWeight = document.createElement("td");
      unitWeight.textContent = roundTwoDecimals(calculatedWeight);

      const unitPrice = document.createElement("td");
      unitPrice.textContent = calculatedUnitPrice;

      newRow.appendChild(name);
      newRow.appendChild(pricePerGram);
      newRow.appendChild(weight);
      newRow.appendChild(quantity);
      newRow.appendChild(unitWeight);
      newRow.appendChild(unitPrice);

      checkoutBody.appendChild(newRow);
    }
  }

  checkoutTotalQuantity.textContent = totalQuantity;
  checkoutTotalWeight.textContent = roundTwoDecimals(totalWeight);
  checkoutTotalPrice.textContent = roundTwoDecimals(totalPrice);

  if (totalWeight < 40) {
    checkoutDelivery.innerHTML = "";
    const moreWeight = document.createElement("h2");
    moreWeight.textContent =
      "The total weight of the order must be over 40g to qualify for delivery";
    checkoutDelivery.appendChild(moreWeight);
  } else {
    const checkoutDeliveryCost = document.getElementById("checkout-delivery-cost");
    const checkoutFinalCost = document.getElementById("checkout-final-cost");

    const deliveryPrice = calculateDeliveryPrice(totalWeight);
    const finalCost = `£${(deliveryPrice + totalPrice).toFixed(2)}`;

    checkoutDeliveryCost.textContent = `£${deliveryPrice.toFixed(2)}`;
    checkoutFinalCost.textContent = finalCost;
  }
} else {
  checkoutDetails.innerHTML = "";
  checkoutDetails.style.display = "flex";
  checkoutDetails.style.flexDirection = "column";
  checkoutDetails.style.alignItems = "center";

  checkoutContainer.style.display = "flex";
  checkoutContainer.style.flexDirection = "column";
  checkoutContainer.style.alignItems = "center";

  const noItemsContainer = document.createElement("div");
  noItemsContainer.classList.add("no-items-container");

  const noItems = document.createElement("h3");
  noItems.classList.add("no-items");

  const homeLink = document.createElement("a");
  homeLink.classList.add("home-link");
  noItems.textContent =
    "You currently have no sweets in your cart. Click the button below to return to our pick 'n' mix calculator and create your loved one's ideal selection!";

  homeLink.href = "/ecommerce-project/mix";
  homeLink.textContent = "Pick 'n' mix time!";

  noItemsContainer.appendChild(noItems);
  noItemsContainer.appendChild(homeLink);

  checkoutDetails.appendChild(noItemsContainer);
}
