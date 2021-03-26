function validar1(formulario){
    /*
    Validar que solo se introduscan numeros
    */
    var checkOK = "1234567890";
    var checkStr = problema1.capital.value;
    var allvalid = true;
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe números.")
        problema.capital.focus();
        return false;
    }
    /*
    Algoritmo
    */
   capital = checkStr *1.2;
   alert("Tu capital será: " + capital);
}
function validar2(formulario){
    /*
    Validar que solo se introduscan numeros
    */
    var checkOK = "1234567890";
    var checkStr = problema1.capital.value;
    var allvalid = true;
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe números.")
        problema.capital.focus();
        return false;
    }
    /*
    Algoritmo
    */
   sueldoBase = parseInt(document.getElementById('problema2').value);   
   comisiones = sueldoBase * .30;
   sueldoFinal = comisiones + sueldoBase;
   alert("Obtendrá: $" + sueldoFinal)   
}