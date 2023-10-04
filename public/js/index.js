const productsContainer = document.getElementById("products-container");
const categoriesContainer = document.getElementById("categories-container");

fetch("http://localhost:8888/ecommerce-project/api/products?limit=3")
  .then((response) => response.json())
  .then((products) => {
    if (products.error) {
      products.textContent = `Error: ${products.error}`;
    } else {
      for (const product of products) {
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

        productsContainer.appendChild(card);
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

fetch("http://localhost:8888/ecommerce-project/api/product-categories?limit=3")
  .then((response) => response.json())
  .then((categories) => {
    if (categories.error) {
      categories.textContent = `Error: ${categories.error}`;
    } else {
      for (const category of categories) {
        const card = document.createElement("div");
        card.classList.add("category-card");
        const cardLink = document.createElement("a");
        cardLink.href = `http://localhost:8888/ecommerce-project/category?id=${category.id}`;
        const title = document.createElement("h4");
        title.classList.add("category-title");
        const description = document.createElement("p");
        description.classList.add("category-description");
        const image = document.createElement("img");
        image.classList.add("category-image");

        card.setAttribute("id", `category-${category.id}`);
        title.textContent = category.name;
        description.textContent = category.description;
        image.src = category.image_link
          ? category.image_link
          : "/ecommerce-project/public/images/logo.png";
        image.alt = `A picture of ${category.name} sweets`;

        card.appendChild(cardLink);
        cardLink.appendChild(title);
        cardLink.appendChild(description);
        cardLink.appendChild(image);

        categoriesContainer.appendChild(card);
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });
