<?php
require "conex.php";
require "validar.php";
$consulta = "SELECT pkcarrito from carrito where pkusuario='$pkusuario'";
$query = mysqli_query($conex,$consulta);
echo json_encode(mysqli_num_rows($query)); 
?>