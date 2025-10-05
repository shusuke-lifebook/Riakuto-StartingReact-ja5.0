const withMutiple = (n) => (m) => n * m;
console.log(withMutiple(3)(5));

const triple = withMutiple(3);
console.log(triple(5));
