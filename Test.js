const Shape = require('./Shape.js');
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Pentagon = require('./Pentagon.js');

const shape = new Shape();
const triangle = new Triangle(1,2,3,4);
const square = new Square (2,3,4,5);
const pentagon = new Pentagon (1,2,3,4,5);

const polygonInstanceOf = (polygon, polygonPrototype) => {
	console.log({
		type: polygon.type,
		instanceOfSelf: polygon instanceof polygonPrototype,
		instanceOfShape: polygon instanceof Shape
	});
};

const printType = (polygon) => {
	console.log(polygon);
	polygon.get_type();
	console.log('--------------------------------------------');
};

printType(shape);
printType(triangle);
printType(square);
printType(pentagon);

console.log('\n---------------Instance-Check---------------');
polygonInstanceOf(shape,Shape);
polygonInstanceOf(triangle,Triangle);
polygonInstanceOf(square,Square);
polygonInstanceOf(pentagon,Pentagon);




