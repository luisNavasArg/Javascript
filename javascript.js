//Variables globales
var canvas;
var jugador;
var posx;
var posy;
var fondo = new Image();
var IniJugador = new Image();
var puntos =0;
function comenzarJuego(){
  //capturo el elemento canvas por medio de su id
canvas = document.getElementById('canvas');
//le asigno con la funcion que es contenido 2d
ctx = canvas.getContext("2d");
//le asigno color con el estilo azul
ctx.fillStyle = "blue";
//dibujo un rectangulo en la posición x en 0 y en 0
//con un ancho de 1024 pixeles, alto 572  pixeles
ctx.rect(0, 0, 1024, 572);
//relleno el rectangulo
ctx.fill();
fondo = ctx.getImageData(0, 0, 1024, 572);
//fondo.fill();

for (var i = 0; i < 50; i++) {
  imprimeEnemigos();
}

}
function abajo(){
var posiciony=document.getElementById("canvas").offsetTop;
var abajo = document.getElementById("canvas").style.top=posiciony + 20+"px";
moverYa();
}
function crearJugador(){
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.rect(0, 0, 20, 20);
  ctx.fill();
  ctx.closePath();
  setTimeout("mueveReloj()",100);
}
function mueveReloj(){
  //  momentoActual = new Date()
    //hora = momentoActual.getHours()
    //minuto = momentoActual.getMinutes()
    //segundo = momentoActual.getSeconds()

    //horaImprimible = hora + " : " + minuto + " : " + segundo

    //document.form_reloj.reloj.value = horaImprimible
    moverjugador();
    setTimeout("mueveReloj()",200);
}
var posicionX=350;
var posicionX2=450;
var posY = 250;
var posY2 = 30;
var movx=5;
var movy=3;
function moverjugador(){

   // Math.floor(Math.random() * 299);
  //comenzarJuego();
    if(posicionX >= 1004 || posicionX <=20)
      movx=movx*-1;
    if(posY >= 552 || posY <= 20)
    movy=movy*-1;
    posicionX=posicionX+movx;
    posicionX2=posicionX2+movx;
    posY=posY+movy;
    posY2=posY2+movy;
 if (posY == posicionX) {
   puntos=puntos+posY;
   var boton=document.getElementById('muestra');
   boton.value=puntos;
   boton.style.background="red";
   boton.style.color="black";
 }
      ctx.beginPath();
      ctx.clearRect(0,0,1024,572);
      ctx.fillStyle = "black";
      ctx.rect(posicionX, posY, 20, 20);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.rect(posY, posicionX, 20, 20);
      ctx.fill();
      ctx.closePath();
      //for (var i = 0; i < 5; i++) {
        imprimeEnemigos();
      //}




  /*
      ctx.clearRect(0,0,700,500);
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.rect(posicionX, posY, 20, 20);
      ctx.fill();
      ctx.closePath();
    */



}

function imprimeEnemigos(){
var x = Math.floor(Math.random() * 1024);
var y = Math.floor(Math.random() * 572);
var colorR = Math.floor(Math.random() * 256);
var colorG = Math.floor(Math.random() * 256);
var colorB = Math.floor(Math.random() * 256);
  //defino el color
  ctx.fillStyle = "rgb("+colorR+","+colorG+","+colorB+")";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fill();
ctx.closePath();

}

function moverYa() {

  ctx.beginPath();
  ctx.moveTo(28.4, 16.9);
  ctx.bezierCurveTo(28.4, 19.7, 22.9, 22.0, 16.0, 22.0);
  ctx.bezierCurveTo(9.1, 22.0, 3.6, 19.7, 3.6, 16.9);
  ctx.bezierCurveTo(3.6, 14.1, 9.1, 11.8, 16.0, 11.8);
  ctx.bezierCurveTo(22.9, 11.8, 28.4, 14.1, 28.4, 16.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(222, 103, 0)";
  ctx.fill();

  // Draw saucer top.
  ctx.beginPath();
  ctx.moveTo(22.3, 12.0);
  ctx.bezierCurveTo(22.3, 13.3, 19.4, 14.3, 15.9, 14.3);
  ctx.bezierCurveTo(12.4, 14.3, 9.6, 13.3, 9.6, 12.0);
  ctx.bezierCurveTo(9.6, 10.8, 12.4, 9.7, 15.9, 9.7);
  ctx.bezierCurveTo(19.4, 9.7, 22.3, 10.8, 22.3, 12.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(51, 190, 0)";
  ctx.fill();

  // Save ship data.
  ship = ctx.getImageData(0, 0, 30, 30);

  // Erase it for now.
  ctx.putImageData(oldBack, 0, 0);

}
/*
var uno = Math.floor(Math.random() * 256);
var dos = Math.floor(Math.random() * 256);
var tres = Math.floor(Math.random() * 256);
fill(uno, dos, tres);
ctx.arc(x, y, 3, 0, Math.PI * 2, true);
*/
