# Test de Stroop gratis en línea

Otros idiomas: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Un test de Stroop gratis que funciona en tu navegador, en un solo archivo HTML.

Pruébalo en línea: https://kevinsarrazin.github.io/free-stroop-test-online/es-MX/

Aparece el nombre de un color escrito en tinta de color. Responde con el color de la tinta, no con la palabra, con los botones o con las teclas 1 a 6. Después de un minuto obtienes:

- **Efecto Stroop**: cuánto más tardas en responder cuando la palabra y la tinta no coinciden que cuando sí coinciden.
- **Respuestas correctas**: la proporción de aciertos.
- **Tiempo promedio**: tu tiempo de respuesta promedio, contando solo las respuestas correctas.
- **Palabra y tinta coinciden / no coinciden**: los dos promedios con los que se calcula el efecto Stroop.

Cada bloque de intentos tiene tantas palabras que coinciden con su tinta como palabras que no, cada color de tinta aparece las mismas veces y nunca sale dos veces seguidas la misma palabra con la misma tinta. Solo las respuestas correctas cuentan para los tiempos.

Las últimas diez pruebas se guardan en el almacenamiento local de tu navegador. No se envía nada a ningún lado: sin rastreo, sin scripts externos, sin registro.

## Cómo usarlo

Abre `index.html` en cualquier navegador. Sin compilación y sin dependencias.

## Cómo leer el resultado

La mayoría de las personas responde más lento cuando la palabra nombra un color distinto al de su tinta, a menudo por varias decenas de milisegundos. El cansancio, las distracciones y la práctica mueven el resultado, así que compárate contigo mismo, a la misma hora del día.

Esta prueba mide un tipo de control de la atención en una sola tarea. No es un diagnóstico ni una prueba clínica de atención.

## Agrega el test a tu sitio web

Puedes mostrar gratis el test de Stroop completo de upchin.app en tu propia página. Está disponible en 17 idiomas: define `data-lang` (o `lang=` en la dirección del marco) como `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Con el script** ([`stroop-test-embed.js`](stroop-test-embed.js)), que ajusta la altura del marco a su contenido:

```html
<div data-upchin-embed="stroop-test" data-lang="es-MX">
  <p>Test de Stroop por <a href="https://upchin.app/es-MX/herramientas/test-de-stroop">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Sin script**, si tu sitio solo acepta HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=es-MX" title="Test de Stroop" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Test de Stroop por <a href="https://upchin.app/es-MX/herramientas/test-de-stroop">Upchin</a></p>
```

Por favor, conserva la línea de crédito debajo del test. El script agrega el marco junto a ella y nunca la quita.

## Versión completa

El [test de Stroop en upchin.app](https://upchin.app/es-MX/herramientas/test-de-stroop) está disponible en 17 idiomas, con pruebas de 30 segundos, 1 minuto y 3 minutos. Explica cada número y te permite compartir un resultado.

Este test lo hace el equipo detrás de Upchin. En palabras de su sitio web: “Tus apps están diseñadas para que sigas haciendo scroll. Upchin está diseñada para devolverte tu tiempo.” La app para iPhone usa Tiempo en pantalla de Apple para ayudarte a [usar menos las apps que te distraen](https://upchin.app/es-MX), con fricción en el momento justo en lugar de sermones.
