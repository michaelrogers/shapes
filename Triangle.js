const Shape = require('./Shape.js');

const Triangle = function () {
	this.type = 'Triangle';
	this.numberSides = 3;
	for (let i = 0; (i < this.numberSides); i++) {
		this[`side${i + 1}`] = arguments[i];
	}

};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;



module.exports = Triangle;