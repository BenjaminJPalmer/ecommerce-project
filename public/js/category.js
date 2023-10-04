const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("id");
const categoryDetails = document.getElementById("category-details");

// Check if a category ID is present in the URL
if (categoryId) {
  // Make a GET request to your API endpoint
  fetch(`http://localhost:8888/ecommerce-project/api/product-categories/${categoryId}`)
    .then((response) => response.json())
    .then((category) => {
      if (category.error) {
        categoryDetails.textContent = `Error: ${category.error}`;
      } else {
        const categoryHTML = `
                            <h2>${category.name}</h2>
                            <p>${category.description}</p>
                        `;
        categoryDetails.innerHTML = categoryHTML;
      }
    })
    .catch((error) => {
      console.error("Error fetching category data:", error);
    });
} else {
  // Handle the case when no category ID is provided
  categoryDetails.textContent = "Category ID is missing in the URL.";
}
