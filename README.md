# ScrollTop JS
> 스크롤을 상위로 올리는 화살표를 화면 우측 하단에 만들어주는 스크립트.


# 데모

https://exizt.github.io/scroll-top/


# 사용법
1. 다운로드합니다. (Github: `Code` - `Download ZIP`)
2. `dist/scroll-top.mix.js` 파일을 이용합니다. 
```html
<script type="module" src="scroll-top.mix.js"></script>
```


# 커스텀
## 방법
### html, js에서 이용할 때
```html
<link rel="stylesheet" href="../dist/scroll-top.css">
<script type="module">
  import { ScrollTop } from '../dist/scroll-top.js';
  const scrolltop = new ScrollTop()
  scrolltop.load()
</script>
```

### npm, typescript에서 이용할 때
npm 패키지 설치
```shell
npm install --save-dev exizt.scroll-top
```

ts 파일에서
```ts
import { ScrollTop } from 'exizt.scroll-top'
const scrolltop = new ScrollTop()
scrolltop.load()
```

## 옵션
(예시)
```js
scrolltop.load({base:300})
```

옵션값
| 옵션명 | 유형 | 기본값 | 설명 | 
| --- | --- | --- | :--- |
| base | number | 100 | 화살표가 나타나는 최소 높이 |


# License

MIT License