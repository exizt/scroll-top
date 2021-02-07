# 개발 관련 노트



아래의 두 파일을 작업 한 후에 
* src/scroll-to-top.js
* src/css/scroll-to-top.css


`npm run build` 커맨드 실행
* src/scroll-to-top.js => dist/scroll-to-top.min.js
* src/css/scroll-to-top.css => dist/scroll-to-top.min.css


참고로 babel, webpack 을 위한 npm update 도 간간히 해줄 필요 있음. (크게 중요치는 않음)

# 버전 변경시
1. js 파일의 상단 버전 변경
2. package.json 에서 버전 변경


# 특이점

중요한 것은 css 로 화살표 모양을 만들었다는 점이다. 그 외에는 그냥 동작을 위한 스크립트. 

하다보니 css 로 구현했는데, 기회가 되는대로 svg로 하면 더 간단해질 것도 같음... 














