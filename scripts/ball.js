class Ball {

    constructor(x, y, rad) {
        this.rad = rad;

        this.x0 = x;
        this.y0 = y;

        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy = 0;

        this.ax = 0;
        this.ay = 1;
    }

    show() {
        ctx.fillStyle = `red`;
        ctx.moveTo(this.x + this.rad, this.y);
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = `blue`;
        ctx.stroke();
    }

    aplicarVelocidad() {
        this.vx = this.x - this.x0;
        this.vy = this.y - this.y0;

        this.x0 = this.x;
        this.y0 = this.y;
    }

    actualizar() {
        this.aplicarAceleracion();

        this.x += this.vx;
        this.y += this.vy;
    }

    aplicarAceleracion() {
        this.vx += this.ax;
        this.vy += this.ay;
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

        if (this.y >= canvas.height - this.rad) {
            this.y = canvas.height - this.rad;
            this.vy *= -1;
        }
    }

}