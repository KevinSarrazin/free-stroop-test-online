# Darmowy test Stroopa online

Inne języki: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Darmowy test Stroopa, który działa w przeglądarce, w jednym pliku HTML.

Wypróbuj online: https://kevinsarrazin.github.io/free-stroop-test-online/pl/

Pojawia się nazwa koloru napisana kolorowym tuszem. Odpowiadaj kolorem tuszu, a nie słowem – przyciskami albo klawiszami od 1 do 6. Po minucie dostajesz:

- **Efekt Stroopa**: o ile wolniej odpowiadasz, gdy słowo i tusz się różnią, niż gdy się zgadzają.
- **Poprawne odpowiedzi**: odsetek dobrych odpowiedzi.
- **Średni czas**: Twój średni czas odpowiedzi, liczony tylko z poprawnych odpowiedzi.
- **Słowo zgodne / niezgodne z tuszem**: dwie średnie, z których wylicza się efekt Stroopa.

Każdy blok prób zawiera tyle samo słów zgodnych z tuszem co niezgodnych, każdy kolor tuszu pojawia się równie często, a to samo słowo tym samym tuszem nigdy nie pojawia się dwa razy z rzędu. Do czasów liczą się tylko poprawne odpowiedzi.

Ostatnie dziesięć testów zostaje w pamięci lokalnej przeglądarki. Nic nie jest nigdzie wysyłane: bez śledzenia, bez zewnętrznych skryptów, bez rejestracji.

## Uruchomienie

Otwórz `index.html` w dowolnej przeglądarce. Bez kompilacji i bez zależności.

## Jak czytać wynik

Większość osób odpowiada wolniej, gdy słowo oznacza inny kolor niż kolor tuszu, często o kilkadziesiąt milisekund. Na wynik wpływa zmęczenie, rozproszenie i wprawa, więc porównuj go z własnymi wcześniejszymi wynikami, o tej samej porze dnia.

Ten test mierzy jeden rodzaj kontroli uwagi w jednym zadaniu. To nie jest diagnoza ani kliniczny test uwagi.

## Umieść test na swojej stronie

Pełny test Stroopa z upchin.app możesz bezpłatnie pokazać na własnej stronie. Jest dostępny w 17 językach: ustaw `data-lang` (lub `lang=` w adresie ramki) na jeden z kodów: `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Ze skryptem** ([`stroop-test-embed.js`](stroop-test-embed.js)), który dopasowuje wysokość ramki do treści:

```html
<div data-upchin-embed="stroop-test" data-lang="pl">
  <p>Test Stroopa od <a href="https://upchin.app/pl/narzedzia/test-stroopa">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Bez skryptu**, jeśli Twoja strona przyjmuje tylko HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=pl" title="Test Stroopa" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Test Stroopa od <a href="https://upchin.app/pl/narzedzia/test-stroopa">Upchin</a></p>
```

Zostaw, proszę, informację o źródle pod testem. Skrypt dodaje ramkę obok niej i nigdy jej nie usuwa.

## Pełna wersja

[Test Stroopa na upchin.app](https://upchin.app/pl/narzedzia/test-stroopa) jest dostępny w 17 językach, z testami trwającymi 30 sekund, 1 minutę i 3 minuty. Objaśnia każdą liczbę i pozwala udostępnić wynik.

Ten test przygotował zespół Upchin. Jak głosi jego strona: „Aplikacje w telefonie są projektowane tak, by trzymać Cię przy przewijaniu. Upchin powstał, by oddać Ci czas.” Aplikacja na iPhone’a korzysta z funkcji Czas przed ekranem od Apple, by pomóc Ci [rzadziej sięgać po rozpraszające aplikacje](https://upchin.app/pl) – z hamulcem we właściwej chwili zamiast moralizowania.
