// Variables Globales
var x = 0;
var canvas = document.getElementById(`Basket`);
var bounds = canvas.getBoundingClientRect();
var escenario = new Escenario();
var ctx = canvas.getContext(`2d`);
var i = 0;
var frame = 0;
var balon;
var bounce = new Audio(`./resources/bounce.wav`);
var soundEnces = new Audio(`./resources/encesta.wav`);
var fail = new Audio(`./resources/fail.wav`);

canvas.width = 1200;
canvas.height = 550;

canvas.addEventListener(`mousedown`, click);
canvas.addEventListener(`mousemove`, arrastrar);
canvas.addEventListener(`mouseup`, levantar);
canvas.addEventListener(`mouseleave`, levantar);

escenario.cargarEscenario();

/*
 * Evento con el mouse, 3 funciones para simular que se esta arrastrando
 * una pelota
 */

var arrastrando = false;
var encesta = false;
var tocaSuelo = false;
var fallo = false;

// Funcion al clickear

function click(e) {
    encesta = false;
    fallo = false;
    balon = new Ball(20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    balon.x = e.clientX - bounds.left;
    balon.y = e.clientY - bounds.top;
    arrastrando = true;
    balon.show();
}

// Funcion al arrastrar

function arrastrar(e) {
    if (arrastrando) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        balon.x = e.clientX - bounds.left;
        balon.y = e.clientY - bounds.top;

        escenario.cargarEscenario();

        ctx.moveTo(balon.x, balon.y);
        ctx.lineTo(balon.x + balon.vx * 3, balon.y + balon.vy * 3);
        ctx.stroke();
        balon.aplicarVelocidad();
        balon.verificarArea(areaProhibida);

        balon.show();
    }
}

// Funcion al levantar

function levantar() {
    if (arrastrando) {
        canvas.removeEventListener(`mousedown`, click);
        canvas.removeEventListener(`mousemove`, arrastrar);
        canvas.removeEventListener(`mouseup`, levantar);
        canvas.removeEventListener(`mouseleave`, levantar);
        arrastrando = false;
        window.requestAnimationFrame(draw);
    }

}

var tablero = new Estructura((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);
var tabTop = new Estructura((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 0);
var tabBot = new Estructura((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 113, 15, 0);
var aro = new Estructura((canvas.width / 2) + 419, (canvas.height / 2) - 145, 60, 1);
var areaProhibida = new Estructura((canvas.width / 2), 0, canvas.width, canvas.height);

// Animacion
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    frame++;
    ctx.save();
    balon.show();
    balon.actualizar();
    verificacionEstructuras();
    console.error();
    ctx.restore();



    if (!encesta) {

        // Tiempo para que se reestablesca la pelota si el usuario no ha encestado
        if (frame == 150) {
            frame = 0;
            i = 0;
            escenario.cargarEscenario();
            fallo = true;
            encesta = true;
            fail.play();
        }
        window.requestAnimationFrame(draw);
    } else {
        escenario.cargarEscenario();
        if (fallo) {
            falloText();
        }
        canvas.addEventListener(`mousedown`, click);
        canvas.addEventListener(`mousemove`, arrastrar);
        canvas.addEventListener(`mouseup`, levantar);
        canvas.addEventListener(`mouseleave`, levantar);
        window.cancelAnimationFrame(draw);
    }
}

function aumentarPuntaje(dAro) {
    if (balon.x + balon.rad >= dAro.x && balon.x - balon.rad + 5 <= dAro.x + dAro.width && balon.y >= dAro.y && (balon.y - balon.rad + 5) <= (dAro.y + dAro.height)) {
        if (balon.vy > 2 && !encesta) {
            frame = 0;
            i++;
            encesta = true;
            soundEnces.play();
        }
    }
}

function falloText() {
    ctx.font = `30px Poppins`;
    ctx.beginPath();
    ctx.strokeStyle = `blue`;
    ctx.lineWidth = `2px`;
    ctx.fillText(`Haz Fallado. Intente de Nuevo`, canvas.width / 2 - 230, 70);
    ctx.closePath();
}

function verificacionEstructuras() {
    balon.verificarEstrucX(tablero);
    balon.verificarEstrucY(tabTop);
    balon.verificarEstrucY(tabBot);
    balon.bordes(encesta);
    aumentarPuntaje(aro);
}
