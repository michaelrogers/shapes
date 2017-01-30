const Shape = require('./Shape.js');

const Pentagon = function () {
	this.type = 'Pentagon';
	this.numberSides = 5;
	for (let i = 0; (i < this.numberSides); i++) {
		this[`side${i + 1}`] = arguments[i];
	}

};

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;



module.exports = Pentagon;