<?php
class ProductCategory
{
  private $pdo;

  public function __construct($pdo)
  {
    $this->pdo = $pdo;
  }

  public function getAllProductCategories()
  {
    $sql = "SELECT * FROM product_categories";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getProductCategoryById($categoryId)
  {
    $sql = "SELECT * FROM product_categories WHERE id = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':id', $categoryId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function getLimitedProductCategories($limit)
  {
    // Modify this SQL query to limit the number of products
    $sql = "SELECT * FROM product_categories LIMIT :limit";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}