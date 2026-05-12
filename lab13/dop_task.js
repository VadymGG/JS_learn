const fruits = ["apple", "banana", "orange"];
const Index = Math.floor(fruits.length / 2);

const newFruits = [
  ...fruits.slice(0, Index), "mango", ...fruits.slice(Index)
];

console.log("Початковий масив:", fruits);
console.log("Новий масив:", newFruits);