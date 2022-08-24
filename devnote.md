# 개발 관련 노트

가끔식 해줄 일
* `npm update` : 의존성 업데이트 및 `package-lock.json` 갱신.



<br><br>

# 빌드
- `npm run build` : tsc + webpack
  - `npm run tsc` : ts -> js, d.ts
  - `npm run webpack` : ts -> mix.js (css 포함)
  - `npm run dist.css` : copy css to `/dist`
  - `npm run make.ghpages` : 깃헙 페이지 관련
- `npm run webpack.dev` : ts -> mix.js (dev 모드)



<br><br>

# 버저닝 규칙
버저닝 규칙 (`'{major}.{minor}.{build}'`)
1. `major` : 큰 변경. 이전 버전과의 호환성이 아예 없음.
2. `minor` : ts 코드에 사소한 변경. 평범한 코드 변경.
3. `build` : (누적 카운팅) 의존성 변경, 환경 변경으로 인한 업데이트. 또는 빌드. 그냥 소소하게 누적 카운팅.


버전 변경 시 같이 작업할 사항
- `package.json`에서 버전 변경



<br><br>

# 프로젝트 셋팅
1. `npm install` : `node_modules` 생성 및 타입스크립트 환경 구성됨.



<br><br>

# 프로젝트 구성 과정에서의 히스토리
## npm 셋팅
```console
$ npm install --save-dev typescript
$ npm install --save-dev webpack webpack-cli ts-loader
$ npm install --save-dev style-loader css-loader
$ npm install --save-dev shx
```
- `typescript` : 타입스크립트 기능
- `webpack`, `webpack-cli` : 웹팩 및 웹팩 cli
- `ts-loader` : 웹팩에서 typescript를 로드하는 웹팩 로더
- `style-loader`, `css-loader` : css파일을 병합하기 위한 웹팩 로더
- `shx` : 파일 복사, 파일 삭제 등을 크로스플랫폼으로 스크립트 가능하게 해주는 기능

## 설정 파일
1. `tsconfig.json` : `npx tsc --init` 또는 파일을 복사해옴
2. `webpack.config.js` 복사 후 설정.



<br><br>

# ToDo
- 스크롤 내리다가 클릭시 조금만 올라가고 멈추는 버그 
  * => 해결 안 남. `window.scroll({top:0, behavior: "smooth"})` 구문에서 브라우저 버그인 듯함.



<br><br>

# Release note
4.3.x
- 브라우저 레거시 지원 제거