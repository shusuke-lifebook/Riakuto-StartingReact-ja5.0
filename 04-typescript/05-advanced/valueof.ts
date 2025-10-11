const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
};

type ValueOf<T> = T[keyof T];
type PermNum = ValueOf<typeof permissions>;
