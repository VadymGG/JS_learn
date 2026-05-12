const products = [
  { name: "Ноутбук", category: "електроніка" },
  { name: "Яблуко", category: "їжа" },
  { name: "Телефон", category: "електроніка" },
  { name: "Хліб", category: "їжа" },
  { name: "Планшет", category: "електроніка" }
];

const electronics = products.filter(item => item.category === "електроніка");

console.log("Початковий масив:", products);
console.log("Відфільтровано:", electronics);