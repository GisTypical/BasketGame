class Estructura {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	crearEstructura(){
        ctx.lineWidth = 2;
		ctx.strokeStyle = "#DCDCDC";
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
}