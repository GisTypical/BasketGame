// Variables Globales

var x = 0;
var canvas = document.getElementById(`Basket`);
var ball = new Ball(200, 10, 15);
var bounds = canvas.getBoundingClientRect();
var ctx = document.getElementById(`Basket`).getContext(`2d`);

/*
 * Evento con el mouse
 */

var arrastrando = false;
function click(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ball.x = e.clientX - bounds.left;
    ball.y = e.clientY - bounds.top;
    arrastrando = true;
    ball.show();
}

function arrastrar(e) {
    if (arrastrando) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        console.log(`X: ${e.clientX} Y:${e.clientY} VX: ${ball.vx} VY: ${ball.vy}`);
        ball.x = e.clientX - bounds.left;
        ball.y = e.clientY - bounds.top;
        ball.aplicarVelocidad();
        ball.show();
    }
}

function levantar(e) {
    arrastrando = false;
    canvas.removeEventListener(`mousedown`, click);
    canvas.removeEventListener(`mousemove`, arrastrar);
    canvas.removeEventListener(`mouseup`, levantar);
    window.requestAnimationFrame(draw);
}

canvas.addEventListener(`mousedown`, click);
canvas.addEventListener(`mousemove`, arrastrar);
canvas.addEventListener(`mouseup`, levantar);

// window.requestAnimationFrame(draw);
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Ball 1
    ctx.save();
    ball.show();
    ball.actualizar();
    ball.bordes();
    ctx.restore();
    console.log(`BallX: ${Math.round(ball.x)} BallY: ${Math.round(ball.y)} BallVX: ${ball.vx.toFixed(2)} BallVY: ${ball.vy.toFixed(2)}`);

    window.requestAnimationFrame(draw);
}
