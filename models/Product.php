<?php
class Product
{
  private $pdo;

  public function __construct($pdo)
  {
    $this->pdo = $pdo;
  }

  public function getAllProducts()
  {
    $sql = "SELECT * FROM products";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getProductById($productId)
  {
    $sql = "SELECT * FROM products WHERE id = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':id', $productId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function getLimitedProducts($limit)
  {
    $sql = "SELECT * FROM products LIMIT :limit";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getProductsByCategory($categoryId)
  {
    $sql = "SELECT * FROM products WHERE product_category_id = :category_id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':category_id', $categoryId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}