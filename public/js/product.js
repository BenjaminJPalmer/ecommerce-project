const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productDetails = document.getElementById("product-details");

// Check if a product ID is present in the URL
if (productId) {
  // Make a GET request to your API endpoint
  fetch(`http://localhost:8888/ecommerce-project/api/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      if (product.error) {
        productDetails.textContent = `Error: ${product.error}`;
      } else {
        const card = document.createElement("div");
        card.classList.add("product-card");
        const cardLink = document.createElement("a");
        cardLink.href = `http://localhost:8888/ecommerce-project/product?id=${product.id}`;
        const title = document.createElement("h4");
        title.classList.add("product-title");
        const description = document.createElement("p");
        description.classList.add("product-description");
        const image = document.createElement("img");
        image.classList.add("product-image");

        card.setAttribute("id", `product-${product.id}`);
        title.textContent = product.name;
        description.textContent = product.description;
        image.src = product.image_link
          ? product.image_link
          : "/ecommerce-project/public/images/logo.png/";
        image.alt = `A picture of ${product.name} sweets`;

        card.appendChild(cardLink);
        cardLink.appendChild(title);
        cardLink.appendChild(description);
        cardLink.appendChild(image);

        productDetails.appendChild(card);
      }
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
} else {
  // Handle the case when no product ID is provided
  productDetails.textContent = "Product ID is missing in the URL.";
}
