class Structure {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	// Structure testing function
	showStruct(color) {
		ctx.lineWidth = 5;
		ctx.strokeStyle = color;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}

}