const sfun = () => console.log("стрілкова функція");
sfun();

const number = [4, 5, 3, 5, 4];
number.forEach(grade => {
    console.log("Оцінка:", grade);
});

// Варіант №5
const Info = (user) => {
    return `Ім'я: ${user.name}, Вік: ${user.age}`;
};

const I = {
    name: "Вадим",
    age: 18
};

const result = Info(I);
console.log("Результат 5 варіанту:", result);