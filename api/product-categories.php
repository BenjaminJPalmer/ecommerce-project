<?php
require_once('../config/database.php');
require_once('../models/ProductCategory.php');

// Create an instance of the ProductCategory model
$productCategory = new ProductCategory($pdo);

// Define the content type as JSON
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  if (isset($_GET['id'])) {
    // Get product by ID
    $productId = $_GET['id'];
    $product = $productCategory->getProductCategoryById($productId);
    if ($product) {
      echo json_encode($product);
    } else {
      echo json_encode(['error' => 'Product not found']);
    }
  } else {
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : null;
    // Get all products
    $products = $limit ? $productCategory->getLimitedProductCategories($limit) : $productCategory->getAllProductCategories();
    echo json_encode($products);
  }
}