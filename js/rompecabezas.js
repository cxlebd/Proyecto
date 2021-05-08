//Obtener los tipos de piezas

var piezas = document.getElementsByClassName('movil');

//Vamos a necesitar variables de ancho y largo para redimensionar las imagenes

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];

var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

for(var i = 0; < piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+10));
    piezas[i].setAttribute("y", Math.floor((Math.random()*409)+10));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");

}

var elementoSeleccionar = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPoY = 0;

function seleccionarElemento(evt){
    //saber la pieza
    elementoSeleccionar = reordenar(evt);

    currentX = evt.clientX;
    currentY = evt.clientY;

    currentPosX = parseFLoat(elementoSeleccionado.getAttribute("x"));
    currentPosY = parseFLoat(elementoSeleccionado.getAttribute("y"));

    elementoSeleccionado.setAttribute("onmousemove", "moverElemento(evt)")
}

function moverElemento(evt){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;

    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;

    elementoSeleccionad.setAttribute("x")
}, 