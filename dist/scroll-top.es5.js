"use strict";
/*!
* exizt/scroll-to-top v3.0.5
*
*  License : MIT
*      Git : https://github.com/exizt/scroll-to-top
*   Author : EXIzT
*/
var shScrollToTop = /** @class */ (function () {
    function shScrollToTop() {
        var _this = this;
        var _a;
        this.scrollBase = 100;
        this.ticking = false;
        this.displaying = false;
        this.arrowId = "shScrollTop";
        this.isDebug = false;
        // 화살표를 draw
        this.insertArrowHTML();
        // scroll 리스너를 등록
        window.addEventListener('scroll', function (e) {
            // requestAnimationFrame은 ie10 이상
            // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
            if (typeof requestAnimationFrame !== 'function')
                return;
            var last_known_scroll_position = _this.getScrollY();
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.scrollEvent(last_known_scroll_position);
                    _this.ticking = false;
                });
                _this.ticking = true;
            }
        });
        (_a = document.getElementById(this.arrowId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            // https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
            // https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
            // behavior는 explorer 에서는 안 됨
            //window.scrollTo({top:0, behavior: "smooth"})
            _this.scrollToTop();
        });
    }
    /**
     * 상단으로 스크롤.
     */
    shScrollToTop.prototype.scrollToTop = function () {
        // https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge
        var supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
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
            var smoothScroll_1 = function (h) {
                var i = h || 0;
                if (i > 10) {
                    setTimeout(function () {
                        window.scrollTo(0, i);
                        smoothScroll_1(i * 0.9);
                    }, 10);
                }
                else {
                    window.scrollTo(0, 0);
                }
            };
            smoothScroll_1(this.getScrollY());
        }
    };
    /**
     * 화살표를 표시하는 html 요소를 추가
     */
    shScrollToTop.prototype.insertArrowHTML = function () {
        var _a;
        var html = "<div class=\"st-scrolltop-wrap\"><div id=\"".concat(this.arrowId, "\" class=\"scrolltop\" style=\"display:none\">\n\t\t<div class=\"arrow\"></div>\n\t  </div></div>");
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
    };
    /**
     * scroll event 에서 fadeIn, fadeOut 설정
     * @param scroll_pos scroll_pos
     */
    shScrollToTop.prototype.scrollEvent = function (scroll_pos) {
        if (scroll_pos > this.scrollBase) {
            if (this.displaying === false) {
                var el = document.getElementById(this.arrowId);
                this.fadeIn(el, 0.3);
                this.displaying = true;
            }
        }
        else {
            if (this.displaying === true) {
                var el = document.getElementById(this.arrowId);
                this.fadeOut(el);
                this.displaying = false;
            }
        }
    };
    /**
     * y 좌표를 구함
     * (ie 9 이상)
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
     * @returns
     */
    shScrollToTop.prototype.getScrollY = function () {
        return window.scrollY;
    };
    /**
     * y 좌표를 구하는 메소드
     * https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
     * @returns number
     * @deprecated
     */
    shScrollToTop.prototype.getScrollY_Legacy = function () {
        var isSupportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        var y = isSupportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return y;
    };
    /**
     * fadeIn 을 구현하는 메소드
     * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
     * @param el
     * @param opacity
     * @param smooth
     * @param displayStyle
     */
    shScrollToTop.prototype.fadeIn = function (el, opacity, smooth, displayStyle) {
        if (opacity === void 0) { opacity = 1; }
        if (smooth === void 0) { smooth = true; }
        if (displayStyle === void 0) { displayStyle = 'block'; }
        el.style.opacity = 0;
        el.style.display = displayStyle;
        if (smooth) {
            var c_opacity_1 = 0;
            var request_1;
            var animation_1 = function () {
                el.style.opacity = c_opacity_1 += 0.02;
                if (c_opacity_1 >= opacity) {
                    c_opacity_1 = opacity;
                    cancelAnimationFrame(request_1);
                }
            };
            var rAf_1 = function () {
                request_1 = requestAnimationFrame(rAf_1);
                animation_1();
            };
            rAf_1();
        }
        else {
            el.style.opacity = 1;
        }
    };
    /**
     * fadeOut 을 구현하는 메소드
     * @param el
     * @param smooth
     * @param displayStyle
     */
    shScrollToTop.prototype.fadeOut = function (el, smooth, displayStyle) {
        if (smooth === void 0) { smooth = true; }
        if (displayStyle === void 0) { displayStyle = 'none'; }
        if (smooth) {
            var opacity_1 = el.style.opacity;
            var request_2;
            var animation_2 = function () {
                el.style.opacity = opacity_1 -= 0.04;
                if (opacity_1 <= 0) {
                    opacity_1 = 0;
                    el.style.display = displayStyle;
                    cancelAnimationFrame(request_2);
                }
            };
            var rAf_2 = function () {
                request_2 = requestAnimationFrame(rAf_2);
                animation_2();
            };
            rAf_2();
        }
        else {
            el.style.opacity = 0;
        }
    };
    ;
    return shScrollToTop;
}());
