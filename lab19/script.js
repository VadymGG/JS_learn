const fruits = ["banana", "apple", "banana", "cherry", "banana", "apple", "kiwi"];

const count = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log("Масив:", fruits);
console.log("Кількість входжень:", count);