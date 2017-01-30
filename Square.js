const Shape = require('./Shape.js');

const Square = function () {
	this.type = 'Square';
	this.numberSides = 4;
	for (let i = 0; (i < this.numberSides); i++) {
		this[`side${i + 1}`] = arguments[i];
	}
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;


module.exports = Square;