var listClientesView = (function () {

	function renderValues(arr){
		//Se añade el resultado de la plantilla a la div con id "tabla"
		$("#tabla").html(Handlebars.templates.tabla(arr));
	}

	function modCliente(json){
		tr = $("tr[data-id='"+json.indice+"']" );
		td = tr.find("td");
		td[0].innerHTML = json.cliente.nombres;
		td[1].innerHTML = json.cliente.ciudad;
		td[2].innerHTML = json.cliente.sexo;
		td[3].innerHTML = json.cliente.telefono;
		//La fecha se pone en el formato adecuado (ya que esta guardada en el cliente con el formato de la BBDD)
		fechaNacimiento = json.cliente.fechaNacimiento.split(" ");
		fechaNacimiento = fechaNacimiento[0].split("-").reverse().join("/");
		td[4].innerHTML = fechaNacimiento;
		//Modificar las celdas de la vista mobile
		$("tr[class='nombre "+json.indice+"']" ).children("td")[1].innerHTML = json.cliente.nombres;
		$("tr[class='ciudad "+json.indice+"']" ).children("td")[1].innerHTML = json.cliente.ciudad;
		$("tr[class='sexo "+json.indice+"']" ).children("td")[1].innerHTML = json.cliente.sexo;
		$("tr[class='telefono "+json.indice+"']" ).children("td")[1].innerHTML = json.cliente.telefono;
		$("tr[class='fecha "+json.indice+"']" ).children("td")[1].innerHTML = fechaNacimiento;
	}

	function deleteRow(padre){
		padre.remove();
		//Eliminar las celdas de la vista mobile
		id = padre.data("id");
		$("tr[data-id='"+id+"']" ).remove();
		$("tr[class='separador "+id+"']").remove();
		$("tr[class='separadorAbajo "+id+"']").remove();
	}

	return {
		init: function () {
			events.getInstance().subscribe('renderValues', renderValues);
			events.getInstance().subscribe('modCliente', modCliente);
			events.getInstance().subscribe('deleteRow', deleteRow);
		}
	}
})();

listClientesView.init();
