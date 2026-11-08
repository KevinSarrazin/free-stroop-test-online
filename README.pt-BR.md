# Teste de Stroop grátis online

Outros idiomas: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Um teste de Stroop grátis que roda no seu navegador, em um único arquivo HTML.

Experimente online: https://kevinsarrazin.github.io/free-stroop-test-online/pt-BR/

Aparece o nome de uma cor escrito em tinta colorida. Responda com a cor da tinta, não com a palavra, pelos botões ou pelas teclas 1 a 6. Depois de um minuto, você recebe:

- **Efeito Stroop**: quanto tempo a mais você leva para responder quando a palavra e a tinta são diferentes, em comparação a quando combinam.
- **Respostas certas**: a proporção de acertos.
- **Tempo médio**: seu tempo médio de resposta, contando só as respostas certas.
- **Palavra e tinta combinam / são diferentes**: as duas médias usadas para calcular o efeito Stroop.

Cada bloco de tentativas tem tantas palavras que combinam com a tinta quanto palavras que não combinam, cada cor de tinta aparece o mesmo número de vezes, e a mesma palavra nunca aparece duas vezes seguidas na mesma tinta. Só as respostas certas contam para os tempos.

Os últimos dez testes ficam salvos no armazenamento local do seu navegador. Nada é enviado para lugar nenhum: sem rastreamento, sem script externo, sem cadastro.

## Como rodar

Abra o `index.html` em qualquer navegador. Sem etapa de build e sem dependências.

## Como interpretar o resultado

A maioria das pessoas responde mais devagar quando a palavra nomeia uma cor diferente da tinta, muitas vezes por várias dezenas de milissegundos. Cansaço, distração e prática mexem no resultado, então compare seus resultados com os anteriores, no mesmo horário do dia.

Este teste mede um tipo de controle da atenção em uma única tarefa. Não é um diagnóstico nem um teste clínico de atenção.

## Adicione o teste ao seu site

Você pode exibir de graça o teste de Stroop completo do upchin.app na sua própria página. Ele está disponível em 17 idiomas: defina `data-lang` (ou `lang=` no endereço do frame) como `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Com o script** ([`stroop-test-embed.js`](stroop-test-embed.js)), que ajusta a altura do frame ao conteúdo:

```html
<div data-upchin-embed="stroop-test" data-lang="pt-BR">
  <p>Teste de Stroop por <a href="https://upchin.app/pt-BR/ferramentas/teste-de-stroop">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Sem script**, se o seu site só aceita HTML:

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=pt-BR" title="Teste de Stroop" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Teste de Stroop por <a href="https://upchin.app/pt-BR/ferramentas/teste-de-stroop">Upchin</a></p>
```

Por favor, mantenha a linha de crédito abaixo do teste. O script adiciona o frame ao lado dela e nunca a remove.

## Versão completa

O [teste de Stroop no upchin.app](https://upchin.app/pt-BR/ferramentas/teste-de-stroop) está disponível em 17 idiomas, com testes de 30 segundos, 1 minuto e 3 minutos. Ele explica cada número e permite compartilhar um resultado.

Este teste é feito pela equipe por trás do Upchin. Nas palavras do site: “Seus apps são feitos para você continuar rolando a tela. O Upchin é feito para devolver seu tempo a você.” O app para iPhone usa o Tempo de Uso da Apple para ajudar você a [usar menos os apps que tiram sua atenção](https://upchin.app/pt-BR), com atrito na hora certa em vez de sermão.
