// Доп: Дано масив слів. Використати every() для перевірки, чи всі слова довші за 3 літери.
const words = ["apple", "banana", "kiwi", "chery"];
const long3 = words.every(word => word.length > 3);

console.log("Масив:", words);
console.log("Всі слова довші 3-ох літер?", long3); 