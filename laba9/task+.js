const neg = (arr) => arr.some(num => num < 0);

const numbers1 = [10, 20, 30, 40];
const numbers2 = [10, -5, 30, 40];

console.log("Чи є від'ємні в numbers1?", neg(numbers1)); // false
console.log("Чи є від'ємні в numbers2?", neg(numbers2)); // true