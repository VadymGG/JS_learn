let messengers = ["Signal", "Instagram", "Telegram"];
let numbers = [42, 15, 8, 99]; 

// sort() та reverse()
numbers.sort((a, b) => a - b);
console.log("Відсортовані числа:", numbers);
console.log("Месенджери задом наперед:", messengers.reverse());

// concat() та slice()
let all_Messengers = messengers.concat(["Viber", "WhatsApp"]);
console.log("Об'єднаний масив:", all_Messengers);
console.log("Частина масиву (slice):", all_Messengers.slice(0, 2));

// splice()
all_Messengers.splice(1, 1, "Discord"); 
console.log(all_Messengers);

// indexOf(), includes()
console.log("Індекс WhatsApp:", all_Messengers.indexOf("WhatsApp")); 
console.log("Чи є Skype?", all_Messengers.includes("Skype"));

// Варіант №5
// Дано масив імен. Використати find() для пошуку першого імені, що починається на "А"
let names = ["Олег",  "Вадим", "Андрій", "Іван", "Аліса"];

let searh = names.find(name => name.startsWith("А"));
console.log("Перше ім'я на 'А':", searh);
