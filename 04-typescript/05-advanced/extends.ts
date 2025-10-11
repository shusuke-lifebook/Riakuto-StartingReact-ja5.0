const overMerge = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});
console.log(overMerge({ a: 1 }, { a: 4, b: 8 }));
