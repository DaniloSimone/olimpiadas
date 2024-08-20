<?php
require "conex.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$pkcompra = $_POST["id"];
$fechahora = date("y-m-d H:i:s");
$consultaavanzada = "UPDATE `compra_estado` SET `estado`='Cancelada',`hora`='$fechahora' WHERE pkcompra='$pkcompra'";
$queryavanzada = mysqli_query($conex, $consultaavanzada);
if($queryavanzada){
    echo json_encode("Se cargo la ubicacion");
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