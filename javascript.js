function comenzarJuego(){
  //capturo el elemento canvas por medio de su id
var canvas = document.getElementById('canvas');
//le asigno con la funcion que es contenido 2d
ctx = canvas.getContext("2d");
//le asigno color con el estilo azul
//ctx.fillStyle = "blue";
var grd = ctx.createRadialGradient(75,50,500,90,60,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"yellow");

// Fill with gradient
ctx.fillStyle = grd;
//dibujo un rectangulo en la posición x en 0 y en 0
//con un ancho de 1024 pixeles, alto 572  pixeles
ctx.rect(0, 0, 1024, 572);
//relleno el rectangulo
ctx.fill();
  imprimeEnemigos();
}

function crearJugador(){
  //capturo el elemento canvas por medio de su id
  var canvas2 = document.getElementById('canvas2');
  //le asigno con la funcion que es contenido 2d
  ctx2 = canvas2.getContext("2d");
  //le asigno color con el estilo azul
  ctx2.fillStyle = "green";
  ctx2.beginPath();
  ctx2.rect(0, 0, 20, 20);
  ctx2.fill();
  ctx2.closePath();
  mueveReloj();

}
function mueveReloj(){
    moverjugador();
    comenzarJuego();
    setTimeout("mueveReloj()",10);
}
var posicionX=350;
var posicionX2=450;
var posY = 250;
var posY2 = 30;
var movx=5;
var movy=3;
var puntos=0;
function moverjugador(){
    if(posicionX >= 1004 || posicionX <=20)
      movx=movx*-1;
          if(posY >= 552 || posY <= 20)
    movy=movy*-1;
    posicionX=posicionX+movx;
    posicionX2=posicionX2+movx;
    posY=posY+movy;
    posY2=posY2+movy;
 if (posY == posicionX) {
   puntos=puntos+posY*2;
   var boton=document.getElementById('muestra');
   boton.style.background="red";
   boton.style.color="black";
   boton.value=puntos;
   posY=posY+movy;
   posY2=posY2+movy;
 }
      ctx2.beginPath();
      ctx2.clearRect(0,0,1024,572);
      ctx2.fillStyle = "black";
      ctx2.rect(posicionX, posY, 20, 20);
      ctx2.fill();
      ctx2.closePath();
      ctx2.beginPath();
      ctx2.fillStyle = "yellow";
      ctx2.rect(posY, posicionX, 20, 20);
      ctx2.fill();
      ctx2.closePath();
        imprimeEnemigos();
}

function imprimeEnemigos(){
//  for (var i = 0; i < 1; i++) {
var x = Math.floor(Math.random() * 1024);
var y = Math.floor(Math.random() * 572);
//var colorR = Math.floor(Math.random() * 256);
//var colorG = Math.floor(Math.random() * 256);
//var colorB = Math.floor(Math.random() * 256);
  //defino el color
  //ctx.fillStyle = "rgb("+colorR+","+colorG+","+colorB+")";
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fill();
ctx.closePath();
//}
}
