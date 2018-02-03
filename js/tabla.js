(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tabla'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	    			<tr data-id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n						<td class='titleMobile'>Nombre: </td><td>"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "</td>\r\n						<td class='titleMobile'>Ciudad: </td><td>"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</td>\r\n						<td class='titleMobile'>Sexo: </td><td>"
    + alias4(((helper = (helper = helpers.sexo || (depth0 != null ? depth0.sexo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sexo","hash":{},"data":data}) : helper)))
    + "</td>\r\n						<td class='titleMobile'>Teléfono: </td><td>"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</td>\r\n						<td class='titleMobile'>Fecha de nacimiento: </td><td>"
    + alias4((helpers.convertirFecha || (depth0 && depth0.convertirFecha) || alias2).call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"convertirFecha","hash":{},"data":data}))
    + "</td>\r\n						<td colspan='2px'><i class=\"modificar fa fa-pencil-alt fa-2x\"></i><i class=\"eliminar fa fa-times-circle fa-2x\"></i></td>\r\n					</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<i id=\"añadir\" class=\"fa fa-plus-circle fa-2x\"></i>\r\n<div class='grid'>\r\n	<table class=\"ui celled striped table\">\r\n		<thead class='titulos'>\r\n		<tr>\r\n			<th>Nombres</th>\r\n			<th>Ciudad</th>\r\n			<th>Sexo</th>\r\n			<th>Teléfonos</th>\r\n			<th>Fecha de nacimiento</th>\r\n			<th colspan='2'></th>\r\n		</tr>\r\n		</thead>\r\n		<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</tbody>\r\n	</table>\r\n</div>";
},"useData":true});
})();