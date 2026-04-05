// Task1
const user = {
  name: "Вадим",
  greet() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
};

user.greet();

// Task2
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Привіт, я ${this.name}`);
};

const myProfile = new Person("Вадим");
myProfile.greet();

// Task3
const student = Object.create(user);
student.study = function() {
  console.log("Я виконую лабораторку");
};

student.greet(); 
student.study(); 

// Task4
student.greet = function() {
  console.log("Привіт, я Вадим, і я роблю лабу");
};

student.greet(); 

//Task5
Array.prototype.first = function() {
  return this[0];
};

const numbers = [10, 20, 30];
console.log("Перший елемент масиву:", numbers.first());

