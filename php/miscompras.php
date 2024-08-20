<?php

require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$consulta = "SELECT DISTINCT compra.*, compra_envio.*, compra_estado.estado, SUM( compra_producto.cantidad * compra_producto.precio ) AS total FROM compra INNER JOIN compra_estado on compra.pkcompra = compra_estado.pkcompra INNER JOIN compra_envio ON compra.pkcompra = compra_envio.pkcompra INNER JOIN compra_producto ON compra_producto.pkcompra = compra.pkcompra WHERE pkusuario = '$pkusuario' GROUP BY compra.pkcompra ORDER BY compra_estado.pkcompraestado DESC;";
$query = mysqli_query($conex,$consulta);
if(mysqli_num_rows($query)){
    while($fetch = mysqli_fetch_assoc($query)){
        $json[] = array(
            'pkcompra' => $fetch['pkcompra'],
            'localidad' => $fetch['localidad'],
            'codigop' => $fetch['codigop'],
            'calle' => $fetch['calle'],
            'piso' => $fetch['piso'],  
            'estado' => $fetch['estado'],
            'total' => $fetch['total'],
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