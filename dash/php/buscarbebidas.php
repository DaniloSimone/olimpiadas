<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$busqueda = $_POST['busqueda'];
require 'conex.php';
$consulta = "SELECT * FROM bebida where nombre like '%$busqueda%'" ;
$query = mysqli_query($conexion,$consulta);
if(!mysqli_num_rows($query)){
    echo json_encode('404');
    return;
}
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