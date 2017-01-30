const Triangle = function () {
	this.type = 'Triangle';
	for (let i = 0; i < arguments.length; i++) {
		this[`side${i + 1}`] = arguments[i];
	}

};


module.exports = Triangle;