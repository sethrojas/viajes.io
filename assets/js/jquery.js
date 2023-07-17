$(document).ready(function () {

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $("#enviar").click(function () {
        alert("El correo fue enviado exitosamente, nos pondremos en contacto pronto...");
    });
    $('#plane').popover({ content: "Blog de viajes por Chile: una recopilación de destinos y lugares que ver en Chile a partir de los meses que pasé viajando por el país y el tiempo.", placement: "top", trigger: "hover" });
    $('#montaña').popover({ content: "Chile es mi debilidad y uno de los países más fascinantes de norte a sur, del desierto a los hielos del sur.", placement: "bottom", trigger: "hover" });
    $('#ruta').popover({ content: "Hablar de si es o no seguro viajar a Sudamérica es, literalmente, meter el pie en el barro. ¿Por qué? Porque decir Sudamérica.", placement: "top", trigger: "hover" });
});
