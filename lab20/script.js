const student = {
  name: "Вадим",
  specialty: "JS"
};

function greet() {
  console.log(`Привіт! Я ${this.name}, спеціальність: ${this.specialty}`);
}

const X = greet.bind(student);

X();