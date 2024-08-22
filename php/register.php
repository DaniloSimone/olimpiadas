<?php
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
require "jwt.php";
try{
session_start();
require "conex.php";
$mail = $_POST["mail"];
$nombre = $_POST["nombre"];
$contrasena = $_POST["contrasena"];

$consulta = "SELECT * from usuario where mail='$mail' and nombre='$nombre' ";
$query = mysqli_query($conex, $consulta);
if(mysqli_num_rows(($query))){
while($fetch = mysqli_fetch_assoc($query)){
    throw new Exception("Usuario o Mail ya utilizados", 409);
}}else{
    $codigo = [
        "contrasena" => $contrasena,
    ];
    $jwt = new JWT("definitivocontrasenanovalidada");
    $token = $jwt->encode($codigo);
    $consultados = "INSERT INTO `usuario`(`nombre`, `contrasena`, `mail`) VALUES ('$nombre','$token','$mail')";
    $querydos = mysqli_query($conex, $consultados);
    $consultatres = "SELECT * from usuario where mail='$mail' and nombre='$nombre' ";
    $querytres = mysqli_query($conex, $consultatres);
    while($fetch = mysqli_fetch_assoc($querytres)){
        $usuario = [
            "pkusuario" => $fetch["pkusuario"],
            "nombre" => $fetch["nombre"],
            "mail" => $fetch["mail"]
        ];
    }
    $jwtid = new JWT("supercontrasena");
    $tokenid = $jwtid->encode($usuario);
    echo json_encode($tokenid);
  
}
}catch(Error $e){
    http_response_code(500);
    echo json_encode(["mensaje"=>"Algo salio mal"]);
}catch(Exception $e){
    http_response_code($e->getCode());
    echo json_encode(["mensaje"=>$e->getMessage()]);
};