<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

/*
var data = {
			idCoche:idCoche,
			idCliente:idCliente,
			tipo:tipo,
			marca:marca,
			modelo:modelo,
			matricula:matricula,
			fechaFabricacion:fechaFabricacion
		}
*/
	require_once('include_dao.php');
	$vehiculo=new Vehiculo();	
	$vehiculo->id = htmlspecialchars(trim($_POST['idCoche']));
	$vehiculo->matricula = htmlspecialchars(trim($_POST['matricula']));
	$vehiculo->fechaFabricacion = htmlspecialchars(trim($_POST['fechaFabricacion']));
	$vehiculo->marca = htmlspecialchars(trim($_POST['marca']));
	$vehiculo->modelo = htmlspecialchars(trim($_POST['modelo']));
	$vehiculo->idCliente = htmlspecialchars(trim($_POST['idCliente']));
	$vehiculo->tipo = htmlspecialchars(trim($_POST['tipo']));

	$transaction = new Transaction();
	$VehiculoDAO=DAOFactory::getVehiculosDAO();
	$update=$VehiculoDAO->update($vehiculo);
	$transaction->commit();

	if ( $update>0){
	
		echo json_encode(array("ok"=>"1"),JSON_FORCE_OBJECT);
	}else{
		echo json_encode(array("ERROR"=>"Ha ocurrido algún error"), JSON_FORCE_OBJECT);
		exit();
	} 



?>