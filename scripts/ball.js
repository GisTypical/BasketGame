class Ball {

    constructor() {
        this.rad = 25;

        this.x = 0;
        this.y = 0;

        this.x0 = this.x;
        this.y0 = this.y;

        this.vx = 0;
        this.vy = 0;

        this.ax = .995;
        this.ay = .8;

        this.ground = canvas.height / 2 + 140;
    }

    applyV() {
        if (this.x0 == 0 || this.y0 == 0) {
            this.vx = 0;
            this.vy = 0;
        } else {
            this.vx = Number(this.x - this.x0) * 0.2;
            this.vy = Number(this.y - this.y0) * 0.2;
        }
        this.x0 = this.x;
        this.y0 = this.y;
    }

    updatePos() {
        this.applyA();
        this.x += this.vx;
        this.y += this.vy;
    }

    applyA() {
        this.vx *= this.ax;
        this.vy += this.ay;
    }

    collisionStructX(struct) {
        if (this.x + this.rad >= struct.x && this.x - this.rad <= struct.x + struct.width && this.y + this.rad >= struct.y && this.y - this.rad <= struct.y + struct.height) {
            if (this.vx > 0) {
                this.x = struct.x - this.rad;
            } else {
                this.x = struct.x + struct.width + this.rad + 1;
            }
            this.vx *= -1;
        }
    }

    collisionStructY(struct) {
        if (this.x + this.rad >= struct.x && this.x - this.rad <= struct.x + struct.width && this.y + this.rad >= struct.y && this.y - this.rad <= struct.y + struct.height) {
            if (this.vy > 0) {
                this.y = struct.y - this.rad;
            } else {
                this.y = struct.y + this.rad;
            }
            this.vy *= -1;
        }
    }

    afterLine() {
        if (this.x + this.rad >= canvas.width / 2) {
            drop();
        }
    }

    borderColl() {
        if (this.x >= canvas.width - this.rad) {
            this.x = canvas.width - this.rad;
            this.vx *= -1;
        }

        if (this.x <= this.rad) {
            this.x = this.rad;
            this.vx *= -1;
        }
        if (this.y >= this.ground - this.rad) {
            this.vx *= 0.8;
            this.vy *= -0.8;
            this.y = this.ground - this.rad;
            if (this.vy <= -1) {
                bounce.play();
            }
        }
    }

    show() {
        background.showBackground();
        console.log(this.vy);
        ctx.fillStyle = `red`;
        ctx.strokeStyle = `black`;

        ctx.beginPath();

        // Ball color
        ctx.fillStyle = "#D2691E";
        ctx.strokeStyle = "#8B4513";
        ctx.lineWidth = 3;

        // Circle
        ctx.beginPath();
        ctx.moveTo(this.x + this.rad, this.y);
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();

        // Vertical line
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.rad);
        ctx.lineTo(this.x, this.y + this.rad);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(this.x - this.rad, this.y);
        ctx.lineTo(this.x + this.rad, this.y);
        ctx.stroke();

        // Semicircular lines
        ctx.beginPath();
        ctx.moveTo(this.x - 15, this.y - 20);
        ctx.quadraticCurveTo(this.x, this.y - 10, this.x + 15, this.y - 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.x - 15, this.y + 20);
        ctx.quadraticCurveTo(this.x, this.y + 10, this.x + 15, this.y + 20);
        ctx.stroke();

        ctx.closePath();

        this.updatePos();
    }
}