# Gratis Stroop-test online

Andra språk: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Ett gratis Stroop-test som körs i webbläsaren, i en enda HTML-fil.

Testa online: https://kevinsarrazin.github.io/free-stroop-test-online/sv/

Ett färgord visas i färgat bläck. Svara med bläckets färg, inte ordet, med knapparna eller tangenterna 1 till 6. Efter en minut får du:

- **Stroop-effekt**: hur mycket långsammare du svarar när ordet och bläcket skiljer sig åt än när de stämmer överens.
- **Rätta svar**: andelen svar som var rätt.
- **Genomsnittstid**: din genomsnittliga svarstid, räknad bara på rätta svar.
- **Ord och bläck lika / olika**: de två genomsnitt som Stroop-effekten räknas fram ur.

Varje block av försök har lika många ord som stämmer med bläcket som ord som inte gör det, varje bläckfärg lika ofta, och aldrig samma kombination av ord och bläck två gånger i rad. Bara rätta svar räknas in i tiderna.

De tio senaste testen sparas i webbläsarens lokala lagring. Inget skickas någonstans: ingen spårning, inga externa skript, inget konto.

## Kör testet

Öppna `index.html` i valfri webbläsare. Inget byggsteg och inga beroenden.

## Så tolkar du resultatet

De flesta svarar långsammare när ordet betecknar en annan färg än bläckets, ofta med flera tiotals millisekunder. Trötthet, distraktion och vana påverkar alla resultatet, så jämför dig med dig själv, vid samma tid på dygnet.

Testet mäter en sorts uppmärksamhetskontroll i en enda uppgift. Det är ingen diagnos och inget kliniskt test av uppmärksamheten.

## Bädda in testet på din webbplats

Du kan visa hela Stroop-testet från upchin.app på din egen sida, gratis. Det finns på 17 språk: sätt `data-lang` (eller `lang=` i ramens adress) till `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Med skriptet** ([`stroop-test-embed.js`](stroop-test-embed.js)), som anpassar ramens höjd efter innehållet:

```html
<div data-upchin-embed="stroop-test" data-lang="sv">
  <p>Stroop-test från <a href="https://upchin.app/sv/verktyg/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Utan skript**, om din webbplats bara tillåter HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=sv" title="Stroop-test" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Stroop-test från <a href="https://upchin.app/sv/verktyg/stroop-test">Upchin</a></p>
```

Låt gärna källhänvisningen under testet vara kvar. Skriptet lägger till ramen bredvid den och tar aldrig bort den.

## Fullständig version

[Stroop-testet på upchin.app](https://upchin.app/sv/verktyg/stroop-test) finns på 17 språk, med test på 30 sekunder, 1 minut och 3 minuter. Det förklarar varje siffra och låter dig dela ett resultat.

Testet är gjort av teamet bakom Upchin. Med webbplatsens egna ord: ”Dina appar är gjorda för att få dig att scrolla. Upchin är gjord för att ge dig tiden tillbaka.” Appen för iPhone bygger på Apples Skärmtid och hjälper dig att [dra ner på distraherande appar](https://upchin.app/sv) – med friktion i rätt ögonblick, utan pekpinnar.
