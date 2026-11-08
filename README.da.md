# Gratis Stroop-test online

Andre sprog: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

En gratis Stroop-test, der kører i din browser, i én enkelt HTML-fil.

Prøv den online: https://kevinsarrazin.github.io/free-stroop-test-online/da/

Et farveord vises med farvet blæk. Svar med blækkets farve, ikke med ordet, med knapperne eller tasterne 1 til 6. Efter et minut får du:

- **Stroop-effekt**: hvor meget langsommere du svarer, når ord og blæk er forskellige, end når de passer sammen.
- **Rigtige svar**: andelen af svar, der er rigtige.
- **Gennemsnitstid**: din gennemsnitlige svartid, kun for de rigtige svar.
- **Ord og blæk ens / forskellige**: de to gennemsnit, som Stroop-effekten beregnes ud fra.

Hver blok af forsøg har lige så mange ord, der passer til blækket, som ord, der ikke gør, hver blækfarve lige ofte og aldrig det samme ord i det samme blæk to gange i træk. Kun rigtige svar tæller med i tiderne.

De sidste ti test gemmes i browserens lokale lager. Intet bliver sendt videre: ingen sporing, intet eksternt script, ingen konto.

## Kør den

Åbn `index.html` i en hvilken som helst browser. Intet build-trin og ingen afhængigheder.

## Sådan læser du resultatet

De fleste svarer langsommere, når ordet nævner en anden farve end blækkets, ofte med flere snese millisekunder. Træthed, distraktion og øvelse påvirker alle resultatet, så sammenlign dig med dig selv, på samme tidspunkt af dagen.

Testen måler én form for kontrol med opmærksomheden i én opgave. Den er ikke en diagnose og heller ikke en klinisk opmærksomhedstest.

## Indlejr testen på dit websted

Du kan gratis vise den fulde Stroop-test fra upchin.app på din egen side. Den findes på 17 sprog: sæt `data-lang` (eller `lang=` i rammens adresse) til `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Med scriptet** ([`stroop-test-embed.js`](stroop-test-embed.js)), som tilpasser rammens højde til indholdet:

```html
<div data-upchin-embed="stroop-test" data-lang="da">
  <p>Stroop-test fra <a href="https://upchin.app/da/vaerktoejer/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Uden script**, hvis dit websted kun accepterer HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=da" title="Stroop-test" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Stroop-test fra <a href="https://upchin.app/da/vaerktoejer/stroop-test">Upchin</a></p>
```

Lad venligst kildeangivelsen under testen blive stående. Scriptet sætter rammen ind ved siden af og fjerner aldrig kildeangivelsen.

## Fuld version

[Stroop-testen på upchin.app](https://upchin.app/da/vaerktoejer/stroop-test) findes på 17 sprog, med test på 30 sekunder, 1 minut og 3 minutter. Den forklarer hvert tal og lader dig dele et resultat.

Testen er lavet af holdet bag Upchin. Med webstedets egne ord: »Dine apps er designet til at få dig til at scrolle. Upchin er designet til at give dig din tid tilbage.« Appen til iPhone bruger Apples Skærmtid til at hjælpe dig med at [bruge mindre tid på distraherende apps](https://upchin.app/da), med friktion på det rigtige tidspunkt i stedet for løftede pegefingre.
