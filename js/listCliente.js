define(['events', 'cliente'], function(events, factory){
	var _listClientes = (function (){
		var arrayClientes = [];
		var url = "localhost";
			
		//Método que hace una consulta ajax que devuelve todos los clientes. Una vez tiene el resultado crea una instancia cliente por cada json y la añade al array "arrayCliente"
		var cargarDatos = function(){
		//Petición ajax para recibir todos los registros de la tabla
			$.post(("http://" + url + "/API/consulta.php"), function(result){
				for(var i = 0, longi = result.length; i < longi; i++){
					objeto = factory.createCliente(result[i]);
					arrayClientes[i] = objeto;
				}
				//Publica la función que hará que el array se cargue en la interfaz gráfica
				renderizar();
			}, "json");

		}

		//Método para añadir objetos cliente al final del array "arrayClientes" (y añadirlos también a la base de datos)
		var add = function(obClien){
			//Función ajax para añadir a la base de datos
			$.post(("http://" + url + "/API/nuevo.php"), {submit: "true", id: obClien.id, ciudad: obClien.ciudad, nombres: obClien.nombres, ciudad: obClien.ciudad, sexo: obClien.sexo, telefono: obClien.telefono, fechaNacimiento: obClien.fechaNacimiento}, function(devuelto){
				obClien.id = devuelto.id.toString();
				arrayClientes.push(obClien);
				//Publica la función que hará que el array se cargue en la interfaz gráfica
				renderizar();
			}, "json");
		}

		//Método para borrar un cliente del array "arrayCliente" (y de la base de datos) pasándole un índice
		var Delete = function(padre){
			indice = padre.data("id");
			//Función ajax para borrar un cliente de la base de datos
			$.post(("http://" + url + "/API/eliminar.php"), {id: arrayClientes[indice].id}, function(){
				//Se setea el valor determinado del array a undefined para eliminarlo
				arrayClientes[indice] = undefined;
				//Publica la función que hará que se elimine la fila adecuada de la tabla
				events.getInstance().publish('deleteRow', padre);
			});
		}

		//Método para modificar un cliente del array "arrayCliente" pasándole sus nuevos valores y el índice
		var modify = function(indice, json){
			//Función ajax para actualizar el registro en la base de datos
			$.post(("http://" + url + "/API/actualizar.php"), {submit: "true", id: arrayClientes[indice].id, ciudad: json.ciudad, nombres: json.nombres, ciudad: json.ciudad, sexo: json.sexo, telefono: json.telefono, fechaNacimiento: json.fechaNacimiento}, function(result){
				cliente = arrayClientes[indice];
				cliente.nombres = json.nombres;
				cliente.ciudad = json.ciudad;
				cliente.sexo = json.sexo;
				cliente.telefono = json.telefono;
				cliente.fechaNacimiento = json.fechaNacimiento;
				events.getInstance().publish('modCliente', {cliente: cliente, indice: indice});
			});
		}

		//Función para obtener un determinado registro del array "arrayClientes"
		var GetValues = function(indice){
			return arrayClientes[indice];
		}

		//Función que publica la función "renderValues" de la vista
		var renderizar = function(){
			events.getInstance().publish('renderValues', arrayClientes);
		}

		return{
			add: add,
			delete: Delete,
			modify: modify,
			GetValues: GetValues,
			cargarDatos: cargarDatos
		}	
	})();

	return _listClientes;

});

