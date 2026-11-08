# Free Stroop test online

Other languages: [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

A free Stroop test that runs in your browser, in a single HTML file.

Try it online: https://kevinsarrazin.github.io/free-stroop-test-online/

A color word appears in colored ink. Answer with the color of the ink, not the word, with the buttons or the keys 1 to 6. After one minute you get:

- **Stroop effect**: how much slower you answer when the word and the ink differ than when they match.
- **Correct answers**: the share of right answers.
- **Average time**: your average answer time, on correct answers only.
- **Word matches ink / differs from ink**: the two averages the Stroop effect is computed from.

Each block of trials has as many matching as mismatching words, with every ink color equally often, and never the same word and ink twice in a row. Only correct answers count in the times.

The last ten tests are kept in your browser's local storage. Nothing is sent anywhere: no tracking, no external script, no sign-up.

## Run it

Open `index.html` in any browser. No build step and no dependency.

## Reading the result

Most people answer more slowly when the word names another color than its ink, often by several tens of milliseconds. Fatigue, distraction and practice all move the result, so compare yourself with yourself, at the same time of day.

This test measures one kind of attention control on one task. It is not a diagnosis, and it is not a clinical attention test.

## Embed the test on your website

You can show the full Stroop test from upchin.app on your own page, free. It is available in 17 languages: set `data-lang` (or `lang=` in the frame address) to `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**With the script** ([`stroop-test-embed.js`](stroop-test-embed.js)), which adjusts the height of the frame to its content:

```html
<div data-upchin-embed="stroop-test" data-lang="en">
  <p>Stroop test by <a href="https://upchin.app/tools/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Without a script**, if your site only accepts HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=en" title="Stroop test" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Stroop test by <a href="https://upchin.app/tools/stroop-test">Upchin</a></p>
```

Please keep the credit line below the test. The script adds the frame next to it and never removes it.

## Full version

The [Stroop test on upchin.app](https://upchin.app/tools/stroop-test) is available in 17 languages, with tests of 30 seconds, 1 minute and 3 minutes. It explains each number and lets you share a result.

This test is made by the team behind Upchin. In the words of its website: “Your apps are designed to keep you scrolling. Upchin is designed to give you your time back.” The iPhone app uses Apple's Screen Time to help you [cut down on distracting apps](https://upchin.app/), with friction at the right moment rather than a lecture.
