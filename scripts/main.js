// Variables Globales

var x = 0;
var canvas = document.getElementById(`Basket`);
var ball = new Ball(200, 10, 15);
var ctx = document.getElementById(`Basket`).getContext(`2d`);

/*
 * Evento con el mouse
 */

var arrastrando = false;
function click(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ball.x = e.clientX - canvas.offsetLeft;
    ball.y = e.clientY - canvas.offsetTop;
    arrastrando = true;
    ball.show();
}

function arrastrar(e) {
    if (arrastrando) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ball.x0 = e.clientX - canvas.offsetLeft;
        ball.y0 = e.clientY - canvas.offsetTop;
        console.log(`X: ${ball.x} Y:${ball.y} X0: ${ball.x0} Y0: ${ball.y0} VX: ${ball.vx} VY: ${ball.vy}`);
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(ball.x + ball.vx * 3, ball.y + ball.vy * 3);
        ctx.stroke();
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
