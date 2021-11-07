# リポジトリについて
このリポジトリでは、React Contextで関数の挙動を切り替えるサンプルの実装を行なっています。

## Dependency
- Node.js@14.17.3

- React@17
- Next.js@12
- styled-components@5
- Prisma@3
- PostgresSQL@12
- Docker@19

# 使い方

1. `yarn install --frozen-lockfile`で必要なライブラリを取得
2. `docker-compose up`でDBを立ち上げます
3. `yarn prisma migrate dev --name init --preview-feature` を実行しテーブルを登録します
4. `node ./prisma/defaultDataSeed.js`を実行しDBへ初期データを登録します
5. `yarn dev`でNext.jsを立ち上げます
6. [http://localhost:3000](http://localhost:3000)へアクセスします

## 一覧ページ
[http://localhost:3000/admin/items](http://localhost:3000/admin/items)でアクセス可能です。
Itemテーブルへ登録されている一覧のデータが表示されます。
キーワード/最大価格/エリアの３つでデータの絞り込みが可能です。

この画面から登録/編集/削除の画面に遷移可能です。


## 登録/編集/削除画面
一覧ページのボタンから遷移してください。
登録の場合は、データは未入力の状態です。
編集の場合は、データが入力された状態です。

上記２つはすべての項目が必須ですので、未入力の場合は確定ボタンが活性化しません。

削除の場合は、データは入力された状態です。
ただし値の変更はできません。


# Contextを使った関数の挙動変更の実装
`/src/components/ItemFormPage/context/ItemForm`の実装をご確認ください。

またこちらの実装に関する説明は[noteアカウント](https://note.com/gota_disney)の記事で行っておりますので、そちらをご確認ください。
