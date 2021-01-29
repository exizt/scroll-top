# scroll-up 개발 노트



* src/sh-scrollup.js

* src/css/sh-scrollup.css



위의 두 파일을 작업 한 후에 

npm run build => dist/sh-scrollup.min.js 생성

npm run babel-build => dist/sh-scrollup.js 생성



참고로 babel, webpack 을 위한 npm update 도 간간히 해줄 필요 있음. (크게 중요치는 않음)



# 특이점

중요한 것은 css 로 화살표 모양을 만들었다는 점이다. 그 외에는 그냥 동작을 위한 스크립트. 

하다보니 css 로 구현했는데, 기회가 되는대로 svg로 하면 더 간단해질 것도 같음... 



# 버전 업
* src/.js 파일에 버전 카운팅
* gitflow 로 push














