function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function(percent) {
  const discPrice = this.price - (this.price * percent / 100);
  console.log(`Товар: ${this.name}, Знижка: ${percent}%, Ціна зі знижкою: ${discPrice} грн`);
};

const noyt = new Product("Ноутбук", 30000);
noyt.discount(10);