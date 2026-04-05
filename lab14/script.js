// Варіант 5: Функція з параметром за замовчуванням, яка вітає користувача
function greetUser(name = "Гість") {
  console.log(`Привіт, ${name}! Ласкаво просимо.`);
}

greetUser("Вадим"); 
greetUser(); 