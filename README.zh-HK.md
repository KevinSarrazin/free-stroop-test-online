# 免費網上斯特魯普測試

其他語言： [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md)

一個在瀏覽器裡運行的免費斯特魯普測試，只有一個 HTML 檔案。

網上試用：https://kevinsarrazin.github.io/free-stroop-test-online/zh-HK/

畫面上會出現一個用彩色墨水寫的顏色字。用按鈕或數字鍵 1 至 6 回答墨水的顏色，而不是字。1 分鐘後，你會得到：

- **斯特魯普效應**：字和墨色不一致時，你的回答比一致時慢多少。
- **正確率**：答對的比例。
- **平均用時**：你的平均作答時間，只計算答對的題目。
- **字與墨色一致 / 不一致**：計算斯特魯普效應所用的兩個平均值。

每組試次中，字色一致和不一致的字數量相同，每種墨色出現的次數也相同，而且同一個字配同一種墨色不會連續出現兩次。只有答對的題目計入用時。

最近 10 次測試的結果儲存在瀏覽器的本機儲存空間。任何資料都不會傳送出去：沒有追蹤，沒有外部腳本，也無需註冊。

## 運行

用任何瀏覽器開啟 `index.html` 即可。不用經過建構步驟，也沒有任何依賴項。

## 如何解讀結果

大多數人在字代表的顏色與墨色不同時回答得較慢，常常要慢幾十毫秒。疲倦、分心和練習都會影響結果，所以請在一天中的同一時段，和自己比較。

這個測試測的是在一項任務上的一種注意控制能力。它不是診斷，也不是臨床注意力測試。

## 把測試嵌入你的網站

你可以免費把 upchin.app 上完整的斯特魯普測試放到自己的網頁上。它支援 17 種語言：把 `data-lang`（或框架網址中的 `lang=`）設為 `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK` 其中之一即可。

**使用腳本**（[`stroop-test-embed.js`](stroop-test-embed.js)），它會根據內容自動調整框架高度：

```html
<div data-upchin-embed="stroop-test" data-lang="zh-HK">
  <p>斯特魯普測試，由 <a href="https://upchin.app/zh-HK/tools/stroop-test">Upchin</a> 提供</p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**不用腳本**，適合只接受 HTML 的網站：

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=zh-HK" title="斯特魯普測試" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>斯特魯普測試，由 <a href="https://upchin.app/zh-HK/tools/stroop-test">Upchin</a> 提供</p>
```

請保留測試下方的來源連結。腳本只會在它旁邊加入框架，絕不會把它移除。

## 完整版

[upchin.app 上的斯特魯普測試](https://upchin.app/zh-HK/tools/stroop-test)支援 17 種語言，提供 30 秒、1 分鐘和 3 分鐘三種測試，會解釋每個數值，還能分享結果。

這個測試由 Upchin 團隊打造。用其官網的話說：「手機裡的 App，生來就是為了讓你玩個不停；Upchin 反其道而行，把時間還給你。」這款 iPhone App 借助 Apple 的螢幕使用時間功能，幫你[少用令人分心的 App](https://upchin.app/zh-HK)——不靠說教，而是在關鍵時刻踩一下剎車。
