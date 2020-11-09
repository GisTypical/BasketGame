class Ball {
    
    constructor(x, y, rad) {
        this.rad = rad;
        
        this.x = x;
        this.y = y;

        this.vx = Math.random() * 3;
        this.vy = Math.random() * 2;
        
        this.ax = 0;
        this.ay = 1;
    }

    show() {
        ctx.fillStyle = `red`;
        ctx.moveTo(this.x + this.rad, this.y);
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    bordes(){
        if (this.x >= canvas.width - this.rad|| this.x <= this.rad) {
            this.vx *= -1;
        }
        if (this.y >= canvas.height - this.rad) {
            this.y = canvas.height - this.rad;
            this.vy *= -1;
        }
    }

    actualizar() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.x += this.vx;
        this.y += this.vy;
    }
}