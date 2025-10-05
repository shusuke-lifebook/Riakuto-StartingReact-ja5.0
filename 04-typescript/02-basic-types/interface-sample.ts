interface Color {
  readonly rgb: string;
  opacity: number;
  alias?: string;
}

const tq: Color = { rgb: "00afcc", opacity: 1 };
tq.alias = "turquoise";
tq.rgb = "03c1ff"; // 読み取り専用プロパティであるため、'rgb' に代入することはできません。
