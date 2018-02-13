<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
require_once('include_dao.php');
	$transaction = new Transaction();
	$VehiculoDAO=DAOFactory::getVehiculosDAO();
	$coches=$VehiculoDAO->queryByIdCliente($_POST['idCliente']);
	$transaction->commit();

	echo json_encode($coches);

?>