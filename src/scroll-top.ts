/*!
* ScrollTop
*
* License : MIT
*     Git : https://github.com/exizt/scroll-top
*  Author : exizt
*/
export class ScrollTop {
    // 화살표가 나타나는 기준선
    private scrollBase = 100
    // 엘리먼트 Id
    private elementId = "shScrollTop"
//
    private displaying = false
    // 디버깅 여부
    private isDebug = false
    // (중복 방지 기능) 기능이 로드되었는지 여부 status.
    private hasLoadCalled = false
    // (중복 방지 기능) DOMContentLoaded 이벤트 바인딩 여부 status.
    private hasDomEventBinding = false
    // (중복 방지 기능) animationFrame 중복 방지 status.
    private isRunningScrollRaf = false
    // 이벤트 핸들러. add, remove를 위해 포인터를 지니기 위함.
    private scrollEventHandler!: EventListener

    constructor(){ }

    /**
     * 이벤트 바인딩
     */
    load(options?:IOptions): void {
        this.debug('load')
        if( !this.isSupported() ){
            this.debug('load')
            return
        }

        // 옵션값 지정
        this.setOptions(options)

        // load 함수가 호출되었다면 종료. 중복 로드 방지
        if (this.hasLoadCalled) return

        // domLoaded 이벤트 바인딩
        if(!this.hasDomEventBinding) {
            document.addEventListener("DOMContentLoaded",()=>{
                // 화살표를 draw
                this.appendSymbolToHTML()

                // scroll 리스너를 등록
                this.scrollEventHandler = () => this.scrollAnimate()
                window.addEventListener('scroll', this.scrollEventHandler)

                // 클릭 이벤트 바인딩
                document.getElementById(this.elementId)?.addEventListener('click',(e)=>{
                    this.scrollToTop()
                })
            })
            this.hasDomEventBinding = true
            this.hasLoadCalled = true
        } else {
            // scroll 리스너를 재등록
            window.addEventListener('scroll', this.scrollEventHandler)
            const el = document.getElementById(this.elementId)
            if(!!el){
                el.style.display = "block"
            }
            this.hasLoadCalled = true
        }
    }

    /**
     * 스크롤 이벤트 해제 등. 기능 정지.
     */
    unload(): void {
        // load 함수가 호출된 적이 없다면 unload 함수는 실행하지 않음
        if ( !this.hasLoadCalled ) return

        // 스크롤 이벤트에서 해제
        window.removeEventListener('scroll', this.scrollEventHandler)

        // load 함수 호출 상태를 false
        this.hasLoadCalled = false

        // 화살표시를 hidden 처리
        const el = document.getElementById(this.elementId)
        if (!!el) {
            el.style.opacity = "0"
            el.style.display = "none"
        }
        this.displaying = false
    }

    /**
     * 옵션값 지정
     * @param options 옵션값 JSON
     */
    private setOptions(options?:IOptions): void {
        if(!options) return
        if(options.base) {
            this.scrollBase = options.base
        }
        if(options.isDebug) {
            this.isDebug = options.isDebug
        }
    }

    /**
     * 스크롤 이벤트 바인딩
     */
    private scrollAnimate(){
        // 사용자가 스크롤 이벤트를 하는 데에는 문제가 없으나, scroll() 등으로 이동 중에
        // 무리가 발생할 수 있으므로, 이를 예방하기 위해 requestAnimationFrame을 사용한다.
        // requestAnimationFrame은 1/60s 정도로 동작된다는 듯.
        // 최근 브라우저에서는 사용하지 않아도 큰 문제는 없는 듯..
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
        // https://stackoverflow.com/a/44779316
        if (this.isRunningScrollRaf) {
            return
        }
        const run = ()=>{
            this.fadeInOutByScrollY(this.getScrollY())
            this.isRunningScrollRaf = false
        }
        this.isRunningScrollRaf = true
        // window.requestAnimationFrame
        requestAnimationFrame(run)
    }

    /**
     * 화살표를 표시하는 html 요소를 추가
     */
    private appendSymbolToHTML(){
        const html = `<div class="st-scrolltop-wrap"><div id="${this.elementId}" class="st-scrolltop">
        <div class="st-arrow"></div>
      </div></div>`
        document.querySelector("body")?.insertAdjacentHTML('beforeend', html)
    }

    /**
     * scroll event 에서 fadeIn, fadeOut 설정
     * @param scrollY 스크롤 Y 좌표
     */
    private fadeInOutByScrollY(scrollY: number) {
        if(typeof scrollY === 'undefined'){
            if(this.isDebug){
                this.debug('scroll Y is undefined')
            }
            return
        }
        if(this.isDebug){
            this.debug('scroll Y : ', scrollY)
        }
        if(scrollY > this.scrollBase) {
            if(this.displaying === false) {
                const el = document.getElementById(this.elementId)
                if(!!el){
                    el.style.opacity = "0.3"
                }
                this.displaying = true
            }
        } else {
            if(this.displaying === true) {
                const el = document.getElementById(this.elementId)
                if(!!el) {
                    el.style.opacity = "0"
                }
                this.displaying = false
            }
        }
    }

    /**
     * y 좌표를 구함
     * (ie 9 이상. ie에서는 window.pageYOffset을 이용함. 모던브라우저에서는 window.scrollY 또는 window.pageYOffset 이용)
     * 모던 브라우저 : window.scrollY
     * ie 11 : window.pageYOffset
     * ie 10 이하 : 복잡. document.documentElement.scrollTop, document.body.scrollTop 등
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
     * @returns number
     */
    private getScrollY(): number {
        // return window.pageYOffset
        return window.scrollY
    }

    /**
     * 지원 여부 확인
     * @returns {boolean} 지원 여부
     */
    private isSupported(): boolean {
        // https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
        // behavior는 explorer 에서는 안 됨(ie11 에서도 안 됨)
        const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

        // requestAnimationFrame은 ie10 이상
        // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
        // if(typeof requestAnimationFrame !== 'function') return
        const isRequestAnimationFrameSupported = (!!window.requestAnimationFrame)

        // scrollY 함수가 있는지 여부
        const isScrollYSupported = (!! window.scrollY )

        // return
        return isSmoothScrollSupported && isRequestAnimationFrameSupported && isScrollYSupported
    }

    /**
     * 상단으로 스크롤.
     */
    private scrollToTop() {
        ///// 모던 브라우저의 경우
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
        // behavior는 explorer 에서는 안 됨(ie11 에서도 안 됨)
        this.debug('scrollToTop(). behavior smooth.')
        window.scroll({top:0, behavior: "smooth"})
    }

    /**
     * 디버깅 로그
     * @param _args 디버깅 로그
     */
    private debug(..._args:any) {
        if (!this.isDebug) return
        const tag = '[ScrollTop]'
        const args = _args.map((x: any) => {
            if(typeof x === 'object'){
                return JSON.parse(JSON.stringify(x))
            } else {
                return x
            }
        })
        console.log(tag, ...args)
    }
}
interface IOptions {
    base: number;
    isDebug: boolean;
}
