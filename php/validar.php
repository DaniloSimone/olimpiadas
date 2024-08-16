<?php
$allowedOrigin = 'http://localhost:3000';
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin){
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){   
    header("HTTP/1.1 204 No Content");
    exit;
}


require "jwt.php";
//"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiZW1wYW5hZGEgZGUgdmVyZHVyYSAgIn0.YMbu_byELOXbWfqGJ11lWuwOrc9koFqE7wUUyfJ10ko"
function authenticateJWTToken(): array|bool
{
    if (!preg_match("/^Bearer\s+(.*)$/", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFzZW5hIjoiZ3VzdGF2byJ9.W-nhNQxiGDfnGC_FJ2acPHzyrnvf2hGQas5N7b_FmmM" , $matches)) {
        http_response_code(400);
        echo json_encode(["message" => "incomplete authorization header"]);
        return false;
    }

    try {
        $jwt = new JWT("supercontrasena");
        $data = $jwt->decode($matches[1]);
        return $data;
    } catch (InvalidSignatureException) {
        
        http_response_code(401);
        echo json_encode(["message" => "invalid signature"]);
        return false;
    } catch (Exception $e) {

        http_response_code(400);
        echo json_encode(["message" => $e->getMessage()]);
        return false;
    }

}

$sessionData = authenticateJWTToken();
$pkusuario = $sessionData["pkusuario"];
var_dump($sessionData)
?>