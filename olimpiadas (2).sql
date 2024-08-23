-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2024 a las 05:48:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `olimpiadas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `pkcarrito` int(11) NOT NULL,
  `pkusuario` int(11) NOT NULL,
  `pkproducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`pkcarrito`, `pkusuario`, `pkproducto`, `cantidad`) VALUES
(9, 2, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `pkcategoria` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`pkcategoria`, `categoria`) VALUES
(1, 'fulbo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `pkcompra` int(11) NOT NULL,
  `pkusuario` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`pkcompra`, `pkusuario`, `fecha`) VALUES
(1, 2, '2019-08-24'),
(2, 2, '2019-08-24'),
(3, 2, '2019-08-24'),
(4, 2, '2019-08-24'),
(5, 2, '2019-08-24'),
(6, 2, '2019-08-24'),
(7, 2, '2019-08-24'),
(8, 2, '2019-08-24'),
(9, 2, '2019-08-24'),
(10, 2, '2019-08-24'),
(11, 2, '2019-08-24'),
(12, 2, '2019-08-24'),
(13, 2, '2019-08-24'),
(14, 2, '2019-08-24'),
(15, 2, '2019-08-24'),
(16, 2, '2019-08-24'),
(17, 2, '2019-08-24'),
(18, 2, '2019-08-24'),
(19, 2, '2019-08-24'),
(20, 2, '2019-08-24'),
(21, 2, '2019-08-24'),
(22, 2, '2019-08-24'),
(23, 2, '2019-08-24'),
(24, 2, '2019-08-24'),
(25, 2, '2019-08-24'),
(26, 2, '2019-08-24'),
(27, 2, '2019-08-24'),
(28, 2, '2019-08-24'),
(29, 2, '2019-08-24'),
(30, 2, '2019-08-24'),
(31, 2, '2019-08-24'),
(32, 2, '2019-08-24'),
(33, 2, '2019-08-24'),
(34, 2, '2019-08-24'),
(35, 2, '2019-08-24'),
(36, 2, '2019-08-24'),
(37, 2, '2019-08-24'),
(38, 2, '2019-08-24'),
(39, 2, '2019-08-24'),
(40, 2, '2019-08-24'),
(41, 2, '2019-08-24'),
(42, 2, '2019-08-24'),
(43, 2, '2019-08-24'),
(44, 2, '2019-08-24'),
(45, 2, '2019-08-24'),
(46, 2, '2019-08-24'),
(47, 2, '2019-08-24'),
(48, 2, '2019-08-24'),
(49, 2, '2019-08-24'),
(50, 2, '2019-08-24'),
(51, 2, '2020-08-24'),
(52, 11, '2023-08-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra_envio`
--

CREATE TABLE `compra_envio` (
  `pkcompraenvio` int(11) NOT NULL,
  `pkcompra` int(11) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `codigop` varchar(50) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `piso` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra_envio`
--

INSERT INTO `compra_envio` (`pkcompraenvio`, `pkcompra`, `localidad`, `codigop`, `calle`, `piso`) VALUES
(1, 1, 'Santa Teresita', '7107', '38 595', '0'),
(2, 2, 'Santa Teresita', '7107', '38 595', '0'),
(3, 3, 'Santa Teresita', '7107', '38 595', '0'),
(4, 4, 'Santa Teresita', '7107', '38 595', '0'),
(5, 5, 'Santa Teresita', '7107', '38 595', '0'),
(6, 6, 'Santa Teresita', '7107', '38 595', '0'),
(7, 7, 'Santa Teresita', '7107', '38 595', '0'),
(8, 8, 'Santa Teresita', '7107', '38 595', '0'),
(9, 9, 'Santa Teresita', '7107', '38 595', '0'),
(10, 10, 'Santa Teresita', '7107', '38 595', '0'),
(11, 11, 'Santa Teresita', '7107', '38 595', '0'),
(12, 12, 'Santa Teresita', '7107', '38 595', '0'),
(13, 13, 'Santa Teresita', '7107', '38 595', '0'),
(14, 14, 'Santa Teresita', '7107', '38 595', '0'),
(15, 15, 'Santa Teresita', '7107', '38 595', '0'),
(16, 16, 'Santa Teresita', '7107', '38 595', '0'),
(17, 17, 'Santa Teresita', '7107', '38 595', '0'),
(18, 18, 'Santa Teresita', '7107', '38 595', '0'),
(19, 19, 'Santa Teresita', '7107', '38 595', '0'),
(20, 20, 'Santa Teresita', '7107', '38 595', '0'),
(21, 21, 'Santa Teresita', '7107', '38 595', '0'),
(22, 22, 'Santa Teresita', '7107', '38 595', '0'),
(23, 23, 'Santa Teresita', '7107', '38 595', '0'),
(24, 24, 'Santa Teresita', '7107', '38 595', '0'),
(25, 25, 'Santa Teresita', '7107', '38 595', '0'),
(26, 26, 'Santa Teresita', '7107', '38 595', '0'),
(27, 27, 'Santa Teresita', '7107', '38 595', '0'),
(28, 28, 'Santa Teresita', '7107', '38 595', '0'),
(29, 29, 'Santa Teresita', '7107', '38 595', '0'),
(30, 30, 'Santa Teresita', '7107', '38 595', '0'),
(31, 31, 'Santa Teresita', '7107', '38 595', '0'),
(32, 32, 'Santa Teresita', '7107', '38 595', '0'),
(33, 33, 'Santa Teresita', '7107', '38 595', '0'),
(34, 34, 'Santa Teresita', '7107', '38 595', '0'),
(35, 35, 'Santa Teresita', '7107', '38 595', '0'),
(36, 36, 'Santa Teresita', '7107', '38 595', '0'),
(37, 37, 'Santa Teresita', '7107', '38 595', '0'),
(38, 38, 'Santa Teresita', '7107', '38 595', '0'),
(39, 39, 'Santa Teresita', '7107', '38 595', '0'),
(40, 40, 'Santa Teresita', '7107', '38 595', '0'),
(41, 41, 'Santa Teresita', '7107', '38 595', '0'),
(42, 42, 'Santa Teresita', '7107', '38 595', '0'),
(43, 43, 'Santa Teresita', '7107', '38 595', '0'),
(44, 44, 'Santa Teresita', '7107', '38 595', '0'),
(45, 45, 'Santa Teresita', '7107', '38 595', '0'),
(46, 46, 'Santa Teresita', '7107', '38 595', '0'),
(47, 47, 'Santa Teresita', '7107', '38 595', '0'),
(48, 48, 'Santa Teresita', '7107', '38 595', '0'),
(49, 49, 'Santa Teresita', '7107', '38 595', '0'),
(50, 50, 'Santa Teresita', '7107', '38 595', '0'),
(51, 51, 'Santa Teresita', '7107', '38 595', '0'),
(52, 52, '2', '2', '2', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra_estado`
--

CREATE TABLE `compra_estado` (
  `pkcompraestado` int(11) NOT NULL,
  `pkcompra` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra_estado`
--

INSERT INTO `compra_estado` (`pkcompraestado`, `pkcompra`, `estado`, `hora`) VALUES
(1, 2, 'Pendiente', '2024-08-19 07:23:36'),
(2, 3, 'Entregado', '2024-08-20 07:54:26'),
(3, 4, 'Cancelada', '2024-08-20 07:08:49'),
(4, 5, 'Pendiente', '2024-08-19 07:43:39'),
(5, 6, 'Pendiente', '2024-08-19 08:00:26'),
(6, 7, 'Pendiente', '2024-08-19 08:00:26'),
(7, 8, 'Pendiente', '2024-08-19 08:00:27'),
(8, 9, 'Pendiente', '2024-08-19 08:00:27'),
(9, 10, 'Pendiente', '2024-08-19 08:00:27'),
(10, 11, 'Pendiente', '2024-08-19 08:00:27'),
(11, 12, 'Pendiente', '2024-08-19 08:01:55'),
(12, 13, 'Pendiente', '2024-08-19 08:05:34'),
(13, 14, 'Pendiente', '2024-08-19 08:10:24'),
(14, 15, 'Pendiente', '2024-08-19 08:10:24'),
(15, 16, 'Pendiente', '2024-08-19 08:10:54'),
(16, 17, 'Pendiente', '2024-08-19 08:10:57'),
(17, 18, 'Pendiente', '2024-08-19 08:10:57'),
(18, 19, 'Pendiente', '2024-08-19 08:10:57'),
(19, 20, 'Pendiente', '2024-08-19 08:10:57'),
(20, 21, 'Pendiente', '2024-08-19 08:11:03'),
(21, 22, 'Pendiente', '2024-08-19 08:11:04'),
(22, 23, 'Pendiente', '2024-08-19 08:11:04'),
(23, 24, 'Pendiente', '2024-08-19 08:11:05'),
(24, 25, 'Pendiente', '2024-08-19 08:11:05'),
(25, 26, 'Pendiente', '2024-08-19 08:11:05'),
(26, 27, 'Pendiente', '2024-08-19 08:11:05'),
(27, 28, 'Pendiente', '2024-08-19 08:11:06'),
(28, 29, 'Pendiente', '2024-08-19 08:11:06'),
(29, 30, 'Pendiente', '2024-08-19 08:11:07'),
(30, 31, 'Pendiente', '2024-08-19 08:11:07'),
(31, 32, 'Pendiente', '2024-08-19 08:11:07'),
(32, 33, 'Pendiente', '2024-08-19 08:11:34'),
(33, 34, 'Pendiente', '2024-08-19 08:11:35'),
(34, 35, 'Pendiente', '2024-08-19 08:11:35'),
(35, 36, 'Pendiente', '2024-08-19 08:11:35'),
(36, 37, 'Pendiente', '2024-08-19 08:11:35'),
(37, 38, 'Pendiente', '2024-08-19 08:11:50'),
(38, 39, 'Pendiente', '2024-08-19 08:11:53'),
(39, 40, 'Pendiente', '2024-08-19 08:11:54'),
(40, 41, 'Pendiente', '2024-08-19 08:11:54'),
(41, 42, 'Pendiente', '2024-08-19 08:11:55'),
(42, 43, 'Pendiente', '2024-08-19 08:11:55'),
(43, 44, 'Pendiente', '2024-08-19 08:11:55'),
(44, 45, 'Pendiente', '2024-08-19 08:11:55'),
(45, 46, 'Pendiente', '2024-08-19 08:11:55'),
(46, 47, 'Pendiente', '2024-08-19 08:11:55'),
(47, 48, 'Pendiente', '2024-08-19 08:11:56'),
(48, 49, 'Pendiente', '2024-08-19 08:11:58'),
(49, 50, 'Pendiente', '2024-08-19 08:13:41'),
(50, 51, 'Cancelada', '2024-08-20 07:52:42'),
(51, 52, 'Pendiente', '2024-08-23 05:41:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra_producto`
--

CREATE TABLE `compra_producto` (
  `pkcompraproducto` int(11) NOT NULL,
  `pkproducto` int(11) NOT NULL,
  `pkcompra` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra_producto`
--

INSERT INTO `compra_producto` (`pkcompraproducto`, `pkproducto`, `pkcompra`, `cantidad`, `precio`) VALUES
(1, 3, 2, 1, 25),
(2, 4, 2, 1, 245),
(3, 4, 3, 5, 245),
(4, 4, 4, 5, 245),
(5, 8, 51, 1, 123),
(6, 4, 52, 1, 245);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `pkproducto` int(11) NOT NULL,
  `pkcategoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`pkproducto`, `pkcategoria`, `nombre`, `descripcion`, `precio`, `stock`, `img`) VALUES
(3, 1, 'a', 'a', 25, 2, ''),
(4, 1, 'aa', 'aa', 245, 44, ''),
(8, 1, 'asd', 'asd', 123, 122, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacionu`
--

CREATE TABLE `ubicacionu` (
  `pkubicacionu` int(11) NOT NULL,
  `pkusuario` int(11) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `codigop` varchar(50) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `piso` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicacionu`
--

INSERT INTO `ubicacionu` (`pkubicacionu`, `pkusuario`, `localidad`, `codigop`, `calle`, `piso`) VALUES
(1, 2, 'Santa Teresita', '7107', '38 595', '0'),
(2, 11, '2', '2', '2', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `pkusuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` text NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`pkusuario`, `nombre`, `contrasena`, `mail`) VALUES
(1, 'genacool243', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYWJjIn0._v-lx4pY_XLXSPsMfYC8jqPZWm9NYra_KCMgjyNR-WM', 'genacool243@gmail.com'),
(2, 'genadash', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYWJjIn0._v-lx4pY_XLXSPsMfYC8jqPZWm9NYra_KCMgjyNR-WM', 'dash@gmail.com'),
(3, 'supergriditoenjoyer', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoicGFuIn0.rCjzoH4kteAGMb56kKI7xMtN7d4Cj-Le5rfEydTTrDs', 'gridito@gridito.com'),
(4, 'asdsa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYXNkIn0.XhrkAjCFEL0SRZSSjlBi32HqfODQhfuoc9beb2sy13Q', 'gridito@gridito.com'),
(5, 'gridito@gridito.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYWRzYSJ9.Unl-VolBpI6ofEpQ5LgK4Xf5OeCZMnJdZRnzcdgsNkM', 'gridito@gridito.com'),
(6, 'asdsadasdadasd', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYXNkc2FkIn0.iokbxENtfL7Fq-4a3lrSkBE5vq45S3wpL7FovXukUwU', 'gridito@gridito.com'),
(7, 'asdsadadadaasdadasdad', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYXNkc2EifQ.o3SxgQBMp1h1YkwKwUP-_hCkDapKcDZyDSjgPHdQeoQ', 'gridito@gridito.com'),
(8, 'dasfafgaggs', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYXNkc2EifQ.o3SxgQBMp1h1YkwKwUP-_hCkDapKcDZyDSjgPHdQeoQ', 'gridito@gridito.com'),
(9, 'hgsdhdshdfhdfh', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYXNkc2EifQ.o3SxgQBMp1h1YkwKwUP-_hCkDapKcDZyDSjgPHdQeoQ', 'gridito@gridito.com'),
(10, 'sadsadasdfgañljgksañlkfalñ', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoic2RhZGFkIn0.QIrI7mjvHZe6p3XQpmXbk1zkA3hYnLRsEZJpNZhc-9g', 'gridito@gridito.coma'),
(11, 'a', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiYSJ9.Vn3Uo4FK1kUKX4nRhlKXIYMKNhbKSJTITeF5OdUMG84', 'a@a');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`pkcarrito`),
  ADD KEY `pkusuario` (`pkusuario`),
  ADD KEY `pkproducto` (`pkproducto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`pkcategoria`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`pkcompra`),
  ADD KEY `pkusuario` (`pkusuario`);

--
-- Indices de la tabla `compra_envio`
--
ALTER TABLE `compra_envio`
  ADD PRIMARY KEY (`pkcompraenvio`),
  ADD KEY `pkcompra` (`pkcompra`);

--
-- Indices de la tabla `compra_estado`
--
ALTER TABLE `compra_estado`
  ADD PRIMARY KEY (`pkcompraestado`),
  ADD KEY `pkcompra` (`pkcompra`);

--
-- Indices de la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  ADD PRIMARY KEY (`pkcompraproducto`),
  ADD KEY `pkcompra` (`pkcompra`),
  ADD KEY `pkproducto` (`pkproducto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`pkproducto`),
  ADD KEY `pkcategoria` (`pkcategoria`);

--
-- Indices de la tabla `ubicacionu`
--
ALTER TABLE `ubicacionu`
  ADD PRIMARY KEY (`pkubicacionu`),
  ADD KEY `pkusuario` (`pkusuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`pkusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `pkcarrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `pkcategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `pkcompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `compra_envio`
--
ALTER TABLE `compra_envio`
  MODIFY `pkcompraenvio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `compra_estado`
--
ALTER TABLE `compra_estado`
  MODIFY `pkcompraestado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  MODIFY `pkcompraproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `pkproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ubicacionu`
--
ALTER TABLE `ubicacionu`
  MODIFY `pkubicacionu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `pkusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`pkusuario`) REFERENCES `usuario` (`pkusuario`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`pkproducto`) REFERENCES `producto` (`pkproducto`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`pkusuario`) REFERENCES `usuario` (`pkusuario`);

--
-- Filtros para la tabla `compra_envio`
--
ALTER TABLE `compra_envio`
  ADD CONSTRAINT `compra_envio_ibfk_1` FOREIGN KEY (`pkcompra`) REFERENCES `compra` (`pkcompra`);

--
-- Filtros para la tabla `compra_estado`
--
ALTER TABLE `compra_estado`
  ADD CONSTRAINT `compra_estado_ibfk_1` FOREIGN KEY (`pkcompra`) REFERENCES `compra` (`pkcompra`);

--
-- Filtros para la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  ADD CONSTRAINT `compra_producto_ibfk_1` FOREIGN KEY (`pkcompra`) REFERENCES `compra` (`pkcompra`),
  ADD CONSTRAINT `compra_producto_ibfk_2` FOREIGN KEY (`pkproducto`) REFERENCES `producto` (`pkproducto`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`pkcategoria`) REFERENCES `categoria` (`pkcategoria`);

--
-- Filtros para la tabla `ubicacionu`
--
ALTER TABLE `ubicacionu`
  ADD CONSTRAINT `ubicacionu_ibfk_1` FOREIGN KEY (`pkusuario`) REFERENCES `usuario` (`pkusuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
