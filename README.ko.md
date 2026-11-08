# 무료 온라인 스트룹 테스트

다른 언어: [English](README.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español (México)](README.es-MX.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Dansk](README.da.md) · [Svenska](README.sv.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [日本語](README.ja.md) · [简体中文](README.zh-Hans.md) · [繁體中文（香港）](README.zh-HK.md)

브라우저에서 돌아가는 무료 스트룹 테스트예요. HTML 파일 하나로 되어 있어요.

온라인에서 해 보기: https://kevinsarrazin.github.io/free-stroop-test-online/ko/

색 이름이 색깔 있는 글자로 나타나요. 글자의 뜻이 아니라 글자의 색으로, 버튼이나 1~6 키를 써서 답하세요. 1분이 지나면 다음 결과를 볼 수 있어요:

- **스트룹 효과**: 글자와 색이 다를 때, 같을 때보다 답이 얼마나 더 느려지는지.
- **정답률**: 맞힌 답의 비율.
- **평균 시간**: 답하는 데 걸린 평균 시간. 정답만 계산해요.
- **글자와 색이 같음 / 다름**: 스트룹 효과를 계산하는 데 쓰는 두 평균.

블록마다 글자와 색이 같은 문항과 다른 문항이 같은 수만큼 들어 있고, 모든 색이 같은 횟수로 나와요. 같은 글자와 색이 두 번 연속으로 나오는 일은 없어요. 시간 계산에는 정답만 들어가요.

최근 10번의 테스트 결과는 브라우저의 로컬 저장소에 남아요. 어디로도 전송되지 않아요. 추적도, 외부 스크립트도, 가입도 없어요.

## 실행하기

`index.html` 파일을 아무 브라우저에서나 열면 돼요. 빌드 과정도, 의존성도 없어요.

## 결과 읽는 법

대부분은 글자가 자기 색과 다른 색 이름을 가리킬 때 더 느리게 답해요. 그 차이가 수십 밀리초에 이르는 경우도 많아요. 피로, 산만함, 연습에 따라 결과가 달라지니, 같은 시간대에 자기 자신과 비교하세요.

이 테스트는 한 가지 과제에서 주의 조절의 한 측면을 재요. 진단이 아니고, 임상 주의력 검사도 아니에요.

## 내 웹사이트에 테스트 넣기

upchin.app의 스트룹 테스트 전체 버전을 내 페이지에 무료로 넣을 수 있어요. 17개 언어를 지원해요. `data-lang`(또는 프레임 주소의 `lang=`) 값을 `en`, `fr`, `de`, `es-MX`, `pt-BR`, `it`, `nl`, `pl`, `da`, `sv`, `ru`, `id`, `hi`, `ja`, `ko`, `zh-Hans`, `zh-HK` 중 하나로 정해 주세요.

**스크립트를 쓰는 방법**([`stroop-test-embed.js`](stroop-test-embed.js)). 프레임 높이를 내용에 맞게 조절해 줘요.

```html
<div data-upchin-embed="stroop-test" data-lang="ko">
  <p>스트룹 테스트 · 제공: <a href="https://upchin.app/ko/tools/stroop-test">Upchin</a></p>
</div>
<script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
```

**스크립트 없이 넣는 방법**. 사이트에 HTML만 넣을 수 있을 때 써요.

```html
<iframe src="https://upchin.app/embed/stroop-test?lang=ko" title="스트룹 테스트" width="100%" height="1450" style="border:0;max-width:100%" loading="lazy" allow="clipboard-write"></iframe>
<p>스트룹 테스트 · 제공: <a href="https://upchin.app/ko/tools/stroop-test">Upchin</a></p>
```

테스트 아래의 출처 표시는 남겨 주세요. 스크립트는 그 옆에 프레임을 추가할 뿐, 출처 표시를 지우지 않아요.

## 전체 버전

17개 언어로 쓸 수 있는 [upchin.app의 스트룹 테스트](https://upchin.app/ko/tools/stroop-test)에서는 30초, 1분, 3분 테스트를 할 수 있어요. 각 수치를 설명해 주고, 결과를 공유할 수도 있어요.

이 테스트는 Upchin 팀이 만들었어요. 웹사이트에는 이렇게 쓰여 있어요. “휴대폰 속 앱은 계속 스크롤하도록 설계돼 있어요. Upchin은 반대로, 그 시간을 돌려주는 앱이에요.” 이 iPhone 앱은 Apple의 스크린 타임 기능을 활용해 [집중을 흐트러뜨리는 앱을 덜 쓰도록](https://upchin.app/ko) 도와줘요. 잔소리하는 대신, 꼭 필요한 순간에 브레이크를 걸어 줘요.
