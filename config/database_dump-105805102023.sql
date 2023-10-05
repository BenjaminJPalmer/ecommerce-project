-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 05, 2023 at 09:58 AM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `price_per_gram` decimal(5,2) NOT NULL,
  `weight` decimal(5,2) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image_link`, `created_at`, `updated_at`, `price_per_gram`, `weight`, `product_category_id`) VALUES
(1, 'Rhubarb & Custard', 'A delightful blend of tangy rhubarb and creamy custard in one sweet.', '/ecommerce-project/public/images/products/rhubarb-and-custard.jpg', '2023-10-02 08:28:47', '2023-10-02 08:28:47', '1.00', '2.50', 1),
(2, 'Kola Kubes', 'Classic cola-flavored candies with a fizzy twist.', '/ecommerce-project/public/images/products/kola-kubes.jpg', '2023-10-02 08:29:23', '2023-10-02 08:29:23', '2.00', '2.00', 1),
(3, 'Pear Drops', 'Sweet and fruity pear-flavored hard candies.', '/ecommerce-project/public/images/products/pear-drops.webp', '2023-10-02 08:32:09', '2023-10-02 08:32:09', '1.00', '1.00', 1),
(4, 'Chocolate Limes', 'A unique combination of zesty lime and creamy chocolate.', '/ecommerce-project/public/images/products/chocolate-limes.webp', '2023-10-02 08:32:09', '2023-10-02 08:32:09', '3.00', '3.00', 1),
(5, 'Aniseed Twists', 'Bold and aromatic aniseed-flavored twists.', '/ecommerce-project/public/images/products/aniseed-twists.jpeg', '2023-10-02 08:32:09', '2023-10-02 08:32:09', '3.00', '2.70', 1),
(6, 'Everton Mints', 'Refreshing minty candies with a classic black and white look.', '/ecommerce-project/public/images/products/everton-mints.jpeg', '2023-10-02 08:32:09', '2023-10-02 08:32:09', '4.00', '3.00', 1),
(7, 'Fruit BonBons ', 'Colorful, chewy bonbons bursting with fruity flavors.', '/ecommerce-project/public/images/products/fruit-bonbons.jpeg', '2023-10-02 08:32:09', '2023-10-02 08:32:09', '2.00', '2.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `name`, `created_at`, `updated_at`, `description`) VALUES
(1, 'Sweets', '2023-10-02 12:12:38', '2023-10-02 12:12:39', 'A selection of our finest sweets'),
(2, 'Chocolate', '2023-10-02 12:12:38', '2023-10-02 12:12:39', 'The latest in our new series of chocolates'),
(3, 'Drinks', '2023-10-02 12:12:38', '2023-10-02 12:12:39', 'Something to wash down your other purchases');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_category_id` (`product_category_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_category_id`) REFERENCES `product_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
