# Riakuto-StartingReact-ja5.0

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

- npm run dev
