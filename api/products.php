<?php
require_once('../config/database.php');
require_once('../models/Product.php');

// Create an instance of the Product model
$product = new Product($pdo);

// Define the content type as JSON
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  if (isset($_GET['category'])) {
    // If a category id is specified, get products by category
    $categoryId = $_GET['category'];
    $products = $product->getProductsByCategory(($categoryId));
    echo json_encode($products);
  } else {
    // Otherwise ignore category relationships
    if (isset($_GET['id'])) {
      // Get product by ID
      $productId = $_GET['id'];
      $product = $product->getProductById($productId);
      if ($product) {
        echo json_encode($product);
      } else {
        echo json_encode(['error' => 'Product not found']);
      }
    } else {
      $limit = isset($_GET['limit']) ? intval($_GET['limit']) : null;
      // Get all products with optional limit
      $products = $limit ? $product->getLimitedProducts($limit) : $product->getAllProducts();
      echo json_encode($products);
    }
  }
}