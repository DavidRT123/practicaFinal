(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tabla'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "			<tr>\r\n				<td>"
    + alias2(alias1((depth0 != null ? depth0.nombres : depth0), depth0))
    + "</td>\r\n				<td>"
    + alias2(alias1((depth0 != null ? depth0.ciudad : depth0), depth0))
    + "</td>\r\n				<td>"
    + alias2(alias1((depth0 != null ? depth0.sexo : depth0), depth0))
    + "</td>\r\n				<td>"
    + alias2(alias1((depth0 != null ? depth0.telefono : depth0), depth0))
    + "</td>\r\n				<td>"
    + alias2((helpers.convertirFecha || (depth0 && depth0.convertirFecha) || alias4).call(alias3,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"convertirFecha","hash":{},"data":data}))
    + "</td>\r\n				<td id=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><i class=\"modificar fa fa-pencil-alt fa-2x\"></i></td>\r\n				<td id=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><i class=\"eliminar fa fa-times-circle fa-2x\"></i></td>\r\n			</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<i id=\"añadir\" class=\"fa fa-plus-circle fa-2x\"></i>\r\n<table class=\"table table resposive\">\r\n	<thead>\r\n	<tr>\r\n		<td>Nombres</td>\r\n		<td>Ciudad</td>\r\n		<td>Sexo</td>\r\n		<td>Teléfonos</td>\r\n		<td>Fecha de nacimiento</td>\r\n		<td></td>\r\n		<td></td>\r\n	</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n</table>";
},"useData":true});
})();