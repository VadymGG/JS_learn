// Task1
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];

// Копіювання масиву через spread
const copyArr = [...arr1];
const mArr = [...arr1, ...arr2];

console.log("Копія масиву:", copyArr);
console.log("Об'єднаний масив:", mArr);

// Task2
const basicInfo = { name: "Вадим", role: "Студент" };
const extraInfo = { city: "Кривий Ріг", age: 20 };

const fullProfile = { ...basicInfo, ...extraInfo };

console.log("Повністю:", fullProfile);