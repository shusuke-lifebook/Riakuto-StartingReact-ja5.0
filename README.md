# Riakuto-StartingReact-ja5.0 の学習

[りあクト！ TypeScript で始めるつらくない React 開発 第 5 版](https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/tree/main)

## default-npm-packages

- Node の任意のバージョンをインストールしたとき、デフォルトで一緒にインストールされる npm パッケージの登録するファイル。
- 手動でインストールする場合
  - コマンド：「xargs npm install -g < ~/.default-npm-packages」

## React のプロジェクトを作成する

- コマンド：「npm create vite@latest hello-world -- --template=react-ts」

```
> npx
> create-vite hello-world --template=react-ts

│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/shusuke/work_react/02-vite/hello-world...
│
◇  Installing dependencies with npm...
```

- 開発サーバーの起動
  - npm run dev
  - npm run dev -- --port=3000

```
  VITE v7.1.7  ready in 525 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- プロジェクトファイルの説明
  |ディレクトリ名/ファイル名|内容|
  |:---|:---|
  |src/|アプリケーションのソースコードが置かれる|
  |node_modules|アプリケーションに必要な npm パッケージが保存されている|
  |public|公開用のアセットファイルを置く|
  |package.json|インストールするパッケージの情報などが書かれた設定ファイル|
  |package-lock.json|インストールしたパッケージの依存情報が保存されたファイル|
  |tsconfig.json|TypeScript をコンパイルするための設定ファイル(※現状は下記 2 つのファイルを参照しているだけ)|
  |tsconfig.app.json|アプリケーションコード用のコンパイラオプションを記述|
  |tsconfig.node.json|ビルドツールの設定ファイルをコンパイルするためオプションを記述|
  |eslint.config.js|静的コード解析ツール ESLint の設定ファイル|
  |vite.config.ts|Vite の設定ファイル|
  |.gitignore|Git リポジトリに含めないものリスト|

## プロジェクトを管理するためのコマンドやスクリプト

### pnpm

- 環境を Node.js のバージョンに依存させたくないので、mise を使う。

  - mise use -g pnpm

- Vite を使ったプロジェクトを pnpm で作り直す
  - pnpm create vite hello-world --template=react-ts

```

◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with pnpm and start now?
│  No
│
◇  Scaffolding project in /home/shusuke/work_react/03_pnpm/hello-world...
│
└  Done. Now run:

  cd hello-world
  pnpm install
  pnpm dev
```
