// Завдання 1
let temperature = 10
if (temperature >= 20 && temperature <= 25) {
    console.log("Комфортна погода")
} else if (temperature >= 26) {
    console.log("Спекотна погода")
} else {
    console.log("Холодна погода")
}

// Завдання 2
number = 3
let N = (number % 2 == 0) ? "Парне" : "Не парне" 
console.log(N)

// Завдання 3
let day = "Понеділок"
switch (day) {
    case "Понеділок" :
        console.log("Перший день тижня")
        break
    case "Вівторок" :
        console.log("Другий день тижня")
        break
    case "Середа" :
        console.log("Третій день тижня")
        break
    case "Четвер" :
        console.log("Четвертий день тижня")
        break
    case "П'ятниця" :
        console.log("П'ятий день тижня")
        break
    case "Субота" :
        console.log("Шостий день тижня")
        break
    case "Неділя" :
        console.log("Сьомий день тижня")
        break
    default:
        console.log("Невідомий день")
}

// Завдання 4
let password = "admin123"
let check = (password == "admin123") ? "Доступ дозволено" : "Доступ заборонено"
console.log(check)

