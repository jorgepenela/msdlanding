<?php

$email = $_POST['email'];

if ( empty($_POST['asunto']) ) {
	/*----------- INICIO DE CONFIGURACION-----------------*/
	//mail del destinatario (escribirlo entre las comillas)
	$destino='guillermo.gargantini@merck.com, info@anarketing.com.ar';
	//$destino='jorge@anarketing.com.ar';
	
	//nombre del que envía el correo (escribirlo entre las comillas)
	$origen_nombre='Consulta online MSD';
	//mail del que envía el correo (escribirlo entre las comillas)
	$origen_mail='web@anarketing.com.ar';
	//título del corrreo (escribirlo entre las comillas)
	$subject='Consulta landing MSD Bovinos';
	//página a la que se va luego de enviar el mail (escribirlo entre las comillas)
	$adondevoy='http://anarketing.com.ar/msdsaludanimal/?c=mensajeEnviado';
	/*----------- FIN DE LA CONFIGURACION-----------------*/
	$headers = "From: $origen_nombre <$origen_mail>\r\n";
	$headers .= "Reply-To: $email\r\n"; 
	$headers .= "Return-Path: $origen_nombre <$origen_mail>\r\n";  
	$mensaje='';
		foreach($_POST as $k => $v){
			if($k!='Submit' && $k!='Enviar'){
				$mensaje.=ucfirst($k).": $v\n";
			}
		}
	ini_set(sendmail_from,$origen_mail);
	mail($destino,$subject,$mensaje,$headers);
	header("Location:$adondevoy");
	// Die with a success message
	
} else {
	//	header("location:https://dailyargentina.com/?error=error");
}



?>