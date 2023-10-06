-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS ecommerce_site;

USE ecommerce_site;

-- Create the product_categories table
CREATE TABLE product_categories (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    PRIMARY KEY (id)
);

-- Create the products table with a foreign key reference to product_categories
CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_link VARCHAR(255),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    price_per_gram DECIMAL(5,2) NOT NULL,
    weight DECIMAL(5,2),
    product_category_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_category_id) REFERENCES product_categories(id)
);
