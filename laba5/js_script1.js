// Завдання 1
for (let i = 1; i < 20; i += 2) {
    console.log("Число: " + i)
}

// Завдання 2
let n = 10
while (n >= 1) {
    console.log(n)
    n--
}

// Завдання 3
let number

// do {
//     number = Number(prompt("Введи позитивне число: ", ""))
// } while (number <= 0)

// Завдання 4
let obj = {a:1, b:2, c:3}
for (let key in obj) {
    console.log(key, obj[key])
}

// Завдання 5
let arr = ["bread", "butter", "chease"]
for (let i of arr.reverse()) {
    console.log(i);
}

// Завдання 6
let gg = [1, 2, 3, 4, 5, 10, 87]
gg.forEach(num => console.log(num))

let dd = gg.map(num => num * num)
console.log(dd)

let ff = gg.filter(num => num >= 10)
console.log(ff)