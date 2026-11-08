# 免费在线斯特鲁普测试

其他语言： [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文（香港）](README.zh-HK.md)

一个在浏览器里运行的免费斯特鲁普测试，只有一个 HTML 文件。

在线试用：https://kevinsarrazin.github.io/free-stroop-test-online/zh-Hans/

屏幕上会出现一个用彩色墨水写的颜色字。用按钮或数字键 1 到 6 回答墨水的颜色，而不是字。1 分钟后，你会得到：

- **斯特鲁普效应**：字和墨色不一致时，你的回答比一致时慢多少。
- **正确率**：答对的比例。
- **平均用时**：你的平均作答时间，只计算答对的题。
- **字与墨色一致 / 不一致**：计算斯特鲁普效应所用的两个平均值。

每组试次中，字色一致和不一致的字数量相同，每种墨色出现的次数也相同，而且同一个字配同一种墨色不会连续出现两次。只有答对的题计入用时。

最近 10 次测试的结果保存在浏览器的本地存储里。任何数据都不会发送出去：没有追踪，没有外部脚本，也无需注册。

## 运行

用任意浏览器打开 `index.html` 即可。无需构建，也没有任何依赖。

## 如何解读结果

大多数人在字表示的颜色与墨色不同时回答得更慢，常常要慢几十毫秒。疲劳、分心和练习都会影响结果，所以请在一天中的同一时段，和自己比。

这个测试测的是在一项任务上的一种注意控制能力。它不是诊断，也不是临床注意力测试。

## 把这个测试嵌入你的网站

你可以免费把 upchin.app 上完整的斯特鲁普测试放到自己的网页上。它支持 17 种语言：把 `data-lang`（或框架地址中的 `lang=`）设为 `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK` 之一即可。

**使用脚本**（[`stroop-test-embed.js`](stroop-test-embed.js)），它会根据内容自动调整框架高度：

```html
<div data-upchin-embed="stroop-test" data-lang="zh-Hans">
  <p>斯特鲁普测试，由 <a href="https://upchin.app/zh-Hans/tools/stroop-test">Upchin</a> 提供</p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**不用脚本**，适合只接受 HTML 的网站：

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=zh-Hans" title="斯特鲁普测试" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>斯特鲁普测试，由 <a href="https://upchin.app/zh-Hans/tools/stroop-test">Upchin</a> 提供</p>
```

请保留测试下方的来源链接。脚本只会在它旁边加入框架，绝不会把它移除。

## 完整版

[upchin.app 上的斯特鲁普测试](https://upchin.app/zh-Hans/tools/stroop-test)支持 17 种语言，提供 30 秒、1 分钟和 3 分钟三种测试，会解释每个数值，还能分享结果。

这个测试由 Upchin 团队打造。用其官网的话说：“手机里的应用，生来就是为了让你刷个不停；Upchin 反其道而行，把时间还给你。”这款 iPhone 应用借助 Apple 的屏幕使用时间功能，帮你[少用让人分心的应用](https://upchin.app/zh-Hans)——不靠说教，而是在关键时刻踩一下刹车。
