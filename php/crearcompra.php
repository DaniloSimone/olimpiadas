<?php
require "conex.php";
require "validar.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$consulta = "SELECT * from ubicacionu where pkusuario='$pkusuario'";
$dia = date("d/m/y");
$query = mysqli_query($conex,$consulta);
if($query){
    while($fetch =   mysqli_fetch_assoc($query)){
        $ubicacion = $fetch["pkubicacionu"];
    };
  $consultados = "INSERT INTO `compra`(`pkusuario`, `pkubicacionu`, `fecha`) VALUES ('$pkusuario','$ubicacion','$dia')";
  $querydos = mysqli_query($conex, $consultados);
  if($querydos){
    $id = mysqli_insert_id($conex);
    $consultatres = "SELECT * from carrito where pkusuario ='$pkusuario'";
    $querytres = mysqli_query($conex,$consultatres);
    if($querytres){
        while($fetchdos = mysqli_fetch_assoc($querytres)){
            $pkproducto = $fetchdos["pkproducto"];
            $cantidad = $fetchdos["cantidad"];
            $consultacuatro = "INSERT INTO `compra_producto`(pkproducto, pkcompra, cantidad) VALUES ('$pkproducto','$id','$cantidad')";
            $querycuatro = mysqli_query($conex, $consultacuatro);
        };
        $consultacinco = "DELETE from carrito where pkusuario='$pkusuario'";
        $querycinco = mysqli_query($conex, $consultacinco);
        $fechahora = date("y-m-d H:i:s");
        $consultaseis = "INSERT INTO `compra_estado`(`pkcompra`, `estado`, `hora`) VALUES ('$id','Pendiente','$fechahora')";
        $queryseis = mysqli_query($conex,$consultaseis);
        echo json_encode("Compra registrada correctamente");
    }else{
        $consultaalternativa = mysqli_query($conex,"DELETE from compra where pkcompra='$id'");
        throw new Exception("No hay nada en el carrito, compra vacia.", 404);
    }
  }else{
    throw new Exception("Hubo un error a la hora de crear la compra, intentelo mas tarde", 400);
  } 
}else{
    throw new Exception("No se encontro ubicacion", 404);
};
}catch(Error $e){
    http_response_code(500);
    echo json_encode(["mensaje"=>"Algo salio mal"]);
}catch(Exception $e){
    http_response_code($e->getCode());
    echo json_encode(["mensaje"=>$e->getMessage()]);
};
?>