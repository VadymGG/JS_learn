const numbers = [3.7, 1.2, 8.5, 4.1, 6.9];
const rounded = numbers.map(num => Math.round(num));

console.log("Початковий масив:", numbers);
console.log("Округлений масив:", rounded);