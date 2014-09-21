<?php
	$mensaje = $_POST['mensaje'];
	$mensaje.= "\n---------------\n";
	$mensaje.= "\nDe:". $_POST['nombre'];
	$mensaje.= "\nE-mail:" .$_POST['email'];
	$destino= "estebanromero@esparragostudio.com";
	$remitente = "mensaje enviado por: " .$_POST['nombre'];
	mail($destino,$asunto,$mensaje,"FROM: $remitente");
	echo "mensaje enviado. Gracias por contactarme";
?>