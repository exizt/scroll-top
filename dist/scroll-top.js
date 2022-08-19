"use strict";
/*!
* exizt/scroll-to-top v3.0.5
*
*  License : MIT
*      Git : https://github.com/exizt/scroll-to-top
*   Author : EXIzT
*/
class shScrollToTop {
    constructor() {
        var _a;
        this.scrollBase = 100;
        this.ticking = false;
        this.displaying = false;
        this.arrowId = "shScrollTop";
        this.isDebug = false;
        // 화살표를 draw
        this.insertArrowHTML();
        // scroll 리스너를 등록
        window.addEventListener('scroll', (e) => {
            // requestAnimationFrame은 ie10 이상
            // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
            if (typeof requestAnimationFrame !== 'function')
                return;
            let last_known_scroll_position = this.getScrollY();
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.scrollEvent(last_known_scroll_position);
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
        (_a = document.getElementById(this.arrowId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            // https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
            // https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
            // behavior는 explorer 에서는 안 됨
            //window.scrollTo({top:0, behavior: "smooth"})
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
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        else {
            ///// 예전 브라우저의 경우
            // https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
            // https://stackoverflow.com/questions/42261524/how-to-window-scrollto-with-a-smooth-effect
            const smoothScroll = (h) => {
                let i = h || 0;
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
        let html = `<div class="st-scrolltop-wrap"><div id="${this.arrowId}" class="scrolltop" style="display:none">
		<div class="arrow"></div>
	  </div></div>`;
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
    }
    /**
     * scroll event 에서 fadeIn, fadeOut 설정
     * @param scroll_pos scroll_pos
     */
    scrollEvent(scroll_pos) {
        if (scroll_pos > this.scrollBase) {
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
     * (ie 9 이상)
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
     * @returns
     */
    getScrollY() {
        return window.scrollY;
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
     * fadeIn 을 구현하는 메소드
     * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
     * @param el
     * @param opacity
     * @param smooth
     * @param displayStyle
     */
    fadeIn(el, opacity = 1, smooth = true, displayStyle = 'block') {
        el.style.opacity = 0;
        el.style.display = displayStyle;
        if (smooth) {
            let c_opacity = 0;
            let request;
            const animation = () => {
                el.style.opacity = c_opacity += 0.02;
                if (c_opacity >= opacity) {
                    c_opacity = opacity;
                    cancelAnimationFrame(request);
                }
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
     * fadeOut 을 구현하는 메소드
     * @param el
     * @param smooth
     * @param displayStyle
     */
    fadeOut(el, smooth = true, displayStyle = 'none') {
        if (smooth) {
            let opacity = el.style.opacity;
            let request;
            const animation = () => {
                el.style.opacity = opacity -= 0.04;
                if (opacity <= 0) {
                    opacity = 0;
                    el.style.display = displayStyle;
                    cancelAnimationFrame(request);
                }
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
    ;
}
