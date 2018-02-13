var listClientesView = (function () {

	function renderValues(arr){
		//Se añade el resultado de la plantilla a la div con id "tabla"
		$("#tabla").html(Handlebars.templates.tabla(arr));
	}

	function modCliente(json){
		tr = $("tr[data-id='"+json.indice+"']" );
		td = tr.find("td");
		td.eq(0).text(json.cliente.nombres);
		td.eq(1).text(json.cliente.ciudad);
		td.eq(2).text(json.cliente.sexo);
		td.eq(3).text(json.cliente.telefono);
		//La fecha se pone en el formato adecuado (ya que esta guardada en el cliente con el formato de la BBDD)
		fechaNacimiento = json.cliente.fechaNacimiento.split(" ");
		fechaNacimiento = fechaNacimiento[0].split("-").reverse().join("/");
		td.eq(4).text(fechaNacimiento);
		td.eq(5).text(json.cliente.direccion);
		td.eq(6).text(json.cliente.provincia);
		
		//Modificar las celdas de la vista mobile
		$("tr[class='nombre "+json.indice+"']" ).children("td").eq(1).text(json.cliente.nombres);
		$("tr[class='ciudad "+json.indice+"']" ).children("td").eq(1).text(json.cliente.ciudad);
		$("tr[class='sexo "+json.indice+"']" ).children("td").eq(1).text(json.cliente.sexo);
		$("tr[class='telefono "+json.indice+"']" ).children("td").eq(1).text(json.cliente.telefono);
		$("tr[class='fecha "+json.indice+"']" ).children("td").eq(1).text(fechaNacimiento);
		$("tr[class='direccion "+json.indice+"']" ).children("td").eq(1).text(json.cliente.direccion);
		$("tr[class='provincia "+json.indice+"']" ).children("td").eq(1).text(json.cliente.provincia);
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
