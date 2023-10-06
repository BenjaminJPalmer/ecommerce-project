<?php

$host = 'localhost';
$dbname = 'ecommerce_site';
$user = 'root';
$password = 'root'; // MAMP = 'root', XAMPP = ''

try {
  $pdo = new PDO("mysql:host=$host;", $user, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Check the server to see if the database already exists
  $stmt = $pdo->prepare("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = :dbname");
  $stmt->bindParam(":dbname", $dbname, PDO::PARAM_STR);
  $stmt->execute();

  if (!$stmt->fetch(PDO::FETCH_ASSOC)) {
    // Create the database if it doesn't exist
    $pdo->exec("CREATE DATABASE $dbname");
  }

  $pdo->exec("USE $dbname");

} catch (PDOException $e) {
  die("Error: " . $e->getMessage());
}

?>