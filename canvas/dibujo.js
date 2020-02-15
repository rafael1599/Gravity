var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink",10,390,10,10);
dibujarLinea("pink",10,10,390,10);
dibujarLinea("pink",10,390,390,390);
dibujarLinea("pink",390,390,390,10);

dibujarLinea("green ",210,10,10,200);
dibujarLinea("blue",10,200,390,200);
dibujarLinea("yellow",210,10,390,200);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}