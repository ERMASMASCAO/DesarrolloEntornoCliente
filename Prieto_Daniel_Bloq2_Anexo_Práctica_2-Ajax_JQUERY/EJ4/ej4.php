<?php
    $usuario=$_GET["usuario"];
    $clave=$_GET["clave"];

    if ($usuario == "pepe" && $clave == "hola") {
        echo "Correcto";
    }else {
        echo "Incorrecto";
    }
?>