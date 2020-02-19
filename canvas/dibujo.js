var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var line_r = 40, line_l = 40; //Cantidad de lineas a dibujar en el ciclo while
var xi, yi, xi, xf;//Coordenadas que van a variar en los ciclos
var color1 = "#6C3483", color2 = "#FF5733";//Color1 --> while1, color2 --> while2

//funcion para dibujar una linea con coordenadas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea(color1, 1, 0, 400, 1); //linea superior
dibujarLinea(color1, 399, 0, 399, 400);//linea derecha
dibujarLinea(color2, 399, 400, 1, 400);//linea inferior
dibujarLinea(color2, 1, 400, 1, 0);//linea izquierda

//ciclo while  sirve para dibujar barias lineas siguiendo el patron de la funcion que le estoy dando
//while de la derecha (morado)
for (l=0; l < line_r; ++l) 
{
    xi = l * 10;
    yf = 10 * (l + 1);
    dibujarLinea(color1, xi, 0, 400, yf);
    console.log("Linea derecha #" + l + ":\n dibujarLinea("+color1+"," + xi + ",0,400," + yf + ");");
    
}
//while de la izquierda (Anaranjado)
for (i=0; i < line_l; ++i) {
    yi = 10 * i;
    xf = 10 * (i + 1);
    dibujarLinea(color2, 0, yi, xf, 400);
    console.log("Linea izquierda #" + i + ":\ndibujarLinea("+color2+",0," + yi + "," + xf + ",400);");
    
}
