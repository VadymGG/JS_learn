const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArray); 
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); 
