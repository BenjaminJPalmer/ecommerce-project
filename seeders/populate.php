<?php

require_once 'config\database.php';

$productCategories = [
  ['name' => 'Sweets', 'description' => 'A selection of our finest sweets'],
  ['name' => 'Chocolate', 'description' => 'The latest in our new series of chocolates'],
  ['name' => 'Drinks', 'description' => 'Something to wash down your other purchases'],
];

$products = [
  [
    'name' => 'Rhubarb & Custard',
    'description' => 'A delightful blend of tangy rhubarb and creamy custard in one sweet.',
    'image_link' => '/ecommerce-project/public/images/products/rhubarb-and-custard.jpg',
    'price_per_gram' => 1.00,
    'weight' => 2.50,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Kola Kubes',
    'description' => 'Classic cola-flavored candies with a fizzy twist.',
    'image_link' => '/ecommerce-project/public/images/products/kola-kubes.jpg',
    'price_per_gram' => 2.00,
    'weight' => 2.00,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Pear Drops',
    'description' => 'Sweet and fruity pear-flavored hard candies.',
    'image_link' => '/ecommerce-project/public/images/products/pear-drops.webp',
    'price_per_gram' => 1.00,
    'weight' => 1.00,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Chocolate Limes',
    'description' => 'A unique combination of zesty lime and creamy chocolate.',
    'image_link' => '/ecommerce-project/public/images/products/chocolate-limes.webp',
    'price_per_gram' => 3.00,
    'weight' => 3.00,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Aniseed Twists',
    'description' => 'Bold and aromatic aniseed-flavored twists.',
    'image_link' => '/ecommerce-project/public/images/products/aniseed-twists.jpeg',
    'price_per_gram' => 3.00,
    'weight' => 2.70,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Everton Mints',
    'description' => 'Refreshing minty candies with a classic black and white look.',
    'image_link' => '/ecommerce-project/public/images/products/everton-mints.jpeg',
    'price_per_gram' => 4.00,
    'weight' => 3,
    'product_category_id' => 1,
  ],
  [
    'name' => 'Fruit BonBons ',
    'description' => 'Colorful, chewy bonbons bursting with fruity flavors.',
    'image_link' => '/ecommerce-project/public/images/products/fruit-bonbons.jpeg',
    'price_per_gram' => 2.00,
    'weight' => 2,
    'product_category_id' => 1,
  ]
];

try {
  // SQL schema script filename
  $schemaScript = 'seeders\schema.sql';

  // Check if the schema script file exists
  if (file_exists($schemaScript)) {
    echo "Connected to the database.\n";
    // Read the contents of the schema script
    $schemaSQL = file_get_contents($schemaScript);

    // Execute the schema SQL commands
    $pdo->exec($schemaSQL);

    echo "Schema created successfully.\n";
  } else {
    echo "Schema script not found: $schemaScript\n";
  }
  // Insert product categories
  foreach ($productCategories as $category) {
    $stmt = $pdo->prepare('INSERT INTO product_categories (name, description) VALUES (?, ?)');
    $stmt->execute([$category['name'], $category['description']]);
    echo 'Inserted category with ID: ' . $pdo->lastInsertId() . "\n";
  }

  // Insert products
  foreach ($products as $product) {
    $stmt = $pdo->prepare('INSERT INTO products (name, description, image_link, price_per_gram, weight, product_category_id) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([
      $product['name'],
      $product['description'],
      $product['image_link'],
      $product['price_per_gram'],
      $product['weight'],
      $product['product_category_id'],
    ]);
    echo 'Inserted product with ID: ' . $pdo->lastInsertId() . "\n";
  }

  echo 'Seeder completed successfully.' . "\n";
} catch (PDOException $e) {
  echo 'Seeder error: ' . $e->getMessage() . "\n";
}

?>