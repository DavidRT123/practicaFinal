(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clientePlantilla'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form>\r\n	<input type=\"hidden\" data-id=\""
    + alias4(((helper = (helper = helpers.idA || (depth0 != null ? depth0.idA : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idA","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"form-group row\">\r\n		<label for=\"nombre\" class=\"col-5\">Nombres</label>\r\n		<input id=\"nombre\" class=\"form-control col-6\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "\">	\r\n	</div>\r\n	<div class=\"form-group row\">\r\n		<label for=\"ciudad\" class=\"col-5\">Ciudad</label>\r\n		<input id=\"ciudad\" class=\"form-control col-6\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "\">\r\n	</div>\r\n	<div class=\"form-group row\">\r\n		<label class=\"d-flex col-sm-5\">Sexo</label>\r\n		<div class=\"form-check d-flex justify-content-center justify-content-sm-start col-sm-3\">\r\n		<label for=\"masculino\" class=\"form-check-label\"><input name=\"sexo\" class=\"form-check-input\" type=\"radio\" id=\"m\" value=\"M\" "
    + alias4((helpers.convertirSexo || (depth0 && depth0.convertirSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"M",{"name":"convertirSexo","hash":{},"data":data}))
    + ">Masculino</label>\r\n	</div>\r\n	<div class=\"form-check d-flex justify-content-center justify-content-sm-start col-sm-3\">\r\n		<label for=\"femenino\" class=\"form-check-label\"><input name=\"sexo\" class=\"form-check-input\" type=\"radio\" id=\"f\" value=\"F\" "
    + alias4((helpers.convertirSexo || (depth0 && depth0.convertirSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"F",{"name":"convertirSexo","hash":{},"data":data}))
    + ">Femenino</label>	\r\n	</div>\r\n	</div>\r\n	<div class=\"form-group row\">\r\n		<label for=\"telefono\" class=\"col-5\">Teléfono</label>\r\n		<input id=\"telefono\" class=\"form-control col-6\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "\">\r\n	</div>\r\n	<div class=\"form-group row\">\r\n		<label for=\"fechaNacimiento\" class=\"col-5\">Fecha de nacimiento</label>\r\n		<input id=\"fechaNacimiento\" class=\"form-control col-6\" type=\"text\" value=\""
    + alias4((helpers.convertirFecha || (depth0 && depth0.convertirFecha) || alias2).call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"convertirFecha","hash":{},"data":data}))
    + "\">\r\n	</div>\r\n</form>";
},"useData":true});
})();