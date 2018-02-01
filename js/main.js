$(document).ready(function(){
	//Recuperación de las instancia eventos que contiene todas las funbciones para publicar
	events.getInstance();
	//Llamada a la función cargarDatos que cargará los datos y los mostrará en la interfaz gráfica
	_listClientes.cargarDatos();

//////// EVENTOS /////////

///// EVENTOS FORMULARIO /////

	//Evento botón añadir del formulario
	$("#buttAdd").click(function(){
		datos = recogerDatos();
		fechaNacimiento = datos.fechaNacimiento.split("/").reverse().join("-")+" 00:00:00";
		cli = factory.createCliente({
			id: "", 
			nombres: 
			datos.nombres, 
			ciudad: datos.ciudad, 
			sexo: datos.sexo, 
			telefono: datos.telefono, 
			fechaNacimiento: fechaNacimiento
		});
		_listClientes.add(cli);
		$("#modal").modal("hide");
	});

	//Evento botón modificar del formulario
	$("#buttMod").click(function(){
		datos = recogerDatos();
		fechaNacimiento = datos.fechaNacimiento.split("/").reverse().join("-")+" 00:00:00";
		indice = $('input').data('id');
		_listClientes.modify(indice, {
			nombres: datos.nombres, 
			ciudad: datos.ciudad, 
			sexo: datos.sexo, 
			telefono: datos.telefono, 
			fechaNacimiento: fechaNacimiento
		});
		$("#modal").modal("hide");
	});
	
///// EVENTOS TABLA /////	

	//Botón de añadir página principal
	$("#tabla").on('click', '#añadir', function(){
		cliente = {id: "", nombres: "", ciudad: "", telefono: "", fechaNacimiento: ""};
		//Rellenar modal con la plantilla de handlebars
		events.getInstance().publish('renderCliente', cliente);
		rellenarModal("Añadir", 0);
	});

	//Botón modificar página principal
	$("#tabla").on('click', ".modificar", function(){
		indice = $(this).parents('tr').data("id");
		cliente = _listClientes.GetValues(indice);
		cliente.idA = indice;
		//Rellenar modal con la plantilla de handlebars (y con los valores a modificar)
		events.getInstance().publish("renderCliente", cliente);
		rellenarModal("Modificar", 1);
	});


	//Evento botón eliminar
	$("#tabla").on('click', ".eliminar", function(){
		padre = $(this).parents('tr');
		_listClientes.delete(padre);
	});

///////////////////////////////////////////////////

//HELPERS HANDLEBARS
		
	//Helper para convertir las fechas en formato habitual
	Handlebars.registerHelper('convertirFecha', function(fecha) {
		fecha = fecha.split(" ");
		fecha = fecha[0].split("-").reverse().join("/");
		return fecha;
	});

	//Helper para seleccionar el sexo en el menú radio
	Handlebars.registerHelper('convertirSexo', function(sexoSelect, etiqueta) {
		if(sexoSelect == etiqueta){
			return "checked";
		}else{
			return "";
		}
	});

//FUNCIONES AUXILIARES

	//Función que recoge lops datos introducidos en el modal (ya sea para añadir un nuevo cliente o modificar uno ya existente)
	function recogerDatos(){
		//Filtro por si no se han rellenado los campos
		nom = ($("#nombre").val() == undefined || $("#nombre").val() == "") ? "VACIO" : $("#nombre").val();
		ciu = ($("#ciudad").val() == undefined || $("#ciudad").val() == "") ? "VACIO" : $("#ciudad").val();
		sex = ($("input[name=sexo]:checked").val() == undefined || $("input[name=sexo]:checked").val() == "") ? "*" : $("input[name=sexo]:checked").val();
		tel = ($("#telefono").val() == undefined || $("#telefono").val() == "") ? "VACIO" : $("#telefono").val();
		feN = ($("#fechaNacimiento").val() == undefined || $("#fechaNacimiento").val() == "") ? "0001-01-01 00:00:00" : $("#fechaNacimiento").val();
		
		return {
			nombres: nom, 
			ciudad: ciu,
			sexo: sex,
			telefono: tel,
			fechaNacimiento: feN
		}
	}

	//Función para rellenar el modal con los campos/botones apropiados (según sea el modal para modificar o añadir)
	function rellenarModal(titulo, modAdd){
		$("#modal").modal();
		$("#title-modal").html(titulo);
		//Valor: 1 = Modificar, cualquier otro valor: Añadir
		if(modAdd == 1){
			$("#buttMod").show();
			$("#buttAdd").hide();
		}else{
			$("#buttMod").hide();
			$("#buttAdd").show();
		}
		$('#fechaNacimiento').datepicker({changeYear: true, yearRange: "1900:2018", changeMonth: true});
	}	
})


