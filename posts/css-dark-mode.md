---
title: "CSS만으로 다크모드 구현하기"
date: "2026-02-08"
description: "CSS 커스텀 속성과 JavaScript 몇 줄로 다크모드를 구현하는 방법을 소개합니다."
---

## CSS 커스텀 속성

다크모드의 핵심은 CSS 커스텀 속성(CSS Variables)이다. 루트에 색상 변수를 선언하고, `data-theme` 속성에 따라 값을 바꿔주면 된다.

```css
:root {
  --bg: #f5f5f0;
  --text: #111111;
}

[data-theme="dark"] {
  --bg: #1a1a18;
  --text: #e8e8e8;
}
```

이렇게 하면 모든 컴포넌트가 자연스럽게 테마를 따라간다.

## JavaScript 토글

테마 전환은 `data-theme` 속성을 토글하고 `localStorage`에 저장하는 것이 전부다.

```javascript
const next = current === "dark" ? "light" : "dark";
document.documentElement.setAttribute("data-theme", next);
localStorage.setItem("theme", next);
```

## 깜빡임 방지

페이지 로드 시 흰 화면이 잠깐 보이는 문제(FOUC)를 방지하려면, 스크립트를 `<head>`에 넣어 렌더링 전에 테마를 적용해야 한다. `defer` 없이 동기적으로 실행하는 것이 포인트다.

## OS 설정 감지

`prefers-color-scheme` 미디어 쿼리를 사용하면 사용자의 OS 설정을 자동으로 감지할 수 있다.

```javascript
window.matchMedia("(prefers-color-scheme: dark)").matches;
```

사용자가 명시적으로 선택하지 않았다면 OS 설정을 따르고, 한 번이라도 토글했다면 그 선택을 기억하는 방식이 가장 자연스럽다.
