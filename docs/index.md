# りあくと！TypeScript で始めるつらくない React 開発

- [りあクト！ TypeScript で始めるつらくない React 開発 第 5 版](https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/tree/main)

## 📒 第 1 章 こんにちは React

### 📒 1-1 基本環境の構築

#### 📒 1-1-1. Node.js がなぜフロントエンド開発に必要なのか

- ローカルファイルを直接開くのは HTTP プロトコルで動作する本番環境と挙動がことなる
- 対応する JavaScript の仕様や使用可能な Web API が開発者の使っているブラウザに依存する
- インポートするライブラリのバージョンやその依存関係を手動で管理する必要がある
- TypeScript や JSX、および各種 CSS の拡張言語などが使えない。

#### 📒 1-1-2. Node.js をインストール

- mise を使って Node.js をインストール
  - Windows 環境： WSL(Ubuntu) + mise とした。
    |コマンド|内容|
    |:---|:---|
    |mise plugins ls-remote|インストール可能なプラグイン(コアを除く)の一覧表示|
    |mise plugins install <PLUGIN>|プラグインをインストール|
    |mise plugins update <PLUGIN>|インストール済みプラグインをアップデート|
    |mise plugins uninstall <PLUGIN>|インストール済みのプラグインを削除|
    |mise ls \[PLUGIN\]|プラグインパッケージのインストール済みバージョン一覧を表示|
    |mise ls-remote \[PLUGIN\]|プラグインパッケージのインストール可能なバージョン一覧を表示|
    |mise current \[PLUGIN\]|プラグインのアクティブなパッケージを表示|
    |mise latest <PLUGIN>\[@VERSION\]|プラグインの利用可能な最新のバージョンを表示。|
    |mise install <PLUGIN>\[@VERSION\]|任意のバージョンのパッケージをインストール。|
    |mise uinstall <PLUGIN>\[@VERSION\]|任意のバージョンのパッケージをアンインストール|
    |mise global <PLUGIN>\[@VERSION\]|そのプラグインのグローバルにつかうパッケージバージョンを指定|
    |mise local <PLUGIN>\[@VERSION\]|そのプラグインのローカルにつかうパッケージバージョンを指定|
    |mise prune \[PLUGIN\]|プラグインの使用していないバージョンを削除する|
    |mise upgrade \[PLUGIN\]|プラグインのパッケージを最新版にアップグレードする。その際、旧バージョンのパッケージは削除される|

#### 📒 1-1-3. 超絶推奨エディタ Visual Studio Code

### 📒 1-2. React プロジェクトを作成する

- Vite
  - npm create vite@latest hello-world -- --template=react-ts
    - cd hello-world
    - npm install
    - npm run dev (ポート: npm run dev --port=3000)

### 📒 1-3 プロジェクトを管理するためのコマンドやスクリプト

#### 📒 1-3-1 pnpm

- mise use -g pnpm
- Vite with pnpm
  - pnpm create vite hello-world --template=react-ts
  - cd hello-world
  - pnpm install
  - pnpm dev

## 📒 第 2 章 ライトでディープな JavaScript の世界

### 📒2-1 改めて JavaScript ってどんな言語?

#### 📒 2-1-1 世界で最も誤解されたプログラミング言語

- 第一級関数とクロージャをサポート
- 構造体ともクラスインスタンスとも異なる、シンプルで柔軟なオブジェクト
- 表現力の高いリテラル記法

#### 📒 2-1-2 年々進化していく JavaScript

- JavaScript が準拠している標準仕様の名前を**ECMAScript(エクマスクリプト)**という

### 📒 2.2 変数の宣言

- var 変数の宣言は金輪際もう使ってはいけない。
  - 1. 再宣言および再代入が可能
  - 2. 変数の参照が巻き上がれる
  - 3. スコープ単位が関数
       ||再代入|再宣言|
       |:---|:---|:---|
       |var|〇|〇|
       |let|〇|×|
       |const|×|×|

### 📒 2.3 JavaScript のデータ型

#### 📒 2.3.1 JavaScript におけるプリミティブ型

- Boolean 型(論理型)
  - ・・・・・ true および false の 2 つの真偽値を扱うデータ型。
- Number 型(数値型)
  - 数値を扱うデータ型。他の多くの言語とことなり、整数も少数も同じ number 型になる。
- BigInt 型(長整数型)
  - Number 型では扱えない大きな数値を扱うためのデータ型。
- String 型(文字列型)
  - ・・・・・文字列を扱うデータ型。
- Symbol 型
  - ・・・・・「シンボル値」という固有の識別子を表現するあたい。Symbol()関数を呼び出すことで動的に生成される。
  - 基本的に同じシンボルを後からは生成できない。
  - オブジェクトのプロパティとして、使用可能
- Null 型
  - ・・・・・プリミティブ値 null は何のデータも存在しない状態を明示的に表す。
- Undefined 型
  - ・・・・・プリミティブ値 undefined は宣言のみ行われた変数や、オブジェクトに存在しないプロパティへのアクセスに割り当てられる。他の多くの言語とことなり、null と明確に区別される。

#### 📒 2.3.2 プリミティブ値のリテラルとラッパーオブジェクト

- プリミティブ型の値を定義するには、通常は**リテラル**を使う。
- literal は「文字通りの」という意味で、プログラミング言語においては、ソースコードに数値や文字列をべた書きにして、その値を表現する式である。各プリミティブ型に用意されているリテラルは次の通り。
  - Boolean 型
    - ・・・・true と fase の 2 つの真偽値リテラルがある。
  - Number 型
    - 36 や-9 のように数値を直接記述するリテラル。
      - 先頭に 0x をつけることで、16 進数
      - 先頭に 0o をつけることで、8 進数
      - 先頭に 0b をつけることで、2 進数
  - Bigint 型
    - ・・・・100n のように整数の後ろに n をつけて表現する長整数値リテラル。
  - String 型
    - シングルクォート'またはダブルクォート"で囲まれた文字リテラル。バッククォート`で囲むと、改行を含む複数行テキストや${}による式展開が可能なテンプレートリテラルになる。
  - Null 型
    - Null リテラルである null は、プリミティブ値 null を返す。
- null と undefined を除くすべてのプリミティブ型には、それらの値を包含するラッパーオブジェクトというものが存在する。
  - String 型なら String、Number 型なら Number がそれに該当する。

#### 📒 2.3.3 オブジェクトの型とそのリテラル

- プリミティブ型だけじゃなく、オブジェクト型にもリテラルを持つものがある。
  - 配列リテラル
    - \[1,2,3\]の形式で記述する。\[\]は空の配列を示す。Array オブジェクトのインスタンスとして生成される。
  - オブジェクトリテラル
    - {key: value}の形式で記述する。キーには文字列またはシンボルが用いられる。
    - Object のインスタンスとして生成される。
  - 正規表現リテラル
    - ・・・・pattern/flags の形式で記述する。RegExp オブジェクトのインスタンスとして生成される。

### 📒 2.4 関数の定義

#### 📒 2.4.1 関数宣言と関数式

```JavaScript
// 関数宣言文による定義
function double(n) {
  return n * 2;
}

// 関数式による定義
const dbl = function (n) {
  return n * 2;
};

console.log(double(10));
console.log(dbl(10));

```

- JavaScript の関数は組み込みオブジェクト Function のインスタンスであり、**第一級オブジェクト(First-Class Object)**でもある。

#### 📒 2.4.2 アロー関数式と無名関数

- 「JavaScript」の関数式には function キーワードによるものと他に、**アロー関数式**というものが ES2015 から加わった。

```JavaScript
// functionキーワードによる関数式
const plusOne = function (n) {
  return n + 1;
};

// アロー関数式
const addOne = (n) => {
  return n + 1;
};

// アロー関数式をさらに省略記法
const increment = (n) => n + 1;

console.log(plusOne(4));
console.log(addOne(4));
console.log(increment(4));

```

- メインのアプリケーションのロジックや再利用前提の関数は function による宣言
- 短い処理やインラインで使う関数はアロー関数

#### 📒 2.4.3 さまざまな引数の表現

- デフォルト引数

```JavaScript
const raise = (n, m = 2) => n ** m;

console.log(raise(2, 3));
console.log(raise(3));

```

- レストパラメータ(Rest Parameters)

```JavaScript
const showNames = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

showNames("Moon", "Mercury", "Mars", "Jupiter", "Venus");
```

### 📒 2.5 クラス

#### 📒 2.5.1 クラスのようでクラスではない、JavaScript のクラス構文

```JavaScript
class Bird {
  #className = "鳥類";

  constructor(name) {
    this.name = name;
  }

  static explain() {
    console.log("こらは鳥クラスです");
  }

  cry(sound) {
    console.log(`${this.name}が「${sound}」と鳴きました`);
  }

  introduce() {
    console.log(`私は${this.#className}の${this.name}です。`);
  }
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛びました。`);
  }
}

Bird.explain();

const penguin = new Bird("ペンギン");
penguin.introduce();

const hawk = new FlyableBird("タカ");
hawk.cry("ピィィー");
hawk.fly();

```

#### 📒 2.5.2 プロトタイプベースのオブジェクト指向

- プロトタイプベースでは、そもそもオブジェクトの抽象としてのクラスが存在しない。オブジェクトは直接、他のオブジェクトを継承する。
- その時の継承元となったオブジェクトのことをプロトタイプと呼ぶ。

### 📒 2.6 配列やオブジェクトの便利な構文

#### 📒 2.6.1 分割代入とスプレット構文

```JavaScript
const foo = "dummy";
const bar = "key";
const baz = 1024;

const obj1 = {
  foo: 4,
  foo: 8,
  "<fuu>": 16,
  [bar]: 128,
  [`_${bar}2`]: 256,
  baz: baz / 2,
};

console.log(obj1);

const obj2 = { baz };
console.log(obj2);

```

```JavaScript
const [a, b] = ["foo", "bar"];
console.log(a, b);

const [, n] = [1, 4];
console.log(n);

const [, , i, , j, , , k] = [1, 2, 3, 4, 5, 6, 7];
console.log(i, j, k);

const profile = { name: "Kanae", age: 24, gender: "f" };
const { name, age } = profile;
console.log(name, age);

```

```JavaScript
const response = {
  data: [
    {
      id: 1,
      name: "Patty Rabbit",
      email: "patty@maple.town",
    },
    {
      id: 2,
      name: "Rolley Cocker",
      email: "rolley@palm.town",
    },
    {
      id: 3,
      name: "Bobby Kumanov",
      email: "bobby@mapletown",
    },
  ],
};

const { data: users = [] } = response;
console.log(users);

```

```JavaScript
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e"];
const arr3 = ["Y", "Z", ...arr1, ...arr2];

console.log(arr2);
console.log(arr3);

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { ...obj1, d: 99, e: 5 };

console.log(obj2);

```

```JavaScript
const user = {
  id: 1,
  name: "Patty Rabbit",
  email: "patty@mapple.town",
  age: 8,
};

const { id, ...userWithoutId } = user;

console.log(id, userWithoutId);

```

#### 📒 2.6.2 オブジェクトのマージとコピー

- assign

```JavaScript
const original = { a: 1, b: 2, c: 3 };

const copy = Object.assign({}, original);
console.log(copy);
console.log(copy === original);

const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 });
console.log(assigned);
console.log(original);
```

- スプレッド

```JavaScript
const original = { a: 1, b: 2, c: 3 };

const copy = { ...original };
console.log(copy);
console.log(copy === original);

const assigned = { ...original, ...{ c: 10, d: 50 }, d: 100 };
console.log(assigned);
console.log(original);

```

- structuredClone: 多段階にネストされたオブジェクトや配列もコピー可能

```JavaScript
const patty = {
  name: "Patty Rabbit",
  email: "patty@mapple.town",
  address: { town: "Mapple Town" },
};

const rolley = structuredClone(patty);
rolley.name = "Rolley Cocker";
rolley.email = "rolley@palm.town";
rolley.address.town = "Palm Town";

console.log(patty);

```

### 📒 2.7 式と演算子で短く書く

#### 📒 2.7.1 ショートサーキット評価

- ショートサーキット評価(Short-Circuite Evaluation)
- &&や||、!といった論理演算を使い、右辺の評価を左辺に評価に委ねる記法のこと。

```JavaScript
const hello = undefined || null || 0 || NaN || "" || "Hello";
const chao = " " && 100 && [] && {} && "Chao!";

true && console.log("1.", hello);
false && console.log("2.", hello);
true || console.log("3.", chao);
false || console.log("4.", chao);

```

#### 📒 2.7.2 Nullish Coalescing と Optional Chaining

```JavaScript
const users = [
  {
    name: "Patty Rabbit",
    address: {
      town: "Maple Town",
    },
  },
  {
    name: "Rolley Cocker",
    address: {},
  },
  null,
];

for (u of users) {
  const user = u ?? { name: "(Somebody)" };
  const town = user?.address?.town ?? "(Somewhere)";
  console.log(`${user.name} lives in ${town}`);
}

```

- 「??を並べている部分が**Nullish Coalescing**」、?でつないでいる部分が**Optional Chaining**

### 📒 2.8 モジュールを読み込む

#### 📒 2.8.1 JavaScript モジュール三国志

- **CommonJS**

```JavaScript
const moon = {
  modifier: "prism",
  transform() {
    console.log(`Moon ${this.modifier} power, make up!`);
  },
};

module.exports = moon;

exports.transform = function () {
  console.log("Venus power, make up!");
};

const finish = function () {
  console.log("Crescent beam!");
};

exports.finish = finish;

```

- **ES Modules(ESM)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ES Module Test</title>
  </head>
  <body>
    <ul id="list"></ul>
    <script type="module">
      import uniq from "https://esm.sh/lodash/uniq.js";

      const arr = [12, 2, 2, 2, 9, 5, 12, 2, 15, 8, 9, 8];
      const elems = uniq(arr)
        .map((n) => `<li>${n}</li>`)
        .join("");
      document.getElementById("list").innerHTML = elems;
    </script>
  </body>
</html>
```

#### 📒 2.8.2 ES Modules でインポート/エクスポート

- package.json

```json
"type": "module"
```

### 📒 2.9 それでも知っておくべき this の挙動

- **グローバルオブジェクト**文字通り、その処理系のグローバルスコープ上に存在するオブジェクト。
  - Node.js であれば、global オブジェクト
  - ブラウザであれば、Window オブジェクト
  - JavaScript における this は**その処理が実行されるコンテキスト**のオブジェクトの参照。

## 📒 第 3 章 関数型プログラミングで行こう

### 📒 3.1 関数型プログラミングは何がうれしい。

- 同じ入力に対して、同じ作用と同じ出力が保証されていることを**参照透過性**という。
- 関数型のプログラミングとは、参照透過性的な関数を組み合わせることで解決すべき問題に対処していく**宣言型**のプログラミングのことを言う。

### 📒 3.2 コレクションの反復処理

#### 📒 3.2.1 配列の反復処理

- Arrayオブジェクトのプロトタイプメソッドの中から、反復処理を行うものをピックアップ
  - map() ・・・ 対象の配列の要素ひとつひとつを任意に加工した新しい配列を返す。
  - filter() ・・・ 与えられた条件に適合する要素だけを抽出した新しい配列を返す。
  - find() ・・・ 与えられた条件に適合した最初の要素を返す。見つかれなかった場合はundefinedを返す。
  - findIndex() ・・・ 与えられた条件に適合した最初の要素のインデックスを返す。見つからなかった場合は-1を返す。
  - every() ・・・ 与えられた条件をすべての要素を満たすかを真偽値で返す。
  - some() ・・・ 与えられた条件を満たす要素がひとつでもあるかを真偽値で返す。

#### 📒 3.2.2 オブジェクトの反復処理

- Object自身が持つメソッドを使って一旦、配列を形成する方法がAirbnbのスタイルで推奨される。

### 📒 3.3 JavaScriptで本格関数型プログラミング

#### 📒 3.3.1 あらためて関数型プログラミングとは何か

- 関数型プログラミングのパラダイムは主に次のようなことが行われる
  - 名前を持たないその場限りの関数(無名関数)を定義できる。
  - 変数やデータ構造の値として関数を設定できる。
  - 関数に引数として関数を渡したり、その戻り値に関数を設定できる。(高階関数)
  - 関数に特定の引数を固定した新しい関数を作ることができる(部分通用)
  - 複数の高階関数を合成してひとつの関数にできる(関数合成)

#### 📒 3.3.2 高階関数

- 「**高階関数**(Higher Order Function)」とは引数に関数をとったり、戻り値に関数を返したりする関数のこと。
