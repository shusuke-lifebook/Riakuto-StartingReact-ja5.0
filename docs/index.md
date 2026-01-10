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
