/*
vamos a crear una funcion que se encargue de validar
la entrada de los numeros apartir de la identificacion
del codigo del evento de la tecla
*/
function validarn(e){
    
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

/*
    Problema 1
*/

function interes(){
    var valor = document.formulario.cantidad.value;
    var meses = document.formulario.meses.value;
    var resultado = parseInt(valor);
    var resultadoMeses = parseInt(meses);

    var interes = resultado*0.02*resultadoMeses;
    var total = resultado + interes;

    document.formulario.sueldoti.value="$"+total;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}

/*
    Problema 2
*/

