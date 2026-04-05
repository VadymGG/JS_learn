const fruit = ["banana", "kiwi", "cherry", "apple", "orange"];
const [fruit1, fruit2, ...remainingFruit] = fruit;

console.log("Початковий масив завдань:", fruit);
console.log("Масив без перших двох елементів:", remainingFruit); 
