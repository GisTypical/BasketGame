// Variables Globales
var x = 0;
var canvas = document.getElementById(`Basket`);
var bounds = canvas.getBoundingClientRect();
var escenario = new Escenario();
var ctx = canvas.getContext(`2d`);
var i = 0;
var puntos = 0;
var balones = [];

canvas.width = 1200;
canvas.height = 550;

canvas.addEventListener(`mousedown`, click);
canvas.addEventListener(`mousemove`, arrastrar);
canvas.addEventListener(`mouseup`, levantar);
canvas.addEventListener(`mouseleave`, levantar);

escenario.cargarEscenario();

/*
 * Evento con el mouse
 */

var arrastrando = false;
var encesta = false;
var tocaSuelo = false;

function click(e) {
    encesta = false;
    balones.push(new Ball(20));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    balones[i].x = e.clientX - bounds.left;
    balones[i].y = e.clientY - bounds.top;
    arrastrando = true;
    balones[i].show();
}

function arrastrar(e) {
    if (arrastrando) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        balones[i].x = e.clientX - bounds.left;
        balones[i].y = e.clientY - bounds.top;

        escenario.cargarEscenario();

        ctx.moveTo(balones[i].x, balones[i].y);
        ctx.lineTo(balones[i].x + balones[i].vx * 3, balones[i].y + balones[i].vy * 3);
        ctx.stroke();
        balones[i].aplicarVelocidad();

        balones[i].show();
    }
}

function levantar() {
    if (arrastrando == true) {
        arrastrando = false;
        canvas.removeEventListener(`mousedown`, click);
        canvas.removeEventListener(`mousemove`, arrastrar);
        canvas.removeEventListener(`mouseup`, levantar);
        canvas.removeEventListener(`mouseleave`, levantar);
        window.requestAnimationFrame(draw);
    }

}

var tablero = new Estructura((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);
var aro = new Estructura((canvas.width / 2) + 413, (canvas.height / 2) - 145, 68, 1);


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.save();
    console.log(`VX: ${Math.round(balones[i].vx)}  VY: ${Math.round(balones[i].vy)}`);
    balones[i].show();
    balones[i].actualizar();
    verificacionEstructuras();
    ctx.restore();

    if (encesta === false) {
        window.requestAnimationFrame(draw);
    } else {
        escenario.cargarEscenario();
        ctx.font = `30px monospace`;
        ctx.beginPath();
        ctx.strokeStyle = `blue`;
        ctx.lineWidth = `2px`;
        ctx.fillText(`Puntuacion: ${i}`, canvas.width/2, 40);
        ctx.stroke();
        ctx.closePath();
        canvas.addEventListener(`mousedown`, click);
        canvas.addEventListener(`mousemove`, arrastrar);
        canvas.addEventListener(`mouseup`, levantar);
        canvas.addEventListener(`mouseleave`, levantar);
    }
}

function aumentarPuntaje(dAro) {
    if (balones[i].x + balones[i].rad >= dAro.x && balones[i].x - balones[i].rad <= dAro.x + dAro.width && balones[i].y >= dAro.y && (balones[i].y - balones[i].rad) <= (dAro.y + dAro.height)) {
        if (encesta === false) {
            if (balones[i].vy > 0) {
                console.log(++i);
                encesta = true;
            }
        }
    }
}
function verificacionEstructuras() {
    balones[i].verificarEstruc(tablero);
    balones[i].bordes(encesta);
    aumentarPuntaje(aro);
}
