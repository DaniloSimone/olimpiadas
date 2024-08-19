<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$consulta = "SELECT * FROM `ubicacionu` WHERE pkusuario = '$pkusuario' ORDER BY pkubicacionu DESC LIMIT 1"; 
$query = mysqli_query($conex,$consulta);
if(mysqli_num_rows($query)){
    while($fetch = mysqli_fetch_assoc($query)){
        $json[] = array(
            'localidad' => $fetch['localidad'],
            'codigop' => $fetch['codigo'],
            'calle' => $fetch['calle'],
            'piso' => $fetch['piso'],
        );
    }
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