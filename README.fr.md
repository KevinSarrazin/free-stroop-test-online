# Test de Stroop gratuit en ligne

Autres langues : [English](README.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

Un test de Stroop gratuit qui tourne dans ton navigateur, en un seul fichier HTML.

Essaie-le en ligne : https://kevinsarrazin.github.io/free-stroop-test-online/fr/

Un nom de couleur s’affiche, écrit dans une encre de couleur. Réponds à la couleur de l’encre, pas au mot, avec les boutons ou les touches 1 à 6. Au bout d’une minute, tu obtiens :

- **Effet Stroop** : le temps que tu perds quand le mot et l’encre diffèrent, comparé aux essais où ils correspondent.
- **Réponses justes** : la part de bonnes réponses.
- **Temps moyen** : ton temps de réponse moyen, calculé sur les seules réponses justes.
- **Mot et encre identiques / différents** : les deux moyennes à partir desquelles l’effet Stroop est calculé.

Chaque bloc d’essais compte autant de mots qui correspondent à leur encre que de mots qui n’y correspondent pas, chaque couleur d’encre y revient le même nombre de fois, et jamais deux fois de suite le même mot dans la même encre. Seules les réponses justes comptent dans les temps.

Les dix derniers tests sont conservés dans le stockage local de ton navigateur. Rien n’est envoyé nulle part : aucun pistage, aucun script externe, aucune inscription.

## Lancer en local

Ouvre `index.html` dans n’importe quel navigateur. Aucune compilation, aucune dépendance.

## Lire le résultat

La plupart des gens répondent plus lentement quand le mot nomme une autre couleur que celle de son encre, souvent de plusieurs dizaines de millisecondes. La fatigue, la distraction et l’entraînement font varier le résultat : compare-toi à toi-même, à la même heure de la journée.

Ce test mesure une forme de contrôle de l’attention, sur une seule tâche. Ce n’est pas un diagnostic, ni un test clinique de l’attention.

## Intègre le test sur ton site

Tu peux afficher gratuitement le test de Stroop complet d’upchin.app sur ta propre page. Il existe en 17 langues : règle `data-lang` (ou `lang=` dans l’adresse du cadre) sur `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK`.

**Avec le script** ([`stroop-test-embed.js`](stroop-test-embed.js)), qui ajuste la hauteur du cadre à son contenu :

```html
<div data-upchin-embed="stroop-test" data-lang="fr">
  <p>Test de Stroop par <a href="https://upchin.app/fr/outils/test-de-stroop">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**Sans script**, si ton site n’accepte que du HTML :

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=fr" title="Test de Stroop" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>Test de Stroop par <a href="https://upchin.app/fr/outils/test-de-stroop">Upchin</a></p>
```

Garde la ligne de crédit sous le test, s’il te plaît. Le script ajoute le cadre à côté d’elle et ne la retire jamais.

## Version complète

Le [test de Stroop sur upchin.app](https://upchin.app/fr/outils/test-de-stroop) existe en 17 langues, avec des tests de 30 secondes, 1 minute et 3 minutes. Il explique chaque chiffre et te permet de partager un résultat.

Ce test est réalisé par l’équipe d’Upchin. Comme le dit son site : « Tes apps sont conçues pour te faire scroller. Upchin est conçue pour te rendre ton temps. » L’app iPhone s’appuie sur le Temps d’écran d’Apple pour t’aider à [décrocher des apps qui te distraient](https://upchin.app/fr), avec de la friction au bon moment plutôt qu’une leçon de morale.
