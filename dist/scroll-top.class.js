define("scroll-top", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*!
    * exizt/scroll-to-top v4.0.6
    *
    *  License : MIT
    *      Git : https://github.com/exizt/scroll-to-top
    *   Author : EXIzT
    */
    class shScrollToTop {
        constructor() {
            this.scrollBase = 100;
            this.ticking = false;
            this.displaying = false;
            this.arrowId = "shScrollTop";
            this.isDebug = true;
            document.addEventListener("DOMContentLoaded", () => {
                this.load();
            });
        }
        /**
         * 화살표 생성 및 이벤트 바인딩 등
         */
        load() {
            var _a;
            // requestAnimationFrame은 ie10 이상
            // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
            if (typeof requestAnimationFrame !== 'function')
                return;
            // 화살표를 draw
            this.insertArrowHTML();
            // scroll 리스너를 등록
            window.addEventListener('scroll', (e) => {
                if (!this.ticking) {
                    // this.debugLog('scroll event')
                    window.requestAnimationFrame(() => {
                        this.scrollEvent(this.getScrollY());
                        this.ticking = false;
                    });
                    this.ticking = true;
                }
            });
            // 클릭 이벤트 바인딩
            (_a = document.getElementById(this.arrowId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                this.scrollToTop();
            });
        }
        /**
         * 상단으로 스크롤.
         */
        scrollToTop() {
            // https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge
            const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
            if (supportsNativeSmoothScroll) {
                ///// 모던 브라우저의 경우
                // https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
                // behavior는 explorer 에서는 안 됨(ie11 에서도 안 됨)
                this.debugLog('scrollToTop(). behavior smooth.');
                window.scroll({ top: 0, behavior: "smooth" });
            }
            else {
                ///// 예전 브라우저의 경우 (예: ie11)
                // https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
                // https://stackoverflow.com/questions/42261524/how-to-window-scrollto-with-a-smooth-effect
                this.debugLog('scrollToTop(). smoothScroll().');
                const smoothScroll = (h) => {
                    const i = h || 0;
                    if (i > 10) {
                        setTimeout(() => {
                            window.scrollTo(0, i);
                            smoothScroll(i * 0.9);
                        }, 10);
                    }
                    else {
                        window.scrollTo(0, 0);
                    }
                };
                smoothScroll(this.getScrollY());
            }
        }
        /**
         * 화살표를 표시하는 html 요소를 추가
         */
        insertArrowHTML() {
            var _a;
            const html = `<div class="st-scrolltop-wrap"><div id="${this.arrowId}" class="scrolltop" style="display:none">
		<div class="arrow"></div>
	  </div></div>`;
            (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
        }
        /**
         * scroll event 에서 fadeIn, fadeOut 설정
         * @param scrollY 스크롤 Y 좌표
         */
        scrollEvent(scrollY) {
            if (typeof scrollY === 'undefined') {
                this.debugLog(`scroll Y : ${scrollY}`);
            }
            if (scrollY > this.scrollBase) {
                if (this.displaying === false) {
                    const el = document.getElementById(this.arrowId);
                    this.fadeIn(el, 0.3);
                    this.displaying = true;
                }
            }
            else {
                if (this.displaying === true) {
                    const el = document.getElementById(this.arrowId);
                    this.fadeOut(el);
                    this.displaying = false;
                }
            }
        }
        /**
         * y 좌표를 구함
         * (ie 9 이상. ie에서는 window.pageYOffset을 이용함. 모던브라우저에서는 window.scrollY 또는 window.pageYOffset 이용)
         * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
         * @returns
         */
        getScrollY() {
            return window.pageYOffset;
            // return window.scrollY
        }
        /**
         * y 좌표를 구하는 메소드
         * https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
         * @returns number
         * @deprecated
         */
        getScrollY_Legacy() {
            const isSupportPageOffset = window.pageXOffset !== undefined;
            const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
            const y = isSupportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            return y;
        }
        /**
         * fadeIn(천천히 나타남)을 구현하는 메소드
         * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
         * @param el
         * @param _opacity
         * @param smooth
         * @param displayStyle
         */
        fadeIn(el, _opacity = 1, smooth = true, displayStyle = 'block') {
            if (!!!el)
                return;
            el.style.opacity = 0;
            el.style.display = displayStyle;
            if (smooth) {
                let opacity = 0;
                let request;
                const animation = () => {
                    opacity += 0.02;
                    if (opacity >= _opacity) {
                        opacity = _opacity;
                        cancelAnimationFrame(request);
                    }
                    el.style.opacity = opacity;
                };
                const rAf = () => {
                    request = requestAnimationFrame(rAf);
                    animation();
                };
                rAf();
            }
            else {
                el.style.opacity = 1;
            }
        }
        /**
         * fadeOut(천천히 없어짐)을 구현하는 메소드
         * @param el
         * @param smooth
         * @param displayStyle
         */
        fadeOut(el, smooth = true, displayStyle = 'none') {
            if (!!!el)
                return;
            if (smooth) {
                let opacity = el.style.opacity;
                let request;
                const animation = () => {
                    opacity -= 0.04;
                    if (opacity <= 0) {
                        opacity = 0;
                        el.style.display = displayStyle;
                        cancelAnimationFrame(request);
                    }
                    el.style.opacity = opacity;
                };
                const rAf = () => {
                    request = requestAnimationFrame(rAf);
                    animation();
                };
                rAf();
            }
            else {
                el.style.opacity = 0;
            }
        }
        /**
         * 디버깅 로그
         * @param msg 디버깅 로그
         */
        debugLog(msg) {
            if (this.isDebug)
                console.log('[ScrollTop] ', msg);
        }
    }
    exports.default = shScrollToTop;
});
