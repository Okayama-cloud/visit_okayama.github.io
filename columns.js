/* ===== コラムのデータ =====
   新しい記事は、下の { ... } のかたまりを丁寧にコピーして、先頭(一番上)に足してください。
   id    : 記事のURLに使う英数字とハイフン(他の記事と重ならないように)
   date  : 2026-10-07 の形式
   tag   : 小さく表示される分類(空でもOK)
   cover : 記事の上の大きな写真(assets/ の中のファイル。なければ "" )
   lang  : en または ja(省略すると en)
   body  : 本文。空行で段落が分かれます。
           ## 見出し
           ![写真の説明](assets/xxx.jpg)   ← 写真(説明は写真の下に出ます)
           > 引用
*/
window.COLUMNS = [
  {
    id: "sample",
    date: "2026-10-07",
    tag: "Note",
    lang: "en",
    cover: "",
    title: "A sample column",
    body: `This is a sample. Delete it, or write over it.

Paragraphs are separated by an empty line. A line break
inside a paragraph is kept as it is.

## A small heading

Headings start with two # marks and a space.

> A quote starts with a > mark.

To add a photo, put the file in the assets folder and write its path on its own line:

![A caption goes here, under the photo](assets/sea.jpg)

That is all there is to it.`
  }
];
