---
title: "웹 성능 최적화, 어디서부터 시작할까"
date: "2026-01-03"
description: "웹 성능 최적화의 기본 개념과 시작점을 정리합니다."
---

## 측정부터

최적화의 첫 번째 원칙은 **측정**이다. 감으로 하는 최적화는 위험하다. Chrome DevTools의 Lighthouse나 WebPageTest로 현재 상태를 먼저 파악해야 한다.

핵심 지표 세 가지:

- **LCP** (Largest Contentful Paint) — 가장 큰 콘텐츠가 보이는 시점
- **FID** (First Input Delay) — 첫 입력에 반응하는 시간
- **CLS** (Cumulative Layout Shift) — 레이아웃 밀림 정도

## 이미지 최적화

대부분의 웹사이트에서 가장 큰 용량을 차지하는 것은 이미지다.

- 적절한 포맷 사용 (WebP, AVIF)
- `width`, `height` 속성 명시로 CLS 방지
- `loading="lazy"`로 뷰포트 밖 이미지 지연 로드

```html
<img
  src="photo.webp"
  width="800"
  height="600"
  loading="lazy"
  alt="설명"
>
```

## CSS와 JS 최적화

렌더링을 차단하는 리소스를 최소화하는 것이 중요하다.

- **CSS** — 크리티컬 CSS를 인라인으로, 나머지는 비동기 로드
- **JS** — `defer` 또는 `async` 속성 활용
- 사용하지 않는 코드 제거 (tree shaking)

## 정적 사이트의 장점

이 블로그처럼 정적 사이트는 성능 면에서 태생적 이점이 있다. 서버 사이드 렌더링이 필요 없고, CDN에 올리면 전 세계 어디서든 빠르게 응답한다. 빌드 타임에 모든 HTML이 생성되어 있으니, TTFB(Time to First Byte)가 극도로 짧다.

> 가장 빠른 코드는 실행되지 않는 코드다.
