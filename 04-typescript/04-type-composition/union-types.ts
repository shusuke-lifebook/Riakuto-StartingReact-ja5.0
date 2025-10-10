interface A {
  foo: number;
  bar?: string;
}

interface B {
  foo: string;
}
interface C {
  bar: string;
}
interface D {
  baz: string;
}

type AorB = A | B;
type AorC = A | C;
type AorD = A | D;
