# Gratis Stroop-test online

Andere talen: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Een gratis Stroop-test die in je browser draait, in één HTML-bestand.

Probeer hem online: https://kevinsarrazin.github.io/free-stroop-test-online/nl/

Er verschijnt een kleurwoord in gekleurde letters. Antwoord met de kleur van de letters, niet met het woord, via de knoppen of de toetsen 1 tot en met 6. Na een minuut krijg je:

- **Stroop-effect**: hoeveel trager je antwoordt als woord en letterkleur verschillen dan als ze overeenkomen.
- **Goede antwoorden**: het aandeel juiste antwoorden.
- **Gemiddelde tijd**: je gemiddelde antwoordtijd, alleen over de goede antwoorden.
- **Woord en letterkleur komen overeen / verschillen**: de twee gemiddelden waaruit het Stroop-effect wordt berekend.

Elk blok bevat evenveel woorden die overeenkomen met hun letterkleur als woorden die dat niet doen, met elke letterkleur even vaak, en nooit twee keer achter elkaar hetzelfde woord in dezelfde kleur. Alleen goede antwoorden tellen mee voor de tijden.

De laatste tien tests worden bewaard in de lokale opslag van je browser. Er wordt niets verstuurd: geen tracking, geen extern script, geen account.

## Starten

Open `index.html` in een willekeurige browser. Geen buildstap en geen afhankelijkheden.

## Je resultaat begrijpen

De meeste mensen antwoorden trager als het woord een andere kleur noemt dan die van de letters, vaak enkele tientallen milliseconden. Vermoeidheid, afleiding en oefening hebben allemaal invloed op het resultaat. Vergelijk jezelf dus met jezelf, op hetzelfde moment van de dag.

Deze test meet één vorm van aandachtscontrole bij één taak. Het is geen diagnose en geen klinische aandachtstest.

## Zet de test op je eigen website

Je kunt de volledige Stroop-test van upchin.app gratis op je eigen pagina tonen. Hij is beschikbaar in 17 talen: zet `data-lang` (of `lang=` in het adres van het frame) op `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Met het script** ([`stroop-test-embed.js`](stroop-test-embed.js)), dat de hoogte van het frame aan de inhoud aanpast:

```html
<div data-upchin-embed="stroop-test" data-lang="nl">
  <p>Stroop-test door <a href="https://upchin.app/nl/tools/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Zonder script**, als je site alleen HTML accepteert:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=nl" title="Stroop-test" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Stroop-test door <a href="https://upchin.app/nl/tools/stroop-test">Upchin</a></p>
```

Laat de bronvermelding onder de test alsjeblieft staan. Het script plaatst het frame ernaast en haalt de vermelding nooit weg.

## Volledige versie

De [Stroop-test op upchin.app](https://upchin.app/nl/tools/stroop-test) is beschikbaar in 17 talen, met tests van 30 seconden, 1 minuut en 3 minuten. Hij legt elk getal uit en laat je een resultaat delen.

Deze test is gemaakt door het team achter Upchin. In de woorden van de website: ‘Apps zijn gemaakt om je te laten blijven scrollen. Upchin is gemaakt om je die tijd terug te geven.’ De iPhone-app gebruikt Schermtijd van Apple om je te helpen [minder tijd aan afleidende apps te besteden](https://upchin.app/nl), met frictie op het juiste moment in plaats van een opgeheven vingertje.
