-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 03, 2022 at 11:53 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Tempo_Buono_New`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `idProd` int(11) NOT NULL AUTO_INCREMENT,
  `ProductsName` tinytext NOT NULL,
  `ProductsDescription` varchar(255) NOT NULL,
  `ProductsPrice` decimal(65,0) NOT NULL,
  `productsCategory_idproductsCategory` int(11) NOT NULL,
  PRIMARY KEY (`idProd`),
  KEY `fk_products_productsCategory_idx` (`productsCategory_idproductsCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idProd`, `ProductsName`, `ProductsDescription`, `ProductsPrice`, `productsCategory_idproductsCategory`) VALUES
(1, 'Alfajor Marplatense', 'El alfajor modelo o más tradicional', '100', 1),
(2, 'Alfajor Santafesino', 'Con dulce de leche y bañados en glacé ', '120', 1),
(3, 'Alfajor Cordobés', 'Con masa blanda y glaseado', '110', 1),
(4, 'Alfajor Mendocino', 'Tiene una característica masa con nuez', '150', 1),
(5, 'Alfajor Correntino', 'Con masa a base de harina de mandioca', '110', 1),
(6, 'Alfajor Tucumano', 'Se preparan con miel de azúcar de caña', '120', 1),
(7, 'Maria La Deli', 'Exhuberante...\r\n', '1', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_productsCategory` FOREIGN KEY (`productsCategory_idproductsCategory`) REFERENCES `productsCategory` (`idproductsCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
