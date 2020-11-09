// Global Variables
var x = 0;
var canvas = document.getElementById(`Basket`);
var ball = new Ball(200, 150, 15);
var bounds = canvas.getBoundingClientRect();


/*
 * Evento con el mouse
 */

// canvas.onmousemove = (e) => {
//     window.requestAnimationFrame(mouse);
// }

// function mouse(e) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     console.log(`X: ${e.clientX} Y:${e.clientY} Canvas: ${canvas.getBoundingClientRect().y}`);
//     ball.x = e.clientX - bounds.left;
//     ball.y = e.clientY - bounds.top;
//     ball.aceleracion(e.clientX - bounds.left, e.clientY - bounds.top);
//     ball.show();
// }

/*
 * Pruebas con un segundo balon
 */

// var ball2 = new Ball(30, 50, 15);

window.requestAnimationFrame(draw);
var ctx = document.getElementById(`Basket`).getContext(`2d`);
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
    
    // Ball 2
    // ctx.save();
    // ball2.show();
    // ball2.actualizar();
    // ctx.restore();
    window.requestAnimationFrame(draw);
}
