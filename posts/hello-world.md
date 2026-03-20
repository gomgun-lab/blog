---
title: "Hello World"
date: "2026-03-17"
description: "gomgun blog의 첫 번째 포스트입니다."
---

## 시작합니다

이 블로그는 React의 `renderToStaticMarkup`을 사용해 빌드 타임에 순수 HTML을 생성하는 커스텀 SSG입니다.

### 기술 스택

- **React** — 템플릿 엔진 (빌드 타임 전용)
- **Marked** — Markdown → HTML 변환
- **Caddy** — 정적 파일 서빙 + 자동 HTTPS
- **Docker** — Multi-stage build로 배포

### 코드 예시

```typescript
import { renderToStaticMarkup } from "react-dom/server";

const html = renderToStaticMarkup(<Layout>Hello</Layout>);
```

> 프레임워크 없이, 순수하게.
