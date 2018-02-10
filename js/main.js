$(document).ready(function(){
	//Recuperación de las instancia eventos que contiene todas las funbciones para publicar
	events.getInstance();
	//Llamada a la función cargarDatos que cargará los datos y los mostrará en la interfaz gráfica
	_listClientes.cargarDatos();

//////// EVENTOS /////////

///// EVENTOS FORMULARIO /////

	//Evento botón añadir del formulario
	$("#buttAdd").click(function(){
		//Dar valor a la fecha de alta
		fecha = new Date();
		d = (fecha.getDate() < 10) ? ("0" + fecha.getDate()) : fecha.getDate();
		m = ((fecha.getMonth()+1) < 10) ? ("0" + (fecha.getMonth()+1)) : (fecha.getMonth()+1);
		y = fecha.getFullYear();
		fA = y + "-" + m + "-" + d + " 00:00:00";
	
		datos = recogerDatos();
		fechaNacimiento = convertirFechaBBDD(datos.fechaNacimiento);
		cli = factory.createCliente(
			{
				id: "", 
				nombres: datos.nombres, 
				ciudad: datos.ciudad,
				sexo: datos.sexo,
				telefono: datos.telefono,
				fechaNacimiento: fechaNacimiento,
				direccion: datos.direccion,
				provincia: datos.provincia,
				fechaAlta: fA
			});
		_listClientes.add(cli);
		$("#modal").modal("hide");
	});

	//Evento botón modificar del formulario
	$("#buttMod").click(function(){
		datos = recogerDatos();
		//Transformación de las fechas al formato de la BBDD
		fechaNacimiento = convertirFechaBBDD(datos.fechaNacimiento);
		fechaAlta = convertirFechaBBDD(datos.fechaAlta);
		
		indice = $('input').data('id');
		_listClientes.modify(indice, {
			nombres: datos.nombres,
			ciudad: datos.ciudad,
			sexo: datos.sexo,
			telefono: datos.telefono,
			fechaNacimiento: fechaNacimiento,
			direccion: datos.direccion,
			provincia: datos.provincia,
			fechaAlta: fechaAlta
		});
		$("#modal").modal("hide");
	});
	
///// EVENTOS TABLA /////	

	//Botón de añadir página principal
	$("#tabla").on('click', '#añadir', function(){
		cliente = {
			id: "",
			nombres: "",
			ciudad: "",
			telefono: "",
			fechaNacimiento: "",
			direccion: "",
			provincia: "",
			fechaAlta: ""
		};
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

	//Evento botón ubicación
	$("#tabla").on('click', ".ubicacion", function(){
		padre = $(this).parents('tr');
		indice = padre.data("id");
		//En función de en que vista este (sm, md, lg) se capturaran unos campos u otros
		if(padre.parents("tbody").prop("class") != "cuerpo"){
			direccion = padre.siblings("[class='direccion "+indice+"']").find(".direccion").text();
			provincia = padre.siblings("[class='provincia "+indice+"']").find(".provincia").text();
			ciudad = padre.siblings("[class='ciudad "+indice+"']").find(".ciudad").text();
		}else{
			direccion = padre.find("td[class='direccion']").text();
			provincia = padre.find("td[class='provincia']").text();
			ciudad = padre.find("td[class='ciudad']").text();
		}
		_listClientes.map((direccion + ", " + provincia + ", " + ciudad));
		rellenarModal("Ubicación", "mapa");
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

	//Función que recoge los datos introducidos en el modal (ya sea para añadir un nuevo cliente o modificar uno ya existente)
	function recogerDatos(){
		//Filtro por si no se han rellenado los campos
		nom = ($("#nombre").val() == undefined || $("#nombre").val() == "") ? "VACIO" : $("#nombre").val();
		ciu = ($("#ciudad").val() == undefined || $("#ciudad").val() == "") ? "VACIO" : $("#ciudad").val();
		sex = ($("input[name=sexo]:checked").val() == undefined || $("input[name=sexo]:checked").val() == "") ? "*" : $("input[name=sexo]:checked").val();
		tel = ($("#telefono").val() == undefined || $("#telefono").val() == "") ? "VACIO" : $("#telefono").val();
		feN = ($("#fechaNacimiento").val() == undefined || $("#fechaNacimiento").val() == "") ? "0001-01-01 00:00:00" : $("#fechaNacimiento").val();
		dir = ($("#direccion").val() == undefined || $("#direccion").val() == "") ? "VACIO" : $("#direccion").val();
		pro = ($("#provincia").val() == undefined || $("#provincia").val() == "") ? "VACIO" : $("#provincia").val();
		fechaA = ($("#fechaAlta").val() == undefined || $("#fechaAlta").val() == "") ? "0001-01-01 00:00:00" : $("#fechaAlta").val();

		return {
			nombres: nom, 
			ciudad: ciu,
			sexo: sex,
			telefono: tel,
			fechaNacimiento: feN,
			direccion: dir,
			provincia: pro,
			fechaAlta: fechaA
		}
	}

	//Función para rellenar el modal con los campos/botones apropiados (según sea el modal para modificar o añadir)
	function rellenarModal(titulo, modAdd){
		$("#modal").modal();
		$("#title-modal").html(titulo);
		//Valor: 1 = Modificar, cualquier otro valor: Añadir
		if(modAdd == "mapa"){
			$("#modal .modal-footer").hide();
			$("#contenedorFormulario").hide();
			$("#contenedorMapa").show();
		}else{
			if(modAdd == 1){
				$("#buttMod").show();
				$("#buttAdd").hide();
			}else{
				$("#buttMod").hide();
				$("#buttAdd").show();
			}
			$("#contenedorFormulario").show();
			$("#contenedorMapa").hide();
			$("#modal .modal-footer").show();
			//Ocultar la div de fecha alta (no es un dato relevante para el usuario a la hora de añadir)
			$("#divFechaAlta").hide();
		}
		if($('#fechaNacimiento')){
			$('#fechaNacimiento').datepicker({changeYear: true, yearRange: "1900:2018", changeMonth: true});
		}
	}

	//Función para transformar fecha
	function convertirFechaBBDD(fecha){
		fecha = fecha.split(" ");
		fecha = fecha[0].split("/").reverse().join("-");
		return fecha;
	}	
})


