<?php
sleep(2);
echo 'Hola como es libre he hecho esto y no he mostrado la fecha, bueno vale va aqui está:                ';
// Establecer la zona horaria predeterminada a usar. Disponible desde PHP 5.1
date_default_timezone_set('UTC');
// Imprime algo como: Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A');
?>