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
            fechaAlta: objeto.fechaAlta
        };
    }

    return {
        createCliente: createCliente
    };
})();