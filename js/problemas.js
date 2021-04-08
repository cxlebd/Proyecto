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
    document.formulario.meses.value="";    
}

/*
    Problema 2
*/
function comision(){
    var base = parseInt(document.problema2.sueldo_base.value);
    var comision = base*10;
    var resultado = base + (comision * 3);

    document.problema2.resultado2.value = "$" + resultado;
}

function borrar2(){
    document.problema2.sueldo_base.value = "";
    document.problema2.resultado2.value = "$";
}

/*
    Problema 3
*/
function descuento(){
    var precio = parseInt(document.problema3.precio.value);
    var descuento = precio * .15;
    var resultado =  precio - descuento;

    document.problema3.resultado3.value = "$" + resultado;
}

function borrar3(){
    document.problema3.resultado3.value = "$";
    document.problema3.precio.value = "";
}

/*
    Problema 4
*/
function calificaciones(){
    var cal1 = parseInt(document.problema4.cal1.value);
    var cal2 = parseInt(document.problema4.cal2.value);
    var cal3 = parseInt(document.problema4.cal3.value);
    var examen = parseInt(document.problema4.examen.value);
    var trabajo = parseInt(document.problema4.trabajo.value);    

    var sumaCalif = cal1 + cal2 + cal3;
    var porcentajeCalif = sumaCalif * 55 / 30;
    var porcentajeExamen = examen * 30 / 10;
    var porcentajeTrabajo = trabajo * 15 / 10;
    var promedio = porcentajeCalif + porcentajeExamen + porcentajeTrabajo;
    
    if (cal1 > 10 || cal2 > 10 || cal3 > 10 || examen > 10 || trabajo > 10){
        alert("La calificación máxima es 10.");        
        return borrar4();
    }

    document.problema4.resultado4.value = "%" + promedio;
}

function borrar4(){

    document.problema4.cal1.value = "";
    document.problema4.cal2.value = "";
    document.problema4.cal3.value = "";
    document.problema4.examen.value = "";
    document.problema4.trabajo.value = "";
    document.problema4.resultado4.value = "%";
}

/*
    Problema 5
*/

function sexo(){
    var hombres = parseInt(document.problema5.hombres.value);
    var mujeres = parseInt(document.problema5.mujeres.value);
    var suma = mujeres + hombres;

    var porcentajeHombres = hombres * 100 / suma;
    var porcentajeMujeres = mujeres * 100 / suma;

    document.problema5.resultadoMujeres.value = "Mujeres: %" + parseInt(porcentajeMujeres);
    document.problema5.resultadoHombres.value = "Hombres: %" + parseInt(porcentajeHombres);
}

function borrar5(){
    document.problema5.hombres.value = "";
    document.problema5.mujeres.value = "";
    document.problema5.resultadoHombres.value = "";
    document.problema5.resultadoMujeres.value = "";
}

/*
    Problema 6
*/
function fecha(){
    var fecha = new Date();

    var dia = fecha.getDate;
    var mes = fecha.getMonth;
    var año = fecha.getFullYear;
}

function validarFecha(e){
    
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    
    var patron = /\d+-\d{2}-\d{4}/g;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

/*
    Problema 7
*/

function numeros7(){
    var num1 = parseInt(document.problema7.numero1.value);
    var num2 = parseInt(document.problema7.numero2.value);

    if (num1 == num2){
       var resultado = num1 * num2;
       document.problema7.resultado7.value = "Se multiplican: " + resultado; 
    }   else{
        if (num1 > num2){
            var resultado = num1 - num2;
            document.problema7.resultado7.value = "Se resta: " + resultado; 
        }   else{
            var resultado = num1 + num2;
            document.problema7.resultado7.value = "Se suma: " + resultado; 
        }
    }
}

/*
    Problema 8
*/

function numeros8(){
    var num1 = parseInt(document.problema8.numero1.value);
    var num2 = parseInt(document.problema8.numero2.value);
    var num3 = parseInt(document.problema8.numero3.value);

    if (num1 > num2 && num1 > num3){
        var resultado = num1;
        document.problema8.resultado.value = "Número 1: " + resultado;
    }   else{
        if (num2 > num1 && num2 > num3){
            var resultado = num2;
            document.problema8.resultado.value = "Número 2: " + resultado;
        }   else{
            var resultado = num3;
            document.problema8.resultado.value = "Número 3: " + resultado;
        }
    }
}
