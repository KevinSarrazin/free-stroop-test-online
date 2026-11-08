# Test di Stroop online gratuito

Altre lingue: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Un test di Stroop gratuito che funziona nel browser, in un solo file HTML.

Provalo online: https://kevinsarrazin.github.io/free-stroop-test-online/it/

Compare il nome di un colore scritto con un inchiostro colorato. Rispondi con il colore dell’inchiostro, non con la parola, usando i pulsanti o i tasti da 1 a 6. Dopo un minuto ottieni:

- **Effetto Stroop**: quanto rallenti quando parola e inchiostro sono diversi, rispetto a quando coincidono.
- **Risposte corrette**: la percentuale di risposte giuste.
- **Tempo medio**: il tuo tempo medio di risposta, calcolato solo sulle risposte corrette.
- **Parola uguale all’inchiostro / diversa dall’inchiostro**: le due medie da cui si calcola l’effetto Stroop.

Ogni blocco di prove contiene tante parole uguali all’inchiostro quante diverse, con ogni colore d’inchiostro presente lo stesso numero di volte, e mai la stessa parola con lo stesso inchiostro due volte di fila. Per i tempi contano solo le risposte corrette.

Gli ultimi dieci test restano nell’archiviazione locale del browser. Nessun dato viene inviato: niente tracciamento, nessuno script esterno, nessun account.

## Come avviarlo

Apri `index.html` in qualsiasi browser. Nessuna compilazione, nessuna dipendenza.

## Come leggere il risultato

Quasi tutti rispondono più lentamente quando la parola nomina un colore diverso da quello del suo inchiostro, spesso di qualche decina di millisecondi. Stanchezza, distrazione e pratica fanno variare il risultato: confronta ogni risultato con i tuoi precedenti, alla stessa ora del giorno.

Questo test misura un aspetto del controllo dell’attenzione, su un solo compito. Non è una diagnosi e non è un test clinico dell’attenzione.

## Inserisci il test sul tuo sito

Puoi mostrare gratis il test di Stroop completo di upchin.app sulla tua pagina. È disponibile in 17 lingue: imposta `data-lang` (o `lang=` nell’indirizzo del frame) su `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Con lo script** ([`stroop-test-embed.js`](stroop-test-embed.js)), che adatta l’altezza del frame al contenuto:

```html
<div data-upchin-embed="stroop-test" data-lang="it">
  <p>Test di Stroop di <a href="https://upchin.app/it/strumenti/test-di-stroop">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Senza script**, se il tuo sito accetta solo HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=it" title="Test di Stroop" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Test di Stroop di <a href="https://upchin.app/it/strumenti/test-di-stroop">Upchin</a></p>
```

Per favore, lascia la riga di credito sotto il test. Lo script aggiunge il frame accanto e non la rimuove mai.

## Versione completa

Il [test di Stroop su upchin.app](https://upchin.app/it/strumenti/test-di-stroop) è disponibile in 17 lingue, con prove da 30 secondi, 1 minuto e 3 minuti. Spiega ogni numero e ti permette di condividere un risultato.

Questo test è realizzato dal team di Upchin. Come si legge sul suo sito: «Le tue app sono progettate per farti scrollare. Upchin nasce per restituirti il tuo tempo.» L’app per iPhone usa Tempo di utilizzo di Apple per aiutarti a [usare meno le app che ti distraggono](https://upchin.app/it), con un po’ di attrito al momento giusto, senza farti la morale.
