const att1 = ["a", "b", "c"];
const att2 = [...att1, "d", "e"];
const att3 = ["Y", "Z", ...att2];

console.log(att2);
console.log(att3);

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { ...obj1, d: 99, e: 5 };
console.log(obj2);
