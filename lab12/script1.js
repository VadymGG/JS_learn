function Grades(...grades) {
  console.log("Всі оцінки:", grades);
}

Grades(5, 4, 5, 3, 5);

const student = { 
  name: "Вадим", 
  age: 12, 
  specialty: "Програмування" 
};

const { name, ...restInfo } = student;

console.log("Ім'я:", name);
console.log("Інші дані:", restInfo);