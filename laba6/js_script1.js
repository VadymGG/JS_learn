let arr = [1, 2, 3, 4, 5];
let arr1 = new Array(9, 8, 7, 6);

arr.push(10);
console.log(arr)

let pop_arr = arr.pop()
console.log(arr)

arr1.unshift(10);
console.log(arr1)

let shift_arr = arr1.shift()
console.log(arr1)

// Завдання | 5 варіант
let numbers = [5, 6, 6, 3, 2, 1,];
let sum = 0; 

numbers.forEach(num => {sum += num});
console.log(sum); 

// Доп. Завдання
const numbers1 = [12, 5, 8, 21, 3, 18];
numbers1.sort((a, b) => a - b)
console.log(numbers1)
let first_num = numbers1[0]
let last_num = numbers1[numbers1.length - 1]
console.log(`Найменше занчення массиву: ${first_num}`)
console.log(`Найбільше занчення массиву: ${last_num}`)