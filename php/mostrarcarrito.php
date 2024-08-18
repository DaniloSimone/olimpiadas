<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$consulta = "SELECT carrito.*, producto.* FROM `carrito` INNER JOIN producto ON carrito.pkproducto = producto.pkproducto WHERE carrito.pkusuario = '$pkusuario';";
$query = mysqli_query($conex,$consulta);
if(mysqli_num_rows($query)){
    while($fetch = mysqli_fetch_assoc($query)){
        $json[] = array(
            'pkproducto' => $fetch['pkproducto'],
            'cantidad' => $fetch['cantidad'],
            'nombre' => $fetch['nombre'],
            'descripcion' => $fetch['descripcion'],
            'precio' => $fetch['precio'],  
            'stock' => $fetch['stock'],
        );
    };
    echo json_encode($json);   
}else{
    throw new Exception("No se encontro nada", 404);
}
}catch(Error $e){
    http_response_code(500);
    echo json_encode(["mensaje"=>"Algo salio mal"]);
}catch(Exception $e){
    http_response_code($e->getCode());
    echo json_encode(["mensaje"=>$e->getMessage()]);
};
?>