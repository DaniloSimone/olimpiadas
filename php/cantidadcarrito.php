<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$pkcarrito = $_POST["pkcarrito"];
$cantidad = $_POST["cantidad"];
$consulta = "UPDATE `carrito` SET `cantidad`='$cantidad' WHERE pkproducto='$pkcarrito' and pkusuario='$pkusuario'";
$query = mysqli_query($conex,$consulta);
if($query){
    echo json_encode("Se actualizo la cantidad correctamente");
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