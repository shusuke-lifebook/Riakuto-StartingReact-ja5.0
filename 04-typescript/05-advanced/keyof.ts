{
  const permissions = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
  };

  type PermChar = keyof typeof permissions;
  const readable: PermChar = "r";
  const writeable: PermChar = "w";
}
