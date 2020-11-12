class Ball {

    constructor(rad) {
        this.rad = rad;

        this.x0 = this.x;
        this.y0 = this.y;

        this.x = 0;
        this.y = 0;

        this.vx = 0;
        this.vy = 0;

        this.ax = 0.97;
        this.ay = 1.5;
    }

    show() {

        escenario.cargarEscenario();

        ctx.fillStyle = `red`;
        ctx.strokeStyle = `black`;

        ctx.moveTo(this.x + this.rad, this.y);
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.fill();


    }

    aplicarVelocidad() {
        this.vx = (this.x - this.x0) * 0.2;
        this.vy = (this.y - this.y0) * 0.2;

        this.x0 = this.x;
        this.y0 = this.y;
    }

    actualizar() {
        this.aplicarAceleracion();

        this.x += this.vx;
        this.y += this.vy;
    }

    aplicarAceleracion() {
        this.vx *= this.ax;
        this.vy += this.ay;
    }

    verificarEstruc(a) {
        if (this.x + this.rad >= a.x && this.x - this.rad <= a.x + a.width && this.y + this.rad >= a.y && this.y - this.rad <= a.y + a.height) {
            console.log("Misma loc en x");
            this.vx *= -1;
        }
    }

    bordes() {
        if (this.x >= canvas.width - this.rad) {
            this.x = canvas.width - this.rad;
            this.vx *= -1;
        }

        if (this.x <= this.rad) {
            this.x = this.rad;
            this.vx *= -1;
        }

        if (this.y >= (canvas.height / 2) + 140 - this.rad) {
            this.vx *= 0.9;
            this.vy *= -1;
            this.y = (ctx.canvas.height / 2) + 145 - this.rad;
        }
    }

}