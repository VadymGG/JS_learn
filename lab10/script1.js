// Варіант №5
const user = {
  firstName: "Вадим",
  lastName: "Буркут",
  email: "burkut.vadym@krfk.kai.edu.ua"
};

const perevirka = "email" in user;
console.log("Користувач:", user);
console.log("Чи є 'email'?", perevirka); 