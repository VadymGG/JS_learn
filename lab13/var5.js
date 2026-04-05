const Fruit = {
  name: "apple",
  color: "red",
  weight: 150
};

const clonedFruit = { ...Fruit };

console.log("Оригінальний фрукт:", Fruit);
console.log("Скопійований фрукт:", clonedFruit);

clonedFruit.weight = 160; 
console.log("Вага оригінал фрукту після зміни клону:", Fruit.weight);