(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clientePlantilla'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"ui form\">\r\n	<input type=\"hidden\" data-id=\""
    + alias4(((helper = (helper = helpers.idA || (depth0 != null ? depth0.idA : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idA","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"field\">\r\n		<label for=\"nombre\">Nombres</label>\r\n		<input id=\"nombre\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "\">	\r\n	</div>\r\n	<div class=\"field\">\r\n		<label for=\"ciudad\">Ciudad</label>\r\n		<input id=\"ciudad\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "\">\r\n	</div>\r\n	<div class=\"field\">\r\n		<label>Sexo</label>\r\n		<div class=\"inline fields\">\r\n			<div class=\"field\">\r\n				<div class=\"ui radio checkbox\">\r\n					<input name=\"sexo\" type=\"radio\" id=\"m\" value=\"M\" "
    + alias4((helpers.convertirSexo || (depth0 && depth0.convertirSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"M",{"name":"convertirSexo","hash":{},"data":data}))
    + ">\r\n					<label for=\"masculino\">Masculino</label>\r\n				</div>\r\n			</div>\r\n			<div class=\"field\">\r\n				<div class=\"ui radio checkbox\">\r\n					<input name=\"sexo\" type=\"radio\" id=\"f\" value=\"F\" "
    + alias4((helpers.convertirSexo || (depth0 && depth0.convertirSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"F",{"name":"convertirSexo","hash":{},"data":data}))
    + ">\r\n					<label for=\"femenino\">Femenino</label>\r\n				</div>	\r\n			</div>	\r\n		</div>\r\n	</div>\r\n	<div class=\"field\">\r\n		<label for=\"telefono\">Teléfono</label>\r\n		<input id=\"telefono\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "\">\r\n	</div>\r\n	<div class=\"field\">\r\n		<label for=\"fechaNacimiento\">Fecha de nacimiento</label>\r\n		<input id=\"fechaNacimiento\" type=\"text\" value=\""
    + alias4((helpers.convertirFecha || (depth0 && depth0.convertirFecha) || alias2).call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"convertirFecha","hash":{},"data":data}))
    + "\">\r\n	</div>\r\n</form>";
},"useData":true});
})();