// Реалізувати функцію, що приймає інші функції як аргументи.
function processNumber(num, callback) {
  return callback(num);
}

const square = (x) => x * x;
console.log(processNumber(5, square)); // 25

// Написати функцію, яка повертає іншу функцію.
function Greeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const Hello = Greeting("Привіт");
console.log(Hello("Вадиме")); 