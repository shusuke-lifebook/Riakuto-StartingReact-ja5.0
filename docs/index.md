# りあくと！TypeScript で始めるつらくない React 開発

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
    |mise ls [PLUGIN]|プラグインパッケージのインストール済みバージョン一覧を表示|
    |mise ls-remote [PLUGIN]||
    |||
    |||
    |||
