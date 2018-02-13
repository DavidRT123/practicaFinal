var clientesView = (function () {

	function renderCliente(cliente){

		var HTML = Handlebars.templates.clientePlantilla(cliente);
		$("#contenedorFormulario").html(HTML);
	}
		
	return {
		init: function () {
			events.getInstance().subscribe('renderCliente', renderCliente);
		}
	}
})();

clientesView.init();
