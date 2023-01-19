<?php

    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $edad = $_POST["edad"];
    $sexo = $_POST["sexo"];
    $estatura = $_POST["estatura"];
    $complexion = $_POST["complexion"];

    echo"Esta es la descripcion fisica mia : ".$nombre." ". $apellidos." ".$edad." ".$sexo." ".$estatura." ".$complexion;

?>