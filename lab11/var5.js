function Figure() {}
Figure.prototype.area = function() {
  return 0; 
};

function Square(side) {
  this.side = side;
}
Square.prototype = Object.create(Figure.prototype);

Square.prototype.area = function() {
  return this.side * this.side;
};

const mySquare = new Square(4);
console.log("Площа квадрата:", mySquare.area()); 