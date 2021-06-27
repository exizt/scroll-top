"use strict";
/*!
* exizt/scroll-to-top v3.0.4
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
        this.drawShape();
        // scroll 리스너를 등록
        window.addEventListener('scroll', (e) => {
            if (typeof requestAnimationFrame !== 'function')
                return;
            let last_known_scroll_position = this.scrollY();
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
     * scroll 하는 메소드.
     */
    scrollToTop() {
        // https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge
        const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        if (supportsNativeSmoothScroll) {
            // https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
            // behavior는 explorer 에서는 안 됨(ie11 에서도 안 됨)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        else {
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
            smoothScroll(this.scrollY());
        }
    }
    /**
     * 도형을 draw
     */
    drawShape() {
        var _a;
        let html = `<div id="${this.arrowId}" class="sh-scrolltop" style="display:none"><div class="sh-arrow"></div></div>`;
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
    }
    /**
     * scroll event 에서 fadeIn, fadeOut 설정
     * @param int scroll_pos
     */
    scrollEvent(scroll_pos) {
        if (scroll_pos > this.scrollBase) {
            if (this.displaying === false) {
                let d = document.getElementById(this.arrowId);
                this.fadeIn(d, 0.3);
                this.displaying = true;
                //console.log("fadeIn");
            }
        }
        else {
            if (this.displaying === true) {
                let d = document.getElementById(this.arrowId);
                this.fadeOut(d);
                this.displaying = false;
                //console.log("fadeOut");
            }
        }
    }
    /**
     * y 좌표를 구하는 메소드
     * https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
     * @returns number
     */
    scrollY() {
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
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
