class Escenario {

    // Metodos

    cargarEscenario() {

        this.fondo();
        this.edificios();
        this.arbustos();
        this.cancha();
        this.canasta();
        this.puntuacion();
        //balon();
    }

    puntuacion(){
        ctx.font = `30px Poppins`;
        ctx.beginPath();
        ctx.strokeStyle = `blue`;
        ctx.lineWidth = `2px`;
        ctx.fillText(`Puntuacion: ${i}`, canvas.width/2 - 100, 40);
        ctx.closePath();
    }

    fondo() {
        let grd = ctx.createLinearGradient(ctx.canvas.width / 2, 0, ctx.canvas.width / 2, ctx.canvas.height);
        grd.addColorStop(0, "#87CEFA");
        grd.addColorStop(1, "#E0FFFF");

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    edificios() {
        ctx.fillStyle = "#C0C0C0";
        ctx.strokeStyle = "#A9A9A9";
        ctx.lineWidth = 1;

        let x = (ctx.canvas.width / 2) - 537;
        let y = (ctx.canvas.height / 2) - 233;

        for (let i = 0; i < 15; i++) {
            ctx.fillRect(x, y, 100, 375);
            ctx.strokeRect(x, y, 100, 375);
            if (y <= 20) {
                y += 150;
            }
            else {
                y = 20;
            }
            x += 200;
        }
    }

    arbustos() {
        ctx.fillStyle = "#5BEE5B";
        ctx.strokeStyle = "#32CD32";
        ctx.lineWidth = 3;

        let x1 = 0;
        let x2 = 0;

        for (let i = 0; i < 15; i++) {
            ctx.beginPath();
            ctx.arc(x2, (ctx.canvas.height / 2) + 77, 60, 0, Math.PI, true)
            ctx.stroke();
            ctx.fill();

            x2 += 125;
        }

        ctx.fillRect(0, (ctx.canvas.height / 2) + 77, ctx.canvas.width, 150);

        ctx.fillStyle = "#32CD32";
        ctx.strokeStyle = "#228B22";

        for (let i = 0; i < 15; i++) {
            ctx.beginPath();
            ctx.arc(x1, (ctx.canvas.height / 2) + 97, 50, 0, Math.PI, true)
            ctx.stroke();
            ctx.fill();

            x1 += 100;
        }

        ctx.fillRect(0, (ctx.canvas.height / 2) + 87, ctx.canvas.width, 100);

    }

    cancha() {
        ctx.fillStyle = "#F4A460";
        ctx.strokeStyle = "#D2691E";

        ctx.fillRect(0, (ctx.canvas.height / 2) + 140, ctx.canvas.width, 20);
        ctx.strokeRect(0, (ctx.canvas.height / 2) + 140, ctx.canvas.width, 20);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 2, (ctx.canvas.height / 2) + 140);
        ctx.lineTo(ctx.canvas.width / 2, (ctx.canvas.height / 2) + 160);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "#A0522D";
        ctx.strokeStyle = "#8B4513";
        ctx.lineWidth = 4;

        ctx.fillRect(0, (ctx.canvas.height / 2) + 160, ctx.canvas.width, (ctx.canvas.height / 2) - 160);
        ctx.strokeRect(3, (ctx.canvas.height / 2) + 163, ctx.canvas.width - 7, (ctx.canvas.height / 2) - 166);
    }

    canasta() {
        ctx.strokeStyle = "#A9A9A9";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        // Conexion Poste-Tablero
        ctx.beginPath();
        ctx.moveTo((ctx.canvas.width / 2) + 538, (ctx.canvas.height / 2) - 118); //1085, 135
        ctx.lineTo((ctx.canvas.width / 2) + 503, (ctx.canvas.height / 2) - 183); //1050, 70
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.strokeStyle = "#DCDCDC";
        ctx.lineWidth = 2;

        // Poste
        ctx.fillRect((ctx.canvas.width / 2) + 528, (ctx.canvas.height / 2) - 113, 20, 227); //1075, 140, 20, 227
        ctx.strokeRect((ctx.canvas.width / 2) + 528, (ctx.canvas.height / 2) - 113, 20, 227); //1075, 140, 20, 227

        ctx.fillRect((ctx.canvas.width / 2) + 488, (ctx.canvas.height / 2) + 115, 60, 23); //1035, 368, 60, 23
        ctx.strokeRect((ctx.canvas.width / 2) + 488, (ctx.canvas.height / 2) + 115, 60, 23); //1035, 368, 60, 23

        ctx.fillRect((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);
        ctx.strokeRect((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 248, 15, 135);

        // Canasta
        ctx.strokeStyle = "white";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 145); //1030,100
        ctx.lineTo((ctx.canvas.width / 2) + 473, (ctx.canvas.height / 2) - 63); //1020, 190
        ctx.lineTo((ctx.canvas.width / 2) + 423, (ctx.canvas.height / 2) - 63); //970, 190
        ctx.lineTo((ctx.canvas.width / 2) + 413, (ctx.canvas.height / 2) - 145); //960, 100
        ctx.lineTo((ctx.canvas.width / 2) + 483, (ctx.canvas.height / 2) - 145);
        ctx.stroke();
        ctx.save();
        ctx.clip();


        ctx.lineWidth = 1;
        ctx.beginPath();
        let x1 = (ctx.canvas.width / 2) + 473;
        let x2 = (ctx.canvas.width / 2) + 493;

        for (let i = 0; i < 20; i++) {
            ctx.moveTo(x1, (ctx.canvas.height / 2) - 153);
            ctx.lineTo(x2, (ctx.canvas.height / 2) - 63);
            ctx.stroke();

            x1 -= 10;
            x2 -= 10;
        }

        ctx.beginPath();
        let x_1 = (ctx.canvas.width / 2) + 423;
        let x_2 = (ctx.canvas.width / 2) + 403;

        for (let i = 0; i < 20; i++) {
            ctx.moveTo(x_1, (ctx.canvas.height / 2) - 153);
            ctx.lineTo(x_2, (ctx.canvas.height / 2) - 63);
            ctx.stroke();

            x_1 += 10;
            x_2 += 10;
        }
        ctx.closePath();

        ctx.moveTo(x_1, (ctx.canvas.height / 2));
        ctx.lineTo(x_2, (ctx.canvas.height / 2));
        ctx.stroke();
        ctx.restore();
    }
}

//BALON
function balon() {
    ctx.fillStyle = "#D2691E";
    ctx.strokeStyle = "#8B4513";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc((ctx.canvas.width / 2) - 400, (ctx.canvas.height / 2) + 20, 25, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo((ctx.canvas.width / 2) - 400, (ctx.canvas.height / 2) - 5);
    ctx.lineTo((ctx.canvas.width / 2) - 400, (ctx.canvas.height / 2) + 45);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((ctx.canvas.width / 2) - 425, (ctx.canvas.height / 2) + 21);
    ctx.lineTo((ctx.canvas.width / 2) - 375, (ctx.canvas.height / 2) + 21);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((ctx.canvas.width / 2) - 418, (ctx.canvas.height / 2) + 3); //83, 335
    ctx.quadraticCurveTo((ctx.canvas.width / 2) - 400,
        (ctx.canvas.height / 2) + 25, (ctx.canvas.width / 2) - 382, (ctx.canvas.height / 2) + 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((ctx.canvas.width / 2) - 417, (ctx.canvas.height / 2) + 38); //83, 385
    ctx.quadraticCurveTo((ctx.canvas.width / 2) - 400,
        (ctx.canvas.height / 2) + 18, (ctx.canvas.width / 2) - 383, (ctx.canvas.height / 2) + 38);
    ctx.stroke();
}
