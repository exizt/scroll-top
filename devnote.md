# Development Notes

가끔식 해줄 일
* `npm update` : 의존성 업데이트 및 `package-lock.json` 갱신.

<br><br>

## Issues
- 스크롤 내리다가 클릭시 조금만 올라가고 멈추는 버그 
    - => 해결 안 남. `window.scroll({top:0, behavior: "smooth"})` 구문에서 브라우저 버그인 듯함.


<br><br>


## Setup
Development environment setup
1. git clone: `git clone git@github.com:exizt/scroll-top.git`
2. `npm install`
    - `node_modules` 생성 및 타입스크립트 환경 구성됨.


<br><br>


## Build
- `npm run build` : tsc + webpack
    - `tsc` : ts -> js, d.ts
        - `src/scroll-top.ts` -> `dist/scroll-top.js`, `dist/scroll-top.d.ts`
    - `npm run webpack` : ts -> mix.js (including css)
        - `src/mix.js` -> `dist/scroll-top.mix.js`
    - `npm run make.ghpages` : github pages
        - `dist/` copy to `docs/dist`
        - `index.html` copy to `docs/index.html`
- `npm run webpack.dev` : ts -> mix.js (develop mode)
- using `live sass`
    - `src/scss/*.scss` -> `dist/*.css`

<br><br>


## Versioning
- rules: `{major}.{minor}.{release_all_count}`
    - `major` : Major changes. No compatibility with previous versions at all.
    - `minor` : Minor code changes.
    - `release_all_count` : Updates or builds due to changes in dependencies, environment modifications, or cumulative counting. Just minor cumulative counting.


버전 변경 시 같이 작업할 사항
- `package.json`에서 버전 변경
- 배포에서 `Release`


<br><br>

## Project Details


### dev dependencies configuration
```shell
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

### config files
- `tsconfig.json` : typescript 설정.
    - after using `npx tsc --init`, made modifications.
- `webpack.config.js` : webpack 설정.
- `packages.json` : npm 설정.
- `.vscode/settings.json`
    - live sass compile 설정


<br><br>


# Release notes
4.6.x
- bug fix


4.3.x
- 브라우저 레거시 지원 제거

