<?php
require("conex.php");
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];
$descuento = $_POST['descuento'];
$menu = $_POST['menu'];

switch ($menu) {
    case '1':
        $consulta = "INSERT INTO `burguer`(`nombre`, `precio`, `descuento`, `descripcion`) VALUES ('$nombre','$precio','$descuento','$descripcion')";
        break;
    case '2':
        $consulta = "INSERT INTO `papas`(`nombre`, `precio`, `descuento`, `descripcion`) VALUES ('$nombre','$precio','$descuento','$descripcion')";
        break;
    case '3':
        $consulta = "INSERT INTO `bebida`(`nombre`, `precio`, `descuento`, `descripcion`) VALUES ('$nombre','$precio','$descuento','$descripcion')";
        break;
 
}
$query = mysqli_query($conexion, $consulta);
echo "listo";
?>