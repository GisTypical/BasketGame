// Variables Globales
var x = 0;
var canvas = document.getElementById(`Basket`);
var bounds = canvas.getBoundingClientRect();
var escenario = new Escenario();
var ball = new Ball(25);
var ctx = canvas.getContext(`2d`);
canvas.width = 1200;
canvas.height = 550;


escenario.cargarEscenario();

/*
 * Evento con el mouse
 */

var arrastrando = false;

function click() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();    
    ball.x = ubicacionAleatoria(75, 450);
    ball.y = ubicacionAleatoria(50, 370);
    arrastrando = true;
    ball.show();
}

function arrastrar(e) {
    if (arrastrando) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ball.x0 = e.clientX - bounds.left;
        ball.y0 = e.clientY - bounds.top;
        ball.aplicarVelocidad();
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(ball.x + ball.vx * 3, ball.y + ball.vy * 3);
        ctx.stroke();
        ball.show();
    }
}

function levantar() {
    arrastrando = false;
    canvas.removeEventListener(`mousedown`, click);
    canvas.removeEventListener(`mousemove`, arrastrar);
    canvas.removeEventListener(`mouseup`, levantar);
    window.requestAnimationFrame(draw);
}

canvas.addEventListener(`mousedown`, click);
canvas.addEventListener(`mousemove`, arrastrar);
canvas.addEventListener(`mouseup`, levantar);


var a = new Estructura((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);

// window.requestAnimationFrame(draw);
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Ball 1
    ctx.save();
    ball.show();
    ball.actualizar();
    ball.bordes();
    a.crearEstructura();
    ball.verificarEstruc(a);
    ctx.restore();
    
    window.requestAnimationFrame(draw);
}

function ubicacionAleatoria(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}