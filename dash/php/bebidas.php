<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

require 'conex.php';
$consulta = "SELECT * FROM bebida";
$query = mysqli_query($conexion,$consulta);
while($fetch = mysqli_fetch_assoc($query)){
    $json[] = array(
        'id' => $fetch['pkbebida'],
        'nombre' => $fetch['nombre'],
        'precio' => $fetch['precio'],
        'descuento' => $fetch['descuento'],
        'descripcion' => $fetch['descripcion'],
    );
}
echo json_encode($json);

?>