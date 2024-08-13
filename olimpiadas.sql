-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-08-2024 a las 23:44:53
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `pkcategoria` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `pkcompra` int(11) NOT NULL,
  `pkusuario` int(11) NOT NULL,
  `pkubicacion` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra_producto`
--

CREATE TABLE `compra_producto` (
  `pkcompraproducto` int(11) NOT NULL,
  `pkproducto` int(11) NOT NULL,
  `pkcompra` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacionu`
--

CREATE TABLE `ubicacionu` (
  `pkubicacionu` int(11) NOT NULL,
  `pkusuario` int(11) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `codigop` int(11) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `piso` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  ADD KEY `pkubicacion` (`pkubicacion`),
  ADD KEY `pkusuario` (`pkusuario`);

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
  MODIFY `pkcarrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `pkcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `pkcompra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra_estado`
--
ALTER TABLE `compra_estado`
  MODIFY `pkcompraestado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra_producto`
--
ALTER TABLE `compra_producto`
  MODIFY `pkcompraproducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `pkproducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ubicacionu`
--
ALTER TABLE `ubicacionu`
  MODIFY `pkubicacionu` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `pkusuario` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`pkubicacion`) REFERENCES `ubicacionu` (`pkubicacionu`),
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`pkusuario`) REFERENCES `usuario` (`pkusuario`);

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
