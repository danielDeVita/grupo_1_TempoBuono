-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 26, 2022 at 01:58 AM
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
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `idCart` int(11) NOT NULL,
  `CartQantity` int(11) NOT NULL,
  `CartTotal` float NOT NULL,
  `users_idUsers` int(11) NOT NULL,
  `CartDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Cart_has_products`
--

CREATE TABLE `Cart_has_products` (
  `Cart_idCart` int(11) NOT NULL,
  `products_idProd` int(11) NOT NULL,
  `CartProdQtty` int(11) NOT NULL,
  `CartProdPrice` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idProd` int(11) NOT NULL,
  `ProductsName` tinytext NOT NULL,
  `ProductsDescription` varchar(255) NOT NULL,
  `ProductsPrice` decimal(65,0) NOT NULL,
  `productsCategory_idproductsCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idProd`, `ProductsName`, `ProductsDescription`, `ProductsPrice`, `productsCategory_idproductsCategory`) VALUES
(9, 'Alfajor Marplatense', 'El alfajor más tradicional', '100', 1),
(10, 'Alfajor Santafesino', 'Con dulce de leche y cubierto en glacè', '120', 1),
(11, 'Alfajor Correntino', 'Con masa a base de harina de mandioca', '110', 1),
(12, 'Alfajor de miel de caña', 'Preparado con miel de azúcar de caña', '130', 1),
(13, 'Alfajor Mendocino', 'La masa de las galletas  contiene nuez', '130', 1),
(14, 'Alfajor Cordobés', 'Alfajor de masa blanda', '100', 1),
(18, 'Café Irlandés', 'Mezcla de whisky irlandés, una cucharada de azúcar, café y crema de leche.', '160', 2),
(19, 'Café Carajillo', 'Café  y Cognac o Ron servido en un vaso pequeño, se toma caliente o frío con hielos.', '120', 2),
(20, 'Café Espresso', 'Se caracteriza por su rápida preparación a una alta presión y por un sabor y textura más concentrados.', '100', 2),
(21, 'Cafe Frappé', 'Es un café con hielo cubierto de espuma.', '100', 2),
(22, 'Café Macchiato', 'Consiste en un espresso con una pequeña cantidad de leche caliente y espumada.', '110', 2),
(23, 'Café Capuchino', 'Café espresso y leche montada con vapor para darle cremosidad.', '120', 2),
(24, 'Combo n°1', 'Café Macchiato y una selección de los mejores alfajores Marplatenses.', '200', 3),
(25, 'Combo n°2', 'Café Espresso y una variedad de alfajores Santafesinos.', '220', 3),
(26, 'Combo n°3', 'Café Capuchino acompañado por los mas sabrosos alfajores Correntinos.', '190', 3),
(27, 'Combo n°4', 'Café Espresso más una caja de alfajores Mendocinos.', '230', 3);

-- --------------------------------------------------------

--
-- Table structure for table `productsCategory`
--

CREATE TABLE `productsCategory` (
  `idproductsCategory` int(11) NOT NULL,
  `productsCategorNombre` tinytext NOT NULL,
  `productsCategoryDesc` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productsCategory`
--

INSERT INTO `productsCategory` (`idproductsCategory`, `productsCategorNombre`, `productsCategoryDesc`) VALUES
(1, 'Alfajor', 'Dos o más galletas horneadas, adheridas entre sí por mermeladas, jaleas u otros dulces. Revestidos por coberturas, o baños de repostería y pueden contener frutas secas.'),
(2, 'Cafe', 'Bebida que se obtiene a partir de los granos tostados y molidos de los frutos de la planta del café.'),
(3, 'Combo', 'Una combinación entre cualquiera de nuestros Café y Alfajores.');

-- --------------------------------------------------------

--
-- Table structure for table `productsCombo`
--

CREATE TABLE `productsCombo` (
  `idproductsCombo` int(11) NOT NULL,
  `productsComprecio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `productsImages`
--

CREATE TABLE `productsImages` (
  `idproductsImages` int(11) NOT NULL,
  `productsImagesNombre` varchar(255) NOT NULL,
  `productsImagesDesc` varchar(45) NOT NULL,
  `products_idProd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productsImages`
--

INSERT INTO `productsImages` (`idproductsImages`, `productsImagesNombre`, `productsImagesDesc`, `products_idProd`) VALUES
(3, '1654985597762.jpg', '', 9),
(4, '1654985649336.jpg', '', 10),
(5, '1654985713366.jpg', '', 11),
(6, '1654985954477.jpg', '', 12),
(7, '1654986058009.jpg', '', 13),
(8, '1654986127062.jpg', '', 14),
(12, '1666748146740.jpg', '', 18),
(13, '1666748367186.jpg', '', 19),
(14, '1666748445856.jpg', '', 20),
(15, '1666748528606.jpg', '', 21),
(16, '1666748602763.jpg', '', 22),
(17, '1666748680597.jpg', '', 23),
(18, '1666748897969.jpg', '', 24),
(19, '1666748963993.jpg', '', 25),
(20, '1666749036979.jpg', '', 26),
(21, '1666749123098.jpg', '', 27);

-- --------------------------------------------------------

--
-- Table structure for table `products_has_productsCombo`
--

CREATE TABLE `products_has_productsCombo` (
  `products_idProd` int(11) NOT NULL,
  `productsCombo_idproductsCombo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `UsersNombre` tinytext NOT NULL,
  `UsersEmail` varchar(45) NOT NULL,
  `UsersPasswd` varchar(255) NOT NULL,
  `usersCategory_idusersCategory` int(11) NOT NULL,
  `UsersImageName` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUsers`, `UsersNombre`, `UsersEmail`, `UsersPasswd`, `usersCategory_idusersCategory`, `UsersImageName`) VALUES
(5, 'danielito', 'dani@gara.com', '$2a$12$.SYHJHSfaK5xxjzI6oj2vuDyK4ORuOvbKyYsN9R24e3zT5ISIRBFK', 1, '1654388517710.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usersCategory`
--

CREATE TABLE `usersCategory` (
  `idusersCategory` int(11) NOT NULL,
  `usersCategoryNombre` tinytext NOT NULL,
  `usersCategoryDesc` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usersCategory`
--

INSERT INTO `usersCategory` (`idusersCategory`, `usersCategoryNombre`, `usersCategoryDesc`) VALUES
(1, 'Usuario', 'Usuario Normal'),
(2, 'Admin', 'Usuario Administrador');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`idCart`),
  ADD KEY `fk_Cart_users1_idx` (`users_idUsers`);

--
-- Indexes for table `Cart_has_products`
--
ALTER TABLE `Cart_has_products`
  ADD PRIMARY KEY (`Cart_idCart`,`products_idProd`),
  ADD KEY `fk_Cart_has_products_products1_idx` (`products_idProd`),
  ADD KEY `fk_Cart_has_products_Cart1_idx` (`Cart_idCart`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProd`),
  ADD KEY `fk_products_productsCategory_idx` (`productsCategory_idproductsCategory`);

--
-- Indexes for table `productsCategory`
--
ALTER TABLE `productsCategory`
  ADD PRIMARY KEY (`idproductsCategory`);

--
-- Indexes for table `productsCombo`
--
ALTER TABLE `productsCombo`
  ADD PRIMARY KEY (`idproductsCombo`);

--
-- Indexes for table `productsImages`
--
ALTER TABLE `productsImages`
  ADD PRIMARY KEY (`idproductsImages`),
  ADD KEY `fk_productsImages_products1_idx` (`products_idProd`);

--
-- Indexes for table `products_has_productsCombo`
--
ALTER TABLE `products_has_productsCombo`
  ADD PRIMARY KEY (`products_idProd`,`productsCombo_idproductsCombo`),
  ADD KEY `fk_products_has_productsCombo_productsCombo1_idx` (`productsCombo_idproductsCombo`),
  ADD KEY `fk_products_has_productsCombo_products1_idx` (`products_idProd`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`),
  ADD KEY `fk_users_usersCategory1_idx` (`usersCategory_idusersCategory`);

--
-- Indexes for table `usersCategory`
--
ALTER TABLE `usersCategory`
  ADD PRIMARY KEY (`idusersCategory`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cart`
--
ALTER TABLE `Cart`
  MODIFY `idCart` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `productsCategory`
--
ALTER TABLE `productsCategory`
  MODIFY `idproductsCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productsCombo`
--
ALTER TABLE `productsCombo`
  MODIFY `idproductsCombo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productsImages`
--
ALTER TABLE `productsImages`
  MODIFY `idproductsImages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usersCategory`
--
ALTER TABLE `usersCategory`
  MODIFY `idusersCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `fk_productsImages_products1` FOREIGN KEY (`products_idProd`) REFERENCES `products` (`idProd`) ON DELETE CASCADE ON UPDATE CASCADE;

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
