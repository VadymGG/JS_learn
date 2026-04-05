const numbers = [5, 12, 45, 8, 20];
console.log("Початковий масив:", numbers);

numbers.forEach((num, index, arr) => {
    arr[index] = num + 10;
});

console.log("Змінений масив:", numbers);