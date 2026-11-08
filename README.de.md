# Kostenloser Stroop-Test online

Andere Sprachen: [English](README.md) · [Français](README.fr.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Ein kostenloser Stroop-Test, der in deinem Browser läuft, in einer einzigen HTML-Datei.

Online ausprobieren: https://kevinsarrazin.github.io/free-stroop-test-online/de/

Ein Farbwort erscheint in farbiger Schrift. Antworte mit der Farbe der Schrift, nicht mit dem Wort, über die Schaltflächen oder die Tasten 1 bis 6. Nach einer Minute bekommst du:

- **Stroop-Effekt**: wie viel langsamer du antwortest, wenn Wort und Schriftfarbe nicht zusammenpassen, als wenn sie übereinstimmen.
- **Richtige Antworten**: der Anteil der richtigen Antworten.
- **Durchschnittszeit**: deine durchschnittliche Antwortzeit, nur bei richtigen Antworten.
- **Wort passt / passt nicht zur Schriftfarbe**: die beiden Mittelwerte, aus denen der Stroop-Effekt berechnet wird.

Jeder Versuchsblock enthält gleich viele passende wie unpassende Wörter, jede Schriftfarbe gleich oft und nie zweimal hintereinander dasselbe Wort in derselben Farbe. In die Zeiten fließen nur richtige Antworten ein.

Die letzten zehn Tests bleiben im lokalen Speicher deines Browsers. Nichts wird irgendwohin gesendet: kein Tracking, kein externes Skript, keine Anmeldung.

## Ausführen

Öffne `index.html` in einem beliebigen Browser. Kein Build-Schritt, keine Abhängigkeiten.

## Das Ergebnis lesen

Die meisten Menschen antworten langsamer, wenn das Wort eine andere Farbe nennt als die seiner Schrift, oft um einige Dutzend Millisekunden. Müdigkeit, Ablenkung und Übung verschieben das Ergebnis – vergleiche dich also mit dir selbst, zur gleichen Tageszeit.

Dieser Test misst eine Form der Aufmerksamkeitssteuerung bei einer einzigen Aufgabe. Er ist keine Diagnose und kein klinischer Aufmerksamkeitstest.

## Binde den Test auf deiner Website ein

Du kannst den vollständigen Stroop-Test von upchin.app kostenlos auf deiner eigenen Seite zeigen. Er ist in 17 Sprachen verfügbar: Setze `data-lang` (oder `lang=` in der Adresse des Frames) auf `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Mit dem Skript** ([`stroop-test-embed.js`](stroop-test-embed.js)), das die Höhe des Frames an seinen Inhalt anpasst:

```html
<div data-upchin-embed="stroop-test" data-lang="de">
  <p>Stroop-Test von <a href="https://upchin.app/de/tools/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Ohne Skript**, wenn deine Website nur HTML zulässt:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=de" title="Stroop-Test" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Stroop-Test von <a href="https://upchin.app/de/tools/stroop-test">Upchin</a></p>
```

Bitte lass die Quellenangabe unter dem Test stehen. Das Skript setzt den Frame daneben und entfernt sie nie.

## Vollständige Version

Der [Stroop-Test auf upchin.app](https://upchin.app/de/tools/stroop-test) ist in 17 Sprachen verfügbar, mit Tests von 30 Sekunden, 1 Minute und 3 Minuten. Er erklärt jede Zahl und lässt dich ein Ergebnis teilen.

Dieser Test stammt vom Team hinter Upchin. Auf der Website heißt es: „Deine Apps sind dafür gebaut, dass du weiterscrollst. Upchin ist dafür gebaut, dir deine Zeit zurückzugeben.“ Die iPhone-App nutzt Apples Bildschirmzeit, um dir zu helfen, [weniger Zeit mit ablenkenden Apps zu verbringen](https://upchin.app/de) – mit einer Bremse im richtigen Moment statt mit erhobenem Zeigefinger.
