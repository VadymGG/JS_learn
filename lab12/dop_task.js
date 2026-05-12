function OtherUser({ name, ...restInfo }) {
  console.log("Ім'я:", name);
  console.log("Інші дані:", restInfo);
}

const user = {
  name: "Вадим",
  age: 18,
  specialty: "JavaScript",
  email: "bbbbbb@example.com"
};

OtherUser(user);