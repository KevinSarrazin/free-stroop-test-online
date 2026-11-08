# 無料オンライン・ストループテスト

ほかの言語： [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

ブラウザで動く無料のストループテストです。HTMLファイル1つでできています。

オンラインで試す：https://kevinsarrazin.github.io/free-stroop-test-online/ja/

色の名前が、色のついた文字で表示されます。文字の意味ではなく文字の色で、ボタンか1〜6のキーを使って答えてください。1分後に、次の結果が表示されます：

- **ストループ効果**：文字と色が食い違うとき、一致するときに比べて、答えがどれだけ遅くなるか。
- **正答率**：正しく答えられた割合。
- **平均時間**：回答にかかった時間の平均。正解だけで計算します。
- **文字と色が一致／不一致**：ストループ効果の計算のもとになる、2つの平均時間。

各ブロックには、文字と色が一致するものと食い違うものが同じ数ずつ含まれ、どの色も同じ回数だけ使われます。同じ文字と色の組み合わせが2回続くことはありません。時間の計算に入るのは正解だけです。

直近10回分のテスト結果は、ブラウザのローカルストレージに保存されます。データはどこにも送信されません。トラッキングも、外部スクリプトも、登録もありません。

## 実行する

`index.html` をお好きなブラウザで開くだけです。ビルドも依存関係も必要ありません。

## 結果の読み方

ほとんどの人は、文字が自分の色とは別の色の名前を示していると、答えが遅くなります。その差が数十ミリ秒になることもよくあります。疲れ、注意散漫、慣れで結果は動くので、比べるなら同じ時間帯に、自分自身と比べましょう。

このテストが測るのは、ひとつの課題における、ある種の注意の制御だけです。診断ではなく、臨床的な注意力の検査でもありません。

## 自分のサイトにテストを埋め込む

upchin.appのストループテスト（完全版）を、自分のページに無料で表示できます。17言語に対応しています。`data-lang`（またはフレームのアドレスの `lang=`）に、`en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK` のいずれかを指定してください。

**スクリプトを使う場合**（[`stroop-test-embed.js`](stroop-test-embed.js)）。フレームの高さを内容に合わせて調整します：

```html
<div data-upchin-embed="stroop-test" data-lang="ja">
  <p>ストループテスト（提供：<a href="https://upchin.app/ja/tools/stroop-test">Upchin</a>）</p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**スクリプトを使わない場合**（HTMLしか使えないサイト向け）：

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=ja" title="ストループテスト" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>ストループテスト（提供：<a href="https://upchin.app/ja/tools/stroop-test">Upchin</a>）</p>
```

テストの下のクレジット表記は残してください。スクリプトはその横にフレームを追加するだけで、クレジットを消すことはありません。

## 完全版

[upchin.appのストループテスト](https://upchin.app/ja/tools/stroop-test)は17言語に対応していて、30秒、1分、3分のテストが選べます。それぞれの数値の解説があり、結果を共有することもできます。

このテストは、Upchinのチームが作りました。公式サイトにはこうあります。「スマホのアプリは、スクロールがやめられないように作られています。Upchinは逆に、その時間をあなたに返すためのアプリです。」このiPhoneアプリは、Appleのスクリーンタイム機能を使って[気が散るアプリの使いすぎを減らす](https://upchin.app/ja)お手伝いをします。説教をするのではなく、ここぞというときに小さなブレーキをかける。それがUpchinのやり方です。
