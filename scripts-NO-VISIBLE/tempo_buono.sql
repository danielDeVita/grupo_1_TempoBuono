-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 31, 2022 at 11:36 PM
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
CREATE DATABASE IF NOT EXISTS `Tempo_Buono_New` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Tempo_Buono_New`;

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

DROP TABLE IF EXISTS `Cart`;
CREATE TABLE IF NOT EXISTS `Cart` (
  `idCart` int(11) NOT NULL AUTO_INCREMENT,
  `CartQantity` int(11) NOT NULL,
  `CartTotal` float NOT NULL,
  `users_idUsers` int(11) NOT NULL,
  `CartDate` date NOT NULL,
  PRIMARY KEY (`idCart`),
  KEY `fk_Cart_users1_idx` (`users_idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Cart_has_products`
--

DROP TABLE IF EXISTS `Cart_has_products`;
CREATE TABLE IF NOT EXISTS `Cart_has_products` (
  `Cart_idCart` int(11) NOT NULL,
  `products_idProd` int(11) NOT NULL,
  `CartProdQtty` int(11) NOT NULL,
  `CartProdPrice` float NOT NULL,
  PRIMARY KEY (`Cart_idCart`,`products_idProd`),
  KEY `fk_Cart_has_products_products1_idx` (`products_idProd`),
  KEY `fk_Cart_has_products_Cart1_idx` (`Cart_idCart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `idProd` int(11) NOT NULL AUTO_INCREMENT,
  `ProductsName` tinytext NOT NULL,
  `ProductsDescription` varchar(45) NOT NULL,
  `ProductsPrice` decimal(65,0) NOT NULL,
  `productsCategory_idproductsCategory` int(11) NOT NULL,
  PRIMARY KEY (`idProd`),
  KEY `fk_products_productsCategory_idx` (`productsCategory_idproductsCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `productsCategory`
--

DROP TABLE IF EXISTS `productsCategory`;
CREATE TABLE IF NOT EXISTS `productsCategory` (
  `idproductsCategory` int(11) NOT NULL AUTO_INCREMENT,
  `productsCategorNombre` tinytext NOT NULL,
  `productsCategoryDesc` tinytext NOT NULL,
  PRIMARY KEY (`idproductsCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productsCategory`
--

INSERT INTO `productsCategory` (`idproductsCategory`, `productsCategorNombre`, `productsCategoryDesc`) VALUES
(1, 'Alfajor', '0'),
(2, 'Cafe', '0');

-- --------------------------------------------------------

--
-- Table structure for table `productsCombo`
--

DROP TABLE IF EXISTS `productsCombo`;
CREATE TABLE IF NOT EXISTS `productsCombo` (
  `idproductsCombo` int(11) NOT NULL AUTO_INCREMENT,
  `productsComprecio` double NOT NULL,
  PRIMARY KEY (`idproductsCombo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `productsImages`
--

DROP TABLE IF EXISTS `productsImages`;
CREATE TABLE IF NOT EXISTS `productsImages` (
  `idproductsImages` int(11) NOT NULL AUTO_INCREMENT,
  `productsImagesNombre` varchar(45) NOT NULL,
  `productsImagesDesc` varchar(45) NOT NULL,
  `products_idProd` int(11) NOT NULL,
  PRIMARY KEY (`idproductsImages`),
  KEY `fk_productsImages_products1_idx` (`products_idProd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products_has_productsCombo`
--

DROP TABLE IF EXISTS `products_has_productsCombo`;
CREATE TABLE IF NOT EXISTS `products_has_productsCombo` (
  `products_idProd` int(11) NOT NULL,
  `productsCombo_idproductsCombo` int(11) NOT NULL,
  PRIMARY KEY (`products_idProd`,`productsCombo_idproductsCombo`),
  KEY `fk_products_has_productsCombo_productsCombo1_idx` (`productsCombo_idproductsCombo`),
  KEY `fk_products_has_productsCombo_products1_idx` (`products_idProd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `UsersNombre` tinytext NOT NULL,
  `UsersEmail` varchar(45) NOT NULL,
  `UsersPasswd` varchar(255) NOT NULL,
  `usersCategory_idusersCategory` int(11) NOT NULL,
  PRIMARY KEY (`idUsers`),
  KEY `fk_users_usersCategory1_idx` (`usersCategory_idusersCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUsers`, `UsersNombre`, `UsersEmail`, `UsersPasswd`, `usersCategory_idusersCategory`) VALUES
(1, 'Daniel Devitta', 'dani@test.com', 'dani', 2),
(2, 'Fede Diaz', 'fede@test.com', 'fede', 2),
(3, 'Maria Gaitan', 'maria@test.com', 'maria', 2),
(4, 'Gaston Ortega', 'gaston@test.com', 'gaston', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usersCategory`
--

DROP TABLE IF EXISTS `usersCategory`;
CREATE TABLE IF NOT EXISTS `usersCategory` (
  `idusersCategory` int(11) NOT NULL AUTO_INCREMENT,
  `usersCategoryNombre` tinytext NOT NULL,
  `usersCategoryDesc` tinytext NOT NULL,
  PRIMARY KEY (`idusersCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usersCategory`
--

INSERT INTO `usersCategory` (`idusersCategory`, `usersCategoryNombre`, `usersCategoryDesc`) VALUES
(1, 'Usuario', 'Usuario Normal'),
(2, 'Admin', 'Usuario Administrador');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `fk_Cart_users1` FOREIGN KEY (`users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Cart_has_products`
--
ALTER TABLE `Cart_has_products`
  ADD CONSTRAINT `fk_Cart_has_products_Cart1` FOREIGN KEY (`Cart_idCart`) REFERENCES `Cart` (`idCart`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cart_has_products_products1` FOREIGN KEY (`products_idProd`) REFERENCES `products` (`idProd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_productsCategory` FOREIGN KEY (`productsCategory_idproductsCategory`) REFERENCES `productsCategory` (`idproductsCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `productsImages`
--
ALTER TABLE `productsImages`
  ADD CONSTRAINT `fk_productsImages_products1` FOREIGN KEY (`products_idProd`) REFERENCES `products` (`idProd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products_has_productsCombo`
--
ALTER TABLE `products_has_productsCombo`
  ADD CONSTRAINT `fk_products_has_productsCombo_products1` FOREIGN KEY (`products_idProd`) REFERENCES `products` (`idProd`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_products_has_productsCombo_productsCombo1` FOREIGN KEY (`productsCombo_idproductsCombo`) REFERENCES `productsCombo` (`idproductsCombo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_usersCategory1` FOREIGN KEY (`usersCategory_idusersCategory`) REFERENCES `usersCategory` (`idusersCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
