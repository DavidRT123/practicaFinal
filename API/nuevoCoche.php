<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
	require_once('include_dao.php');

	$vehiculo=new Vehiculo();	
	$vehiculo->matricula = htmlspecialchars(trim($_POST['matricula']));
	$vehiculo->fechaFabricacion = htmlspecialchars(trim($_POST['fechaFabricacion']));
	$vehiculo->marca = htmlspecialchars(trim($_POST['marca']));
	$vehiculo->modelo = htmlspecialchars(trim($_POST['modelo']));
	$vehiculo->idCliente = htmlspecialchars(trim($_POST['idCliente']));
	$vehiculo->tipo = htmlspecialchars(trim($_POST['tipo']));

	$transaction = new Transaction();
	$VehiculoDAO=DAOFactory::getVehiculosDAO();
	$id=$VehiculoDAO->insert($vehiculo);
	$transaction->commit();

	if ( $id >0){
    	echo json_encode(array("id"=>$id), JSON_FORCE_OBJECT);
	}else{
		echo json_encode(array("ERROR"=>"Ha ocurrido algún error"), JSON_FORCE_OBJECT);
	} 


?>