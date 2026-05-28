const words = ["Яблуко", "банан", "Ягода", "апельсин", "Яр", "виноград"];

const searchLetter = "я";

const filteredWords = words.filter(word => 
  word.toLowerCase().startsWith(searchLetter.toLowerCase())
);

console.log("Початковий масив:", words);
console.log(`Слова, що починаються на "${searchLetter}":`, filteredWords);