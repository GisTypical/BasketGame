// Starting variables
var canvas = document.getElementById(`Basket`);
var ctx = canvas.getContext(`2d`);

// Loading background and points
canvas.width = 1200;
canvas.height = 520;
var score = 0;
var record = Number(localStorage.getItem("record"));
var background = new FieldElements();


// Update canvas offsets when resize
var bounds = canvas.getBoundingClientRect();
var offsetX, offsetY;
offsetX = bounds.left;
offsetY = bounds.top;
function reOffset() {
    bounds = canvas.getBoundingClientRect();
    offsetX = bounds.left;
    offsetY = bounds.top;
}
window.onscroll = function (e) { reOffset(); }
window.onresize = function (e) { reOffset(); }

/**
 * Mouse functions, simulating drag-n-drop
 */

let startGame = () => {
    background.showBackground();
    loadEvents();
}

let loadEvents = () => {
    canvas.addEventListener(`mousedown`, click);
    canvas.addEventListener(`mousemove`, drag);
    canvas.addEventListener(`mouseup`, drop);
    canvas.addEventListener(`mouseleave`, drop);
}

var ball, action, dragging;
function click(e) {
    dragging = true;
    action = 0;
    ball = new Ball();
    ctx.beginPath();
    ball.x = e.pageX - offsetX;
    ball.y = e.pageY - offsetY;
    ball.afterLine();
    ball.show();
}

function drag(e) {
    if (dragging) {
        ball.x = e.clientX - bounds.left;
        ball.y = e.clientY - bounds.top;
        ball.applyV();
        ball.afterLine();
        ball.show();
    }
}

let throwTime;
function drop() {
    if (dragging) {
        dragging = false;
        // 2 seconds to make a point
        throwTime = setTimeout(() => {
            action = 2;
        }, 2000);
        canvas.removeEventListener(`mousedown`, click);
        canvas.removeEventListener(`mousemove`, drag);
        canvas.removeEventListener(`mouseup`, drop);
        canvas.removeEventListener(`mouseleave`, drop);
        window.requestAnimationFrame(draw);
    }
}

// Animation
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.showBackground();
    ctx.beginPath();
    ctx.save();
    ball.show();
    verifyStruct();
    ctx.restore();
    switch (action) {
        case 1:
            // Score
            background.showBackground();
            loadEvents();
            window.cancelAnimationFrame(draw);
            window.clearTimeout(throwTime);
            break;
        case 2:
            // Fail
            failFunc();
            loadEvents();
            window.cancelAnimationFrame(draw);
            break;
        default:
            window.requestAnimationFrame(draw);
            break;
    }
}

// Colliding structures
var board = new Structure((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);
var boardTop = new Structure((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 0);
var boardBot = new Structure((ctx.canvas.width / 2) + 486, (ctx.canvas.height / 2) - 113, 12, 0);
var ring = new Structure((canvas.width / 2) + 415, (canvas.height / 2) - 150, 65, 2);

function verifyStruct() {
    ball.collisionStructX(board);
    ball.collisionStructY(boardTop);
    ball.collisionStructY(boardBot);
    ball.borderColl();
    pointFunc();
}

var bounce = new Audio(`./resources/bounce.wav`);
var point = new Audio(`./resources/point.wav`);
var fail = new Audio(`./resources/fail.wav`);

function failFunc() {
    score = 0;
    fail.play();
    ctx.font = `30px Poppins`;
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = `#ff4f23`;
    ctx.fillStyle = `#ff8686`;
    ctx.textAlign = "center";
    ctx.strokeText(`Haz Fallado. Intente de Nuevo`, canvas.width / 2, 75);
    ctx.fillText(`Haz Fallado. Intente de Nuevo`, canvas.width / 2, 75);
    ctx.closePath();
}

function pointFunc() {
    if (ball.x + ball.rad >= ring.x && ball.x - ball.rad + 5 <= ring.x + ring.width && ball.y >= ring.y && (ball.y - ball.rad + 5) <= (ring.y + ring.height)) {
        if (ball.vy > 2 && ball.vx !== 0) {
            score++;
            if (score > record) {
                record = score;
                localStorage.setItem("record", record.toString());
            }
            action = 1;
            point.play();
        }
    }
}