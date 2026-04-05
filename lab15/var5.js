// Реалізувати лічильник на основі замикання.
function createCounter() {
  let count = 0; 

  return function() {
    count++; 
    return count;
  };
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3