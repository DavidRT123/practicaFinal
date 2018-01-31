factory = (function(){

    var createCliente = function(objeto){
        return {
            id: objeto.id,
            nombres: objeto.nombres,
            ciudad: objeto.ciudad,
            sexo: objeto.sexo,
            telefono: objeto.telefono,
            fechaNacimiento: objeto.fechaNacimiento,
            direccion: objeto.direccion,
            provincia: objeto.provincia,
            fechaAlta: "1980-10-01 00:00:00"
        };
    }

    return {
        createCliente: createCliente
    };
})();