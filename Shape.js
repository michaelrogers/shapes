const Shape = function() {
	this.type = 'Shape';
};

Shape.prototype.get_type = function () {
	console.log(this.constructor);
};

module.exports = Shape;