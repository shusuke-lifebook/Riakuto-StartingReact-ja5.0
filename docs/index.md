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
