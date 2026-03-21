---
title: "마크다운 문법 테스트"
date: "2026-03-20"
description: "블로그에서 지원하는 마크다운 문법을 모두 테스트하는 포스트입니다."
---

## 제목 (Headings)

## H2 제목

### H3 제목

#### H4 제목

##### H5 제목

###### H6 제목

---

## 텍스트 서식 (Inline Text)

일반 텍스트 문단입니다. **굵은 텍스트**, *기울임 텍스트*, ***굵은 기울임***, ~~취소선~~을 지원합니다.

인라인 `코드`는 백틱으로 감쌉니다. 긴 인라인 코드: `const result = arr.filter(x => x > 0).map(x => x * 2)`

---

## 링크와 이미지 (Links & Images)

[외부 링크](https://example.com)

[제목 있는 링크](https://example.com "Example 사이트")

자동 링크: https://example.com

![대체 텍스트](https://via.placeholder.com/600x200/e1e1e1/555555?text=Placeholder+Image)

---

## 목록 (Lists)

### 순서 없는 목록

- 첫 번째 항목
- 두 번째 항목
  - 중첩 항목 A
  - 중첩 항목 B
    - 더 깊은 중첩
- 세 번째 항목

### 순서 있는 목록

1. 첫 번째 단계
2. 두 번째 단계
   1. 하위 단계 2-1
   2. 하위 단계 2-2
3. 세 번째 단계

### 체크리스트

- [x] 완료된 항목
- [x] 이것도 완료
- [ ] 아직 안 한 항목
- [ ] 이것도 미완료

---

## 인용문 (Blockquotes)

> 단일 인용문입니다.

> 여러 줄 인용문입니다.
> 줄바꿈을 해도 하나의 블록으로 처리됩니다.

> 중첩 인용문:
>
> > 안쪽 인용문입니다.
> > 이렇게 중첩할 수 있습니다.

> **굵은 텍스트**와 `인라인 코드`도 인용문 안에서 동작합니다.

---

## 코드 블록 (Code Blocks)

### TypeScript

```typescript
interface Post {
  title: string;
  date: string;
  description: string;
  slug: string;
  htmlContent: string;
}

function getAllPosts(): Post[] {
  const files = discoverMarkdownFiles();
  const posts = files.map(parsePost);
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
```

### CSS

```css
:root {
  --bg: #f5f5f0;
  --text: #111111;
}

[data-theme="dark"] {
  --bg: #1a1a18;
  --text: #e8e8e8;
}

body {
  background-color: var(--bg);
  color: var(--text);
}
```

### Bash

```bash
#!/bin/bash
echo "Hello, World!"
for i in {1..5}; do
  echo "Count: $i"
done
```

### JSON

```json
{
  "name": "gomgun-blog",
  "version": "1.0.0",
  "scripts": {
    "build": "tsx src/build.ts",
    "dev": "tsx --watch src/build.ts"
  }
}
```

### 언어 지정 없는 코드 블록

```
이것은 언어를 지정하지 않은
일반 코드 블록입니다.
들여쓰기와 공백이 그대로 유지됩니다.
```

---

## 테이블 (Tables)

| 이름 | 타입 | 설명 |
|------|------|------|
| title | `string` | 포스트 제목 |
| date | `string` | 작성 날짜 |
| description | `string` | 요약 설명 |
| slug | `string` | URL 경로 |

### 정렬

| 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
|:-----------|:----------:|------------:|
| 텍스트 | 텍스트 | 텍스트 |
| 긴 텍스트 예시 | 중앙 | 1,234 |
| ABC | DEF | 5,678 |

---

## 수평선 (Horizontal Rules)

위 내용

---

아래 내용

***

다른 스타일

___

또 다른 스타일

---

## 특수 케이스

### HTML 엔티티

&copy; 2026 &mdash; HTML 엔티티도 렌더링됩니다. &lt;div&gt; 태그는 이스케이프됩니다.

### 줄바꿈

첫 번째 줄
두 번째 줄 (끝에 공백 2개로 줄바꿈)

### 긴 텍스트

동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 이 문장은 긴 텍스트가 어떻게 렌더링되는지 확인하기 위한 것입니다. 컨테이너 너비에 맞게 자연스럽게 줄바꿈이 되어야 합니다.

### 코드 블록 안의 긴 줄

```
이것은 매우 긴 한 줄의 코드입니다. 가로 스크롤이 필요한 경우를 테스트합니다. overflow-x: auto가 제대로 동작하는지 확인해야 합니다. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```
