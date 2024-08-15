<?php
require "conex.php";
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
try{
$nombre = "ars";
$consulta = "SELECT producto.*, categoria.categoria FROM producto INNER JOIN categoria ON producto.pkcategoria = categoria.pkcategoria WHERE producto.nombre LIKE '%$nombre%';  ";
$query = mysqli_query($conex,$consulta);
if($query){
    while($fetch = mysqli_fetch_assoc($query)){
        $json[] = array(
            'pkproducto' => $fetch['pkproducto'],
            'nombre' => $fetch['nombre'],
            'descripcion' => $fetch['descripcion'],
            'precio' => $fetch['precio'], 
            'stock' => $fetch['stock'], 
            'categoria' => $fetch['categoria']
             
        );
        echo json_encode($json);   
    }
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