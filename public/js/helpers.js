const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

export const calculateUnitPrice = (pricePerGram, weight, quantity) => {
  const unformattedPrice = pricePerGram * weight * quantity;
  const price = (Math.round(unformattedPrice) / 100).toFixed(2);
  return price;
};

export const calculateWeight = (weight, quantity) => {
  return weight * quantity;
};

export const calculateDeliveryPrice = (weight) => {
  let deliveryPrice = 0;
  if (weight < 40) {
    return false; // Delivery not large enough
  } else if (weight >= 40 && weight < 251) {
    deliveryPrice = 1.5; // Delivery of £1.50
  } else if (weight >= 251 && weight < 501) {
    deliveryPrice = 2.0;
  } else if (weight >= 501) {
    deliveryPrice = 2.5;
  }
  return deliveryPrice;
};
