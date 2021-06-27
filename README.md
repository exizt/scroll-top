# scroll-to-top

스크롤을 상위로 올리는 화살표를 화면 우측 하단에 만들어주는 스크립트+CSS


# 라이선스

MIT License


# 사용법
## 최신 브라우저 
스크립트 로드
```html
<link rel="stylesheet" href="./dist/scroll-to-top.min.css">
<script src="./dist/scroll-to-top.min.js"></script>
```

다음 코드를 추가하여야 함.
```html
<script>
    document.addEventListener("DOMContentLoaded",()=>{
        let scrolltotop = new shScrollToTop()
    })
</script>
```


## IE11 등을 지원하려면 (ES5)
스크립트 로드
```html
<link rel="stylesheet" href="./dist/scroll-to-top.min.css">
<script src="./dist/scroll-to-top.es5.min.js"></script>
```

다음 코드를 추가하여야 함.
```html
<script>
    document.addEventListener("DOMContentLoaded", function(event) { 
        var scrolltotop = new shScrollToTop()
    });
</script>
```


# 데모

https://exizt.github.io/scroll-to-top/


# 브라우저 지원
* scroll-to-top(.min).js - ie11 미지원. 
* scroll-to-top.es5(.min).js - ie11 지원. es5로 빌드됨.

ie10, ie9 는 확인되지 않음