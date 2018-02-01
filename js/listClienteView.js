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
		td[4].innerHTML = fechaNacimiento[0].split("-").reverse().join("/");
		td[5].innerHTML = json.cliente.direccion;
		td[6].innerHTML = json.cliente.provincia;
		//La fecha se pone en el formato adecuado (ya que esta guardada en el cliente con el formato de la BBDD)
		fechaAlta = json.cliente.fechaAlta.split(" ");
		td[7].innerHTML = fechaAlta[0].split("-").reverse().join("/");

	}

	function deleteRow(padre){
		padre.remove();
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
