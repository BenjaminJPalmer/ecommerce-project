const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("id");
const categorySingleImage = document.getElementById("category-single__image");
const categorySingleTitle = document.getElementById("category-single__title");
const categorySingleDescription = document.getElementById("category-single__description");
const mixButton = document.getElementById("category-single__mix");
const noCategoryMessage = document.getElementById("no-category-message");

// Check if a category ID is present in the URL
if (categoryId) {
  // Make a GET request to your API endpoint
  fetch(`/ecommerce-project/api/product-categories/${categoryId}`)
    .then((response) => response.json())
    .then((category) => {
      if (category.error) {
        mixButton.style.display = "none";
        noCategoryMessage.textContent = `Error: ${category.error}. Please contact your administrator.`;
      } else {
        categorySingleTitle.textContent = category.name;
        categorySingleDescription.textContent = category.description;
        categorySingleImage.src = category.image_link
          ? category.image_link
          : "public/images/logo.png";
        categorySingleImage.alt = `A picture of ${category.name} sweets`;
      }
    })
    .catch((error) => {
      console.error("Error fetching category data:", error);
    });
} else {
  // Handle the case when no category ID is provided
  mixButton.style.display = "none";
  noCategoryMessage.textContent =
    "Please add a category ID to the URL in the format 'product-categories?id=1'.";
}
