# ScrollTop JS
> The script that creates an arrow in the bottom-right corner of the screen to scroll back to the top.

* Github: https://github.com/exizt/scroll-top/
* Demo : https://exizt.github.io/scroll-top/


## Download and Setup
1. Download and place the files in a project directory.
2. using `dist/scroll-top.mix.js` file.


## Usage
### Setup
html
```html
<script type="module" src="dist/scroll-top.mix.js"></script>
```


CDN
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/exizt/scroll-top@main/dist/scroll-top.mix.js"></script>
```



### Customize
#### Options
Option List
- `base`: Minimum height value for symbol visibility.
    - (type `number`, default `100`)
- `debug` : debug log..
    - (type `boolean`, default `false`)


(example)
```js
scrolltop.load({
  base:300
})
```


#### How to use
html, js
```html
<link rel="stylesheet" href="../dist/scroll-top.css">
<script type="module">
import { ScrollTop } from '../dist/scroll-top.js';

const scrolltop = new ScrollTop()
scrolltop.load({
    base:300
})
</script>
```


npm, TypeScript
```shell
npm install --save-dev exizt.scroll-top
```

```ts
import { ScrollTop } from 'exizt.scroll-top'

const scrolltop = new ScrollTop()
scrolltop.load({
    base:300
})
```


## License

MIT License