<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

$cocheId=$_POST['id'];
require_once('include_dao.php');		
$transaction = new Transaction();
$VehiculoDAO=DAOFactory::getVehiculosDAO();
$update=$VehiculoDAO->delete($cocheId);
$transaction->commit();
if( $update>0){
	echo json_encode(array("ok"=>"1"), JSON_FORCE_OBJECT);
}else{
	echo "ERROR";
}

?>