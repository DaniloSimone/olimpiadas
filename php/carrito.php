<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$pkproducto = 1;
$cantidad = 2;
$consulta = "INSERT INTO `carrito`(`pkusuario`, `pkproducto`, `cantidad`) VALUES ('$pkusuario','$pkproducto','$cantidad')";
$query = mysqli_query($conex,$consulta);
if($query){
    echo json_encode("Se subio al carrito");
}else{
    throw new Exception("Hubo un error", 401);
}
}catch(Error $e){
    http_response_code(500);
    echo json_encode(["mensaje"=>"Algo salio mal"]);
}catch(Exception $e){
    http_response_code($e->getCode());
    echo json_encode(["mensaje"=>$e->getMessage()]);
};
?>