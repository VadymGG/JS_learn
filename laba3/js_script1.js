// Завдання 1
const str = "Привіт"; // string
const num = 123;      // number
const bool = true;    // boolean
let undef;            // undefined
const empty = null;   // null

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(empty, typeof empty);

// Завдання 2
console.log(Number("50"));   // "50" -> 50
console.log(String(100));    // 100 -> "100"
console.log(Boolean(1));     // 1 -> true

// Завдання 3
console.log("5" + 2); // Буде 52, якщо є плюс і рядок, все стає рядком
console.log("5" - 2); 
console.log("5" * 2);
console.log("5" / 2);

// Завдання 4
function Type(val) {
    return typeof val;
}
console.log(Type(5)); // number

// Завдання 5
console.log(5 == "5");  // true (нестроге: ігнорує тип)
console.log(5 === "5"); // false (строге: різні типи — число і рядок)