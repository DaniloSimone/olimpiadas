<?php
header('Content-Type: application/json; charset=utf-8');
header( 'Access-Control-Allow-Origin: *' );
$_POST =  json_decode(file_get_contents("php://input"), true);
require "jwt.php";
try{
session_start();
require "conex.php";
$mail = $_POST["mail"];
$contrasena = $_POST["contrasena"];
$codigo = [
    "contrasena" => $contrasena,
];
$jwt = new JWT("definitivocontrasenanovalidada");
$token = $jwt->encode($codigo);
$consulta = "SELECT * FROM `usuario` WHERE contrasena = '$token' AND mail ='$mail';";
$query = mysqli_query($conex, $consulta);
if(mysqli_num_rows($query)){
while($fetch = mysqli_fetch_assoc($query)){
    $usuario = [
        "pkusuario" => $fetch["pkusuario"],
        "nombre" => $fetch["nombre"],
        "mail" => $fetch["mail"]
    ];
}
$jwtid = new JWT("supercontrasena");
$tokenid = $jwtid->encode($usuario);
echo json_encode($tokenid);
}else{
    throw new Exception("Usuario no encontrado", 404);
}
}catch(Error $e){
    http_response_code(500);
    echo json_encode(["mensaje"=>"Algo salio mal"]);
}catch(Exception $e){
    http_response_code($e->getCode());
    echo json_encode(["mensaje"=>$e->getMessage()]);
};