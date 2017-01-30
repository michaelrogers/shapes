const Shape = function() {
	this.type = 'Shape';
};

Shape.prototype.get_type = () => {
	return;
};

Shape.prototype.add_sides = () => {
	for (let i = 0; i < arguments.length; i++) {
		this[`side${i + 1}`] = arguments[i];
	}
}

module.exports = Shape;