<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$localidad = $_POST["localidad"];
$codigop = $_POST["codigo"];
$calle = $_POST["calle"];
$piso = $_POST["piso"];
$consulta = "INSERT INTO `ubicacionu`(`pkusuario`, `localidad`, `codigop`, `calle`, `piso`) VALUES ('$pkusuario','$localidad','$codigop','$calle','$piso')";
$query = mysqli_query($conex,$consulta);
if($query){
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