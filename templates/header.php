<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Ben's Sweets</title>
  <link rel="stylesheet" href="public/css/styles.css">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>

<body>
  <header>
    <div class="header-inner">
      <div class="logo">
        <a href="/ecommerce-project/">
          <img src="/ecommerce-project/public/images/logo.png" alt="Ben's Sweets" />
        </a>
      </div>
      <h1 class="header-title">Ben's Sweets</h1>
      <nav class="nav-links">
        <ul>
          <li><a href="/ecommerce-project">Home</a></li>
          <li class="dropdown"><a href="#">Categories</a>
            <ul class="dropdown-menu">
              <?php
              require_once __DIR__ . '/../config/database.php';
              require_once __DIR__ . '/../models/ProductCategory.php';

              $productCategory = new ProductCategory($pdo);
              $productCategories = $productCategory->getAllProductCategories();

              if ($productCategories) {
                foreach ($productCategories as $productCategory) {
                  echo "<li class=\"dropdown-item\"><a href='/ecommerce-project/category?id={$productCategory['id']}'>{$productCategory['name']}</a></li>";
                }
              }
              ?>
            </ul>
          </li>


          <li><a href="/ecommerce-project/mix">Pick 'n' Mix!</a></li>
          <li>
            <a><img src="/ecommerce-project/public/images/shopping-cart.png"
                alt="Cart icon from https://www.flaticon.com" class="cart-icon" id="cart-icon" /></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <img class="header-image" src="/ecommerce-project/public/images/header-image.jpeg"
    alt="Table full of confectionary - Credit Igor Ovsyannykov" />
  <main>